const BADGES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "100% gratuit",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M5 12h14M8 20h8M12 12v8M9 16h6" />
      </svg>
    ),
    label: "Top 3 assureurs pour votre profil",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "Lettre de changement générée",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Sans engagement",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[760px] mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-primary-800">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
