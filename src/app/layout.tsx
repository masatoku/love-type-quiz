import type { Metadata } from "next";
import { Poppins, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "恋愛タイプ診断", template: "%s | 恋愛タイプ診断" },
  description: "12問の質問であなたの恋愛タイプを診断。恋人との相性も即チェック！16タイプの中からあなたの恋愛スタイルを見つけよう。",
  keywords: ["恋愛診断", "相性診断", "性格診断", "MBTI", "恋愛タイプ"],
  openGraph: {
    title: "恋愛タイプ診断",
    description: "12問であなたの恋愛タイプと相性を診断！",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${poppins.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen">
        {/* 全ページ共通ヘッダー */}
        <header className="site-header">
          <Link href="/" className="site-logo">
            <span className="logo-heart">💕</span>
            <span className="logo-text">恋愛タイプ診断</span>
          </Link>
        </header>
        <div className="page-body">
          {children}
        </div>
      </body>
    </html>
  );
}
