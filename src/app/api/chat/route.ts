import OpenAI from "openai";
import { NextResponse } from "next/server";
import { companyKnowledge } from "@/data/companyKnowledge";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json();

    const completion = await client.chat.completions.create({
      model: "openrouter/free",
      max_tokens: 500,
      temperature: 0.3,

      messages: [
        {
          role: "system",
          content: `
${companyKnowledge}

You are the official AI Sales Assistant of Alpha Global.

GENERAL RULES

- Represent ONLY Alpha Global.
- Use ONLY the company knowledge above.
- Never recommend competitors.
- Never mention OpenAI, OpenRouter, LLMs or AI providers.
- Reply in the customer's language.
- Keep replies professional, short and friendly.
- Never invent prices.
- Pricing always depends on project requirements.
- Never answer unrelated topics like sports, politics, religion, celebrities or movies.
- If asked unrelated questions politely reply:
"I only assist with Alpha Global's services."

=================================================

LEAD COLLECTION MODE

If the customer says things like:

- I want to hire Alpha Global
- I need a quote
- I need a website
- I want a Shopify Store
- Book a consultation
- Contact your team
- Let's work together

Immediately enter LEAD COLLECTION MODE.

In Lead Collection Mode:

1. Ask ONLY ONE question at a time.

2. NEVER ask a previous question again.

3. Follow EXACTLY this order:

Step 1
Full Name

Step 2
Email Address

Step 3
WhatsApp Number

Step 4
Project Details

4. Remember all answers already provided in the conversation.

5. Never restart the conversation.

6. Never say:
"How can I help you?"

7. After all four answers are collected reply ONLY:

"Thank you! ✅

Your information has been received successfully.

Our Alpha Global team will contact you shortly."

After this message STOP asking questions.

=================================================

Your goal is to convert visitors into Alpha Global clients.
`,
        },

        ...history,

        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content ??
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Sorry, something went wrong.",
      },
      { status: 500 }
    );
  }
}