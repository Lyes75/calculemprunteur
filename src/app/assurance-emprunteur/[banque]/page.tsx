import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BANKS } from "@/data/banks";
import BankPageTemplate from "@/components/templates/BankPageTemplate";

export async function generateStaticParams() {
  return BANKS.map((bank) => ({
    banque: bank.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ banque: string }>;
}): Promise<Metadata> {
  const { banque } = await params;
  const bank = BANKS.find((b) => b.slug === banque);
  if (!bank) return {};

  return {
    title: bank.metaTitle,
    description: bank.metaDescription,
    alternates: {
      canonical: `https://www.calculemprunteur.fr/assurance-emprunteur-${bank.slug}`,
    },
  };
}

export default async function BankPage({
  params,
}: {
  params: Promise<{ banque: string }>;
}) {
  const { banque } = await params;
  const bank = BANKS.find((b) => b.slug === banque);
  if (!bank) notFound();

  return <BankPageTemplate bank={bank} />;
}
