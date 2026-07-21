"use client";

import * as React from "react";
import {
  FolderKanban,
  Receipt,
  MessageSquare,
  Wallet,
  Download,
  FileText,
  FileImage,
  FileArchive,
  Send,
} from "lucide-react";
import { DashboardSidebar, type DashboardTab } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import {
  DashboardStatCard,
  ProgressBar,
  MiniBarChart,
  StatusBadge,
} from "@/components/dashboard/widgets";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const PROJECTS = [
  {
    name: "Prime Cart — Category Expansion",
    phase: "Development",
    progress: 65,
    milestone: "Checkout QA — Aug 2, 2026",
  },
  {
    name: "Lumen Goods — Homepage Refresh",
    phase: "Testing",
    progress: 85,
    milestone: "Launch — Jul 28, 2026",
  },
  {
    name: "Atlas Works — SEO Retainer",
    phase: "Support",
    progress: 100,
    milestone: "Monthly report — Aug 1, 2026",
  },
];

const INVOICES: { id: string; project: string; amount: string; date: string; status: "Paid" | "Pending" | "Overdue" }[] = [
  { id: "INV-1043", project: "Prime Cart", amount: "$750", date: "Aug 1, 2026", status: "Pending" },
  { id: "INV-1042", project: "Prime Cart", amount: "$750", date: "Jul 10, 2026", status: "Paid" },
  { id: "INV-1041", project: "Lumen Goods", amount: "$1,200", date: "Jul 5, 2026", status: "Paid" },
  { id: "INV-1039", project: "Atlas Works", amount: "$300", date: "Jun 1, 2026", status: "Paid" },
];

const FILES = [
  { name: "Brand-Guidelines-v2.pdf", size: "4.2 MB", icon: FileText },
  { name: "Homepage-Wireframes.fig", size: "8.1 MB", icon: FileImage },
  { name: "Product-Photography-Batch1.zip", size: "128 MB", icon: FileArchive },
  { name: "SEO-Audit-Report-June.pdf", size: "2.6 MB", icon: FileText },
  { name: "Contract-ProjectAgreement.pdf", size: "540 KB", icon: FileText },
];

const MESSAGES = [
  { from: "team", text: "Hey! Homepage refresh is in testing now — should be ready to launch by the 28th.", time: "10:14 AM" },
  { from: "client", text: "Sounds great. Can we get one more look at the mobile nav before launch?", time: "10:20 AM" },
  { from: "team", text: "Of course — I'll share a preview link by end of day today.", time: "10:22 AM" },
];

const CHART_DATA = [
  { label: "Feb", value: 12 },
  { label: "Mar", value: 18 },
  { label: "Apr", value: 15 },
  { label: "May", value: 24 },
  { label: "Jun", value: 21 },
  { label: "Jul", value: 27 },
];

