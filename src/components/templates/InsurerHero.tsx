import type { InsurerData } from "@/data/insurers";
import InsurerLogo from "@/components/ui/InsurerLogo";

interface InsurerHeroProps {
  insurer: InsurerData;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= count ? "text-warning-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TypeBadge({ type, label }: { type: string; label: string }) {
  const colors =
    type === "groupe"
      ? "bg-primary-100 text-primary-800"
      : "bg-accent-100 text-accent-600";

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colors}`}
    >
      {label}
    </span>
  );
}

export default function InsurerHero({ insurer }: InsurerHeroProps) {
  return (
    <section className="bg-gray-50 pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
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
            <li className="text-gray-700 font-medium">
              Avis {insurer.name}
            </li>
          </ol>
        </nav>

        {/* Logo + badge + rating */}
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <InsurerLogo slug={insurer.slug} name={insurer.name} size={48} />
          <TypeBadge type={insurer.type} label={insurer.typeLabel} />
          <Stars count={insurer.rating} />
        </div>

        {/* H1 */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          {insurer.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-2">
          {insurer.heroSubtitle}
        </p>

        {/* Key facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {insurer.keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center"
            >
              <p className="text-xs text-gray-500 mb-1">{fact.label}</p>
              <p className="text-sm font-semibold text-gray-900">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        {/* Starting rate highlight */}
        <div className="mt-6 inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-5 py-2">
          <span className="text-sm text-gray-700">{insurer.rateLabel}</span>
          <span className="text-lg font-bold text-accent-600">
            {insurer.startingRate}*
          </span>
        </div>
      </div>
    </section>
  );
}
