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

    const table = searchParams.get('table') || 'leads';
    const page = Math.max(1, Number(searchParams.get('page')) || 1);
    const limit = Math.min(100, Math.max(1, Number(searchParams.get('limit')) || 20));
    const sort = searchParams.get('sort') || 'created_at';
    const order = searchParams.get('order') === 'asc' ? true : false; // ascending if 'asc'
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const sourceForm = searchParams.get('source_form');
    const banqueSlug = searchParams.get('banque_slug');
    const dateFrom = searchParams.get('date_from');
    const dateTo = searchParams.get('date_to');

    // Validate table name to prevent injection
    const allowedTables = ['leads', 'affiliate_clicks', 'simulations', 'email_events'];
    if (!allowedTables.includes(table)) {
      return NextResponse.json(
        { error: 'Table non valide.' },
        { status: 400 }
      );
    }

    const sb = getSupabaseAdmin();

    const offset = (page - 1) * limit;

    // Build query
    let query = sb.from(table).select('*', { count: 'exact' });

    // Apply filters based on table
    if (table === 'leads') {
      if (status) {
        query = query.eq('status', status);
      }
      if (sourceForm) {
        query = query.eq('source_form', sourceForm);
      }
      if (banqueSlug) {
        query = query.eq('banque_slug', banqueSlug);
      }
      if (search) {
        query = query.or(
          `prenom.ilike.%${search}%,email.ilike.%${search}%,telephone.ilike.%${search}%`
        );
      }
    }

    if (table === 'affiliate_clicks') {
      if (search) {
        query = query.or(
          `insurer_slug.ilike.%${search}%,insurer_name.ilike.%${search}%`
        );
      }
    }

    if (table === 'simulations') {
      if (search) {
        query = query.or(`session_id.ilike.%${search}%`);
      }
    }

    // Date range filters (applies to all tables)
    if (dateFrom) {
      query = query.gte('created_at', dateFrom);
    }
    if (dateTo) {
      // Add end-of-day to include the full day
      query = query.lte('created_at', dateTo + 'T23:59:59.999Z');
    }

    // Apply sorting and pagination
    query = query
      .order(sort, { ascending: order })
      .range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Admin data query error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de la requete.' },
        { status: 500 }
      );
    }

    const total = count || 0;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: data || [],
      total,
      page,
      totalPages,
    });
  } catch (err) {
    console.error('Admin data API error:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
