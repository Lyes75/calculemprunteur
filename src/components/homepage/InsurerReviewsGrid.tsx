"use client";

import { useEffect, useRef } from "react";
import InsurerLogo from "@/components/ui/InsurerLogo";

const INSURERS = [
  {
    name: "Cardif",
    parent: "BNP Paribas",
    type: "groupe",
    rate: "0,45%",
    rating: 3,
    pros: ["Large réseau, souscription simplifiée avec le prêt BNP"],
    cons: ["Tarifs supérieurs au marché délégation"],
    slug: "cardif",
  },
  {
    name: "April",
    parent: null,
    type: "delegation",
    rate: "0,08%",
    rating: 4,
    pros: ["Tarifs très compétitifs, souscription 100% en ligne", "Spécialiste des profils à risque"],
    cons: [],
    slug: "april",
  },
  {
    name: "CNP Assurances",
    parent: "Caisse d'Épargne, Banque Postale",
    type: "groupe",
    rate: "0,44%",
    rating: 3,
    pros: ["Premier assureur emprunteur de France"],
    cons: ["Peu de flexibilité, tarifs mutualisés"],
    slug: "cnp",
  },
  {
    name: "Generali",
    parent: null,
    type: "delegation",
    rate: "0,09%",
    rating: 4,
    pros: ["Excellente couverture, bon rapport garanties/prix", "Acceptation large des profils"],
    cons: [],
    slug: "generali",
  },
  {
    name: "Macif",
    parent: null,
    type: "mutualiste",
    rate: "0,15%",
    rating: 4,
    pros: ["Mutuelle de confiance, bon service client", "Tarifs intéressants pour les sociétaires"],
    cons: [],
    slug: "macif",
  },
  {
    name: "SwissLife",
    parent: null,
    type: "delegation",
    rate: "0,11%",
    rating: 4,
    pros: ["Spécialiste des profils seniors et cadres", "Options de personnalisation avancées"],
    cons: [],
    slug: "swisslife",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= count ? "text-warning-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TypeBadge({ type }: { type: string }) {
  if (type === "groupe") {
    return (
      <span className="inline-block bg-primary-100 text-primary-800 rounded-full px-3 py-0.5 text-xs font-medium">
        Assurance groupe bancaire
      </span>
    );
  }
  if (type === "mutualiste") {
    return (
      <span className="inline-block bg-accent-100 text-accent-600 rounded-full px-3 py-0.5 text-xs font-medium">
        Assureur mutualiste
      </span>
    );
  }
  return (
    <span className="inline-block bg-accent-100 text-accent-600 rounded-full px-3 py-0.5 text-xs font-medium">
      Assureur en délégation
    </span>
  );
}

export default function InsurerReviewsGrid() {
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
      id="avis"
      ref={sectionRef}
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Les principaux assureurs emprunteur passés au crible
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center fade-up">
          Après votre changement d&apos;assurance emprunteur, voici les assureurs en délégation les mieux notés. Tarifs, délais de traitement,
          qualité du service client, conditions d&apos;indemnisation : nous
          analysons objectivement les principaux acteurs du marché pour vous
          aider à faire le bon choix.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
          {INSURERS.map((insurer) => (
            <div
              key={insurer.slug}
              className="fade-up bg-white rounded-xl border border-gray-200 p-5 md:p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <InsurerLogo slug={insurer.slug} name={insurer.name} size={40} />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {insurer.name}
                      {insurer.parent && (
                        <span className="text-gray-500 font-normal text-sm">
                          {" "}({insurer.parent})
                        </span>
                      )}
                    </h3>
                    <div className="mt-1">
                      <TypeBadge type={insurer.type} />
                    </div>
                  </div>
                </div>
                <Stars count={insurer.rating} />
              </div>

              <p className="text-sm text-primary-800 font-semibold mb-3">
                {insurer.type === "groupe" ? "Taux moyen : " : "À partir de "}
                {insurer.rate}
              </p>

              <ul className="space-y-1 mb-4">
                {insurer.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-600 shrink-0 mt-0.5">+</span>
                    {pro}
                  </li>
                ))}
                {insurer.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-danger-500 shrink-0 mt-0.5">−</span>
                    {con}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="text-sm text-accent-600 hover:text-accent-500 font-medium transition-colors"
              >
                Lire l&apos;avis complet →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center fade-up">
          <a
            href="#"
            className="inline-flex items-center text-primary-800 hover:text-primary-700 font-semibold transition-colors text-sm"
          >
            Comparer tous les assureurs →
          </a>
        </div>
      </div>
    </section>
  );
}
