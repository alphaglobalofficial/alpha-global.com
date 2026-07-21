"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckboxField } from "@/components/ui/form-fields";

const STORAGE_KEY = "alpha-global-cookie-consent";

interface ConsentPrefs {
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [showPrefs, setShowPrefs] = React.useState(false);
  const [prefs, setPrefs] = React.useState<ConsentPrefs>({ analytics: true, marketing: false });

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) — skip silently.
    }
  }, []);

  const save = (value: ConsentPrefs & { accepted: boolean }) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // ignore
    }
    setVisible(false);
    setShowPrefs(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-2xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="glass-strong rounded-3xl p-6 shadow-glow-lg">
            {!showPrefs ? (
              <>
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Cookie className="size-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to keep the site running smoothly and to understand how it&apos;s
                    used. Read our{" "}
                    <Link href="/privacy" className="text-foreground underline underline-offset-2">
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button
                    size="sm"
                    variant="gradient"
                    magnetic={false}
                    onClick={() => save({ analytics: true, marketing: true, accepted: true })}
                  >
                    Accept All
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    magnetic={false}
                    onClick={() => save({ analytics: false, marketing: false, accepted: true })}
                  >
                    Reject Non-Essential
                  </Button>
                  <button
                    onClick={() => setShowPrefs(true)}
                    className="ml-auto text-sm font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  >
                    Preferences
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-base font-semibold">Cookie preferences</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <CheckboxField id="cookie-necessary" label="Strictly necessary — always on" checked disabled />
                  <CheckboxField
                    id="cookie-analytics"
                    label="Analytics — helps us understand site usage"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  />
                  <CheckboxField
                    id="cookie-marketing"
                    label="Marketing — personalizes what we show you"
                    checked={prefs.marketing}
                    onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="gradient"
                    magnetic={false}
                    onClick={() => save({ ...prefs, accepted: true })}
                  >
                    Save Preferences
                  </Button>
                  <button
                    onClick={() => setShowPrefs(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
