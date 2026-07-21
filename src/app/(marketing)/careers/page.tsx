import type { Metadata } from "next";
import { CareersClient } from "./careers-client";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Alpha Global — open roles in engineering, design, and growth for a small, senior, remote-friendly team.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <CareersClient />;
}
