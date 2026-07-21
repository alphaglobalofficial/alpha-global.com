"use client";

import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/constants";

const SECTIONS = [
  {
    title: "Introduction",
    body: `This Privacy Policy explains how ${SITE_CONFIG.name} ("we", "us", "our") collects, uses, and protects information when you visit our website or engage us for services. By using the Site, you agree to the practices described in this policy.`,
  },
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — such as your name, email address, phone or WhatsApp number, company name, and project details — when you fill out a contact or consultation form, or message us through email, WhatsApp, Fiverr, or Upwork. We also collect certain information automatically, including IP address, browser and device type, pages visited, and referral source, through standard server logs and analytics tools.",
  },
  {
    title: "Cookies",
    body: "We use cookies and similar technologies to keep the Site functioning properly, remember your preferences (such as light or dark mode), and understand how visitors use the Site. You can manage your cookie preferences at any time using the cookie banner or your browser settings. Strictly necessary cookies cannot be disabled, as they're required for the Site to function correctly.",
  },
  {
    title: "How We Use Information",
    body: "We use the information we collect to respond to inquiries and provide quotes, deliver contracted services and communicate about ongoing projects, send project updates and invoices, improve the Site's content and performance, and comply with applicable legal obligations. Where we send marketing communications, we only do so with your consent, and you can unsubscribe at any time.",
  },
  {
    title: "Third-Party Services",
    body: "We use third-party tools to operate our business and the Site, including email delivery providers, analytics tools, and payment or invoicing platforms. These providers only receive the information necessary to perform their specific function and are not permitted to use it for any other purpose.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell your personal information. We may share information with service providers who help us operate our business, when required by law, to protect our legal rights, or in connection with a business transfer such as a merger or acquisition.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body: `Depending on where you're located, you may have rights to access, correct, delete, or export the personal information we hold about you, and to object to or restrict certain processing. To exercise any of these rights, contact us at ${SITE_CONFIG.email}. We will respond within a reasonable timeframe.`,
  },
  {
    title: "International Data Transfers",
    body: `${SITE_CONFIG.name} works with clients around the world. As a result, your information may be processed in Pakistan or in the countries where our service providers operate. We take reasonable steps to ensure information is handled securely regardless of where it is processed.`,
  },
  {
    title: "Children's Privacy",
    body: "Our services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "last updated" date. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.',
  },
  {
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy or how your information is handled, contact us at ${SITE_CONFIG.email} or via our Contact page.`,
  },
];

export function PrivacyClient() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-40 md:pt-48">
        <GlowOrb className="-left-40 top-0 -z-10" size={420} />
        <Container className="max-w-3xl">
          <Reveal immediate>
            <Eyebrow>Legal</Eyebrow>
          </Reveal>
          <h1 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitReveal text="Privacy Policy" />
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: July 1, 2026</p>
          </Reveal>
        </Container>
      </section>

      <Section className="pt-6">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10">
            {SECTIONS.map((section) => (
              <Reveal key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
