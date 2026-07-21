"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow, GlowOrb, Badge } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, SplitReveal } from "@/components/ui/reveal";
import { GradientMockFrame } from "@/components/cards";
import { BLOG_POSTS } from "@/data/blog-posts";

function BlogHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <GlowOrb className="-left-40 top-0 -z-10" size={480} />
      <GlowOrb className="-right-40 top-32 -z-10" color="violet" size={420} />
      <Container className="text-center">
        <Reveal immediate>
          <Eyebrow>The blog</Eyebrow>
        </Reveal>
        <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          <SplitReveal text="Notes on building better digital products." />
        </h1>
      </Container>
    </section>
  );
}

export function BlogClient() {
  return (
    <>
      <BlogHero />
      <Section className="pt-6">
        <Container>
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <RevealItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-5">
                  <div className="overflow-hidden rounded-2xl transition-transform duration-700 ease-premium group-hover:scale-[1.02]">
                    <GradientMockFrame accentFrom={post.accentFrom} accentTo={post.accentTo} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Badge>{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-muted-foreground">· {post.readTime}</span>
                    </div>
                    <h2 className="mt-3 flex items-start gap-2 text-xl font-semibold leading-snug tracking-tight">
                      {post.title}
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">By {post.author}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
