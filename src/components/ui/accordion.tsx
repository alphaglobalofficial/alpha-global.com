"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({
  children,
  className,
  type = "single",
  defaultOpen,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple";
  defaultOpen?: string;
}) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    new Set(defaultOpen ? [defaultOpen] : [])
  );

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(type === "multiple" ? prev : []);
      if (prev.has(id)) {
        if (type === "multiple") next.delete(id);
        else return new Set();
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  question,
  children,
  className,
  index,
}: {
  id: string;
  question: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used inside Accordion");
  const isOpen = ctx.openItems.has(id);

  return (
    <div className={cn("border-b border-border py-2", className)}>
      <button
        type="button"
        onClick={() => ctx.toggle(id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        id={`accordion-trigger-${id}`}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-electric"
      >
        <span className="flex items-baseline gap-4">
          {typeof index === "number" && (
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="text-base font-medium md:text-lg">{question}</span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground"
        >
          <Plus className="size-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${id}`}
            role="region"
            aria-labelledby={`accordion-trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-0 pr-12 text-muted-foreground md:pl-10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
