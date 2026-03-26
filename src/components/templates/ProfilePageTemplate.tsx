import type { ProfileData } from "@/data/profiles";
import SavingsCalculator from "@/components/calculator/SavingsCalculator";
import ProfileBreadcrumb from "./ProfileBreadcrumb";
import ProfileHero from "./ProfileHero";
import ProfileContext from "./ProfileContext";
import ProfileAdvantages from "./ProfileAdvantages";
import ProfileRecommendations from "./ProfileRecommendations";
import ProfileFAQ from "./ProfileFAQ";
import ProfileRelatedLinks from "./ProfileRelatedLinks";
import ProfileCTA from "./ProfileCTA";

interface ProfilePageTemplateProps {
  profile: ProfileData;
}

export default function ProfilePageTemplate({
  profile,
}: ProfilePageTemplateProps) {
  return (
    <>
      {/* Breadcrumb */}
      <ProfileBreadcrumb
        profileName={profile.name}
        profileSlug={profile.slug}
      />

      {/* Hero */}
      <ProfileHero profile={profile} />

      {/* Calculator */}
      <section className="bg-gray-50 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      {/* Context */}
      <ProfileContext profile={profile} />

      {/* Challenges vs Advantages table */}
      <ProfileAdvantages profile={profile} />

      {/* Recommended insurers + switch tips */}
      <ProfileRecommendations profile={profile} />

      {/* FAQ */}
      <ProfileFAQ profile={profile} />

      {/* Related links */}
      <ProfileRelatedLinks profile={profile} />

      {/* Final CTA */}
      <ProfileCTA profile={profile} />
    </>
  );
}
