"use client";

import { brand } from "@/lib/content";
import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
  title?: string;
  surface?: "dark" | "light";
};

export function Hummingbird({ className, title, surface = "dark" }: MarkProps) {
  const wingLight = surface === "light" ? "var(--brand-purple)" : "var(--brand-cream)";

  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("overflow-visible", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      <path
        d="M188 128C142 102 78 96 50 118c-22 18-10 50 28 52 40 2 78-16 110-42Z"
        fill="var(--brand-teal)"
      />
      <path
        d="M208 108C158 52 86 14 48 40 22 56 34 94 86 110c48 16 86 12 122-2Z"
        fill={wingLight}
      />
      <path
        d="M250 94c14-22 46-26 70-6l78 24-78 12c-14 26-50 70-138 100-10-16 14-54 46-86 10-10 16-26 22-44Z"
        fill="var(--brand-orange)"
      />
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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
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
