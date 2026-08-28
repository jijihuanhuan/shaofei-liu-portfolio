import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "积极bao的赛博世界",
    template: "%s | 刘绍飞",
  },
  description:
    "从容优雅的去生活、学习、工作和娱乐。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
