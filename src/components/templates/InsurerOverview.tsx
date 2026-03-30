import type { InsurerData } from "@/data/insurers";

interface InsurerOverviewProps {
  insurer: InsurerData;
}

export default function InsurerOverview({ insurer }: InsurerOverviewProps) {
  const paragraphs = insurer.overviewText.split("\n\n");

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {insurer.overviewTitle}
          </h2>
        </div>

        <div className="space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
