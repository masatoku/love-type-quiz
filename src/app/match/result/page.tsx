"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useState } from "react";
import { personalities } from "@/data/personalities";
import { typeThemes } from "@/data/typeThemes";
import { getCompatibility } from "@/data/compatibility";
import TypeCharacter from "@/components/TypeCharacter";
import type { TypeCode } from "@/data/questions";

function MatchResult() {
  const params = useSearchParams();
  const myType = (params.get("me") ?? "INFP") as TypeCode;
  const partnerType = (params.get("partner") ?? "ENFJ") as TypeCode;
  const [copied, setCopied] = useState(false);

  const me = personalities[myType];
  const partner = personalities[partnerType];
  const meTheme = typeThemes[myType];
  const partnerTheme = typeThemes[partnerType];
  const compat = getCompatibility(myType, partnerType);

  if (!me || !partner) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="glass rounded-3xl p-10 text-center">
          <p className="text-white/60">タイプが見つかりません</p>
          <Link href="/match" className="btn-cta mt-4 inline-block">戻る</Link>
        </div>
      </div>
    );
  }

  const scoreColor =
    compat.score >= 85 ? "#fcd34d" :
    compat.score >= 70 ? "#6ee7b7" :
    compat.score >= 55 ? "#93c5fd" : "#94a3b8";

  const siteUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${me.name}×${partner.name}の相性は${compat.score}点！「${compat.label}」✨\n#恋愛タイプ診断`;
  const lineText = `${shareText}\nあなたも診断してみて👇\n${siteUrl}`;

  async function copyUrl() {
    await navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen pb-16 relative z-10">

      {/* ヒーロー */}
      <div
        className="flex flex-col items-center justify-center pt-14 pb-10 px-5 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${meTheme.gradient.match(/#[a-f0-9]{6}/gi)?.[0] ?? "#667eea"} 0%, ${partnerTheme.gradient.match(/#[a-f0-9]{6}/gi)?.[1] ?? "#f5576c"} 100%)` }}
      >
        {/* ペア表示 */}
        <div className="flex items-center gap-5 mb-6 animate-scale-in">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-1"
              style={{ background: meTheme.gradient, boxShadow: `0 0 20px ${meTheme.glow}` }}
            >
              <TypeCharacter type={myType} size={36} />
            </div>
            <p className="text-white/80 text-xs font-mono font-bold">{myType}</p>
          </div>
          <div className="text-3xl animate-float">💕</div>
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-1"
              style={{ background: partnerTheme.gradient, boxShadow: `0 0 20px ${partnerTheme.glow}` }}
            >
              <TypeCharacter type={partnerType} size={36} />
            </div>
            <p className="text-white/80 text-xs font-mono font-bold">{partnerType}</p>
          </div>
        </div>

        {/* スコア */}
        <div
          className="w-36 h-36 rounded-full flex flex-col items-center justify-center mb-4 animate-count-up"
          style={{ background: "rgba(0,0,0,0.35)", boxShadow: `0 0 40px ${scoreColor}50`, border: `3px solid ${scoreColor}` }}
        >
          <span className="text-5xl font-black" style={{ color: scoreColor, fontFamily: "var(--font-ui)" }}>{compat.score}</span>
          <span className="text-white/60 text-sm font-bold">点</span>
        </div>

        <div
          className="inline-block px-5 py-2 rounded-full font-black text-white text-sm animate-fade-up"
          style={{ background: "rgba(0,0,0,0.35)", border: `2px solid ${scoreColor}` }}
        >
          {compat.label}
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-sm mx-auto px-5 -mt-2 space-y-4">

        {/* 相性解説 */}
        <div className="glass rounded-3xl p-6 animate-fade-up">
          <h2 className="font-black text-white mb-3 flex items-center gap-2 text-sm">
            <span style={{ color: scoreColor }}>✦</span> 相性の星読み
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">{compat.description}</p>
        </div>

        {/* アドバイス */}
        <div className="glass rounded-3xl p-6 animate-fade-up delay-1">
          <h2 className="font-black text-white mb-4 flex items-center gap-2 text-sm">
            <span style={{ color: scoreColor }}>💡</span> うまくいくためのヒント
          </h2>
          <div className="space-y-3">
            {compat.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-black"
                  style={{ background: scoreColor }}
                >
                  {i + 1}
                </span>
                <p className="text-white/70 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* シェア */}
        <div className="space-y-2 animate-fade-up delay-2">
          <a
            href={`https://line.me/R/msg/text/?${encodeURIComponent(lineText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line"
          >
            💬 LINEで相手に送る
          </a>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`, "_blank")}
              className="btn-share"
            >
              𝕏 ポスト
            </button>
            <button onClick={copyUrl} className="btn-ghost text-sm" style={{ padding: "12px" }}>
              {copied ? "✅ コピー済み" : "🔗 URLをコピー"}
            </button>
          </div>
        </div>

        {/* アクション */}
        <div className="space-y-2 animate-fade-up delay-3">
          <Link href="/match" className="btn-ghost block text-sm text-center">
            🔄 別の相手と診断する
          </Link>
          <Link href="/quiz" className="btn-ghost block text-sm text-center">
            📋 自分の診断からやり直す
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function MatchResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-float">🔮</div>
          <p className="text-white/50">相性を読んでいます...</p>
        </div>
      </div>
    }>
      <MatchResult />
    </Suspense>
  );
}
