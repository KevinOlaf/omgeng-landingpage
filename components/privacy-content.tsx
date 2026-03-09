"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "ความเป็นส่วนตัว",
    title: "นโยบายความเป็นส่วนตัว",
    intro:
      "เอกสารนี้อธิบายแนวทางการเก็บ ใช้ และดูแลข้อมูลเมื่อคุณใช้งานแอป รับจ่ายจด และเว็บไซต์ omgeng.app",
    effective: "มีผลบังคับใช้: 7 มีนาคม 2026",
    sections: [
      ["1. ข้อมูลที่แอปอาจประมวลผล", "แอปอาจประมวลผลข้อมูลที่คุณกรอกหรือสร้างขึ้นระหว่างการใช้งาน เช่น รายรับ รายจ่าย หมวดหมู่ หมายเหตุ รูปภาพสลิปหรือใบเสร็จ ข้อมูลการตั้งงบประมาณ เป้าหมายการเงิน ข้อมูลที่นำเข้า และเนื้อหาที่ใช้กับฟีเจอร์สแกนหรือผู้ช่วยภายในแอป"],
      ["2. วัตถุประสงค์ในการใช้ข้อมูล", ["เพื่อให้แอปสามารถบันทึก วิเคราะห์ และแสดงผลข้อมูลการเงินของคุณ", "เพื่อให้ฟีเจอร์สแกน เสียง รายงาน วิดเจ็ต และการนำเข้า/ส่งออกทำงานได้ตามปกติ", "เพื่อปรับปรุงประสิทธิภาพ ความเสถียร และประสบการณ์การใช้งานของแอป", "เพื่อรองรับฟีเจอร์โฆษณาหรือการวัดผลที่เกี่ยวข้อง หากมีการเปิดใช้ในแอป"]],
      ["3. การจัดเก็บและการดูแลข้อมูล", "ข้อมูลบางส่วนอาจถูกจัดเก็บไว้ในอุปกรณ์ของคุณ และบางฟีเจอร์อาจอาศัยบริการของบุคคลที่สามหรือการเชื่อมต่อเครือข่ายในการทำงาน เช่น การอัปเดตราคา การประมวลผลสำหรับฟีเจอร์เสริม หรือบริการด้านโฆษณา"],
      ["4. การติดตามและโฆษณา", "แอปนี้อาจมีองค์ประกอบด้านโฆษณาหรือการวัดผลจากบุคคลที่สาม โดยรายละเอียดที่แท้จริงควรเป็นไปตามข้อมูล App Privacy ใน App Store และการทำงานจริงของเวอร์ชันที่เผยแพร่"],
      ["5. สิทธิของผู้ใช้", "คุณสามารถหยุดใช้งานแอป ลบข้อมูลภายในแอป หรือจัดการสิทธิ์การเข้าถึง เช่น รูปภาพ ไมโครโฟน การรู้จำเสียง และการแจ้งเตือน ได้ผ่านการตั้งค่าของอุปกรณ์และภายในแอป"],
      ["6. การเปลี่ยนแปลงนโยบาย", "นโยบายนี้อาจมีการอัปเดตเพื่อให้สอดคล้องกับการพัฒนาแอป ข้อกำหนดทางกฎหมาย หรือบริการที่เชื่อมต่อในอนาคต โดยจะแสดงฉบับล่าสุดไว้บนหน้านี้"],
    ] as [string, string | string[]][],
    contactTitle: "7. ติดต่อ",
    contact: "หากมีคำถามเกี่ยวกับความเป็นส่วนตัวหรือการใช้งาน กรุณาไปที่หน้า",
    emailLabel: "หรืออีเมล",
  },
  en: {
    pill: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "This document explains how information may be collected, used, and protected when you use the Budget Note app and the omgeng.app website.",
    effective: "Effective date: March 7, 2026",
    sections: [
      ["1. Data the app may process", "The app may process information you enter or generate through usage, including income, expenses, categories, notes, slip or receipt images, budget settings, financial goals, imported records, and content used with scanning or in-app assistant features."],
      ["2. Why data may be used", ["To let the app record, analyze, and display your financial information", "To support scanning, voice input, reports, widgets, and import or export features", "To improve app stability, performance, and user experience", "To support advertising or related measurement features if enabled in the app"]],
      ["3. Storage and protection", "Some data may be stored on your device, and some features may rely on third-party services or network connections such as price updates, enhanced processing flows, or ad-related services."],
      ["4. Tracking and advertising", "The app may include third-party advertising or measurement components. The exact disclosure should match the App Store privacy configuration and the behavior of the released version."],
      ["5. User controls", "You can stop using the app, delete in-app data, or manage permissions such as Photos, microphone, speech recognition, and notifications through your device settings and in-app settings where applicable."],
      ["6. Policy changes", "This policy may be updated to reflect product changes, legal requirements, or connected services. The latest version will be published on this page."],
    ] as [string, string | string[]][],
    contactTitle: "7. Contact",
    contact: "For privacy or usage questions, please visit the",
    emailLabel: "or email",
  },
};

export function PrivacyContent() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <main className="legal-wrap">
      <section className="legal-hero">
        <span className="pill">{t.pill}</span>
        <h1 className="section-title" style={{ marginTop: 18 }}>
          {t.title}
        </h1>
        <p className="section-copy" style={{ marginTop: 14 }}>
          {t.intro}
        </p>
      </section>

      <section className="legal-card glass">
        <div className="legal-copy">
          <p>{t.effective}</p>
          {t.sections.map(([title, content]) => (
            <div key={title}>
              <h2>{title}</h2>
              {Array.isArray(content) ? (
                <ul>
                  {content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{content}</p>
              )}
            </div>
          ))}

          <h2>{t.contactTitle}</h2>
          <p>
            {t.contact} <Link href="/support">{locale === "th" ? "ช่วยเหลือ" : "Support"}</Link>
            {" "}
            {t.emailLabel} <a href="mailto:support@budget-note.com">support@budget-note.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
