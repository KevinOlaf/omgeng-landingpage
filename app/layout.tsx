import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://omgeng.app"),
  title: {
    default: "รับจ่ายจด | แอปจดรายรับรายจ่ายสำหรับ iPhone",
    template: "%s | รับจ่ายจด",
  },
  description:
    "แอปจดรายรับรายจ่ายสำหรับ iPhone เพิ่มรายการได้ด้วยการพิมพ์ พูด หรือสแกนสลิป พร้อมงบประมาณ รายงาน ปฏิทินเงินเดือน และเป้าหมายการเงินในแอปเดียว",
  applicationName: "รับจ่ายจด",
  keywords: [
    "รายรับรายจ่าย",
    "บัญชีครัวเรือน",
    "จดรายจ่าย",
    "งบประมาณ",
    "สแกนสลิป",
    "การเงินส่วนตัว",
  ],
  openGraph: {
    title: "รับจ่ายจด",
    description:
      "จดรายรับรายจ่ายให้เร็วขึ้นด้วยการพิมพ์ พูด หรือสแกนสลิป ดูงบประมาณ รายงาน กระแสเงินสด และเป้าหมายการเงินในแอปเดียว",
    url: "https://omgeng.app",
    siteName: "รับจ่ายจด",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับจ่ายจด",
    description:
      "จดรายรับรายจ่ายให้เร็วขึ้นด้วยการพิมพ์ พูด หรือสแกนสลิป ดูงบประมาณ รายงาน กระแสเงินสด และเป้าหมายการเงินในแอปเดียว",
  },
  alternates: {
    canonical: "https://omgeng.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
