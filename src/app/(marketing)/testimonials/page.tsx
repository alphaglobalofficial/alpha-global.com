import type { Metadata } from "next";
import { TestimonialsClient } from "./testimonials-client";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with Alpha Global on their websites, stores, and brands.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
