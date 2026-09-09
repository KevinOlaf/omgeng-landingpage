import type { Metadata } from "next";
import { AppBar } from "@/components/app-bar";
import { ChatGPTContent } from "@/components/chatgpt-content";

export const metadata: Metadata = {
  title: "ใช้งานกับ ChatGPT",
  description: "ถามเรื่องรายรับรายจ่าย พอร์ต และการคาดการณ์จากรับจ่ายจดผ่าน ChatGPT แบบอ่านอย่างเดียว",
  alternates: {
    canonical: "https://budget-note.com/chatgpt",
  },
};

export default function ChatGPTPage() {
  return (
    <>
      <AppBar />
      <ChatGPTContent />
    </>
  );
}
