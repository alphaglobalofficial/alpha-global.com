"use client";

import * as React from "react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { PricingCard, ComparisonCell } from "@/components/cards";
import { PRICING_TIERS, COMPARISON_ROWS } from "@/data/site-content";

function PricingHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Pricing</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Straightforward pricing, no surprises." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Starting prices below — final quotes depend on scope. Book a free consultation for an
            exact number within 24 hours.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function PricingClient() {
  return (
    <>
      <PricingHero />
      <Section className="pt-6">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/20">
        <Container>
          <SectionHeading
            eyebrow="Compare plans"
            title="Every feature, side by side."
            className="mb-16"
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-1/3 pb-4 text-left text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  {PRICING_TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      className="w-1/5 pb-4 text-center text-sm font-semibold"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card/40" : ""}>
                    <td className="rounded-l-xl py-4 pl-4 text-sm text-foreground/90">
                      {row.feature}
                    </td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td className="py-4 text-center">
                      <ComparisonCell value={row.professional} />
                    </td>
                    <td className="rounded-r-xl py-4 pr-4 text-center">
                      <ComparisonCell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need something that doesn&apos;t fit neatly into a tier? Every plan can be customized —{" "}
            <a href="/consultation" className="text-electric underline underline-offset-2">
              let&apos;s talk about your project
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
