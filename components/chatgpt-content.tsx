"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "ใช้งานกับ ChatGPT",
    title: "ถาม ChatGPT เรื่องเงินของคุณจากรับจ่ายจด",
    intro:
      "เชื่อมรับจ่ายจดกับ ChatGPT เพื่อถามเรื่องรายจ่ายตามหมวดหรือช่วงเวลา ค้นหารายการ ดูมูลค่าพอร์ต และดูการคาดการณ์กระแสเงินสดและความมั่งคั่งสุทธิ ทุกอย่างเป็นแบบอ่านอย่างเดียว ChatGPT เพิ่ม แก้ไข ลบ หรือโอนเงินไม่ได้",
    cards: [
      ["อ่านอย่างเดียว", "เครื่องมือทั้ง 9 ตัวอ่านข้อมูลเท่านั้น ไม่มีเครื่องมือใดที่เปลี่ยนแปลงข้อมูลในแอปหรือเคลื่อนย้ายเงินได้"],
      ["เครื่องคำนวณเดียวกับในแอป", "การคาดการณ์ใน ChatGPT คำนวณด้วยเครื่องเดียวกับที่แอปใช้ และทุกคำตอบบอกเวลาที่ซิงก์ข้อมูลล่าสุด"],
      ["ยกเลิกได้ทุกเมื่อ", "ตัดการเชื่อมต่อได้จากแอป (ตั้งค่า → ใช้งานกับ ChatGPT → จัดการการเข้าถึง) และลบบัญชีพร้อมข้อมูลบนเซิร์ฟเวอร์ได้จากที่เดียวกัน"],
    ] as [string, string][],
    howTitle: "วิธีเชื่อมต่อ",
    howSteps: [
      "อัปเดตรับจ่ายจดเป็นเวอร์ชัน 1.1 ขึ้นไป แล้วไปที่ ตั้งค่า → ใช้งานกับ ChatGPT",
      "ลงชื่อเข้าใช้ด้วย Apple หรือ Google บัญชีนี้ใช้ระบุตัวคุณระหว่างแอปกับ ChatGPT เท่านั้น",
      "ใน ChatGPT เพิ่มแอป Om-Geng แล้วลงชื่อเข้าใช้ด้วยบัญชีเดียวกัน และยอมรับสิทธิ์อ่านที่ขอ",
      "เปิดรับจ่ายจดหนึ่งครั้งเพื่อซิงก์ข้อมูล จากนั้นถาม ChatGPT ได้เลย",
    ],
    askTitle: "ตัวอย่างคำถาม",
    prompts: [
      "เดือนนี้ฉันใช้เงินไปเท่าไหร่ หมวดไหนเยอะสุด",
      "ดูรายจ่ายค่าอาหารสัปดาห์ที่แล้วให้หน่อย",
      "พอร์ตของฉันตอนนี้มูลค่าเท่าไหร่ แบ่งสัดส่วนยังไง",
      "ถ้าออมเดือนละ 15,000 บาท อีกกี่ปีถึงจะมี 1 ล้าน",
    ],
    dataTitle: "ข้อมูลที่ส่งไปยังเซิร์ฟเวอร์",
    dataIntro:
      "หลังจากคุณยืนยันการเชื่อมต่อแล้วเท่านั้น แอปจะคัดลอกข้อมูลต่อไปนี้ไปยังเซิร์ฟเวอร์ของเราเพื่อให้ ChatGPT เรียกดูได้ ทุกจำนวนเงินเป็นสกุลบาท",
    dataItems: [
      "รายการรายรับรายจ่าย: วันที่ จำนวนเงิน ประเภท หมวดหมู่ และโน้ต",
      "กระเป๋าเงินและ Vault: ชื่อ ประเภท และยอดคงเหลือ",
      "การถือครองใน Vault: ชื่อหลักทรัพย์ จำนวน และราคาล่าสุด",
      "ค่าตั้งต้นสำหรับการคาดการณ์: ค่าเฉลี่ยการออม รายการประจำ และผลตอบแทนที่คาดไว้",
    ],
    neverTitle: "ข้อมูลที่ไม่ออกจากเครื่องเลย",
    neverItems: [
      "รูปภาพสลิปและใบเสร็จ รวมถึงข้อความ OCR ดิบ",
      "PIN และการตั้งค่าไบโอเมตริก",
      "เป้าหมายการเงิน ปฏิทินเงินเดือน และข้อมูลส่วนอื่นที่ไม่ได้ระบุข้างต้น",
      "รหัสผ่านหรืออีเมลของคุณ เซิร์ฟเวอร์เก็บเพียงรหัสผู้ใช้ที่ไม่ระบุตัวตน",
    ],
    retentionTitle: "การตัดการเชื่อมต่อและการลบ",
    retention:
      "การตัดการเชื่อมต่อจะหยุดการเข้าถึงของ ChatGPT ทันที แต่ยังเก็บสำเนาข้อมูลไว้เพื่อให้เชื่อมต่อใหม่ได้เร็ว การลบบัญชีจากในแอปจะลบสำเนาข้อมูลและบัญชีที่เกี่ยวข้องทั้งหมดออกจากเซิร์ฟเวอร์ รายละเอียดอยู่ในนโยบายความเป็นส่วนตัว",
    linksTitle: "ลิงก์ที่เกี่ยวข้อง",
    home: "หน้าแรก",
    support: "ช่วยเหลือ",
    privacy: "นโยบายความเป็นส่วนตัว",
    terms: "ข้อกำหนดการใช้งาน",
  },
  en: {
    pill: "Use with ChatGPT",
    title: "Ask ChatGPT about your money in Budget Note",
    intro:
      "Connect Budget Note (Om-Geng) to ChatGPT to ask about spending by category or period, look up transactions, see your portfolio value, and get cash-flow and net-worth forecasts. Everything is read-only: ChatGPT cannot add, change, delete or transfer anything.",
    cards: [
      ["Read-only", "All nine tools only read data. None can modify anything in the app or move money."],
      ["Same engine as the app", "Forecasts in ChatGPT are computed by the same engine the app uses, and every answer tells you when your data was last synced."],
      ["Disconnect any time", "Disconnect from the app (Settings → Use with ChatGPT → Manage access), and delete your account and server copy from the same place."],
    ] as [string, string][],
    howTitle: "How to connect",
    howSteps: [
      "Update Budget Note to version 1.1 or later and open Settings → Use with ChatGPT.",
      "Sign in with Apple or Google. This account only identifies you between the app and ChatGPT.",
      "In ChatGPT, add the Om-Geng app, sign in with the same account, and accept the requested read permissions.",
      "Open Budget Note once so it syncs, then start asking ChatGPT.",
    ],
    askTitle: "Things to ask",
    prompts: [
      "How much did I spend this month, and on what?",
      "Show my restaurant expenses from last week.",
      "What is my portfolio worth right now, and how is it allocated?",
      "When will I reach 1,000,000 THB net worth if I keep saving at this rate?",
    ],
    dataTitle: "What is uploaded",
    dataIntro:
      "Only after you confirm the connection, the app mirrors the following to our server so ChatGPT can read it. All amounts are in Thai baht.",
    dataItems: [
      "Transactions: date, amount, type, category and note",
      "Pockets and Vaults: name, type and balance",
      "Vault holdings: instrument, quantity and latest price",
      "Forecast inputs: average savings, recurring items and expected returns",
    ],
    neverTitle: "What never leaves your phone",
    neverItems: [
      "Receipt and slip images, and raw OCR text",
      "PIN and biometric settings",
      "Financial goals, salary calendar and anything else not listed above",
      "Your password or e-mail. The server stores only an anonymous user id.",
    ],
    retentionTitle: "Disconnecting and deleting",
    retention:
      "Disconnecting stops ChatGPT's access immediately but keeps the server copy so reconnecting is fast. Deleting your account from the app removes the copy and the linked account from our server. Details are in the privacy policy.",
    linksTitle: "Related links",
    home: "Home",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};

