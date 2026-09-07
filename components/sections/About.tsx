"use client";

import Image from "next/image";
import { about } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function About() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[var(--brand-purple-deep)] py-24 text-[var(--brand-cream)] md:py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={withBasePath("/photo/about-us.png")}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            "object-cover",
            locale === "ar" ? "object-[28%_55%]" : "object-[72%_55%]",
          )}
        />
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          locale === "ar"
            ? "bg-[linear-gradient(270deg,rgb(10_6_24/0.86)_0%,rgb(10_6_24/0.52)_48%,rgb(10_6_24/0.22)_100%)]"
            : "bg-[linear-gradient(90deg,rgb(10_6_24/0.86)_0%,rgb(10_6_24/0.52)_48%,rgb(10_6_24/0.22)_100%)]",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(10_6_24/0.28)_0%,transparent_28%,transparent_58%,rgb(10_6_24/0.62)_100%)]"
      />

      <Shell className="relative z-10">
        <Reveal className="max-w-3xl">
          <SectionHeading kicker={about.kicker} title={about.title} invert />
          <p className="mt-8 max-w-2xl text-[1.08rem] leading-[1.75] text-white/82">
            {t(about.body)}
          </p>
          <p className="mt-6 inline-block border border-[var(--brand-orange)] px-3 py-1 text-[0.85rem] text-[var(--brand-orange)]">
            {t(about.highlight)}
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {about.pillars.map((pillar, index) => (
            <StaggerItem key={pillar.id}>
              <article className="lux-card group flex h-full flex-col border border-white/12 bg-[color-mix(in_srgb,var(--brand-purple-deep)_58%,transparent)] p-7 backdrop-blur-sm">
                <div className="mb-8 flex items-center justify-between">
                  <span className="lux-rule block h-px w-10 self-start bg-[var(--brand-orange)]" />
                  <span className="text-[0.72rem] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display m-0 text-[1.4rem] leading-tight font-semibold">
                  {t(pillar.title)}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-white/72">
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
