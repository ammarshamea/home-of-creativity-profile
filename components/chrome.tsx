"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoLockup } from "./brand";
import { nav } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about", label: nav.about },
  { href: "#philosophy", label: nav.philosophy },
  { href: "#services", label: nav.services },
  { href: "#work", label: nav.work },
  { href: "#contact", label: nav.contact },
];

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      aria-label={t(nav.language)}
      className={cn(
        "relative isolate overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--brand-cream)_28%,transparent)] bg-[color-mix(in_srgb,var(--brand-purple)_55%,black)] px-1 py-1 text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-cream)]",
        compact ? "min-w-[5.6rem]" : "min-w-[6.4rem]",
      )}
    >
      <span className="relative z-10 grid grid-cols-2">
        {(["en", "ar"] as const).map((code) => (
          <span
            key={code}
            className={cn(
              "relative px-2.5 py-1.5 transition-colors",
              locale === code ? "text-[var(--brand-purple-deep)]" : "text-white/70",
            )}
          >
            {locale === code ? (
              <motion.span
                layoutId={reduce ? undefined : "lang-pill"}
                className="absolute inset-0 rounded-full bg-[var(--brand-orange)]"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
            <span className="relative">{code === "en" ? "EN" : "AR"}</span>
          </span>
        ))}
      </span>
    </button>
  );
}

export function Nav() {
  const { t, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [locale]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500",
        scrolled || open
          ? "bg-[color-mix(in_srgb,var(--brand-purple-deep)_86%,transparent)] shadow-[0_12px_40px_rgb(10_6_24/0.28)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--nav-height)] w-[var(--content)] items-center justify-between gap-6">
        <a href="#top" className="shrink-0" onClick={() => setOpen(false)}>
          <LogoLockup invert compact />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.78rem] tracking-[0.2em] text-white/72 uppercase transition-colors hover:text-[var(--brand-orange)]"
            >
              {t(link.label)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-[var(--brand-cream)]"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-current transition",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="mx-auto flex w-[var(--content)] flex-col gap-1 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[1.05rem] tracking-[0.16em] text-[var(--brand-cream)] uppercase"
                >
                  {t(link.label)}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
