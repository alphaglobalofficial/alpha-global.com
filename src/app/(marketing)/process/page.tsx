import type { Metadata } from "next";
import { ProcessClient } from "./process-client";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From discovery to launch and ongoing support — here's exactly how Alpha Global runs every project, stage by stage.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
