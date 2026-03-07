"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "th" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const storageKey = "omgeng-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("th");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "th" || stored === "en") {
      setLocale(stored);
      return;
    }

    if (window.navigator.language.toLowerCase().startsWith("en")) {
      setLocale("en");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
