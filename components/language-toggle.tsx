"use client";

import { useLocale } from "@/components/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="language-toggle" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={locale === "th" ? "toggle-button is-active" : "toggle-button"}
        onClick={() => setLocale("th")}
      >
        ไทย
      </button>
      <button
        type="button"
        className={locale === "en" ? "toggle-button is-active" : "toggle-button"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
