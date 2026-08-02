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
  Crown,
  Building2,
  BarChart3,
  Cloud,
  Link,
  Film,
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
    "Premium websites and web applications engineered for performance, scalability, and business growth.",

  longDescription:
    "We craft high-performance websites and custom web applications that combine exceptional design with powerful engineering. From startup landing pages to enterprise platforms, every solution is built with modern technologies, optimized for SEO, lightning-fast loading speeds, enterprise-grade security, and long-term scalability.",

  icon: Code2,

  category: "Development",

  deliverables: [
    "Custom Website Development",
    "Business & Corporate Websites",
    "Landing Page Development",
    "Portfolio Websites",
    "Next.js Development",
    "React Development",
    "WordPress Development",
    "Webflow Development",
    "Headless CMS Integration",
    "REST API & Third-Party Integrations",
    "Technical SEO Optimization",
    "Mobile-First Responsive Design",
    "Cross-Device Compatibility",
    "Cross-Browser Testing",
    "Touch-Optimized User Experience",
    "Responsive Images & Media",
    "Performance Optimization",
    "Website Security & SSL",
    "Performance Testing on Real Devices",
    "Deployment, Hosting & Maintenance",
  ],
},
  {
  slug: "ecommerce-development",

  title: "E-Commerce Development",

  shortDescription:
    "Scalable online stores engineered for higher conversions, automation, and long-term growth.",

  longDescription:
    "We design and develop premium e-commerce experiences that help brands sell more online. From Shopify and WooCommerce to headless commerce solutions, we build fast, secure, and conversion-focused stores with seamless payment, shipping, inventory, and automation systems. Every solution is optimized for customer experience, scalability, and measurable business growth.",

  icon: ShoppingCart,

  category: "Development",

  deliverables: [
    "Shopify Store Development",
    "Shopify Plus Solutions",
    "WooCommerce Development",
    "Headless Commerce",
    "Custom Store Design",
    "Product & Collection Setup",
    "Marketplace Development",
    "Dropshipping Store Setup",
    "DSers Integration",
    "Payment Gateway Integration",
    "Shipping & Tax Configuration",
    "Inventory Management",
    "Order Automation",
    "Customer Account System",
    "Store Migration",
    "App Integrations",
    "Email Marketing Integration",
    "Analytics & Reporting",
    "Conversion Rate Optimization (CRO)",
    "Store Maintenance & Support",
    "Website Maintenance",
    "Website Monitoring",
    "Security Updates",
    "Regular Backups",
    "Content Updates",
    "Plugin & CMS Updates",
    "Uptime Monitoring",
    "Bug Fixes",
    "Priority Technical Support",
  ],
},
  {
  slug: "ui-ux-graphic-design",

  title: "UI/UX & Graphic Design",

  shortDescription:
    "Modern digital experiences and stunning visual designs that strengthen your brand and increase user engagement.",

  longDescription:
    "We combine user-centered UI/UX design with premium graphic design to create visually stunning, intuitive, and conversion-focused digital experiences. From websites and mobile apps to complete brand assets, every design is crafted to improve usability, strengthen brand identity, and leave a lasting impression.",

  icon: Palette,

  category: "Design",

  deliverables: [
    "Website UI Design",
    "Mobile App UI Design",
    "Dashboard UI Design",
    "SaaS UI/UX Design",
    "Landing Page Design",
    "Wireframing",
    "Interactive Prototyping",
    "User Experience Research",
    "UX Audit",
    "Design System Creation",
    "Logo Design",
    "Brand Identity Design",
    "Social Media Creatives",
    "Banner & Ad Design",
    "Business Card Design",
    "Brochure Design",
    "Flyer & Poster Design",
    "Packaging Design",
    "Presentation Design",
    "Figma Source Files",
  ],
},
  {
  slug: "branding-identity",

  title: "Branding & Identity",

  shortDescription:
    "Build a memorable brand with premium identity systems that inspire trust and recognition.",

  longDescription:
    "Your brand is more than just a logo—it's the complete experience your customers remember. We create strategic brand identities that communicate your values, differentiate your business from competitors, and establish a strong, consistent presence across every platform. From logo creation to complete brand systems, we ensure your business looks professional, premium, and unforgettable.",

  icon: Fingerprint,

  category: "Design",

  deliverables: [
    "Logo Design & Variations",
    "Brand Strategy",
    "Visual Identity System",
    "Brand Guidelines",
    "Typography System",
    "Color Palette",
    "Business Card Design",
    "Letterhead Design",
    "Email Signature Design",
    "Social Media Brand Kit",
    "Packaging Design",
    "Product Label Design",
    "Brand Presentation",
    "Marketing Collateral",
    "Brand Style Guide",
    "Rebranding Services",
    "Corporate Identity Design",
    "Iconography System",
    "Brand Assets Package",
    "Print Ready Files",
  ],
},
  {
  slug: "seo-optimization",

  title: "SEO Optimization",

  shortDescription:
    "Data-driven SEO strategies that increase visibility, traffic, and long-term business growth.",

  longDescription:
    "Our SEO services are designed to help your business dominate search results with sustainable, white-hat strategies. We combine technical optimization, keyword research, content strategy, performance improvements, and authority building to drive qualified organic traffic, improve search rankings, and maximize your return on investment.",

  icon: Search,

  category: "Growth",

  deliverables: [
    "Technical SEO Audit",
    "Website SEO Optimization",
    "Keyword Research & Strategy",
    "Competitor Analysis",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "E-Commerce SEO",
    "Content Optimization",
    "Internal Linking Strategy",
    "Schema Markup",
    "XML Sitemap & Robots.txt",
    "Core Web Vitals Optimization",
    "Google Search Console Setup",
    "Google Analytics Integration",
    "Backlink Strategy",
    "SEO Performance Reports",
    "Monthly Ranking Reports",
    "SEO Consultation",
    "Ongoing SEO Support",
  ],
},
  {
  slug: "digital-marketing",

  title: "Digital Marketing",

  shortDescription:
    "Performance-driven digital marketing strategies that grow your brand, generate qualified leads, and maximize ROI.",

  longDescription:
    "We help businesses grow through strategic digital marketing campaigns powered by data, creativity, and automation. From social media management and paid advertising to content marketing, email campaigns, and conversion optimization, every strategy is designed to increase brand awareness, drive targeted traffic, and deliver measurable business results.",

  icon: Share2,

  category: "Growth",

  deliverables: [
    "Social Media Management",
    "Content Strategy",
    "Monthly Content Calendar",
    "Creative Post Design",
    "Professional Copywriting",
    "Facebook Marketing",
    "Instagram Marketing",
    "LinkedIn Marketing",
    "TikTok Marketing",
    "YouTube Marketing",
    "Google Ads Management",
    "Meta Ads Management",
    "Email Marketing Campaigns",
    "Lead Generation Funnels",
    "Influencer Marketing",
    "Community Management",
    "Analytics & Performance Reports",
    "Conversion Rate Optimization",
    "Marketing Automation",
    "Ongoing Campaign Optimization",
  ],
},
 {
  slug: "ai-automation",

  title: "AI & Automation",

  shortDescription:
    "Intelligent AI solutions and workflow automation that increase productivity, reduce costs, and scale your business.",

  longDescription:
    "Transform your business with cutting-edge Artificial Intelligence and intelligent automation. We develop AI chatbots, AI agents, workflow automation, CRM integrations, and custom AI solutions that eliminate repetitive tasks, improve customer experiences, and help your team work smarter. From startups to enterprise businesses, we build secure, scalable, and future-ready AI systems powered by the latest technologies.",

  icon: Bot,

  category: "Data & Automation",

  deliverables: [
    "Custom AI Chatbots",
    "AI Customer Support",
    "AI Sales Agents",
    "OpenAI / ChatGPT Integration",
    "WhatsApp AI Bots",
    "CRM Automation",
    "Business Workflow Automation",
    "Zapier Automation",
    "Make.com Automation",
    "Email Automation",
    "Lead Qualification Automation",
    "Document Processing AI",
    "Data Extraction & AI Pipelines",
    "AI Content Generation",
    "Custom AI Applications",
    "API Integrations",
    "Analytics & Monitoring",
    "Performance Optimization",
    "Maintenance & Support",
    "AI Strategy Consultation",
  ],
},
  {
  slug: "data-analytics",

  title: "Data Analytics & Business Intelligence",

  shortDescription:
    "Transform raw data into actionable insights with interactive dashboards, advanced analytics, and business intelligence solutions.",

  longDescription:
    "We help businesses unlock the full value of their data through advanced analytics and business intelligence solutions. From interactive dashboards and KPI tracking to predictive analytics and automated reporting, we provide the insights you need to make smarter, data-driven decisions, improve operational efficiency, and accelerate business growth.",

  icon: BarChart3,

  category: "Data & Automation",

  deliverables: [
  "Business Intelligence Solutions",
  "Power BI Dashboard Development",
  "Power BI Service Deployment",
  "Google Looker Studio Dashboards",
  "Microsoft Excel Dashboards",
  "Excel Automation",
  "VBA Macro Development",
  "Power Query Automation",
  "Data Cleaning & Transformation",
  "Data Visualization",
  "Sales Analytics",
  "Marketing Analytics",
  "Customer Analytics",
  "Financial Analytics",
  "Operational Analytics",
  "Custom KPI Dashboards",
  "Executive Reporting",
  "Automated Reports",
  "Predictive Analytics",
  "Business Intelligence Consulting",
  ],
},
{
  slug: "mobile-app-development",

  title: "Mobile App Development",

  shortDescription:
    "Custom Android, iOS, and cross-platform applications built for performance, scalability, and exceptional user experiences.",

  longDescription:
    "We develop high-performance mobile applications that help businesses engage customers, streamline operations, and accelerate growth. From startup MVPs to enterprise-grade applications, our apps are designed with modern technologies, intuitive user experiences, and scalable architectures.",

  icon: Smartphone,

  category: "Development",

  deliverables: [
    "Android App Development",
    "iOS App Development",
    "Flutter App Development",
    "React Native Development",
    "Cross-Platform Applications",
    "Progressive Web Apps (PWA)",
    "App UI/UX Design",
    "Firebase Integration",
    "REST API Integration",
    "Authentication Systems",
    "Push Notifications",
    "Payment Gateway Integration",
    "Google Maps Integration",
    "App Performance Optimization",
    "App Store Publishing",
    "Google Play Publishing",
    "App Maintenance",
    "Bug Fixes & Updates",
    "Analytics Integration",
    "Ongoing Technical Support",
  ],
},
{
  slug: "cloud-devops",

  title: "Cloud & DevOps",

  shortDescription:
    "Modern cloud infrastructure and DevOps solutions for secure, scalable, and reliable applications.",

  longDescription:
    "We help businesses deploy, manage, and scale applications using modern cloud platforms and DevOps best practices. From infrastructure setup to CI/CD automation, we ensure your applications remain secure, reliable, and always available.",

  icon: Cloud,

  category: "Data & Automation",

  deliverables: [
    "AWS Deployment",
    "Microsoft Azure",
    "Google Cloud Platform",
    "DigitalOcean",
    "Docker Containerization",
    "Kubernetes",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Server Configuration",
    "Cloud Migration",
    "SSL & Security",
    "Load Balancing",
    "Monitoring & Logging",
    "Backup Solutions",
    "Infrastructure Automation",
    "Domain Configuration",
    "Email Server Setup",
    "Performance Monitoring",
    "Cloud Cost Optimization",
    "24/7 Infrastructure Support",
  ],
},
{
  slug: "api-integrations",

  title: "API & Integrations",

  shortDescription:
    "Seamless integrations connecting your applications, platforms, and business tools.",

  longDescription:
    "We integrate modern APIs and third-party services to automate workflows, improve efficiency, and connect your business ecosystem into one seamless experience.",

  icon: Link,

  category: "Development",

  deliverables: [
    "REST API Development",
    "GraphQL APIs",
    "Stripe Integration",
    "PayPal Integration",
    "Twilio Integration",
    "Firebase Integration",
    "Supabase Integration",
    "CRM Integration",
    "ERP Integration",
    "Webhook Development",
    "Payment APIs",
    "Social Login Integration",
    "Google APIs",
    "Microsoft APIs",
    "WhatsApp API",
    "OpenAI API Integration",
    "Custom API Development",
    "API Documentation",
    "Testing & Debugging",
    "API Maintenance",
  ],
},
{
  slug: "creative-studio",

  title: "Creative Studio",

  shortDescription:
    "Premium creative content that helps brands stand out across digital platforms.",

  longDescription:
    "Our creative team produces visually compelling content that strengthens your brand identity and increases engagement. From product advertisements to motion graphics, we create assets designed to convert and leave lasting impressions.",

  icon: Film,

  category: "Design",

  deliverables: [
    "Video Editing",
    "Motion Graphics",
    "Product Advertisement Videos",
    "Social Media Reels",
    "YouTube Shorts",
    "Commercial Videos",
    "Thumbnail Design",
    "Banner Design",
    "Brochure Design",
    "Presentation Design",
    "Product Mockups",
    "3D Mockups",
    "Photo Retouching",
    "Print Design",
    "Marketing Creatives",
    "Animation",
    "Brand Campaign Assets",
    "Creative Direction",
    "Content Production",
    "Creative Consultation",
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
    icon: Rocket,
    supportLabel: "Email Support",
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
    icon: Crown,
    supportLabel: "Priority Support",
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
    icon: Building2,
    supportLabel: "24/7 Dedicated",
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
