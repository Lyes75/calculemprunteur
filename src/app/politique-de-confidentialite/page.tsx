import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | CalculEmprunteur.fr",
  description:
    "Politique de confidentialité de CalculEmprunteur.fr. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
  robots: "noindex, follow",
  alternates: {
    canonical:
      "https://www.calculemprunteur.fr/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="w-10 h-1 bg-accent-600 mb-4 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-gray-500 mt-3">
            Dernière mise à jour : mars 2026
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <p>
            CalculEmprunteur.fr (ci-après &laquo;&nbsp;le Site&nbsp;&raquo;) est
            édité par Netaudience. Nous attachons une importance particulière à
            la protection de vos données personnelles. Cette politique de
            confidentialité vous informe sur la manière dont nous collectons,
            utilisons et protégeons vos informations lorsque vous utilisez notre
            site.
          </p>

          {/* 1. Responsable */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Responsable du traitement
            </h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <p className="mt-2">
              <strong>Netaudience</strong>
              <br />
              Représentant : Lyes Boussouf
              <br />
              Email :{" "}
              <a
                href="mailto:contact@calculemprunteur.fr"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                contact@calculemprunteur.fr
              </a>
              <br />
              Site :{" "}
              <a
                href="https://www.calculemprunteur.fr"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                www.calculemprunteur.fr
              </a>
            </p>
          </div>

          {/* 2. Données collectées */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Données collectées
            </h2>
            <p className="mb-4">
              Nous collectons les données suivantes selon votre utilisation du
              site :
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              2.1 Données de simulation (sans identification)
            </h3>
            <p className="mb-3">
              Lorsque vous utilisez notre simulateur, nous collectons de manière
              anonyme :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Le montant et la durée restante de votre prêt</li>
              <li>Votre banque actuelle et votre taux d&apos;assurance</li>
              <li>Votre tranche d&apos;âge</li>
              <li>Votre statut fumeur/non-fumeur</li>
              <li>Votre catégorie professionnelle</li>
            </ul>
            <p>
              Ces données sont utilisées uniquement pour calculer votre économie
              potentielle et vous recommander les offres les plus adaptées.
              Elles ne permettent pas de vous identifier personnellement.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              2.2 Données personnelles (avec votre consentement)
            </h3>
            <p className="mb-3">
              Si vous choisissez de générer votre lettre de changement
              d&apos;assurance, nous collectons :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Votre nom complet</li>
              <li>Votre adresse postale</li>
              <li>Votre adresse email</li>
              <li>Votre numéro de prêt (optionnel)</li>
            </ul>
            <p>
              Ces données sont nécessaires à la génération de votre lettre
              personnalisée et sont collectées avec votre consentement
              explicite.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              2.3 Données de navigation
            </h3>
            <p className="mb-3">Nous collectons automatiquement :</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Votre adresse IP (anonymisée)</li>
              <li>Le type de navigateur et d&apos;appareil utilisé</li>
              <li>Les pages consultées et la durée de visite</li>
              <li>
                La source de votre visite (moteur de recherche, lien direct,
                etc.)
              </li>
            </ul>
            <p>
              Ces données sont collectées via Google Analytics 4 (via Google
              Tag Manager) à des fins d&apos;amélioration du site et de mesure
              d&apos;audience.
            </p>
          </div>

          {/* 3. Finalités */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Finalités du traitement
            </h2>
            <p className="mb-3">
              Vos données sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fournir les résultats de simulation d&apos;économies
              </li>
              <li>
                Générer votre lettre de changement d&apos;assurance emprunteur
              </li>
              <li>
                Vous recommander les offres d&apos;assurance les plus adaptées à
                votre profil
              </li>
              <li>Mesurer et améliorer la performance du site</li>
              <li>
                Répondre à vos demandes via le formulaire de contact
              </li>
              <li>
                Vous envoyer des informations sur l&apos;assurance emprunteur
                (uniquement si vous avez coché la case de consentement)
              </li>
            </ul>
          </div>

          {/* 4. Base légale */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Base légale du traitement
            </h2>
            <p className="mb-3">
              Les traitements de données reposent sur :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Votre consentement</strong> (article 6.1.a du RGPD)
                pour la collecte de vos coordonnées et l&apos;envoi de
                communications
              </li>
              <li>
                <strong>L&apos;intérêt légitime</strong> (article 6.1.f du
                RGPD) pour la mesure d&apos;audience et l&apos;amélioration du
                site
              </li>
              <li>
                <strong>L&apos;exécution d&apos;un service</strong> (article
                6.1.b du RGPD) pour la génération de votre lettre de changement
              </li>
            </ul>
          </div>

          {/* 5. Destinataires */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Destinataires des données
            </h2>
            <p className="mb-3">
              Vos données personnelles peuvent être transmises à :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Nos partenaires assureurs et courtiers (uniquement si vous avez
                expressément demandé à recevoir des devis, et limité aux données
                nécessaires à l&apos;établissement d&apos;un devis)
              </li>
              <li>Google Analytics (données de navigation anonymisées)</li>
              <li>Notre hébergeur technique (Vercel)</li>
              <li>
                Notre base de données (Supabase, hébergée dans l&apos;Union
                européenne)
              </li>
            </ul>
            <p>
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </div>

          {/* 6. Durée de conservation */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Durée de conservation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Données de simulation anonymes :</strong> 24 mois
              </li>
              <li>
                <strong>Données personnelles (email, nom) :</strong> 36 mois
                après le dernier contact, ou jusqu&apos;à votre demande de
                suppression
              </li>
              <li>
                <strong>Données de navigation (analytics) :</strong> 14 mois
                (paramétrage Google Analytics)
              </li>
              <li>
                <strong>Cookies :</strong> voir la section 8 ci-dessous
              </li>
            </ul>
          </div>

          {/* 7. Vos droits */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Vos droits
            </h2>
            <p className="mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
                données personnelles
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> demander la
                suppression de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format structuré
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos données
              </li>
              <li>
                <strong>Droit de retrait du consentement :</strong> retirer
                votre consentement à tout moment
              </li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, envoyez un email à :{" "}
              <a
                href="mailto:contact@calculemprunteur.fr"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                contact@calculemprunteur.fr
              </a>
            </p>
            <p className="mb-4">
              Nous nous engageons à répondre dans un délai de 30 jours.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la CNIL (Commission Nationale
              de l&apos;Informatique et des Libertés) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                www.cnil.fr
              </a>
            </p>
          </div>

          {/* 8. Cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Cookies
            </h2>
            <p className="mb-4">Le site utilise les cookies suivants :</p>

            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-3">
              Cookies essentiels (nécessaires au fonctionnement)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Session de navigation</li>
              <li>Préférences de consentement</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-3">
              Cookies analytiques (avec votre consentement)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Google Analytics 4 (via Google Tag Manager, ID :
                GTM-MCFHQB4G) : mesure d&apos;audience, pages consultées, durée
                de visite, source de trafic
              </li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies à tout moment en
              utilisant les paramètres de votre navigateur. La désactivation de
              certains cookies peut affecter votre expérience sur le site.
            </p>
          </div>

          {/* 9. Transferts hors UE */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Transfert de données hors UE
            </h2>
            <p className="mb-4">
              Google Analytics peut transférer des données vers les États-Unis.
              Google est certifié dans le cadre du Data Privacy Framework (DPF)
              UE-États-Unis, qui assure un niveau de protection adéquat pour les
              données personnelles.
            </p>
            <p>
              Les autres sous-traitants (Vercel, Supabase) sont soit basés dans
              l&apos;Union européenne, soit couverts par des clauses
              contractuelles types approuvées par la Commission européenne.
            </p>
          </div>

          {/* 10. Sécurité */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Sécurité
            </h2>
            <p className="mb-3">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>
                Accès restreint aux données personnelles (authentification
                requise)
              </li>
              <li>
                Base de données avec Row Level Security (RLS) activée
              </li>
              <li>
                Pas de stockage de données bancaires ou financières sensibles
              </li>
            </ul>
          </div>

          {/* 11. Modifications */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. La date de dernière mise à jour est
              indiquée en haut de cette page. En cas de modification
              substantielle, nous vous en informerons par un avis visible sur le
              site.
            </p>
          </div>

          {/* 12. Contact */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              12. Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité
              ou à vos données personnelles :
            </p>
            <p className="mt-2">
              Email :{" "}
              <a
                href="mailto:contact@calculemprunteur.fr"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                contact@calculemprunteur.fr
              </a>
              <br />
              Courrier : Netaudience — 8 rue Christian Dewet, 75012 Paris
            </p>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-accent-600 hover:text-accent-500 font-semibold transition-colors"
          >
            ← Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </section>
  );
}
