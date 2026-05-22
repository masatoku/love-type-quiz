"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useState } from "react";
import { personalities, typeList } from "@/data/personalities";
import { typeThemes } from "@/data/typeThemes";
import TypeCharacter from "@/components/TypeCharacter";
import ShareCard from "@/components/ShareCard";
import type { TypeCode } from "@/data/questions";

export default function ResultClient({ typeCode }: { typeCode: TypeCode }) {
  const router = useRouter();
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const p = personalities[typeCode];
  const theme = typeThemes[typeCode];

  if (!p || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-3xl p-10 text-center">
          <p className="text-white/60 mb-4">タイプが見つかりません</p>
          <Link href="/" className="btn-cta">トップへ戻る</Link>
        </div>
      </div>
    );
  }

  const siteUrl = typeof window !== "undefined" ? `${window.location.origin}/result/${typeCode.toLowerCase()}` : `https://love-type-quiz.pages.dev/result/${typeCode.toLowerCase()}`;
  const shareText = `私の恋愛タイプは「${p.name}（${p.code}）」✨\n「${p.tagline}」\nあなたも診断してみて👇`;
  const lineText = `${shareText}\n${siteUrl}`;
  const xText = `${shareText}\n#恋愛タイプ診断 #${p.code}`;

  async function downloadCard() {
    if (downloading) return;
    setDownloading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const el = document.getElementById("share-card");
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#030314" });
      const link = document.createElement("a");
      link.download = `love-type-${typeCode.toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function goMatch() {
    localStorage.setItem("myType", typeCode);
    router.push("/match");
  }

  return (
    <div className="min-h-screen pb-16 relative z-10">

      {/* ヒーローバナー */}
      <div
        className="relative flex flex-col items-center justify-center pt-16 pb-12 px-5 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg, rgba(3,3,20,0) 0%, rgba(3,3,20,0.6) 100%), ${theme.gradient}` }}
      >
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 100%, white 0%, transparent 60%)" }} />

        <div className="animate-reveal-card mb-4 relative z-10" style={{ filter: `drop-shadow(0 0 32px ${theme.glow})` }}>
          <TypeCharacter type={typeCode} size={120} />
        </div>
        <div className="animate-fade-up delay-2 relative z-10">
          <p className="text-white/60 text-xs font-semibold mb-1 uppercase tracking-widest" style={{ fontFamily: "var(--font-ui)" }}>Your Love Type</p>
          <h1 className="text-5xl font-black text-white mb-2" style={{ fontFamily: "var(--font-ui)" }}>{p.name}</h1>
          <p className="text-sm font-mono mb-4 opacity-70" style={{ color: theme.accent }}>{p.code}</p>
          <div className="inline-block px-5 py-2 rounded-full text-white/85 text-sm italic" style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${theme.accent}40` }}>
            「{p.tagline}」
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-sm mx-auto px-5 -mt-4 space-y-4">

        {/* シェアカード + ダウンロード */}
        <div className="animate-fade-up">
          {/* 表示用カードプレビュー */}
          <div className="rounded-3xl overflow-hidden mb-3" style={{ boxShadow: `0 8px 40px ${theme.glow}` }}>
            <div className="scale-[0.65] origin-top" style={{ height: 450, overflow: "hidden" }}>
              <ShareCard typeCode={typeCode} name={p.name} tagline={p.tagline} theme={theme} />
            </div>
          </div>
          <p className="text-center text-white/40 text-xs mb-3">↑ シェア用カード（タップで保存）</p>

          {/* シェアボタン群 */}
          <div className="space-y-2">
            <button onClick={downloadCard} disabled={downloading} className="btn-download">
              {downloading ? "生成中..." : "📸 カードを保存する"}
            </button>
            <a
              href={`https://line.me/R/msg/text/?${encodeURIComponent(lineText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line"
            >
              💬 LINEで友達に送る
            </a>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(xText)}&url=${encodeURIComponent(siteUrl)}`, "_blank")}
                className="btn-share"
              >
                𝕏 ポストする
              </button>
              <button onClick={copyUrl} className="btn-ghost text-sm" style={{ padding: "12px" }}>
                {copied ? "✅ コピー済み" : "🔗 URLをコピー"}
              </button>
            </div>
          </div>
        </div>

        {/* 相性診断CTA */}
        <div className="animate-fade-up delay-2">
          <button onClick={goMatch} className="btn-cta">
            💕 相手との相性を診断する
          </button>
        </div>

        {/* 恋愛スタイル */}
        <div className="glass rounded-3xl p-6 animate-fade-up delay-3">
          <h2 className="font-black text-white mb-3 flex items-center gap-2 text-sm">
            <span style={{ color: theme.accent }}>✦</span> あなたの恋愛スタイル
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">{p.loveStyle}</p>
        </div>

        {/* 強み・弱み */}
        <div className="grid grid-cols-2 gap-3 animate-fade-up delay-3">
          <div className="glass rounded-3xl p-5">
            <h3 className="font-bold text-xs mb-3" style={{ color: theme.accent }}>✨ 恋愛の強み</h3>
            <ul className="space-y-2">
              {p.strengths.map((s) => (
                <li key={s} className="text-xs text-white/70 flex items-start gap-1.5">
                  <span style={{ color: theme.accent }} className="mt-0.5 shrink-0">●</span>{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-5">
            <h3 className="font-bold text-xs mb-3" style={{ color: "#fb923c" }}>⚡ 注意ポイント</h3>
            <ul className="space-y-2">
              {p.weaknesses.map((w) => (
                <li key={w} className="text-xs text-white/70 flex items-start gap-1.5">
                  <span className="text-orange-400 mt-0.5 shrink-0">●</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 理想のパートナー */}
        <div className="glass rounded-3xl p-5 animate-fade-up delay-4">
          <h3 className="font-bold text-sm mb-2" style={{ color: theme.accent }}>💑 理想のパートナー</h3>
          <p className="text-white/70 text-sm">{p.idealPartner}</p>
        </div>

        {/* もう一度 */}
        <div className="animate-fade-up delay-4">
          <Link href="/quiz" className="btn-ghost text-sm block text-center">
            🔄 もう一度占う
          </Link>
        </div>

        {/* 全タイプ */}
        <div className="glass rounded-3xl p-5 animate-fade-up delay-5">
          <h3 className="text-white/40 text-xs font-semibold mb-4 text-center uppercase tracking-wider">他のタイプを見る</h3>
          <div className="grid grid-cols-4 gap-2">
            {typeList.map((t) => {
              const th = typeThemes[t];
              const isMe = t === typeCode;
              return (
                <Link
                  key={t}
                  href={`/result/${t.toLowerCase()}`}
                  className="text-center p-2 rounded-2xl text-xs transition-all"
                  style={isMe
                    ? { background: th.gradient, boxShadow: `0 0 12px ${th.glow}` }
                    : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(232,201,122,0.08)" }}
                >
                  <TypeCharacter type={t} size={28} className="mb-1" />
                  <div className="font-mono text-white/50 text-xs">{t}</div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* シェアカード（オフスクリーン・html2canvas用） */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <ShareCard typeCode={typeCode} name={p.name} tagline={p.tagline} theme={theme} />
      </div>
    </div>
  );
}
