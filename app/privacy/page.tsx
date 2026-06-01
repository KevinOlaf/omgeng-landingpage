import type { Metadata } from "next";
import { AppBar } from "@/components/app-bar";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว",
  description: "นโยบายความเป็นส่วนตัวของแอป รับจ่ายจด",
  alternates: {
    canonical: "https://budget-note.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <AppBar />
      <PrivacyContent />
    </>
  );
}
