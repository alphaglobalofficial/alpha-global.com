import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alpha Global — email, WhatsApp, or the form below. We typically reply within a few hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
