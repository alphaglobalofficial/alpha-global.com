"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fades + slides children up into view once, when scrolled into the viewport. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  immediate = false,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  immediate?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const MotionTag = motion[Tag as "div"];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggers a group of children as they enter the viewport (or immediately). */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  immediate?: boolean;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView={immediate ? undefined : "show"}
      animate={immediate ? "show" : undefined}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/**
 * Splits a headline into words and reveals them with a staggered
 * fade + upward slide + slight blur resolve, in the brand's signature style.
 */
export function SplitReveal({
  text,
  className,
  delay = 0,
  wordDelay = 0.055,
  immediate = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  immediate?: boolean;
}) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-1 align-top"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
            whileInView={immediate ? undefined : { y: "0%", opacity: 1, filter: "blur(0px)" }}
            animate={immediate ? { y: "0%", opacity: 1, filter: "blur(0px)" } : undefined}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * wordDelay,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
