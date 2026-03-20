'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface StatsData {
  period: string;
  kpis: {
    total_simulations: number;
    total_leads: number;
    total_clicks: number;
    conversion_sim_to_lead: number;
    conversion_sim_to_click: number;
    avg_economy: number;
    avg_capital: number;
  };
  leads_by_status: Record<string, number>;
  leads_by_banque: Record<string, number>;
  leads_by_day: Record<string, number>;
  clicks_by_insurer: Record<string, number>;
}

interface Lead {
  id: string;
  created_at: string;
  prenom: string;
  email: string;
  banque_slug: string;
  capital: number;
  economie_estimee: number;
  status: string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));

const statusLabels: Record<string, { label: string; color: string }> = {
  nouveau: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
  contacte: { label: 'Contacte', color: 'bg-yellow-100 text-yellow-700' },
  en_cours: { label: 'En cours', color: 'bg-orange-100 text-orange-700' },
  converti: { label: 'Converti', color: 'bg-green-100 text-green-700' },
  perdu: { label: 'Perdu', color: 'bg-red-100 text-red-700' },
};

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-24 mb-3" />
      <div className="h-8 bg-gray-200 rounded w-32 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-20" />
    </div>
  );
}

function SkeletonChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-40 mb-6" />
      <div className="flex items-end gap-2 h-40">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-gray-200 rounded-t"
            style={{ height: `${Math.random() * 80 + 20}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          fetch('/api/admin/stats?period=30d'),
          fetch('/api/admin/data?table=leads&limit=5&sort=created_at&order=desc'),
        ]);

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }

        if (leadsRes.ok) {
          const leadsData = await leadsRes.json();
          setRecentLeads(leadsData.data || []);
        }
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* KPI skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>

        {/* Chart skeleton */}
        <div className="mb-6">
          <SkeletonChart />
        </div>

        {/* Two column skeletons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SkeletonChart />
          <SkeletonChart />
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-20 text-gray-500">
        Erreur de chargement des statistiques.
      </div>
    );
  }

  const { kpis } = stats;

  // Prepare leads by day data (last 14 days)
  const last14Days: { date: string; count: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    last14Days.push({
      date: key,
      count: stats.leads_by_day[key] || 0,
    });
  }
  const maxLeadsDay = Math.max(...last14Days.map((d) => d.count), 1);

  // Prepare leads by banque
  const banqueEntries = Object.entries(stats.leads_by_banque).sort(
    (a, b) => b[1] - a[1]
  );
  const maxBanque = banqueEntries.length > 0 ? banqueEntries[0][1] : 1;

  // Prepare clicks by insurer
  const insurerEntries = Object.entries(stats.clicks_by_insurer).sort(
    (a, b) => b[1] - a[1]
  );
  const maxInsurer = insurerEntries.length > 0 ? insurerEntries[0][1] : 1;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Simulations</p>
          <p className="text-3xl font-bold text-gray-900">
            {kpis.total_simulations}
          </p>
          <p className="text-xs text-gray-400 mt-1">30 derniers jours</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Leads</p>
          <p className="text-3xl font-bold text-gray-900">
            {kpis.total_leads}
          </p>
          <p className="text-xs text-gray-400 mt-1">30 derniers jours</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Clics affilie</p>
          <p className="text-3xl font-bold text-gray-900">
            {kpis.total_clicks}
          </p>
          <p className="text-xs text-gray-400 mt-1">30 derniers jours</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-1">Taux conversion</p>
          <p className="text-3xl font-bold text-gray-900">
            {kpis.conversion_sim_to_lead}%
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Clic: {kpis.conversion_sim_to_click}%
          </p>
        </div>
      </div>

      {/* Row 2: Leads per day bar chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Leads par jour (14 derniers jours)
        </h2>
        <div className="flex items-end gap-1.5 h-44">
          {last14Days.map((day) => (
            <div
              key={day.date}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <span className="text-xs text-gray-500 font-medium">
                {day.count > 0 ? day.count : ''}
              </span>
              <div
                className="w-full bg-blue-600 rounded-t transition-all"
                style={{
                  height: `${Math.max((day.count / maxLeadsDay) * 140, day.count > 0 ? 8 : 2)}px`,
                }}
              />
              <span className="text-[10px] text-gray-400">
                {day.date.slice(8, 10)}/{day.date.slice(5, 7)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Leads by banque + Clicks by insurer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Leads by banque */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Leads par banque
          </h2>
          {banqueEntries.length === 0 ? (
            <p className="text-sm text-gray-400">Aucune donnee</p>
          ) : (
            <div className="space-y-3">
              {banqueEntries.slice(0, 10).map(([banque, count]) => (
                <div key={banque}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700 capitalize">
                      {banque.replace(/-/g, ' ')}
                    </span>
                    <span className="text-gray-500 font-medium">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(count / maxBanque) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Clicks by insurer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Clics par assureur
          </h2>
          {insurerEntries.length === 0 ? (
            <p className="text-sm text-gray-400">Aucune donnee</p>
          ) : (
            <div className="space-y-3">
              {insurerEntries.slice(0, 10).map(([insurer, count]) => (
                <div key={insurer}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700 capitalize">
                      {insurer.replace(/-/g, ' ')}
                    </span>
                    <span className="text-gray-500 font-medium">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${(count / maxInsurer) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Row 4: Leads by status + Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Leads by status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Leads par statut
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(stats.leads_by_status).map(([status, count]) => {
              const style = statusLabels[status] || {
                label: status,
                color: 'bg-gray-100 text-gray-700',
              };
              return (
                <span
                  key={status}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${style.color}`}
                >
                  {style.label}
                  <span className="font-bold">{count}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Metriques
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Economie moyenne</span>
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(kpis.avg_economy)}
              </span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Capital moyen</span>
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(kpis.avg_capital)}
              </span>
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Taux clic/sim</span>
              <span className="text-lg font-bold text-gray-900">
                {kpis.conversion_sim_to_click}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 5: Recent leads mini table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">
            Derniers leads
          </h2>
          <Link
            href="/admin/leads"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Voir tout
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Prenom
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Banque
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Capital
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Economie
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentLeads.map((lead) => {
                const style = statusLabels[lead.status] || {
                  label: lead.status,
                  color: 'bg-gray-100 text-gray-700',
                };
                return (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-gray-600 whitespace-nowrap">
                      {formatDate(lead.created_at)}
                    </td>
                    <td className="px-6 py-3 text-gray-900 font-medium">
                      {lead.prenom}
                    </td>
                    <td className="px-6 py-3 text-gray-600">{lead.email}</td>
                    <td className="px-6 py-3 text-gray-600 capitalize">
                      {(lead.banque_slug || '').replace(/-/g, ' ')}
                    </td>
                    <td className="px-6 py-3 text-gray-900 font-medium">
                      {formatCurrency(lead.capital || 0)}
                    </td>
                    <td className="px-6 py-3 text-green-700 font-medium">
                      {formatCurrency(lead.economie_estimee || 0)}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.color}`}
                      >
                        {style.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {recentLeads.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    Aucun lead
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
