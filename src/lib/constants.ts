import { envOrFallback } from "@/lib/utils";

export const SITE_URL = envOrFallback(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://alphaglobaltechno.com"
);

export const SITE_CONFIG = {
  name: "Alpha Global",
  legalName: "Alpha Global",
  tagline: "Building Digital Experiences That Grow Businesses.",
  description:
    "Alpha Global is a full-service digital agency designing, building, and scaling premium websites, e-commerce stores, brand identities, and AI-driven automation for startups, SMBs, e-commerce brands, and enterprise teams worldwide.",
  url: SITE_URL,
  email: envOrFallback(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    "alphaglobalofficial@gmail.com"
  ),
  whatsapp: envOrFallback(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "923306257288"),
  location: "Karachi, Pakistan — serving clients worldwide",
  foundedYear: 2022,
} as const;

export const SOCIAL_LINKS = {
  instagram: envOrFallback(process.env.NEXT_PUBLIC_INSTAGRAM_URL, "https://instagram.com/alphaglobal"),
  linkedin: envOrFallback(process.env.NEXT_PUBLIC_LINKEDIN_URL, "https://linkedin.com/company/alphaglobal"),
  twitter: envOrFallback(process.env.NEXT_PUBLIC_TWITTER_URL, "https://x.com/alphaglobal"),
  facebook: envOrFallback(process.env.NEXT_PUBLIC_FACEBOOK_URL, "https://facebook.com/alphaglobal"),
  behance: envOrFallback(process.env.NEXT_PUBLIC_BEHANCE_URL, "https://behance.net/alphaglobal"),
} as const;

export const FREELANCE_PLATFORMS = {
  fiverr: envOrFallback(process.env.NEXT_PUBLIC_FIVERR_URL, "https://fiverr.com/alphaglobal"),
  upwork: envOrFallback(process.env.NEXT_PUBLIC_UPWORK_URL, "https://upwork.com/agencies/alphaglobal"),
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Shopify Development", href: "/services#shopify-development" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "Brand Identity", href: "/services#brand-identity" },
    { label: "SEO Optimization", href: "/services#seo-optimization" },
    { label: "AI Automation", href: "/services#ai-automation" },
  ],
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Book a Consultation", href: "/consultation" },
    { label: "Client Login", href: "/login" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
