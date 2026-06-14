"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/site/dashboard-mockup";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.85", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.32], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.32], [0.94, 1]);

  return (
    <section className="mesh-light relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 font-mono text-xs tracking-wide text-primary"
          >
            <ShieldCheck size={15} weight="fill" />
            Защита от ботов и DDoS на Cloudflare Turnstile
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl leading-[1.04] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-[3.75rem]"
          >
            Защита ссылок, которая пропускает{" "}
            <span className="text-primary">только людей</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            7Link проверяет каждый переход через Cloudflare Turnstile за доли
            секунды и мгновенно отправляет настоящего посетителя на ваш сайт —
            без рекламы и лишних кликов.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              render={<Link href="/contact" />}
              className="group h-12 w-full rounded-full px-6 text-[0.95rem] sm:w-auto"
            >
              Защитить сайт
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
            <Button
              variant="outline"
              render={<Link href="/#how" />}
              className="h-12 w-full rounded-full border-border px-6 text-[0.95rem] sm:w-auto"
            >
              Как это работает
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 [perspective:1600px]"
      >
        <motion.div
          ref={frameRef}
          style={{ rotateX, scale, transformOrigin: "center top" }}
          className="relative"
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <DashboardMockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
