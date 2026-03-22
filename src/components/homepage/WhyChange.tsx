"use client";

import { useEffect, useRef } from "react";

export default function WhyChange() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="loi-lemoine"
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="fade-up">
          <div className="w-10 h-1 bg-accent-600 mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Changement d&apos;assurance emprunteur : pourquoi et comment en profiter ?
          </h2>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed fade-up">
          <p>
            Depuis le 1er juin 2022, la loi Lemoine permet à tout emprunteur de résilier
            son assurance de prêt immobilier à tout moment, sans frais et sans pénalité.
            Cette avancée majeure met fin aux contraintes de dates anniversaires qui
            limitaient auparavant les possibilités de changement. Que votre prêt ait été
            signé il y a un mois ou dix ans, vous pouvez désormais faire jouer la
            concurrence librement.
          </p>

          <p>
            L&apos;assurance emprunteur représente en moyenne le deuxième poste de coût
            d&apos;un crédit immobilier, juste après les intérêts. Les contrats
            proposés par les banques (assurance groupe) sont souvent bien plus chers que
            les offres individuelles des assureurs spécialisés. Les emprunteurs
            économisent en moyenne 5 000 à 15 000 € sur la durée de leur prêt en
            passant à une assurance en délégation, avec des garanties équivalentes voire
            supérieures.
          </p>

          <p>
            Votre banque ne peut pas refuser votre demande de changement dès lors que
            le nouveau contrat présente un niveau de garanties au moins équivalent.
            Elle dispose de 10 jours ouvrés pour vous répondre et doit motiver tout
            refus. La procédure est simple : votre nouvel assureur s&apos;occupe de
            toutes les démarches administratives. Vous n&apos;avez rien à faire, si ce
            n&apos;est économiser.
          </p>
          <p>
            Le changement d&apos;assurance emprunteur est totalement gratuit. Il n&apos;y a aucuns frais de dossier, aucune pénalité, et aucun préavis à respecter depuis la loi Lemoine de 2022. Le délai de traitement est de 10 jours ouvrés maximum : votre banque doit accepter ou motiver un refus écrit dans ce délai. En pratique, le changement complet prend 2 à 4 semaines entre la souscription de votre nouveau contrat et la prise d&apos;effet.
          </p>

          <p>
            La procédure est plus simple qu&apos;il n&apos;y paraît : il suffit d&apos;envoyer une lettre de changement à votre banque accompagnée de votre nouveau contrat d&apos;assurance. Votre banque dispose de 10 jours ouvrés pour accepter ou motiver un refus (uniquement si les garanties ne sont pas équivalentes). Sur CalculEmprunteur.fr, cette lettre de changement est générée automatiquement avec les données de votre prêt — il ne vous reste plus qu&apos;à l&apos;envoyer.
          </p>
        </div>

        <div className="mt-8 fade-up">
          <a
            href="#simulateur"
            className="inline-flex items-center text-accent-600 hover:text-accent-500 font-semibold transition-colors"
          >
            Calculer mon économie →
          </a>
        </div>
      </div>
    </section>
  );
}
