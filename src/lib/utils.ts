import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Turn "Web Development" into "web-development" for slugs/ids. */
export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

/** Format a number of USD dollars, e.g. 1499 -> "$1,499". */
export function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Clamp a number between a min and max. */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Simple delay helper, mainly for simulated async UI states. */
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Read a public env var with a sensible fallback so the UI never breaks. */
export function envOrFallback(value: string | undefined, fallback: string) {
  return value && value.length > 0 ? value : fallback;
}
