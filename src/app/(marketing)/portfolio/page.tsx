import type { Metadata } from "next";
import { PortfolioClient } from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real projects across web development, e-commerce, branding, UI/UX design, and AI automation — browse Alpha Global's recent client work.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
