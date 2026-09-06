"use client";

import { contact } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { PAGES } from "@/lib/pages";
import { Hummingbird } from "../brand";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { Frame, Shell } from "../ui";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[var(--brand-charcoal)] py-16 md:py-24">
      <Shell>
        <div className="relative overflow-hidden bg-[var(--brand-cream)] px-6 py-12 text-[var(--brand-ink)] md:px-12 md:py-16">
          <Hummingbird className="pointer-events-none absolute top-1/2 start-1/2 h-64 w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-10" />
          <Reveal className="relative mb-12">
            <p className="font-script m-0 text-[clamp(3rem,7vw,5rem)] leading-none text-[var(--brand-ink)]">
              {t(contact.title)}
            </p>
            <p className="mt-2 font-display text-[1.1rem] tracking-[0.2em] text-[var(--brand-orange)] uppercase">
              {t(contact.region)}
            </p>
          </Reveal>

          <Stagger className="relative grid gap-6 md:grid-cols-2">
            {contact.offices.map((office) => (
              <StaggerItem key={office.id}>
                <article className="border border-[var(--brand-line)] bg-white/50 p-6 backdrop-blur-sm">
                  <p className="m-0 text-[0.72rem] tracking-[0.28em] text-[var(--brand-orange)] uppercase">
                    {t(office.country)}
                  </p>
                  <h3 className="font-display mt-3 text-[1.5rem] font-semibold">
                    {t(office.city)}
                  </h3>
                  <ul className="mt-5 space-y-2 p-0">
                    {office.phones.map((phone) => (
                      <li key={phone} className="list-none">
                        <a
                          href={telHref(phone)}
                          className="text-[1.02rem] tracking-[0.04em] transition-colors hover:text-[var(--brand-orange)]"
                          dir="ltr"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-6">
          <Frame
            src={PAGES.contact}
            alt={t(contact.title)}
            className="aspect-[16/8] w-full"
            sizes="100vw"
          />
        </Reveal>
      </Shell>
    </section>
  );
}
