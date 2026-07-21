import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/data/site-content";
import { BLOG_POSTS } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/process",
    "/pricing",
    "/testimonials",
    "/faq",
    "/contact",
    "/blog",
    "/careers",
    "/consultation",
    "/sitemap",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceAnchors = SERVICES.map((service) => ({
    url: `${SITE_URL}/services#${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceAnchors];
}
