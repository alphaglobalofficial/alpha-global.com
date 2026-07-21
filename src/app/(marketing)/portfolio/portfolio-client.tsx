"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { Modal } from "@/components/ui/modal";
import { ProjectCard, ProjectDetailContent } from "@/components/cards";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, type PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Selected work</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Work that speaks for itself." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            A sample of projects across e-commerce, SaaS, branding, and automation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");
  const [selected, setSelected] = React.useState<PortfolioProject | null>(null);

  const filtered = PORTFOLIO_PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <>
      <PortfolioHero />
      <Section className="pt-6">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((category) => (
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

          <motion.div layout className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onClick={() => setSelected(project)}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              No projects in this category yet — check back soon.
            </p>
          )}
        </Container>
      </Section>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} labelledBy="project-modal-title">
        {selected && <ProjectDetailContent project={selected} />}
      </Modal>
    </>
  );
}
