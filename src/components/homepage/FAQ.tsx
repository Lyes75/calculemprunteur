"use client";

import { useEffect, useRef } from "react";

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que la loi Lemoine ?",
    answer:
      "La loi Lemoine, entrée en vigueur le 1er juin 2022, permet à tout emprunteur de résilier et de changer son assurance de prêt immobilier à tout moment, sans frais et sans attendre de date anniversaire. Elle supprime également le questionnaire de santé pour les prêts de moins de 200 000 € dont le terme intervient avant les 60 ans de l'emprunteur.",
  },
  {
    question: "Puis-je changer d'assurance emprunteur à tout moment ?",
    answer:
      "Oui, depuis la loi Lemoine, vous pouvez changer d'assurance emprunteur à tout moment, que votre prêt soit récent ou ancien. Il n'y a plus de contrainte de date anniversaire. Il vous suffit de souscrire un nouveau contrat présentant des garanties au moins équivalentes à celles de votre contrat actuel, et votre banque ne pourra pas s'y opposer.",
  },
  {
    question: "Ma banque peut-elle refuser mon changement d'assurance ?",
    answer:
      "Votre banque ne peut refuser votre changement d'assurance que si le nouveau contrat ne présente pas un niveau de garanties équivalent à celui du contrat initial. Elle dispose de 10 jours ouvrés pour vous notifier sa décision et doit motiver tout refus de manière précise. En pratique, les assureurs alternatifs veillent à proposer des garanties conformes aux exigences de votre banque.",
  },
  {
    question: "Combien coûte le changement d'assurance emprunteur ?",
    answer:
      "Le changement d'assurance emprunteur est totalement gratuit. La loi interdit à votre banque de facturer des frais de résiliation ou de modification. Votre nouvel assureur prend en charge l'ensemble des démarches administratives. Vous n'avez aucun frais caché à prévoir.",
  },
  {
    question: "Quelles sont les garanties minimales obligatoires ?",
    answer:
      "Les garanties minimales exigées dépendent de votre banque et de votre profil. En général, les garanties décès et PTIA (Perte Totale et Irréversible d'Autonomie) sont systématiquement requises. Les garanties ITT (Incapacité Temporaire de Travail) et IPP/IPT (Invalidité Permanente Partielle ou Totale) sont souvent demandées pour les résidences principales. Votre nouveau contrat doit couvrir au minimum les mêmes garanties que le contrat initial.",
  },
  {
    question: "Comment fonctionne le simulateur CalculEmprunteur.fr ?",
    answer:
      "Notre simulateur compare le coût de votre assurance bancaire actuelle avec les taux moyens pratiqués par les assureurs en délégation, en tenant compte de votre âge, de votre profil et des caractéristiques de votre prêt. Le résultat est une estimation indicative de l'économie potentielle. Pour obtenir un chiffrage précis et personnalisé, nous vous invitons à demander vos devis gratuits à la fin de la simulation.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-up");
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Questions fréquentes sur l&apos;assurance emprunteur
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="fade-up bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
