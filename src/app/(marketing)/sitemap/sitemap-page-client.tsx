"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/site-content";

const GROUPS = [
  { title: "Main navigation", links: NAV_LINKS },
  { title: "Company", links: FOOTER_LINKS.company },
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.title, href: `/services#${s.slug}` })),
  },
  { title: "Resources", links: FOOTER_LINKS.resources },
  { title: "Legal", links: FOOTER_LINKS.legal },
];

export function SitemapPageClient() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
        <GlowOrb className="-left-40 top-0 -z-10" size={480} />
        <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
        <Container className="text-center">
          <Reveal immediate>
            <Eyebrow>Sitemap</Eyebrow>
          </Reveal>
          <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <SplitReveal text="Every page, in one place." />
          </h1>
        </Container>
      </section>

      <Section className="pt-6">
        <Container>
          <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map((group) => (
              <RevealItem key={group.title}>
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {group.title}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-[15px] text-foreground/85 transition-colors hover:text-electric"
                      >
                        <ArrowRight className="size-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
