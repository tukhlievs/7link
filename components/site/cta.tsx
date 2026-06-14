"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "/contact";

export function CallToAction() {
  return (
    <section className="px-4 pb-28 sm:px-6 sm:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mesh-ink grain relative mx-auto max-w-6xl overflow-hidden rounded-4xl px-8 py-16 text-center text-ink-foreground sm:px-16 sm:py-24"
      >
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Ready to protect your site?
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-base text-pretty text-ink-muted sm:text-lg">
          Connect 7Link and let only real visitors through — fast, with no ads
          and no extra clicks.
        </p>
        <div className="relative mt-9 flex justify-center">
          <Button
            render={<a href={appUrl} />}
            className="group h-12 rounded-full bg-glow px-7 text-[0.95rem] text-ink hover:bg-glow-soft"
          >
            Protect your site
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
