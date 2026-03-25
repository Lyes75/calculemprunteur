"use client";

import type { CalculatorResult, LoanData, ProfileData } from "./types";
import { formatEuro, formatPercent } from "./utils";
import CountUp from "./CountUp";
import BarChart from "./BarChart";
import TopRecommendations from "./TopRecommendations";
import ResignationLetter from "./ResignationLetter";
import { BANK_DATA } from "./constants";

interface StepResultsProps {
  result: CalculatorResult;
  loanData: LoanData;
  profileData: ProfileData;
  onReset: () => void;
}

export default function StepResults({ result, loanData, profileData, onReset }: StepResultsProps) {
  const isLowSavings = result.savings < 500;

  return (
    <div className="space-y-8">
      {/* Hero résultat */}
      <div className={`text-center p-6 rounded-2xl ${isLowSavings ? "bg-warning-100" : "bg-accent-50"}`}>
        <p className="text-gray-700 text-sm font-medium mb-1">
          Vous pourriez économiser
        </p>
        <p className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isLowSavings ? "text-warning-500" : "text-accent-600"}`}>
          <CountUp target={result.savings} />*
        </p>
        <p className="text-gray-600 text-sm mt-2">
          sur les {loanData.remainingYears} années restantes de votre prêt
        </p>
        {isLowSavings && (
          <p className="text-warning-500 text-sm font-medium mt-3">
            L&apos;économie estimée est faible. Votre assurance actuelle est déjà compétitive.
          </p>
        )}
        <p className="text-xs text-gray-400 mt-3 max-w-md mx-auto">
          * Estimation indicative basée sur les taux moyens du marché. Le montant exact
          dépend de votre profil et de l&apos;assureur choisi. Demandez un devis pour obtenir
          votre tarif personnalisé.
        </p>
      </div>

      {/* Tableau comparatif */}
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary-50">
              <th className="py-3 px-4 text-left text-xs font-semibold text-primary-800 uppercase tracking-wide"></th>
              <th className="py-3 px-4 text-right text-xs font-semibold text-primary-800 uppercase tracking-wide">
                Assurance actuelle
              </th>
              <th className="py-3 px-4 text-right text-xs font-semibold text-primary-800 uppercase tracking-wide">
                Assurance déléguée
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-4 px-4 text-sm text-gray-700 font-medium">Taux</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatPercent(result.currentRate)}</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatPercent(result.delegationRate)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4 px-4 text-sm text-gray-700 font-medium">Coût mensuel</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatEuro(result.monthlyCostCurrent)}</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatEuro(result.monthlyCostDelegation)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4 px-4 text-sm text-gray-700 font-medium">Coût total restant</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatEuro(result.totalCostCurrent)}</td>
              <td className="py-4 px-4 text-sm text-gray-900 text-right">{formatEuro(result.totalCostDelegation)}</td>
            </tr>
            <tr className="border-t-2 border-gray-300 bg-accent-50">
              <td className="py-4 px-4 text-base text-accent-600 font-bold">Économie totale estimée</td>
              <td colSpan={2} className="py-4 px-4 text-lg text-accent-600 font-bold text-right">
                {formatEuro(result.savings)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        * Estimation indicative. Tarif réel sur devis.
      </p>

      {/* Graphique à barres */}
      <BarChart currentCost={result.totalCostCurrent} delegationCost={result.totalCostDelegation} />

      {/* Top 3 recommandations */}
      <div className="mt-2 mb-4">
        <h3 className="text-xl font-bold text-gray-900">Les 3 meilleures offres pour votre profil</h3>
        <p className="text-sm text-gray-500 mt-1">Sélectionnées automatiquement selon votre âge, votre situation et votre prêt</p>
      </div>
      <TopRecommendations
        capital={loanData.capital}
        remainingYears={loanData.remainingYears}
        currentRate={loanData.currentRate}
        ageRange={profileData.ageRange}
        smoker={profileData.smoker}
        riskyJob={profileData.riskyJob}
        bankKey={loanData.bankKey}
        currentTotalCost={result.totalCostCurrent}
      />

      {/* Lettre de résiliation */}
      <div className="mt-2 mb-4">
        <h3 className="text-xl font-bold text-gray-900">Votre lettre de changement prête à envoyer</h3>
        <p className="text-sm text-gray-500 mt-1">Pré-remplie avec les données de votre prêt, conforme à la loi Lemoine</p>
      </div>
      <ResignationLetter
        bankName={BANK_DATA[loanData.bankKey]?.name ?? "Autre banque"}
        capital={loanData.capital}
        remainingYears={loanData.remainingYears}
        currentRate={loanData.currentRate}
        monthlyCostCurrent={result.monthlyCostCurrent}
      />

      {/* Bloc de clôture — redirige vers le Top 3 */}
      <div className="bg-primary-50 rounded-xl p-8 text-center mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Prêt à passer à l&apos;action ?
        </h3>
        <p className="text-gray-600 mb-6 text-sm">
          Choisissez votre nouvel assureur et envoyez votre lettre de changement.
          Votre banque a 10 jours pour répondre.
        </p>
        <button
          type="button"
          onClick={() => document.getElementById("top-recommendations")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-accent-600 hover:bg-accent-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
        >
          Voir les offres recommandées ↑
        </button>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onReset}
          className="text-primary-800 hover:text-primary-700 text-sm font-medium transition-colors cursor-pointer"
        >
          ← Refaire une simulation
        </button>
      </div>
    </div>
  );
}
