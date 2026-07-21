import {
  Code2,
  ShoppingBag,
  ShoppingCart,
  Palette,
  Image as ImageIcon,
  Fingerprint,
  Search,
  Share2,
  Bot,
  BarChart3,
  LayoutDashboard,
  FileSpreadsheet,
  Smartphone,
  Wrench,
  Gauge,
  Compass,
  ClipboardList,
  PenTool,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import type {
  Service,
  ProcessStep,
  PricingTier,
  ComparisonRow,
  FaqItem,
  TeamMember,
  CareerRole,
  Stat,
} from "@/data/types";

// NOTE: the four figures below are illustrative starter stats.
// Replace with your real, verifiable numbers before launch.
export const HOME_STATS: Stat[] = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Countries Served", value: 24, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Years Combined Experience", value: 6, suffix: "+" },
];

// Placeholder wordmarks for the "trusted by" strip.
// Swap for real client logos (with permission) once you have them.
export const CLIENT_LOGOS: string[] = [
  "NOVA RETAIL",
  "FINTRA",
  "LUMEN GOODS",
  "VERDANT",
  "ORBITAL",
  "ATLAS WORKS",
  "PRIME CART",
  "ZENITH LABS",
  "HAVEN & CO",
  "BLUEPRINT",
];

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom-built websites and web apps engineered for speed, scale, and measurable results.",
    longDescription:
      "We design and build fast, secure, and scalable websites using modern frameworks like Next.js and React. Every build is hand-coded for your business — no bloated page builders, no compromises on performance.",
    icon: Code2,
    category: "Development",
    deliverables: [
      "Custom Next.js / React development",
      "Headless CMS integration",
      "API & third-party integrations",
      "Cross-browser & device testing",
      "Deployment & hosting setup",
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortDescription:
      "Custom Shopify themes and app integrations built to convert browsers into buyers.",
    longDescription:
      "From custom theme development to complex app integrations, we build Shopify stores that load fast, look premium, and are optimized to sell — handling everything from product setup to checkout customization.",
    icon: ShoppingBag,
    category: "Development",
    deliverables: [
      "Custom theme design & development",
      "App integration (DSers, Klaviyo, etc.)",
      "Checkout & payment gateway setup",
      "Speed & Core Web Vitals optimization",
      "Post-launch training & handover",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDescription:
      "End-to-end store builds across Shopify, WooCommerce, and headless commerce stacks.",
    longDescription:
      "Whether you're launching your first store or migrating a complex catalog, we handle product architecture, payment gateways, shipping logic, and inventory workflows so your store runs itself.",
    icon: ShoppingCart,
    category: "Development",
    deliverables: [
      "Platform selection & migration",
      "Product catalog architecture",
      "Payment & shipping configuration",
      "Inventory & order automation",
      "Conversion rate optimization",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Research-driven interfaces that feel effortless to use and unmistakably premium.",
    longDescription:
      "We map real user journeys before we design a single screen. The result is interfaces that reduce friction, build trust, and make your product feel current rather than dated.",
    icon: Palette,
    category: "Design",
    deliverables: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "High-fidelity UI design systems",
      "Usability testing",
      "Developer handoff documentation",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortDescription:
      "Visual assets — from social creatives to packaging — that keep your brand consistent everywhere.",
    longDescription:
      "Consistent, high-quality visuals across every touchpoint: social posts, ad creatives, pitch decks, packaging, and print. Assets that look like they came from the same brand, every time.",
    icon: ImageIcon,
    category: "Design",
    deliverables: [
      "Social media & ad creatives",
      "Pitch deck & presentation design",
      "Packaging & print design",
      "Email & banner design",
      "Editable design templates",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    shortDescription:
      "Logos, color systems, and brand guidelines that give your business a distinct, memorable voice.",
    longDescription:
      "Your brand should feel unmistakably yours. We build the full identity system — logo, typography, color, tone of voice, and usage guidelines — so every piece of communication feels consistent.",
    icon: Fingerprint,
    category: "Design",
    deliverables: [
      "Logo design & variations",
      "Color palette & typography system",
      "Brand guidelines document",
      "Business card & stationery design",
      "Social media brand kit",
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    shortDescription: "Technical and on-page SEO that gets you found — and keeps you ranking.",
    longDescription:
      "We audit your site's technical health, fix what's holding you back, and build an on-page and content strategy around how your customers actually search. Sustainable growth, no shortcuts.",
    icon: Search,
    category: "Growth",
    deliverables: [
      "Technical SEO audit",
      "On-page & content optimization",
      "Keyword strategy & mapping",
      "Site speed & Core Web Vitals fixes",
      "Monthly ranking reports",
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Content calendars, creative, and community management that build real audiences.",
    longDescription:
      "From content planning to daily posting and community replies, we run your social presence like a full-time team — so you can focus on running your business.",
    icon: Share2,
    category: "Growth",
    deliverables: [
      "Monthly content calendar",
      "Post design & copywriting",
      "Community management",
      "Performance reporting",
      "Paid social campaign support",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription: "Custom AI workflows and chatbots that cut manual work and speed up your operations.",
    longDescription:
      "We build practical AI automations — customer support chatbots, lead qualification flows, internal workflow automation — that save hours every week without adding complexity to your stack.",
    icon: Bot,
    category: "Data & Automation",
    deliverables: [
      "Custom chatbot development",
      "Workflow & task automation",
      "CRM & tool integrations",
      "AI content & data pipelines",
      "Ongoing monitoring & tuning",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Turning raw business data into clear, actionable insight.",
    longDescription:
      "We connect your scattered data sources — sales, marketing, operations — into a single, clear picture, so decisions are based on evidence, not guesswork.",
    icon: BarChart3,
    category: "Data & Automation",
    deliverables: [
      "Data source consolidation",
      "KPI definition & tracking",
      "Custom reporting dashboards",
      "Trend & cohort analysis",
      "Monthly insight summaries",
    ],
  },
  {
    slug: "power-bi-dashboards",
    title: "Power BI Dashboards",
    shortDescription: "Live, interactive dashboards that put your KPIs in one place.",
    longDescription:
      "We design Power BI dashboards that pull directly from your live data — sales, inventory, ad spend, whatever matters — so your team always has an accurate, real-time view.",
    icon: LayoutDashboard,
    category: "Data & Automation",
    deliverables: [
      "Data model & source connections",
      "Custom interactive dashboards",
      "Automated data refresh",
      "Role-based access setup",
      "Team training & documentation",
    ],
  },
  {
    slug: "excel-automation",
    title: "Excel Automation",
    shortDescription: "Advanced spreadsheets, macros, and models that eliminate repetitive manual work.",
    longDescription:
      "If your team is still copy-pasting numbers between spreadsheets, we can fix that — automated Excel models, macros, and templates that turn hours of manual work into a single click.",
    icon: FileSpreadsheet,
    category: "Data & Automation",
    deliverables: [
      "Custom Excel models & templates",
      "VBA macro development",
      "Automated report generation",
      "Data validation & error-checking",
      "Team handover & training",
    ],
  },
  {
    slug: "mobile-responsive-design",
    title: "Mobile Responsive Design",
    shortDescription: "Every project engineered to look and perform flawlessly on any device.",
    longDescription:
      "More than half of your visitors are on mobile. We design and test every project across phones, tablets, and desktops so the experience never feels like an afterthought.",
    icon: Smartphone,
    category: "Development",
    deliverables: [
      "Mobile-first design approach",
      "Cross-device testing",
      "Touch-optimized interactions",
      "Responsive image & asset handling",
      "Performance testing on real devices",
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDescription: "Ongoing updates, monitoring, and support so your site always runs at its best.",
    longDescription:
      "Websites need upkeep — security patches, backups, content updates, uptime monitoring. Our maintenance plans keep your site secure, fast, and current without you having to think about it.",
    icon: Wrench,
    category: "Development",
    deliverables: [
      "Security updates & monitoring",
      "Regular backups",
      "Content & plugin updates",
      "Uptime & performance monitoring",
      "Priority support response",
    ],
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    shortDescription: "Speed audits and technical tuning for faster load times and higher conversions.",
    longDescription:
      "Every second of load time costs conversions. We audit, tune, and re-test your site's performance — images, scripts, caching, hosting — until it's genuinely fast, not just fast enough.",
    icon: Gauge,
    category: "Development",
    deliverables: [
      "Core Web Vitals audit",
      "Image & asset optimization",
      "Caching & CDN configuration",
      "Code splitting & lazy loading",
      "Before/after performance report",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    duration: "Week 1",
    description:
      "We start by understanding your business, goals, competitors, and audience — not just what you want built, but why.",
    details: [
      "Stakeholder interviews",
      "Competitor & market research",
      "Goal & success metric definition",
      "Technical scoping",
    ],
    icon: Compass,
  },
  {
    step: 2,
    title: "Planning",
    duration: "Week 1–2",
    description:
      "Discovery becomes a clear roadmap: sitemap, feature list, timeline, and technical architecture — so there are no surprises later.",
    details: [
      "Sitemap & content architecture",
      "Feature prioritization",
      "Tech stack decisions",
      "Project timeline & milestones",
    ],
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Design",
    duration: "Week 2–3",
    description:
      "We design wireframes and high-fidelity UI, refined with your feedback until every screen feels right before a line of code is written.",
    details: [
      "Low-fidelity wireframes",
      "High-fidelity UI design",
      "Design system creation",
      "Client review & revisions",
    ],
    icon: PenTool,
  },
  {
    step: 4,
    title: "Development",
    duration: "Week 3–6",
    description:
      "Our engineers build the approved designs into clean, scalable, production-grade code — with regular check-ins so you always know where things stand.",
    details: [
      "Front-end & back-end development",
      "CMS / platform integration",
      "Third-party API integrations",
      "Weekly progress updates",
    ],
    icon: Code2,
  },
  {
    step: 5,
    title: "Testing",
    duration: "Week 6–7",
    description:
      "Before anything goes live, we test across devices, browsers, and edge cases — performance, accessibility, and functionality included.",
    details: [
      "Cross-browser & device QA",
      "Performance & speed testing",
      "Accessibility checks",
      "Bug fixes & refinement",
    ],
    icon: FlaskConical,
  },
  {
    step: 6,
    title: "Launch",
    duration: "Week 7",
    description:
      "We handle deployment, domain and DNS setup, and final checks — then go live with a plan, not a scramble.",
    details: [
      "Production deployment",
      "Domain & hosting configuration",
      "Analytics & tracking setup",
      "Launch-day monitoring",
    ],
    icon: Rocket,
  },
  {
    step: 7,
    title: "Support",
    duration: "Ongoing",
    description:
      "Launch is the beginning, not the end. We stay on for updates, monitoring, and improvements as your business grows.",
    details: [
      "Ongoing maintenance plans",
      "Performance monitoring",
      "Feature updates & iteration",
      "Priority support access",
    ],
    icon: LifeBuoy,
  },
];

// Starter prices — adjust to your real rate card. Enterprise uses price: 0
// as a signal to render "Custom" instead of a dollar figure.
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 499,
    priceSuffix: "starting price",
    tagline: "For small businesses & solo founders getting online.",
    features: [
      "Up to 5-page custom website",
      "Mobile responsive design",
      "Basic on-page SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: 1499,
    priceSuffix: "starting price",
    tagline: "For growing businesses & e-commerce brands.",
    featured: true,
    features: [
      "Up to 12-page site or Shopify store",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS / product catalog setup",
      "Basic automation workflows",
      "3 rounds of revisions",
      "4–6 weeks delivery",
      "30 days post-launch support",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Enterprise",
    price: 0,
    priceSuffix: "custom quote",
    tagline: "For large teams with complex, multi-phase scopes.",
    features: [
      "Unlimited pages / custom scope",
      "Dedicated project manager",
      "Custom design system",
      "Advanced integrations & automation",
      "Data analytics & dashboards",
      "Unlimited revisions during build",
      "Priority delivery timeline",
      "Ongoing support & SLA",
    ],
    cta: "Talk to Us",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Custom design (not templates)", starter: true, professional: true, enterprise: true },
  { feature: "Number of pages", starter: "Up to 5", professional: "Up to 12", enterprise: "Unlimited" },
  { feature: "E-commerce / Shopify setup", starter: false, professional: true, enterprise: true },
  { feature: "SEO optimization", starter: "Basic", professional: "Advanced", enterprise: "Advanced + strategy" },
  { feature: "Revision rounds", starter: "1 round", professional: "3 rounds", enterprise: "Unlimited" },
  { feature: "Automation / AI workflows", starter: false, professional: "Basic", enterprise: "Advanced" },
  { feature: "Analytics dashboard", starter: false, professional: false, enterprise: true },
  { feature: "Dedicated project manager", starter: false, professional: false, enterprise: true },
  { feature: "Post-launch support", starter: "7 days", professional: "30 days", enterprise: "SLA-based" },
  { feature: "Delivery time", starter: "2 weeks", professional: "4–6 weeks", enterprise: "Custom timeline" },
  { feature: "Priority support", starter: false, professional: false, enterprise: true },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "services-offered",
    category: "General",
    question: "What services does Alpha Global offer?",
    answer:
      "We provide end-to-end digital services — web and Shopify development, UI/UX and brand design, SEO, social media management, AI automation, and data / BI dashboards. Most clients start with one service and expand once we've proven the results.",
  },
  {
    id: "international-clients",
    category: "General",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes — the majority of our clients are international. We work comfortably across US, UK, European, and Middle Eastern time zones, and communicate in English via email, WhatsApp, or your preferred platform.",
  },
  {
    id: "cost",
    category: "Pricing",
    question: "How much does a website cost?",
    answer:
      "It depends on scope, but our packages start from $499 for a Starter site and scale with features, page count, and integrations. Book a free consultation and we'll give you an accurate quote within 24 hours.",
  },
  {
    id: "payment-terms",
    category: "Pricing",
    question: "Do you require full payment upfront?",
    answer:
      "No. Most projects are split into milestones — typically 50% to begin, with the remainder due at agreed checkpoints or on delivery. Larger enterprise projects can be structured differently.",
  },
  {
    id: "timeline",
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "A simple website usually takes 2–3 weeks. Shopify stores and more complex builds typically take 4–6 weeks. You'll get a specific timeline after the discovery call.",
  },
  {
    id: "revisions",
    category: "Process",
    question: "Can I request changes during the project?",
    answer:
      "Yes — every package includes a set number of revision rounds, and we welcome feedback at each milestone rather than only at the very end.",
  },
  {
    id: "getting-started",
    category: "Process",
    question: "What do you need from me to get started?",
    answer:
      "Just a clear idea of your goals, any existing branding or content, and 30 minutes for a discovery call. We'll handle the rest and flag anything else we need along the way.",
  },
  {
    id: "post-launch-support",
    category: "Support",
    question: "Do you offer support after the site launches?",
    answer:
      "Yes. Every project includes a post-launch support window, and we offer ongoing maintenance plans for updates, monitoring, and improvements after that.",
  },
  {
    id: "something-breaks",
    category: "Support",
    question: "What if something breaks after launch?",
    answer:
      "Reach out through your preferred channel and we'll prioritize it — critical issues are typically addressed within hours, not days.",
  },
  {
    id: "existing-website",
    category: "General",
    question: "Can you work with my existing website instead of rebuilding it?",
    answer:
      "Often, yes. We can audit your current site and recommend whether an update, redesign, or full rebuild makes the most sense for your goals and budget.",
  },
  {
    id: "fiverr-upwork",
    category: "General",
    question: "I found you on Fiverr or Upwork — is this the same team?",
    answer:
      "Yes. Alpha Global operates directly and through Fiverr and Upwork, so you get the same team, process, and quality either way — just choose whichever platform you're most comfortable paying through.",
  },
  {
    id: "nda-contract",
    category: "Pricing",
    question: "Do you sign an NDA or contract?",
    answer:
      "Absolutely. We're happy to sign an NDA before discussing sensitive details, and every project starts with a clear written agreement covering scope, timeline, and payment terms.",
  },
];

// Placeholder roster — replace with your real team (or a founder-only bio
// if that better reflects Alpha Global today) before launch.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Zain Ahmed",
    role: "Founder & Creative Director",
    bio: "Leads strategy and client partnerships, making sure every project ties back to a real business outcome.",
    initials: "ZA",
  },
  {
    name: "Mahnoor Khan",
    role: "UI/UX Design Lead",
    bio: "Turns research and business goals into interfaces that feel effortless — and look unmistakably premium.",
    initials: "MK",
  },
  {
    name: "Bilal Qureshi",
    role: "Lead Full-Stack Developer",
    bio: "Builds the engineering backbone of every project, from storefronts to internal automation tools.",
    initials: "BQ",
  },
  {
    name: "Sana Malik",
    role: "Growth & SEO Strategist",
    bio: "Owns the numbers after launch — SEO, analytics, and the campaigns that turn traffic into revenue.",
    initials: "SM",
  },
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer (React / Next.js)",
    department: "Engineering",
    type: "Full-time · Remote",
    location: "Remote (Pakistan-based preferred)",
    description:
      "Build fast, pixel-perfect interfaces for client projects using React, Next.js, and Tailwind CSS, working closely with design and backend.",
    responsibilities: [
      "Build responsive, accessible UI from Figma designs",
      "Integrate REST/GraphQL APIs and headless CMS platforms",
      "Optimize for Core Web Vitals and performance",
      "Collaborate with designers and PMs across multiple projects",
    ],
    requirements: [
      "1–3 years professional experience with React",
      "Strong CSS/Tailwind and responsive design skills",
      "Comfortable with Git-based workflows",
      "Good written English for client-facing updates",
    ],
  },
  {
    id: "shopify-developer",
    title: "Shopify Developer",
    department: "Engineering",
    type: "Full-time · Remote",
    location: "Remote",
    description:
      "Own custom Shopify theme builds and app integrations for e-commerce clients, from product setup to checkout customization.",
    responsibilities: [
      "Develop and customize Shopify (Liquid) themes",
      "Integrate apps: DSers, Klaviyo, review & upsell tools",
      "Configure payment gateways and shipping logic",
      "Troubleshoot performance and checkout issues",
    ],
    requirements: [
      "Hands-on experience with Shopify theme development",
      "Working knowledge of Liquid, JavaScript, and CSS",
      "Familiarity with dropshipping / DSers workflows a plus",
      "Comfortable managing multiple client stores at once",
    ],
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time · Remote",
    location: "Remote",
    description:
      "Design interfaces for web and Shopify projects — from wireframes to polished, animation-ready UI kits handed off to engineering.",
    responsibilities: [
      "Translate briefs into wireframes and user flows",
      "Design high-fidelity UI in Figma with a documented design system",
      "Prepare developer-ready handoff and specs",
      "Support light brand identity and graphic design work",
    ],
    requirements: [
      "Strong portfolio of web or product UI design",
      "Proficiency in Figma",
      "Understanding of responsive and accessible design principles",
      "Bonus: basic motion/prototyping skills",
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing Specialist",
    department: "Growth",
    type: "Part-time · Remote",
    location: "Remote",
    description:
      "Support paid social and search campaigns for e-commerce clients, plus organic content strategy for the agency's own channels.",
    responsibilities: [
      "Plan and manage paid social campaigns",
      "Report on CAC, ROAS, and campaign performance",
      "Support content calendars for client social accounts",
      "Assist with SEO content briefs",
    ],
    requirements: [
      "Experience running Meta / TikTok ad campaigns",
      "Comfortable reading and reporting on performance data",
      "Excellent written communication",
    ],
  },
  {
    id: "ai-automation-engineer",
    title: "AI Automation Engineer",
    department: "Engineering",
    type: "Contract · Remote",
    location: "Remote",
    description:
      "Design and ship practical AI automations and chatbots for clients — the kind that save real hours, not demo-ware.",
    responsibilities: [
      "Build chatbots and workflow automations using modern LLM APIs",
      "Integrate automations with CRMs and business tools",
      "Document and monitor automations post-launch",
    ],
    requirements: [
      "Experience building with LLM APIs (OpenAI, Anthropic, or similar)",
      "Comfortable with Python or Node.js",
      "Interest in practical, ROI-driven automation over novelty projects",
    ],
  },
];
