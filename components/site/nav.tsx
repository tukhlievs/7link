"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { nav } from "@/lib/site-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`mt-3 flex h-14 items-center justify-between rounded-2xl px-3 pr-3 pl-4 transition-all duration-300 ${
            scrolled
              ? "border border-border/80 bg-background/80 shadow-[0_8px_30px_-12px_rgba(37,99,235,0.18)] backdrop-blur-xl"
              : "border border-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-foreground select-none"
          >
            <Logo className="text-primary" />
            <span className="text-[1.05rem]">7Link</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              render={<Link href="/contact" />}
              className="hidden h-10 rounded-full px-5 text-sm sm:inline-flex"
            >
              Защитить сайт
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Меню"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-xl md:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Button
              render={<Link href="/contact" />}
              className="mt-1 h-11 rounded-xl"
              onClick={() => setOpen(false)}
            >
              Защитить сайт
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
