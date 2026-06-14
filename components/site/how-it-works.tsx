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

function TrafficCard() {
  return (
    <div className="card-designer w-full max-w-sm rounded-2xl p-5">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
        <span className="font-mono text-sm font-medium text-foreground">
          7l.ink/launch
        </span>
        <span className="size-2 rounded-full bg-primary" />
      </div>
      <div className="mt-4 space-y-2.5">
        <div className="flex items-center gap-3 rounded-lg bg-muted/60 px-3 py-2">
          <Cursor size={18} weight="duotone" className="text-primary" />
          <span className="text-sm text-foreground">Посетитель</span>
          <ArrowRight size={14} weight="bold" className="ml-auto text-muted-foreground" />
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-muted/60 px-3 py-2">
          <Robot size={18} weight="duotone" className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Бот</span>
          <ArrowRight size={14} weight="bold" className="ml-auto text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function TurnstileCard() {
  return (
    <div className="card-designer w-full max-w-sm rounded-2xl p-5">
      <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5">
        <div className="flex items-center gap-3">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Check size={14} weight="bold" />
          </span>
          <span className="text-sm font-medium text-foreground">Вы человек</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Cloud size={16} weight="fill" />
          <span className="text-[11px]">Turnstile</span>
        </div>
      </div>
      <p className="mt-2.5 px-1 font-mono text-[10px] tracking-wide text-muted-foreground">
        Проверка Cloudflare · Конфиденциальность · Условия
      </p>
    </div>
  );
}

function BlockedCard() {
  return (
    <div className="card-designer w-full max-w-sm rounded-2xl p-5">
      <div className="flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3.5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
          <Prohibit size={20} weight="bold" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Доступ заблокирован</p>
          <p className="text-xs text-muted-foreground">Автоматический трафик</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-1">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Robot size={14} weight="duotone" />
          Ботов сегодня
        </span>
        <span className="font-mono text-sm font-semibold text-foreground">9 312</span>
      </div>
    </div>
  );
}

function RedirectCard() {
  return (
    <div className="card-designer w-full max-w-sm rounded-2xl p-5">
      <div className="flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3.5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
          <CheckCircle size={20} weight="fill" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Перенаправлено</p>
          <p className="font-mono text-xs text-muted-foreground">→ yoursite.com</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-full rounded-full bg-primary" />
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Трафик приходит на ссылку",
    text: "Посетитель или бот открывает вашу защищённую ссылку 7Link. Каждый переход попадает на проверку.",
    visual: <TrafficCard />,
  },
  {
    n: "02",
    title: "Cloudflare Turnstile проверяет",
    text: "Turnstile анализирует поведение за доли секунды. Настоящему человеку остаётся одно подтверждение, чаще всего — невидимое.",
    visual: <TurnstileCard />,
  },
  {
    n: "03",
    title: "Боты и атаки отсекаются",
    text: "Автоматический трафик и DDoS-запросы останавливаются на этом шаге и не доходят до вашего сайта.",
    visual: <BlockedCard />,
  },
  {
    n: "04",
    title: "Мгновенный редирект",
    text: "Проверенный посетитель сразу попадает на ваш сайт — без рекламы, ожидания и лишних кликов.",
    visual: <RedirectCard />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-32 sm:px-6 sm:py-44">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Как это работает
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Четыре шага между ботом и вашим сайтом
          </h2>
        </div>

        <div className="mt-20 space-y-28">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.n}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                  initial={{ opacity: 0, y: 32, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex justify-center [perspective:1200px] ${
                    reversed ? "lg:order-1 lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <TiltCard>{step.visual}</TiltCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
