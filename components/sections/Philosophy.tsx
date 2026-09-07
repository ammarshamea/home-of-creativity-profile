"use client";

import Image from "next/image";
import { philosophy } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
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
              <article className="lux-card group flex h-full flex-col overflow-hidden border border-[var(--brand-line)] bg-[var(--brand-cream)] text-start">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--brand-ink)]">
                  <Image
                    src={withBasePath(pillar.image)}
                    alt={t(pillar.imageAlt)}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p
                    className={
                      locale === "ar"
                        ? "m-0 text-[0.78rem] text-[var(--brand-orange)]"
                        : "m-0 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--brand-orange)]"
                    }
                  >
                    {t(pillar.label)}
                  </p>
                  <h3 className="font-display mt-3 text-[1.45rem] leading-snug font-semibold">
                    {t(pillar.title)}
                  </h3>
                  <span className="mt-3 block h-px w-full bg-[var(--brand-orange)]" />
                  <p className="mt-4 text-[0.98rem] leading-[1.7] text-[var(--brand-ink)]/80">
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
