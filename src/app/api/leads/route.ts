import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// Simple in-memory rate limiter: IP -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove old entries outside the window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  rateLimitMap.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de requetes. Veuillez reessayer plus tard.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    const {
      prenom,
      email,
      telephone,
      capital,
      duree,
      age,
      fumeur,
      taux_actuel,
      economie_estimee,
      mensualite_actuelle,
      mensualite_optimisee,
      session_id,
      source_form,
      utm_source,
      utm_medium,
      utm_campaign,
      referrer,
      device_type,
      banque_slug,
    } = body;

    // Validation
    if (!prenom || typeof prenom !== 'string' || prenom.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le prenom est requis.' },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide.' },
        { status: 400 }
      );
    }

    const capitalNum = Number(capital);
    if (isNaN(capitalNum) || capitalNum < 30000 || capitalNum > 800000) {
      return NextResponse.json(
        { error: 'Le capital doit etre entre 30 000 et 800 000 EUR.' },
        { status: 400 }
      );
    }

    const dureeNum = Number(duree);
    if (isNaN(dureeNum) || dureeNum < 3 || dureeNum > 25) {
      return NextResponse.json(
        { error: 'La duree doit etre entre 3 et 25 ans.' },
        { status: 400 }
      );
    }

    const sb = getSupabaseAdmin();

    // Insert lead
    const { data, error } = await sb
      .from('leads')
      .insert({
        prenom: prenom.trim(),
        email: email.trim().toLowerCase(),
        telephone: telephone || null,
        capital: capitalNum,
        duree: dureeNum,
        age: age ? Number(age) : null,
        fumeur: fumeur || false,
        taux_actuel: taux_actuel ? Number(taux_actuel) : null,
        economie_estimee: economie_estimee ? Number(economie_estimee) : null,
        mensualite_actuelle: mensualite_actuelle ? Number(mensualite_actuelle) : null,
        mensualite_optimisee: mensualite_optimisee ? Number(mensualite_optimisee) : null,
        session_id: session_id || null,
        source_form: source_form || null,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        referrer: referrer || null,
        device_type: device_type || null,
        ip_address: ip,
        banque_slug: banque_slug || null,
        status: 'nouveau',
      })
      .select('id')
      .single();

    if (error) {
      console.error('Lead insert error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement.' },
        { status: 500 }
      );
    }

    // If session_id provided, mark related simulations as converted
    if (session_id) {
      await sb
        .from('simulations')
        .update({ has_converted: true })
        .eq('session_id', session_id);
    }

    return NextResponse.json({ success: true, leadId: data.id });
  } catch (err) {
    console.error('Leads API error:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
