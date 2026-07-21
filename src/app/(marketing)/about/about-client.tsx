"use client";

import * as React from "react";
import { MessageSquare, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb, IconBadge } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TEAM_MEMBERS } from "@/data/site-content";
import { HOME_STATS } from "@/data/site-content";

const VALUES = [
  {
    title: "Ownership over excuses",
    description: "We treat every project like our own reputation is riding on it — because it is.",
    icon: ShieldCheck,
  },
  {
    title: "Clarity over jargon",
    description: "You'll always know what's happening, why, and what's next — no buzzwords standing in for progress.",
    icon: MessageSquare,
  },
  {
    title: "Speed without shortcuts",
    description: "We move fast, but never at the cost of the details that make work actually hold up.",
    icon: Zap,
  },
  {
    title: "Built to be measured",
    description: "If we can't tie it back to a business outcome, we don't ship it just to look busy.",
    icon: TrendingUp,
  },
];

function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-40 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>About Alpha Global</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="We build like it's our own business on the line." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            What started as freelance web and e-commerce work grew into a full-service studio —
            without losing the directness that got us here.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function StorySection() {
  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="glass rounded-[32px] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              By the numbers
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {HOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-3xl font-semibold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>How we got here</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              From one freelance project to a full-service studio.
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
            <Reveal delay={0.15}>
              <p>
                Alpha Global began the way most honest agencies do: one client, one project,
                delivered properly. What started with freelance web and e-commerce work on
                platforms like Fiverr and Upwork grew — through repeat clients and referrals —
                into a full-service studio covering design, development, growth, and automation.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                What hasn&apos;t changed is how we work. No account managers relaying messages between
                you and the people actually doing the work, and no bloated proposals padded with
                services you don&apos;t need — just a small, senior team that takes ownership of
                outcomes, not just deliverables.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p>
                Today we work with founders, e-commerce brands, and growing companies across the
                US, UK, Europe, and the Middle East — building the kind of digital presence that
                makes a small business look, and perform, like a much bigger one.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ValuesSection() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <SectionHeading
          eyebrow="What we stand for"
          title="Principles we don't compromise on."
        />
        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <RevealItem
              key={value.title}
              className="rounded-3xl border border-border bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric/30"
            >
              <IconBadge icon={<value.icon className="size-5" strokeWidth={1.75} />} />
              <h3 className="mt-5 text-base font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

function TeamSection() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="The people" title="A small team, deliberately." />
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <RevealItem
              key={member.name}
              className="group rounded-3xl border border-border bg-card/40 p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-electric/30"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-electric text-lg font-semibold text-white transition-transform duration-500 group-hover:scale-105">
                {member.initials}
              </div>
              <h3 className="mt-5 text-base font-semibold">{member.name}</h3>
              <p className="mt-1 text-xs text-electric">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

function AboutCta() {
  return (
    <Section className="pt-0">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[32px] border border-border bg-muted/20 px-8 py-16 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                We&apos;re growing. Want to be part of it?
              </h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                We&apos;re always open to hearing from strong designers, developers, and marketers.
              </p>
            </div>
            <Button href="/careers" variant="gradient" size="lg" icon>
              View Open Roles
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function AboutClient() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <AboutCta />
    </>
  );
}
