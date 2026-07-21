# Alpha Global — Agency Website

A premium, production-ready digital agency website built with Next.js 15, TypeScript, Tailwind CSS,
Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll, and Three.js.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

**Requirements:** Node.js 18.18+ (Node 20+ recommended).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local dev server            |
| `npm run build` | Create a production build             |
| `npm run start` | Run the production build locally      |
| `npm run lint`  | Run ESLint                             |

## Project structure

```
src/
  app/
    (marketing)/        # All public marketing pages, sharing the Navbar/Footer layout
      about/ services/ portfolio/ process/ pricing/
      testimonials/ faq/ contact/ blog/ careers/
      consultation/ sitemap/ privacy/ terms/
    dashboard/           # Client dashboard demo (its own app-shell layout)
    login/               # Demo login screen
    api/contact/         # Contact + consultation form submission handler
    layout.tsx           # Root layout: fonts, theme, smooth scroll, global widgets
    sitemap.ts           # Auto-generated sitemap.xml
    robots.ts            # Auto-generated robots.txt
    not-found.tsx         # Custom animated 404
  components/
    ui/                  # Design-system primitives (Button, GlassCard, Modal, Accordion, ...)
    layout/              # Navbar, Footer
    providers/           # Theme, smooth scroll (Lenis + GSAP), page transitions, loading screen
    widgets/              # WhatsApp button, live chat widget, cookie consent, theme toggle
    three/                # Three.js hero background scene
    dashboard/            # Dashboard sidebar, topbar, chart/stat widgets
    forms/                # Shared contact/consultation form
    cards.tsx             # Shared ServiceCard, ProjectCard, TestimonialCard, PricingCard
  data/                  # All site copy and content (services, portfolio, pricing, FAQ, blog, etc.)
  lib/                   # Site constants, utility functions
  hooks/                 # Shared client hooks
```

## Before you launch — please read

This project ships with realistic **placeholder content** so every section looks complete out of
the box. Replace the following before going live:

- **Stats & figures** — `src/data/site-content.ts` (`HOME_STATS`) uses sample numbers (projects
  delivered, countries served, etc.). Replace with your real, verifiable figures.
- **Client logos** — `src/data/site-content.ts` (`CLIENT_LOGOS`) are generic placeholder wordmarks,
  not real companies. Swap in real client logos only once you have permission to display them.
- **Testimonials** — `src/data/testimonials.ts` contains sample quotes representative of real
  client feedback. **Do not publish these as real reviews** — replace with verified testimonials
  from actual clients.
- **Team members** — `src/data/site-content.ts` (`TEAM_MEMBERS`) is a placeholder roster. Update
  with your real team, or restructure the About page as a founder-only bio if that's more accurate.
- **Pricing** — `src/data/site-content.ts` (`PRICING_TIERS`, `COMPARISON_ROWS`) uses illustrative
  starting prices. Adjust to your real rate card.
- **Legal pages** — `privacy` and `terms` are thorough starting templates, **not legal advice**.
  Have a lawyer review them before relying on them, especially given international clients.
- **Contact details** — update `.env` (see below) with your real email, WhatsApp number, and
  social links.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your real values:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER` — used
  throughout the site (footer, WhatsApp button, contact page, structured data).
- `NEXT_PUBLIC_*_URL` — social and freelance platform links. Leave blank to hide an icon.
- `RESEND_API_KEY` — the contact and consultation forms POST to `/api/contact`, which sends
  email via [Resend](https://resend.com). **Without this key, submissions are logged server-side
  only** and the UI still shows a success state. Get a free key, verify a sending domain, then set
  `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL`.

## Notable implementation details

- **Dark/light mode** — `next-themes`, defaults to dark, toggle in the navbar and dashboard topbar.
- **Smooth scroll** — Lenis, driven by GSAP's ticker and synced to `ScrollTrigger` (see
  `components/providers/smooth-scroll-provider.tsx`). Automatically disabled for users with
  `prefers-reduced-motion` set.
- **Process page timeline** — the scroll-scrubbed progress line uses GSAP + ScrollTrigger directly.
- **Hero background** — a hand-built Three.js scene (glowing floating shapes, mouse parallax,
  soft glow sprites), code-split via `next/dynamic` so it never blocks initial page load, and
  paused automatically for `prefers-reduced-motion` and background tabs.
- **Live chat widget** — a front-end UI demo with scripted responses. Wire it up to a real
  provider (Intercom, Crisp, Tawk.to) or your own backend for production use.
- **Client dashboard** (`/dashboard`) and **login** (`/login`) — UI demos with mock data, not
  connected to real authentication or a database. `/dashboard` and `/login` are excluded from the
  sitemap and marked `noindex`.
- **SEO** — per-page metadata, Open Graph tags, JSON-LD organization schema, auto-generated
  `sitemap.xml` and `robots.txt`, plus a human-readable `/sitemap` page.

## Deploying

This is a standard Next.js app — it deploys cleanly to Vercel (recommended), or any Node.js host
that supports Next.js. Set your environment variables in your hosting provider before deploying.
