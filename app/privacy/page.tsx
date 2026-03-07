import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "นโยบายความเป็นส่วนตัวของแอป รับจ่ายจด",
  alternates: {
    canonical: "https://omgeng.app/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