export function ChatGPTContent() {
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
        {t.cards.map(([title, body]) => (
          <article className="support-card glass" key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="support-body glass" style={{ marginTop: 20 }}>
        <h2>{t.howTitle}</h2>
        <div className="steps" style={{ marginTop: 14 }}>
          {t.howSteps.map((step, i) => (
            <div className="step" key={step}>
              <span className="step-badge">{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: 24 }}>{t.askTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          {t.prompts.map((prompt) => (
            <li key={prompt}>“{prompt}”</li>
          ))}
        </ul>

        <h2 style={{ marginTop: 24 }}>{t.dataTitle}</h2>
        <p>{t.dataIntro}</p>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          {t.dataItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: 24 }}>{t.neverTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          {t.neverItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: 24 }}>{t.retentionTitle}</h2>
        <p>{t.retention}</p>

        <h2 style={{ marginTop: 24 }}>{t.linksTitle}</h2>
        <ul className="meta-list" style={{ marginTop: 14 }}>
          <li><Link href="/">{t.home}</Link></li>
          <li><Link href="/support">{t.support}</Link></li>
          <li><Link href="/privacy">{t.privacy}</Link></li>
          <li><Link href="/terms">{t.terms}</Link></li>
        </ul>
      </section>
    </main>
  );
}
