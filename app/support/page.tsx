import type { Metadata } from "next";
import { AppBar } from "@/components/app-bar";
import { SupportContent } from "@/components/support-content";

export const metadata: Metadata = {
  title: "ช่วยเหลือ",
  description: "หน้าช่วยเหลือสำหรับแอป รับจ่ายจด",
  alternates: {
    canonical: "https://omgeng.app/support",
  },
};

export default function SupportPage() {
  return (
    <>
      <AppBar />
      <SupportContent />
    </>
  );
}
