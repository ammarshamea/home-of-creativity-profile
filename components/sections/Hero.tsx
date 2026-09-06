"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hummingbird, Wordmark } from "../brand";
import { hero } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[var(--brand-purple)] text-[var(--brand-cream)]"
    >
      <div className="radial-burst pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute -top-24 -start-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(231_153_58/0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-0 end-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgb(43_181_168/0.12),transparent_64%)]" />

      <div className="relative mx-auto flex w-[var(--content)] flex-col items-center py-32 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mb-8 text-[0.72rem] tracking-[0.42em] text-[var(--brand-orange)] uppercase"
        >
          {t(hero.kicker)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.88, x: -24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.05, delay: 0.2, ease }}
        >
          <Hummingbird className="h-[clamp(7.5rem,20vw,12rem)] w-[clamp(12.5rem,32vw,20rem)]" />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-8"
        >
          <Wordmark invert size="lg" />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.7, ease }}
          className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-white/72"
        >
          {t(hero.line)}
        </motion.p>

        <motion.a
          href="#welcome"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-3 text-[0.68rem] tracking-[0.32em] text-white/55 uppercase"
        >
          {t(hero.scroll)}
          <span className="block h-10 w-px bg-white/30" />
        </motion.a>
      </div>
    </section>
  );
}
