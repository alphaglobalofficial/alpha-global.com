import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("container-px mx-auto w-full max-w-[1400px]", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
        className
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-electric" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-xl text-balance text-base text-muted-foreground md:text-lg",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-8 transition-all duration-500",
        hover && "hover:border-electric/30 hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlowOrb({
  className,
  color = "electric",
  size = 480,
}: {
  className?: string;
  color?: "electric" | "violet";
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[110px] animate-pulse-glow",
        color === "electric" ? "bg-electric/25" : "bg-violet/25",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
    />
  );
}

export function IconBadge({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-electric/10 to-violet/10 text-electric transition-all duration-500 group-hover:border-electric/40 group-hover:shadow-glow-sm",
        className
      )}
    >
      {icon}
    </div>
  );
}
