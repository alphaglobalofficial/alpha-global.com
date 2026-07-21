"use client";

import * as React from "react";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { Modal } from "@/components/ui/modal";
import { ServiceCard, ServiceDetailContent } from "@/components/cards";
import { SERVICES } from "@/data/site-content";
import type { Service } from "@/data/types";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Development", "Design", "Growth", "Data & Automation"] as const;

function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Our services</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Everything your business needs online." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Fifteen services, one team. Tap any card to see exactly what&apos;s included.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function ServicesClient() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof CATEGORIES)[number]>("All");
  const [selected, setSelected] = React.useState<Service | null>(null);

  const filtered = SERVICES.filter(
    (service) => activeCategory === "All" || service.category === activeCategory
  );

  return (
    <>
      <ServicesHero />
      <Section className="pt-6">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-electric/40 bg-electric/10 text-electric"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => (
              <div key={service.slug} id={service.slug} className="scroll-mt-32">
                <ServiceCard service={service} onClick={() => setSelected(service)} index={i} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} labelledBy="service-modal-title">
        {selected && <ServiceDetailContent service={selected} />}
      </Modal>
    </>
  );
}
