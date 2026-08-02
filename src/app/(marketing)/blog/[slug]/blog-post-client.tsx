"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container, Section, Badge } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GradientMockFrame } from "@/components/cards";
import { BLOG_POSTS, type BlogPost } from "@/data/blog-posts";

function ContentBlocks({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-6">
      {post.content.map((block, i) => {
        if (block.type === "heading") {
          return (
            <Reveal key={i} delay={0.02}>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{block.text}</h2>
            </Reveal>
          );
        }
        if (block.type === "list") {
          return (
            <Reveal key={i} delay={0.02}>
              <ul className="flex flex-col gap-2.5 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }
        return (
          <Reveal key={i} delay={0.02}>
            <p className="text-[17px] leading-relaxed text-foreground/85">{block.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

export function BlogPostClient({ post }: { post: BlogPost }) {
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Section className="pb-10 pt-40 md:pt-48">
        <Container className="max-w-3xl">
          <Reveal immediate>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to blog
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-xs text-muted-foreground">· {post.readTime}</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-electric text-sm font-semibold text-white">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-xs text-muted-foreground">Alpha Global</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Container className="max-w-3xl">
        <Reveal delay={0.1}>
  <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-border">
    <Image
      src={post.image}
      alt={post.title}
      fill
      priority
      className="object-cover"
    />

    <div
      className="absolute inset-0 opacity-5"
      style={{
        background: `linear-gradient(135deg, ${post.accentFrom}, ${post.accentTo})`,
      }}
    />
  </div>
</Reveal>
      </Container>

      <Section className="max-w-3xl">
        <Container className="max-w-3xl">
          <ContentBlocks post={post} />

          <Reveal className="mt-14 flex flex-col items-center gap-5 rounded-[28px] border border-border bg-muted/20 p-10 text-center">
            <h2 className="text-xl font-medium tracking-tight">Have a project like this in mind?</h2>
            <Button href="/consultation" variant="gradient" icon>
              Book a Free Consultation
            </Button>
          </Reveal>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-muted/20 pt-0">
          <Container className="max-w-3xl">
            <h2 className="text-lg font-semibold">More from the blog</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-electric/30"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                    <p className="mt-1 text-sm font-medium leading-snug">{p.title}</p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
