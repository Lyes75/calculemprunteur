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
      "Notre simulateur calcule vos économies en comparant votre assurance actuelle avec les meilleures offres en délégation du marché. En plus du calcul d'économie, il sélectionne les 3 assureurs les plus adaptés à votre profil — en tenant compte de votre âge, votre état de santé et votre profession — et génère automatiquement votre lettre de changement d'assurance, pré-remplie et conforme à la loi Lemoine. Le service est entièrement gratuit et sans engagement.",
  },
  {
    question: "Quel est le prix moyen d'une assurance emprunteur ?",
    answer:
      "Le coût moyen d'une assurance emprunteur représente entre 0,10% et 0,50% du capital emprunté par an, selon votre âge, votre état de santé et le type de contrat. Pour un prêt de 200 000 €, cela représente entre 200 € et 1 000 € par an. Les contrats en délégation sont généralement 2 à 3 fois moins chers que les contrats groupe bancaires.",
  },
  {
    question: "Qu'est-ce que la délégation d'assurance emprunteur ?",
    answer:
      "La délégation d'assurance consiste à choisir un assureur externe plutôt que le contrat groupe de votre banque. Depuis la loi Lagarde (2010), votre banque ne peut pas refuser une délégation si les garanties sont équivalentes. C'est le moyen le plus efficace de réduire le coût de votre assurance emprunteur.",
  },
  {
    question: "Quels sont les meilleurs assureurs emprunteur en 2026 ?",
    answer:
      "Les assureurs en délégation les plus compétitifs en 2026 sont April, Generali, Swiss Life, Cardif Liberté et Suravenir. Le choix dépend de votre profil : âge, état de santé, profession et montant du prêt. Notre simulateur compare les offres adaptées à votre situation.",
  },
  {
    question: "L'assurance emprunteur est-elle obligatoire ?",
    answer:
      "Légalement, l'assurance emprunteur n'est pas obligatoire. En pratique, aucune banque ne vous accorde un prêt immobilier sans assurance. Elle est donc obligatoire de fait pour obtenir votre financement. Les garanties décès et PTIA sont systématiquement exigées.",
  },
  {
    question: "Comment fonctionne le questionnaire médical ?",
    answer:
      "Le questionnaire médical permet à l'assureur d'évaluer votre état de santé et d'ajuster ses tarifs. Depuis la loi Lemoine, il est supprimé pour les prêts dont la part assurée est inférieure à 200 000 € et dont le terme intervient avant le 60ème anniversaire de l'emprunteur.",
  },
  {
    question: "Qu'est-ce que la convention AERAS ?",
    answer:
      "La convention AERAS (S'Assurer et Emprunter avec un Risque Aggravé de Santé) facilite l'accès à l'assurance emprunteur pour les personnes ayant ou ayant eu un problème de santé grave. Elle prévoit un droit à l'oubli pour certains cancers et maladies chroniques, et plafonne les surprimes applicables.",
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
