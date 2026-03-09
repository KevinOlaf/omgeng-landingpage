"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "ข้อกำหนดการใช้งาน",
    title: "เงื่อนไขการใช้งาน",
    intro: "ข้อกำหนดต่อไปนี้ใช้กับการเข้าถึงเว็บไซต์ omgeng.app และการใช้งานแอป รับจ่ายจด",
    effective: "มีผลบังคับใช้: 7 มีนาคม 2026",
    sections: [
      ["1. การยอมรับเงื่อนไข", "เมื่อคุณเข้าถึงเว็บไซต์หรือใช้งานแอปนี้ ถือว่าคุณยอมรับเงื่อนไขการใช้งานฉบับนี้ หากคุณไม่ยอมรับ กรุณาหยุดใช้งาน"],
      ["2. ขอบเขตของบริการ", "รับจ่ายจด เป็นเครื่องมือสำหรับบันทึกและจัดการข้อมูลการเงินส่วนบุคคล ข้อมูล รายงาน หรือการคาดการณ์ที่แสดงในแอปมีไว้เพื่อช่วยติดตามและวางแผนเท่านั้น ไม่ถือเป็นคำแนะนำทางการเงิน การลงทุน ภาษี หรือกฎหมายแบบเฉพาะบุคคล"],
      ["3. ความรับผิดชอบของผู้ใช้", ["คุณรับผิดชอบต่อความถูกต้องของข้อมูลที่กรอก นำเข้า หรือยืนยันผ่านฟีเจอร์ต่าง ๆ", "คุณควรตรวจสอบผลลัพธ์จากการสแกน OCR การรู้จำเสียง หรือการวิเคราะห์อัตโนมัติก่อนนำไปใช้งานจริง", "คุณตกลงที่จะไม่ใช้บริการนี้ในทางที่ผิดกฎหมาย หรือในลักษณะที่รบกวนการทำงานของระบบ"]],
      ["4. ฟีเจอร์เพิ่มเติมและการชำระเงิน", "บางความสามารถอาจมีให้เฉพาะผู้ใช้ที่ปลดล็อกฟีเจอร์เพิ่มเติมภายในแอป โดยรายละเอียดราคา สิทธิ์การใช้งาน และเงื่อนไขการชำระเงินให้ยึดตามหน้าซื้อภายใน App Store ของ Apple ในขณะทำรายการ"],
      ["5. ความพร้อมให้บริการ", "ผู้พัฒนาขอสงวนสิทธิ์ในการแก้ไข ระงับ หรือยุติฟีเจอร์บางส่วนได้ตามความจำเป็น รวมถึงการเปลี่ยนแปลงที่เกี่ยวข้องกับอุปกรณ์ ระบบปฏิบัติการ หรือบริการภายนอกที่แอปเชื่อมต่อ"],
      ["6. ทรัพย์สินทางปัญญา", "ชื่อแอป เนื้อหา การออกแบบ อินเทอร์เฟซ และองค์ประกอบที่เกี่ยวข้องกับเว็บไซต์และแอป เป็นทรัพย์สินของผู้พัฒนาหรือผู้ให้สิทธิ์ที่เกี่ยวข้อง และห้ามนำไปใช้โดยไม่ได้รับอนุญาต"],
      ["7. การจำกัดความรับผิด", "เว็บไซต์และแอปให้บริการตามสภาพที่เป็นอยู่ ผู้พัฒนาไม่รับประกันว่าบริการจะปราศจากข้อผิดพลาดหรือเหมาะกับทุกวัตถุประสงค์การใช้งาน และไม่รับผิดชอบต่อความเสียหายทางอ้อมหรือความเสียหายสืบเนื่องจากการใช้งานบริการนี้เท่าที่กฎหมายอนุญาต"],
    ] as [string, string | string[]][],
    contactTitle: "8. ติดต่อ",
    contact: "หากมีคำถามเกี่ยวกับเงื่อนไขการใช้งาน กรุณาไปที่หน้า",
    emailLabel: "หรืออีเมล",
  },
  en: {
    pill: "Terms of Use",
    title: "Terms of Use",
    intro: "These terms apply to access to omgeng.app and the use of the Budget Note app.",
    effective: "Effective date: March 7, 2026",
    sections: [
      ["1. Acceptance of terms", "By using this website or app, you agree to these terms. If you do not agree, please stop using the service."],
      ["2. Scope of service", "Budget Note is a tool for recording and managing personal finance information. Reports, insights, or projections shown in the app are intended to support planning and tracking and do not constitute personalized financial, investment, tax, or legal advice."],
      ["3. User responsibilities", ["You are responsible for the accuracy of data you enter, import, or confirm through app features", "You should review OCR, speech recognition, or automated analysis results before relying on them", "You agree not to misuse the service or interfere with its operation"]],
      ["4. Premium features and payments", "Some capabilities may be available only to users who unlock additional features in the app. Pricing, entitlements, and payment terms are governed by the relevant App Store purchase flow at the time of transaction."],
      ["5. Service availability", "The developer may modify, suspend, or discontinue parts of the service as needed, including changes related to devices, operating systems, or external services connected to the app."],
      ["6. Intellectual property", "The app name, interface, site content, and related product materials are owned by the developer or relevant licensors and may not be reused without permission."],
      ["7. Limitation of liability", "The website and app are provided on an as-is basis. To the extent permitted by law, the developer disclaims liability for indirect or consequential damages arising from use of the service."],
    ] as [string, string | string[]][],
    contactTitle: "8. Contact",
    contact: "If you have questions about these terms, please visit the",
    emailLabel: "or email",
  },
};

export function TermsContent() {
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
