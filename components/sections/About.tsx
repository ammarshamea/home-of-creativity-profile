"use client";

import Image from "next/image";
import { about } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";
import { Reveal } from "../motion";
import { SectionHeading, Shell } from "../ui";

export function About() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[var(--brand-off-white)] py-16 text-[var(--brand-ink)] md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={withBasePath("/photo/about_us_background.webp")}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            "object-cover object-[82%_18%] mix-blend-multiply",
            locale === "ar" && "origin-center -scale-x-100",
          )}
        />
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          locale === "ar"
            ? "bg-[linear-gradient(270deg,var(--brand-off-white)_0%,color-mix(in_srgb,var(--brand-off-white)_72%,transparent)_42%,transparent_78%)]"
            : "bg-[linear-gradient(90deg,var(--brand-off-white)_0%,color-mix(in_srgb,var(--brand-off-white)_72%,transparent)_42%,transparent_78%)]",
        )}
      />

      <Shell className="relative z-10">
        <Reveal className="max-w-3xl">
          <SectionHeading kicker={about.kicker} title={about.title} />
          <p className="mt-8 max-w-2xl text-[1.08rem] leading-[1.75] text-[var(--brand-ink)]/78">
            {t(about.body)}
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}
