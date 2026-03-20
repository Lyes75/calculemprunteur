import HeroSection from "@/components/homepage/HeroSection";
import SavingsCalculator from "@/components/calculator/SavingsCalculator";
import TrustBadges from "@/components/homepage/TrustBadges";
import SavingsStats from "@/components/homepage/SavingsStats";
import HowItWorks from "@/components/homepage/HowItWorks";
import ComparisonTable from "@/components/homepage/ComparisonTable";
import BankRatesGrid from "@/components/homepage/BankRatesGrid";
import WhyChange from "@/components/homepage/WhyChange";
import ProfileCards from "@/components/homepage/ProfileCards";
import GuaranteesExplainer from "@/components/homepage/GuaranteesExplainer";
import InsurerReviewsGrid from "@/components/homepage/InsurerReviewsGrid";
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
      "Notre simulateur calcule vos économies en comparant votre assurance actuelle avec les meilleures offres en délégation du marché. En plus du calcul d'économie, il sélectionne les 3 assureurs les plus adaptés à votre profil — en tenant compte de votre âge, votre état de santé et votre profession — et génère automatiquement votre lettre de changement d'assurance, pré-remplie et conforme à la loi Lemoine. Le service est entièrement gratuit et sans engagement.",
  },
  {
    question: "Quel est le prix moyen d'une assurance emprunteur ?",
    answer:
      "Le coût moyen d'une assurance emprunteur représente entre 0,10% et 0,50% du capital emprunté par an, selon votre âge, votre état de santé et le type de contrat. Pour un prêt de 200 000 €, cela représente entre 200 € et 1 000 € par an. Les contrats en délégation sont généralement 2 à 3 fois moins chers que les contrats groupe bancaires.",
  },
  {
    question: "Qu'est-ce que la délégation d'assurance emprunteur ?",
    answer:
      "La délégation d'assurance consiste à choisir un assureur externe plutôt que le contrat groupe de votre banque. Depuis la loi Lagarde (2010), votre banque ne peut pas refuser une délégation si les garanties sont équivalentes. C'est le moyen le plus efficace de réduire le coût de votre assurance emprunteur.",
  },
  {
    question: "Quels sont les meilleurs assureurs emprunteur en 2026 ?",
    answer:
      "Les assureurs en délégation les plus compétitifs en 2026 sont April, Generali, Swiss Life, Cardif Liberté et Suravenir. Le choix dépend de votre profil : âge, état de santé, profession et montant du prêt. Notre simulateur compare les offres adaptées à votre situation.",
  },
  {
    question: "L'assurance emprunteur est-elle obligatoire ?",
    answer:
      "Légalement, l'assurance emprunteur n'est pas obligatoire. En pratique, aucune banque ne vous accorde un prêt immobilier sans assurance. Elle est donc obligatoire de fait pour obtenir votre financement. Les garanties décès et PTIA sont systématiquement exigées.",
  },
  {
    question: "Comment fonctionne le questionnaire médical ?",
    answer:
      "Le questionnaire médical permet à l'assureur d'évaluer votre état de santé et d'ajuster ses tarifs. Depuis la loi Lemoine, il est supprimé pour les prêts dont la part assurée est inférieure à 200 000 € et dont le terme intervient avant le 60ème anniversaire de l'emprunteur.",
  },
  {
    question: "Qu'est-ce que la convention AERAS ?",
    answer:
      "La convention AERAS (S'Assurer et Emprunter avec un Risque Aggravé de Santé) facilite l'accès à l'assurance emprunteur pour les personnes ayant ou ayant eu un problème de santé grave. Elle prévoit un droit à l'oubli pour certains cancers et maladies chroniques, et plafonne les surprimes applicables.",
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

      {/* 1 — Hero + Calculateur */}
      <HeroSection />
      <section className="bg-gray-50 pb-8 md:pb-12 -mt-2">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      {/* 2 — Trust Badges */}
      <TrustBadges />

      {/* 3 — Économies moyennes constatées */}
      <SavingsStats />

      {/* 4 — Comment ça marche */}
      <HowItWorks />

      {/* 5 — Comparatif groupe vs délégation */}
      <ComparisonTable />

      {/* 6 — Taux par banque */}
      <BankRatesGrid />

      {/* 7 — Pourquoi changer (loi Lemoine) */}
      <WhyChange />

      {/* 8 — Par profil */}
      <ProfileCards />

      {/* 9 — Garanties expliquées */}
      <GuaranteesExplainer />

      {/* 10 — Avis assureurs */}
      <InsurerReviewsGrid />

      {/* 11 — FAQ enrichie */}
      <FAQ />

      {/* 12 — CTA final */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Simulez, comparez, et recevez votre lettre de changement en 2 minutes
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
