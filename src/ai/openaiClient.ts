import OpenAI from "openai";

/** Prefer OPENAI_KEY (project convention); fall back to OPENAI_API_KEY. */
export function getOpenAIApiKey(): string {
  const key =
    process.env.OPENAI_KEY ?? process.env.OPENAI_API_KEY ?? "";
  if (!key) {
    throw new Error(
      "Missing OpenAI API key: set OPENAI_KEY or OPENAI_API_KEY in the environment.",
    );
  }
  return key;
}

export function createOpenAIClient(): OpenAI {
  return new OpenAI({ apiKey: getOpenAIApiKey() });
}
