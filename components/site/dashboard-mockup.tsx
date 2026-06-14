"use client";

import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Plus,
  LinkSimple,
  ChartBar,
  GearSix,
  House,
  Users,
  TrendUp,
  CaretUpDown,
} from "@phosphor-icons/react";

const navItems = [
  { icon: House, label: "Overview", active: false },
  { icon: LinkSimple, label: "Links", active: true },
  { icon: ChartBar, label: "Analytics", active: false },
  { icon: ShieldCheck, label: "Protection", active: false },
  { icon: Users, label: "Team", active: false },
];

const stats = [
  { label: "Total clicks", value: "128,540", delta: "+12.5%", note: "Trending up this month" },
  { label: "Bots blocked", value: "9,312", delta: "+8.1%", note: "Blocked this period" },
  { label: "Active links", value: "1,234", delta: "+4.5%", note: "Across your workspace" },
  { label: "Block rate", value: "6.8%", delta: "+0.4%", note: "Steady performance" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
};

const up: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const left: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function AreaChart() {
  return (
    <svg viewBox="0 0 720 180" className="h-36 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="fill7l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,140 C70,120 120,128 180,100 C240,72 300,116 360,86 C420,56 480,104 540,68 C600,40 660,72 720,46 L720,180 L0,180 Z"
        fill="url(#fill7l)"
      />
      <path
        d="M0,140 C70,120 120,128 180,100 C240,72 300,116 360,86 C420,56 480,104 540,68 C600,40 660,72 720,46"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0,158 C80,150 140,154 200,144 C260,134 320,150 380,140 C440,130 500,146 560,134 C620,122 670,132 720,124"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 5"
      />
    </svg>
  );
}

export function DashboardMockup() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="shadow-product overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
        <span className="size-3 rounded-full bg-border" />
        <span className="size-3 rounded-full bg-border" />
        <span className="size-3 rounded-full bg-border" />
        <div className="mx-auto flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[11px] text-muted-foreground">
            app.7link.click
          </span>
        </div>
      </div>

      <div className="flex">
        <motion.aside
          variants={left}
          className="hidden w-48 shrink-0 border-r border-border p-3 sm:block"
        >
          <div className="flex items-center justify-between rounded-lg px-2 py-1.5">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/12 text-primary">
                <ShieldCheck size={15} weight="fill" />
              </span>
              <span className="text-sm font-semibold tracking-tight">7Link Inc.</span>
            </div>
            <CaretUpDown size={14} className="text-muted-foreground" />
          </div>
          <nav className="mt-4 space-y-0.5">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                    item.active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <ItemIcon size={16} weight={item.active ? "fill" : "regular"} />
                  {item.label}
                </div>
              );
            })}
          </nav>
          <p className="mt-5 px-2.5 text-[10px] font-medium tracking-wider text-muted-foreground/70 uppercase">
            Resources
          </p>
          <div className="mt-1.5 space-y-0.5">
            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] text-muted-foreground">
              <GearSix size={16} />
              Settings
            </div>
          </div>
        </motion.aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <motion.div variants={up} className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                Dashboard
              </h3>
              <p className="text-xs text-muted-foreground">
                Protection active on all links
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-blue-btn">
              <Plus size={13} weight="bold" />
              Quick Create
            </span>
          </motion.div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={up}
                className="rounded-xl border border-border bg-background p-3.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    <TrendUp size={10} weight="bold" />
                    {stat.delta}
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">{stat.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={up}
            className="mt-3 rounded-xl border border-border bg-background p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  Traffic overview
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Clicks vs. blocked, last 3 months
                </p>
              </div>
              <div className="hidden items-center gap-1 rounded-lg border border-border bg-muted/40 p-0.5 sm:flex">
                <span className="rounded-md bg-card px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm">
                  3 months
                </span>
                <span className="px-2.5 py-1 text-[11px] text-muted-foreground">30 days</span>
                <span className="px-2.5 py-1 text-[11px] text-muted-foreground">7 days</span>
              </div>
            </div>
            <div className="mt-3">
              <AreaChart />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
