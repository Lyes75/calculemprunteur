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

      {/* CTA Magnolia */}
      <InsurerCTA insurer={insurer} />

      {/* FAQ */}
      <InsurerFAQ insurer={insurer} />

      {/* Related links */}
      <InsurerRelatedLinks insurer={insurer} />
    </>
  );
}
