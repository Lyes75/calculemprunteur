import { INSURERS, Insurer } from "./insurerData";

interface RecommendationInput {
  capital: number;
  remainingYears: number;
  ageRange: string;
  smoker: boolean;
  riskyJob: boolean;
}

export interface ScoredInsurer extends Insurer {
  estimatedRate: number;
  estimatedMonthlyCost: number;
  estimatedTotalCost: number;
  estimatedSavings: number;
  score: number;
}

export function getTop3(
  input: RecommendationInput,
  currentTotalCost: number
): ScoredInsurer[] {
  const scored = INSURERS.map((insurer) => {
    let rate = insurer.baseRates[input.ageRange] ?? 0.0015;
    if (input.smoker) rate *= insurer.smokerMultiplier;
    if (input.riskyJob) rate *= insurer.riskyJobMultiplier;

    const monthlyCost = Math.round((input.capital * rate) / 12);
    const totalCost = monthlyCost * input.remainingYears * 12;
    const savings = Math.max(0, currentTotalCost - totalCost);

    let score = savings;

    if (input.ageRange === "25-35" && insurer.bestFor.includes("young"))
      score *= 1.1;
    if (input.ageRange === "56-65" && insurer.bestFor.includes("senior"))
      score *= 1.15;
    if (input.ageRange === "65+" && insurer.bestFor.includes("senior"))
      score *= 1.2;
    if (insurer.onlineProcess) score *= 1.05;

    return {
      ...insurer,
      estimatedRate: rate,
      estimatedMonthlyCost: monthlyCost,
      estimatedTotalCost: totalCost,
      estimatedSavings: savings,
      score,
    };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
