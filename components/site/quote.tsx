"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

export function QuoteBlock() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
        >
          <Quotes size={28} weight="fill" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl leading-snug font-medium tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl"
        >
          «7Link защищает ваш сайт — и пользователь не делает{" "}
          <span className="text-primary">ни единого лишнего клика</span>.»
        </motion.blockquote>
      </div>
    </section>
  );
}
