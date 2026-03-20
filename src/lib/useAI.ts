"use client";

import { useState } from "react";

interface UseAIReturn {
  generate: (prompt: string, systemPrompt: string) => Promise<string>;
  loading: boolean;
  error: string | null;
}

export function useAI(): UseAIReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (
    prompt: string,
    systemPrompt: string
  ): Promise<string> => {
    setLoading(true);
    setError(null);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, systemPrompt }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur API");
      return data.result;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Erreur inconnue";
      setError(message);
      return "";
    } finally {
      setLoading(false);
    }
  };

  return { generate, loading, error };
}
