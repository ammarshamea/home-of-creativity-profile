"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "ar";
export type Copy = { en: string; ar: string };

const STORAGE_KEY = "hoc-locale";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (copy: Copy) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ar" || stored === "en" ? stored : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = readStoredLocale();
    setLocaleState(next);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback((copy: Copy) => copy[locale], [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      toggleLocale,
      t,
    }),
    [locale, setLocale, toggleLocale, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
