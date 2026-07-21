import type { Metadata } from "next";
import { PrivacyClient } from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Alpha Global collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
