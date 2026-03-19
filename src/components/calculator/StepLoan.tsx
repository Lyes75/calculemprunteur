"use client";

import { useState } from "react";
import type { LoanData } from "./types";
import { BANK_DATA } from "./constants";
import { formatNumber } from "./utils";
import SliderInput from "./SliderInput";

interface StepLoanProps {
  data: LoanData;
  onNext: (data: LoanData) => void;
}

export default function StepLoan({ data, onNext }: StepLoanProps) {
  const [capital, setCapital] = useState(data.capital);
  const [remainingYears, setRemainingYears] = useState(data.remainingYears);
  const [bankKey, setBankKey] = useState(data.bankKey);
  const [currentRate, setCurrentRate] = useState(data.currentRate);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleBankChange(key: string) {
    setBankKey(key);
    if (key && BANK_DATA[key]) {
      setCurrentRate(BANK_DATA[key].rate * 100);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!bankKey) {
      newErrors.bank = "Veuillez sélectionner votre banque";
    }
    if (currentRate < 0.05 || currentRate > 1.5) {
      newErrors.rate = "Le taux doit être entre 0,05% et 1,50%";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onNext({
      capital,
      remainingYears,
      bankKey,
      currentRate: currentRate / 100,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SliderInput
        label="Capital restant dû"
        value={capital}
        min={30000}
        max={800000}
        step={5000}
        onChange={setCapital}
        formatDisplay={(v) => `${formatNumber(v)} €`}
      />

      <SliderInput
        label="Durée restante"
        value={remainingYears}
        min={3}
        max={25}
        step={1}
        onChange={setRemainingYears}
        formatDisplay={(v) => `${v} an${v > 1 ? "s" : ""}`}
      />

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Banque actuelle
        </label>
        <select
          value={bankKey}
          onChange={(e) => handleBankChange(e.target.value)}
          className={`
            w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
            transition-colors duration-150 appearance-none
            bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')]
            bg-[position:right_12px_center] bg-no-repeat pr-10
            ${errors.bank ? "border-danger-500" : "border-gray-300"}
            focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
          `}
        >
          <option value="">Sélectionnez votre banque</option>
          {Object.entries(BANK_DATA).map(([key, bank]) => (
            <option key={key} value={key}>
              {bank.name} ({bank.insurer})
            </option>
          ))}
        </select>
        {errors.bank && (
          <p className="text-sm text-danger-500">{errors.bank}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Votre taux d&apos;assurance actuel
        </label>
        <div className="relative">
          <input
            type="number"
            value={currentRate || ""}
            onChange={(e) => setCurrentRate(Number(e.target.value))}
            min={0.05}
            max={1.5}
            step={0.01}
            placeholder="0,42"
            className={`
              w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900
              placeholder:text-gray-400 transition-colors duration-150
              ${errors.rate ? "border-danger-500" : "border-gray-300"}
              focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none
              pr-10
            `}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            %
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Ce taux figure sur votre offre de prêt ou votre relevé annuel
        </p>
        {errors.rate && (
          <p className="text-sm text-danger-500">{errors.rate}</p>
        )}
      </div>

      <button
        type="submit"
        className="
          w-full bg-accent-600 hover:bg-accent-500 text-white font-semibold
          rounded-xl px-8 py-4 text-base md:text-lg shadow-md hover:shadow-lg
          transition-all duration-200 active:scale-[0.98]
          cursor-pointer
        "
      >
        Calculer mes économies →
      </button>
    </form>
  );
}
