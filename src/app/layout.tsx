import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "恋愛タイプ診断", template: "%s | 恋愛タイプ診断" },
  description: "12問の質問であなたの恋愛タイプを診断。恋人との相性も即チェック！16タイプの中からあなたの恋愛スタイルを見つけよう。",
  keywords: ["恋愛診断", "相性診断", "性格診断", "MBTI", "恋愛タイプ", "16タイプ"],
  openGraph: {
    title: "恋愛タイプ診断",
    description: "12問であなたの恋愛タイプと相性を診断！",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
