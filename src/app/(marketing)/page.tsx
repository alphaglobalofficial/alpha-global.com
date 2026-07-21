import type { Metadata } from "next";
import { HomeClient } from "./home-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeClient />;
}
