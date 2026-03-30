import type { InsurerData } from "@/data/insurers";

interface InsurerVsGroupProps {
  insurer: InsurerData;
}

export default function InsurerVsGroup({ insurer }: InsurerVsGroupProps) {
  const cmp = insurer.vsGroupComparison;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {insurer.name} vs contrat groupe bancaire
          </h2>
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 text-center mb-4">
            {cmp.scenario}
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                    Crit&egrave;re
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                    Contrat groupe
                  </th>
                  <th className="py-3 px-5 text-left text-sm font-semibold text-accent-600">
                    {insurer.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-5 text-sm font-medium text-gray-900">
                    Taux annuel
                  </td>
                  <td className="py-3 px-5 text-sm text-gray-700">
                    {cmp.groupRate}
                  </td>
                  <td className="py-3 px-5 text-sm text-accent-600 font-semibold">
                    {cmp.insurerRate}
                  </td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-5 text-sm font-medium text-gray-900">
                    Mensualit&eacute; assurance
                  </td>
                  <td className="py-3 px-5 text-sm text-gray-700">
                    {cmp.groupMonthly}
                  </td>
                  <td className="py-3 px-5 text-sm text-accent-600 font-semibold">
                    {cmp.insurerMonthly}
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-5 text-sm font-medium text-gray-900">
                    Co&ucirc;t total assurance
                  </td>
                  <td className="py-3 px-5 text-sm text-gray-700">
                    {cmp.groupTotal}
                  </td>
                  <td className="py-3 px-5 text-sm text-accent-600 font-semibold">
                    {cmp.insurerTotal}
                  </td>
                </tr>
                <tr className="border-t border-gray-200 bg-accent-50">
                  <td className="py-3 px-5 text-sm font-bold text-gray-900">
                    &Eacute;conomie
                  </td>
                  <td className="py-3 px-5" />
                  <td className="py-3 px-5 text-lg font-bold text-accent-600">
                    {cmp.savings}*
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile version */}
          <div className="md:hidden bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Groupe</span>
              <span className="text-sm text-gray-900 font-medium">
                {cmp.groupMonthly}/mois, {cmp.groupTotal} au total
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-accent-600 font-medium">
                {insurer.name}
              </span>
              <span className="text-sm text-accent-600 font-semibold">
                {cmp.insurerMonthly}/mois, {cmp.insurerTotal} au total
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-bold text-gray-900">
                &Eacute;conomie
              </span>
              <span className="text-lg font-bold text-accent-600">
                {cmp.savings}*
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3 text-center">
            * Estimation indicative. Votre &eacute;conomie r&eacute;elle d&eacute;pend de votre profil.
          </p>
        </div>

        {/* Explanatory text */}
        <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
          {insurer.vsGroupText}
        </p>
      </div>
    </section>
  );
}
