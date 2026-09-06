"use client";

import { finance } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function Finance() {
  const { t } = useLanguage();

  return (
    <section
      id="finance"
      className="relative overflow-hidden bg-[var(--brand-off-white)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgb(46_14_92/0.06),transparent_34%)]" />
      <Shell className="relative">
        <Reveal className="max-w-3xl">
          <SectionHeading kicker={finance.kicker} title={finance.title} />
          <p className="font-display mt-6 text-[1.35rem] leading-snug text-[var(--brand-ink)] md:text-[1.55rem]">
            {t(finance.heading)}
          </p>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.75] text-[var(--brand-ink)]/80">
            {t(finance.body)}
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {finance.offerings.map((item) => (
            <StaggerItem key={item.id}>
              <article className="flex h-full flex-col border border-[var(--brand-line)] bg-[var(--brand-cream)] p-7 transition-colors duration-300 hover:border-[var(--brand-orange)]">
                <span className="mb-8 block h-px w-10 bg-[var(--brand-orange)]" />
                <h3 className="font-display m-0 text-[1.4rem] leading-tight font-semibold">
                  {t(item.title)}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--brand-ink)]/75">
                  {t(item.body)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Shell>
    </section>
  );
}
