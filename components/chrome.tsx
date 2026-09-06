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
        "relative isolate shrink-0 overflow-hidden rounded-full border border-white/25 bg-black/25 px-1 py-1 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[var(--brand-cream)]",
        compact ? "min-w-[5.4rem]" : "min-w-[6.2rem]",
      )}
    >
      <span className="relative z-10 grid grid-cols-2">
        {(["en", "ar"] as const).map((code) => (
          <span
            key={code}
            className={cn(
              "relative px-2.5 py-1.5 transition-colors",
              locale === code ? "text-[var(--brand-purple-deep)]" : "text-white/75",
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500",
        scrolled && !open
          ? "bg-[color-mix(in_srgb,var(--brand-purple-deep)_90%,transparent)] shadow-[0_12px_40px_rgb(10_6_24/0.28)] backdrop-blur-xl"
          : open
            ? "bg-[var(--brand-purple-deep)]"
            : "bg-[linear-gradient(180deg,rgb(18_8_40/0.55),transparent)]",
      )}
    >
      <div className="mx-auto flex h-[var(--nav-height)] w-[min(1280px,calc(100%-1.5rem))] items-center justify-between gap-4">
        <a href="#top" className="shrink-0" onClick={() => setOpen(false)}>
          <LogoLockup invert compact />
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[0.72rem] tracking-[0.18em] text-white uppercase transition-colors hover:text-[var(--brand-orange)]"
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
            className="grid h-11 w-11 place-items-center text-[var(--brand-cream)]"
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

    </header>
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-[var(--nav-height)] bottom-0 z-40 bg-[var(--brand-purple-deep)] lg:hidden"
          >
            <div className="mx-auto flex h-full w-[min(1280px,calc(100%-1.5rem))] flex-col justify-center gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/15 py-4 text-[1.35rem] tracking-[0.14em] text-white uppercase"
                >
                  {t(link.label)}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
