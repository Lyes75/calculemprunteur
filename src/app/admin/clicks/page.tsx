'use client';

import { useEffect, useState, useCallback } from 'react';

interface Click {
  id: string;
  created_at: string;
  insurer_slug: string;
  insurer_name: string;
  platform: string;
  page_url: string;
  component: string;
  capital: number;
  banque_slug: string;
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

export default function AdminClicksPage() {
  const [clicks, setClicks] = useState<Click[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Filters
  const [insurerFilter, setInsurerFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const fetchClicks = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        table: 'affiliate_clicks',
        page: String(page),
        limit: '20',
        sort: 'created_at',
        order: 'desc',
      });
      if (insurerFilter) params.set('search', insurerFilter);
      if (dateFrom) params.set('date_from', dateFrom);
      if (dateTo) params.set('date_to', dateTo);

      const res = await fetch(`/api/admin/data?${params}`);
      if (res.ok) {
        const data = await res.json();
        setClicks(data.data || []);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error('Fetch clicks error:', err);
    } finally {
      setLoading(false);
    }
  }, [page, insurerFilter, dateFrom, dateTo]);

  useEffect(() => {
    fetchClicks();
  }, [fetchClicks]);

  useEffect(() => {
    setPage(1);
  }, [insurerFilter, dateFrom, dateTo]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Clics affilie</h1>

      {/* Filter bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Filtrer par assureur..."
            value={insurerFilter}
            onChange={(e) => setInsurerFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500 whitespace-nowrap">Du</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500 whitespace-nowrap">Au</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
                  Assureur
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Plateforme
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Page
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Composant
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Capital
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Banque
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    {Array.from({ length: 7 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : clicks.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Aucun clic trouve
                  </td>
                </tr>
              ) : (
                clicks.map((click) => (
                  <tr key={click.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {formatDate(click.created_at)}
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-medium capitalize">
                      {(click.insurer_name || click.insurer_slug || '-').replace(
                        /-/g,
                        ' '
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {click.platform || '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-600 max-w-[200px] truncate">
                      {click.page_url || '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {click.component || '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-medium whitespace-nowrap">
                      {click.capital ? formatCurrency(click.capital) : '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">
                      {(click.banque_slug || '-').replace(/-/g, ' ')}
                    </td>
                  </tr>
                ))
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
    </div>
  );
}
