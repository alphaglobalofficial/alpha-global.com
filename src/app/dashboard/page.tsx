import type { Metadata } from "next";
import { DashboardClient } from "./dashboard-client";

export const metadata: Metadata = {
  title: "Client Dashboard",
  description: "Preview of the Alpha Global client dashboard — project progress, invoices, and files in one place.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
