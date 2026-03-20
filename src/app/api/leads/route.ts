import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer plus tard." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Accept both field naming conventions
    const prenom = body.prenom;
    const email = body.email;
    const telephone = body.telephone;
    const capital = Number(body.capital);
    const dureeRestante = Number(body.duree_restante ?? body.duree);
    const banqueSlug = body.banque_slug;
    const banqueNom = body.banque_nom;
    const tauxActuel = body.taux_actuel ? Number(body.taux_actuel) : null;
    const trancheAge = body.tranche_age ?? body.age;
    const fumeur = body.fumeur ?? body.profession_risque === undefined ? false : body.fumeur;
    const professionRisque = body.profession_risque ?? false;
    const economieEstimee = body.economie_estimee ? Number(body.economie_estimee) : null;
    const tauxDelegationEstime = body.taux_delegation_estime ? Number(body.taux_delegation_estime) : null;
    const coutMensuelActuel = body.cout_mensuel_actuel ? Number(body.cout_mensuel_actuel) : null;
    const coutMensuelDelegation = body.cout_mensuel_delegation ? Number(body.cout_mensuel_delegation) : null;
    const coutTotalActuel = body.cout_total_actuel ? Number(body.cout_total_actuel) : null;
    const coutTotalDelegation = body.cout_total_delegation ? Number(body.cout_total_delegation) : null;
    const sourceForm = body.source_form ?? "devis";
    const consentMarketing = body.consent_marketing ?? false;
    const sessionId = body.session_id;
    const deviceType = body.device_type;
    const userAgent = body.user_agent;
    const nomComplet = body.nom_complet;
    const adressePostale = body.adresse_postale;
    const numeroPret = body.numero_pret;
    const utmSource = body.utm_source;
    const utmMedium = body.utm_medium;
    const utmCampaign = body.utm_campaign;

    // Validation
    if (!prenom || typeof prenom !== "string" || prenom.trim().length === 0) {
      // For letter source, nom_complet can serve as prenom
      if (sourceForm === "lettre" && nomComplet) {
        // OK, we'll use nomComplet
      } else {
        return NextResponse.json(
          { error: "Le prénom est requis." },
          { status: 400 }
        );
      }
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    if (isNaN(capital) || capital < 30000 || capital > 800000) {
      return NextResponse.json(
        { error: "Le capital doit être entre 30 000 et 800 000 €." },
        { status: 400 }
      );
    }

    if (isNaN(dureeRestante) || dureeRestante < 3 || dureeRestante > 25) {
      return NextResponse.json(
        { error: "La durée doit être entre 3 et 25 ans." },
        { status: 400 }
      );
    }

    const sb = getSupabaseAdmin();

    const insertData: Record<string, unknown> = {
      prenom: (prenom || nomComplet || "").trim(),
      email: email.trim().toLowerCase(),
      telephone: telephone || null,
      capital,
      duree_restante: dureeRestante,
      banque_slug: banqueSlug || null,
      banque_nom: banqueNom || null,
      taux_actuel: tauxActuel,
      tranche_age: trancheAge || null,
      fumeur: fumeur || false,
      profession_risque: professionRisque || false,
      economie_estimee: economieEstimee,
      taux_delegation_estime: tauxDelegationEstime,
      cout_mensuel_actuel: coutMensuelActuel,
      cout_mensuel_delegation: coutMensuelDelegation,
      cout_total_actuel: coutTotalActuel,
      cout_total_delegation: coutTotalDelegation,
      source_form: sourceForm,
      consent_marketing: consentMarketing,
      consent_date: consentMarketing ? new Date().toISOString() : null,
      session_id: sessionId || null,
      device_type: deviceType || null,
      user_agent: userAgent || null,
      ip_address: ip,
      status: "new",
      nom_complet: nomComplet || null,
      adresse_postale: adressePostale || null,
      numero_pret: numeroPret || null,
      utm_source: utmSource || null,
      utm_medium: utmMedium || null,
      utm_campaign: utmCampaign || null,
      source_page: body.source_page || "/",
    };

    const { data, error } = await sb
      .from("leads")
      .insert(insertData)
      .select("id")
      .single();

    if (error) {
      console.error("Lead insert error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement.", detail: error.message },
        { status: 500 }
      );
    }

    // Mark related simulations as converted
    if (sessionId) {
      try {
        await sb
          .from("simulations")
          .update({ has_converted: true, lead_id: data.id })
          .eq("session_id", sessionId);
      } catch {
        // Ignore errors
      }
    }

    return NextResponse.json({ success: true, leadId: data.id });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
