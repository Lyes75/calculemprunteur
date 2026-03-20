import type { BankData } from "@/data/banks";
import JsonLd from "@/components/seo/JsonLd";

interface BankFAQProps {
  bank: BankData;
}

export default function BankFAQ({ bank }: BankFAQProps) {
  const faqItems = [
    {
      question: `Puis-je changer l'assurance emprunteur de ${bank.name} a tout moment ?`,
      answer: `Oui, depuis la loi Lemoine (juin 2022), vous pouvez changer votre assurance emprunteur ${bank.name} a tout moment, sans frais et sans attendre de date anniversaire. Il vous suffit de souscrire un nouveau contrat presentant des garanties au moins equivalentes a celles du contrat ${bank.insurerName}.`,
    },
    {
      question: `${bank.name} peut-elle refuser mon changement d'assurance ?`,
      answer: `${bank.name} ne peut refuser votre changement que si le nouveau contrat ne presente pas des garanties equivalentes a celles du contrat ${bank.insurerName}. La banque dispose de 10 jours ouvres pour vous notifier sa decision et doit motiver tout refus de maniere precise.`,
    },
    {
      question: `Combien coute le changement d'assurance chez ${bank.name} ?`,
      answer: `Le changement d'assurance emprunteur chez ${bank.name} est totalement gratuit. La loi interdit a la banque de facturer des frais de resiliation ou de modification. Votre nouvel assureur prend en charge l'ensemble des demarches administratives.`,
    },
    {
      question: `Combien puis-je economiser en quittant le contrat ${bank.insurerName} ?`,
      answer: `L'economie depend de votre profil et du montant de votre pret. En moyenne, les emprunteurs ${bank.name} economisent entre 5 000 et 15 000 euros sur la duree de leur pret en passant d'un taux de ${bank.groupRate.toFixed(2).replace(".", ",")} % a un contrat en delegation autour de 0,10 %. Utilisez notre simulateur pour obtenir une estimation personnalisee.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <JsonLd data={faqSchema} />

        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Questions frequentes : assurance emprunteur {bank.name}
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
            >
              <summary className="flex items-center justify-between p-5 md:p-6 text-left">
                <span className="text-base font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <svg
                  className="faq-chevron w-5 h-5 text-gray-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="faq-content">
                <div>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
