"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightning,
  Infinity as InfinityIcon,
  Browsers,
  Prohibit,
  Robot,
} from "@phosphor-icons/react";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function Features() {
  return (
    <section id="features" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Преимущества
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Защита, которая не мешает посетителям
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-soft lg:col-span-2"
          >
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck size={26} weight="duotone" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Безлимитная защита от ботов и DDoS
              </h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                Постоянный щит от автоматического трафика и атак на ваши ссылки —
                без ограничений по объёму.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              {["203.0.113.42", "198.51.100.17", "192.0.2.88"].map((ip) => (
                <div
                  key={ip}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2"
                >
                  <Robot size={15} weight="duotone" className="text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">{ip}</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-destructive">
                    <Prohibit size={12} weight="bold" />
                    Заблокирован
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-soft"
          >
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <InfinityIcon size={26} weight="bold" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Безлимит ссылок
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                Создавайте сколько угодно защищённых ссылок без ограничений.
              </p>
            </div>
            <p className="mt-6 font-mono text-5xl font-semibold tracking-tight text-primary">
              ∞
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-soft"
          >
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Lightning size={26} weight="duotone" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Минимум кликов
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                Одно подтверждение Turnstile — и мгновенный переход на сайт.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-mono text-3xl font-semibold tracking-tight text-foreground">
                &lt; 1 c
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-soft lg:col-span-2"
          >
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Browsers size={26} weight="duotone" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                Нет рекламы на весь экран
              </h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                Никаких баннеров и оверлеев между посетителем и вашим сайтом —
                только проверка и переход.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 rounded-xl border border-dashed border-destructive/40 bg-destructive/5 px-4 py-3 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-destructive line-through">
                  <Prohibit size={13} weight="bold" />
                  Реклама на весь экран
                </span>
              </div>
              <ArrowChip />
              <div className="flex-1 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Lightning size={13} weight="fill" />
                  Сразу на сайт
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowChip() {
  return (
    <span className="hidden shrink-0 text-muted-foreground sm:block">
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path
          d="M1 7h18m0 0-5-5m5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
