"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Prohibit,
  Lightning,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: Globe,
    title: "Трафик приходит",
    text: "Посетитель или бот открывает вашу защищённую ссылку 7Link.",
  },
  {
    icon: ShieldCheck,
    title: "Turnstile проверяет",
    text: "Cloudflare Turnstile анализирует запрос за доли секунды.",
  },
  {
    icon: Prohibit,
    title: "Боты остановлены",
    text: "Автоматические запросы и DDoS-атаки отсекаются на этом шаге.",
  },
  {
    icon: Lightning,
    title: "Мгновенный редирект",
    text: "Настоящий посетитель сразу попадает на ваш сайт.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [22, 0, -12]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.5]);
  const lineScale = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);

  return (
    <section
      id="how"
      ref={ref}
      className="mesh-ink grain relative overflow-hidden px-4 py-28 text-ink-foreground sm:px-6 sm:py-36"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-widest text-glow uppercase">
            Как это работает
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Четыре шага между ботом и вашим сайтом
          </h2>
          <p className="mt-5 text-base text-pretty text-ink-muted sm:text-lg">
            От открытия ссылки до перехода на сайт проходит меньше секунды.
            Лишних экранов и ожидания нет.
          </p>
        </div>

        <div className="mt-20 [perspective:1400px]">
          <motion.div
            style={{ rotateX, opacity, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="absolute top-[3.25rem] right-8 left-8 hidden h-px lg:block">
              <div className="ring-line h-full w-full opacity-40" />
              <motion.div
                style={{ scaleX: lineScale }}
                className="ring-line absolute inset-0 h-full origin-left"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40, rotateY: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative rounded-3xl border border-ink-border bg-ink-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-glow/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-glow/12 text-glow">
                        <Icon size={26} weight="duotone" />
                      </span>
                      <span className="font-mono text-sm text-ink-muted">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
