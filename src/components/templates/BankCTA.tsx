import type { BankData } from "@/data/banks";

interface BankCTAProps {
  bank: BankData;
}

export default function BankCTA({ bank }: BankCTAProps) {
  return (
    <section className="bg-primary-900 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Pret a quitter l&apos;assurance {bank.insurerName} de {bank.name}&nbsp;?
        </h2>
        <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Simulez votre economie et recevez votre lettre de changement en 2&nbsp;minutes.
        </p>
        <a
          href="#simulateur"
          className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-xl transition-colors duration-200 text-base md:text-lg"
        >
          Calculer mon economie &rarr;
        </a>
      </div>
    </section>
  );
}
