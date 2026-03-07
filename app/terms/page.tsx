import type { Metadata } from "next";
import { TermsContent } from "@/components/terms-content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "เงื่อนไขการใช้งานของแอป รับจ่ายจด",
  alternates: {
    canonical: "https://omgeng.app/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
