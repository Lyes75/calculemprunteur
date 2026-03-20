"use client";

import { formatEuro, formatPercent } from "./utils";
import type { ScoredInsurer } from "./recommendationEngine";

interface RecommendationCardProps {
  insurer: ScoredInsurer;
  rank: number;
  aiText: string | null;
  loading: boolean;
}

const BADGES = [
  { label: "Meilleur choix", emoji: "\ud83e\udd47", accent: true },
  { label: "2\u00e8me choix", emoji: "\ud83e\udd48", accent: false },
  { label: "3\u00e8me choix", emoji: "\ud83e\udd49", accent: false },
];

export default function RecommendationCard({
  insurer,
  rank,
  aiText,
  loading,
}: RecommendationCardProps) {
  const badge = BADGES[rank] ?? BADGES[2];
  const isFirst = rank === 0;

  return (
    <div
      className={`
        bg-white rounded-xl p-5 md:p-6 transition-all duration-200 hover:shadow-md
        ${isFirst ? "border-2 border-accent-600 shadow-md" : "border border-gray-200"}
      `}
    >
      {/* Badge + type */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`
            inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full
            ${isFirst ? "bg-accent-100 text-accent-600" : "bg-gray-100 text-gray-600"}
          `}
        >
          {badge.emoji} {badge.label}
        </span>
        <span
          className={`
            text-xs font-medium px-2.5 py-0.5 rounded-full
            ${insurer.type === "delegation"
              ? "bg-accent-100 text-accent-600"
              : "bg-primary-100 text-primary-800"
            }
          `}
        >
          {insurer.type === "delegation" ? "Délégation" : "Groupe"}
        </span>
      </div>

      {/* Name */}
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        {insurer.name}
      </h4>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <p className="text-xs text-gray-500">Taux estimé</p>
          <p className="text-xl font-bold text-accent-600">
            {formatPercent(insurer.estimatedRate)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Coût mensuel</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatEuro(insurer.estimatedMonthlyCost)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Économie</p>
          <p className="text-lg font-semibold text-success-600">
            ~{formatEuro(insurer.estimatedSavings)}
          </p>
        </div>
      </div>

      {/* AI text or fallback */}
      <div className="mb-4">
        {loading ? (
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5" />
          </div>
        ) : (
          <p className="text-sm text-gray-600 leading-relaxed">
            {aiText || insurer.strengths.join(". ") + "."}
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        type="button"
        className={`
          w-full font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-200
          active:scale-[0.98] cursor-pointer
          ${isFirst
            ? "bg-accent-600 hover:bg-accent-500 text-white shadow-md hover:shadow-lg"
            : "bg-primary-800 hover:bg-primary-700 text-white"
          }
        `}
      >
        Demander un devis {insurer.name} →
      </button>
    </div>
  );
}
