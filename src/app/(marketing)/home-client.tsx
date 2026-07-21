"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb, Divider } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Marquee } from "@/components/ui/marquee";
import { Modal } from "@/components/ui/modal";
import {
  ServiceCard,
  ServiceDetailContent,
  ProjectCard,
  ProjectDetailContent,
  TestimonialCard,
} from "@/components/cards";
import { SERVICES, PROCESS_STEPS, HOME_STATS, CLIENT_LOGOS } from "@/data/site-content";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import { useReducedMotion } from "@/hooks/use-viewport";
import { HeroScene } from "@/components/three/hero-scene";
import type { Service } from "@/data/types";
import type { PortfolioProject } from "@/data/portfolio";

const FEATURED_SERVICE_SLUGS = [
  "web-development",
  "shopify-development",
  "ui-ux-design",
  "ai-automation",
  "seo-optimization",
  "brand-identity",
];

const FEATURED_PROJECT_SLUGS = ["lumen-goods", "fintra-capital", "orbital-fitness", "zenith-labs"];

function HeroSection() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        {mounted && <HeroScene reducedMotion={reducedMotion} />}
      </div>
      <GlowOrb className="-left-32 top-10 -z-10" color="electric" size={520} />
      <GlowOrb className="-right-32 bottom-0 -z-10" color="violet" size={560} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] opacity-[0.04]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>Digital agency for ambitious brands</Eyebrow>
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <SplitReveal text="Building Digital Experiences That" delay={0.15} />
          <br />
          <span className="text-gradient">
            <SplitReveal text="Grow Businesses." delay={0.65} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Alpha Global designs, builds, and scales premium websites, e-commerce stores, and AI-driven
          automation for startups, SMBs, and enterprise teams — wherever they are in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/consultation" size="lg" variant="gradient" icon>
            Start Your Project
          </Button>
          <Button href="/portfolio" size="lg" variant="glass">
            View Our Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {HOME_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="mt-1.5 text-center text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground"
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function LogosSection() {
  return (
    <section className="border-y border-border py-12">
      <Container>
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Trusted by teams building the next big thing
        </p>
      </Container>
      <Marquee>
        {CLIENT_LOGOS.map((logo) => (
          <span
            key={logo}
            className="shrink-0 font-mono text-xl font-semibold tracking-tight text-muted-foreground/50 transition-colors hover:text-foreground/70 sm:text-2xl"
          >
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function ServicesPreview({ onSelect }: { onSelect: (service: Service) => void }) {
  const featured = SERVICES.filter((s) => FEATURED_SERVICE_SLUGS.includes(s.slug));

  return (
    <Section id="services-preview">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Full-service, end to end."
          description="From first pixel to production, and everything your business needs to run on top of it."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} onClick={() => onSelect(service)} index={i} />
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/services" variant="outline" icon>
            View All Services
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

function ProcessPreview() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for clarity, not chaos."
          description="Seven stages, one point of contact, zero surprises."
        />
        <RevealGroup className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <RevealItem key={step.step} className="relative flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-electric">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-4 text-sm font-semibold">{step.title}</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{step.duration}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Button href="/process" variant="outline" icon>
            See Our Full Process
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

function PortfolioPreview({ onSelect }: { onSelect: (project: PortfolioProject) => void }) {
  const featured = PORTFOLIO_PROJECTS.filter((p) => FEATURED_PROJECT_SLUGS.includes(p.slug));

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects, real results."
          description="A sample of what we've shipped for clients across e-commerce, SaaS, and brand-first businesses."
        />
        <div className="mt-16 grid gap-3 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} onClick={() => onSelect(project)} index={i} />
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/portfolio" variant="outline" icon>
            View Full Portfolio
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

function TestimonialsAndCta() {
  return (
    <>
      <Section className="overflow-hidden bg-muted/20">
        <Container className="mb-14">
          <SectionHeading
            eyebrow="Client feedback"
            title="Don't just take our word for it."
            description="A few notes from people who trusted us with their business."
          />
        </Container>
        <Marquee className="py-2">
          {[...TESTIMONIALS.slice(0, 4)].map((t) => (
            <div key={t.id} className="w-[340px] shrink-0 sm:w-[380px]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </Marquee>
        <Marquee reverse className="mt-6 py-2">
          {[...TESTIMONIALS.slice(4, 8)].map((t) => (
            <div key={t.id} className="w-[340px] shrink-0 sm:w-[380px]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </Marquee>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="border-gradient noise-overlay relative overflow-hidden rounded-[36px] bg-card px-8 py-20 text-center sm:px-16">
              <GlowOrb className="-left-20 -top-20" color="electric" size={360} />
              <GlowOrb className="-right-20 -bottom-20" color="violet" size={360} />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles className="size-3.5 text-electric" />
                  Let&apos;s build something great
                </span>
                <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
                  Ready to grow your business online?
                </h2>
                <p className="mx-auto mt-5 max-w-md text-balance text-muted-foreground">
                  Book a free, no-pressure consultation. We&apos;ll review your goals and tell you exactly
                  what it&apos;ll take.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="/consultation" size="lg" variant="gradient" icon>
                    Book a Free Consultation
                  </Button>
                  <Button href="/pricing" size="lg" variant="outline">
                    See Pricing
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export function HomeClient() {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<PortfolioProject | null>(null);

  return (
    <>
      <HeroSection />
      <LogosSection />
      <Divider />
      <ServicesPreview onSelect={setSelectedService} />
      <ProcessPreview />
      <PortfolioPreview onSelect={setSelectedProject} />
      <TestimonialsAndCta />

      <Modal
        open={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        labelledBy="service-modal-title"
      >
        {selectedService && <ServiceDetailContent service={selectedService} />}
      </Modal>

      <Modal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        labelledBy="project-modal-title"
      >
        {selectedProject && <ProjectDetailContent project={selectedProject} />}
      </Modal>
    </>
  );
}
