"use client";

import { about } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Reveal } from "../motion";
import { Frame, SectionHeading, Shell } from "../ui";

export function About() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="about"
      className="number-field relative overflow-hidden bg-[var(--brand-cream)] py-24 md:py-32"
    >
      <p className="pointer-events-none absolute top-16 start-[8%] font-display text-[clamp(4rem,14vw,10rem)] font-semibold text-[var(--brand-purple)]/6 select-none">
        03
      </p>
      <p className="pointer-events-none absolute bottom-10 end-[6%] font-display text-[5rem] text-[var(--brand-orange)]/10 select-none">
        π Σ 42
      </p>
      <span className="absolute bottom-16 start-8 h-24 w-24 rounded-full bg-[var(--brand-purple)]" />
      <span className="absolute bottom-24 start-20 h-16 w-16 rounded-full bg-[var(--brand-orange)]" />
      <span className="absolute top-20 end-10 h-28 w-28 opacity-70 [background:conic-gradient(from_30deg,var(--brand-teal),var(--brand-orange),var(--brand-purple),var(--brand-teal))] [clip-path:polygon(50%_0,100%_38%,82%_100%,18%_100%,0_38%)]" />

      <Shell className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <Reveal>
          <SectionHeading index={about.index} title={about.title} />
          <p
            className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-[var(--brand-ink)]"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t(about.body)}
          </p>
          <p className="mt-6 inline-block border border-dashed border-[var(--brand-orange)] px-3 py-1 text-[0.85rem] tracking-[0.08em] text-[var(--brand-orange)]">
            {t(about.highlight)}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <Frame
            src={PAGES.about}
            alt={t(about.title)}
            className="aspect-[4/5] w-full"
            parallax
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </Reveal>
      </Shell>
    </section>
  );
}
