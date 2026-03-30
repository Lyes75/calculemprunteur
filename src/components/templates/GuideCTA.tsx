import type { GuideData } from "@/data/guides";
import { getMagnoliaLink } from "@/utils/affiliateLinks";

interface GuideCTAProps {
  guide: GuideData;
}

export default function GuideCTA({ guide }: GuideCTAProps) {
  return (
    <>
      {/* CTA simulateur */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {guide.ctaTitle}
          </h2>
          <p className="text-gray-600 mb-6">{guide.ctaSubtitle}</p>
          <a
            href="/#simulateur"
            className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Simuler mon &eacute;conomie
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Magnolia */}
      <section className="bg-primary-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-primary-100 mb-6">
            Vous &ecirc;tes pr&ecirc;t &agrave; changer ? Comparez les offres
            directement.
          </p>
          <a
            href={getMagnoliaLink(`guide-${guide.slug}`)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-lg shadow-accent-600/20"
          >
            Comparer les offres sur Magnolia.fr
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-xs text-primary-300 mt-3 max-w-md mx-auto">
            Comparaison via notre partenaire Magnolia.fr, courtier
            ind&eacute;pendant couvrant 28 contrats.
          </p>
        </div>
      </section>
    </>
  );
}
