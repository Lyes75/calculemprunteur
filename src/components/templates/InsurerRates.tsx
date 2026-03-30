import type { InsurerData } from "@/data/insurers";

interface InsurerRatesProps {
  insurer: InsurerData;
}

export default function InsurerRates({ insurer }: InsurerRatesProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Grille tarifaire {insurer.name}
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-100">
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Profil
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Taux
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Mensualit&eacute; (200&nbsp;000&euro;)
                </th>
              </tr>
            </thead>
            <tbody>
              {insurer.rateGrid.map((row, i) => (
                <tr
                  key={row.profile}
                  className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-4 px-5 text-sm font-medium text-gray-900">
                    {row.profile}
                  </td>
                  <td className="py-4 px-5 text-sm font-semibold text-accent-600">
                    {row.rate}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-700">
                    {row.monthlyExample}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {insurer.rateGrid.map((row) => (
            <div
              key={row.profile}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <p className="text-sm font-semibold text-gray-900 mb-2">
                {row.profile}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-accent-600 font-bold">{row.rate}</span>
                <span className="text-sm text-gray-600">
                  {row.monthlyExample}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center max-w-2xl mx-auto">
          * Taux indicatifs bas&eacute;s sur les offres moyennes constat&eacute;es en 2026.
          Mensualit&eacute; calcul&eacute;e sur un pr&ecirc;t de 200&nbsp;000&euro; sur 20 ans.
          Votre tarif r&eacute;el d&eacute;pend de votre profil.
        </p>
      </div>
    </section>
  );
}
