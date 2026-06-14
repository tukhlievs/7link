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
import { TiltCard } from "@/components/site/tilt-card";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      {children}
    </span>
  );
}

export function Features() {
  return (
    <section id="features" className="relative px-4 py-32 sm:px-6 sm:py-44">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Advantages
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Protection that never gets in the way
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <TiltCard className="h-full">
              <div className="card-designer flex h-full flex-col justify-between rounded-2xl p-8">
                <div>
                  <Icon>
                    <ShieldCheck size={26} weight="duotone" />
                  </Icon>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    Unlimited bot &amp; DDoS protection
                  </h3>
                  <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                    A constant shield against automated traffic and attacks on
                    your links — with no volume limits.
                  </p>
                </div>
                <div className="mt-7 space-y-2">
                  {["203.0.113.42", "198.51.100.17", "192.0.2.88"].map((ip) => (
                    <div
                      key={ip}
                      className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-3.5 py-2.5"
                    >
                      <Robot size={15} weight="duotone" className="text-muted-foreground" />
                      <span className="font-mono text-xs text-muted-foreground">{ip}</span>
                      <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-destructive">
                        <Prohibit size={12} weight="bold" />
                        Blocked
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="h-full">
              <div className="card-designer flex h-full flex-col justify-between rounded-2xl p-8">
                <div>
                  <Icon>
                    <InfinityIcon size={26} weight="bold" />
                  </Icon>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    Unlimited links
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                    Create as many protected links as you want, with no limits.
                  </p>
                </div>
                <p className="mt-7 font-mono text-5xl font-semibold tracking-tight text-gradient">
                  ∞
                </p>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard className="h-full">
              <div className="card-designer flex h-full flex-col justify-between rounded-2xl p-8">
                <div>
                  <Icon>
                    <Lightning size={26} weight="duotone" />
                  </Icon>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    Minimal clicks
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                    One Turnstile confirmation — and an instant jump to your site.
                  </p>
                </div>
                <div className="mt-7">
                  <p className="font-mono text-3xl font-semibold tracking-tight text-foreground">
                    &lt; 1 c
                  </p>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-2/3 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <TiltCard className="h-full">
              <div className="card-designer flex h-full flex-col justify-between rounded-2xl p-8">
                <div>
                  <Icon>
                    <Browsers size={26} weight="duotone" />
                  </Icon>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    No full-screen ads
                  </h3>
                  <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                    No banners or overlays between the visitor and your site —
                    just verification and redirect.
                  </p>
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex-1 rounded-xl border border-dashed border-destructive/40 bg-destructive/5 px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-destructive line-through">
                      <Prohibit size={13} weight="bold" />
                      Full-screen ads
                    </span>
                  </div>
                  <ArrowChip />
                  <div className="flex-1 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      <Lightning size={13} weight="fill" />
                      Straight to the site
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
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
