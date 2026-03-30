"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Simulateur", href: "/#simulateur" },
  { label: "Comment \u00e7a marche", href: "/#comment-ca-marche" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const GUIDE_LINKS = [
  { label: "Loi Lemoine", href: "/guide/loi-lemoine" },
  { label: "D\u00e9l\u00e9gation d\u2019assurance", href: "/guide/delegation-assurance" },
  { label: "Taux assurance emprunteur", href: "/guide/taux-assurance-emprunteur" },
  { label: "Lettre de r\u00e9siliation", href: "/guide/lettre-resiliation" },
  { label: "Questionnaire m\u00e9dical", href: "/guide/questionnaire-medical" },
  { label: "Convention AERAS", href: "/guide/convention-aeras" },
];

const GUIDE_LINKS_SECONDARY = [
  { label: "\u00c9quivalence de garanties", href: "/guide/equivalence-garanties" },
  { label: "Co\u00fbt assurance emprunteur", href: "/guide/cout-assurance-emprunteur" },
  { label: "Refus de la banque", href: "/guide/refus-banque" },
  { label: "Loi Hamon vs Lemoine", href: "/guide/loi-hamon-vs-lemoine" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-900/95 backdrop-blur-md border-b border-primary-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/icon-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto brightness-0 invert"
              priority
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-white">CalculEmprunteur</span>
              <span className="text-accent-500">.fr</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-100 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Guides dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-primary-100 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                Guides
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2 w-64">
                  {GUIDE_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  {GUIDE_LINKS_SECONDARY.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-100 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#simulateur"
              className="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-lg transition-colors"
            >
              Simuler gratuitement
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-primary-100 hover:text-white cursor-pointer"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 mobile-menu-enter">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-sm font-medium text-primary-100 hover:text-white transition-colors border-t border-primary-800"
              >
                {link.label}
              </a>
            ))}

            {/* Guides section mobile */}
            <div className="border-t border-primary-800 pt-3 mt-1">
              <p className="text-xs font-semibold text-primary-300 uppercase tracking-wide mb-2">
                Guides
              </p>
              {GUIDE_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm text-primary-100 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
