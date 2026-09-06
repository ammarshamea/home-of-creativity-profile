"use client";

import { projects } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="relative bg-[var(--brand-cream)] py-24 md:py-32">
      <Shell>
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <SectionHeading kicker={projects.kicker} title={projects.title} />
          <p className="mt-5 text-[1.02rem] leading-relaxed text-[var(--brand-ink)]/75">
            {t(projects.lead)}
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.items.map((item) => (
            <StaggerItem key={item.id}>
              <article className="flex h-full flex-col border border-[var(--brand-line)] bg-[var(--brand-off-white)] p-7 transition-colors duration-300 hover:border-[var(--brand-orange)]">
                <p
                  className={
                    locale === "ar"
                      ? "m-0 text-[0.78rem] text-[var(--brand-orange)]"
                      : "m-0 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--brand-orange)]"
                  }
                >
                  {t(item.label)}
                </p>
                <h3 className="font-display mt-8 text-[1.45rem] leading-tight font-semibold">
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
