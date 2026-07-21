"use client";

import * as React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Section, Eyebrow, GlowOrb } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/data/site-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProcessHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>How we work</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Seven stages. Zero surprises." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Every project — from a 5-page site to a full platform rebuild — runs through the same
            disciplined process.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function ScrollTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      <div className="absolute left-6 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2">
        <div
          ref={fillRef}
          className="h-full w-full origin-top bg-gradient-electric"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div className="flex flex-col gap-16 sm:gap-24">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = step.icon;
          const alignRight = index % 2 === 1;
          return (
            <div
              key={step.step}
              className={`relative flex items-start gap-6 sm:gap-10 ${
                alignRight ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-electric/30 bg-background text-electric shadow-glow-sm sm:absolute sm:left-1/2 sm:-translate-x-1/2"
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full rounded-3xl border border-border bg-card/40 p-7 sm:w-[45%] ${
                  alignRight ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div
                  className={`flex items-center gap-3 ${alignRight ? "sm:flex-row-reverse" : ""}`}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-electric">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <ul
                  className={`mt-4 flex flex-col gap-2 text-sm text-muted-foreground/90 ${
                    alignRight ? "sm:items-end" : ""
                  }`}
                >
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <span className="size-1 shrink-0 rounded-full bg-electric" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProcessClient() {
  return (
    <>
      <ProcessHero />
      <Section>
        <Container>
          <ScrollTimeline />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 rounded-[32px] border border-border bg-muted/20 px-8 py-16 text-center">
            <h2 className="max-w-lg text-2xl font-medium tracking-tight md:text-3xl">
              Ready to start with Discovery?
            </h2>
            <Button href="/consultation" variant="gradient" size="lg" icon>
              Book a Free Consultation
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
