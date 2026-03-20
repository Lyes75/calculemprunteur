import type { BankData } from "@/data/banks";

interface BankInsuranceDetailsProps {
  bank: BankData;
}

export default function BankInsuranceDetails({ bank }: BankInsuranceDetailsProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="w-10 h-1 bg-accent-600 mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            L&apos;assurance emprunteur {bank.insurerName} de {bank.name}
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          {bank.insurerDescription}
        </p>

        {/* Client reproaches */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ce que les emprunteurs {bank.name} reprochent au contrat {bank.insurerName}
          </h3>
          <ul className="space-y-3">
            {bank.clientReproaches.map((reproach, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-danger-500 shrink-0 mt-0.5"
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

        {/* Strengths */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Les points forts du contrat {bank.name}
          </h3>
          <ul className="space-y-3">
            {bank.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-success-600 shrink-0 mt-0.5"
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
      </div>
    </section>
  );
}
