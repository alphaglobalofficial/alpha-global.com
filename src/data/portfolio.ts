export type PortfolioCategory =
  | "Web Development"
  | "E-commerce"
  | "Branding"
  | "UI/UX Design"
  | "AI & Automation";

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  blurb: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  tech: string[];
  accentFrom: string;
  accentTo: string;
}

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Web Development",
  "E-commerce",
  "Branding",
  "UI/UX Design",
  "AI & Automation",
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "lumen-goods",
    title: "A Shopify storefront built to convert",
    client: "Lumen Goods · Home & Lifestyle",
    category: "E-commerce",
    year: "2025",
    blurb: "Custom Shopify build for a home goods brand scaling past 500 SKUs.",
    challenge:
      "Lumen Goods was running on a generic Shopify theme that couldn't handle their growing catalog. Load times were slow, mobile conversion lagged behind desktop, and the checkout experience felt disconnected from the brand.",
    solution:
      "We rebuilt the storefront on a custom Shopify theme with a modular product template, restructured collections for faster browsing, and rebuilt the checkout flow's supporting pages for brand consistency end to end.",
    results: [
      { label: "Mobile conversion", value: "+38%" },
      { label: "Page load time", value: "-61%" },
      { label: "Avg. order value", value: "+19%" },
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "Klaviyo"],
    accentFrom: "#3D7FFF",
    accentTo: "#9B5CFF",
  },
  {
    slug: "fintra-capital",
    title: "A fintech marketing site that earns trust fast",
    client: "Fintra Capital · Financial Services",
    category: "Web Development",
    year: "2025",
    blurb: "Marketing site and client dashboard preview for a fintech startup.",
    challenge:
      "Fintra needed to raise a seed round and onboard early customers simultaneously, but their existing site read like a pitch deck — heavy on claims, light on credibility and clarity.",
    solution:
      "We designed and built a Next.js marketing site with clear product explainers, an interactive dashboard preview, and a security/compliance section built specifically for investor and enterprise scrutiny.",
    results: [
      { label: "Demo requests", value: "+142%" },
      { label: "Time on site", value: "+2.1x" },
      { label: "Lighthouse score", value: "98/100" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accentFrom: "#22D3EE",
    accentTo: "#3B82F6",
  },
  {
    slug: "verdant-foods",
    title: "A full identity system for an organic food brand",
    client: "Verdant Foods · CPG",
    category: "Branding",
    year: "2024",
    blurb: "Logo, packaging, and brand guidelines for a farm-to-table food brand.",
    challenge:
      "Verdant Foods was launching into a crowded organic foods category with no visual identity beyond a temporary logo, making it hard to stand out on shelf or online.",
    solution:
      "We developed a full brand identity — logo system, color and type palette, packaging templates, and a guidelines document — designed to feel premium but approachable across retail and D2C.",
    results: [
      { label: "Retail partners onboarded", value: "12" },
      { label: "Instagram followers", value: "+9.4k" },
      { label: "Brand assets delivered", value: "40+" },
    ],
    tech: ["Illustrator", "Figma", "Brand Strategy"],
    accentFrom: "#34D399",
    accentTo: "#22D3EE",
  },
  {
    slug: "orbital-fitness",
    title: "A fitness app interface people actually enjoy using",
    client: "Orbital Fitness · Health & Wellness",
    category: "UI/UX Design",
    year: "2025",
    blurb: "Full UI/UX redesign for a workout tracking mobile app.",
    challenge:
      "Orbital's existing app had strong functionality but a cluttered, dated interface that was hurting retention — users were dropping off after the first week.",
    solution:
      "We ran usability testing to identify friction points, then redesigned the core flows — onboarding, workout logging, and progress tracking — around a cleaner, more motivating visual system.",
    results: [
      { label: "Week-4 retention", value: "+27%" },
      { label: "Onboarding completion", value: "+45%" },
      { label: "App Store rating", value: "4.8★" },
    ],
    tech: ["Figma", "Prototyping", "Usability Testing"],
    accentFrom: "#F472B6",
    accentTo: "#A855F7",
  },
  {
    slug: "atlas-works",
    title: "A B2B SaaS site engineered to shorten sales cycles",
    client: "Atlas Works · B2B SaaS",
    category: "Web Development",
    year: "2024",
    blurb: "Marketing site rebuild for a workflow automation SaaS platform.",
    challenge:
      "Atlas Works' sales team was fielding the same basic product questions on every call because the website failed to explain the product clearly enough to qualify leads beforehand.",
    solution:
      "We restructured the information architecture around buyer questions, added interactive product walkthroughs, and built a resource hub that let prospects self-serve before ever booking a call.",
    results: [
      { label: "Qualified demo requests", value: "+64%" },
      { label: "Sales cycle length", value: "-18%" },
      { label: "Organic traffic (6mo)", value: "+210%" },
    ],
    tech: ["Next.js", "Sanity CMS", "TypeScript"],
    accentFrom: "#3D7FFF",
    accentTo: "#5993FF",
  },
  {
    slug: "prime-cart",
    title: "A multi-category dropshipping store built to scale",
    client: "Prime Cart · General Retail",
    category: "E-commerce",
    year: "2025",
    blurb: "Store architecture and automation for a gadgets & lifestyle dropshipping brand.",
    challenge:
      "Prime Cart's founder was managing product research, listings, and order fulfillment manually across spreadsheets, which capped how fast the store could grow.",
    solution:
      "We rebuilt the store with a scalable collection structure, connected supplier and fulfillment automation, and set up tracking so the founder could see performance by category at a glance.",
    results: [
      { label: "Orders processed / week", value: "+3.2x" },
      { label: "Manual fulfillment time", value: "-70%" },
      { label: "Return customer rate", value: "+22%" },
    ],
    tech: ["Shopify", "DSers", "Meta Pixel", "Google Analytics"],
    accentFrom: "#FBBF24",
    accentTo: "#FB923C",
  },
  {
    slug: "haven-and-co",
    title: "A boutique hospitality brand, built from the ground up",
    client: "Haven & Co · Hospitality",
    category: "Branding",
    year: "2024",
    blurb: "Brand identity and booking site for a boutique hotel group.",
    challenge:
      "Haven & Co had three properties with inconsistent branding and a booking site that felt more like a listings directory than a hospitality brand.",
    solution:
      "We unified the identity across all three properties and designed a warm, editorial-style booking site that let each location's character come through while keeping the booking flow simple.",
    results: [
      { label: "Direct bookings", value: "+31%" },
      { label: "OTA commission saved", value: "$48k/yr" },
      { label: "Avg. session duration", value: "+2.4min" },
    ],
    tech: ["Webflow", "Figma", "Brand Strategy"],
    accentFrom: "#A476FF",
    accentTo: "#3D7FFF",
  },
  {
    slug: "zenith-labs",
    title: "A support chatbot that actually resolves tickets",
    client: "Zenith Labs · Software",
    category: "AI & Automation",
    year: "2025",
    blurb: "AI support chatbot and internal workflow automation for a SaaS support team.",
    challenge:
      "Zenith Labs' small support team was drowning in repetitive tickets — password resets, billing questions, basic troubleshooting — leaving little time for complex issues.",
    solution:
      "We built a custom AI chatbot trained on their documentation and ticket history, integrated with their helpdesk, plus internal automations that routed and tagged incoming tickets automatically.",
    results: [
      { label: "Tickets auto-resolved", value: "43%" },
      { label: "First response time", value: "-76%" },
      { label: "Support hours saved / mo", value: "60+" },
    ],
    tech: ["OpenAI API", "Node.js", "Zendesk API"],
    accentFrom: "#9B5CFF",
    accentTo: "#3D7FFF",
  },
];
