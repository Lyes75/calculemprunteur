"use client";

import { useState } from "react";
import type { ProfileData } from "./types";

interface StepProfileProps {
  data: ProfileData;
  onNext: (data: ProfileData) => void;
  onBack: () => void;
}

const AGE_RANGES = ["25-35", "36-45", "46-55", "56-65", "65+"];

export default function StepProfile({ data, onNext, onBack }: StepProfileProps) {
  const [ageRange, setAgeRange] = useState(data.ageRange);
  const [smoker, setSmoker] = useState(data.smoker);
  const [riskyJob, setRiskyJob] = useState(data.riskyJob);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ageRange) {
      setError("Veuillez sélectionner votre tranche d'âge");
      return;
    }
    setError("");
    onNext({ ageRange, smoker, riskyJob });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-700">
          Tranche d&apos;âge
        </label>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
          {AGE_RANGES.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => { setAgeRange(range); setError(""); }}
              className={`
                px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                border-2 cursor-pointer
                ${ageRange === range
                  ? "bg-primary-50 border-primary-800 text-primary-800 font-semibold"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              {range} ans
            </button>
          ))}
        </div>
        {error && <p className="text-sm text-danger-500">{error}</p>}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Fumeur ou ancien fumeur (moins de 2 ans)
            </label>
          </div>
          <button
            type="button"
            onClick={() => setSmoker(!smoker)}
            className={`toggle-switch ${smoker ? "active" : ""}`}
            role="switch"
            aria-checked={smoker}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Profession à risque
            </label>
            <p className="text-xs text-gray-500 mt-0.5">
              Militaire, policier, pompier, pilote, marin, couvreur...
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRiskyJob(!riskyJob)}
            className={`toggle-switch ${riskyJob ? "active" : ""}`}
            role="switch"
            aria-checked={riskyJob}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={onBack}
          className="
            sm:w-auto bg-transparent text-primary-800 hover:text-primary-700
            border border-primary-800 hover:border-primary-700 rounded-xl
            px-6 py-3 font-medium transition-all duration-200 cursor-pointer
            order-2 sm:order-1
          "
        >
          ← Retour
        </button>
        <button
          type="submit"
          className="
            flex-1 bg-accent-600 hover:bg-accent-500 text-white font-semibold
            rounded-xl px-8 py-4 text-base md:text-lg shadow-md hover:shadow-lg
            transition-all duration-200 active:scale-[0.98] cursor-pointer
            order-1 sm:order-2
          "
        >
          Voir mes résultats →
        </button>
      </div>
    </form>
  );
}
