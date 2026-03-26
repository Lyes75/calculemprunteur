import Image from "next/image";

const COL2_LINKS = [
  { label: "Simulateur", href: "#simulateur" },
  { label: "Loi Lemoine", href: "#loi-lemoine" },
  { label: "Loi Hamon", href: "/#loi-lemoine" },
  { label: "Convention AERAS", href: "/#faq" },
  { label: "FAQ", href: "#faq" },
];

const COL3_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1 — Logo + description */}
          <div>
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/icon-logo.png"
                alt=""
                width={36}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">CalculEmprunteur</span>
                <span className="text-accent-500">.fr</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Calculateur indépendant d&apos;économies en assurance emprunteur.
              Non affilié aux établissements bancaires.
            </p>
          </div>

          {/* Col 2 — Liens informatifs */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Informations
            </h4>
            <ul className="space-y-2">
              {COL2_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Liens légaux */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Légal
            </h4>
            <ul className="space-y-2">
              {COL3_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-900 pt-6 mt-8 text-gray-500 text-sm text-center">
          © 2026 CalculEmprunteur.fr — Simulation indicative, non contractuelle.
          <p className="text-xs text-gray-600 mt-2">
            Les marques et logos cités appartiennent à leurs propriétaires respectifs.
            CalculEmprunteur.fr n&apos;est pas affilié aux établissements bancaires mentionnés.
          </p>
        </div>
      </div>
    </footer>
  );
}
