export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  rating: number;
}

// Sample/placeholder quotes representative of real client feedback.
// Replace with verified testimonials from actual clients before launch —
// never publish fabricated reviews.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Lumen Goods",
    quote:
      "Alpha Global rebuilt our entire Shopify store in under a month and mobile conversions jumped almost 40%. They actually understood our brand, not just the tech.",
    initials: "SM",
    rating: 5,
  },
  {
    id: "daniel-ortiz",
    name: "Daniel Ortiz",
    role: "CEO",
    company: "Fintra Capital",
    quote:
      "We needed a site that could hold up in front of investors and customers at the same time. What they delivered was faster and cleaner than anything our last two agencies produced.",
    initials: "DO",
    rating: 5,
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Marketing Director",
    company: "Verdant Foods",
    quote:
      "The brand identity work was genuinely thoughtful — not just a logo, but a whole system we could hand to any designer and get consistent results.",
    initials: "PN",
    rating: 5,
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Product Lead",
    company: "Orbital Fitness",
    quote:
      "Communication was the standout. Weekly updates, honest timelines, and they flagged risks before they became problems instead of after.",
    initials: "MC",
    rating: 5,
  },
  {
    id: "leila-haddad",
    name: "Leila Haddad",
    role: "Founder",
    company: "Haven & Co",
    quote:
      "Working across time zones can be painful, but Alpha Global made it easy — fast replies on WhatsApp, clear milestones, zero chasing.",
    initials: "LH",
    rating: 5,
  },
  {
    id: "james-whitfield",
    name: "James Whitfield",
    role: "Operations Manager",
    company: "Prime Cart",
    quote:
      "They automated half of what our team was doing manually in spreadsheets. It paid for itself within the first two months.",
    initials: "JW",
    rating: 5,
  },
  {
    id: "amara-obi",
    name: "Amara Obi",
    role: "Head of Growth",
    company: "Atlas Works",
    quote:
      "Our organic traffic tripled within six months of the relaunch. They understood SEO wasn't a separate project — it had to be built into the site from day one.",
    initials: "AO",
    rating: 5,
  },
  {
    id: "tom-becker",
    name: "Tom Becker",
    role: "Founder",
    company: "Zenith Labs",
    quote:
      "The support chatbot they built resolves almost half our tickets without a human touching them. That's real, measurable time back for my team.",
    initials: "TB",
    rating: 5,
  },
];
