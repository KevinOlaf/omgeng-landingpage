"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const copy = {
  th: {
    pill: "ความเป็นส่วนตัว",
    title: "นโยบายความเป็นส่วนตัว",
    intro:
      "เอกสารนี้อธิบายแนวทางการเก็บ ใช้ และดูแลข้อมูลเมื่อคุณใช้งานแอป รับจ่ายจด และเว็บไซต์ budget-note.com",
    effective: "มีผลบังคับใช้: 5 กันยายน 2026",
    sections: [
      ["1. ข้อมูลที่แอปอาจประมวลผล", "แอปอาจประมวลผลข้อมูลที่คุณกรอกหรือสร้างขึ้นระหว่างการใช้งาน เช่น รายรับ รายจ่าย หมวดหมู่ หมายเหตุ รูปภาพสลิปหรือใบเสร็จ ข้อมูลการตั้งงบประมาณ เป้าหมายการเงิน ข้อมูลที่นำเข้า และเนื้อหาที่ใช้กับฟีเจอร์สแกนหรือผู้ช่วยภายในแอป"],
      ["2. วัตถุประสงค์ในการใช้ข้อมูล", ["เพื่อให้แอปสามารถบันทึก วิเคราะห์ และแสดงผลข้อมูลการเงินของคุณ", "เพื่อให้ฟีเจอร์สแกน เสียง รายงาน วิดเจ็ต และการนำเข้า/ส่งออกทำงานได้ตามปกติ", "เพื่อปรับปรุงประสิทธิภาพ ความเสถียร และประสบการณ์การใช้งานของแอป", "เพื่อรองรับฟีเจอร์โฆษณาหรือการวัดผลที่เกี่ยวข้อง หากมีการเปิดใช้ในแอป"]],
      ["3. การจัดเก็บและการดูแลข้อมูล", "ข้อมูลการเงินหลักจัดเก็บบนอุปกรณ์ของคุณ ฟีเจอร์ iCloud ที่คุณเลือกใช้จะใช้บริการของ Apple และ AI สำหรับอ่านใบเสร็จทำงานบนอุปกรณ์ การอัปเดตราคาและโฆษณาใช้บริการเครือข่าย ส่วนการเชื่อมต่อ ChatGPT ที่เลือกใช้ได้จะใช้บริการบนเซิร์ฟเวอร์ตามรายละเอียดด้านล่าง"],
      ["4. การติดตามและโฆษณา", "เวอร์ชันฟรีใช้ Google AdMob สำหรับโฆษณาแลกรางวัล SDK โฆษณาของ Google อาจประมวลผลรหัสอุปกรณ์ ที่อยู่ IP การโต้ตอบกับโฆษณา และข้อมูลวินิจฉัย เพื่อแสดงและวัดผลโฆษณาและป้องกันการทุจริต แอปขออนุญาตติดตามผ่าน App Tracking Transparency ของ Apple ก่อนเริ่มระบบโฆษณา คุณเปลี่ยนสิทธิ์นี้ได้ในการตั้งค่า iOS การปฏิเสธการติดตามไม่ได้หยุดการเก็บข้อมูลเกี่ยวกับโฆษณาทั้งหมด การใช้งานแบบ Premium จะไม่เริ่มระบบโฆษณา"],
      ["5. สิทธิของผู้ใช้", "คุณสามารถหยุดใช้งานแอป ลบข้อมูลภายในแอป หรือจัดการสิทธิ์การเข้าถึง เช่น รูปภาพ ไมโครโฟน การรู้จำเสียง และการแจ้งเตือน ได้ผ่านการตั้งค่าของอุปกรณ์และภายในแอป"],
      ["6. การเชื่อมต่อ ChatGPT ที่เลือกใช้ได้", "ในแอปเวอร์ชันที่รองรับการเชื่อมต่อ ChatGPT หากคุณลงชื่อเข้าใช้และอนุญาตการเชื่อมต่อ ระบบจะส่งสำเนาข้อมูลบัญชีและยอดคงเหลือ วันที่ จำนวนเงิน หมวดหมู่และหมายเหตุของรายการ สินทรัพย์ รายการประจำ และข้อมูลสำหรับการคาดการณ์ไปยังเซิร์ฟเวอร์ รวมถึงรหัสบัญชี รหัสการติดตั้งที่สุ่มขึ้น เขตเวลา เวอร์ชันแอป และข้อมูลสถานะการซิงค์และการเชื่อมต่อ การเชื่อมต่อนี้ไม่ส่งไฟล์ภาพใบเสร็จหรือสลิป แต่ข้อความที่คุณยืนยันและบันทึกเป็นหมายเหตุของรายการอาจถูกส่งไปด้วย"],
      ["7. การลงชื่อเข้าใช้และผู้ให้บริการ", "Apple หรือ Google และ Google Firebase Authentication ประมวลผลข้อมูลการลงชื่อเข้าใช้ ซึ่งอาจรวมถึงชื่อและอีเมลของคุณ บริการ API การอนุญาตสิทธิ์ และการเรียกดูข้อมูลการเงินของเราใช้โครงสร้างพื้นฐานของ Railway เราจัดเก็บข้อมูลการอนุญาตและโทเคนเพื่อให้ ChatGPT เรียกดูข้อมูลภายในขอบเขตสิทธิ์การอ่านที่คุณอนุมัติ ผลลัพธ์การเงินที่ร้องขอ รวมถึงรายละเอียดและหมายเหตุของรายการในกรณีที่เกี่ยวข้อง จะถูกส่งให้ ChatGPT/OpenAI ข้อมูลที่ ChatGPT ได้รับแล้วอยู่ภายใต้การตั้งค่าและนโยบายของ OpenAI"],
      ["8. การยกเลิกการเชื่อมต่อและระยะเวลาเก็บข้อมูล", "การยกเลิกการเชื่อมต่อภายในแอปจะหยุดสิทธิ์เข้าถึงและการซิงค์เพิ่มเติม แต่ยังเก็บสำเนาบนเซิร์ฟเวอร์ไว้สำหรับการเชื่อมต่อใหม่ การนำการเชื่อมต่อออกจาก ChatGPT เพียงอย่างเดียวอาจไม่หยุดการซิงค์จากโทรศัพท์ทันที โปรดใช้คำสั่งยกเลิกการเชื่อมต่อในแอปนี้ สำเนาข้อมูลการเงินจะเก็บไว้จนกว่าจะลบบัญชี การลบรายการแต่ละรายการจะซ่อนรายการนั้นจากผลการเรียกดูข้อมูล แต่เนื้อหาอาจยังอยู่ในระเบียนที่ทำเครื่องหมายว่าลบแล้วบนเซิร์ฟเวอร์จนกว่าจะลบบัญชี"],
      ["9. การลบบัญชี", "ใช้คำสั่งลบบัญชีในการตั้งค่าบัญชีของแอปและยืนยันตัวตน เราจะลบสำเนาข้อมูลการเงินออกจากฐานข้อมูลที่ให้บริการอยู่ ระเบียนการซิงค์ และข้อมูลการอนุญาตที่เกี่ยวข้อง รวมถึงลบบัญชีลงชื่อเข้าใช้ Firebase หากใช้ Sign in with Apple เราจะเพิกถอนการอนุญาตของ Apple ด้วย หากบริการลบบัญชีลงชื่อเข้าใช้ไม่พร้อมใช้งานชั่วคราว ระบบจะลองดำเนินการคำขอที่รับไว้แล้วใหม่โดยอัตโนมัติ เราเก็บรหัสบัญชีไว้เฉพาะระหว่างดำเนินการคำขอ เมื่อเสร็จแล้ว จะเก็บรหัสอ้างอิงการลบในรูปแฮชและเวลาที่ขอและดำเนินการเสร็จไว้เจ็ดวัน และลบในการทำความสะอาดข้อมูลรอบถัดไปที่สำเร็จ เพื่อป้องกันคำขอที่ค้างอยู่สร้างข้อมูลกลับมา ข้อมูลสำรองและบันทึกการดำเนินงานของผู้ให้บริการอยู่ภายใต้นโยบายการเก็บรักษาของแต่ละราย การลบออกจากฐานข้อมูลที่ให้บริการอยู่จึงไม่ได้หมายความว่าข้อมูลสำรองของผู้ให้บริการทุกชุดถูกลบทันที"],
      ["10. ข้อมูลที่ยังอยู่หลังลบบัญชี", "ข้อมูลการเงินในอุปกรณ์และ iCloud ของคุณยังอยู่ การลบบัญชีไม่ลบบัญชี Apple หรือ Google ไม่ลบบทสนทนา ChatGPT ที่มีอยู่ และไม่ยกเลิกการสมัครสมาชิกผ่าน App Store โปรดจัดการการสมัครสมาชิกในการตั้งค่าของ Apple และลบข้อมูลการเงินในอุปกรณ์ผ่านเครื่องมือจัดการข้อมูลของแอป Firebase มีระยะเวลาเก็บข้อมูลบนโครงสร้างพื้นฐานของตนหลังลบบัญชี โปรดดูลิงก์นโยบายของผู้ให้บริการด้านล่าง"],
      ["11. การเปลี่ยนแปลงนโยบาย", "นโยบายนี้อาจมีการอัปเดตเพื่อให้สอดคล้องกับการพัฒนาแอป ข้อกำหนดทางกฎหมาย หรือบริการที่เชื่อมต่อในอนาคต โดยจะแสดงฉบับล่าสุดไว้บนหน้านี้"],
    ] as [string, string | string[]][],
    contactTitle: "12. ติดต่อ",
    contact: "หากมีคำถามเกี่ยวกับความเป็นส่วนตัวหรือการใช้งาน กรุณาไปที่หน้า",
    emailLabel: "หรืออีเมล",
  },
  en: {
    pill: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "This document explains how information may be collected, used, and protected when you use the Budget Note app and the budget-note.com website.",
    effective: "Effective date: September 5, 2026",
    sections: [
      ["1. Data the app may process", "The app may process information you enter or generate through usage, including income, expenses, categories, notes, slip or receipt images, budget settings, financial goals, imported records, and content used with scanning or in-app assistant features."],
      ["2. Why data may be used", ["To let the app record, analyze, and display your financial information", "To support scanning, voice input, reports, widgets, and import or export features", "To improve app stability, performance, and user experience", "To support advertising or related measurement features if enabled in the app"]],
      ["3. Storage and protection", "Core financial records are stored on your device; optional iCloud features use Apple’s services. Receipt AI runs on your device. Price updates and advertising use network services. The optional ChatGPT connection uses the hosted services described below."],
      ["4. Tracking and advertising", "The free version uses Google AdMob for rewarded advertising. Google’s advertising SDK may process device identifiers, IP address, ad interactions and diagnostic information to deliver and measure ads and prevent fraud. The app requests permission through Apple’s App Tracking Transparency prompt before initializing ads. You can change tracking permission in iOS Settings. Refusing tracking does not stop all advertising-related data collection. Premium use skips advertising initialization."],
      ["5. User controls", "You can stop using the app, delete in-app data, or manage permissions such as Photos, microphone, speech recognition, and notifications through your device settings and in-app settings where applicable."],
      ["6. Optional ChatGPT connection", "In app versions that offer the ChatGPT connection, signing in and authorizing it uploads a structured copy of your accounts and balances, transaction dates, amounts, categories and notes, holdings, recurring flows and forecast inputs. We also store account identifiers, a random installation identifier, timezone, app version, and synchronization and connection metadata. Receipt and slip image files are not uploaded through this connection; text you confirm and save in transaction notes can be uploaded."],
      ["7. Sign-in and service providers", "Apple or Google and Google Firebase Authentication process your sign-in information, which may include your name and email address. Our API, authorization and financial-query services run on Railway-hosted infrastructure. We store authorization grants and tokens so ChatGPT can request information within the read permissions you approve. Requested financial results, including transaction details and notes where applicable, are sent to ChatGPT/OpenAI. Information already received by ChatGPT is governed by your OpenAI settings and policies."],
      ["8. Disconnecting and retention", "Disconnect in the app stops connection access and further synchronization but retains the server copy for reconnection. Removing the connection only in ChatGPT may not immediately stop phone synchronization; use Disconnect in this app. Financial mirror records are retained until account deletion. Deleting an individual transaction hides it from financial queries but may retain its contents in a deletion-marked server record until account deletion."],
      ["9. Account deletion", "Use Delete account in the app’s account settings and confirm your identity. We remove your financial copy from our live database, synchronization records and associated authorization records, and delete your Firebase sign-in account. For Sign in with Apple, we revoke the Apple authorization. If identity deletion is temporarily unavailable, the accepted request is retried automatically. We retain the account identifier only while processing that request. After completion, a hashed deletion identifier and request/completion timestamps remain for seven days and are removed by the next successful cleanup to prevent interrupted requests from restoring account records. Service-provider backups and operational logs follow their separate retention policies; deletion from our live database does not mean every provider backup is erased immediately."],
      ["10. What account deletion retains", "Your local financial records and iCloud data remain. Account deletion does not delete your Apple or Google account, remove existing ChatGPT conversations, or cancel an App Store subscription. Manage subscriptions in Apple’s subscription settings and remove local financial records through the app’s data management controls. Firebase applies its own infrastructure retention after account deletion; see the provider privacy links below."],
      ["11. Policy changes", "This policy may be updated to reflect product changes, legal requirements, or connected services. The latest version will be published on this page."],
    ] as [string, string | string[]][],
    contactTitle: "12. Contact",
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

          <p>
            <a href="https://firebase.google.com/support/privacy">Firebase Privacy</a>{" · "}
            <a href="https://policies.google.com/privacy">Google Privacy</a>{" · "}
            <a href="https://openai.com/policies/privacy-policy/">OpenAI Privacy</a>{" · "}
            <a href="https://railway.com/legal/privacy">Railway Privacy</a>
          </p>
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
