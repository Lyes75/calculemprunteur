"use client";

import { useState } from "react";
import Image from "next/image";

interface InsurerLogoProps {
  slug: string;
  name: string;
  size?: number;
}

// Map insurer slugs to their logo file extension
const LOGO_EXTENSIONS: Record<string, string> = {
  cardif: "svg",
  "cardif-liberte": "svg",
  april: "png",
  generali: "png",
  cnp: "png",
  macif: "png",
  swisslife: "png",
  suravenir: "png",
};

export default function InsurerLogo({
  slug,
  name,
  size = 36,
}: InsurerLogoProps) {
  const [hidden, setHidden] = useState(false);
  const ext = LOGO_EXTENSIONS[slug];

  if (hidden || !ext) return null;

  return (
    <Image
      src={`/logos/insurers/${slug}.${ext}`}
      alt={`Logo ${name}`}
      width={size}
      height={size}
      className="object-contain shrink-0"
      style={{ width: size, height: size }}
      onError={() => setHidden(true)}
    />
  );
}
