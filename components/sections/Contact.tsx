"use client";

import { FormEvent, useMemo, useState } from "react";
import { contact, services } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { whatsappHref } from "@/lib/whatsapp";
import { Reveal } from "../motion";
import { SectionHeading, Shell } from "../ui";
import { cn } from "@/lib/cn";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export function Contact() {
  const { t, locale } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const fieldClass =
    "w-full rounded-none border border-[var(--brand-line)] bg-white/70 px-4 py-3 text-[1rem] text-[var(--brand-ink)] outline-none transition-colors placeholder:text-[var(--brand-muted)] focus-visible:border-[var(--brand-orange)] focus-visible:ring-2 focus-visible:ring-[var(--brand-orange)]/30";

  const template = t(contact.form.whatsappTemplate);

  const preview = useMemo(
    () =>
      template
        .replace("{{name}}", form.name.trim() || "—")
        .replace("{{email}}", form.email.trim() || "—")
        .replace("{{phone}}", form.phone.trim() || "—")
        .replace("{{interest}}", form.interest.trim() || "—")
        .replace("{{message}}", form.message.trim()),
    [form, template],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = form.name.trim() && form.email.trim() && form.message.trim();
    if (!valid) {
      setError(true);
      setSent(false);
      return;
    }
    setError(false);
    setSent(true);
    window.open(whatsappHref(preview), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-[var(--brand-charcoal)] py-16 md:py-24">
      <Shell>
        <div className="border border-white/8 bg-[var(--brand-cream)] px-6 py-12 text-[var(--brand-ink)] md:px-12 md:py-16">
          <Reveal className="mb-10 max-w-2xl">
            <SectionHeading kicker={contact.kicker} title={contact.title} />
            <p className="mt-3 text-[0.95rem] text-[var(--brand-orange)]">{t(contact.region)}</p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-[var(--brand-ink)]/80">
              {t(contact.lead)}
            </p>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <form onSubmit={onSubmit} noValidate className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-[0.82rem]">
                    <span>{t(contact.form.name)}</span>
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className={fieldClass}
                    />
                  </label>
                  <label className="grid gap-2 text-[0.82rem]">
                    <span>{t(contact.form.email)}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={fieldClass}
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-[0.82rem]">
                    <span>{t(contact.form.phone)}</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className={fieldClass}
                    />
                  </label>
                  <label className="grid gap-2 text-[0.82rem]">
                    <span>{t(contact.form.interest)}</span>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
                      className={fieldClass}
                    >
                      <option value="">{t(contact.form.interestPlaceholder)}</option>
                      {services.items.map((item) => (
                        <option key={item.id} value={locale === "ar" ? item.ar : item.en}>
                          {locale === "ar" ? item.ar : item.en}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-[0.82rem]">
                  <span>{t(contact.form.message)}</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className={cn(fieldClass, "min-h-[8.5rem] resize-y")}
                  />
                </label>

                {error ? (
                  <p role="alert" className="m-0 text-[0.9rem] text-[#9a2b2b]">
                    {t(contact.form.error)}
                  </p>
                ) : null}
                {sent ? (
                  <p role="status" className="m-0 text-[0.9rem] text-[var(--brand-teal-deep)]">
                    {t(contact.form.success)}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className={cn(
                    "mt-2 inline-flex w-fit rounded-full bg-[var(--brand-purple)] px-6 py-3 text-[0.82rem] font-semibold uppercase text-[var(--brand-cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]",
                    locale === "ar" ? "tracking-normal" : "tracking-[0.14em]",
                  )}
                >
                  {t(contact.form.submit)}
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.08} className="grid gap-4">
              {contact.offices.map((office) => (
                <article
                  key={office.id}
                  className="border border-[var(--brand-line)] bg-white/50 p-6"
                >
                  <p
                    className={
                      locale === "ar"
                        ? "m-0 text-[0.78rem] text-[var(--brand-orange)]"
                        : "m-0 text-[0.72rem] tracking-[0.28em] uppercase text-[var(--brand-orange)]"
                    }
                  >
                    {t(office.country)}
                  </p>
                  <h3 className="font-display mt-3 text-[1.35rem] font-semibold">
                    {t(office.city)}
                  </h3>
                  <ul className="mt-5 space-y-2 p-0">
                    {office.phones.map((phone) => (
                      <li key={phone} className="list-none">
                        <a
                          href={telHref(phone)}
                          className="text-[1.02rem] transition-colors hover:text-[var(--brand-orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-orange)]"
                          dir="ltr"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
