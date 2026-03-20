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

    const userAgent = req.headers.get("user-agent") || null;

    const sb = getSupabaseAdmin();

    sb.from("affiliate_clicks")
      .insert({
        session_id: body.session_id || null,
        insurer_slug: body.insurer_slug || "unknown",
        insurer_name: body.insurer_name || null,
        affiliate_platform: body.affiliate_platform || "awin",
        affiliate_url: body.affiliate_url || body.click_url || null,
        source_page: body.source_page || "/",
        source_component: body.source_component || "top3",
        capital: body.capital ? Number(body.capital) : null,
        banque_slug: body.banque_slug || null,
        economie_estimee: body.economie_estimee ? Number(body.economie_estimee) : null,
        tranche_age: body.tranche_age || null,
        device_type: body.device_type || null,
        ip_address: ip,
        user_agent: userAgent,
      })
      .then(({ error }) => {
        if (error) console.error("Click tracking insert error:", error);
      });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Track-click API error:", err);
    return NextResponse.json({ success: true });
  }
}
