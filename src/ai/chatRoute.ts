import { Router, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import type {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat/completions";
import { masterClient } from "../DATABASE/masterpool";
import { createOpenAIClient } from "./openaiClient";
import { lookupActivityForDate } from "./activityByDate";

const router = Router();

const TOOLS = [
  {
    type: "function" as const,
    function: {
      name: "lookup_activity_by_date",
      description:
        "Load business activity for one calendar day from the company database: Fortnox vouchers (transaction date), invoices (invoice or due date that day), time entries, stored emails, and email activity. Pass date as YYYY-MM-DD (UTC calendar day used for filters).",
      parameters: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description:
              "Calendar date in YYYY-MM-DD (UTC day used for filters).",
          },
        },
        required: ["date"],
      },
    },
  },
];

function extractToken(req: Request): string | undefined {
  const auth = req.headers.authorization;
  let fromHeader: string | undefined;
  if (auth?.startsWith("Bearer ")) {
    fromHeader = auth.slice("Bearer ".length);
  }
  const cookie = req.cookies?.token as string | undefined;
  return fromHeader || cookie;
}

function systemPrompt(companyName: string): string {
  const today = new Date().toISOString().slice(0, 10);
  return [
    `You are a helpful assistant for the company "${companyName}".`,
    "You answer using tools that read from the company's database (Fortnox cache, time entries, emails).",
    `Today's date (UTC) is ${today}. Use this when the user omits the year.`,
    "After calling tools, summarize clearly. If a category is empty, say so.",
    "Activity lookup uses UTC calendar days; mention if the user likely cares about local timezone.",
  ].join(" ");
}

async function resolveCompanyDbName(
  user: JwtPayload,
): Promise<{ dbName: string; companyName: string }> {
  const companyId = (user as { companyId?: string }).companyId;
  if (!companyId) {
    throw Object.assign(
      new Error("Chat requires a company-scoped user session"),
      { statusCode: 403 },
    );
  }
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) {
    throw Object.assign(new Error("Company not found"), { statusCode: 404 });
  }
  return { dbName: company.dbName, companyName: company.name };
}

async function runTool(
  name: string,
  argsJson: string,
  dbName: string,
): Promise<string> {
  let args: { date?: string };
  try {
    args = JSON.parse(argsJson) as { date?: string };
  } catch {
    return JSON.stringify({ error: "Invalid JSON arguments for tool" });
  }

  if (name === "lookup_activity_by_date") {
    const date = args.date;
    if (!date || typeof date !== "string") {
      return JSON.stringify({
        error: 'Missing "date" (expected YYYY-MM-DD)',
      });
    }
    try {
      const payload = await lookupActivityForDate(dbName, date);
      return JSON.stringify(payload);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return JSON.stringify({ error: msg });
    }
  }

  return JSON.stringify({ error: `Unknown tool: ${name}` });
}

router.post("/chat", async (req: Request, res: Response) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.status(500).json({ error: "JWT_SECRET is not configured" });
    return;
  }

  const token = extractToken(req);
  if (!token) {
    res.status(401).json({ error: "Unauthorized: missing token" });
    return;
  }

  let user: JwtPayload;
  try {
    user = jwt.verify(token, secret) as JwtPayload;
  } catch {
    res.status(401).json({ error: "Unauthorized: invalid token" });
    return;
  }

  let dbName: string;
  let companyName: string;
  try {
    ({ dbName, companyName } = await resolveCompanyDbName(user));
  } catch (e) {
    const code = (e as { statusCode?: number }).statusCode ?? 500;
    const message = e instanceof Error ? e.message : "Failed to resolve company";
    res.status(code).json({ error: message });
    return;
  }

  const body = req.body as {
    messages?: Array<{ role: string; content: string }>;
    model?: string;
    debug?: boolean;
  };

  if (
    !body.messages ||
    !Array.isArray(body.messages) ||
    body.messages.length === 0
  ) {
    res.status(400).json({
      error: 'Request body must include a non-empty "messages" array.',
    });
    return;
  }

  const openai = createOpenAIClient();
  const model = body.model ?? "gpt-4o-mini";

  const messages: ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt(companyName) },
    ...body.messages.map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  const toolTrace: Array<{
    name: string;
    arguments: string;
    resultPreview: string;
  }> = [];

  const maxIterations = 8;
  for (let i = 0; i < maxIterations; i++) {
    const completion = await openai.chat.completions.create({
      model,
      messages,
      tools: TOOLS,
      tool_choice: "auto",
    });

    const choice = completion.choices[0];
    if (!choice) {
      res.status(502).json({ error: "Empty response from model" });
      return;
    }

    const msg = choice.message;
    const toolCalls = msg.tool_calls;

    if (!toolCalls?.length) {
      const text = msg.content ?? "";
      const payload: {
        reply: string;
        model: string;
        debug?: { toolTrace: typeof toolTrace };
      } = { reply: text, model };
      if (body.debug) {
        payload.debug = { toolTrace };
      }
      res.json(payload);
      return;
    }

    const assistantMsg: ChatCompletionAssistantMessageParam = {
      role: "assistant",
      content: msg.content,
      tool_calls: toolCalls,
    };
    messages.push(assistantMsg);

    for (const tc of toolCalls) {
      if (tc.type !== "function") {
        continue;
      }
      const fn = tc.function;
      const resultStr = await runTool(fn.name, fn.arguments, dbName);
      if (body.debug) {
        toolTrace.push({
          name: fn.name,
          arguments: fn.arguments,
          resultPreview:
            resultStr.length > 1200
              ? resultStr.slice(0, 1200) + "…"
              : resultStr,
        });
      }
      messages.push({
        role: "tool",
        tool_call_id: tc.id,
        content: resultStr,
      });
    }
  }

  res.status(502).json({
    error: "Too many tool rounds; increase limits or simplify the question.",
  });
});

export default router;
