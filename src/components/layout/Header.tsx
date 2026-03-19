"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Simulateur", href: "#simulateur" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Loi Lemoine", href: "#loi-lemoine" },
  { label: "FAQ", href: "#faq" },
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-100 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-primary-100 hover:text-white cursor-pointer"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
          </nav>
        )}
      </div>
    </header>
  );
}
