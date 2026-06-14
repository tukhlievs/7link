"use client";

import { motion } from "framer-motion";
import {
  Browsers,
  Lightning,
  Infinity as InfinityIcon,
  ShieldCheck,
} from "@phosphor-icons/react";

const features = [
  {
    icon: Browsers,
    title: "Нет рекламы на весь экран",
    text: "Никаких баннеров и оверлеев между посетителем и вашим сайтом. Только проверка и переход.",
  },
  {
    icon: Lightning,
    title: "Минимум кликов, быстрый редирект",
    text: "Посетитель подтверждает Turnstile один раз и мгновенно оказывается на нужной странице.",
  },
  {
    icon: InfinityIcon,
    title: "Безлимитное создание ссылок",
    text: "Создавайте сколько угодно защищённых ссылок без ограничений по количеству.",
  },
  {
    icon: ShieldCheck,
    title: "Защита от ботов и DDoS",
    text: "Безлимитный фильтр автоматического трафика и постоянный щит от атак на ваши ссылки.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Преимущества
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Защита, которая не мешает посетителям
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(20,100,60,0.4)]"
              >
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0" />
                <span className="relative flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={28} weight="duotone" />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
