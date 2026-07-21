"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Compass, Home, Search } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, GlowOrb } from "@/components/ui/primitives";
import { Button } from "@/components/ui/button";

const QUICK_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Search },
  { label: "Portfolio", href: "/portfolio", icon: Compass },
  { label: "Contact", href: "/contact", icon: Search },
];

export function NotFoundClient() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[100svh] items-center overflow-hidden pt-32">
        <GlowOrb className="-left-32 top-20 -z-10" color="electric" size={480} />
        <GlowOrb className="-right-32 bottom-10 -z-10" color="violet" size={480} />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] opacity-[0.04]"
        />

        <Container className="flex flex-col items-center py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.p
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-gradient text-[7rem] font-semibold leading-none tracking-tighter sm:text-[10rem]"
            >
              404
            </motion.p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl"
          >
            Lost in the digital void.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 max-w-md text-muted-foreground"
          >
            The page you&apos;re looking for doesn&apos;t exist, moved, or never made it past a discovery
            call. Let&apos;s get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9"
          >
            <Button href="/" variant="gradient" size="lg" icon>
              Back to Homepage
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-14 flex flex-wrap justify-center gap-3"
          >
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-electric/30 hover:text-foreground"
              >
                <link.icon className="size-3.5" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
