"use client";

import { philosophy } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function Philosophy() {
  const { t, locale } = useLanguage();

  return (
    <section id="philosophy" className="relative bg-[var(--brand-off-white)] py-24 md:py-32">
      <Shell>
        <Reveal className="mb-16 max-w-2xl">
          <SectionHeading kicker={philosophy.kicker} title={philosophy.title} />
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {philosophy.pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="flex h-full flex-col justify-between border border-[var(--brand-line)] bg-[var(--brand-cream)] p-7 md:min-h-[22rem] md:p-8">
                <p
                  className={
                    locale === "ar"
                      ? "m-0 text-[0.78rem] text-[var(--brand-orange)]"
                      : "m-0 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--brand-orange)]"
                  }
                >
                  {t(pillar.label)}
                </p>
                <div>
                  <h3 className="font-display mt-10 text-[1.55rem] leading-tight font-semibold">
                    {t(pillar.title)}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--brand-ink)]/80">
                    {t(pillar.body)}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Shell>
    </section>
  );
}
