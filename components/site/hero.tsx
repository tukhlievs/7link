"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, CaretRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/site/dashboard-mockup";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="mesh-light relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-5xl leading-[0.98] font-bold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
          >
            Links, <span className="text-gradient">Protected</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl"
          >
            Verify every click with{" "}
            <span className="font-semibold text-foreground">Cloudflare Turnstile</span>{" "}
            and send{" "}
            <span className="font-semibold text-foreground">real visitors</span>{" "}
            straight to your site.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              render={<Link href="/contact" />}
              className="group h-12 w-full rounded-full px-6 text-[0.95rem] shadow-blue-btn sm:w-auto"
            >
              <ShieldCheck size={18} weight="fill" />
              Protect your site
              <ArrowRight
                size={17}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
            <Button
              variant="outline"
              render={<Link href="/#how" />}
              className="h-12 w-full gap-2 rounded-full border-border bg-card px-3 pr-5 text-[0.95rem] sm:w-auto"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-muted text-primary">
                <CaretRight size={14} weight="bold" />
              </span>
              How it works
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="text-foreground/75">Cloudflare Turnstile</span>
            <span className="text-border">·</span>
            <span>Bot &amp; DDoS protection</span>
            <span className="text-border">·</span>
            <span className="text-foreground/75">Instant redirect</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-3 text-xs text-muted-foreground/70"
          >
            Built on Cloudflare&apos;s global edge network.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="mx-auto mt-16 max-w-5xl px-4 sm:px-6"
      >
        <div className="relative">
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <DashboardMockup />
        </div>
      </motion.div>
    </section>
  );
}
