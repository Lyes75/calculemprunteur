import type { ProfileData } from "@/data/profiles";

interface ProfileRecommendationsProps {
  profile: ProfileData;
}

export default function ProfileRecommendations({
  profile,
}: ProfileRecommendationsProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Assureurs recommandés pour les {profile.name.toLowerCase()}
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Ces assureurs se distinguent par leur expertise sur les profils{" "}
          {profile.shortName.toLowerCase()}. Comparez leurs offres avec notre
          simulateur pour trouver le meilleur tarif.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {profile.recommendedInsurers.map((insurer) => (
            <div
              key={insurer.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary-200 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {insurer.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {insurer.why}
              </p>
            </div>
          ))}
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

        <p className="text-xs text-gray-400 mt-3 text-center max-w-2xl mx-auto">
          * Taux indicatifs basés sur les offres moyennes du marché pour ce
          profil. Votre tarif réel dépend de votre situation personnelle —
          demandez un devis pour un chiffre personnalisé.
        </p>
      </div>
    </section>
  );
}
