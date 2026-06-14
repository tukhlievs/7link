"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, CursorClick } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const ProtectionScene = dynamic(
  () => import("@/components/three/protection-scene"),
  { ssr: false }
);

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="mesh-light relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 font-mono text-xs tracking-widest text-primary uppercase"
          >
            <ShieldCheck size={15} weight="fill" />
            Cloudflare Turnstile
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Защищаем ваш сайт.
            <br />
            <span className="text-primary">Без единого лишнего клика.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            7Link проверяет трафик через Cloudflare Turnstile за доли секунды и
            мгновенно перенаправляет настоящих посетителей на ваш сайт.
            Посетителю остаётся одно действие — подтвердить проверку.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/contact" />}
              className="group h-12 rounded-full px-6 text-[0.95rem]"
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
              className="h-12 rounded-full border-border px-6 text-[0.95rem]"
            >
              Как это работает
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <CursorClick size={18} weight="duotone" className="text-primary" />
              Один клик посетителя
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden sm:inline">Проверка меньше секунды</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-[340px] w-full sm:h-[460px] lg:h-[520px]"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <ProtectionScene />
        </motion.div>
      </div>
    </section>
  );
}
