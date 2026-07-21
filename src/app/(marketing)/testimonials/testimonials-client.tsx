"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container, Section, Eyebrow, SectionHeading, GlowOrb } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/cards";
import { TESTIMONIALS } from "@/data/testimonials";

function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Client feedback</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Don't just take our word for it." />
        </h1>
      </Container>
    </section>
  );
}

function FeaturedCarousel() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [direction, setDirection] = React.useState(1);

  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto max-w-3xl"
    >
      <div className="glass-strong relative min-h-[320px] overflow-hidden rounded-[32px] p-8 sm:p-14">
        <Quote className="size-10 text-electric/30" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mt-4 flex gap-0.5 text-electric">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex size-14 items-center justify-center rounded-full bg-gradient-electric text-base font-semibold text-white shadow-glow-sm"
              >
                {current.initials}
              </motion.div>
              <div>
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-muted-foreground">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric/40 hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial from ${t.name}`}
              className="p-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-electric" : "w-1.5 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric/40 hover:text-foreground"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsClient() {
  return (
    <>
      <TestimonialsHero />
      <Section className="pt-6">
        <Container>
          <FeaturedCarousel />
        </Container>
      </Section>

      <Section className="bg-muted/20">
        <Container>
          <SectionHeading eyebrow="All reviews" title="More from our clients." className="mb-16" />
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <RevealItem key={testimonial.id} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
