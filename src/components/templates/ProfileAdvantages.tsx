import type { ProfileData } from "@/data/profiles";

interface ProfileAdvantagesProps {
  profile: ProfileData;
}

export default function ProfileAdvantages({ profile }: ProfileAdvantagesProps) {
  const maxRows = Math.max(
    profile.specificChallenges.length,
    profile.specificAdvantages.length
  );
  const rows = Array.from({ length: maxRows }, (_, i) => ({
    challenge: profile.specificChallenges[i] || "",
    advantage: profile.specificAdvantages[i] || "",
  }));

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {profile.advantagesTitle}
          </h2>
        </div>

        {/* Desktop: side-by-side table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/2 py-3 px-5 text-left text-sm font-semibold text-danger-500 bg-danger-50">
                  &#10007; Défis spécifiques
                </th>
                <th className="w-1/2 py-3 px-5 text-left text-sm font-semibold text-success-600 bg-success-50">
                  &#10003; Avantages du changement
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-3 px-5 text-sm text-gray-700 align-top">
                    {row.challenge && (
                      <span className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-danger-500 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                        {row.challenge}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-5 text-sm text-gray-700 align-top">
                    {row.advantage && (
                      <span className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-success-600 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {row.advantage}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked blocks */}
        <div className="md:hidden space-y-4">
          <div className="rounded-xl bg-danger-50 border border-danger-200 p-4">
            <p className="text-sm font-semibold text-danger-500 mb-3">
              &#10007; Défis spécifiques
            </p>
            <ul className="space-y-2">
              {profile.specificChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-danger-500 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-success-50 border border-success-200 p-4">
            <p className="text-sm font-semibold text-success-600 mb-3">
              &#10003; Avantages du changement
            </p>
            <ul className="space-y-2">
              {profile.specificAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-success-600 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
