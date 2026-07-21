import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alpha Global is a full-service digital agency built for founders who need premium web, design, and growth work without agency bloat. Here's our story, values, and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
