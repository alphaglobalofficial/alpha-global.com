"use client";

import * as React from "react";
import { Globe2, HeartHandshake, Rocket, Clock3 } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb, Badge, IconBadge } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CAREER_ROLES } from "@/data/site-content";
import { SITE_CONFIG } from "@/lib/constants";

const PERKS = [
  { icon: Globe2, title: "Remote-first", description: "Work from anywhere — we hire on ability, not location." },
  { icon: Clock3, title: "Flexible hours", description: "Async by default, with a few overlap hours for real-time collaboration." },
  { icon: Rocket, title: "Real ownership", description: "Small team, direct client contact, and visible impact on every project." },
  { icon: HeartHandshake, title: "Fair, transparent pay", description: "Clear rates agreed upfront — no surprises, no unpaid trial projects." },
];

function CareersHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Careers</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Do the best work of your career." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            We&apos;re a small, senior, remote-friendly team working with clients around the world.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function PerksSection() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk) => (
            <RevealItem
              key={perk.title}
              className="rounded-3xl border border-border bg-card/40 p-7"
            >
              <IconBadge icon={<perk.icon className="size-5" strokeWidth={1.75} />} />
              <h3 className="mt-5 text-base font-semibold">{perk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {perk.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

function OpenRoles() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Open positions" title="Current openings." className="mb-16" />
        <Accordion>
          {CAREER_ROLES.map((role, i) => (
            <AccordionItem key={role.id} id={role.id} question={role.title} index={i}>
              <div className="flex flex-wrap gap-2">
                <Badge>{role.department}</Badge>
                <Badge>{role.type}</Badge>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed">{role.description}</p>

              <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Responsibilities
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                What we&apos;re looking for
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {role.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}`}
                variant="gradient"
                size="sm"
                className="mt-6"
                external
              >
                Apply for this role
              </Button>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don&apos;t see the right role?{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("General application")}`}
            className="text-electric underline underline-offset-2"
          >
            Send us your portfolio anyway
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}

export function CareersClient() {
  return (
    <>
      <CareersHero />
      <PerksSection />
      <OpenRoles />
    </>
  );
}
