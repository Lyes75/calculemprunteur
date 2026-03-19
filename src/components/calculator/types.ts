export interface BankInfo {
  name: string;
  insurer: string;
  rate: number;
}

export interface LoanData {
  capital: number;
  remainingYears: number;
  bankKey: string;
  currentRate: number;
}

export interface ProfileData {
  ageRange: string;
  smoker: boolean;
  riskyJob: boolean;
}

export interface CalculatorInput {
  capital: number;
  remainingYears: number;
  currentRate: number;
  ageRange: string;
  smoker: boolean;
  riskyJob: boolean;
}

export interface CalculatorResult {
  monthlyCostCurrent: number;
  monthlyCostDelegation: number;
  totalCostCurrent: number;
  totalCostDelegation: number;
  savings: number;
  currentRate: number;
  delegationRate: number;
}

export interface LeadData {
  firstName: string;
  email: string;
  phone: string;
}
