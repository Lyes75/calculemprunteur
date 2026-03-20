import type { BankData } from "@/data/banks";

interface BankSwitchStepsProps {
  bank: BankData;
}

export default function BankSwitchSteps({ bank }: BankSwitchStepsProps) {
  const steps = [
    {
      number: "01",
      title: "Comparez les offres",
      description: `Utilisez notre simulateur pour comparer le contrat ${bank.insurerName} de ${bank.name} avec les meilleures assurances en delegation. En 2 minutes, vous connaissez votre economie.`,
      icon: (
        <svg
          className="w-10 h-10 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Souscrivez votre nouveau contrat",
      description: `Choisissez l'assureur qui correspond a votre profil. Il se charge de constituer un dossier avec des garanties equivalentes a celles exigees par ${bank.name}.`,
      icon: (
        <svg
          className="w-10 h-10 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Envoyez votre lettre de changement",
      description: `Adressez votre demande de substitution a ${bank.name}. La banque dispose de 10 jours ouvrables pour accepter ou motiver un refus. Aucuns frais de changement.`,
      icon: (
        <svg
          className="w-10 h-10 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Comment changer d&apos;assurance emprunteur chez {bank.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center"
            >
              <span className="text-4xl font-extrabold text-accent-600/10 leading-none block mb-2">
                {step.number}
              </span>
              <div className="inline-flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Switch specific info callout */}
        {bank.switchSpecificInfo && (
          <div className="border-l-4 border-accent-600 bg-accent-50 p-4 rounded-r-xl max-w-3xl mx-auto">
            <p className="text-sm text-gray-700 leading-relaxed">
              {bank.switchSpecificInfo}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
