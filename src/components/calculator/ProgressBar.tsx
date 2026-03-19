"use client";

interface ProgressBarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const STEPS = ["Votre prêt", "Votre profil", "Résultats"];

export default function ProgressBar({ currentStep, onStepClick }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {STEPS.map((label, index) => {
        const stepNum = index + 1;
        const isPast = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        const isFuture = stepNum > currentStep;

        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => isPast && onStepClick(stepNum)}
              disabled={!isPast}
              className={`
                flex items-center gap-2 transition-colors duration-200
                ${isPast ? "cursor-pointer" : "cursor-default"}
              `}
            >
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  transition-all duration-200 shrink-0
                  ${isPast ? "bg-primary-800 text-white" : ""}
                  ${isActive ? "bg-accent-600 text-white ring-4 ring-accent-100" : ""}
                  ${isFuture ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                {isPast ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`
                  text-sm font-medium hidden sm:inline
                  ${isPast ? "text-primary-800" : ""}
                  ${isActive ? "text-accent-600" : ""}
                  ${isFuture ? "text-gray-400" : ""}
                `}
              >
                {label}
              </span>
            </button>
            {index < STEPS.length - 1 && (
              <div
                className={`
                  flex-1 h-0.5 mx-3
                  ${stepNum < currentStep ? "bg-primary-800" : "bg-gray-200"}
                  transition-colors duration-200
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