function OverviewTab() {
  return (
    <div className="flex flex-col gap-8">
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <RevealItem>
          <DashboardStatCard label="Active Projects" value="3" icon={FolderKanban} change="+1 this month" />
        </RevealItem>
        <RevealItem>
          <DashboardStatCard label="Pending Invoices" value="1" icon={Receipt} />
        </RevealItem>
        <RevealItem>
          <DashboardStatCard label="Open Conversations" value="2" icon={MessageSquare} />
        </RevealItem>
        <RevealItem>
          <DashboardStatCard label="Total Spend (YTD)" value="$8,450" icon={Wallet} change="+12%" />
        </RevealItem>
      </RevealGroup>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="rounded-3xl border border-border bg-card/40 p-6">
          <h3 className="font-semibold">Project progress</h3>
          <div className="mt-6 flex flex-col gap-6">
            {PROJECTS.map((project) => (
              <div key={project.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-muted-foreground">{project.progress}%</span>
                </div>
                <ProgressBar value={project.progress} className="mt-2.5" />
                <p className="mt-2 text-xs text-muted-foreground">
                  {project.phase} · Next: {project.milestone}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-border bg-card/40 p-6">
          <h3 className="font-semibold">Tasks completed</h3>
          <div className="mt-6">
            <MiniBarChart data={CHART_DATA} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <RevealItem key={project.name} className="rounded-3xl border border-border bg-card/40 p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
              {project.phase}
            </span>
            <span className="text-sm text-muted-foreground">{project.progress}%</span>
          </div>
          <h3 className="mt-4 font-semibold">{project.name}</h3>
          <ProgressBar value={project.progress} className="mt-4" />
          <p className="mt-3 text-xs text-muted-foreground">Next: {project.milestone}</p>
          <button className="mt-5 text-sm font-medium text-electric underline underline-offset-2">
            View updates
          </button>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function InvoicesTab() {
  return (
    <Reveal className="overflow-x-auto rounded-3xl border border-border bg-card/40 p-2">
      <table className="w-full min-w-[560px] border-separate border-spacing-0">
        <thead>
          <tr className="text-left text-xs text-muted-foreground">
            <th className="px-5 py-4 font-medium">Invoice</th>
            <th className="px-5 py-4 font-medium">Project</th>
            <th className="px-5 py-4 font-medium">Amount</th>
            <th className="px-5 py-4 font-medium">Date</th>
            <th className="px-5 py-4 font-medium">Status</th>
            <th className="px-5 py-4" />
          </tr>
        </thead>
        <tbody>
          {INVOICES.map((invoice) => (
            <tr key={invoice.id} className="text-sm">
              <td className="rounded-l-2xl px-5 py-4 font-mono text-xs">{invoice.id}</td>
              <td className="px-5 py-4">{invoice.project}</td>
              <td className="px-5 py-4 font-medium">{invoice.amount}</td>
              <td className="px-5 py-4 text-muted-foreground">{invoice.date}</td>
              <td className="px-5 py-4">
                <StatusBadge status={invoice.status} />
              </td>
              <td className="rounded-r-2xl px-5 py-4">
                <button
                  aria-label={`Download invoice ${invoice.id}`}
                  className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground"
                >
                  <Download className="size-3.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

function FilesTab() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FILES.map((file) => (
        <RevealItem
          key={file.name}
          className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5"
        >
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
            <file.icon className="size-5" strokeWidth={1.75} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{file.size}</p>
          </div>
          <button
            aria-label={`Download ${file.name}`}
            className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground"
          >
            <Download className="size-3.5" />
          </button>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function MessagesTab() {
  const [draft, setDraft] = React.useState("");
  return (
    <Reveal className="flex h-[520px] flex-col rounded-3xl border border-border bg-card/40">
      <div className="flex items-center gap-3 border-b border-border p-5">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-electric text-sm font-semibold text-white">
          AG
        </div>
        <div>
          <p className="text-sm font-semibold">Alpha Global Team</p>
          <p className="text-xs text-muted-foreground">Project: Lumen Goods — Homepage Refresh</p>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-5">
        {MESSAGES.map((message, i) => (
          <div
            key={i}
            className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
              message.from === "team" ? "bg-muted" : "ml-auto bg-gradient-electric text-white"
            }`}
          >
            {message.text}
            <p
              className={`mt-1 text-[10px] ${
                message.from === "team" ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              {message.time}
            </p>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDraft("");
        }}
        className="flex items-center gap-2 border-t border-border p-4"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message… (demo only)"
          className="flex-1 rounded-full bg-muted/60 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
        />
        <button
          type="submit"
          aria-label="Send"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
        >
          <Send className="size-4" />
        </button>
      </form>
    </Reveal>
  );
}

const TAB_LABELS: Record<DashboardTab, string> = {
  overview: "Overview",
  projects: "Projects",
  invoices: "Invoices",
  files: "Files",
  messages: "Messages",
};

export function DashboardClient() {
  const [activeTab, setActiveTab] = React.useState<DashboardTab>("overview");
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar
        activeTab={activeTab}
        onChange={(tab) => {
          setActiveTab(tab);
          setMobileNavOpen(false);
        }}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />
      <div className="flex min-h-screen flex-1 flex-col">
        <DashboardTopbar onOpenMobile={() => setMobileNavOpen(true)} />
        <main className="flex-1 p-5 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">{TAB_LABELS[activeTab]}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome back — here&apos;s what&apos;s happening across your projects.
            </p>
          </div>
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "invoices" && <InvoicesTab />}
          {activeTab === "files" && <FilesTab />}
          {activeTab === "messages" && <MessagesTab />}
        </main>
      </div>
    </div>
  );
}
