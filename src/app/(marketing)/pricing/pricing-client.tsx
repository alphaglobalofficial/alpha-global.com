"use client";

import * as React from "react";
import { Globe2, ShieldCheck, Wallet } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb, Badge } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { PricingCard, ComparisonCell } from "@/components/cards";
import { CtaBand } from "@/components/sections/cta-band";
import { PRICING_TIERS, COMPARISON_ROWS } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TRUST_POINTS = [
  { icon: Wallet, label: "Fixed starting prices" },
  { icon: ShieldCheck, label: "No hidden fees" },
  { icon: Globe2, label: "Serving clients worldwide" },
];

const PRICING_FAQ = [
  {
    id: "project-duration",
    question: "How long does a project take?",
    answer:
      "A Starter site typically takes 2–3 weeks. Professional builds run 4–6 weeks depending on scope, and Enterprise timelines are scoped individually based on your requirements after a discovery call.",
  },
  {
    id: "redesign-existing",
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can redesign an existing site, migrate your content, and rebuild it on faster, modern infrastructure — often reusing your existing brand assets to keep costs down.",
  },
  {
    id: "offer-support",
    question: "Do you offer support?",
    answer:
      "Every plan includes a post-launch support window — 30 days on Starter, 90 days on Professional, and dedicated ongoing support on Enterprise. Extended maintenance plans are available after that.",
  },
  {
    id: "upgrade-later",
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Most clients start with Starter or Professional and upgrade as they grow — we'll factor in what you've already invested toward the new scope.",
  },
  {
    id: "work-internationally",
    question: "Do you work internationally?",
    answer:
      "Yes — the majority of our clients are international. We work comfortably across US, UK, European, and Middle Eastern time zones and communicate in English throughout.",
  },
];

function PricingHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] opacity-[0.03]"
      />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Pricing</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Simple pricing for ambitious businesses." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Transparent packages that scale with you — from a first website to a fully custom
            platform. No vague quotes, no surprises at checkout.
          </p>
        </Reveal>

        <Reveal delay={0.62} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/consultation" size="lg" variant="gradient" icon>
            Book a Free Consultation
          </Button>
          <Button href="/portfolio" size="lg" variant="glass">
            View Portfolio
          </Button>
        </Reveal>

        <Reveal delay={0.74} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TRUST_POINTS.map((point) => (
            <div key={point.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <point.icon className="size-4 text-electric" strokeWidth={1.75} />
              {point.label}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function PricingCards() {
  return (
    <Section className="pt-6">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ComparisonTable() {
  return (
    <Section id="compare" className="scroll-mt-28 bg-muted/20">
      <Container>
        <SectionHeading
          eyebrow="Compare plans"
          title="Every feature, side by side."
          className="mb-16"
        />
        <Reveal>
          <div className="overflow-x-auto rounded-3xl border border-border bg-card/30 p-2 sm:p-4">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-1/3 px-4 pb-5 pt-2 text-left text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  {PRICING_TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      className={cn(
                        "w-1/5 rounded-t-2xl px-2 pb-5 pt-2 text-center text-sm font-semibold",
                        tier.featured && "bg-electric/[0.06] text-electric"
                      )}
                    >
                      <span className="inline-flex flex-col items-center gap-1.5">
                        {tier.name}
                        {tier.featured && (
                          <Badge className="border-electric/20 bg-electric/10 text-[10px] text-electric">
                            Most Popular
                          </Badge>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature}>
                    <td
                      className={cn(
                        "px-4 py-4 text-sm text-foreground/90",
                        i % 2 === 0 && "bg-card/60"
                      )}
                    >
                      {row.feature}
                    </td>
                    <td className={cn("py-4 text-center", i % 2 === 0 && "bg-card/60")}>
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td
                      className={cn(
                        "bg-electric/[0.06] py-4 text-center",
                        i === COMPARISON_ROWS.length - 1 && "rounded-b-2xl"
                      )}
                    >
                      <ComparisonCell value={row.professional} />
                    </td>
                    <td className={cn("py-4 text-center", i % 2 === 0 && "bg-card/60")}>
                      <ComparisonCell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need something that doesn&apos;t fit neatly into a tier? Every plan can be customized —{" "}
          <a href="/consultation" className="text-electric underline underline-offset-2">
            let&apos;s talk about your project
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}

function PricingFaq() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Common questions"
          title="Pricing, answered."
          className="mb-16"
        />
        <Reveal>
          <Accordion>
            {PRICING_FAQ.map((item, i) => (
              <AccordionItem key={item.id} id={item.id} question={item.question} index={i}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}

export function PricingClient() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <PricingFaq />
      <CtaBand
        title="Ready to build something exceptional?"
        description="Book a free, no-pressure consultation and we'll help you pick the right plan for your goals and budget."
        primaryAction={{ label: "Book a Free Consultation", href: "/consultation" }}
        secondaryAction={{ label: "See Our Work", href: "/portfolio" }}
        className="pt-0"
      />
    </>
  );
}
