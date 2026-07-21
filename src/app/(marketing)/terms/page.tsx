import type { Metadata } from "next";
import { TermsClient } from "./terms-client";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern working with Alpha Global and using our website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsClient />;
}
