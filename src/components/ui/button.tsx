"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:bg-foreground/90 shadow-card",
        gradient:
          "bg-gradient-electric text-white shadow-glow hover:shadow-glow-lg bg-[length:200%_200%]",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        glass: "glass text-foreground hover:bg-muted/40",
      },
      size: {
        sm: "h-10 px-5 text-[13px]",
        md: "h-12 px-7",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  magnetic?: boolean;
  icon?: boolean;
  external?: boolean;
}

/** Wraps children in a magnetic-hover offset effect (desktop pointer only). */
function Magnetic({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      magnetic = true,
      icon = false,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <span className={cn(buttonVariants({ variant, size }), className)}>
        {children}
        {icon && (
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        )}
      </span>
    );

    const inner = href ? (
      external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {content}
        </a>
      ) : (
        <Link href={href} className="group">
          {content}
        </Link>
      )
    ) : (
      <button ref={ref} className="group" {...props}>
        {content}
      </button>
    );

    if (!magnetic) return inner;
    return <Magnetic>{inner}</Magnetic>;
  }
);
Button.displayName = "Button";
