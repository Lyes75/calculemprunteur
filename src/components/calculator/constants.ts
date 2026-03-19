import type { BankInfo } from "./types";

export const BANK_DATA: Record<string, BankInfo> = {
  "credit-agricole": { name: "Crédit Agricole", insurer: "Predica", rate: 0.0042 },
  "bnp-paribas": { name: "BNP Paribas", insurer: "Cardif", rate: 0.0045 },
  "societe-generale": { name: "Société Générale", insurer: "Sogecap", rate: 0.0040 },
  "caisse-epargne": { name: "Caisse d'Épargne", insurer: "CNP", rate: 0.0044 },
  "credit-mutuel": { name: "Crédit Mutuel", insurer: "ACM", rate: 0.0038 },
  "lcl": { name: "LCL", insurer: "Predica", rate: 0.0043 },
  "banque-postale": { name: "La Banque Postale", insurer: "CNP", rate: 0.0046 },
  "banque-populaire": { name: "Banque Populaire", insurer: "BPCE Vie", rate: 0.0041 },
  "cic": { name: "CIC", insurer: "ACM", rate: 0.0039 },
  "hsbc": { name: "HSBC", insurer: "HSBC Assurances", rate: 0.0044 },
  "boursorama": { name: "Boursorama", insurer: "Generali", rate: 0.0030 },
  "autre": { name: "Autre banque", insurer: "-", rate: 0.0042 },
};

export const DELEGATION_RATES: Record<string, number> = {
  "25-35": 0.0010,
  "36-45": 0.0015,
  "46-55": 0.0025,
  "56-65": 0.0038,
  "65+": 0.0055,
};

export const SMOKER_MULTIPLIER = 1.50;
export const RISKY_JOB_MULTIPLIER = 1.30;
