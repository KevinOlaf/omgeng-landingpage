"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
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
    intro: string;
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
    description: string;
    facts: [string, string][];
  };
  callout: {
    title: string;
    body: string;
    cta: string;
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
    developer: string;
    copyright: string;
    tagline: string;
  };
};

const copy: Record<Locale, Copy> = {
  th: {
    nav: {
      subtitle: "Personal finance for iPhone",
      features: "ฟีเจอร์",
      overview: "ภาพรวม",
      appStore: "ข้อมูล App Store",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      pill: "iPhone app สำหรับจดรายรับรายจ่ายแบบทันสมัย",
      title: "จดเงินเข้าออก ให้ตามชีวิตจริงของคุณ",
      description:
        "รับจ่ายจด ช่วยให้การบันทึกการเงินเร็วขึ้นด้วยการพิมพ์ พูด หรือสแกนสลิป พร้อมงบประมาณ รายงาน ปฏิทินเงินเดือน วิดเจ็ต และเครื่องมือวางแผนเงินออมในแอปเดียว",
      primary: "ดูข้อมูลเผยแพร่แอป",
      secondary: "หน้าช่วยเหลือและติดต่อ",
      tags: ["เพิ่มรายการด้วยเสียงภาษาไทย", "สแกนใบเสร็จและสลิป", "นำเข้า CSV / XLSX"],
      budget: "วันนี้ใช้ไป ฿420 จากงบ ฿900",
      stats: [
        ["รายรับเดือนนี้", "ติดตามหลายแหล่งรายได้และวันเงินเข้า"],
        ["รายจ่ายตามหมวด", "ดูสัดส่วนค่าอาหาร เดินทาง ช้อปปิ้ง และอื่น ๆ"],
        ["สแกนสลิป", "ช่วยดึงยอด หมายเหตุ และประเภทรายการให้เร็วขึ้น"],
        ["Vault & Goals", "แยกเงินออม เป้าหมาย และสินทรัพย์ในพื้นที่เดียว"],
      ],
    },
    features: {
      eyebrow: "Core Features",
      title: "ครบตั้งแต่จดรายการ ไปจนถึงมองภาพการเงินระยะยาว",
      intro:
        "หน้าโปรโมตนี้ออกแบบให้รวมข้อมูลสำคัญสำหรับผู้ใช้และสำหรับส่งขึ้น App Store: สิ่งที่แอปทำได้จริง เหมาะกับใคร รองรับอะไร และมีหน้ากฎหมายกับหน้าช่วยเหลือพร้อมใช้งาน",
      items: [
        ["จดเร็วแบบที่ถนัด", "เพิ่มรายการได้ทั้งพิมพ์เอง ใช้เสียงภาษาไทย หรือสแกนสลิปและใบเสร็จให้แอปช่วยดึงข้อมูล"],
        ["เห็นภาพการเงินชัดเจน", "ดูสรุปรายวัน รายสัปดาห์ รายเดือน พร้อมกราฟสัดส่วนรายรับรายจ่าย แนวโน้ม และรายงานส่งออกได้"],
        ["คุมงบได้จริง", "ตั้งงบประมาณ รับการแจ้งเตือนเมื่อใช้จ่ายใกล้เกินงบ และติดตามว่าตอนนี้คุณยังอยู่ในแผนหรือไม่"],
        ["วางแผนวันเงินเดือน", "ตั้งรอบเงินเดือนหรือรายได้หลายแหล่ง เพื่อดูเงินเข้าแต่ละรอบและคำนวณงบต่อวันให้เหมาะกับกระแสเงินสด"],
        ["เก็บออมและติดตามสินทรัพย์", "สร้าง Vault สำหรับเงินออม เป้าหมายการเงิน หุ้น หรือคริปโต เพื่อมองภาพอนาคตทางการเงินในจุดเดียว"],
        ["พร้อมใช้ในชีวิตประจำวัน", "มีวิดเจ็ตบนหน้าจอหลัก รองรับการนำเข้า CSV/XLSX และมีหน้าช่วยเหลือสำหรับใช้งานจริง"],
      ],
    },
    story: {
      eyebrow: "Story",
      title: "ข้อความที่ใช้โปรโมตแอปได้ทันที",
      description:
        "จดรายรับรายจ่ายให้เร็วขึ้นด้วยการพิมพ์ พูด หรือสแกนสลิป ดูงบประมาณ รายงาน กระแสเงินสด และเป้าหมายการเงินในแอปเดียว",
      steps: [
        "บันทึกค่าใช้จ่าย รายรับ และรายการประจำวันได้เร็วโดยไม่ต้องผ่านขั้นตอนยาว",
        "ติดตามงบประมาณ แนวโน้ม และรายงานเพื่อดูว่าพฤติกรรมการเงินกำลังไปทางไหน",
        "ใช้ Vault, ปฏิทินเงินเดือน และเครื่องมือวางแผน เพื่อเปลี่ยนจากแค่จด เป็นการวางแผนจริง",
      ],
      whyEyebrow: "Why It Fits",
      why: [
        "เหมาะกับผู้ใช้ที่อยากเริ่มจดการเงินแบบไม่ซับซ้อน",
        "เหมาะกับคนทำงานประจำ ฟรีแลนซ์ และผู้ที่มีหลายแหล่งรายได้",
        "ช่วยย้ายข้อมูลเดิมเข้ามาได้ผ่านไฟล์ CSV และ Excel",
        "มีหน้าช่วยเหลือ นโยบายความเป็นส่วนตัว และเงื่อนไขการใช้งานครบ",
      ],
      shots: [
        ["จดรายรับรายจ่ายได้ในไม่กี่วินาที", "ออกแบบให้เพิ่มรายการประจำวันได้เร็ว พร้อมหมวดหมู่และสรุปทันที"],
        ["พูดหรือสแกนสลิป เพื่อเพิ่มรายการอัตโนมัติ", "เหมาะกับการใช้งานจริงในชีวิตประจำวัน ไม่ต้องคีย์ทุกอย่างเองเสมอไป"],
        ["วางแผนงบ เงินเดือน และเงินออมในจุดเดียว", "จากภาพรวมรายวัน ไปจนถึงเป้าหมายและการติดตามสินทรัพย์"],
      ],
    },
    store: {
      eyebrow: "App Store Ready",
      title: "ข้อมูลสำคัญสำหรับหน้าโปรโมตและการส่งขึ้นสโตร์",
      description:
        "โครงหน้านี้รวมลิงก์สำคัญสำหรับ App Store Connect: Support URL, Marketing site, Privacy Policy และ Terms of Use ไว้ครบในโดเมนเดียว",
      facts: [
        ["แพลตฟอร์ม", "iPhone (iOS)"],
        ["ภาษา", "ไทย และภาษาอื่นที่รองรับในแอป"],
        ["หมวด", "Utilities"],
        ["ความเป็นส่วนตัว", "มีหน้า Privacy Policy, Terms และ Support ครบ"],
      ],
    },
    callout: {
      title: "พร้อมใช้เป็น landing page จริงและเป็นฐานข้อมูล App Store",
      body:
        "หากคุณนำโปรเจกต์นี้ไป deploy ที่ omgeng.app คุณจะได้ทั้งหน้าโปรโมต, หน้า support, privacy policy และ terms ที่ลิงก์ถึงกันครบในชุดเดียว",
      cta: "ดู Privacy Policy",
    },
    faq: {
      eyebrow: "FAQ",
      title: "คำถามที่ผู้ใช้มักถามก่อนดาวน์โหลด",
      items: [
        ["แอปต้องสมัครสมาชิกก่อนใช้งานไหม", "ฟีเจอร์หลักของแอปถูกออกแบบให้เริ่มใช้งานได้ทันที โดยบางความสามารถเพิ่มเติมอาจมีข้อจำกัดตามแผนการใช้งาน"],
        ["รองรับการสแกนเอกสารแบบไหน", "รองรับการสแกนสลิปและใบเสร็จ โดยบางโหมด OCR หรือฟีเจอร์ AI อาจขึ้นอยู่กับความสามารถของอุปกรณ์"],
        ["นำเข้าข้อมูลจากไฟล์ได้ไหม", "ได้ สามารถนำเข้ารายการจากไฟล์ CSV และ Excel (XLSX) เพื่อเริ่มต้นใช้งานหรือย้ายข้อมูลเดิมเข้ามา"],
        ["ใช้สำหรับวางแผนเงินออมได้แค่ไหน", "นอกจากจดรายรับรายจ่าย แอปยังมี Vault, เป้าหมายการเงิน, มุมมองรายงาน และการคาดการณ์เพื่อช่วยมองภาพรวมได้ดีขึ้น"],
      ],
    },
    footer: {
      title: "รับจ่ายจด",
      body:
        "แอปจดรายรับรายจ่ายสำหรับ iPhone ที่ช่วยให้การติดตามงบประมาณ รายงาน และการวางแผนการเงินประจำวันทำได้ง่ายขึ้น",
      links: "ลิงก์สำคัญ",
      developer: "ผู้พัฒนา",
      copyright: "© 2026 Ratshavarin Trinabhametr",
      tagline: 'Marketing site for the iOS app “รับจ่ายจด”',
    },
  },
  en: {
    nav: {
      subtitle: "Personal finance for iPhone",
      features: "Features",
      overview: "Overview",
      appStore: "App Store Info",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      pill: "A modern iPhone app for income and expense tracking",
      title: "Track money the way real life actually happens",
      description:
        "Om Geng helps you log finances faster by typing, speaking, or scanning slips, with budgets, reports, payday planning, widgets, and savings tools in one app.",
      primary: "View App Launch Info",
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
      intro:
        "This promo page is built to cover what users and App Store reviewers need: what the app really does, who it is for, what it supports, and the legal and support pages that go with it.",
      items: [
        ["Fast entry your way", "Add transactions by typing, Thai voice input, or slip and receipt scanning with assisted extraction"],
        ["Clear financial overview", "See daily, weekly, and monthly summaries with income-versus-expense charts, trends, and exportable reports"],
        ["Budget control that matters", "Set budgets, get alerts when spending gets close, and monitor whether you are still on track"],
        ["Payday planning", "Track salary cycles or multiple income streams to understand inflows and calculate a practical daily budget"],
        ["Savings and asset tracking", "Use Vaults for savings goals, stocks, or crypto so you can see a broader financial picture"],
        ["Ready for daily use", "Includes home screen widgets, CSV/XLSX import, and support pages suitable for real product deployment"],
      ],
    },
    story: {
      eyebrow: "Story",
      title: "Launch-ready marketing copy",
      description:
        "Track income and expenses faster by typing, speaking, or scanning slips. View budgets, reports, cash flow, and savings goals in one app.",
      steps: [
        "Capture everyday income and spending quickly without a heavy workflow",
        "Track budgets, trends, and reports so you can see where your money behavior is heading",
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
      eyebrow: "App Store Ready",
      title: "The key information needed for promotion and store submission",
      description:
        "This site structure includes the links App Store Connect typically needs: Support URL, marketing site, Privacy Policy, and Terms of Use on one domain.",
      facts: [
        ["Platform", "iPhone (iOS)"],
        ["Languages", "Thai plus additional supported in-app languages"],
        ["Category", "Utilities"],
        ["Privacy", "Privacy Policy, Terms, and Support pages included"],
      ],
    },
    callout: {
      title: "Ready to serve as both a landing page and App Store support site",
      body:
        "If you deploy this project at omgeng.app, you get a homepage, support page, privacy policy, and terms page that are already linked together as one product site.",
      cta: "View Privacy Policy",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before download",
      items: [
        ["Do users need to sign up before using the app?", "The main experience is designed to be usable immediately, although some advanced capabilities may depend on the selected plan."],
        ["What kinds of documents can it scan?", "It supports receipt and payment slip scanning. Some OCR or AI-enhanced modes may depend on device capability."],
        ["Can users import existing data?", "Yes. The app supports CSV and Excel (XLSX) imports so users can bring in existing transaction history."],
        ["How far does it go for savings planning?", "Beyond expense tracking, the app includes Vaults, goals, reports, and projection-oriented tools for a broader financial view."],
      ],
    },
    footer: {
      title: "Om Geng",
      body:
        "An iPhone finance app designed to make budgeting, reporting, and everyday money planning easier to maintain.",
      links: "Key Links",
      developer: "Developer",
      copyright: "© 2026 Ratshavarin Trinabhametr",
      tagline: 'Marketing site for the iOS app "รับจ่ายจด"',
    },
  },
};

export default function HomePage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <>
      <header className="page-shell nav glass">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">รจ</div>
            <div className="brand-text">
              <strong>รับจ่ายจด</strong>
              <span>{t.nav.subtitle}</span>
            </div>
          </Link>

          <div className="nav-actions">
            <nav className="nav-links" aria-label="Primary">
              <Link href="#features">{t.nav.features}</Link>
              <Link href="#screens">{t.nav.overview}</Link>
              <Link href="#appstore">{t.nav.appStore}</Link>
              <Link href="/support">{t.nav.support}</Link>
              <Link href="/privacy">{t.nav.privacy}</Link>
              <Link href="/terms">{t.nav.terms}</Link>
            </nav>
            <LanguageToggle />
          </div>
        </div>
      </header>

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
            <div className="device">
              <div className="device-screen">
                <div className="pill">{t.hero.budget}</div>
                <div className="mini-stat-grid">
                  {t.hero.stats.map(([title, description]) => (
                    <div className="mini-card" key={title}>
                      <strong>{title}</strong>
                      <span>{description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <span className="eyebrow">{t.features.eyebrow}</span>
          <h2 className="section-title">{t.features.title}</h2>
          <p className="section-copy">{t.features.intro}</p>

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

          <div className="screenshot-strip">
            {t.story.shots.map(([title, body]) => (
              <div className="shot" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="appstore">
          <span className="eyebrow">{t.store.eyebrow}</span>
          <h2 className="section-title">{t.store.title}</h2>
          <p className="section-copy">{t.store.description}</p>

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
          <div className="callout">
            <div>
              <strong style={{ fontSize: "1.6rem" }}>{t.callout.title}</strong>
              <p>{t.callout.body}</p>
            </div>
            <Link className="button button-secondary" href="/privacy">
              {t.callout.cta}
            </Link>
          </div>
        </section>

        <section className="section">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="section-title">{t.faq.title}</h2>
          <div className="faq-grid" style={{ marginTop: 24 }}>
            {t.faq.items.map(([question, answer]) => (
              <article className="faq-card" key={question}>
                <strong>{question}</strong>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-shell footer">
        <div className="footer-grid">
          <div className="footer-card">
            <strong>{t.footer.title}</strong>
            <p>{t.footer.body}</p>
          </div>
          <div className="footer-card">
            <strong>{t.footer.links}</strong>
            <span>
              <Link href="/support">Support</Link>
            </span>
            <span>
              <Link href="/privacy">Privacy Policy</Link>
            </span>
            <span>
              <Link href="/terms">Terms of Use</Link>
            </span>
          </div>
          <div className="footer-card">
            <strong>{t.footer.developer}</strong>
            <p>Ratshavarin Trinabhametr</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </footer>
    </>
  );
}
