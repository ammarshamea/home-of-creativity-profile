"use client";

import { about } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-[var(--brand-cream)] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(46_14_92/0.06),transparent_36%),radial-gradient(circle_at_88%_80%,rgb(231_153_58/0.08),transparent_32%)]" />

      <Shell className="relative">
        <Reveal className="max-w-3xl">
          <SectionHeading kicker={about.kicker} title={about.title} />
          <p className="mt-8 max-w-2xl text-[1.08rem] leading-[1.75] text-[var(--brand-ink)]">
            {t(about.body)}
          </p>
          <p className="mt-6 inline-block border border-[var(--brand-orange)] px-3 py-1 text-[0.85rem] text-[var(--brand-orange)]">
            {t(about.highlight)}
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {about.pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="flex h-full flex-col border border-[var(--brand-line)] bg-[var(--brand-off-white)] p-7 transition-colors duration-300 hover:border-[var(--brand-orange)]">
                <span className="mb-8 block h-px w-10 bg-[var(--brand-orange)]" />
                <h3 className="font-display m-0 text-[1.4rem] leading-tight font-semibold">
                  {t(pillar.title)}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--brand-ink)]/75">
                  {t(pillar.body)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Shell>
    </section>
  );
}
