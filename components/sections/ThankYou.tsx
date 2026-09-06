"use client";

import { footer, thanks } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { Hummingbird, Wordmark } from "../brand";
import { Reveal } from "../motion";

export function ThankYou() {
  const { t } = useLanguage();

  return (
    <section
      id="thanks"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-[var(--brand-purple)] py-24"
    >
      <div className="radial-burst pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto flex w-[var(--content)] flex-col items-center gap-8 text-center md:flex-row md:justify-center md:text-start">
        <Reveal>
          <Hummingbird className="h-[clamp(6rem,16vw,9rem)] w-[clamp(10rem,24vw,14rem)]" />
        </Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <p className="font-script m-0 text-[clamp(3.6rem,10vw,6.4rem)] leading-none text-[var(--brand-orange)]">
            {t(thanks.script)}
          </p>
          <div className="mt-4">
            <Wordmark invert size="md" />
          </div>
          <p className="mt-6 text-white/68">{t(thanks.line)}</p>
        </Reveal>
      </div>
      <p className="absolute inset-x-0 bottom-8 text-center text-[0.72rem] tracking-[0.2em] text-white/40 uppercase">
        {t(footer.rights)}
      </p>
    </section>
  );
}
