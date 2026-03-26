import Link from "next/link";
import type { ProfileData } from "@/data/profiles";
import { PROFILES, PROFILE_LABELS } from "@/data/profiles";
import { BANKS } from "@/data/banks";
import BankLogo from "@/components/ui/BankLogo";

interface ProfileRelatedLinksProps {
  profile: ProfileData;
}

export default function ProfileRelatedLinks({
  profile,
}: ProfileRelatedLinksProps) {
  const relatedBanks = BANKS.filter((b) =>
    profile.relatedBanks.includes(b.slug)
  );

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Related profiles as pills */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Autres profils d&apos;emprunteurs
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {profile.relatedProfiles.map((slug) => {
              const relatedProfile = PROFILES.find((p) => p.slug === slug);
              return (
                <Link
                  key={slug}
                  href={`/assurance-emprunteur-${slug}`}
                  className="inline-block text-sm text-gray-600 bg-gray-100 hover:bg-primary-50 hover:text-primary-800 rounded-full px-4 py-1.5 transition-colors"
                >
                  {relatedProfile?.name || PROFILE_LABELS[slug] || slug}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Related banks as cards */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Changer d&apos;assurance par banque
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedBanks.map((bank) => (
              <Link
                key={bank.slug}
                href={`/assurance-emprunteur-${bank.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-primary-200 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BankLogo
                    slug={bank.slug}
                    name={bank.name}
                    shortName={bank.shortName}
                    badgeColor={bank.badgeColor}
                    size={32}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      {bank.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary-800 font-medium">
                  Taux groupe :{" "}
                  {bank.groupRate.toFixed(2).replace(".", ",")} %*
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

        {/* Link back to homepage */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-sm text-primary-800 hover:text-primary-600 underline underline-offset-2 transition-colors"
          >
            Assurance emprunteur : simuler vos économies
          </Link>
        </div>
      </div>
    </section>
  );
}
