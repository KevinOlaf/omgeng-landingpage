"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "ช่วยเหลือ",
    title: "หน้าช่วยเหลือของรับจ่ายจด",
    intro:
      "หน้านี้รวบรวมข้อมูลสำคัญสำหรับการใช้งานรับจ่ายจด ทั้งวิธีเริ่มต้น คำแนะนำเบื้องต้น และลิงก์ไปยังหน้าที่เกี่ยวข้อง",
    items: [
      ["เริ่มต้นใช้งาน", "เริ่มจากเพิ่มรายรับหรือรายจ่ายรายการแรก ตั้งหมวดหมู่ที่ใช้บ่อย และกำหนดงบประมาณที่ต้องการติดตาม"],
      ["นำเข้าข้อมูลเดิม", "แอปรองรับการนำเข้าจากไฟล์ CSV และ XLSX เพื่อช่วยย้ายข้อมูลธุรกรรมเดิมเข้ามาได้สะดวกขึ้น"],
      ["สแกนสลิปและใบเสร็จ", "เพื่อให้ได้ผลลัพธ์ที่แม่นยำขึ้น ควรใช้ภาพที่คมชัด มีแสงเพียงพอ และตรวจสอบข้อมูลก่อนบันทึกทุกครั้ง"],
    ] as [string, string][],
    productTitle: "ข้อมูลแอป",
    productItems: [
      "ชื่อแอป: รับจ่ายจด",
      "แพลตฟอร์ม: iPhone และ iPad (iOS)",
      "ฟีเจอร์หลัก: บันทึกรายรับรายจ่าย, เสียง, OCR, งบประมาณ, รายงาน PDF แบบละเอียด, นำเข้า/ส่งออก, Vault",
    ],
    guidanceTitle: "คำแนะนำเบื้องต้น",
    guidance:
      "หากผลลัพธ์จากการรู้จำเสียงหรือการสแกนยังไม่ตรงทั้งหมด ควรตรวจสอบและแก้ไขก่อนบันทึกทุกครั้ง โดยเฉพาะจำนวนเงิน หมวดหมู่ และวันที่",
    emailTitle: "อีเมลช่วยเหลือ",
    linksTitle: "ลิงก์ที่เกี่ยวข้อง",
    home: "หน้าแรก",
  },
  en: {
    pill: "Support",
    title: "Support for Budget Note",
    intro:
      "This page brings together essential Budget Note usage guidance, support information, and links to related pages.",
    items: [
      ["Getting started", "Begin by adding your first income or expense entry, setting core categories, and defining the budgets you want to track."],
      ["Importing previous data", "The app supports CSV and XLSX imports so users can migrate existing transaction history into the app."],
      ["Scanning slips and receipts", "For better results, use clear images with enough light and review extracted details before saving."],
    ] as [string, string][],
    productTitle: "Product information",
    productItems: [
      "App name: Budget Note",
      "Platform: iPhone and iPad (iOS)",
      "Core features: income and expense logging, voice input, OCR, budgets, advanced PDF reports, import/export, Vaults",
    ],
    guidanceTitle: "Basic guidance",
    guidance:
      "If speech recognition or scan extraction is not fully accurate, users should review and correct the amount, category, and date before saving each transaction.",
    emailTitle: "Support email",
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
        <span className="pill">{t.pill}</span>
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

        <h2 style={{ marginTop: 24 }}>{t.emailTitle}</h2>
        <p>
          <a href="mailto:support@budget-note.com">support@budget-note.com</a>
        </p>

        <h2 style={{ marginTop: 24 }}>{t.linksTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          <li>
            <Link href="/">{t.home}</Link>
          </li>
          <li>
            <Link href="/privacy">{locale === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}</Link>
          </li>
          <li>
            <Link href="/terms">{locale === "th" ? "ข้อกำหนดการใช้งาน" : "Terms of Use"}</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
