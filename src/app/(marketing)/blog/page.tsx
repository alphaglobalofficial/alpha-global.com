import type { Metadata } from "next";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical writing on web development, e-commerce, branding, and running a digital business — from the Alpha Global team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogClient />;
}
