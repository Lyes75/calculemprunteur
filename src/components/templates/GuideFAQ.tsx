import type { GuideData } from "@/data/guides";
import JsonLd from "@/components/seo/JsonLd";

interface GuideFAQProps {
  guide: GuideData;
}

export default function GuideFAQ({ guide }: GuideFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <JsonLd data={faqSchema} />

        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-accent-600 mx-auto mb-4 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Questions fr&eacute;quentes
          </h2>
        </div>

        <div className="space-y-3">
          {guide.faq.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
            >
              <summary className="flex items-center justify-between p-5 md:p-6 text-left cursor-pointer">
                <span className="text-base font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <svg
                  className="faq-chevron w-5 h-5 text-gray-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="faq-content">
                <div>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
