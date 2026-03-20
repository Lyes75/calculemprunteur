"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "8 500 €", label: "Économie moyenne constatée sur la durée du prêt" },
  { value: "0,10% à 0,15%", label: "Taux moyen en délégation (25-35 ans, non-fumeur)" },
  { value: "45%", label: "D'économie en moyenne vs l'assurance groupe de votre banque" },
  { value: "2 minutes", label: "Pour simuler votre économie" },
  { value: "3", label: "Offres personnalisées générées par simulation" },
];

export default function SavingsStats() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="economies"
      ref={sectionRef}
      className="bg-primary-900 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            L&apos;assurance emprunteur coûte en moyenne 30% trop cher
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-10 items-start">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center fade-up flex flex-col items-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-accent-500 tracking-tight mb-2 min-h-[2.5rem] md:min-h-[3rem] flex items-end justify-center">
                {stat.value}
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center fade-up">
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
            Le coût moyen d&apos;une assurance emprunteur bancaire se situe entre
            0,30% et 0,50% du capital emprunté. En passant par une assurance en
            délégation, ce taux descend entre 0,10% et 0,25% selon votre profil.
            Sur un prêt de 200 000 € sur 20 ans, cela représente une économie de
            5 000 à 15 000 €. Depuis la loi Lemoine, vous pouvez changer à tout
            moment, sans frais et sans justification.
          </p>
          <a
            href="#simulateur"
            className="inline-block bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-xl px-8 py-4 text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Calculer mon économie →
          </a>
        </div>
      </div>
    </section>
  );
}
