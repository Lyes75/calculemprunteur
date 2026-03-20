"use client";

import { useEffect, useRef } from "react";

const ROWS = [
  { label: "Taux moyen", groupe: "0,30% à 0,50%", delegation: "0,10% à 0,25%", highlight: true },
  { label: "Tarification", groupe: "Mutualisée (même prix pour tous)", delegation: "Individualisée (selon votre profil)", highlight: true },
  { label: "Coût sur 200 000 € / 20 ans", groupe: "12 000 € à 20 000 €", delegation: "4 000 € à 10 000 €", highlight: true },
  { label: "Personnalisation garanties", groupe: "Limitée", delegation: "Totale", highlight: true },
  { label: "Changement possible", groupe: "Oui (loi Lemoine)", delegation: "Oui", highlight: false },
  { label: "Questionnaire médical", groupe: "Simplifié (< 200 000 €)", delegation: "Simplifié (< 200 000 €)", highlight: false },
  { label: "Rapidité de souscription", groupe: "Immédiate avec le prêt", delegation: "2 à 5 jours", highlight: false },
];

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      id="comparatif"
      ref={sectionRef}
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Assurance groupe vs assurance en délégation : le comparatif
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center fade-up">
          Votre banque vous propose systématiquement son assurance emprunteur
          &laquo;&nbsp;groupe&nbsp;&raquo; lors de la signature du prêt. Or, cette assurance
          collective est rarement la moins chère. La délégation d&apos;assurance
          vous permet de choisir librement un assureur externe, souvent 2 à 3
          fois moins cher à garanties équivalentes.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 mb-8 fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-100">
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Critère
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Assurance groupe (banque)
                </th>
                <th className="py-3 px-5 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide">
                  Assurance déléguée
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-4 px-5 text-sm font-medium text-gray-900">
                    {row.label}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-700">
                    {row.groupe}
                  </td>
                  <td className={`py-4 px-5 text-sm ${row.highlight ? "text-accent-600 font-semibold bg-accent-50" : "text-gray-700"}`}>
                    {row.delegation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 mb-8 fade-up">
          {ROWS.map((row) => (
            <div key={row.label} className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">{row.label}</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Groupe (banque)</p>
                  <p className="text-sm text-gray-700">{row.groupe}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Déléguée</p>
                  <p className={`text-sm ${row.highlight ? "text-accent-600 font-semibold" : "text-gray-700"}`}>
                    {row.delegation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-3xl mx-auto fade-up">
          L&apos;équivalence de garanties est le seul critère que votre banque
          peut exiger. Si les garanties de votre nouvelle assurance couvrent au
          minimum les mêmes risques (décès, PTIA, ITT, IPT), votre banque ne
          peut pas refuser le changement.{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045385498"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 hover:text-accent-500 font-medium transition-colors"
          >
            C&apos;est la loi →
          </a>
        </p>

        <div className="text-center fade-up">
          <a
            href="#simulateur"
            className="inline-flex items-center text-accent-600 hover:text-accent-500 font-semibold transition-colors"
          >
            Comparer avec mon assurance actuelle →
          </a>
        </div>
      </div>
    </section>
  );
}
