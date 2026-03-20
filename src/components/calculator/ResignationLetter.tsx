"use client";

import { useState } from "react";
import { useAI } from "@/lib/useAI";
import { formatEuro, formatPercent } from "./utils";

interface ResignationLetterProps {
  bankName: string;
  capital: number;
  remainingYears: number;
  currentRate: number;
  monthlyCostCurrent: number;
}

interface LetterForm {
  fullName: string;
  address: string;
  loanNumber: string;
  email: string;
}

const SYSTEM_PROMPT = `Tu es un assistant juridique spécialisé en assurance emprunteur française. Tu rédiges des lettres de changement d'assurance emprunteur conformes à la loi Lemoine (loi n°2022-270 du 28 février 2022).

Règles strictes :
- La lettre doit être formelle, professionnelle, et juridiquement correcte
- Citer explicitement la loi Lemoine et l'article L113-12-2 du Code des assurances
- Le ton est courtois mais affirmatif (l'emprunteur exerce un DROIT, il ne demande pas une faveur)
- La lettre doit mentionner que le nouveau contrat respecte l'équivalence de garanties
- Inclure une demande d'accusé de réception
- Format : lettre recommandée avec accusé de réception
- Langue : français soutenu
- Longueur : 250-350 mots max

Structure de la lettre :
1. Coordonnées expéditeur (en haut à gauche)
2. Coordonnées destinataire (service assurance emprunteur de la banque)
3. Objet : "Changement d'assurance emprunteur — Loi Lemoine"
4. Référence du prêt (si fournie)
5. Corps : notification du changement, mention de la loi, demande de traitement sous 10 jours
6. Formule de politesse
7. Signature

Ne jamais inventer de numéros de contrat, de dates, ou d'informations non fournies. Si une information n'est pas fournie, mettre [À COMPLÉTER].`;

function downloadAsPDF(letterContent: string, userName: string) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lettre changement assurance - ${userName}</title>
      <style>
        body { font-family: 'Times New Roman', Georgia, serif; font-size: 12pt; line-height: 1.6; max-width: 700px; margin: 40px auto; padding: 40px; color: #1a1a1a; }
        @media print { body { margin: 0; padding: 20px; } }
      </style>
    </head>
    <body>
      <pre style="white-space: pre-wrap; font-family: 'Times New Roman', Georgia, serif;">${letterContent}</pre>
      <script>window.print();<\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

export default function ResignationLetter(props: ResignationLetterProps) {
  const { bankName, capital, remainingYears, currentRate, monthlyCostCurrent } =
    props;

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<LetterForm>({
    fullName: "",
    address: "",
    loanNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [letter, setLetter] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { generate, loading } = useAI();

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Veuillez entrer votre nom";
    if (!formData.address.trim())
      newErrors.address = "Veuillez entrer votre adresse";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Veuillez entrer un email valide";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Store lead
    try {
      const leads = JSON.parse(localStorage.getItem("letter_leads") || "[]");
      leads.push({
        ...formData,
        bankName,
        capital,
        remainingYears,
        currentRate,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("letter_leads", JSON.stringify(leads));
    } catch {
      // localStorage unavailable
    }

    const userPrompt = `Rédige une lettre de changement d'assurance emprunteur avec les informations suivantes :

Emprunteur :
- Nom : ${formData.fullName}
- Adresse : ${formData.address}

Prêt :
- Banque : ${bankName}
- Numéro de prêt : ${formData.loanNumber || "[À COMPLÉTER]"}
- Capital restant dû : ${formatEuro(capital)}
- Durée restante : ${remainingYears} ans

Assurance actuelle :
- Taux : ${formatPercent(currentRate)}
- Coût mensuel : ${formatEuro(monthlyCostCurrent)}

L'emprunteur souhaite changer pour une assurance en délégation en application de la loi Lemoine.

Rédige la lettre complète, prête à envoyer.`;

    const result = await generate(userPrompt, SYSTEM_PROMPT);
    if (result) {
      setLetter(result);
    }
  }

  async function handleCopy() {
    if (!letter) return;
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  return (
    <div className="bg-accent-50 rounded-2xl p-6 md:p-8 border border-accent-200">
      {!letter ? (
        <>
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Générez votre lettre de changement d&apos;assurance
              </h3>
              <p className="text-sm text-gray-600">
                Pré-remplie avec les données de votre prêt, conforme loi
                Lemoine. Prête à envoyer.
              </p>
            </div>
          </div>

          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="w-full bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-xl px-6 py-4 text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Générer ma lettre gratuitement →
            </button>
          ) : (
            <form
              onSubmit={handleGenerate}
              className="space-y-4 step-enter-forward"
            >
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Nom complet
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors duration-150 ${errors.fullName ? "border-danger-500" : "border-gray-300"} focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none`}
                />
                {errors.fullName && (
                  <p className="text-sm text-danger-500 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Adresse postale
                </label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="12 rue de la Paix, 75002 Paris"
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors duration-150 ${errors.address ? "border-danger-500" : "border-gray-300"} focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none`}
                />
                {errors.address && (
                  <p className="text-sm text-danger-500 mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Numéro de prêt{" "}
                  <span className="text-gray-400 font-normal">(facultatif)</span>
                </label>
                <input
                  name="loanNumber"
                  type="text"
                  value={formData.loanNumber}
                  onChange={handleChange}
                  placeholder="Figure sur votre offre de prêt"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors duration-150 focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email{" "}
                  <span className="text-gray-400 font-normal">
                    (pour recevoir votre lettre)
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.fr"
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 transition-colors duration-150 ${errors.email ? "border-danger-500" : "border-gray-300"} focus:border-primary-800 focus:ring-2 focus:ring-primary-100 focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-sm text-danger-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold rounded-xl px-6 py-4 text-base transition-all duration-200 active:scale-[0.98] cursor-pointer ${loading ? "bg-gray-400 cursor-not-allowed text-white" : "bg-accent-600 hover:bg-accent-500 text-white shadow-md hover:shadow-lg"}`}
              >
                {loading
                  ? "Rédaction de votre lettre personnalisée..."
                  : "Générer →"}
              </button>
            </form>
          )}
        </>
      ) : (
        <>
          {/* Generated letter */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 md:p-8 max-w-[640px] mx-auto mb-4">
            <pre className="whitespace-pre-wrap font-serif text-sm text-gray-800 leading-relaxed">
              {letter}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-[640px] mx-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 bg-transparent text-primary-800 border border-primary-800 hover:border-primary-700 font-medium rounded-xl px-6 py-3 text-sm transition-all duration-200 cursor-pointer"
            >
              {copied ? "✓ Copié" : "Copier le texte"}
            </button>
            <button
              type="button"
              onClick={() => downloadAsPDF(letter, formData.fullName)}
              className="flex-1 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-xl px-6 py-3 text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Télécharger en PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}
