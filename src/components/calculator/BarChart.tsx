"use client";

import { formatEuro } from "./utils";

interface BarChartProps {
  currentCost: number;
  delegationCost: number;
}

export default function BarChart({ currentCost, delegationCost }: BarChartProps) {
  const maxCost = Math.max(currentCost, delegationCost);
  const currentPercent = maxCost > 0 ? (currentCost / maxCost) * 100 : 0;
  const delegationPercent = maxCost > 0 ? (delegationCost / maxCost) * 100 : 0;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Assurance banque</span>
          <span className="font-semibold text-gray-900">{formatEuro(currentCost)}</span>
        </div>
        <div className="bg-gray-100 rounded-lg h-10 overflow-hidden">
          <div
            className="bg-danger-500 h-full rounded-lg bar-animate opacity-90"
            style={{ width: `${currentPercent}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Assurance déléguée</span>
          <span className="font-semibold text-gray-900">{formatEuro(delegationCost)}</span>
        </div>
        <div className="bg-gray-100 rounded-lg h-10 overflow-hidden">
          <div
            className="bg-accent-600 h-full rounded-lg bar-animate"
            style={{ width: `${delegationPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
