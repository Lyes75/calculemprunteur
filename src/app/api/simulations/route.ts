import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      session_id,
      capital,
      duree,
      age,
      fumeur,
      taux_actuel,
      cout_actuel,
      cout_optimise,
      economie,
      mensualite_actuelle,
      mensualite_optimisee,
      source_form,
      device_type,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const sb = getSupabaseAdmin();

    // Fire-and-forget: insert simulation record
    sb.from('simulations')
      .insert({
        session_id: session_id || null,
        capital: capital ? Number(capital) : 0,
        duree: duree ? Number(duree) : 0,
        age: age ? Number(age) : null,
        fumeur: fumeur || false,
        taux_actuel: taux_actuel ? Number(taux_actuel) : null,
        cout_actuel: cout_actuel ? Number(cout_actuel) : null,
        cout_optimise: cout_optimise ? Number(cout_optimise) : null,
        economie: economie ? Number(economie) : null,
        mensualite_actuelle: mensualite_actuelle ? Number(mensualite_actuelle) : null,
        mensualite_optimisee: mensualite_optimisee ? Number(mensualite_optimisee) : null,
        source_form: source_form || null,
        device_type: device_type || null,
        ip_address: ip,
        has_converted: false,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
      })
      .then(({ error }) => {
        if (error) console.error('Simulation insert error:', error);
      });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Simulations API error:', err);
    // Always return success
    return NextResponse.json({ success: true });
  }
}
