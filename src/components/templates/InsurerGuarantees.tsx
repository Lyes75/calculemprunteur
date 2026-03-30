import type { InsurerData } from "@/data/insurers";

interface InsurerGuaranteesProps {
  insurer: InsurerData;
}

export default function InsurerGuarantees({ insurer }: InsurerGuaranteesProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Garanties {insurer.name}
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-100">
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Garantie
                </th>
                <th className="py-3 px-5 text-center text-xs font-semibold text-primary-800 uppercase tracking-wide w-24">
                  Incluse
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  D&eacute;tail
                </th>
              </tr>
            </thead>
            <tbody>
              {insurer.guarantees.map((g, i) => (
                <tr
                  key={g.name}
                  className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-4 px-5 text-sm font-medium text-gray-900">
                    {g.name}
                  </td>
                  <td className="py-4 px-5 text-center">
                    {g.included ? (
                      <svg
                        className="w-5 h-5 text-green-500 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-red-400 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-600">
                    {g.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {insurer.guarantees.map((g) => (
            <div
              key={g.name}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-900">
                  {g.name}
                </p>
                {g.included ? (
                  <span className="text-xs font-medium text-green-600 bg-green-100 rounded-full px-2 py-0.5">
                    Incluse
                  </span>
                ) : (
                  <span className="text-xs font-medium text-red-600 bg-red-100 rounded-full px-2 py-0.5">
                    Non incluse
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{g.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
