"use client";

import { motion } from "framer-motion";
import {
  Check,
  Cloud,
  Robot,
  Prohibit,
  ArrowRight,
  CheckCircle,
  Cursor,
} from "@phosphor-icons/react";
import { TiltCard } from "@/components/site/tilt-card";

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent to-card p-7 sm:min-h-[340px] sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.10) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(120% 100% at 50% 0%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 0%, black 40%, transparent 80%)",
        }}
      />
      <TiltCard className="relative w-full max-w-md">{children}</TiltCard>
    </div>
  );
}

function TrafficCard() {
  return (
    <div className="card-designer w-full rounded-2xl p-6">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3.5">
        <span className="truncate font-mono text-base font-medium text-foreground">
          7l.ink/launch
        </span>
        <span className="size-2.5 shrink-0 rounded-full bg-primary" />
      </div>
      <div className="mt-4 space-y-2.5">
        <div className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3">
          <Cursor size={20} weight="duotone" className="text-primary" />
          <span className="text-sm font-medium text-foreground">Visitor</span>
          <ArrowRight size={16} weight="bold" className="ml-auto text-muted-foreground" />
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3">
          <Robot size={20} weight="duotone" className="text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Bot</span>
          <ArrowRight size={16} weight="bold" className="ml-auto text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function TurnstileCard() {
  return (
    <div className="card-designer w-full rounded-2xl p-6">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Check size={16} weight="bold" />
        </span>
        <span className="text-base font-medium text-foreground">Verified human</span>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 text-muted-foreground">
          <Cloud size={18} weight="fill" />
          <span className="text-xs">Turnstile</span>
        </span>
      </div>
      <p className="mt-3 px-1 font-mono text-[11px] tracking-wide text-muted-foreground">
        Cloudflare check · Privacy · Terms
      </p>
    </div>
  );
}

function BlockedCard() {
  return (
    <div className="card-designer w-full rounded-2xl p-6">
      <div className="flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <Prohibit size={24} weight="bold" />
        </span>
        <div>
          <p className="text-base font-medium text-foreground">Access blocked</p>
          <p className="text-sm text-muted-foreground">Automated traffic</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between px-1">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Robot size={16} weight="duotone" />
          Bots today
        </span>
        <span className="font-mono text-base font-semibold text-foreground">9,312</span>
      </div>
    </div>
  );
}

function RedirectCard() {
  return (
    <div className="card-designer w-full rounded-2xl p-6">
      <div className="flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <CheckCircle size={24} weight="fill" />
        </span>
        <div>
          <p className="text-base font-medium text-foreground">Redirected</p>
          <p className="font-mono text-sm text-muted-foreground">→ yoursite.com</p>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-full rounded-full bg-primary" />
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Traffic hits the link",
    text: "A visitor or bot opens your protected 7Link URL. Every click goes through verification.",
    visual: <TrafficCard />,
  },
  {
    n: "02",
    title: "Cloudflare Turnstile verifies",
    text: "Turnstile analyzes behavior in a fraction of a second. For a real person it is one confirmation — most often invisible.",
    visual: <TurnstileCard />,
  },
  {
    n: "03",
    title: "Bots and attacks are stopped",
    text: "Automated traffic and DDoS requests are stopped at this step and never reach your site.",
    visual: <BlockedCard />,
  },
  {
    n: "04",
    title: "Instant redirect",
    text: "The verified visitor lands on your site right away — no ads, no waiting, no extra clicks.",
    visual: <RedirectCard />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-28 sm:px-6 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Four steps between a bot and your site
          </h2>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.n}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <span className="font-mono text-sm font-medium text-primary">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
                    {step.text}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <Stage>{step.visual}</Stage>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
