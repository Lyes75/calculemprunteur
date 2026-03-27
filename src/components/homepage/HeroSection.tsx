import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-gray-50 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-16">

          {/* Texte — gauche en desktop, centré en mobile */}
          <div className="text-center md:text-left md:flex-1">

            {/* 1. H1 — "Changement" pour le SEO, taille réduite pour le 50/50 */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3 whitespace-nowrap">
              Changement d&apos;Assurance Emprunteur
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-accent-600 tracking-tight leading-tight mb-4">
              Comparez et changez en 2 minutes
            </p>

            {/* 2. Slogan — phrase signature du site */}
            <p className="text-lg md:text-xl font-semibold text-primary-900 mb-4">
              Changez. Économisez. C&apos;est tout.
            </p>

            {/* 3. Sous-titre — 1-2 lignes explicatives */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              Comparez votre contrat groupe avec les meilleures offres en délégation.
              Résultat en 2 minutes, 100% gratuit.
              <br />
              Loi Lemoine : changez à tout moment, sans frais.
            </p>

            {/* 4. CTA — bouton visible dans le hero */}
            <a
              href="#simulateur"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-colors shadow-lg shadow-accent-600/20"
            >
              Simuler mon économie
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* 5. Trust badges — sous le CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-5 justify-center md:justify-start">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Sans engagement
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                2 minutes
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                100% gratuit
              </span>
            </div>
          </div>

          {/* Illustration — desktop uniquement */}
          <div className="hidden md:flex justify-center items-center md:flex-1">
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
