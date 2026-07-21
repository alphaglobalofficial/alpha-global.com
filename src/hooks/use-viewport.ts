"use client";

import { useEffect, useState } from "react";

/** Tracks the viewport-relative mouse position. Returns null until first move (and always null on touch). */
export function useMousePosition() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}

/** SSR-safe media query hook. Defaults to `false` until mounted on the client. */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const update = () => setMatches(mediaQueryList.matches);
    update();
    mediaQueryList.addEventListener("change", update);
    return () => mediaQueryList.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** Convenience wrapper around the `prefers-reduced-motion` media query. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True once the component has mounted on the client — guards browser-only UI. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
