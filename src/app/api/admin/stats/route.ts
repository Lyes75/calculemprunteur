import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { verifyAdmin } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Verify admin authentication
    const isAdmin = await verifyAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Non autorise.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const period = searchParams.get('period') || '30d';

    // Calculate date range
    const now = new Date();
    let daysBack = 30;
    if (period === '7d') daysBack = 7;
    else if (period === '90d') daysBack = 90;

    const dateFrom = new Date(now.getTime() - daysBack * 24 * 60 * 60 * 1000);
    const dateFromISO = dateFrom.toISOString();

    const sb = getSupabaseAdmin();

    // Fetch all data in parallel
    const [
      simulationsRes,
      leadsRes,
      clicksRes,
    ] = await Promise.all([
      sb
        .from('simulations')
        .select('*')
        .gte('created_at', dateFromISO)
        .order('created_at', { ascending: true }),
      sb
        .from('leads')
        .select('*')
        .gte('created_at', dateFromISO)
        .order('created_at', { ascending: true }),
      sb
        .from('affiliate_clicks')
        .select('*')
        .gte('created_at', dateFromISO)
        .order('created_at', { ascending: true }),
    ]);

    const simulations = simulationsRes.data || [];
    const leads = leadsRes.data || [];
    const clicks = clicksRes.data || [];

    // ---- KPIs ----
    const totalSimulations = simulations.length;
    const totalLeads = leads.length;
    const totalClicks = clicks.length;

    // Conversion rate: leads / simulations
    const conversionSimToLead =
      totalSimulations > 0
        ? Math.round((totalLeads / totalSimulations) * 10000) / 100
        : 0;

    // Click-through rate: clicks / simulations
    const conversionSimToClick =
      totalSimulations > 0
        ? Math.round((totalClicks / totalSimulations) * 10000) / 100
        : 0;

    // Average economy
    const economiesWithValue = leads.filter(
      (l: Record<string, unknown>) => l.economie_estimee && Number(l.economie_estimee) > 0
    );
    const avgEconomy =
      economiesWithValue.length > 0
        ? Math.round(
            economiesWithValue.reduce(
              (sum: number, l: Record<string, unknown>) => sum + Number(l.economie_estimee),
              0
            ) / economiesWithValue.length
          )
        : 0;

    // Average capital
    const avgCapital =
      leads.length > 0
        ? Math.round(
            leads.reduce(
              (sum: number, l: Record<string, unknown>) => sum + Number(l.capital || 0),
              0
            ) / leads.length
          )
        : 0;

    // ---- Leads by status ----
    const leadsByStatus: Record<string, number> = {};
    for (const lead of leads) {
      const s = (lead as Record<string, unknown>).status as string || 'nouveau';
      leadsByStatus[s] = (leadsByStatus[s] || 0) + 1;
    }

    // ---- Leads by banque ----
    const leadsByBanque: Record<string, number> = {};
    for (const lead of leads) {
      const b = (lead as Record<string, unknown>).banque_slug as string;
      if (b) {
        leadsByBanque[b] = (leadsByBanque[b] || 0) + 1;
      }
    }

    // ---- Leads by source_form ----
    const leadsBySourceForm: Record<string, number> = {};
    for (const lead of leads) {
      const sf = (lead as Record<string, unknown>).source_form as string || 'direct';
      leadsBySourceForm[sf] = (leadsBySourceForm[sf] || 0) + 1;
    }

    // ---- Leads by day ----
    const leadsByDay: Record<string, number> = {};
    for (const lead of leads) {
      const day = ((lead as Record<string, unknown>).created_at as string).slice(0, 10);
      leadsByDay[day] = (leadsByDay[day] || 0) + 1;
    }

    // ---- Clicks by insurer ----
    const clicksByInsurer: Record<string, number> = {};
    for (const click of clicks) {
      const ins = (click as Record<string, unknown>).insurer_slug as string || 'unknown';
      clicksByInsurer[ins] = (clicksByInsurer[ins] || 0) + 1;
    }

    // ---- Clicks by day ----
    const clicksByDay: Record<string, number> = {};
    for (const click of clicks) {
      const day = ((click as Record<string, unknown>).created_at as string).slice(0, 10);
      clicksByDay[day] = (clicksByDay[day] || 0) + 1;
    }

    // ---- Simulations by day ----
    const simulationsByDay: Record<string, number> = {};
    for (const sim of simulations) {
      const day = ((sim as Record<string, unknown>).created_at as string).slice(0, 10);
      simulationsByDay[day] = (simulationsByDay[day] || 0) + 1;
    }

    return NextResponse.json({
      period,
      date_from: dateFromISO,
      date_to: now.toISOString(),
      kpis: {
        total_simulations: totalSimulations,
        total_leads: totalLeads,
        total_clicks: totalClicks,
        conversion_sim_to_lead: conversionSimToLead,
        conversion_sim_to_click: conversionSimToClick,
        avg_economy: avgEconomy,
        avg_capital: avgCapital,
      },
      leads_by_status: leadsByStatus,
      leads_by_banque: leadsByBanque,
      leads_by_source_form: leadsBySourceForm,
      leads_by_day: leadsByDay,
      clicks_by_insurer: clicksByInsurer,
      clicks_by_day: clicksByDay,
      simulations_by_day: simulationsByDay,
    });
  } catch (err) {
    console.error('Admin stats API error:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
