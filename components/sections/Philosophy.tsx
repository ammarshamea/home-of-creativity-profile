"use client";

import { philosophy } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { Frame, SectionHeading, Shell } from "../ui";

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section
      id="philosophy"
      className="relative bg-[var(--brand-off-white)] py-24 md:py-32"
    >
      <Shell>
        <Reveal className="mb-16 max-w-2xl">
          <SectionHeading index={philosophy.index} title={philosophy.title} />
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-3">
          {philosophy.pillars.map((pillar, i) => (
            <StaggerItem key={pillar.id}>
              <article className="flex h-full flex-col justify-between border border-[var(--brand-line)] bg-[var(--brand-cream)] p-7 md:min-h-[22rem] md:p-8">
                <p className="font-display m-0 text-[0.72rem] tracking-[0.28em] text-[var(--brand-orange)]">
                  0{i + 1}
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

        <Reveal delay={0.1} className="mt-14">
          <Frame
            src={PAGES.philosophy}
            alt={t(philosophy.title)}
            className="aspect-[16/8] w-full"
            parallax
            sizes="100vw"
          />
        </Reveal>
      </Shell>
    </section>
  );
}
