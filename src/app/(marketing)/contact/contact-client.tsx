"use client";

import * as React from "react";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Section, Eyebrow, GlowOrb, GlassCard } from "@/components/ui/primitives";
import { Reveal, SplitReveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { MapEmbed } from "@/components/sections/contact/map-embed";
import { InstagramIcon, LinkedinIcon, XIcon, FacebookIcon, WhatsAppIcon } from "@/components/icons/social-icons";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const SOCIALS = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SOCIAL_LINKS.twitter, label: "X (Twitter)", Icon: XIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
];

function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>Get in touch</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Let's talk about your project." />
        </h1>
        <Reveal delay={0.5} className="mx-auto mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            Fill out the form, WhatsApp us, or send an email — whichever&apos;s easiest for you.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function ContactClient() {
  return (
    <>
      <ContactHero />
      <Section className="pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
            <Reveal>
              <div className="glass-strong rounded-[32px] p-8 sm:p-10">
                <h2 className="text-xl font-semibold">Send us a message</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  We usually reply within a few hours, during business hours in Pakistan Standard
                  Time (PKT).
                </p>
                <div className="mt-8">
                  <ContactForm variant="contact" />
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <GlassCard hover={false} className="!p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Direct contact
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE_CONFIG.email}`}
target="_blank"
rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors hover:text-electric"
                    >
                      <Mail className="size-4 shrink-0" />
                      {SITE_CONFIG.email}
                    </a>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors hover:text-electric"
                    >
                      <WhatsAppIcon className="size-4 shrink-0" />
                      WhatsApp us
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="size-4 shrink-0" />
                      {SITE_CONFIG.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="size-4 shrink-0" />
                      Mon–Sat, 10am–7pm PKT
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                    {SOCIALS.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-electric/40 hover:text-electric"
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[28px] border border-electric/20 bg-electric/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-electric text-white">
                      <MessageCircle className="size-[18px]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Prefer to talk it through?</p>
                      <p className="text-xs text-muted-foreground">Book a free 30-minute call</p>
                    </div>
                  </div>
                  <a
                    href="/consultation"
                    className="mt-4 inline-flex text-sm font-medium text-electric underline underline-offset-2"
                  >
                    Book a Free Consultation →
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <MapEmbed query={SITE_CONFIG.location} className="aspect-[4/3]" />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
