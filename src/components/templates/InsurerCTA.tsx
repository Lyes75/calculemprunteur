import type { InsurerData } from "@/data/insurers";
import { getMagnoliaLink } from "@/utils/affiliateLinks";

interface InsurerCTAProps {
  insurer: InsurerData;
}

export default function InsurerCTA({ insurer }: InsurerCTAProps) {
  return (
    <section className="bg-primary-900 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {insurer.ctaTitle}
        </h2>
        <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          {insurer.ctaSubtitle}
        </p>
        <a
          href={getMagnoliaLink(`avis-${insurer.slug}`)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-colors shadow-lg shadow-accent-600/20"
        >
          Comparer {insurer.name} avec les autres offres
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
        <p className="text-xs text-primary-300 mt-4 max-w-md mx-auto">
          Comparaison r&eacute;alis&eacute;e via notre partenaire Magnolia.fr, courtier
          ind&eacute;pendant couvrant 28 contrats.
        </p>
      </div>
    </section>
  );
}
