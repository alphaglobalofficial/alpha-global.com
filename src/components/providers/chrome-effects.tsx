"use client";

import * as React from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, useReducedMotion } from "@/hooks/use-viewport";

export function LoadingScreen() {
  const [visible, setVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) {
      setVisible(false);
      return;
    }
    let raf: number;
    const start = performance.now();
    const totalDuration = 1400;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(pct);
      if (elapsed < totalDuration) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  React.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.path
              d="M28 6 L50 46 L6 46 Z"
              stroke="url(#loaderGradient)"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <defs>
              <linearGradient id="loaderGradient" x1="6" y1="46" x2="50" y2="6">
                <stop offset="0%" stopColor="hsl(217 100% 64%)" />
                <stop offset="100%" stopColor="hsl(262 90% 68%)" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.p
            className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Alpha Global
          </motion.p>

          <div className="mt-6 h-px w-40 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-gradient-electric"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CursorGlow() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  React.useEffect(() => {
    if (!isFinePointer || reducedMotion) return;
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isFinePointer, reducedMotion, x, y]);

  if (!isFinePointer || reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] size-[420px] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, hsl(217 100% 64% / 0.10) 0%, hsl(262 90% 68% / 0.06) 45%, transparent 70%)",
      }}
    />
  );
}
