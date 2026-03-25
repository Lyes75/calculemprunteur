import type { BankData } from "@/data/banks";

interface BankHeroProps {
  bank: BankData;
}

export default function BankHero({ bank }: BankHeroProps) {
  const delegationRate = 0.10;
  const rateDisplay = bank.groupRate.toFixed(2).replace(".", ",");
  const delegationDisplay = delegationRate.toFixed(2).replace(".", ",");

  return (
    <section className="bg-gray-50 pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
            style={{ backgroundColor: bank.badgeColor }}
          >
            {bank.shortName}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Changer l&apos;assurance emprunteur {bank.name}&nbsp;: combien
            {" "}&eacute;conomiser&nbsp;?
          </h1>
        </div>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
          Le contrat groupe <strong className="text-gray-800">{bank.contractName}</strong>,
          assuré par <strong className="text-gray-800">{bank.insurerName}</strong>,
          affiche un taux moyen de{" "}
          <strong className="text-primary-800">{rateDisplay}&nbsp;%</strong> du capital
          emprunté. En délégation d&apos;assurance, les meilleurs contrats
          démarrent à{" "}
          <strong className="text-accent-600">{delegationDisplay}&nbsp;%</strong>.
          Découvrez combien vous pouvez économiser.
        </p>
      </div>
    </section>
  );
}
