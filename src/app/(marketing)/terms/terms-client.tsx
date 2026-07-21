"use client";

import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/constants";

const SECTIONS = [
  {
    title: "Agreement to Terms",
    body: `By engaging ${SITE_CONFIG.name} ("we", "us", "our") for services, or by using this website, you agree to these Terms & Conditions. If you do not agree, please do not use our services or this website.`,
  },
  {
    title: "Services",
    body: "We provide web development, e-commerce, design, SEO, social media management, AI automation, and data/analytics services as described on this Site or agreed in a specific project proposal. The exact scope, timeline, and deliverables for each project are defined in a written proposal, invoice, or agreement before work begins.",
  },
  {
    title: "Quotes, Payments & Invoicing",
    body: "Quotes provided during a consultation are estimates based on the information available at the time and may change if project scope changes. Most projects require an upfront deposit (typically 50%) before work begins, with the remaining balance due at agreed milestones or upon completion. Payments made through Fiverr or Upwork are subject to those platforms' own terms and fee structures.",
  },
  {
    title: "Project Timelines & Revisions",
    body: "Estimated timelines are provided in good faith but depend on timely feedback, content, and approvals from the client. Each package includes a defined number of revision rounds; additional revisions beyond what's included may be billed separately at our standard rate.",
  },
  {
    title: "Intellectual Property",
    body: "Upon full payment, clients receive ownership of the final deliverables created specifically for their project (such as custom code, designs, and content), unless otherwise agreed in writing. We retain the right to display completed work in our portfolio unless the client requests otherwise in writing. Any third-party assets, licensed fonts, stock imagery, plugins, or platforms used remain subject to their own respective licenses.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for providing timely feedback, necessary content (text, images, brand assets), and access to any required accounts or platforms. Delays in providing these may extend project timelines accordingly.",
  },
  {
    title: "Confidentiality",
    body: "We treat all client information, business details, and project materials as confidential, and are happy to sign a mutual non-disclosure agreement (NDA) before discussing sensitive details.",
  },
  {
    title: "Limitation of Liability",
    body: "We perform services with reasonable skill and care. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from the use of our services or deliverables, including but not limited to lost profits or data, except where such liability cannot be excluded by law.",
  },
  {
    title: "Termination",
    body: "Either party may terminate an ongoing project with written notice. In the event of termination, the client is responsible for payment for all work completed up to the termination date.",
  },
  {
    title: "Third-Party Platforms",
    body: "Some clients engage us through Fiverr, Upwork, or similar platforms. Where a project is booked through such a platform, that platform's terms of service, payment protection policies, and dispute resolution processes apply in addition to these Terms.",
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of Pakistan, without regard to conflict of law principles, unless otherwise agreed in a specific written contract with a client.",
  },
  {
    title: "Changes to These Terms",
    body: 'We may update these Terms from time to time. The updated version will be posted on this page with a revised "last updated" date.',
  },
  {
    title: "Contact Us",
    body: `Questions about these Terms? Contact us at ${SITE_CONFIG.email}.`,
  },
];

export function TermsClient() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-40 md:pt-48">
        <GlowOrb className="-left-40 top-0 -z-10" size={420} />
        <Container className="max-w-3xl">
          <Reveal immediate>
            <Eyebrow>Legal</Eyebrow>
          </Reveal>
          <h1 className="mt-8 text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitReveal text="Terms & Conditions" />
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
