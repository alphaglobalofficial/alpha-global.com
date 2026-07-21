import type { Metadata } from "next";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, Shopify & e-commerce, UI/UX and brand design, SEO, social media, AI automation, and data & BI dashboards — explore everything Alpha Global offers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
