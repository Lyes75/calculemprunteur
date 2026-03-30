import type { InsurerData } from "@/data/insurers";
import InsurerHero from "./InsurerHero";
import InsurerOverview from "./InsurerOverview";
import InsurerRates from "./InsurerRates";
import InsurerProsConsTable from "./InsurerProsConsTable";
import InsurerGuarantees from "./InsurerGuarantees";
import InsurerVsGroup from "./InsurerVsGroup";
import InsurerCTA from "./InsurerCTA";
import InsurerFAQ from "./InsurerFAQ";
import InsurerRelatedLinks from "./InsurerRelatedLinks";

interface InsurerPageTemplateProps {
  insurer: InsurerData;
}

export default function InsurerPageTemplate({
  insurer,
}: InsurerPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <InsurerHero insurer={insurer} />

      {/* Overview */}
      <InsurerOverview insurer={insurer} />

      {/* Rate grid */}
      <InsurerRates insurer={insurer} />

      {/* Pros / Cons */}
      <InsurerProsConsTable insurer={insurer} />

      {/* Guarantees */}
      <InsurerGuarantees insurer={insurer} />

      {/* Vs Group */}
      <InsurerVsGroup insurer={insurer} />

      {/* Simulator link */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Simulez votre &eacute;conomie avec {insurer.name}
          </h2>
          <p className="text-gray-600 mb-6">
            Comparez votre contrat actuel avec les taux {insurer.name} en
            2&nbsp;minutes. R&eacute;sultat imm&eacute;diat, 100% gratuit.
          </p>
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
      <InsurerCTA insurer={insurer} />

      {/* FAQ */}
      <InsurerFAQ insurer={insurer} />

      {/* Related links */}
      <InsurerRelatedLinks insurer={insurer} />
    </>
  );
}
