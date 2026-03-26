import type { ProfileData } from "@/data/profiles";

interface ProfileCTAProps {
  profile: ProfileData;
}

export default function ProfileCTA({ profile }: ProfileCTAProps) {
  return (
    <section className="bg-primary-900 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Simulez votre économie en tant que{" "}
          {profile.shortName.toLowerCase()}
        </h2>
        <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez combien vous pouvez économiser avec un profil{" "}
          {profile.shortName.toLowerCase()}. Simulation gratuite en 2&nbsp;minutes.
        </p>
        <a
          href="#simulateur"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-xl transition-colors duration-200 text-base md:text-lg"
        >
          Calculer mon économie &rarr;
        </a>
      </div>
    </section>
  );
}
