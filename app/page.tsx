"use client";

import Image from "next/image";
import Link from "next/link";
import { AppBar } from "@/components/app-bar";
import { useLocale, type Locale } from "@/components/locale-provider";

type Copy = {
  nav: Record<string, string>;
  hero: {
    pill: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    tags: string[];
    budget: string;
    stats: [string, string][];
  };
  features: {
    eyebrow: string;
    title: string;
    items: [string, string][];
  };
  story: {
    eyebrow: string;
    title: string;
    description: string;
    steps: string[];
    whyEyebrow: string;
    why: string[];
    shots: [string, string][];
  };
  store: {
    eyebrow: string;
    title: string;
    facts: [string, string][];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: [string, string][];
  };
  footer: {
    title: string;
    body: string;
    links: string;
    emailLabel: string;
    copyright: string;
  };
};

const copy: Record<Locale, Copy> = {
  th: {
    nav: {
      features: "ฟีเจอร์",
      overview: "ภาพรวม",
      appStore: "รายละเอียดแอป",
      support: "ช่วยเหลือ",
      privacy: "ความเป็นส่วนตัว",
      terms: "ข้อกำหนด",
    },
    hero: {
      pill: "แอปจดรายรับรายจ่ายสำหรับ iPhone และ iPad",
      title: "จดรายรับรายจ่ายได้ง่ายขึ้นในทุกวัน",
      description:
        "รับจ่ายจด ช่วยให้คุณบันทึกรายรับรายจ่ายได้เร็วขึ้น จะพิมพ์ พูด หรือสแกนสลิปก็ทำได้ พร้อมงบประมาณ รายงาน PDF แบบละเอียด ปฏิทินเงินเดือน วิดเจ็ต และเครื่องมือวางแผนเงินออมในแอปเดียว",
      primary: "ดูรายละเอียดแอป",
      secondary: "หน้าช่วยเหลือและติดต่อ",
      tags: ["เพิ่มรายการด้วยเสียงภาษาไทย", "สแกนใบเสร็จและสลิป", "นำเข้าข้อมูลจาก CSV / XLSX"],
      budget: "วันนี้ใช้ไป ฿420 จากงบ ฿900",
      stats: [
        ["รายรับเดือนนี้", "ติดตามรายได้หลายทาง พร้อมดูรอบเงินเข้าได้ชัดเจน"],
        ["รายจ่ายตามหมวด", "ดูทันทีว่าเงินไปกับค่าอาหาร เดินทาง ช้อปปิ้ง หรืออะไรบ้าง"],
        ["สแกนสลิป", "ช่วยดึงยอด หมายเหตุ และประเภทรายการให้กรอกได้เร็วขึ้น"],
        ["Vault & Goals", "แยกเงินออม เป้าหมาย และสินทรัพย์ไว้ดูในที่เดียว"],
      ],
    },
    features: {
      eyebrow: "ฟีเจอร์หลัก",
      title: "ตั้งแต่จดรายการประจำวัน ไปจนถึงมองภาพการเงินระยะยาว",
      items: [
        ["จดเร็วในแบบที่คุณถนัด", "เพิ่มรายการได้ทั้งการพิมพ์ ใช้เสียงภาษาไทย หรือสแกนสลิปและใบเสร็จให้แอปช่วยดึงข้อมูล"],
        ["เห็นภาพการเงินชัดขึ้น", "ดูสรุปรายวัน รายสัปดาห์ และรายเดือน พร้อมกราฟ แนวโน้ม และสร้างรายงาน PDF แบบละเอียดเพื่อสรุปหรือแชร์ได้"],
        ["คุมงบได้จริง", "ตั้งงบประมาณ รับการแจ้งเตือนเมื่อใช้จ่ายใกล้เกินงบ และเช็กได้ทันทีว่ายังอยู่ในแผนไหม"],
        ["วางแผนตามรอบเงินเข้า", "ตั้งรอบเงินเดือนหรือรายได้หลายแหล่ง เพื่อดูเงินเข้าแต่ละช่วงและคำนวณงบต่อวันให้เหมาะกับกระแสเงินสด"],
        ["เก็บออมและติดตามสินทรัพย์", "สร้าง Vault สำหรับเงินออม เป้าหมายการเงิน หุ้น หรือคริปโต เพื่อดูภาพรวมในจุดเดียว"],
        ["พร้อมใช้ทุกวัน", "มีวิดเจ็ตบนหน้าจอหลัก รองรับการนำเข้า CSV/XLSX และมีหน้าช่วยเหลือสำหรับใช้งานจริง"],
      ],
    },
    story: {
      eyebrow: "วิธีใช้งาน",
      title: "แอปนี้ช่วยจัดการเงินของคุณอย่างไร",
      description:
        "จากการจดรายการประจำวัน ไปจนถึงการดูงบประมาณ รายงาน PDF กระแสเงินสด และเป้าหมายการเงิน ทุกอย่างรวมอยู่ในแอปเดียว",
      steps: [
        "บันทึกรายรับ รายจ่าย และรายการประจำวันได้เร็ว โดยไม่ต้องผ่านหลายขั้นตอน",
        "ติดตามงบประมาณ แนวโน้ม และรายงาน PDF เพื่อเห็นภาพว่าการใช้เงินกำลังไปทางไหน",
        "ใช้ Vault ปฏิทินเงินเดือน และเครื่องมือวางแผน เพื่อเปลี่ยนจากแค่จด เป็นการวางแผนจริง",
      ],
      whyEyebrow: "เหมาะกับใคร",
      why: [
        "เหมาะกับคนที่อยากเริ่มจดการเงินแบบง่าย ๆ ไม่ซับซ้อน",
        "เหมาะกับทั้งพนักงานประจำ ฟรีแลนซ์ และคนที่มีหลายแหล่งรายได้",
        "ย้ายข้อมูลเดิมเข้ามาได้ผ่านไฟล์ CSV และ Excel",
        "มีหน้าช่วยเหลือ นโยบายความเป็นส่วนตัว และข้อกำหนดการใช้งานครบ",
      ],
      shots: [
        ["จดรายรับรายจ่ายได้ในไม่กี่วินาที", "ออกแบบมาให้เพิ่มรายการประจำวันได้เร็ว พร้อมหมวดหมู่และสรุปให้ทันที"],
        ["พูดหรือสแกนสลิป เพื่อช่วยเพิ่มรายการ", "เหมาะกับการใช้งานจริงในแต่ละวัน ไม่ต้องคีย์ทุกอย่างเองตลอด"],
        ["วางแผนงบ เงินเดือน และเงินออมในที่เดียว", "ตั้งแต่ภาพรวมรายวัน ไปจนถึงเป้าหมายและการติดตามสินทรัพย์"],
      ],
    },
    store: {
      eyebrow: "ข้อมูลแอป",
      title: "รายละเอียดแอป",
      facts: [
        ["แพลตฟอร์ม", "iPhone และ iPad (iOS)"],
        ["ภาษา", "ไทย และภาษาอื่นที่รองรับในแอป"],
        ["หมวด", "Utilities"],
        ["ข้อมูลสำคัญ", "มีหน้าความเป็นส่วนตัว ข้อกำหนดการใช้งาน และช่วยเหลือครบ"],
      ],
    },
    faq: {
      eyebrow: "คำถามที่พบบ่อย",
      title: "คำถามที่พบบ่อย",
      items: [
        ["ต้องสมัครสมาชิกก่อนใช้งานไหม", "ฟีเจอร์หลักของแอปออกแบบให้เริ่มใช้งานได้ทันที ส่วนความสามารถเพิ่มเติมบางอย่างอาจขึ้นอยู่กับแผนที่ใช้งาน"],
        ["รองรับการสแกนเอกสารแบบไหน", "รองรับการสแกนสลิปและใบเสร็จ โดยบางโหมด OCR หรือฟีเจอร์ AI อาจขึ้นอยู่กับความสามารถของอุปกรณ์"],
        ["นำเข้าข้อมูลจากไฟล์ได้ไหม", "ได้ คุณสามารถนำเข้ารายการจากไฟล์ CSV และ Excel (XLSX) เพื่อเริ่มใช้งานหรือย้ายข้อมูลเดิมเข้ามาได้"],
        ["ออกรายงานได้ละเอียดแค่ไหน", "แอปสามารถสร้างรายงาน PDF แบบละเอียดเพื่อใช้สรุปภาพรวมการเงิน ติดตามย้อนหลัง หรือแชร์ต่อได้สะดวก"],
        ["ใช้วางแผนเงินออมได้แค่ไหน", "นอกจากการจดรายรับรายจ่าย แอปยังมี Vault เป้าหมายการเงิน มุมมองรายงาน และเครื่องมือช่วยมองภาพรวมการเงินให้ชัดขึ้น"],
      ],
    },
    footer: {
      title: "รับจ่ายจด",
      body:
        "แอปจดรายรับรายจ่ายสำหรับ iPhone และ iPad ที่ช่วยให้การคุมงบ ดูรายงาน PDF และวางแผนการเงินในแต่ละวันเป็นเรื่องง่ายขึ้น",
      links: "ลิงก์สำคัญ",
      emailLabel: "อีเมลช่วยเหลือ",
      copyright: "© 2026 รับจ่ายจด",
    },
  },
  en: {
    nav: {
      features: "Features",
      overview: "Overview",
      appStore: "Details",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      pill: "A modern iPhone and iPad app for income and expense tracking",
      title: "Track money the way real life actually happens",
      description:
        "Budget Note helps you log finances faster by typing, speaking, or scanning slips, with budgets, advanced PDF reports, payday planning, widgets, and savings tools in one app.",
      primary: "App Details",
      secondary: "Support and Contact",
      tags: ["Thai voice entry", "Receipt and slip scanning", "CSV / XLSX import"],
      budget: "Spent ฿420 today from a ฿900 budget",
      stats: [
        ["Monthly income", "Track multiple income sources and payday timing"],
        ["Category spending", "See food, transport, shopping, and other spending mix"],
        ["Slip scan", "Pull amount, note, and transaction type faster"],
        ["Vault & goals", "Manage savings, assets, and financial targets in one place"],
      ],
    },
    features: {
      eyebrow: "Core Features",
      title: "From daily logging to long-term financial visibility",
      items: [
        ["Fast entry your way", "Add transactions by typing, Thai voice input, or slip and receipt scanning with assisted extraction"],
        ["Clear financial overview", "See daily, weekly, and monthly summaries with income-versus-expense charts, trends, and advanced PDF reports you can export or share"],
        ["Budget control that matters", "Set budgets, get alerts when spending gets close, and monitor whether you are still on track"],
        ["Payday planning", "Track salary cycles or multiple income streams to understand inflows and calculate a practical daily budget"],
        ["Savings and asset tracking", "Use Vaults for savings goals, stocks, or crypto so you can see a broader financial picture"],
        ["Ready for daily use", "Includes home screen widgets, CSV/XLSX import, and support pages suitable for real product deployment"],
      ],
    },
    story: {
      eyebrow: "How It Works",
      title: "How Budget Note helps you",
      description:
        "Track income and expenses faster by typing, speaking, or scanning slips. View budgets, advanced PDF reports, cash flow, and savings goals in one app.",
      steps: [
        "Capture everyday income and spending quickly without a heavy workflow",
        "Track budgets, trends, and advanced PDF reports so you can see where your money behavior is heading",
        "Use Vaults, payday planning, and financial tools to move from simple logging into actual planning",
      ],
      whyEyebrow: "Why It Fits",
      why: [
        "Good for users who want simple finance tracking without extra complexity",
        "Useful for salaried workers, freelancers, and people with multiple income sources",
        "Supports migration from existing data through CSV and Excel imports",
        "Includes support, privacy, and terms pages in the same site",
      ],
      shots: [
        ["Track income and expenses in seconds", "Built for quick daily logging with categories and instant summaries"],
        ["Speak or scan to add transactions faster", "Fits real-world use so users do not always need to type everything manually"],
        ["Manage budgets, paydays, and savings in one place", "From daily views to goals and asset tracking"],
      ],
    },
    store: {
      eyebrow: "App Details",
      title: "About the App",
      facts: [
        ["Platform", "iPhone and iPad (iOS)"],
        ["Languages", "Thai plus additional supported in-app languages"],
        ["Category", "Utilities"],
        ["Privacy", "Privacy Policy, Terms, and Support pages included"],
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before download",
      items: [
        ["Do users need to sign up before using the app?", "The main experience is designed to be usable immediately, although some advanced capabilities may depend on the selected plan."],
        ["What kinds of documents can it scan?", "It supports receipt and payment slip scanning. Some OCR or AI-enhanced modes may depend on device capability."],
        ["Can users import existing data?", "Yes. The app supports CSV and Excel (XLSX) imports so users can bring in existing transaction history."],
        ["How detailed are the reports?", "The app can generate advanced PDF reports for reviewing financial history, summarizing trends, or sharing a clearer overview."],
        ["How far does it go for savings planning?", "Beyond expense tracking, the app includes Vaults, goals, reports, and projection-oriented tools for a broader financial view."],
      ],
    },
    footer: {
      title: "Budget Note",
      body:
        "An iPhone and iPad finance app designed to make budgeting, advanced PDF reporting, and everyday money planning easier to maintain.",
      links: "Key Links",
      emailLabel: "Support Email",
      copyright: "© 2026 Budget Note",
    },
  },
};

export default function HomePage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <>
      <AppBar isHome />

      <main className="page-shell">
        <section className="hero section">
          <div className="hero-copy">
            <span className="pill">{t.hero.pill}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#appstore">
                {t.hero.primary}
              </a>
              <Link className="button button-secondary" href="/support">
                {t.hero.secondary}
              </Link>
            </div>

            <div className="hero-meta">
              {t.hero.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card glass">
            <Image
              src="/landingpage-image.png"
              alt={locale === "th" ? "ภาพหน้าจอแอป รับจ่ายจดบน iPad" : "Budget Note iPad app screenshot"}
              width={1000}
              height={1333}
              className="app-shot-image"
              priority
            />
          </div>
        </section>

        <section className="section" id="features">
          <span className="eyebrow">{t.features.eyebrow}</span>
          <h2 className="section-title">{t.features.title}</h2>

          <div className="feature-grid" style={{ marginTop: 24 }}>
            {t.features.items.map(([title, description]) => (
              <article className="card" key={title}>
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="screens">
          <div className="store-grid">
            <div className="card">
              <span className="eyebrow">{t.story.eyebrow}</span>
              <h2 className="section-title">{t.story.title}</h2>
              <p className="section-copy">{t.story.description}</p>

              <div className="steps">
                {t.story.steps.map((step, index) => (
                  <div className="step" key={step}>
                    <div className="step-badge">{index + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="card">
              <span className="eyebrow">{t.story.whyEyebrow}</span>
              <ul className="bullet-list">
                {t.story.why.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="screenshot-notes" style={{ marginTop: 24, gridTemplateColumns: "repeat(3, 1fr)" }}>
            {t.story.shots.map(([title, body]) => (
              <div className="shot-note" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="appstore">
          <span className="eyebrow">{t.store.eyebrow}</span>
          <h2 className="section-title">{t.store.title}</h2>

          <div className="info-grid" style={{ marginTop: 24 }}>
            {t.store.facts.map(([label, value]) => (
              <div className="card info-card" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>

        </section>

        <section className="section">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="section-title">{t.faq.title}</h2>
          <div className="faq-list" style={{ marginTop: 24 }}>
            {t.faq.items.map(([question, answer]) => (
              <article className="faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-shell footer">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>{t.footer.title}</strong>
            <p>{t.footer.body}</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <strong>{t.footer.links}</strong>
            <Link href="/support">{t.nav.support}</Link>
            <Link href="/privacy">{t.nav.privacy}</Link>
            <Link href="/terms">{t.nav.terms}</Link>
            <a href="mailto:support@budget-note.com">{t.footer.emailLabel}: support@budget-note.com</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
        </div>
      </footer>
    </>
  );
}
