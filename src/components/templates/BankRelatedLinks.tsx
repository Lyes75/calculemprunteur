import Link from "next/link";
import type { BankData } from "@/data/banks";
import { BANKS } from "@/data/banks";

interface BankRelatedLinksProps {
  bank: BankData;
}

const PROFILE_LABELS: Record<string, string> = {
  "senior": "Senior (60+)",
  "jeune-emprunteur": "Jeune emprunteur",
  "fonctionnaire": "Fonctionnaire",
  "risque-aggrave": "Risque aggrav\u00e9",
  "investissement-locatif": "Investissement locatif",
  "expatrie": "Expatri\u00e9",
  "sans-questionnaire-medical": "Sans questionnaire m\u00e9dical",
  "profession-risque": "Profession \u00e0 risque",
  "sci": "SCI",
};

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
                  Voir le détail &rarr;
                </p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            * Taux moyens indicatifs. Votre taux réel dépend de votre contrat.
          </p>
        </div>

        {/* Related profiles as pills */}
        <div className="text-center mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Assurance emprunteur par profil
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {bank.relatedProfiles.map((slug) => (
              <a
                key={slug}
                href="/#simulateur"
                className="inline-block text-sm text-gray-600 bg-gray-100 hover:bg-primary-50 hover:text-primary-800 rounded-full px-4 py-1.5 transition-colors"
              >
                {PROFILE_LABELS[slug] || slug}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
