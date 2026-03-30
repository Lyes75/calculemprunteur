import type { GuideData } from "@/data/guides";
import GuideHero from "./GuideHero";
import GuideContent from "./GuideContent";
import GuideCTA from "./GuideCTA";
import GuideFAQ from "./GuideFAQ";
import GuideRelatedLinks from "./GuideRelatedLinks";

interface GuidePageTemplateProps {
  guide: GuideData;
}

export default function GuidePageTemplate({ guide }: GuidePageTemplateProps) {
  return (
    <>
      <GuideHero guide={guide} />
      <GuideContent guide={guide} />
      <GuideCTA guide={guide} />
      <GuideFAQ guide={guide} />
      <GuideRelatedLinks guide={guide} />
    </>
  );
}
