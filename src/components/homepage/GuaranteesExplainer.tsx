"use client";

import { useEffect, useRef } from "react";

const GUARANTEES = [
  {
    name: "Décès",
    acronym: null,
    required: "Obligatoire",
    description: "En cas de décès de l'emprunteur, l'assurance rembourse le capital restant dû à la banque. C'est la garantie de base, systématiquement exigée par tous les établissements.",
  },
  {
    name: "Perte Totale et Irréversible d'Autonomie",
    acronym: "PTIA",
    required: "Obligatoire",
    description: "Couvre les situations où l'emprunteur ne peut plus exercer aucune activité et nécessite l'assistance d'une tierce personne. Toujours couplée à la garantie décès.",
  },
  {
    name: "Incapacité Temporaire Totale de Travail",
    acronym: "ITT",
    required: "Obligatoire pour une résidence principale",
    description: "Prend en charge les mensualités lorsque l'emprunteur est en arrêt de travail temporaire (maladie, accident). La durée d'indemnisation et le délai de franchise varient selon les contrats.",
  },
  {
    name: "Invalidité Permanente Totale",
    acronym: "IPT",
    required: "Obligatoire pour une résidence principale",
    description: "Couvre les situations d'invalidité à plus de 66%. L'assurance rembourse tout ou partie du capital restant dû. Vérifiez la définition (professionnelle vs fonctionnelle) dans votre contrat.",
  },
  {
    name: "Invalidité Permanente Partielle",
    acronym: "IPP",
    required: "Souvent exigée, parfois optionnelle",
    description: "Couvre les invalidités entre 33% et 66%. Selon les contrats, la prise en charge est proportionnelle au taux d'invalidité.",
  },
  {
    name: "Perte d'emploi",
    acronym: null,
    required: "Optionnelle (rarement rentable)",
    description: "Prend en charge une partie des mensualités en cas de licenciement. Attention : les conditions sont strictes (pas de démission, pas de rupture conventionnelle, délai de carence long).",
  },
];

export default function GuaranteesExplainer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="garanties"
      ref={sectionRef}
      className="bg-primary-50 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Les garanties de l&apos;assurance emprunteur expliquées simplement
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center fade-up">
          L&apos;assurance emprunteur couvre les risques qui pourraient vous
          empêcher de rembourser votre prêt. Pour changer d&apos;assurance,
          votre nouveau contrat doit offrir des garanties au moins équivalentes
          à celles exigées par votre banque. Voici les garanties essentielles à
          comprendre avant de comparer les offres.
        </p>

        <div className="space-y-3 mb-10">
          {GUARANTEES.map((g) => (
            <details
              key={g.name}
              className="fade-up bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 md:p-6 text-left">
                <div className="flex items-center gap-3 pr-4">
                  <div className="w-2 h-2 rounded-full bg-primary-800 shrink-0" />
                  <span className="text-base font-medium text-gray-900">
                    {g.name}
                    {g.acronym && (
                      <span className="text-gray-500 font-normal"> ({g.acronym})</span>
                    )}
                  </span>
                  <span
                    className={`hidden sm:inline-block text-xs px-2.5 py-0.5 rounded-full shrink-0 ${
                      g.required.startsWith("Obligatoire")
                        ? "bg-primary-100 text-primary-800"
                        : g.required.startsWith("Souvent")
                          ? "bg-warning-100 text-warning-500"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {g.required}
                  </span>
                </div>
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
                    <span
                      className={`sm:hidden inline-block text-xs px-2.5 py-0.5 rounded-full mb-2 ${
                        g.required.startsWith("Obligatoire")
                          ? "bg-primary-100 text-primary-800"
                          : g.required.startsWith("Souvent")
                            ? "bg-warning-100 text-warning-500"
                            : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {g.required}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Quotité */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 fade-up">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            La quotité : comment répartir la couverture entre co-emprunteurs
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            La quotité détermine le pourcentage du prêt couvert par
            l&apos;assurance pour chaque emprunteur. Pour un emprunt seul, la
            quotité est obligatoirement de 100%. Pour un couple, la répartition
            (50/50, 70/30, 100/100...) influence à la fois le niveau de
            protection et le coût. Une quotité de 100% sur chaque tête offre la
            meilleure protection mais coûte plus cher.
          </p>
        </div>

        <div className="text-center mt-8 fade-up">
          <a
            href="#simulateur"
            className="inline-flex items-center text-accent-600 hover:text-accent-500 font-semibold transition-colors"
          >
            Vérifier l&apos;équivalence de mes garanties →
          </a>
        </div>
      </div>
    </section>
  );
}
