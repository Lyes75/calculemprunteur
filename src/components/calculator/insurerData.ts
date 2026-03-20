export interface Insurer {
  id: string;
  name: string;
  type: "delegation" | "group";
  baseRates: Record<string, number>;
  smokerMultiplier: number;
  riskyJobMultiplier: number;
  strengths: string[];
  bestFor: string[];
  onlineProcess: boolean;
  avgProcessingDays: number;
}

export const INSURERS: Insurer[] = [
  {
    id: "april",
    name: "April",
    type: "delegation",
    baseRates: {
      "25-35": 0.0008,
      "36-45": 0.0012,
      "46-55": 0.0022,
      "56-65": 0.0035,
      "65+": 0.005,
    },
    smokerMultiplier: 1.45,
    riskyJobMultiplier: 1.25,
    strengths: [
      "Tarifs très compétitifs",
      "Souscription 100% en ligne",
      "Spécialiste risques aggravés",
    ],
    bestFor: ["young", "health-risk", "online"],
    onlineProcess: true,
    avgProcessingDays: 5,
  },
  {
    id: "generali",
    name: "Generali",
    type: "delegation",
    baseRates: {
      "25-35": 0.0009,
      "36-45": 0.0014,
      "46-55": 0.0024,
      "56-65": 0.0036,
      "65+": 0.0052,
    },
    smokerMultiplier: 1.5,
    riskyJobMultiplier: 1.3,
    strengths: [
      "Excellent rapport garanties/prix",
      "Couverture large",
      "Marque de confiance",
    ],
    bestFor: ["balanced", "senior", "high-coverage"],
    onlineProcess: true,
    avgProcessingDays: 7,
  },
  {
    id: "swisslife",
    name: "Swiss Life",
    type: "delegation",
    baseRates: {
      "25-35": 0.0011,
      "36-45": 0.0016,
      "46-55": 0.0026,
      "56-65": 0.0038,
      "65+": 0.0054,
    },
    smokerMultiplier: 1.4,
    riskyJobMultiplier: 1.2,
    strengths: [
      "Spécialiste seniors et cadres",
      "Options personnalisables",
      "Pas de limite d'âge",
    ],
    bestFor: ["senior", "executive", "customizable"],
    onlineProcess: true,
    avgProcessingDays: 8,
  },
  {
    id: "cardif-liberte",
    name: "Cardif Liberté",
    type: "delegation",
    baseRates: {
      "25-35": 0.001,
      "36-45": 0.0015,
      "46-55": 0.0025,
      "56-65": 0.0037,
      "65+": 0.0053,
    },
    smokerMultiplier: 1.5,
    riskyJobMultiplier: 1.3,
    strengths: [
      "Adossé à BNP Paribas",
      "Transition facile si client BNP",
      "Garanties solides",
    ],
    bestFor: ["bnp-clients", "balanced", "trust"],
    onlineProcess: true,
    avgProcessingDays: 6,
  },
  {
    id: "suravenir",
    name: "Suravenir",
    type: "delegation",
    baseRates: {
      "25-35": 0.0009,
      "36-45": 0.0013,
      "46-55": 0.0023,
      "56-65": 0.0036,
      "65+": 0.0051,
    },
    smokerMultiplier: 1.45,
    riskyJobMultiplier: 1.25,
    strengths: [
      "Filiale Crédit Mutuel Arkéa",
      "Très compétitif jeunes emprunteurs",
      "Process rapide",
    ],
    bestFor: ["young", "fast", "competitive"],
    onlineProcess: true,
    avgProcessingDays: 5,
  },
  {
    id: "macif",
    name: "Macif",
    type: "delegation",
    baseRates: {
      "25-35": 0.0012,
      "36-45": 0.0017,
      "46-55": 0.0027,
      "56-65": 0.004,
      "65+": 0.0058,
    },
    smokerMultiplier: 1.5,
    riskyJobMultiplier: 1.35,
    strengths: [
      "Mutuelle de confiance",
      "Service client reconnu",
      "Bon pour sociétaires",
    ],
    bestFor: ["trust", "service", "mutual"],
    onlineProcess: false,
    avgProcessingDays: 10,
  },
];
