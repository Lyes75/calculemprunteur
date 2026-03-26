import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-gray-50 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-16">

          {/* Texte — gauche en desktop, centré en mobile */}
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Changement d&apos;assurance emprunteur : Combien économisez-vous ?
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl md:max-w-none leading-relaxed">
              Grâce à la loi Lemoine, le changement d&apos;assurance emprunteur est possible à tout moment, sans frais. Simulez vos économies, découvrez les meilleures offres pour votre profil, et générez votre lettre de changement. 100% gratuit.
            </p>
          </div>

          {/* Illustration — visible uniquement en desktop */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <Image
              src="/images/hero-illustration.png"
              alt="Simulation d'économies en assurance emprunteur — graphique de réduction des coûts"
              width={500}
              height={300}
              className="w-full max-w-md lg:max-w-lg object-contain"
              priority={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
