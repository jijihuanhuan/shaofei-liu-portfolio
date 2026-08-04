import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "刘绍飞 | 数字 IC 设计与 AI 软硬件协同",
    template: "%s | 刘绍飞",
  },
  description:
    "刘绍飞的个人主页，聚焦数字 IC 设计、AI 软硬件协同、体系结构仿真与生成式模型压缩。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
