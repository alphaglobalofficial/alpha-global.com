"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Star, X, Sparkles, } from "lucide-react";
import type { Service } from "@/data/types";
import type { PortfolioProject } from "@/data/portfolio";
import type { Testimonial } from "@/data/testimonials";
import type { PricingTier } from "@/data/types";
import { IconBadge, Badge, Divider } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";
import { cn, formatUSD } from "@/lib/utils";

export function GradientMockFrame({
  accentFrom,
  accentTo,
  label,
  className,
}: {
  accentFrom: string;
  accentTo: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${accentFrom}22, ${accentTo}22)`,
      }}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-black/10 px-3.5">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/25" />
      </div>
      <div className="relative flex h-[calc(100%-2rem)] flex-col gap-2.5 p-4">
        <div
          className="h-3 w-2/3 rounded-full opacity-80"
          style={{ background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})` }}
        />
        <div className="h-2 w-1/2 rounded-full bg-white/15" />
        <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
          <div
            className="col-span-2 rounded-xl opacity-70"
            style={{ background: `linear-gradient(160deg, ${accentFrom}55, transparent)` }}
          />
          <div className="flex flex-col gap-2">
            <div className="flex-1 rounded-xl bg-white/10" />
            <div className="flex-1 rounded-xl bg-white/10" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full" style={{ background: `${accentFrom}80` }} />
          <div className="h-6 w-16 rounded-full bg-white/10" />
        </div>
      </div>
      {label && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-3xl font-semibold text-white/0 transition-all duration-500"
        >
          {label}
        </div>
      )}
    </div>
  );
}

export function ServiceCard({
  service,
  onClick,
  index = 0,
}: {
  service: Service;
  onClick: () => void;
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-start gap-5 rounded-3xl border border-border bg-card/40 p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-electric/30 hover:bg-card hover:shadow-glow-sm"
    >
      <div className="flex w-full items-start justify-between">
        <IconBadge icon={<Icon className="size-5" strokeWidth={1.75} />} />
        <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
      </div>
      <Badge className="mt-auto">{service.category}</Badge>
    </motion.button>
  );
}

export function ServiceDetailContent({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div>
      <IconBadge icon={<Icon className="size-6" strokeWidth={1.75} />} className="size-14" />
      <h3 id="service-modal-title" className="mt-5 text-2xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="mt-3 text-muted-foreground">{service.longDescription}</p>
      <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        What&apos;s included
      </h4>
      <ul className="mt-4 flex flex-col gap-3">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-electric" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button href="/consultation" variant="gradient" className="mt-8 w-full sm:w-auto" icon>
        Discuss this service
      </Button>
    </div>
  );
}

export function ProjectCard({
  project,
  onClick,
  index = 0,
}: {
  project: PortfolioProject;
  onClick: () => void;
  index?: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4 rounded-3xl p-3 text-left"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="transition-transform duration-700 ease-premium group-hover:scale-[1.04]">
          <Image
         src={project.image}
         alt={project.title}
         width={1200}
         height={800}
         className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
         priority={index < 3}
/>
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 text-sm font-medium text-white">
            View Case Study
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <Badge className="absolute left-4 top-4 border-white/20 bg-black/40 text-white backdrop-blur-md">
          {project.category}
        </Badge>
      </div>
      <div className="px-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {project.client}
        </p>
        <h3 className="mt-1.5 text-lg font-medium leading-snug tracking-tight">{project.title}</h3>
      </div>
    </motion.button>
  );
}

export function ProjectDetailContent({ project }: { project: PortfolioProject }) {
  return (
    <div>
      <Image
       src={project.image}
       alt={project.title}
       width={1600}
       height={1000}
       className="h-full w-full object-cover"
/>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {project.client} · {project.year}
          </p>
          <h3 id="project-modal-title" className="mt-1.5 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        <Badge>{project.category}</Badge>
      </div>

      <div className="mt-7 grid gap-6 sm:grid-cols-3">
        {project.results.map((result) => (
          <div key={result.label} className="rounded-2xl border border-border bg-muted/30 p-4">
            <p className="text-2xl font-semibold text-gradient">{result.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{result.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            The challenge
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            The solution
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <Button href="/consultation" variant="gradient" className="mt-8 w-full sm:w-auto" icon>
        Start a similar project
      </Button>
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass flex h-full w-full flex-col justify-between rounded-3xl p-7">
      <div>
        <div className="flex gap-0.5 text-electric">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-electric text-sm font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PricingCard({
  tier,
  index = 0,
}: {
  tier: PricingTier;
  index?: number;
}) {
  const Icon = tier.icon ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{
        opacity: 1,
        y: tier.featured ? -14 : 0,
        scale: tier.featured ? 1.03 : 1,
      }}
      whileHover={{
        y: tier.featured ? -20 : -6,
        scale: tier.featured ? 1.04 : 1.015,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col rounded-[28px] p-8 transition-shadow duration-500 sm:p-9",
        tier.featured
          ? "border-gradient bg-card shadow-glow-lg"
          : "glass hover:shadow-glow-sm"
      )}
    >
      {tier.featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-10 rounded-[28px] bg-gradient-electric opacity-[0.07] blur-2xl"
        />
      )}
      {tier.featured && (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-electric px-4 py-1 text-xs font-semibold text-white shadow-glow-sm"
        >
          Most Popular
        </motion.span>
      )}

      <div className="flex items-start justify-between">
        <IconBadge icon={<Icon className="size-5" strokeWidth={1.75} />} />
        <Badge className="border-electric/20 bg-electric/5 text-electric">
          {tier.supportLabel}
        </Badge>
      </div>

      <h3 className="mt-6 text-lg font-semibold">{tier.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>
      <div className="mt-6 flex items-baseline gap-2">
        {tier.price > 0 ? (
          <span className="text-4xl font-semibold tracking-tight sm:text-[2.75rem]">
            {formatUSD(tier.price)}
          </span>
        ) : (
          <span className="text-4xl font-semibold tracking-tight sm:text-[2.75rem]">Custom</span>
        )}
        <span className="text-sm text-muted-foreground">{tier.priceSuffix}</span>
      </div>
      <Button
        href="/consultation"
        variant={tier.featured ? "gradient" : "outline"}
        className="mt-7 w-full"
        icon={tier.featured}
      >
        {tier.cta}
      </Button>
      <Divider className="mt-8" />
      <ul className="mt-8 flex flex-col gap-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
            <Check className="mt-0.5 size-4 shrink-0 text-electric" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-[18px] text-electric" />
    ) : (
      <X className="mx-auto size-[18px] text-muted-foreground/40" />
    );
  }
  return <span className="text-sm text-foreground/90">{value}</span>;
}
