import type { InsurerData } from "@/data/insurers";

interface InsurerVsGroupProps {
  insurer: InsurerData;
}

export default function InsurerVsGroup({ insurer }: InsurerVsGroupProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {insurer.name} vs contrat groupe bancaire
          </h2>
        </div>

        {/* Key figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-primary-50 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-600 mb-1">
              Taux moyen contrat groupe
            </p>
            <p className="text-2xl font-bold text-primary-800">
              {insurer.vsGroupRate}
            </p>
          </div>
          <div className="bg-accent-50 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-600 mb-1">
              &Eacute;conomie estim&eacute;e
            </p>
            <p className="text-2xl font-bold text-accent-600">
              {insurer.vsGroupSavings}*
            </p>
          </div>
        </div>

        {/* Explanatory text */}
        <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
          {insurer.vsGroupText}
        </p>

        <p className="text-xs text-gray-400 mt-4 text-center max-w-2xl mx-auto">
          * Estimation sur un pr&ecirc;t de 200&nbsp;000&euro; sur 20 ans pour un profil
          30-40 ans non-fumeur. Votre &eacute;conomie r&eacute;elle d&eacute;pend de votre profil.
        </p>
      </div>
    </section>
  );
}
