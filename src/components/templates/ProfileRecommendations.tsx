import type { ProfileData } from "@/data/profiles";
import InsurerLogo from "@/components/ui/InsurerLogo";

interface ProfileRecommendationsProps {
  profile: ProfileData;
}

const INSURER_SLUG_MAP: Record<string, string> = {
  "April": "april",
  "April International": "april",
  "Generali": "generali",
  "Swiss Life": "swisslife",
  "SwissLife": "swisslife",
  "Suravenir": "suravenir",
  "MetLife": "metlife",
  "Cardif Liberté": "cardif-liberte",
  "MGEN / MNH": "mgen",
  "Macif": "macif",
  "CNP Assurances": "cnp",
  "Cardif": "cardif",
};

export default function ProfileRecommendations({
  profile,
}: ProfileRecommendationsProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Assureurs recommandés pour votre profil
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {profile.recommendedInsurers.map((insurer, i) => {
            const logoSlug = INSURER_SLUG_MAP[insurer.name] || "";
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5 text-center flex flex-col hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col items-center mb-3">
                  {logoSlug && (
                    <div className="mb-2">
                      <InsurerLogo slug={logoSlug} name={insurer.name} size={40} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {insurer.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {insurer.why}
                </p>
                <a
                  href="#simulateur"
                  className="inline-block text-sm font-medium text-accent-600 hover:text-accent-500 transition-colors"
                >
                  Simuler avec {insurer.name} &rarr;
                </a>
              </div>
            );
          })}
        </div>

        {/* Switch tips callout */}
        <div className="border-l-4 border-accent-600 bg-accent-50 p-4 rounded-r-xl max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Notre conseil
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {profile.switchTips}
          </p>
        </div>
      </div>
    </section>
  );
}
