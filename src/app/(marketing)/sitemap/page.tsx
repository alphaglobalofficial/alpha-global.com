import type { Metadata } from "next";
import { SitemapPageClient } from "./sitemap-page-client";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A complete overview of every page on the Alpha Global website.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return <SitemapPageClient />;
}
