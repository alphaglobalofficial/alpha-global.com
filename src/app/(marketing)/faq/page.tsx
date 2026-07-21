import type { Metadata } from "next";
import { FaqClient } from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about pricing, timelines, process, and support at Alpha Global.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FaqClient />;
}
