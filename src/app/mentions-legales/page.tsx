import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | CalculEmprunteur.fr",
  description:
    "Mentions légales du site CalculEmprunteur.fr — Éditeur, hébergeur, protection des données personnelles (RGPD), propriété intellectuelle.",
};

export default function MentionsLegales() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="w-10 h-1 bg-accent-600 mb-4 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Mentions légales
          </h1>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Éditeur du site
            </h2>
            <p>
              <strong>NETAUDIENCE</strong>
              <br />
              Siège social : 8 rue Christian Dewet, 75012 Paris
              <br />
              SIRET : 513 899 305 00021
              <br />
              Capital social : 7 622,45 €
            </p>
          </div>

          {/* Directeur de la publication */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Directeur de la publication
            </h2>
            <p>M. Boussouf</p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Hébergeur
            </h2>
            <p>
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, États-Unis
              <br />
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                vercel.com
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Copyright et propriété intellectuelle
            </h2>
            <p className="mb-4">
              L&apos;ensemble des éléments figurant sur notre site sont protégés
              par les dispositions du Code de la Propriété Intellectuelle.
            </p>
            <p className="mb-4">
              En conséquence, toute reproduction de ceux-ci, totale ou
              partielle, ou imitation, sans notre accord exprès, préalable et
              écrit, est interdite.
            </p>
            <p className="mb-4">
              Il est formellement interdit de collecter et d&apos;utiliser les
              informations disponibles sur le site à des fins commerciales.
            </p>
            <p>
              Cette interdiction s&apos;étend notamment, sans que cette liste ne
              soit limitative, à tout élément rédactionnel figurant sur le site,
              à la présentation des écrans, aux logiciels nécessaires à
              l&apos;exploitation, aux logos, images, photos, graphiques, de
              quelque nature qu&apos;ils soient.
            </p>
          </div>

          {/* RGPD */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Protection des données personnelles (RGPD)
            </h2>
            <p className="mb-4">
              calculemprunteur.fr collecte votre adresse email uniquement
              lorsque vous demandez à recevoir votre rapport de simulation par
              email. Cette donnée est stockée de manière sécurisée et
              n&apos;est jamais partagée avec des tiers.
            </p>
            <p className="mb-4">
              Vous pouvez demander la suppression de vos données ou vous
              désabonner à tout moment en cliquant sur le lien prévu à cet
              effet dans chaque email, ou en contactant{" "}
              <a
                href="mailto:contact@calculemprunteur.fr"
                className="text-accent-600 hover:text-accent-500 transition-colors"
              >
                contact@calculemprunteur.fr
              </a>
              .
            </p>
            <p>
              Responsable du traitement : NETAUDIENCE. Base légale :
              consentement (art. 6.1.a RGPD).
            </p>
          </div>

          {/* Avertissement */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Avertissement
            </h2>
            <p>
              Les simulations fournies sur ce site sont données à titre
              indicatif et ne constituent pas un conseil fiscal ou juridique.
              Elles sont basées sur les barèmes en vigueur et les taux moyens
              constatés sur le marché de l&apos;assurance emprunteur. Pour tout
              engagement définitif, consultez un courtier en assurance ou votre
              conseiller bancaire.
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
