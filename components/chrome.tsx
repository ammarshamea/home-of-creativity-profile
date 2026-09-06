"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoLockup } from "./brand";
import { footer, nav } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about", label: nav.about },
  { href: "#philosophy", label: nav.philosophy },
  { href: "#services", label: nav.services },
  { href: "#projects", label: nav.projects },
  { href: "#finance", label: nav.finance },
  { href: "#contact", label: nav.contact },
];

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      aria-label={t(nav.language)}
      aria-pressed={locale === "ar"}
      className={cn(
        "relative isolate shrink-0 rounded-full border border-white/35 bg-black/30 p-1 text-[0.7rem] font-semibold uppercase text-[var(--brand-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]",
        locale === "ar" ? "tracking-normal" : "tracking-[0.16em]",
        compact ? "min-w-[5.4rem]" : "min-w-[6.2rem]",
      )}
    >
      <span className="grid grid-cols-2">
        {(["en", "ar"] as const).map((code) => {
          const selected = locale === code;
          return (
            <span
              key={code}
              className={cn(
                "rounded-full px-2.5 py-1.5 transition-colors duration-300",
                selected
                  ? "bg-[var(--brand-orange)] text-[var(--brand-purple-deep)]"
                  : "text-white/70",
              )}
            >
              {code === "en" ? "EN" : "AR"}
            </span>
          );
        })}
      </span>
    </button>
  );
}

export function Nav() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  function goTo(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      window.history.replaceState(null, "", href);
    }, 40);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "about", "philosophy", "services", "projects", "finance", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const linkClass = (href: string, mobile = false) =>
    cn(
      mobile
        ? "border-b border-white/15 py-4 text-[1.35rem] text-white"
        : "relative grid h-11 place-items-center rounded-full px-1.5 text-[0.82rem] font-semibold text-[var(--brand-cream)] transition-colors hover:bg-white/10 hover:text-[var(--brand-orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)] xl:text-[0.9rem]",
      !mobile && locale === "ar" ? "tracking-normal" : !mobile && "tracking-[0.08em]",
      mobile && locale === "ar" ? "tracking-normal" : mobile && "tracking-[0.14em]",
      active === href &&
        (mobile
          ? "text-[var(--brand-orange)]"
          : "bg-white/12 text-[var(--brand-orange)]"),
    );

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
        <div className="mx-auto grid h-[var(--nav-height)] w-[min(1280px,calc(100%-1.5rem))] grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#top" className="shrink-0 justify-self-start" onClick={() => setOpen(false)}>
            <LogoLockup invert compact />
          </a>

          <nav
            className="mx-2 hidden min-w-0 grid-cols-6 items-center lg:grid"
            aria-label={t(nav.menu)}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={linkClass(link.href)}
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-3 lg:flex">
            <a
              href="#contact"
              className={cn(
                "rounded-full bg-[var(--brand-orange)] px-4 py-2 text-[0.78rem] font-semibold uppercase text-[var(--brand-purple-deep)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cream)]",
                locale === "ar" ? "tracking-normal" : "tracking-[0.14em]",
              )}
            >
              {t(nav.cta)}
            </a>
            <LanguageToggle />
          </div>

          <div className="flex items-center justify-self-end gap-3 lg:hidden">
            <LanguageToggle compact />
            <button
              type="button"
              className="grid h-11 w-11 place-items-center text-[var(--brand-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={t(nav.menu)}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{t(nav.menu)}</span>
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
            id="mobile-nav"
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
                  aria-current={active === link.href ? "true" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(link.href);
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className={linkClass(link.href, true)}
                >
                  {t(link.label)}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  goTo("#contact");
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-4 inline-flex w-fit rounded-full bg-[var(--brand-orange)] px-5 py-3 text-[1rem] font-semibold text-[var(--brand-purple-deep)]"
              >
                {t(nav.cta)}
              </motion.a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[var(--brand-purple-deep)] py-10 text-[var(--brand-cream)]">
      <div className="mx-auto flex w-[var(--content)] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <a href="#top">
          <LogoLockup invert compact />
        </a>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label={t(nav.menu)}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.78rem] text-white/65 transition-colors hover:text-[var(--brand-orange)]",
                locale === "ar" ? "tracking-normal" : "tracking-[0.12em] uppercase",
              )}
            >
              {t(link.label)}
            </a>
          ))}
        </nav>
        <p className="m-0 text-[0.72rem] text-white/40">{t(footer.rights)}</p>
      </div>
    </footer>
  );
}
