"use client";

import * as React from "react";
import { CalendarCheck, MessageSquareText, Rocket } from "lucide-react";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const EXPECTATIONS = [
  {
    icon: CalendarCheck,
    title: "Pick a slot",
    description: "Choose a date and time that works for you — we'll confirm by email within 24 hours.",
  },
  {
    icon: MessageSquareText,
    title: "30-minute call",
    description: "We'll ask about your goals, timeline, and budget, and answer any questions honestly.",
  },
  {
    icon: Rocket,
    title: "Clear next steps",
    description: "You'll leave with a scoped recommendation and a quote — no pressure to commit on the call.",
  },
];

function ConsultationHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Free consultation</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Let's map out your project." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            30 minutes, no pressure. We&apos;ll leave you with a clear plan either way.
          </p>
        </Reveal>
        <Reveal delay={0.6} className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono font-semibold text-foreground">
            <AnimatedCounter value={24} suffix="hr" />
          </span>
          average response time to confirm your slot
        </Reveal>
      </Container>
    </section>
  );
}

export function ConsultationClient() {
  return (
    <>
      <ConsultationHero />
      <Section className="pt-6">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <RevealGroup className="flex flex-col gap-6">
                {EXPECTATIONS.map((item, i) => (
                  <RevealItem key={item.title} className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-electric">
                      <item.icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        Step {i + 1}
                      </p>
                      <h3 className="mt-1 font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.3} className="mt-10 rounded-3xl border border-border bg-muted/20 p-6">
                <p className="text-sm text-muted-foreground">
                  Prefer WhatsApp or email? Use the floating buttons on this page, or visit our{" "}
                  <a href="/contact" className="text-electric underline underline-offset-2">
                    Contact page
                  </a>
                  .
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="glass-strong rounded-[32px] p-8 sm:p-10">
                <ContactForm variant="consultation" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
