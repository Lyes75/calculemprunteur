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
      "Notre simulateur de changement d'assurance emprunteur calcule vos économies en comparant votre assurance actuelle avec les meilleures offres en délégation du marché. En plus du calcul d'économie, il sélectionne les 3 assureurs les plus adaptés à votre profil — en tenant compte de votre âge, votre état de santé et votre profession — et génère automatiquement votre lettre de changement, pré-remplie et conforme à la loi Lemoine. Le service est entièrement gratuit et sans engagement.",
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
  {
    question: "Le changement d'assurance emprunteur est-il vraiment gratuit ?",
    answer:
      "Oui, le changement d'assurance emprunteur est 100% gratuit depuis la loi Lemoine (juin 2022). Il n'y a aucuns frais de dossier, aucune pénalité, et aucun préavis à respecter. Votre banque ne peut pas vous facturer de frais pour traiter votre demande de changement. Le seul coût est l'envoi de votre lettre en recommandé (environ 5\u20AC).",
  },
  {
    question: "Quand peut-on changer d'assurance emprunteur ?",
    answer:
      "Depuis la loi Lemoine, vous pouvez changer d'assurance emprunteur à tout moment, sans condition de date anniversaire ni de durée minimum de détention. Cette possibilité s'applique à tous les contrats d'assurance de prêt immobilier, quelle que soit leur date de signature. Il suffit que votre nouveau contrat offre des garanties au moins équivalentes à celles exigées par votre banque.",
  },
  {
    question: "Quels documents sont nécessaires pour changer d'assurance emprunteur ?",
    answer:
      "Pour changer d'assurance emprunteur, vous avez besoin de : votre offre de prêt (pour connaître les garanties exigées par votre banque), votre nouveau contrat d'assurance (souscrit auprès de l'assureur en délégation de votre choix), et une lettre de demande de changement adressée à votre banque. Sur CalculEmprunteur.fr, cette lettre est générée automatiquement avec les données de votre prêt.",
  },
  {
    question: "Ma banque peut-elle refuser le changement d'assurance emprunteur ?",
    answer:
      "Votre banque ne peut refuser le changement que si votre nouveau contrat ne respecte pas l'équivalence de garanties définie dans votre offre de prêt. Le refus doit être motivé par écrit dans un délai de 10 jours ouvrés. Tout refus non motivé, hors délai, ou pour un motif autre que l'équivalence de garanties est illégal. En cas de refus abusif, vous pouvez saisir le médiateur bancaire.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CalculEmprunteur.fr",
  description: "Calculateur gratuit d'économies en assurance emprunteur",
  url: "https://www.calculemprunteur.fr",
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

      {/* 12 — Nos guides */}
      <section id="guides" className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nos guides assurance emprunteur
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour changer d&apos;assurance
              emprunteur en toute confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/guide/loi-lemoine",
                title: "Loi Lemoine",
                desc: "Changez \u00e0 tout moment, sans frais",
              },
              {
                href: "/guide/delegation-assurance",
                title: "D\u00e9l\u00e9gation d\u2019assurance",
                desc: "Choisir un assureur externe \u00e0 votre banque",
              },
              {
                href: "/guide/taux-assurance-emprunteur",
                title: "Taux assurance emprunteur",
                desc: "Bar\u00e8me 2026 par \u00e2ge et profil",
              },
              {
                href: "/guide/lettre-resiliation",
                title: "Lettre de r\u00e9siliation",
                desc: "Mod\u00e8le gratuit conforme loi Lemoine",
              },
              {
                href: "/guide/questionnaire-medical",
                title: "Questionnaire m\u00e9dical",
                desc: "Quand il est supprim\u00e9, quoi d\u00e9clarer",
              },
              {
                href: "/guide/convention-aeras",
                title: "Convention AERAS",
                desc: "Emprunter avec un risque aggrav\u00e9 de sant\u00e9",
              },
              {
                href: "/guide/equivalence-garanties",
                title: "\u00c9quivalence de garanties",
                desc: "Les 18 crit\u00e8res CCSF expliqu\u00e9s",
              },
              {
                href: "/guide/cout-assurance-emprunteur",
                title: "Co\u00fbt assurance emprunteur",
                desc: "Combien \u00e7a co\u00fbte vraiment, exemples chiffr\u00e9s",
              },
              {
                href: "/guide/refus-banque",
                title: "Refus de la banque",
                desc: "Vos recours en cas de refus abusif",
              },
              {
                href: "/guide/loi-hamon-vs-lemoine",
                title: "Loi Hamon vs Lemoine",
                desc: "Ce qui a chang\u00e9 depuis 2022",
              },
            ].map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="flex items-start gap-3 bg-gray-50 hover:bg-primary-50 rounded-xl border border-gray-200 hover:border-primary-200 p-5 transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-900">
                    {guide.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{guide.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — CTA final */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Prêt à changer d&apos;assurance emprunteur ? Simulez vos économies maintenant
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
