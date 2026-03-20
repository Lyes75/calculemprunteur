'use client';

import { useEffect, useState, useCallback } from 'react';

interface Simulation {
  id: string;
  created_at: string;
  capital: number;
  duree: number;
  banque_slug: string;
  taux_actuel: number;
  age: number;
  fumeur: boolean;
  economie_estimee: number;
  mensualite_actuelle: number;
  mensualite_optimisee: number;
  converted: boolean;
  device_type: string;
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

export default function AdminSimulationsPage() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Filters
  const [banqueFilter, setBanqueFilter] = useState('');
  const [convertedFilter, setConvertedFilter] = useState('');

  const fetchSimulations = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        table: 'simulations',
        page: String(page),
        limit: '20',
        sort: 'created_at',
        order: 'desc',
      });
      if (banqueFilter) params.set('search', banqueFilter);

      const res = await fetch(`/api/admin/data?${params}`);
      if (res.ok) {
        const data = await res.json();
        let sims = data.data || [];

        // Client-side filter for converted since API doesn't support it directly
        if (convertedFilter === 'yes') {
          sims = sims.filter((s: Simulation) => s.converted);
        } else if (convertedFilter === 'no') {
          sims = sims.filter((s: Simulation) => !s.converted);
        }

        setSimulations(sims);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total || 0);
      }
    } catch (err) {
      console.error('Fetch simulations error:', err);
    } finally {
      setLoading(false);
    }
  }, [page, banqueFilter, convertedFilter]);

  useEffect(() => {
    fetchSimulations();
  }, [fetchSimulations]);

  useEffect(() => {
    setPage(1);
  }, [banqueFilter, convertedFilter]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Simulations</h1>

      {/* Filter bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Filtrer par banque..."
            value={banqueFilter}
            onChange={(e) => setBanqueFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            value={convertedFilter}
            onChange={(e) => setConvertedFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">Tous (converti)</option>
            <option value="yes">Converti uniquement</option>
            <option value="no">Non converti uniquement</option>
          </select>
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
                  Capital
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Duree
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Banque
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Taux
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Age
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Economie
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Converti
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Device
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : simulations.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Aucune simulation trouvee
                  </td>
                </tr>
              ) : (
                simulations.map((sim) => (
                  <tr key={sim.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {formatDate(sim.created_at)}
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-medium whitespace-nowrap">
                      {formatCurrency(sim.capital || 0)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {sim.duree ? `${sim.duree} ans` : '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">
                      {(sim.banque_slug || '-').replace(/-/g, ' ')}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {sim.taux_actuel ? `${sim.taux_actuel}%` : '-'}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {sim.age || '-'}
                    </td>
                    <td className="px-4 py-3 text-green-700 font-medium whitespace-nowrap">
                      {formatCurrency(sim.economie_estimee || 0)}
                    </td>
                    <td className="px-4 py-3">
                      {sim.converted ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Oui
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                          Non
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">
                      {sim.device_type || '-'}
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
