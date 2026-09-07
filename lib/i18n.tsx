"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
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

function isLocale(value: string | null): value is Locale {
  return value === "ar" || value === "en";
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "en";
}

function applyDocumentLocale(next: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.locale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
}

let current: Locale = "en";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return current;
}

function getServerSnapshot(): Locale {
  return "en";
}

if (typeof window !== "undefined") {
  current = readStoredLocale();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored !== current) {
      current = stored;
      emit();
    }
    applyDocumentLocale(current);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    if (!isLocale(next) || next === current) {
      if (isLocale(next)) applyDocumentLocale(next);
      return;
    }
    current = next;
    applyDocumentLocale(next);
    emit();
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(current === "en" ? "ar" : "en");
  }, [setLocale]);

  const t = useCallback((copy: Copy) => copy?.[locale] ?? "", [locale]);

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
