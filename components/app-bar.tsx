"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale, type Locale } from "@/components/locale-provider";

type AppBarCopy = {
  subtitle: string;
  features: string;
  overview: string;
  appStore: string;
  support: string;
  privacy: string;
  terms: string;
};

const copy: Record<Locale, AppBarCopy> = {
  th: {
    subtitle: "Personal finance for iPhone and iPad",
    features: "ฟีเจอร์",
    overview: "ภาพรวม",
    appStore: "รายละเอียดแอป",
    support: "ช่วยเหลือ",
    privacy: "ความเป็นส่วนตัว",
    terms: "ข้อกำหนด",
  },
  en: {
    subtitle: "Personal finance for iPhone and iPad",
    features: "Features",
    overview: "Overview",
    appStore: "Details",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
  },
};

const brandCopy: Record<Locale, string> = {
  th: "รับจ่ายจด",
  en: "Budget Note",
};

export function AppBar({ isHome = false }: { isHome?: boolean }) {
  const { locale } = useLocale();
  const t = copy[locale];
  const brand = brandCopy[locale];

  const featureHref = isHome ? "#features" : "/#features";
  const overviewHref = isHome ? "#screens" : "/#screens";
  const detailsHref = isHome ? "#appstore" : "/#appstore";

  return (
    <header className="page-shell nav glass">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <Image src="/icon.png" alt={brand} width={42} height={42} className="brand-mark" />
          <div className="brand-text">
            <strong>{brand}</strong>
            <span>{t.subtitle}</span>
          </div>
        </Link>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Primary">
            <Link href={featureHref}>{t.features}</Link>
            <Link href={overviewHref}>{t.overview}</Link>
            <Link href={detailsHref}>{t.appStore}</Link>
            <Link href="/support">{t.support}</Link>
            <Link href="/privacy">{t.privacy}</Link>
            <Link href="/terms">{t.terms}</Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
