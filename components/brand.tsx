"use client";

import { brand } from "@/lib/content";
import { cn } from "@/lib/cn";

type MarkProps = {
  className?: string;
  title?: string;
};

export function Hummingbird({ className, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 280 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("overflow-visible", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      <path
        d="M118 86c-38-28-72-18-78 12-4 20 14 34 42 28 16-4 28-16 36-40Z"
        fill="var(--brand-teal)"
      />
      <path
        d="M128 74c-42-46-92-28-96 10-3 24 18 36 50 28 18-5 32-18 46-38Z"
        fill="var(--brand-cream)"
      />
      <path
        d="M132 78c12-22 40-24 54-8l90 8-90 10c-12 16-34 42-78 66-12-16 2-44 24-76Z"
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
    sm: "text-[0.95rem] tracking-[0.18em]",
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
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Hummingbird
        className={cn(compact ? "h-8 w-12" : "h-10 w-16")}
        title={brand.name}
      />
      <Wordmark invert={invert} size={compact ? "sm" : "md"} />
    </span>
  );
}
