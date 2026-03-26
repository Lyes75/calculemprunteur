import type { ProfileData } from "@/data/profiles";

interface ProfileContextProps {
  profile: ProfileData;
}

export default function ProfileContext({ profile }: ProfileContextProps) {
  const paragraphs = profile.contextText.split("\n\n");

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {profile.contextTitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
