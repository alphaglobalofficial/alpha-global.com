"use client";

import * as React from "react";
import { Bell, Menu, Search } from "lucide-react";
import { ThemeToggle } from "@/components/widgets/theme-toggle";

export function DashboardTopbar({ onOpenMobile }: { onOpenMobile: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-5 py-4 backdrop-blur-xl sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          aria-label="Open menu"
          className="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <Menu className="size-[18px]" />
        </button>
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search projects, invoices, files…"
            className="w-72 rounded-full border border-border bg-muted/40 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-electric/40"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="relative flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground"
        >
          <Bell className="size-[18px]" />
          <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-electric" />
        </button>
        <ThemeToggle />
        <div className="flex items-center gap-2.5 rounded-full border border-border py-1.5 pl-1.5 pr-3.5">
          <div className="flex size-7 items-center justify-center rounded-full bg-gradient-electric text-xs font-semibold text-white">
            HR
          </div>
          <span className="hidden text-sm font-medium sm:inline">Client Preview</span>
        </div>
      </div>
    </header>
  );
}
