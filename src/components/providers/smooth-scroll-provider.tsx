"use client";

import * as React from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "@/hooks/use-viewport";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => setReady(true), []);

  // Before mount, and for reduced-motion users, skip Lenis entirely and fall
  // back to native scroll — smooth/eased scroll is a pure enhancement.
  if (!ready || prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.11,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.1,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
