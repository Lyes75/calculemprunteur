"use client";

import { useEffect, useRef } from "react";

const BANKS = [
  { name: "Crédit Agricole", insurer: "Predica", rate: 0.42, slug: "credit-agricole" },
  { name: "BNP Paribas", insurer: "Cardif", rate: 0.45, slug: "bnp-paribas" },
  { name: "Caisse d'Épargne", insurer: "CNP", rate: 0.44, slug: "caisse-depargne" },
  { name: "LCL", insurer: "Predica", rate: 0.43, slug: "lcl" },
  { name: "La Banque Postale", insurer: "CNP", rate: 0.46, slug: "banque-postale" },
  { name: "Société Générale", insurer: "Sogecap", rate: 0.40, slug: "societe-generale" },
  { name: "Banque Populaire", insurer: "BPCE Vie", rate: 0.41, slug: "banque-populaire" },
  { name: "Crédit Mutuel", insurer: "ACM", rate: 0.38, slug: "credit-mutuel" },
];

function computeSavings(bankRate: number): string {
  const savings = (bankRate / 100 - 0.001) * 200000 * 20;
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.round(savings));
}

export default function BankRatesGrid() {
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
      id="banques"
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Taux moyens d&apos;assurance emprunteur par banque
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center fade-up">
          Chaque banque propose son propre contrat d&apos;assurance groupe, géré
          par sa filiale assurance. Les taux varient selon les établissements,
          mais restent généralement supérieurs aux offres en délégation. Voici
          les taux moyens constatés par banque.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-8">
          {BANKS.map((bank) => (
            <div
              key={bank.slug}
              className="fade-up bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-primary-200 transition-all duration-200"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {bank.name}
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Contrat : {bank.insurer}
              </p>
              <p className="text-xl font-bold text-primary-800 mb-1">
                {bank.rate.toFixed(2).replace(".", ",")} %
              </p>
              <p className="text-sm text-accent-600 mb-3">
                ~{computeSavings(bank.rate)} € d&apos;économie potentielle
              </p>
              <a
                href="#"
                className="text-sm text-accent-600 hover:text-accent-500 font-medium transition-colors"
              >
                Voir le détail →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center fade-up">
          <a
            href="#"
            className="inline-flex items-center text-primary-800 hover:text-primary-700 font-semibold transition-colors text-sm"
          >
            Voir toutes les banques →
          </a>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 fade-up">
          * Taux indicatifs basés sur les contrats groupe moyens constatés. Votre
          taux réel dépend de votre contrat et de votre profil.
        </p>
      </div>
    </section>
  );
}
