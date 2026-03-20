import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { verifyAdmin } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    // Verify admin authentication
    const isAdmin = await verifyAdmin(req);
    if (!isAdmin) {
      return NextResponse.json({ error: 'Non autorise.' }, { status: 401 });
    }

    const body = await req.json();
    const { action, lead_id, status, note } = body;

    if (!action) {
      return NextResponse.json(
        { error: 'Action requise.' },
        { status: 400 }
      );
    }

    const sb = getSupabaseAdmin();

    switch (action) {
      case 'update_status': {
        if (!lead_id || !status) {
          return NextResponse.json(
            { error: 'lead_id et status requis.' },
            { status: 400 }
          );
        }

        const validStatuses = ['nouveau', 'contacte', 'en_cours', 'converti', 'perdu'];
        if (!validStatuses.includes(status)) {
          return NextResponse.json(
            { error: 'Statut non valide.' },
            { status: 400 }
          );
        }

        const { error } = await sb
          .from('leads')
          .update({ status })
          .eq('id', lead_id);

        if (error) {
          console.error('Update status error:', error);
          return NextResponse.json(
            { error: 'Erreur lors de la mise a jour.' },
            { status: 500 }
          );
        }

        return NextResponse.json({ success: true });
      }

      case 'add_note': {
        if (!lead_id || !note) {
          return NextResponse.json(
            { error: 'lead_id et note requis.' },
            { status: 400 }
          );
        }

        // Fetch existing notes and append
        const { data: existing, error: fetchError } = await sb
          .from('leads')
          .select('notes')
          .eq('id', lead_id)
          .single();

        if (fetchError) {
          console.error('Fetch lead error:', fetchError);
          return NextResponse.json(
            { error: 'Lead introuvable.' },
            { status: 404 }
          );
        }

        const timestamp = new Date().toLocaleString('fr-FR');
        const newNote = `[${timestamp}] ${note}`;
        const updatedNotes = existing?.notes
          ? `${existing.notes}\n${newNote}`
          : newNote;

        const { error } = await sb
          .from('leads')
          .update({ notes: updatedNotes })
          .eq('id', lead_id);

        if (error) {
          console.error('Add note error:', error);
          return NextResponse.json(
            { error: 'Erreur lors de l\'ajout de la note.' },
            { status: 500 }
          );
        }

        return NextResponse.json({ success: true });
      }

      case 'delete_lead': {
        if (!lead_id) {
          return NextResponse.json(
            { error: 'lead_id requis.' },
            { status: 400 }
          );
        }

        const { error } = await sb
          .from('leads')
          .delete()
          .eq('id', lead_id);

        if (error) {
          console.error('Delete lead error:', error);
          return NextResponse.json(
            { error: 'Erreur lors de la suppression.' },
            { status: 500 }
          );
        }

        return NextResponse.json({ success: true });
      }

      case 'export_csv': {
        // Fetch all leads
        const { data: leads, error } = await sb
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Export CSV error:', error);
          return NextResponse.json(
            { error: 'Erreur lors de l\'export.' },
            { status: 500 }
          );
        }

        if (!leads || leads.length === 0) {
          return NextResponse.json(
            { error: 'Aucun lead a exporter.' },
            { status: 404 }
          );
        }

        // Generate CSV
        const headers = [
          'ID',
          'Date',
          'Prenom',
          'Email',
          'Telephone',
          'Capital',
          'Duree',
          'Age',
          'Fumeur',
          'Taux Actuel',
          'Economie Estimee',
          'Mensualite Actuelle',
          'Mensualite Optimisee',
          'Statut',
          'Source',
          'Banque',
          'UTM Source',
          'UTM Medium',
          'UTM Campaign',
          'Device',
          'Notes',
        ];

        const csvRows = [headers.join(',')];

        for (const lead of leads) {
          const row = [
            lead.id,
            lead.created_at,
            escapeCsv(lead.prenom),
            escapeCsv(lead.email),
            escapeCsv(lead.telephone || ''),
            lead.capital,
            lead.duree,
            lead.age || '',
            lead.fumeur ? 'Oui' : 'Non',
            lead.taux_actuel || '',
            lead.economie_estimee || '',
            lead.mensualite_actuelle || '',
            lead.mensualite_optimisee || '',
            lead.status,
            lead.source_form || '',
            lead.banque_slug || '',
            lead.utm_source || '',
            lead.utm_medium || '',
            lead.utm_campaign || '',
            lead.device_type || '',
            escapeCsv(lead.notes || ''),
          ];
          csvRows.push(row.join(','));
        }

        const csv = csvRows.join('\n');

        return NextResponse.json({ success: true, csv });
      }

      default:
        return NextResponse.json(
          { error: 'Action non reconnue.' },
          { status: 400 }
        );
    }
  } catch (err) {
    console.error('Admin actions API error:', err);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

/**
 * Escape a value for CSV output.
 */
function escapeCsv(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
