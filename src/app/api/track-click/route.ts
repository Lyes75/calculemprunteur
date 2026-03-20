import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      session_id,
      insurer_slug,
      insurer_name,
      click_url,
      source_page,
      device_type,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const userAgent = req.headers.get('user-agent') || null;

    const sb = getSupabaseAdmin();

    // Fire-and-forget: insert click tracking, don't block on result
    sb.from('affiliate_clicks')
      .insert({
        session_id: session_id || null,
        insurer_slug: insurer_slug || 'unknown',
        insurer_name: insurer_name || null,
        click_url: click_url || null,
        source_page: source_page || null,
        device_type: device_type || null,
        ip_address: ip,
        user_agent: userAgent,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
      })
      .then(({ error }) => {
        if (error) console.error('Click tracking insert error:', error);
      });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Track-click API error:', err);
    // Always return success - fire-and-forget pattern
    return NextResponse.json({ success: true });
  }
}
