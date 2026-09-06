"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hummingbird, Wordmark } from "../brand";
import { hero } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[var(--brand-purple)] text-[var(--brand-cream)]"
    >
      <div className="radial-burst pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 -start-16 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgb(231_153_58/0.18),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-0 end-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgb(43_181_168/0.14),transparent_64%)]" />
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute start-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.06),transparent_70%)]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <div className="relative mx-auto flex w-[var(--content)] flex-col items-center px-1 pt-[calc(var(--nav-height)+2.25rem)] pb-16 text-center md:py-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className={cn(
            "mb-5 text-[0.72rem] uppercase text-[var(--brand-orange)] md:mb-8",
            locale === "ar" ? "tracking-normal" : "tracking-[0.42em]",
          )}
        >
          {t(hero.kicker)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.2, ease }}
        >
          <Hummingbird className="h-[clamp(4.6rem,18vw,10rem)] w-[clamp(8rem,30vw,17rem)]" />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mt-8"
        >
          <Wordmark invert size="lg" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease }}
          className="font-display mt-5 max-w-3xl text-[clamp(1.7rem,6vw,4.2rem)] font-semibold leading-[1.08] md:mt-8"
        >
          {t(hero.title)}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.7, ease }}
          className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/72"
        >
          {t(hero.line)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12"
        >
          <a
            href="#contact"
            className={cn(
              "rounded-full bg-[var(--brand-orange)] px-6 py-3 text-[0.82rem] font-semibold uppercase text-[var(--brand-purple-deep)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cream)]",
              locale === "ar" ? "tracking-normal" : "tracking-[0.14em]",
            )}
          >
            {t(hero.primary)}
          </a>
          <a
            href="#services"
            className={cn(
              "rounded-full border border-white/25 px-6 py-3 text-[0.82rem] font-semibold uppercase text-[var(--brand-cream)] transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]",
              locale === "ar" ? "tracking-normal" : "tracking-[0.14em]",
            )}
          >
            {t(hero.secondary)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
