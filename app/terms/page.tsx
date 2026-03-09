import type { Metadata } from "next";
import { AppBar } from "@/components/app-bar";
import { TermsContent } from "@/components/terms-content";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน",
  description: "เงื่อนไขการใช้งานของแอป รับจ่ายจด",
  alternates: {
    canonical: "https://omgeng.app/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <AppBar />
      <TermsContent />
    </>
  );
}
