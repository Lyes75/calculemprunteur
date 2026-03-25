import type { BankData } from "@/data/banks";

interface BankInsuranceDetailsProps {
  bank: BankData;
}

export default function BankInsuranceDetails({ bank }: BankInsuranceDetailsProps) {
  const maxRows = Math.max(bank.strengths.length, bank.clientReproaches.length);
  const rows = Array.from({ length: maxRows }, (_, i) => ({
    strength: bank.strengths[i] || '',
    reproach: bank.clientReproaches[i] || '',
  }));

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            L&apos;assurance emprunteur {bank.insurerName} de {bank.name}
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
          {bank.insurerDescription}
        </p>

        {/* Points forts et limites */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Points forts et limites du contrat {bank.insurerName}
          </h3>

          {/* Desktop: side-by-side table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/2 py-3 px-5 text-left text-sm font-semibold text-success-600 bg-success-50">
                    &#10003; Points forts
                  </th>
                  <th className="w-1/2 py-3 px-5 text-left text-sm font-semibold text-danger-500 bg-danger-50">
                    &#10007; Limites
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={`border-t border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-3 px-5 text-sm text-gray-700 align-top">
                      {row.strength && (
                        <span className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-success-600 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {row.strength}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-5 text-sm text-gray-700 align-top">
                      {row.reproach && (
                        <span className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-danger-500 shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                          {row.reproach}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked blocks */}
          <div className="md:hidden space-y-4">
            <div className="rounded-xl bg-success-50 border border-success-200 p-4">
              <p className="text-sm font-semibold text-success-600 mb-3">&#10003; Points forts</p>
              <ul className="space-y-2">
                {bank.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-success-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-danger-50 border border-danger-200 p-4">
              <p className="text-sm font-semibold text-danger-500 mb-3">&#10007; Limites</p>
              <ul className="space-y-2">
                {bank.clientReproaches.map((reproach, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-danger-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{reproach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
