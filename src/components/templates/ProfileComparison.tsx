import type { ProfileData } from "@/data/profiles";

interface ProfileComparisonProps {
  profile: ProfileData;
}

export default function ProfileComparison({ profile }: ProfileComparisonProps) {
  const ex = profile.comparisonExample;

  const rows = [
    { label: "Taux annuel", group: ex.groupRate, deleg: ex.delegRate },
    { label: "Mensualité assurance", group: ex.groupMonthly, deleg: ex.delegMonthly },
    { label: "Coût total", group: ex.groupTotal, deleg: ex.delegTotal },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Exemple concret d&apos;économie
            </h3>
            <p className="text-sm text-gray-500">
              {ex.scenario}
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                    Critère
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                    Contrat groupe
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-semibold text-accent-600">
                    Délégation
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-3 px-5 text-sm font-medium text-gray-900">
                      {row.label}
                    </td>
                    <td className="py-3 px-5 text-sm text-gray-700">
                      {row.group}
                    </td>
                    <td className="py-3 px-5 text-sm text-accent-600 font-semibold">
                      {row.deleg}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-gray-200 bg-accent-50">
                  <td className="py-4 px-5 text-sm font-bold text-gray-900">
                    Économie potentielle
                  </td>
                  <td className="py-4 px-5" />
                  <td className="py-4 px-5 text-lg font-bold text-accent-600">
                    {ex.savings}*
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3 mb-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-gray-200 p-4 bg-white"
              >
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Groupe</p>
                    <p className="text-sm text-gray-700">{row.group}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Délégation</p>
                    <p className="text-sm text-accent-600 font-semibold">
                      {row.deleg}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-gray-200 p-4 bg-accent-50">
              <p className="text-sm font-semibold text-accent-600 mb-1">
                Économie potentielle
              </p>
              <p className="text-xl font-bold text-accent-600">
                {ex.savings}*
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3 text-center max-w-2xl mx-auto">
            * Simulation indicative. Le taux en délégation dépend de votre profil
            exact — demandez un devis pour un chiffre personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
}
