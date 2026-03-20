import type { BankData } from "@/data/banks";

interface BankComparisonProps {
  bank: BankData;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export default function BankComparison({ bank }: BankComparisonProps) {
  const capital = 200000;
  const durationMonths = 240;
  const delegationRate = 0.001; // 0.10%

  const groupMonthly = (capital * (bank.groupRate / 100)) / 12;
  const groupTotal = groupMonthly * durationMonths;

  const delegationMonthly = (capital * delegationRate) / 12;
  const delegationTotal = delegationMonthly * durationMonths;

  const savingsMonthly = groupMonthly - delegationMonthly;
  const savingsTotal = groupTotal - delegationTotal;

  const groupRateDisplay = bank.groupRate.toFixed(2).replace(".", ",");
  const delegationRateDisplay = "0,10";

  const rows = [
    {
      label: "Taux annuel",
      group: `${groupRateDisplay} %`,
      delegation: `${delegationRateDisplay} %`,
      isSavings: false,
    },
    {
      label: "Mensualite assurance",
      group: formatCurrency(groupMonthly),
      delegation: formatCurrency(delegationMonthly),
      isSavings: false,
    },
    {
      label: "Cout total (20 ans)",
      group: formatCurrency(groupTotal),
      delegation: formatCurrency(delegationTotal),
      isSavings: false,
    },
    {
      label: "Economie potentielle",
      group: "",
      delegation: formatCurrency(savingsTotal),
      isSavings: true,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Contrat {bank.insurerName} ({bank.name}) vs assurance en delegation
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Simulation basee sur un pret de 200&nbsp;000&nbsp;&euro; sur 20&nbsp;ans.
          Comparez le contrat groupe {bank.insurerName} avec les meilleures offres
          en delegation d&apos;assurance.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-100">
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Critere
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  {bank.insurerName} ({bank.name})
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Delegation d&apos;assurance
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={
                    row.isSavings
                      ? "border-t border-gray-200 bg-accent-50"
                      : `border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`
                  }
                >
                  <td
                    className={`py-4 px-5 text-sm font-medium ${
                      row.isSavings ? "text-accent-600 font-bold" : "text-gray-900"
                    }`}
                  >
                    {row.label}
                  </td>
                  <td
                    className={`py-4 px-5 text-sm ${
                      row.isSavings ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {row.group || "\u2014"}
                  </td>
                  <td
                    className={`py-4 px-5 text-sm ${
                      row.isSavings
                        ? "text-accent-600 font-bold text-lg"
                        : "text-accent-600 font-semibold"
                    }`}
                  >
                    {row.isSavings ? `${formatCurrency(savingsTotal)}` : row.delegation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 mb-8">
          {rows.map((row) => (
            <div
              key={row.label}
              className={`rounded-xl border border-gray-200 p-4 ${
                row.isSavings ? "bg-accent-50" : "bg-white"
              }`}
            >
              <p
                className={`text-sm font-semibold mb-2 ${
                  row.isSavings ? "text-accent-600" : "text-gray-900"
                }`}
              >
                {row.label}
              </p>
              {row.isSavings ? (
                <p className="text-xl font-bold text-accent-600">
                  {formatCurrency(savingsTotal)}
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {bank.insurerName}
                    </p>
                    <p className="text-sm text-gray-700">{row.group}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Delegation</p>
                    <p className="text-sm text-accent-600 font-semibold">
                      {row.delegation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center">
          * Simulation indicative basee sur un capital de 200&nbsp;000&nbsp;&euro;
          sur 20&nbsp;ans. Le taux en delegation (0,10&nbsp;%) correspond aux
          meilleurs contrats du marche pour un profil standard.
        </p>
      </div>
    </section>
  );
}
