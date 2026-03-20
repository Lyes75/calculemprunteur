import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const sb = getSupabaseAdmin();

    sb.from("simulations")
      .insert({
        session_id: body.session_id || null,
        capital: body.capital ? Number(body.capital) : 0,
        duree_restante: Number(body.duree_restante ?? body.duree ?? 0),
        banque_slug: body.banque_slug || null,
        taux_actuel: body.taux_actuel ? Number(body.taux_actuel) : null,
        tranche_age: body.tranche_age ?? body.age ?? null,
        fumeur: body.fumeur ?? false,
        profession_risque: body.profession_risque ?? false,
        economie_estimee: body.economie_estimee ? Number(body.economie_estimee) : null,
        taux_delegation_estime: body.taux_delegation_estime ? Number(body.taux_delegation_estime) : null,
        source_page: body.source_page || "/",
        device_type: body.device_type || null,
        ip_address: ip,
        has_converted: false,
      })
      .then(({ error }) => {
        if (error) console.error("Simulation insert error:", error);
      });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Simulations API error:", err);
    return NextResponse.json({ success: true });
  }
}
