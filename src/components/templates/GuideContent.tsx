import type { GuideData, ExternalLink } from "@/data/guides";
import React from "react";

interface GuideContentProps {
  guide: GuideData;
}

function renderParagraphWithLinks(text: string, links?: ExternalLink[]) {
  if (!links || links.length === 0) {
    return <>{text}</>;
  }

  const parts: (string | React.ReactNode)[] = [];
  let remaining = text;
  let keyIdx = 0;

  // Sort links by position in text (first occurrence first)
  const sortedLinks = [...links].sort((a, b) => {
    const posA = remaining.indexOf(a.text);
    const posB = remaining.indexOf(b.text);
    return posA - posB;
  });

  for (const link of sortedLinks) {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) continue;

    if (idx > 0) {
      parts.push(remaining.substring(0, idx));
    }
    parts.push(
      <a
        key={keyIdx++}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-600 hover:text-accent-500 underline"
      >
        {link.text}
      </a>
    );
    remaining = remaining.substring(idx + link.text.length);
  }

  if (remaining) {
    parts.push(remaining);
  }

  return <>{parts}</>;
}

export default function GuideContent({ guide }: GuideContentProps) {
  return (
    <>
      {/* Table of contents */}
      <nav className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <p className="text-sm font-semibold text-gray-900 mb-3">
          Dans ce guide
        </p>
        <ul className="space-y-2">
          {guide.sections.map((section, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className="text-sm text-accent-600 hover:text-accent-500 transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      {guide.sections.map((section, i) => (
        <section
          key={i}
          className={`py-12 md:py-16 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <h2
              id={`section-${i}`}
              className="scroll-mt-24 text-xl md:text-2xl font-bold text-gray-900 mb-6"
            >
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  {renderParagraphWithLinks(paragraph, section.links)}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
