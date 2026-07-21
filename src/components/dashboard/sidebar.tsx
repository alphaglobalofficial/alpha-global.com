"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type DashboardTab = "overview" | "projects" | "invoices" | "files" | "messages";

const NAV_ITEMS: { id: DashboardTab; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "invoices", label: "Invoices", icon: Receipt },
  { id: "files", label: "Files", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare },
];

export function DashboardSidebar({
  activeTab,
  onChange,
  mobileOpen,
  onCloseMobile,
}: {
  activeTab: DashboardTab;
  onChange: (tab: DashboardTab) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 56 56" fill="none">
            <path
              d="M28 6 L50 46 L6 46 Z"
              stroke="url(#dashLogoGradient)"
              strokeWidth="4.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="dashLogoGradient" x1="6" y1="46" x2="50" y2="6">
                <stop offset="0%" stopColor="hsl(217 100% 60%)" />
                <stop offset="100%" stopColor="hsl(262 85% 64%)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-semibold tracking-tight">Alpha Global</span>
        </Link>
        <button
          onClick={onCloseMobile}
          aria-label="Close menu"
          className="flex size-8 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <X className="size-4" />
        </button>
      </div>

      <span className="mx-6 rounded-full border border-electric/20 bg-electric/5 px-3 py-1 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-electric">
        Demo Mode
      </span>

      <nav className="mt-8 flex flex-1 flex-col gap-1 px-4">
        {NAV_ITEMS.map((item) => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={cn(
                "relative flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="dashboard-active-tab"
                  className="absolute inset-0 rounded-2xl bg-muted"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <item.icon className="relative size-[18px]" strokeWidth={1.75} />
              <span className="relative">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col gap-1 border-t border-border p-4">
        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <Settings className="size-[18px]" strokeWidth={1.75} />
          Settings
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <LogOut className="size-[18px]" strokeWidth={1.75} />
          Exit demo
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card/30 lg:block">
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onCloseMobile} />
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-full w-72 bg-card"
          >
            {content}
          </motion.aside>
        </div>
      )}
    </>
  );
}
