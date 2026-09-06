"use client";

import { work } from "@/lib/content";
import { useLanguage, type Copy } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { DashRule, Frame, Opener, SectionHeading, Shell } from "../ui";
import { cn } from "@/lib/cn";

function Caption({
  title,
  body,
  invert = false,
}: {
  title: Copy;
  body: Copy;
  invert?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl">
      <h3
        className={cn(
          "font-display m-0 text-[1.7rem] font-semibold",
          invert ? "text-[var(--brand-cream)]" : "text-[var(--brand-ink)]",
        )}
      >
        {t(title)}
      </h3>
      <p
        className={cn(
          "mt-4 text-[1.02rem] leading-relaxed",
          invert ? "text-white/72" : "text-[var(--brand-ink)]/78",
        )}
      >
        {t(body)}
      </p>
    </div>
  );
}

function Gallery({
  items,
  className,
}: {
  items: { src: string; alt: string; className?: string }[];
  className?: string;
}) {
  return (
    <Stagger className={cn("grid gap-4 md:grid-cols-2", className)}>
      {items.map((item) => (
        <StaggerItem key={item.src} className={item.className}>
          <Frame src={item.src} alt={item.alt} className="h-full min-h-[16rem] w-full" />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Events() {
  const { t } = useLanguage();
  return (
    <section id="work" className="bg-[var(--brand-charcoal)]">
      <div id="events">
        <Opener src={PAGES.eventsOpener} title={work.events.title} index={work.events.index} />
        <div className="py-16 md:py-24">
          <Shell className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <Reveal>
              <Caption title={work.events.title} body={work.events.body} invert />
            </Reveal>
            <Reveal delay={0.08}>
              <Frame
                src={PAGES.eventsStage}
                alt={t(work.events.title)}
                className="aspect-[16/10] w-full"
                parallax
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </Reveal>
          </Shell>
          <Shell className="mt-6">
            <Frame
              src={PAGES.eventsAlt}
              alt={t(work.events.title)}
              className="aspect-[21/9] w-full"
              sizes="100vw"
            />
          </Shell>
        </div>
      </div>
    </section>
  );
}

export function Booths() {
  const { t } = useLanguage();
  return (
    <section id="booths" className="bg-[var(--brand-off-white)]">
      <Opener src={PAGES.boothOpener} title={work.booths.title} index={work.booths.index} overlay="purple" />
      <div className="py-16 md:py-24">
        <Shell>
          <Reveal className="mb-10">
            <Caption title={work.booths.title} body={work.booths.body} />
          </Reveal>
          <Gallery
            items={[
              { src: PAGES.boothA, alt: t(work.booths.title), className: "md:col-span-1 min-h-[22rem]" },
              { src: PAGES.boothB, alt: t(work.booths.title), className: "md:col-span-1 min-h-[22rem]" },
            ]}
          />
        </Shell>
      </div>
    </section>
  );
}

export function Identity() {
  const { t } = useLanguage();
  return (
    <section id="identity" className="bg-[var(--brand-cream)]">
      <Opener src={PAGES.identityOpener} title={work.identity.title} index={work.identity.index} />
      <div className="py-16 md:py-24">
        <Shell>
          <Reveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Caption title={work.identity.title} body={work.identity.body} />
            <p className="font-display text-[1.4rem] font-semibold">
              {t(work.identity.logos)}
            </p>
          </Reveal>
          <Reveal>
            <Frame
              src={PAGES.logoWall}
              alt={t(work.identity.logos)}
              className="aspect-[16/11] w-full"
              parallax
              sizes="100vw"
            />
          </Reveal>
        </Shell>
      </div>
    </section>
  );
}

export function CompanyProfile() {
  const { t } = useLanguage();
  return (
    <section id="profile" className="bg-[var(--brand-charcoal)] py-16 text-[var(--brand-cream)] md:py-24">
      <Shell>
        <Reveal className="mb-12">
          <SectionHeading index={work.profile.index} title={work.profile.title} invert />
          <p className="mt-5 max-w-2xl text-white/70">{t(work.profile.body)}</p>
        </Reveal>
        <Gallery
          className="md:grid-cols-2"
          items={[
            { src: PAGES.profileA, alt: t(work.profile.title), className: "min-h-[20rem]" },
            { src: PAGES.profileB, alt: t(work.profile.title), className: "min-h-[20rem]" },
          ]}
        />
      </Shell>
    </section>
  );
}

export function Print() {
  const { t } = useLanguage();
  return (
    <section id="print" className="bg-[var(--brand-off-white)] py-16 md:py-24">
      <Shell className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading index={work.print.index} title={work.print.title} />
          <p className="mt-5 max-w-md leading-relaxed text-[var(--brand-ink)]/78">
            {t(work.print.body)}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Frame
            src={PAGES.cards}
            alt={t(work.print.title)}
            className="aspect-[16/11] w-full"
            parallax
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
      </Shell>
      <Shell className="mt-6">
        <Frame
          src={PAGES.menu}
          alt={t(work.print.title)}
          className="aspect-[21/9] w-full"
          sizes="100vw"
        />
      </Shell>
    </section>
  );
}

export function Applications() {
  const { t } = useLanguage();
  return (
    <section id="applications" className="bg-[var(--brand-cream)] py-16 md:py-24">
      <Shell>
        <Reveal className="mb-10">
          <SectionHeading index={work.applications.index} title={work.applications.title} />
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--brand-ink)]/78">
            {t(work.applications.body)}
          </p>
        </Reveal>
        <Gallery
          className="md:grid-cols-2 lg:grid-cols-4"
          items={[
            { src: PAGES.applyA, alt: t(work.applications.title), className: "min-h-[18rem]" },
            { src: PAGES.applyB, alt: t(work.applications.title), className: "min-h-[18rem]" },
            { src: PAGES.applyC, alt: t(work.applications.title), className: "min-h-[18rem]" },
            { src: PAGES.applyD, alt: t(work.applications.title), className: "min-h-[18rem]" },
          ]}
        />
      </Shell>
    </section>
  );
}

export function Packaging() {
  const { t } = useLanguage();
  return (
    <section id="packaging" className="bg-[var(--brand-off-white)] py-16 md:py-24">
      <Shell>
        <Reveal className="mb-10">
          <SectionHeading index={work.packaging.index} title={work.packaging.title} />
          <p className="mt-5 max-w-2xl leading-relaxed">{t(work.packaging.body)}</p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <Frame src={PAGES.packA} alt={t(work.packaging.title)} className="aspect-[4/3] w-full" parallax />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <Frame src={PAGES.packB} alt={t(work.packaging.title)} className="aspect-[4/5] w-full md:h-full md:aspect-auto" />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

export function Social() {
  const { t } = useLanguage();
  return (
    <section id="social" className="bg-[var(--brand-purple)]">
      <Opener src={PAGES.socialOpener} title={work.social.title} index={work.social.index} overlay="purple" />
      <div className="py-16 md:py-24">
        <Shell>
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Caption title={work.social.posts} body={work.social.body} invert />
            <p className="text-[0.78rem] tracking-[0.22em] text-[var(--brand-orange)] uppercase">
              Creativation Source
            </p>
          </Reveal>
          <Gallery
            className="md:grid-cols-1"
            items={[
              { src: PAGES.socialA, alt: t(work.social.posts), className: "min-h-[20rem]" },
              { src: PAGES.socialB, alt: t(work.social.posts), className: "min-h-[20rem]" },
              { src: PAGES.socialC, alt: t(work.social.posts), className: "min-h-[20rem]" },
            ]}
          />
        </Shell>
      </div>
    </section>
  );
}

export function MotionWork() {
  return (
    <section id="motion" className="bg-[var(--brand-charcoal)]">
      <Opener src={PAGES.motionOpener} title={work.motion.title} index={work.motion.index} />
      <div className="py-16 md:py-20">
        <Shell>
          <Reveal>
            <Caption title={work.motion.title} body={work.motion.body} invert />
          </Reveal>
        </Shell>
      </div>
    </section>
  );
}

export function Photography() {
  const { t } = useLanguage();
  return (
    <section id="photography" className="bg-[var(--brand-off-white)] py-16 md:py-24">
      <Shell>
        <Reveal className="mb-10">
          <SectionHeading index={work.photography.index} title={work.photography.title} />
          <p className="mt-5 max-w-2xl leading-relaxed">{t(work.photography.body)}</p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <Frame src={PAGES.photoA} alt={t(work.photography.title)} className="aspect-[16/10] w-full" parallax />
          </Reveal>
          <Reveal delay={0.1}>
            <Frame src={PAGES.photoB} alt={t(work.photography.title)} className="aspect-[4/5] w-full md:h-full md:aspect-auto" />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

export function Ads() {
  const { t } = useLanguage();
  return (
    <section id="ads" className="bg-[var(--brand-cream)]">
      <Opener src={PAGES.adsOpener} title={work.ads.title} index={work.ads.index} />
      <div className="py-16 md:py-24">
        <Shell>
          <Reveal className="mb-4">
            <Caption title={work.ads.title} body={work.ads.body} />
            <p className="mt-4 text-[0.78rem] tracking-[0.22em] text-[var(--brand-orange)] uppercase">
              {t(work.ads.platforms)}
            </p>
          </Reveal>
          <Gallery
            className="mt-10 md:grid-cols-3"
            items={[
              { src: PAGES.adsA, alt: t(work.ads.title), className: "min-h-[18rem]" },
              { src: PAGES.adsB, alt: t(work.ads.title), className: "min-h-[18rem]" },
              { src: PAGES.adsC, alt: t(work.ads.title), className: "min-h-[18rem]" },
            ]}
          />
        </Shell>
      </div>
    </section>
  );
}

export function Gifts() {
  const { t } = useLanguage();
  return (
    <section id="gifts" className="bg-[var(--brand-purple)]">
      <Opener src={PAGES.giftsOpener} title={work.gifts.title} index={work.gifts.index} overlay="purple" />
      <div className="py-16 md:py-24">
        <Shell className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Caption title={work.gifts.title} body={work.gifts.body} invert />
          </Reveal>
          <Reveal delay={0.08}>
            <Frame src={PAGES.gifts} alt={t(work.gifts.title)} className="aspect-[4/3] w-full" parallax />
          </Reveal>
        </Shell>
      </div>
    </section>
  );
}

export function Outdoor() {
  const { t, locale } = useLanguage();
  return (
    <section id="outdoor" className="bg-[var(--brand-charcoal)] py-16 md:py-24">
      <Shell className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="font-display text-[0.72rem] tracking-[0.32em] text-[var(--brand-orange)]">
            {work.outdoor.index}
          </p>
          <div className="mt-6 space-y-2">
            <p className="font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold text-[var(--brand-orange)]">
              {work.outdoor.stack.top}
            </p>
            <p className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-[var(--brand-cream)]">
              {work.outdoor.stack.mid}
            </p>
            <p className="font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold text-[var(--brand-orange)]">
              {work.outdoor.stack.bottom}
            </p>
          </div>
          <DashRule className="mt-6" />
          <p className="mt-6 max-w-sm text-white/70" dir={locale === "ar" ? "rtl" : "ltr"}>
            {t(work.outdoor.body)}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Frame
            src={PAGES.outdoor}
            alt={t(work.outdoor.title)}
            className="aspect-[16/11] w-full origin-bottom [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]"
            parallax
          />
        </Reveal>
      </Shell>
      <Shell className="mt-6">
        <Frame src={PAGES.outdoorOpener} alt={t(work.outdoor.title)} className="aspect-[21/8] w-full" sizes="100vw" />
      </Shell>
    </section>
  );
}

export function Web() {
  const { t } = useLanguage();
  return (
    <section id="web" className="bg-[var(--brand-off-white)]">
      <Opener src={PAGES.webOpener} title={work.web.title} index={work.web.index} overlay="purple" />
      <div className="py-16 md:py-24">
        <Shell>
          <Reveal className="mb-10">
            <Caption title={work.web.title} body={work.web.body} />
          </Reveal>
          <Gallery
            items={[
              { src: PAGES.webA, alt: t(work.web.title), className: "min-h-[20rem]" },
              { src: PAGES.webB, alt: t(work.web.title), className: "min-h-[20rem]" },
            ]}
          />
        </Shell>
      </div>
    </section>
  );
}

export function Finance() {
  const { t } = useLanguage();
  return (
    <section id="finance" className="bg-[var(--brand-cream)]">
      <Opener src={PAGES.financeOpener} title={work.finance.title} index={work.finance.index} />
      <div className="number-field py-16 md:py-24">
        <Shell className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <SectionHeading index={work.finance.index} title={work.finance.heading} />
            <p className="mt-6 max-w-xl text-[1.04rem] leading-[1.75]">
              {t(work.finance.body)}
            </p>
            <svg
              viewBox="0 0 220 70"
              className="mt-10 w-48 text-[var(--brand-orange)]"
              aria-hidden
            >
              <path
                d="M4 58 38 42 62 50 96 22 128 34 162 10 216 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path d="M200 6 216 18 198 26" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </Reveal>
          <Reveal delay={0.1}>
            <Frame src={PAGES.financeCopy} alt={t(work.finance.title)} className="aspect-[4/5] w-full" />
          </Reveal>
        </Shell>
        <Shell className="mt-8 grid gap-4 md:grid-cols-2">
          <Frame src={PAGES.financeA} alt={t(work.finance.title)} className="aspect-[16/11] w-full" />
          <Frame src={PAGES.financeB} alt={t(work.finance.title)} className="aspect-[16/11] w-full" />
        </Shell>
      </div>
    </section>
  );
}
