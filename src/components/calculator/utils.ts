import type { CalculatorInput, CalculatorResult } from "./types";
import { DELEGATION_RATES, SMOKER_MULTIPLIER, RISKY_JOB_MULTIPLIER } from "./constants";

export function calculateSavings(input: CalculatorInput): CalculatorResult {
  const { capital, remainingYears, currentRate, ageRange, smoker, riskyJob } = input;

  const monthsRemaining = remainingYears * 12;

  // Coût assurance actuelle (calcul sur capital initial — méthode banque)
  const monthlyCostCurrent = (capital * currentRate) / 12;
  const totalCostCurrent = monthlyCostCurrent * monthsRemaining;

  // Taux délégation
  let delegationRate = DELEGATION_RATES[ageRange] ?? 0.0015;
  if (smoker) delegationRate *= SMOKER_MULTIPLIER;
  if (riskyJob) delegationRate *= RISKY_JOB_MULTIPLIER;

  // Coût assurance déléguée
  const monthlyCostDelegation = (capital * delegationRate) / 12;
  const totalCostDelegation = monthlyCostDelegation * monthsRemaining;

  // Économie
  const savings = Math.max(0, totalCostCurrent - totalCostDelegation);

  return {
    monthlyCostCurrent: Math.round(monthlyCostCurrent),
    monthlyCostDelegation: Math.round(monthlyCostDelegation),
    totalCostCurrent: Math.round(totalCostCurrent),
    totalCostDelegation: Math.round(totalCostDelegation),
    savings: Math.round(savings),
    currentRate,
    delegationRate,
  };
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatPercent(n: number): string {
  return (n * 100).toFixed(2).replace(".", ",") + " %";
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("fr-FR").format(n);
}
