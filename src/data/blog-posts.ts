export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  accentFrom: string;
  accentTo: string;
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-the-right-ecommerce-platform-2026",
    title: "How to Choose the Right E-commerce Platform in 2026",
    image: "/blog/ecommerce-platform-2026.jpeg",
    excerpt:
      "Shopify, WooCommerce, headless commerce — the right choice depends on more than price. Here's how we help clients decide.",
    category: "E-commerce",
    date: "2026-06-02",
    readTime: "6 min read",
    author: "Zain Ahmed",
    accentFrom: "#3D7FFF",
    accentTo: "#9B5CFF",
    content: [
      {
        type: "paragraph",
        text: "Every e-commerce project starts with the same question, usually asked too late: which platform should this actually run on? It's tempting to pick whatever's trending or whatever a friend used, but the platform you choose shapes your catalog structure, your checkout experience, your app costs, and how fast you can move for years afterward. Here's how we actually walk clients through the decision.",
      },
      { type: "heading", text: "Start with your catalog, not the platform" },
      {
        type: "paragraph",
        text: "Before comparing platforms, get honest about your catalog. Are you selling 12 products or 1,200? Do you need variants, bundles, or subscriptions? A simple catalog with a handful of products has very different technical needs than a marketplace-style store with complex filtering. Catalog shape narrows your options faster than any feature comparison chart.",
      },
      { type: "heading", text: "Shopify: best for speed and simplicity" },
      {
        type: "paragraph",
        text: "For most direct-to-consumer brands, Shopify remains the fastest path from zero to a professional, reliable store. The app ecosystem covers almost anything you'll need — reviews, upsells, subscriptions, fulfillment — without custom development. The tradeoff is less flexibility at the extreme edges of customization, though a custom theme build closes most of that gap.",
      },
      { type: "heading", text: "WooCommerce: best for content-heavy, WordPress-native brands" },
      {
        type: "paragraph",
        text: "If your brand lives and dies by content — blogs, guides, SEO-driven landing pages — and you're already comfortable in WordPress, WooCommerce keeps everything in one system. It's more hands-on to maintain than Shopify, but it gives you more control over hosting costs and content architecture.",
      },
      { type: "heading", text: "Headless commerce: best for complex, high-traffic brands" },
      {
        type: "paragraph",
        text: "Once you're dealing with serious traffic, multiple storefronts, or a design vision that off-the-shelf themes can't support, a headless setup — a custom frontend backed by a commerce API — starts to make sense. It's the most expensive and slowest option to build, so it's rarely the right starting point, but it's often the right destination for brands that outgrow templated platforms.",
      },
      { type: "heading", text: "The questions that actually matter" },
      {
        type: "list",
        items: [
          "How many SKUs will you realistically have in 12 months?",
          "Do you need subscriptions, bundles, or complex variants?",
          "Who will maintain the store day-to-day — you, or a developer?",
          "How much of your growth depends on content and SEO?",
          "What's your actual budget for apps and monthly platform costs?",
        ],
      },
      {
        type: "paragraph",
        text: "There's no universally 'best' platform — only the best fit for your catalog, your team, and your growth plan. If you're not sure which bucket you fall into, that's exactly the kind of thing we walk through on a free consultation call before recommending anything.",
      },
    ],
  },
  {
    slug: "5-signs-your-website-is-losing-customers",
    title: "5 Signs Your Website Is Losing You Customers",
      image: "/blog/website-losing-customers.png",
    excerpt:
      "Most underperforming websites don't look broken — they just quietly leak conversions. Here's what to check first.",
    category: "Web Development",
    date: "2026-05-14",
    readTime: "5 min read",
    author: "Bilal Qureshi",
    accentFrom: "#22D3EE",
    accentTo: "#3B82F6",
    content: [
      {
        type: "paragraph",
        text: "A website rarely fails loudly. There's no error message telling you a visitor left because the page felt slow, or because they couldn't figure out what to click next. It just shows up later as a lower conversion rate you can't quite explain. These are the five issues we find most often during audits.",
      },
      { type: "heading", text: "1. Your load time crosses 3 seconds" },
      {
        type: "paragraph",
        text: "Every additional second of load time compounds against you — visitors leave before the page even finishes rendering, and search engines quietly rank you lower for it. Unoptimized images and bloated third-party scripts are the usual culprits, and they're almost always fixable without a full rebuild.",
      },
      { type: "heading", text: "2. Mobile feels like an afterthought" },
      {
        type: "paragraph",
        text: "If your site was designed on a desktop monitor and only 'checked' on mobile, it shows — cramped text, buttons too small to tap accurately, layouts that require horizontal scrolling. With most traffic now arriving on phones, a mobile experience that merely works isn't enough; it needs to feel considered.",
      },
      { type: "heading", text: "3. Your call-to-action isn't obvious in 5 seconds" },
      {
        type: "paragraph",
        text: "Ask a stranger to look at your homepage for five seconds, then look away and tell you what to do next. If they can't answer clearly, neither can your visitors. Every page needs one obvious next step — not five competing buttons fighting for attention.",
      },
      { type: "heading", text: "4. Your forms ask for too much, too soon" },
      {
        type: "paragraph",
        text: "Every extra field on a form is a small tax on someone's patience. Phone number, company size, budget range — all useful information, but not all of it needs to be collected before you've earned the first click. Shorter forms convert better; you can always ask for more once the relationship has started.",
      },
      { type: "heading", text: "5. There's no clear next step after someone lands" },
      {
        type: "paragraph",
        text: "Traffic without direction is wasted traffic. If someone reads your homepage and isn't sure whether to book a call, browse products, or read more, they'll usually do none of the three. Every page should end with a clear, singular next action.",
      },
      {
        type: "paragraph",
        text: "None of these require a full redesign to fix — most are targeted changes once you know where to look. If you're not sure where your site is leaking, that's exactly what a website audit is for.",
      },
    ],
  },
  {
    slug: "why-startups-need-brand-identity-before-a-website",
    title: "Why Every Startup Needs a Brand Identity Before a Website",
     image: "/blog/startup-brand-identity.png",
    excerpt:
      "Building a website before your brand identity is like decorating a house before you've poured the foundation.",
    category: "Branding",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Mahnoor Khan",
    accentFrom: "#A476FF",
    accentTo: "#F472B6",
    content: [
      {
        type: "paragraph",
        text: "We get this request often: 'Can you just build the website first? We'll figure out branding later.' It's understandable — a website feels like the more urgent deliverable. But skipping brand identity rarely saves time. It usually just moves the cost to later, when a redesign is more expensive than doing it right the first time.",
      },
      { type: "heading", text: "A website without a brand is just a template with your name on it" },
      {
        type: "paragraph",
        text: "Without a defined color palette, typography, and visual language, every design decision on your website becomes a guess. The result usually looks like a generic template — technically functional, but forgettable, and indistinguishable from a dozen competitors.",
      },
      { type: "heading", text: "Identity gives your designer and developer a shared language" },
      {
        type: "paragraph",
        text: "A brand identity isn't just a logo — it's a decision-making framework. When a designer knows your color system, type scale, and tone of voice, they can make dozens of small decisions consistently instead of asking you to approve every button color individually.",
      },
      { type: "heading", text: "It's cheaper to define it once than redesign it twice" },
      {
        type: "paragraph",
        text: "We've rebuilt websites for clients who launched fast, then rebranded six months later and had to redo the entire site to match. The second website almost always costs more than the brand identity would have upfront — and it comes with lost momentum on any marketing that pointed to the old look.",
      },
      { type: "heading", text: "What a minimum viable brand identity actually includes" },
      {
        type: "paragraph",
        text: "You don't need a 60-page brand book to start. A lean, functional identity that unblocks a website build includes:",
      },
      {
        type: "list",
        items: [
          "A primary logo and a simplified mark for small spaces",
          "A core color palette (2-4 colors) with defined usage",
          "A typography system — headline and body fonts",
          "A short description of tone of voice",
        ],
      },
      {
        type: "paragraph",
        text: "That's enough to brief a designer and developer confidently, launch a consistent website, and expand the brand system later as the business grows — without starting over.",
      },
    ],
  },
  {
    slug: "freelancer-vs-agency-whats-right-for-your-business",
    title: "Freelancer vs Agency: What's Right for Your Business?",
     image: "/blog/freelancer-vs-agency.png",
    excerpt:
      "Both can deliver great work. The right choice depends on your timeline, budget, and how much you can manage yourself.",
    category: "Business",
    date: "2026-03-10",
    readTime: "4 min read",
    author: "Sana Malik",
    accentFrom: "#FBBF24",
    accentTo: "#FB923C",
    content: [
      {
        type: "paragraph",
        text: "This question comes up in almost every discovery call: should you hire a freelancer or an agency? There's no universally right answer — but there is a right answer for your specific project, budget, and how much project management you're able to take on yourself.",
      },
      { type: "heading", text: "When a freelancer is the right call" },
      {
        type: "paragraph",
        text: "For narrow, well-defined tasks — a logo, a landing page, a specific bug fix — a skilled freelancer is often faster and more cost-effective. You're hiring one person's specific skill set, and if you already know exactly what you need, that's often all it takes.",
      },
      { type: "heading", text: "When an agency is worth the premium" },
      {
        type: "paragraph",
        text: "Once a project needs multiple disciplines working together — design, development, copywriting, SEO — coordinating several freelancers yourself becomes a part-time job. An agency brings that coordination in-house, along with continuity if one person is unavailable and a process that's been tested across many projects, not just your own.",
      },
      { type: "heading", text: "The hybrid model: agencies that work like freelancers" },
      {
        type: "paragraph",
        text: "The best of both worlds tends to be a lean agency: small enough to be responsive and personal like a freelancer, structured enough to cover design, development, and strategy without you having to manage three separate contracts. That's deliberately how we've built Alpha Global — direct communication, without the coordination tax of juggling multiple freelancers yourself.",
      },
      { type: "heading", text: "Questions to ask before you decide" },
      {
        type: "list",
        items: [
          "Does this project need one skill, or several working together?",
          "How much time can you personally spend managing the work?",
          "What happens to your timeline if one person becomes unavailable?",
          "Do you need this to scale into future phases, or is it a one-off?",
        ],
      },
      {
        type: "paragraph",
        text: "If your honest answer is 'I don't want to manage three different people to get one cohesive result,' that's usually the clearest signal an agency is the better fit.",
      },
    ],
  },
];
