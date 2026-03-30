import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSURERS } from "@/data/insurers";
import InsurerPageTemplate from "@/components/templates/InsurerPageTemplate";

export async function generateStaticParams() {
  return INSURERS.map((insurer) => ({
    slug: insurer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insurer = INSURERS.find((i) => i.slug === slug);
  if (!insurer) return {};

  const url = `https://www.calculemprunteur.fr/avis-${insurer.slug}-assurance-emprunteur`;

  return {
    title: insurer.metaTitle,
    description: insurer.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: insurer.metaTitle,
      description: insurer.metaDescription,
      url,
    },
    twitter: {
      card: "summary" as const,
      title: insurer.metaTitle,
      description: insurer.metaDescription,
    },
  };
}

export default async function InsurerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insurer = INSURERS.find((i) => i.slug === slug);
  if (!insurer) notFound();

  return <InsurerPageTemplate insurer={insurer} />;
}
