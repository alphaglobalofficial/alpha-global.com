"use client";

import * as React from "react";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/data/site-content";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "General", "Pricing", "Process", "Support"] as const;

function FaqHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>FAQ</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Questions, answered." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Just ask us directly.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function FaqClient() {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("All");

  const filtered = FAQ_ITEMS.filter((item) => category === "All" || item.category === category);

  return (
    <>
      <FaqHero />
      <Section className="pt-6">
        <Container className="max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === cat
                    ? "border-electric/40 bg-electric/10 text-electric"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <Reveal className="mt-14">
            <Accordion>
              {filtered.map((item, i) => (
                <AccordionItem key={item.id} id={item.id} question={item.question} index={i}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.1} className="mt-16 flex flex-col items-center gap-5 rounded-[28px] border border-border bg-muted/20 p-10 text-center">
            <h2 className="text-xl font-medium tracking-tight">Still have questions?</h2>
            <p className="max-w-sm text-muted-foreground">
              Book a free consultation and we&apos;ll answer everything specific to your project.
            </p>
            <Button href="/contact" variant="gradient" icon>
              Contact Us
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
