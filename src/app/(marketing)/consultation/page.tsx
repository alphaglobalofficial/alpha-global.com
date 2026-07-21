import type { Metadata } from "next";
import { ConsultationClient } from "./consultation-client";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free, no-pressure 30-minute consultation with Alpha Global. Tell us about your project and get a clear plan and quote.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}
