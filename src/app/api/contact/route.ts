import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/constants";

const contactSchema = z.object({
  type: z.enum(["contact", "consultation"]),
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Please add a few more details about your project."),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured yet — log server-side so nothing is lost,
    // and let the UI still show a successful submission.
    console.warn(
      `[contact] RESEND_API_KEY not set — submission not emailed. Payload: ${JSON.stringify(data)}`
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || `Alpha Global <onboarding@resend.dev>`;
    const toEmail = process.env.RESEND_TO_EMAIL || SITE_CONFIG.email;

    const subject =
      data.type === "consultation"
        ? `New consultation request from ${data.name}`
        : `New contact form submission from ${data.name}`;

    const html = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
      ${data.phone ? `<p><strong>Phone / WhatsApp:</strong> ${escapeHtml(data.phone)}</p>` : ""}
      ${data.projectType ? `<p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>` : ""}
      ${data.budget ? `<p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>` : ""}
      ${
        data.preferredDate
          ? `<p><strong>Preferred date/time:</strong> ${escapeHtml(data.preferredDate)} ${escapeHtml(
              data.preferredTime ?? ""
            )}</p>`
          : ""
      }
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `;

    const result = await resend.emails.send({
  from: fromEmail,
  to: toEmail,
  replyTo: data.email,
  subject,
  html,
});

console.log("RESEND RESULT:", result);

return NextResponse.json({
  ok: true,
  delivered: true,
  result,
});
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
