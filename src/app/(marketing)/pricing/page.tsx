import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for Starter, Professional, and Enterprise projects — plus a full feature comparison. Book a free consultation for an exact quote.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingClient />;
}
