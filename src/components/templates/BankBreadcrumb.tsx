import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

interface BankBreadcrumbProps {
  bankName: string;
  bankSlug: string;
}

export default function BankBreadcrumb({ bankName, bankSlug }: BankBreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://calculemprunteur.fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Changer d'assurance emprunteur ${bankName}`,
        item: `https://calculemprunteur.fr/assurance-emprunteur-${bankSlug}`,
      },
    ],
  };

  return (
    <nav aria-label="Fil d'Ariane" className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-3">
        <JsonLd data={breadcrumbSchema} />
        <ol className="flex items-center text-sm text-gray-500">
          <li>
            <Link href="/" className="text-primary-800 hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <span className="mx-2 text-gray-400">&gt;</span>
          </li>
          <li className="truncate">
            Changer d&apos;assurance emprunteur {bankName}
          </li>
        </ol>
      </div>
    </nav>
  );
}
