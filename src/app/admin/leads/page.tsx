'use client';

import { useEffect, useState, useCallback } from 'react';

interface Lead {
  id: string;
  created_at: string;
  prenom: string;
  email: string;
  telephone: string;
  capital: number;
  duree: number;
  age: number;
  fumeur: boolean;
  taux_actuel: number;
  economie_estimee: number;
  mensualite_actuelle: number;
  mensualite_optimisee: number;
  status: string;
  source_form: string;
  banque_slug: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  device_type: string;
  notes: string;
  session_id: string;
}

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const statusOptions = [
  { value: '', label: 'Tous les statuts' },
  { value: 'nouveau', label: 'Nouveau' },
  { value: 'contacte', label: 'Contacte' },
  { value: 'en_cours', label: 'En cours' },
  { value: 'converti', label: 'Converti' },
  { value: 'perdu', label: 'Perdu' },
];

const statusBadges: Record<string, { label: string; color: string }> = {
  nouveau: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
  contacte: { label: 'Contacte', color: 'bg-yellow-100 text-yellow-700' },
  en_cours: { label: 'En cours', color: 'bg-orange-100 text-orange-700' },
  converti: { label: 'Converti', color: 'bg-green-100 text-green-700' },
  perdu: { label: 'Perdu', color: 'bg-red-100 text-red-700' },
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [banqueFilter, setBanqueFilter] = useState('');

  // Detail panel
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [detailStatus, setDetailStatus] = useState('');
  const [detailNote, setDetailNote] = useState('');
  const [saving, setSaving] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        table: 'leads',
        page: String(page),
        limit: '20',
        sort: 'created_at',
        order: 'desc',
      });
      if (search) params.set('search', search);
      if (statusFilter) params.set('status', statusFilter);
      if (sourceFilter) params.set('source_form', sourceFilter);
      if (banqueFilter) params.set('banque_slug', banqueFilter);

      const res = await fetch(`/api/admin/data?${params}`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data.data || []);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error('Fetch leads error:', err);
    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter, sourceFilter, banqueFilter]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, statusFilter, sourceFilter, banqueFilter]);

  function openDetail(lead: Lead) {
    setSelectedLead(lead);
    setDetailStatus(lead.status);
    setDetailNote('');
    setActionMessage('');
  }

  function closeDetail() {
    setSelectedLead(null);
    setDetailNote('');
    setActionMessage('');
  }

  async function handleUpdateStatus() {
    if (!selectedLead) return;
    setSaving(true);
    setActionMessage('');
    try {
      const res = await fetch('/api/admin/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_status',
          lead_id: selectedLead.id,
          status: detailStatus,
        }),
      });
      if (res.ok) {
        setActionMessage('Statut mis a jour.');
        // Update local data
        setLeads((prev) =>
          prev.map((l) =>
            l.id === selectedLead.id ? { ...l, status: detailStatus } : l
          )
        );
        setSelectedLead({ ...selectedLead, status: detailStatus });
      } else {
        const data = await res.json();
        setActionMessage(data.error || 'Erreur');
      }
    } catch {
      setActionMessage('Erreur de connexion.');
    } finally {
      setSaving(false);
    }
  }

  async function handleAddNote() {
    if (!selectedLead || !detailNote.trim()) return;
    setSaving(true);
    setActionMessage('');
    try {
      const res = await fetch('/api/admin/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_note',
          lead_id: selectedLead.id,
          note: detailNote,
        }),
      });
      if (res.ok) {
        setActionMessage('Note ajoutee.');
        const timestamp = new Date().toLocaleString('fr-FR');
        const newNoteText = `[${timestamp}] ${detailNote}`;
        const updatedNotes = selectedLead.notes
          ? `${selectedLead.notes}\n${newNoteText}`
          : newNoteText;
        setSelectedLead({ ...selectedLead, notes: updatedNotes });
        setLeads((prev) =>
          prev.map((l) =>
            l.id === selectedLead.id ? { ...l, notes: updatedNotes } : l
          )
        );
        setDetailNote('');
      } else {
        const data = await res.json();
        setActionMessage(data.error || 'Erreur');
      }
    } catch {
      setActionMessage('Erreur de connexion.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!selectedLead) return;
    if (!confirm('Supprimer ce lead definitivement ?')) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete_lead',
          lead_id: selectedLead.id,
        }),
      });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== selectedLead.id));
        setTotal((prev) => prev - 1);
        closeDetail();
      }
    } catch {
      setActionMessage('Erreur de connexion.');
    } finally {
      setSaving(false);
    }
  }

  async function handleExportCSV() {
    try {
      const res = await fetch('/api/admin/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'export_csv' }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.csv) {
          const blob = new Blob([data.csv], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `leads_export_${new Date().toISOString().slice(0, 10)}.csv`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }
    } catch (err) {
      console.error('Export error:', err);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <button
          onClick={handleExportCSV}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Exporter CSV
        </button>
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Rechercher (prenom, email, tel)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Source (ex: calculateur)"
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Banque (slug)"
            value={banqueFilter}
            onChange={(e) => setBanqueFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Prenom
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Tel
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Banque
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Capital
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Economie
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Source
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Statut
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    {Array.from({ length: 10 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={10}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Aucun lead trouve
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const badge = statusBadges[lead.status] || {
                    label: lead.status,
                    color: 'bg-gray-100 text-gray-700',
                  };
                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => openDetail(lead)}
                    >
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {formatDate(lead.created_at)}
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium">
                        {lead.prenom}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{lead.email}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {lead.telephone || '-'}
                      </td>
                      <td className="px-4 py-3 text-gray-600 capitalize">
                        {(lead.banque_slug || '-').replace(/-/g, ' ')}
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium whitespace-nowrap">
                        {formatCurrency(lead.capital || 0)}
                      </td>
                      <td className="px-4 py-3 text-green-700 font-medium whitespace-nowrap">
                        {formatCurrency(lead.economie_estimee || 0)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {lead.source_form || '-'}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}
                        >
                          {badge.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openDetail(lead);
                          }}
                          className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                        >
                          Voir
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Page {page} sur {totalPages} ({total} total)
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Precedent
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Detail Panel (Modal) */}
      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end"
          onClick={closeDetail}
        >
          <div
            className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-semibold text-gray-900">
                Detail du lead
              </h2>
              <button
                onClick={closeDetail}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Contact
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Prenom</span>
                    <span className="text-gray-900 font-medium">
                      {selectedLead.prenom}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="text-gray-900">{selectedLead.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Telephone</span>
                    <span className="text-gray-900">
                      {selectedLead.telephone || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="text-gray-900">
                      {formatDate(selectedLead.created_at)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Loan info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Pret
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capital</span>
                    <span className="text-gray-900 font-medium">
                      {formatCurrency(selectedLead.capital || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duree</span>
                    <span className="text-gray-900">
                      {selectedLead.duree} ans
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Banque</span>
                    <span className="text-gray-900 capitalize">
                      {(selectedLead.banque_slug || '-').replace(/-/g, ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Taux actuel</span>
                    <span className="text-gray-900">
                      {selectedLead.taux_actuel
                        ? `${selectedLead.taux_actuel}%`
                        : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Age</span>
                    <span className="text-gray-900">
                      {selectedLead.age || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fumeur</span>
                    <span className="text-gray-900">
                      {selectedLead.fumeur ? 'Oui' : 'Non'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Financial results */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Resultats
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Economie estimee</span>
                    <span className="text-green-700 font-bold">
                      {formatCurrency(selectedLead.economie_estimee || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mensualite actuelle</span>
                    <span className="text-gray-900">
                      {selectedLead.mensualite_actuelle
                        ? formatCurrency(selectedLead.mensualite_actuelle)
                        : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mensualite optimisee</span>
                    <span className="text-gray-900">
                      {selectedLead.mensualite_optimisee
                        ? formatCurrency(selectedLead.mensualite_optimisee)
                        : '-'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Tracking */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Tracking
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Source</span>
                    <span className="text-gray-900">
                      {selectedLead.source_form || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">UTM Source</span>
                    <span className="text-gray-900">
                      {selectedLead.utm_source || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">UTM Medium</span>
                    <span className="text-gray-900">
                      {selectedLead.utm_medium || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">UTM Campaign</span>
                    <span className="text-gray-900">
                      {selectedLead.utm_campaign || '-'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Device</span>
                    <span className="text-gray-900">
                      {selectedLead.device_type || '-'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Status management */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Gestion
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Statut
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={detailStatus}
                        onChange={(e) => setDetailStatus(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {statusOptions
                          .filter((o) => o.value)
                          .map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                      </select>
                      <button
                        onClick={handleUpdateStatus}
                        disabled={saving || detailStatus === selectedLead.status}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        Sauver
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Ajouter une note
                    </label>
                    <textarea
                      value={detailNote}
                      onChange={(e) => setDetailNote(e.target.value)}
                      rows={3}
                      placeholder="Tapez une note..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <button
                      onClick={handleAddNote}
                      disabled={saving || !detailNote.trim()}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Ajouter la note
                    </button>
                  </div>

                  {/* Existing notes */}
                  {selectedLead.notes && (
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Notes existantes
                      </label>
                      <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {selectedLead.notes}
                      </div>
                    </div>
                  )}

                  {actionMessage && (
                    <p className="text-sm text-green-600">{actionMessage}</p>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Delete */}
              <div>
                <button
                  onClick={handleDelete}
                  disabled={saving}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors border border-red-200"
                >
                  Supprimer ce lead
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
