import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title:
    "Calculez vos économies en assurance emprunteur | CalculEmprunteur.fr",
  description:
    "Simulateur gratuit : découvrez combien vous économisez en changeant d'assurance de prêt immobilier. Comparez les offres en 2 minutes. Loi Lemoine.",
  metadataBase: new URL("https://calculemprunteur.fr"),
  openGraph: {
    title:
      "Calculez vos économies en assurance emprunteur | CalculEmprunteur.fr",
    description:
      "Simulateur gratuit : découvrez combien vous économisez en changeant d'assurance de prêt immobilier.",
    type: "website",
    locale: "fr_FR",
    url: "https://calculemprunteur.fr",
    siteName: "CalculEmprunteur.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://calculemprunteur.fr",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MCFHQB4G');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-700">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCFHQB4G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
