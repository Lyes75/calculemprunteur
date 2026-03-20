"use client";

import { useState, useRef } from "react";
import type { LoanData, ProfileData, CalculatorResult } from "./types";
import { calculateSavings } from "./utils";
import ProgressBar from "./ProgressBar";
import StepLoan from "./StepLoan";
import StepProfile from "./StepProfile";
import StepResults from "./StepResults";
import { getSessionId, getDeviceType } from "@/lib/session";

export default function SavingsCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [loanData, setLoanData] = useState<LoanData>({
    capital: 200000,
    remainingYears: 15,
    bankKey: "",
    currentRate: 0,
  });
  const [profileData, setProfileData] = useState<ProfileData>({
    ageRange: "",
    smoker: false,
    riskyJob: false,
  });
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollToCalculator() {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goToStep(step: number) {
    setDirection(step > currentStep ? "forward" : "backward");
    setCurrentStep(step);
    scrollToCalculator();
  }

  function handleLoanNext(data: LoanData) {
    setLoanData(data);
    goToStep(2);
  }

  function handleProfileNext(data: ProfileData) {
    setProfileData(data);
    const calcResult = calculateSavings({
      capital: loanData.capital,
      remainingYears: loanData.remainingYears,
      currentRate: loanData.currentRate,
      ageRange: data.ageRange,
      smoker: data.smoker,
      riskyJob: data.riskyJob,
    });
    setResult(calcResult);

    // Track simulation (fire-and-forget)
    fetch('/api/simulations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: getSessionId(),
        capital: loanData.capital,
        duree_restante: loanData.remainingYears,
        banque_slug: loanData.bankKey,
        taux_actuel: loanData.currentRate,
        tranche_age: data.ageRange,
        fumeur: data.smoker,
        profession_risque: data.riskyJob,
        economie_estimee: calcResult.savings,
        taux_delegation_estime: calcResult.delegationRate,
        source_page: '/',
        device_type: getDeviceType(),
      }),
    }).catch(() => {});

    goToStep(3);
  }

  function handleReset() {
    setCurrentStep(1);
    setDirection("backward");
    setLoanData({
      capital: 200000,
      remainingYears: 15,
      bankKey: "",
      currentRate: 0,
    });
    setProfileData({
      ageRange: "",
      smoker: false,
      riskyJob: false,
    });
    setResult(null);
    scrollToCalculator();
  }

  function handleStepClick(step: number) {
    goToStep(step);
  }

  const animationClass =
    direction === "forward" ? "step-enter-forward" : "step-enter-backward";

  return (
    <div ref={containerRef} id="simulateur" className="scroll-mt-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 border-t-[3px] border-t-accent-600 p-6 md:p-8 lg:p-10 max-w-[760px] mx-auto">
        <ProgressBar currentStep={currentStep} onStepClick={handleStepClick} />

        <div key={currentStep} className={animationClass}>
          {currentStep === 1 && (
            <StepLoan data={loanData} onNext={handleLoanNext} />
          )}
          {currentStep === 2 && (
            <StepProfile
              data={profileData}
              onNext={handleProfileNext}
              onBack={() => goToStep(1)}
            />
          )}
          {currentStep === 3 && result && (
            <StepResults
              result={result}
              loanData={loanData}
              profileData={profileData}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
}
