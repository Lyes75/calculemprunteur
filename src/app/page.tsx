import HeroSection from "@/components/homepage/HeroSection";
import SavingsCalculator from "@/components/calculator/SavingsCalculator";
import TrustBadges from "@/components/homepage/TrustBadges";
import HowItWorks from "@/components/homepage/HowItWorks";
import WhyChange from "@/components/homepage/WhyChange";
import FAQ from "@/components/homepage/FAQ";
import JsonLd from "@/components/seo/JsonLd";

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que la loi Lemoine ?",
    answer:
      "La loi Lemoine, entrée en vigueur le 1er juin 2022, permet à tout emprunteur de résilier et de changer son assurance de prêt immobilier à tout moment, sans frais et sans attendre de date anniversaire. Elle supprime également le questionnaire de santé pour les prêts de moins de 200 000 € dont le terme intervient avant les 60 ans de l'emprunteur.",
  },
  {
    question: "Puis-je changer d'assurance emprunteur à tout moment ?",
    answer:
      "Oui, depuis la loi Lemoine, vous pouvez changer d'assurance emprunteur à tout moment, que votre prêt soit récent ou ancien. Il n'y a plus de contrainte de date anniversaire.",
  },
  {
    question: "Ma banque peut-elle refuser mon changement d'assurance ?",
    answer:
      "Votre banque ne peut refuser votre changement d'assurance que si le nouveau contrat ne présente pas un niveau de garanties équivalent à celui du contrat initial. Elle dispose de 10 jours ouvrés pour vous notifier sa décision et doit motiver tout refus de manière précise.",
  },
  {
    question: "Combien coûte le changement d'assurance emprunteur ?",
    answer:
      "Le changement d'assurance emprunteur est totalement gratuit. La loi interdit à votre banque de facturer des frais de résiliation ou de modification.",
  },
  {
    question: "Quelles sont les garanties minimales obligatoires ?",
    answer:
      "Les garanties minimales exigées dépendent de votre banque et de votre profil. En général, les garanties décès et PTIA sont systématiquement requises. Les garanties ITT et IPP/IPT sont souvent demandées pour les résidences principales.",
  },
  {
    question: "Comment fonctionne le simulateur CalculEmprunteur.fr ?",
    answer:
      "Notre simulateur compare le coût de votre assurance bancaire actuelle avec les taux moyens pratiqués par les assureurs en délégation, en tenant compte de votre âge, de votre profil et des caractéristiques de votre prêt.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CalculEmprunteur.fr",
  description: "Calculateur gratuit d'économies en assurance emprunteur",
  url: "https://calculemprunteur.fr",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />

      {/* Section 1 — Hero + Calculateur */}
      <HeroSection />
      <section className="bg-gray-50 pb-8 md:pb-12 -mt-2">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      {/* Section 2 — Trust Badges */}
      <TrustBadges />

      {/* Section 3 — Comment ça marche */}
      <HowItWorks />

      {/* Section 4 — Pourquoi changer */}
      <WhyChange />

      {/* Section 5 — FAQ */}
      <FAQ />

      {/* Section 6 — CTA final */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Prêt à économiser sur votre assurance emprunteur ?
          </h2>
          <a
            href="#simulateur"
            className="
              inline-block bg-accent-600 hover:bg-accent-500 text-white
              font-semibold rounded-xl px-8 py-4 text-base md:text-lg
              shadow-md hover:shadow-lg transition-all duration-200
            "
          >
            Lancer la simulation →
          </a>
        </div>
      </section>
    </>
  );
}
