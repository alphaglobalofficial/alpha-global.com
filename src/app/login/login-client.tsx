"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, Mail } from "lucide-react";
import { GlowOrb } from "@/components/ui/primitives";
import { Input, FieldLabel } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

export function LoginClient() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 700);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <GlowOrb className="-left-32 top-10" color="electric" size={480} />
      <GlowOrb className="-right-32 bottom-10" color="violet" size={480} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative w-full max-w-md rounded-[32px] p-8 sm:p-10"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
            <path
              d="M28 6 L50 46 L6 46 Z"
              stroke="url(#loginLogoGradient)"
              strokeWidth="4.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="loginLogoGradient" x1="6" y1="46" x2="50" y2="6">
                <stop offset="0%" stopColor="hsl(217 100% 60%)" />
                <stop offset="100%" stopColor="hsl(262 85% 64%)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-semibold tracking-tight">Alpha Global</span>
        </Link>

        <h1 className="mt-8 text-2xl font-semibold tracking-tight">Client Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to view your project dashboard.{" "}
          <span className="text-electric">This is a UI demo</span> — any details will work.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <FieldLabel htmlFor="login-email">Email address</FieldLabel>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="login-email" type="email" required placeholder="you@company.com" className="pl-11" />
            </div>
          </div>
          <div>
            <FieldLabel htmlFor="login-password">Password</FieldLabel>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="login-password"
                type="password"
                required
                placeholder="••••••••"
                className="pl-11"
              />
            </div>
          </div>

          <Button type="submit" variant="gradient" size="lg" disabled={loading} className="mt-2 w-full">
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need an account?{" "}
          <Link href="/consultation" className="text-electric underline underline-offset-2">
            Start a project
          </Link>{" "}
          to get dashboard access.
        </p>
      </motion.div>
    </main>
  );
}
