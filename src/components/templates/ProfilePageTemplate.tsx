import type { ProfileData } from "@/data/profiles";
import SavingsCalculator from "@/components/calculator/SavingsCalculator";
import ProfileBreadcrumb from "./ProfileBreadcrumb";
import ProfileHero from "./ProfileHero";
import ProfileContext from "./ProfileContext";
import ProfileComparison from "./ProfileComparison";
import ProfileAdvantages from "./ProfileAdvantages";
import ProfileRecommendations from "./ProfileRecommendations";
import ProfileSteps from "./ProfileSteps";
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
      {/* 1. Breadcrumb */}
      <ProfileBreadcrumb
        profileName={profile.name}
        profileSlug={profile.slug}
      />

      {/* 2. Hero (sans disclaimer) */}
      <ProfileHero profile={profile} />

      {/* 3. Calculator */}
      <section className="bg-gray-50 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      {/* 4. Context éditorial */}
      <ProfileContext profile={profile} />

      {/* 5. Tableau comparatif chiffré */}
      <ProfileComparison profile={profile} />

      {/* 6. Défis vs Avantages */}
      <ProfileAdvantages profile={profile} />

      {/* 7. Assureurs recommandés + conseil */}
      <ProfileRecommendations profile={profile} />

      {/* 8. Comment changer (3 étapes) */}
      <ProfileSteps />

      {/* 9. FAQ */}
      <ProfileFAQ profile={profile} />

      {/* 10. Maillage interne */}
      <ProfileRelatedLinks profile={profile} />

      {/* 11. CTA final personnalisé */}
      <ProfileCTA profile={profile} />
    </>
  );
}
