import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BANKS } from "@/data/banks";
import { PROFILES } from "@/data/profiles";
import BankPageTemplate from "@/components/templates/BankPageTemplate";
import ProfilePageTemplate from "@/components/templates/ProfilePageTemplate";

export async function generateStaticParams() {
  const bankSlugs = BANKS.map((bank) => ({ banque: bank.slug }));
  const profileSlugs = PROFILES.map((profile) => ({ banque: profile.slug }));
  return [...bankSlugs, ...profileSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ banque: string }>;
}): Promise<Metadata> {
  const { banque } = await params;

  const bank = BANKS.find((b) => b.slug === banque);
  if (bank) {
    const url = `https://www.calculemprunteur.fr/assurance-emprunteur-${bank.slug}`;
    return {
      title: bank.metaTitle,
      description: bank.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title: bank.metaTitle,
        description: bank.metaDescription,
        url,
      },
      twitter: {
        card: "summary" as const,
        title: bank.metaTitle,
        description: bank.metaDescription,
      },
    };
  }

  const profile = PROFILES.find((p) => p.slug === banque);
  if (profile) {
    const url = `https://www.calculemprunteur.fr/assurance-emprunteur-${profile.slug}`;
    return {
      title: profile.metaTitle,
      description: profile.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        title: profile.metaTitle,
        description: profile.metaDescription,
        url,
      },
      twitter: {
        card: "summary" as const,
        title: profile.metaTitle,
        description: profile.metaDescription,
      },
    };
  }

  return {};
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ banque: string }>;
}) {
  const { banque } = await params;

  const bank = BANKS.find((b) => b.slug === banque);
  if (bank) return <BankPageTemplate bank={bank} />;

  const profile = PROFILES.find((p) => p.slug === banque);
  if (profile) return <ProfilePageTemplate profile={profile} />;

  notFound();
}
