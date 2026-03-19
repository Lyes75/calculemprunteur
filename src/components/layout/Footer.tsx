import Image from "next/image";

const COL2_LINKS = [
  { label: "Simulateur", href: "#simulateur" },
  { label: "Loi Lemoine", href: "#loi-lemoine" },
  { label: "Loi Hamon", href: "#" },
  { label: "Convention AERAS", href: "#" },
  { label: "FAQ", href: "#faq" },
];

const COL3_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/mentions-legales" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1 — Logo + description */}
          <div>
            <a href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="CalculEmprunteur.fr"
                width={180}
                height={36}
                className="h-10 w-auto brightness-0 invert"
              />
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
        </div>
      </div>
    </footer>
  );
}
