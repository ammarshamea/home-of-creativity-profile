"use client";

import { useRef } from "react";
import { brand } from "@/lib/content";
import { cn } from "@/lib/cn";
import { gsap, useGSAP } from "@/lib/gsap-client";

type MarkProps = {
  className?: string;
  title?: string;
  surface?: "dark" | "light" | "solid";
  float?: boolean;
};

export function Hummingbird({ className, title, surface = "dark", float = false }: MarkProps) {
  const ref = useRef<SVGSVGElement>(null);
  const wingLight =
    surface === "light"
      ? "var(--brand-purple)"
      : surface === "solid"
        ? "#fbf7f0"
        : "var(--brand-cream)";

  useGSAP(
    () => {
      if (!float) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(ref.current, {
          y: -12,
          duration: 3.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("[data-wing]", {
          scaleY: 0.9,
          transformOrigin: "70% 80%",
          duration: 0.85,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.14,
        });
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [float] },
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("overflow-visible", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      <path
        data-wing
        d="M188 128C142 102 78 96 50 118c-22 18-10 50 28 52 40 2 78-16 110-42Z"
        fill="var(--brand-teal)"
      />
      <path
        data-wing
        d="M208 108C158 52 86 14 48 40 22 56 34 94 86 110c48 16 86 12 122-2Z"
        fill={wingLight}
      />
      <path
        d="M238 96c12-20 40-24 62-6 8 8 10 20 8 30-16 24-48 64-128 96-10-16 12-52 42-82 10-10 12-24 16-38Z"
        fill="var(--brand-orange)"
      />
      <path d="M298 108 392 116 298 124Z" fill="var(--brand-orange)" />
    </svg>
  );
}

export function Wordmark({
  className,
  invert = false,
  size = "md",
}: {
  className?: string;
  invert?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-[0.82rem] tracking-[0.16em]",
    md: "text-[1.05rem] tracking-[0.22em]",
    lg: "text-[clamp(1.4rem,3vw,2.2rem)] tracking-[0.28em]",
  };

  return (
    <p
      className={cn(
        "font-display m-0 font-semibold uppercase",
        invert ? "text-[var(--brand-cream)]" : "text-[var(--brand-ink)]",
        sizes[size],
        className,
      )}
    >
      Home{" "}
      <span className="text-[var(--brand-orange)] lowercase tracking-normal">
        {brand.of}
      </span>{" "}
      Creativity
    </p>
  );
}

export function LogoLockup({
  className,
  invert = false,
  compact = false,
}: {
  className?: string;
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} dir="ltr">
      <Hummingbird
        className={cn(compact ? "h-7 w-12" : "h-10 w-[4.2rem]")}
        title={brand.name}
        surface={invert ? "dark" : "light"}
      />
      <Wordmark
        invert={invert}
        size={compact ? "sm" : "md"}
        className={compact ? "max-md:hidden" : undefined}
      />
    </span>
  );
}
