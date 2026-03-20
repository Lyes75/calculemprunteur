import Link from "next/link";
import type { BankData } from "@/data/banks";
import { BANKS } from "@/data/banks";

interface BankRelatedLinksProps {
  bank: BankData;
}

const PROFILE_LINKS = [
  {
    title: "Jeune emprunteur (moins de 35 ans)",
    description: "Les meilleures offres pour les jeunes actifs",
    href: "#",
  },
  {
    title: "Emprunteur senior (plus de 50 ans)",
    description: "Assurance adaptee aux profils seniors",
    href: "#",
  },
  {
    title: "Profession a risque",
    description: "Solutions pour les metiers specifiques",
    href: "#",
  },
];

export default function BankRelatedLinks({ bank }: BankRelatedLinksProps) {
  const relatedBanks = BANKS.filter((b) => b.slug !== bank.slug).slice(0, 4);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Related banks */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Changer d&apos;assurance dans les autres banques
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedBanks.map((relatedBank) => (
              <Link
                key={relatedBank.slug}
                href={`/assurance-emprunteur-${relatedBank.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-primary-200 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: relatedBank.badgeColor }}
                  >
                    {relatedBank.shortName}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      {relatedBank.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary-800 font-medium">
                  Taux groupe : {relatedBank.groupRate.toFixed(2).replace(".", ",")} %
                </p>
                <p className="text-xs text-accent-600 mt-1">
                  Voir le detail &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Related profiles */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            L&apos;assurance emprunteur selon votre profil
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROFILE_LINKS.map((profile) => (
              <Link
                key={profile.title}
                href={profile.href}
                className="bg-gray-50 rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-primary-200 transition-all duration-200"
              >
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  {profile.title}
                </p>
                <p className="text-xs text-gray-500">
                  {profile.description}
                </p>
                <p className="text-xs text-accent-600 mt-2 font-medium">
                  En savoir plus &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
