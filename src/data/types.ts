import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  deliverables: string[];
  category: "Development" | "Design" | "Growth" | "Data & Automation";
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: number;
  priceSuffix: string;
  tagline: string;
  icon: LucideIcon;
  supportLabel: string;
  featured?: boolean;
  features: string[];
  cta: string;
}

export interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Process" | "Support";
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
