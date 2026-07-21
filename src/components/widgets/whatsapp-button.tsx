"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/social-icons";

export function WhatsAppButton() {
  const [hint, setHint] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent(
    "Hi Alpha Global! I'd like to talk about a project."
  );

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-3">
      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            className="glass-strong hidden rounded-2xl px-4 py-2.5 text-sm shadow-card sm:block"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHint(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <WhatsAppIcon className="relative size-7" />
      </motion.a>
    </div>
  );
}
