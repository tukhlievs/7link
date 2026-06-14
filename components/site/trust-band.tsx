"use client";

import { motion } from "framer-motion";
import { Lightning } from "@phosphor-icons/react";

const stats = [
  { value: "< 1 c", label: "проверка перехода" },
  { value: "0", label: "лишних кликов" },
  { value: "∞", label: "ссылок и трафика" },
  { value: "24/7", label: "защита от DDoS" },
];

export function TrustBand() {
  return (
    <section className="border-y border-border bg-card/60 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Lightning size={16} weight="fill" className="text-primary" />
          Работает на глобальной сети Cloudflare
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
