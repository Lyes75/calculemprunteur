import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Simple in-memory rate limiting
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);
  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour
    return false;
  }
  entry.count++;
  return entry.count > 10; // max 10 requests per hour per IP
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans quelques minutes." },
      { status: 429 }
    );
  }

  const { prompt, systemPrompt } = await req.json();

  if (!prompt || !systemPrompt) {
    return NextResponse.json(
      { error: "Missing prompt or systemPrompt" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "API error" },
        { status: response.status }
      );
    }

    const text = data.content
      .filter((block: { type: string }) => block.type === "text")
      .map((block: { text: string }) => block.text)
      .join("\n");

    return NextResponse.json({ result: text });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
