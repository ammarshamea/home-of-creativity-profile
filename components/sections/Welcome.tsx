"use client";

import { motion } from "framer-motion";
import { Hummingbird } from "../brand";
import { Reveal } from "../motion";
import { welcome } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Frame, Shell } from "../ui";

function Geo({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, x: -28, y: 28 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function Welcome() {
  const { t } = useLanguage();

  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-[var(--brand-off-white)] py-24 md:py-32"
    >
      <Geo className="absolute top-[12%] start-[6%] h-16 w-16 rounded-full bg-[var(--brand-purple)]" delay={0.05} />
      <Geo className="absolute top-[18%] end-[14%] h-10 w-10 rotate-45 bg-[var(--brand-orange)]" delay={0.12} />
      <Geo className="absolute bottom-[16%] start-[18%] h-20 w-20 rounded-full border border-[var(--brand-ink)]" delay={0.18} />
      <Geo className="absolute top-[38%] end-[8%] h-24 w-24 rounded-full [background:repeating-linear-gradient(-45deg,var(--brand-purple)_0_2px,transparent_2px_8px)]" delay={0.1} />
      <Geo className="absolute bottom-[22%] end-[22%] h-14 w-14 bg-[var(--brand-purple)] [clip-path:polygon(50%_0,100%_100%,0_100%)]" delay={0.22} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_42%,rgb(46_14_92/0.06)_42.2%,transparent_42.6%),linear-gradient(135deg,transparent_58%,rgb(231_153_58/0.1)_58.2%,transparent_58.6%)]" />

      <Shell className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex justify-center">
          <div className="relative grid h-[min(28rem,72vw)] w-[min(28rem,72vw)] place-items-center">
            <div className="absolute inset-[8%] rotate-45 bg-[var(--brand-charcoal)] shadow-[0_30px_80px_rgb(18_18_18/0.22)]" />
            <div className="relative z-10 px-10 text-center">
              <p className="font-script m-0 text-[clamp(3.4rem,8vw,5.4rem)] leading-none text-[var(--brand-orange)]">
                {t(welcome.script)}
              </p>
              <p className="mt-3 text-[0.95rem] tracking-[0.14em] lowercase">
                <span className="text-white">creativation </span>
                <span className="text-[var(--brand-orange)]">source</span>
              </p>
            </div>
            <span className="absolute -end-4 top-10 grid h-20 w-20 place-items-center rounded-full border border-[var(--brand-orange)]">
              <Hummingbird className="h-10 w-16 [transform:scaleX(-1)]" />
            </span>
          </div>
        </Reveal>

        <div className="relative">
          <Reveal delay={0.1}>
            <p className="m-0 max-w-md text-[1.2rem] leading-relaxed text-[var(--brand-ink)]">
              {t(welcome.body)}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-8">
            <Frame
              src={PAGES.welcome}
              alt={t(welcome.script)}
              className="aspect-[4/3] w-full max-w-md"
              parallax
            />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
