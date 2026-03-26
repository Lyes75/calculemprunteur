import type { ProfileData } from "@/data/profiles";

interface ProfileHeroProps {
  profile: ProfileData;
}

export default function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section className="bg-gray-50 pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight text-center mb-4">
          {profile.heroTitle}
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
          {profile.heroSubtitle}
        </p>
      </div>
    </section>
  );
}
