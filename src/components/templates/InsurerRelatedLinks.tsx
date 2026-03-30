import type { InsurerData } from "@/data/insurers";
import { INSURERS } from "@/data/insurers";
import { PROFILES } from "@/data/profiles";
import { BANKS } from "@/data/banks";
import InsurerLogo from "@/components/ui/InsurerLogo";

interface InsurerRelatedLinksProps {
  insurer: InsurerData;
}

export default function InsurerRelatedLinks({
  insurer,
}: InsurerRelatedLinksProps) {
  const relatedInsurers = insurer.relatedInsurers
    .map((slug) => INSURERS.find((i) => i.slug === slug))
    .filter(Boolean);

  const relatedProfiles = insurer.relatedProfiles
    .map((slug) => PROFILES.find((p) => p.slug === slug))
    .filter(Boolean);

  const relatedBanks = insurer.relatedBanks
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

        {/* Related insurers */}
        {relatedInsurers.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Autres assureurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedInsurers.map((ri) => (
                <a
                  key={ri!.slug}
                  href={`/avis-${ri!.slug}-assurance-emprunteur`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
                >
                  <InsurerLogo
                    slug={ri!.slug}
                    name={ri!.name}
                    size={32}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Avis {ri!.name}
                    </p>
                    <p className="text-xs text-gray-500">{ri!.typeLabel}</p>
                  </div>
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
