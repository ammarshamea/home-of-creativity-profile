"use client";

import { services } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Hummingbird, Wordmark } from "../brand";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { Frame, SectionHeading, Shell } from "../ui";
import { cn } from "@/lib/cn";

const tones = {
  orange: "bg-[var(--brand-orange)] text-[var(--brand-purple-deep)]",
  teal: "bg-[var(--brand-teal)] text-[var(--brand-purple-deep)]",
  purple: "bg-[#5a2d8c] text-white",
  blue: "bg-[#3d6cb9] text-white",
  peach: "bg-[#f0b7a0] text-[var(--brand-purple-deep)]",
};

export function Services() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--brand-purple)] py-24 text-[var(--brand-cream)] md:py-32"
    >
      <Shell>
        <Reveal className="mb-6 flex flex-col items-center text-center">
          <Hummingbird className="mb-4 h-12 w-20" />
          <Wordmark invert size="sm" />
        </Reveal>
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <SectionHeading index={services.index} title={services.title} invert />
          <p className="mt-5 text-white/70">{t(services.lead)}</p>
        </Reveal>

        <Stagger className="flex flex-wrap justify-center gap-3">
          {services.items.map((item, i) => {
            const primary = locale === "ar" ? item.ar : item.en;
            const secondary = locale === "ar" ? item.en : item.ar;
            return (
              <StaggerItem key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "inline-flex items-center overflow-hidden rounded-full shadow-[0_10px_30px_rgb(10_6_24/0.24)]",
                    i % 3 === 0 && "md:-rotate-2",
                    i % 3 === 1 && "md:rotate-1",
                    i % 3 === 2 && "md:rotate-2",
                  )}
                >
                  <span className="bg-[var(--brand-purple-deep)] px-4 py-2.5 text-[0.82rem] tracking-[0.04em]">
                    {primary}
                  </span>
                  <span
                    className={cn(
                      "px-4 py-2.5 text-[0.82rem] tracking-[0.04em]",
                      tones[item.tone],
                    )}
                  >
                    {secondary}
                  </span>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-16">
          <Frame
            src={PAGES.services}
            alt={t(services.title)}
            className="aspect-[16/9] w-full"
            sizes="100vw"
          />
        </Reveal>
      </Shell>
    </section>
  );
}
