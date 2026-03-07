"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "Support",
    title: "หน้าช่วยเหลือสำหรับ รับจ่ายจด",
    intro:
      "ใช้หน้านี้เป็น Support URL ใน App Store Connect ได้ทันที โดยรวมข้อมูลพื้นฐานที่ผู้ใช้ควรรู้ก่อนเริ่มใช้งานและลิงก์ไปยังหน้ากฎหมายที่เกี่ยวข้อง",
    items: [
      ["การเริ่มต้นใช้งาน", "เริ่มจากเพิ่มรายรับหรือรายจ่ายรายการแรก ตั้งหมวดหมู่หลัก และกำหนดงบประมาณที่ต้องการติดตาม"],
      ["นำเข้าข้อมูลเดิม", "แอปรองรับการนำเข้าจากไฟล์ CSV และ XLSX เพื่อช่วยย้ายข้อมูลธุรกรรมเดิมเข้าสู่ระบบ"],
      ["สแกนสลิปและใบเสร็จ", "เพื่อให้ผลลัพธ์ดีขึ้น ควรใช้ภาพที่อ่านได้ชัด มีแสงเพียงพอ และตรวจสอบข้อมูลก่อนบันทึกทุกครั้ง"],
    ] as [string, string][],
    productTitle: "ข้อมูลผลิตภัณฑ์",
    productItems: [
      "ชื่อแอป: รับจ่ายจด",
      "แพลตฟอร์ม: iPhone (iOS)",
      "ผู้พัฒนา: Ratshavarin Trinabhametr",
      "ฟีเจอร์หลัก: บันทึกรายรับรายจ่าย, เสียง, OCR, งบประมาณ, รายงาน, นำเข้า/ส่งออก, Vault",
    ],
    guidanceTitle: "คำแนะนำเบื้องต้น",
    guidance:
      "หากคุณพบว่าผลลัพธ์จากการรู้จำเสียงหรือการสแกนไม่ตรงทั้งหมด กรุณาตรวจสอบและแก้ไขก่อนบันทึกรายการทุกครั้ง โดยเฉพาะจำนวนเงิน หมวดหมู่ และวันที่",
    linksTitle: "ลิงก์ที่เกี่ยวข้อง",
    home: "หน้าแรก / Marketing Page",
  },
  en: {
    pill: "Support",
    title: "Support for Om Geng",
    intro:
      "This page is suitable to use directly as the Support URL in App Store Connect. It includes key usage guidance and links to the related legal pages.",
    items: [
      ["Getting started", "Begin by adding your first income or expense entry, setting core categories, and defining the budgets you want to track."],
      ["Importing previous data", "The app supports CSV and XLSX imports so users can migrate existing transaction history into the app."],
      ["Scanning slips and receipts", "For better results, use clear images with enough light and review extracted details before saving."],
    ] as [string, string][],
    productTitle: "Product information",
    productItems: [
      "App name: รับจ่ายจด",
      "Platform: iPhone (iOS)",
      "Developer: Ratshavarin Trinabhametr",
      "Core features: income and expense logging, voice input, OCR, budgets, reports, import/export, Vaults",
    ],
    guidanceTitle: "Basic guidance",
    guidance:
      "If speech recognition or scan extraction is not fully accurate, users should review and correct the amount, category, and date before saving each transaction.",
    linksTitle: "Related links",
    home: "Home / Marketing Page",
  },
};

export function SupportContent() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <main className="legal-wrap">
      <section className="support-hero">
        <div className="nav-actions" style={{ justifyContent: "space-between" }}>
          <span className="pill">{t.pill}</span>
          <LanguageToggle />
        </div>
        <h1 className="section-title" style={{ marginTop: 18 }}>
          {t.title}
        </h1>
        <p className="section-copy" style={{ marginTop: 14 }}>
          {t.intro}
        </p>
      </section>

      <section className="support-grid">
        {t.items.map(([title, body]) => (
          <article className="support-card glass" key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="support-body glass" style={{ marginTop: 20 }}>
        <h2>{t.productTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          {t.productItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: 24 }}>{t.guidanceTitle}</h2>
        <p>{t.guidance}</p>

        <h2 style={{ marginTop: 24 }}>{t.linksTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          <li>
            <Link href="/">{t.home}</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Use</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
