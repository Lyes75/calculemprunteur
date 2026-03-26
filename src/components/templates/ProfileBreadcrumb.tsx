import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

interface ProfileBreadcrumbProps {
  profileName: string;
  profileSlug: string;
}

export default function ProfileBreadcrumb({
  profileName,
  profileSlug,
}: ProfileBreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.calculemprunteur.fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Assurance emprunteur",
        item: "https://www.calculemprunteur.fr/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: profileName,
        item: `https://www.calculemprunteur.fr/assurance-emprunteur-${profileSlug}`,
      },
    ],
  };

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="bg-white border-b border-gray-100"
    >
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
          <li>
            <Link href="/" className="text-primary-800 hover:underline">
              Assurance emprunteur
            </Link>
          </li>
          <li>
            <span className="mx-2 text-gray-400">&gt;</span>
          </li>
          <li className="truncate">{profileName}</li>
        </ol>
      </div>
    </nav>
  );
}
