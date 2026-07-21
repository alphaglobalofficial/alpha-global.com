"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/widgets/theme-toggle";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Alpha Global home">
      <svg width="30" height="30" viewBox="0 0 56 56" fill="none" className="shrink-0">
        <path
          d="M28 6 L50 46 L6 46 Z"
          stroke="url(#navLogoGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="navLogoGradient" x1="6" y1="46" x2="50" y2="6">
            <stop offset="0%" stopColor="hsl(217 100% 60%)" />
            <stop offset="100%" stopColor="hsl(262 85% 64%)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">
        {SITE_CONFIG.name}
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || mobileOpen ? "py-3" : "py-6"
      )}
    >
      <div className="container-px mx-auto max-w-[1400px]">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full px-3 transition-all duration-500 sm:pl-6 sm:pr-3",
            (scrolled || mobileOpen) && "glass shadow-card"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Button href="/consultation" size="sm" variant="gradient" className="hidden md:inline-flex">
              Book a Call
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-muted/50 text-foreground lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-px mx-auto mt-3 max-w-[1400px] lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-3xl p-4 shadow-glow-lg">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-2xl px-5 py-3.5 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-border px-5 pt-4">
                <ThemeToggle />
                <Button href="/consultation" variant="gradient" className="flex-1">
                  Book a Free Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
