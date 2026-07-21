"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardStatCard({
  label,
  value,
  change,
  icon: Icon,
}: {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card/40 p-6">
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-electric/10 text-electric">
          <Icon className="size-5" strokeWidth={1.75} />
        </div>
        {change && (
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            {change}
          </span>
        )}
      </div>
      <p className="mt-5 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full bg-gradient-electric"
      />
    </div>
  );
}

export function MiniBarChart({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-48 items-end gap-3">
      {data.map((point, i) => (
        <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${(point.value / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full items-end"
            style={{ height: `${(point.value / max) * 100}%` }}
          >
            <div className="w-full rounded-t-lg bg-gradient-to-t from-electric/40 to-violet-400" />
          </motion.div>
          <span className="text-[11px] text-muted-foreground">{point.label}</span>
        </div>
      ))}
    </div>
  );
}

export function StatusBadge({ status }: { status: "Paid" | "Pending" | "Overdue" }) {
  const styles: Record<typeof status, string> = {
    Paid: "bg-emerald-400/10 text-emerald-400",
    Pending: "bg-amber-400/10 text-amber-400",
    Overdue: "bg-red-400/10 text-red-400",
  };
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", styles[status])}>
      {status}
    </span>
  );
}
