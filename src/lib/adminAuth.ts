import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from './supabase';

/**
 * Verifies that the request has a valid admin session token.
 * Checks the 'admin_token' cookie against the admin_sessions table.
 */
export async function verifyAdmin(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get('admin_token')?.value;
  if (!token) return false;

  const sb = getSupabaseAdmin();
  const { data } = await sb
    .from('admin_sessions')
    .select('id')
    .eq('token', token)
    .gt('expires_at', new Date().toISOString())
    .single();

  return !!data;
}
