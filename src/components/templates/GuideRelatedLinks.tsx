import type { GuideData } from "@/data/guides";
import { GUIDES } from "@/data/guides";
import { PROFILES } from "@/data/profiles";
import { BANKS } from "@/data/banks";

interface GuideRelatedLinksProps {
  guide: GuideData;
}

export default function GuideRelatedLinks({ guide }: GuideRelatedLinksProps) {
  const relatedGuides = guide.relatedGuides
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter(Boolean);

  const relatedProfiles = guide.relatedProfiles
    .map((slug) => PROFILES.find((p) => p.slug === slug))
    .filter(Boolean);

  const relatedBanks = guide.relatedBanks
    .map((slug) => BANKS.find((b) => b.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Pages li&eacute;es
          </h2>
        </div>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Guides li&eacute;s
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedGuides.map((rg) => (
                <a
                  key={rg!.slug}
                  href={`/guide/${rg!.slug}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {rg!.heroTitle.length > 50
                      ? rg!.heroTitle.substring(0, 50) + "..."
                      : rg!.heroTitle}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Related profiles */}
        {relatedProfiles.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profils concern&eacute;s
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedProfiles.map((rp) => (
                <a
                  key={rp!.slug}
                  href={`/assurance-emprunteur-${rp!.slug}`}
                  className="inline-block bg-primary-50 hover:bg-primary-100 text-primary-800 text-sm font-medium rounded-full px-4 py-2 transition-colors"
                >
                  {rp!.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Related banks */}
        {relatedBanks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Banques li&eacute;es
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedBanks.map((rb) => (
                <a
                  key={rb!.slug}
                  href={`/assurance-emprunteur-${rb!.slug}`}
                  className="inline-block bg-accent-50 hover:bg-accent-100 text-accent-600 text-sm font-medium rounded-full px-4 py-2 transition-colors"
                >
                  {rb!.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
