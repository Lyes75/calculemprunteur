"use client";

import { useState } from "react";
import Image from "next/image";

interface BankLogoProps {
  slug: string;
  name: string;
  shortName: string;
  badgeColor: string;
  size?: 32 | 40 | 48 | 56;
}

const SIZE_CLASSES: Record<number, string> = {
  32: "w-8 h-8",
  40: "w-10 h-10",
  48: "w-12 h-12",
  56: "w-14 h-14",
};

const FONT_CLASSES: Record<number, string> = {
  32: "text-[10px]",
  40: "text-xs",
  48: "text-sm",
  56: "text-sm",
};

export default function BankLogo({
  slug,
  name,
  shortName,
  badgeColor,
  size = 40,
}: BankLogoProps) {
  const [imgError, setImgError] = useState(false);
  const sizeClass = SIZE_CLASSES[size];
  const fontClass = FONT_CLASSES[size];

  if (imgError) {
    return (
      <div
        className={`${sizeClass} rounded-full flex items-center justify-center text-white ${fontClass} font-bold shrink-0`}
        style={{ backgroundColor: badgeColor }}
      >
        {shortName}
      </div>
    );
  }

  return (
    <Image
      src={`/logos/banks/${slug}.svg`}
      alt={`Logo ${name}`}
      width={size}
      height={size}
      className={`${sizeClass} object-contain shrink-0`}
      onError={() => setImgError(true)}
    />
  );
}
