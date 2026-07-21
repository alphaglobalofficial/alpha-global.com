"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import { InstagramIcon, LinkedinIcon, XIcon, FacebookIcon } from "@/components/icons/social-icons";
import { FOOTER_LINKS, SITE_CONFIG, SOCIAL_LINKS, FREELANCE_PLATFORMS } from "@/lib/constants";
import { Container } from "@/components/ui/primitives";

const SOCIALS = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SOCIAL_LINKS.twitter, label: "X (Twitter)", Icon: XIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
];

function LinkColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-foreground/80 transition-colors hover:text-electric"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex max-w-sm flex-col gap-3 sm:flex-row">
      <label htmlFor="footer-newsletter" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-full border border-border bg-muted/40 px-5 py-3 text-sm outline-none transition-colors focus:border-electric/50"
      />
      <button
        type="submit"
        className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform active:scale-95"
      >
        {status === "success" ? "Subscribed" : "Subscribe"}
        <Send className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
                <path
                  d="M28 6 L50 46 L6 46 Z"
                  stroke="url(#footerLogoGradient)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="footerLogoGradient" x1="6" y1="46" x2="50" y2="6">
                    <stop offset="0%" stopColor="hsl(217 100% 60%)" />
                    <stop offset="100%" stopColor="hsl(262 85% 64%)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-semibold tracking-tight">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={FREELANCE_PLATFORMS.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-electric/40 hover:text-foreground"
              >
                Also on Fiverr
              </a>
              <a
                href={FREELANCE_PLATFORMS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-electric/40 hover:text-foreground"
              >
                Also on Upwork
              </a>
            </div>

            <h3 className="mt-9 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Stay in the loop
            </h3>
            <NewsletterForm />

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-electric/40 hover:text-electric"
                >
                  <Icon className="size-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <LinkColumn title="Company" links={FOOTER_LINKS.company} />
            <LinkColumn title="Services" links={FOOTER_LINKS.services} />
            <LinkColumn title="Resources" links={FOOTER_LINKS.resources} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. {SITE_CONFIG.location}.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group flex items-center gap-1 text-sm font-medium text-foreground"
            >
              Start a project
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
