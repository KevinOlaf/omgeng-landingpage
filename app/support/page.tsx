import type { Metadata } from "next";
import { SupportContent } from "@/components/support-content";

export const metadata: Metadata = {
  title: "Support",
  description: "หน้าช่วยเหลือสำหรับแอป รับจ่ายจด",
  alternates: {
    canonical: "https://omgeng.app/support",
  },
};

export default function SupportPage() {
  return <SupportContent />;
}
