"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { useLanguage, type Copy } from "@/lib/i18n";
import { ParallaxFrame, Reveal } from "./motion";

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[var(--content)]", className)}>{children}</div>
  );
}

export function SectionIndex({ n }: { n: string }) {
  return (
    <span className="font-display text-[0.72rem] font-semibold tracking-[0.32em] text-[var(--brand-orange)]">
      {n}
    </span>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
  invert = false,
}: {
  index: string;
  title: Copy;
  kicker?: Copy;
  invert?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <SectionIndex n={index} />
      {kicker ? (
        <p
          className={cn(
            "m-0 text-[0.78rem] tracking-[0.28em] uppercase",
            invert ? "text-white/55" : "text-[var(--brand-muted)]",
          )}
        >
          {t(kicker)}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display m-0 text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.05]",
          invert ? "text-[var(--brand-cream)]" : "text-[var(--brand-ink)]",
        )}
      >
        {t(title)}
      </h2>
    </div>
  );
}

export function Frame({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  parallax = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
    />
  );

  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-[var(--brand-paper)]",
        className,
      )}
    >
      {parallax ? (
        <ParallaxFrame className="absolute inset-[-12%] h-[124%] w-full">
          {image}
        </ParallaxFrame>
      ) : (
        image
      )}
    </div>
  );
}

export function Opener({
  src,
  title,
  index,
  overlay = "dark",
}: {
  src: string;
  title: Copy;
  index: string;
  overlay?: "dark" | "purple";
}) {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[58vh] overflow-hidden md:min-h-[72vh]">
      <Frame
        src={src}
        alt={t(title)}
        className="absolute inset-0"
        sizes="100vw"
        parallax
      />
      <div
        className={cn(
          "absolute inset-0",
          overlay === "purple"
            ? "bg-[linear-gradient(180deg,rgb(46_14_92/0.15),rgb(18_8_40/0.72))]"
            : "bg-[linear-gradient(180deg,rgb(10_8_16/0.08),rgb(10_8_16/0.62))]",
        )}
      />
      <Shell className="relative flex min-h-[58vh] flex-col justify-end pb-12 pt-28 md:min-h-[72vh] md:pb-16">
        <Reveal>
          <SectionIndex n={index} />
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(2.4rem,7vw,5.4rem)] font-semibold leading-[0.95] text-[var(--brand-cream)]">
            {t(title)}
          </h2>
        </Reveal>
      </Shell>
    </div>
  );
}

export function DashRule({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-24 bg-[repeating-linear-gradient(90deg,var(--brand-orange)_0_10px,transparent_10px_16px)]",
        className,
      )}
    />
  );
}
