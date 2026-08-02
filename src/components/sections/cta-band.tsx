import { Sparkles } from "lucide-react";
import { Container, Section, GlowOrb } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

interface CtaAction {
  label: string;
  href: string;
}

export function CtaBand({
  eyebrow = "Let's build something great",
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <div className="border-gradient noise-overlay relative overflow-hidden rounded-[36px] bg-card px-8 py-20 text-center sm:px-16">
            <GlowOrb className="-left-20 -top-20" color="electric" size={360} />
            <GlowOrb className="-right-20 -bottom-20" color="violet" size={360} />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="size-3.5 text-electric" />
                {eyebrow}
              </span>
              <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="mx-auto mt-5 max-w-md text-balance text-muted-foreground">
                  {description}
                </p>
              )}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={primaryAction.href} size="lg" variant="gradient" icon>
                  {primaryAction.label}
                </Button>
                {secondaryAction && (
                  <Button href={secondaryAction.href} size="lg" variant="outline">
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
