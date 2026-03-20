"use client";

import { useEffect, useState, useRef } from "react";
import { useAI } from "@/lib/useAI";
import { getTop3, ScoredInsurer } from "./recommendationEngine";
import { formatEuro, formatPercent } from "./utils";
import { BANK_DATA } from "./constants";
import RecommendationCard from "./RecommendationCard";

interface TopRecommendationsProps {
  capital: number;
  remainingYears: number;
  currentRate: number;
  ageRange: string;
  smoker: boolean;
  riskyJob: boolean;
  bankKey: string;
  currentTotalCost: number;
}

const SYSTEM_PROMPT = `Tu es un conseiller expert en assurance emprunteur. On te fournit le profil d'un emprunteur et les 3 assureurs recommandés pour son profil. Tu dois rédiger pour chacun un court paragraphe personnalisé (2-3 phrases max) expliquant pourquoi cet assureur est adapté à CE profil précis.

Règles :
- Tutoyer l'utilisateur
- Être factuel et spécifique (citer des chiffres : taux, économie, délais)
- Ne pas être promotionnel ou exagéré — ton neutre et informatif
- Adapter le conseil au profil (âge, fumeur, profession, banque actuelle)
- Mentionner un avantage concret et spécifique de chaque assureur pour ce profil
- Chaque paragraphe fait exactement 2-3 phrases
- Langue : français courant, accessible

Répondre en JSON strict avec cette structure :
{
  "recommendations": [
    { "insurerId": "xxx", "text": "..." },
    { "insurerId": "xxx", "text": "..." },
    { "insurerId": "xxx", "text": "..." }
  ]
}
Aucun texte en dehors du JSON.`;

export default function TopRecommendations(props: TopRecommendationsProps) {
  const {
    capital,
    remainingYears,
    currentRate,
    ageRange,
    smoker,
    riskyJob,
    bankKey,
    currentTotalCost,
  } = props;

  const [top3, setTop3] = useState<ScoredInsurer[]>([]);
  const [aiTexts, setAiTexts] = useState<Record<string, string>>({});
  const { generate, loading: aiLoading } = useAI();
  const hasGenerated = useRef(false);

  useEffect(() => {
    const results = getTop3(
      { capital, remainingYears, ageRange, smoker, riskyJob },
      currentTotalCost
    );
    setTop3(results);

    if (hasGenerated.current) return;
    hasGenerated.current = true;

    const bankName = BANK_DATA[bankKey]?.name ?? "Autre banque";

    const userPrompt = `Profil emprunteur :
- Tranche d'âge : ${ageRange} ans
- Fumeur : ${smoker ? "Oui" : "Non"}
- Profession à risque : ${riskyJob ? "Oui" : "Non"}
- Capital restant dû : ${formatEuro(capital)}
- Durée restante : ${remainingYears} ans
- Banque actuelle : ${bankName}
- Taux assurance actuel : ${formatPercent(currentRate)}
- Coût total actuel : ${formatEuro(currentTotalCost)}

Top 3 assureurs recommandés :
${results
  .map(
    (ins, i) => `${i + 1}. ${ins.name}
   - Taux estimé : ${formatPercent(ins.estimatedRate)}
   - Coût mensuel estimé : ${formatEuro(ins.estimatedMonthlyCost)}
   - Économie estimée : ${formatEuro(ins.estimatedSavings)}
   - Points forts : ${ins.strengths.join(", ")}`
  )
  .join("\n")}

Rédige les 3 paragraphes personnalisés.`;

    generate(userPrompt, SYSTEM_PROMPT).then((response) => {
      if (!response) return;
      try {
        const clean = response.replace(/```json\n?|```\n?/g, "").trim();
        const parsed = JSON.parse(clean);
        const map: Record<string, string> = {};
        parsed.recommendations.forEach(
          (rec: { insurerId: string; text: string }) => {
            map[rec.insurerId] = rec.text;
          }
        );
        setAiTexts(map);
      } catch {
        // Fallback: use static strengths
      }
    });
  }, [capital, remainingYears, currentRate, ageRange, smoker, riskyJob, bankKey, currentTotalCost, generate]);

  if (top3.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        Les 3 meilleures offres pour votre profil
      </h3>

      {top3.length === 0 ? (
        // Skeleton
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-24 mb-4" />
              <div className="h-5 bg-gray-200 rounded w-32 mb-3" />
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="h-8 bg-gray-200 rounded" />
                <div className="h-8 bg-gray-200 rounded" />
                <div className="h-8 bg-gray-200 rounded" />
              </div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2" />
              <div className="h-3 bg-gray-200 rounded w-4/5" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {top3.map((insurer, index) => (
            <RecommendationCard
              key={insurer.id}
              insurer={insurer}
              rank={index}
              aiText={aiTexts[insurer.id] ?? null}
              loading={aiLoading && !aiTexts[insurer.id]}
            />
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 text-center">
        * Taux et économies estimés selon votre profil. Devis personnalisé sur demande.
      </p>
    </div>
  );
}
