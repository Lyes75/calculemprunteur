"use client";

import { useState } from "react";
import type { CalculatorResult, LeadData, LoanData, ProfileData } from "./types";
import { formatEuro, formatPercent } from "./utils";
import CountUp from "./CountUp";
import BarChart from "./BarChart";

interface StepResultsProps {
  result: CalculatorResult;
  loanData: LoanData;
  profileData: ProfileData;
  onReset: () => void;
}

export default function StepResults({ result, loanData, profileData, onReset }: StepResultsProps) {
  const [leadData, setLeadData] = useState<LeadData>({
    firstName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const isLowSavings = result.savings < 500;

  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};

    if (!leadData.firstName.trim()) {
      newErrors.firstName = "Veuillez entrer votre prénom";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }

    const phoneRegex = /^(?:(?:\+33|0033|0)\s*[1-9])(?:[\s.-]*\d{2}){4}$/;
    const cleanPhone = leadData.phone.replace(/\s/g, "");
    if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide (10 chiffres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    const fullLead = {
      ...leadData,
      capital: loanData.capital,
      remainingYears: loanData.remainingYears,
      bankKey: loanData.bankKey,
      currentRate: loanData.currentRate,
      ageRange: profileData.ageRange,
      smoker: profileData.smoker,
      riskyJob: profileData.riskyJob,
      estimatedSavings: result.savings,
      timestamp: new Date().toISOString(),
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem("leads") || "[]");
      existingLeads.push(fullLead);
      localStorage.setItem("leads", JSON.stringify(existingLeads));
    } catch {
      // localStorage unavailable
    }

    setSubmitted(true);
  }

  return (
    <div className="space-y-8">
      {/* Hero résultat */}
      <div className={`text-center p-6 rounded-2xl ${isLowSavings ? "bg-warning-100" : "bg-accent-50"}`}>
        <p className="text-gray-700 text-sm font-medium mb-1">
          Vous pourriez économiser
        </p>
        <p className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isLowSavings ? "text-warning-500" : "text-accent-600"}`}>
          <CountUp target={result.savings} />
        </p>
        <p className="text-gray-600 text-sm mt-2">
          sur les {loanData.remainingYears} années restantes de votre prêt
        </p>
        {isLowSavings && (
          <p className="text-warning-500 text-sm font-medium mt-3">
            L&apos;économie estimée est faible. Votre assurance actuelle est déjà compétitive.
          </p>
        )}
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

      {/* Graphique à barres */}
      <BarChart currentCost={result.totalCostCurrent} delegationCost={result.totalCostDelegation} />

      {/* Formulaire de lead */}
      {!submitted ? (
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
            Recevez 3 devis personnalisés gratuits
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Sans engagement — Réponse sous 24h
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Prénom
              </label>
              <input
                type="text"
                value={leadData.firstName}
                onChange={(e) => setLeadData({ ...leadData, firstName: e.target.value })}
                placeholder="Votre prénom"
                className={`
                  w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                  placeholder:text-gray-400 transition-colors duration-150
                  ${errors.firstName ? "border-danger-500" : "border-gray-300"}
                  focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                `}
              />
              {errors.firstName && (
                <p className="text-sm text-danger-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                value={leadData.email}
                onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                placeholder="votre@email.fr"
                className={`
                  w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                  placeholder:text-gray-400 transition-colors duration-150
                  ${errors.email ? "border-danger-500" : "border-gray-300"}
                  focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                `}
              />
              {errors.email && (
                <p className="text-sm text-danger-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Téléphone
              </label>
              <input
                type="tel"
                value={leadData.phone}
                onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                placeholder="06 12 34 56 78"
                className={`
                  w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
                  placeholder:text-gray-400 transition-colors duration-150
                  ${errors.phone ? "border-danger-500" : "border-gray-300"}
                  focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
                `}
              />
              {errors.phone && (
                <p className="text-sm text-danger-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="
                w-full bg-accent-600 hover:bg-accent-500 text-white font-semibold
                rounded-xl px-8 py-4 text-base md:text-lg shadow-md hover:shadow-lg
                transition-all duration-200 active:scale-[0.98] cursor-pointer
              "
            >
              Recevoir mes devis gratuits →
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-success-50 border border-success-500 rounded-2xl p-6 text-center">
          <div className="text-success-600 text-3xl mb-2">✓</div>
          <p className="text-success-600 font-semibold text-lg">
            Demande envoyée !
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Vous recevrez vos devis sous 24h.
          </p>
        </div>
      )}

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
