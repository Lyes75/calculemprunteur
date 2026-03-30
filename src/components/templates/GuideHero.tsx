import type { GuideData } from "@/data/guides";

interface GuideHeroProps {
  guide: GuideData;
}

export default function GuideHero({ guide }: GuideHeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <a
                href="/"
                className="hover:text-accent-600 transition-colors"
              >
                Accueil
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <a
                href="/#guides"
                className="hover:text-accent-600 transition-colors"
              >
                Guides
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700 font-medium">
              {guide.heroTitle.includes(":")
                ? guide.heroTitle.split(":")[0].trim()
                : guide.heroTitle}
            </li>
          </ol>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
            <svg
              className="w-3.5 h-3.5"
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
            Guide
          </span>
          <span className="text-xs text-gray-500">
            Mis &agrave; jour en {guide.updatedDate}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          {guide.heroTitle}
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {guide.heroSubtitle}
        </p>
      </div>
    </section>
  );
}
