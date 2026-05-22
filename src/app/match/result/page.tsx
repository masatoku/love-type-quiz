"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { personalities } from "@/data/personalities";
import { typeThemes } from "@/data/typeThemes";
import { getCompatibility } from "@/data/compatibility";
import type { TypeCode } from "@/data/questions";

function MatchResult() {
  const params = useSearchParams();
  const myType = (params.get("me") ?? "INFP") as TypeCode;
  const partnerType = (params.get("partner") ?? "ENFJ") as TypeCode;

  const me = personalities[myType];
  const partner = personalities[partnerType];
  const meTheme = typeThemes[myType];
  const partnerTheme = typeThemes[partnerType];
  const compat = getCompatibility(myType, partnerType);

  if (!me || !partner) {
    return (
      <div className="bg-hero min-h-screen flex items-center justify-center">
        <div className="glass rounded-3xl p-10 text-center">
          <p className="text-white/60">タイプが見つかりません</p>
          <Link href="/match" className="btn-cta mt-4 inline-block">戻る</Link>
        </div>
      </div>
    );
  }

  const scoreColor =
    compat.score >= 85 ? "#f093fb" :
    compat.score >= 70 ? "#4facfe" :
    compat.score >= 55 ? "#43e97b" : "#94a3b8";

  const scoreGlow =
    compat.score >= 85 ? "0 0 40px rgba(240,147,251,0.5)" :
    compat.score >= 70 ? "0 0 40px rgba(79,172,254,0.5)" :
    compat.score >= 55 ? "0 0 40px rgba(67,233,123,0.4)" : "none";

  const shareText = `${me.name}×${partner.name}の相性は${compat.score}点！「${compat.label}」💕 #恋愛タイプ診断 #相性診断`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="bg-hero min-h-screen pb-16">

      {/* ヒーロー（2色グラデーション） */}
      <div
        className="flex flex-col items-center justify-center pt-14 pb-10 px-5 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${meTheme.gradient.match(/#[a-f0-9]{6}/gi)?.[0] ?? "#667eea"} 0%, ${partnerTheme.gradient.match(/#[a-f0-9]{6}/gi)?.[1] ?? "#f5576c"} 100%)` }}
      >
        {/* ペア表示 */}
        <div className="flex items-center gap-5 mb-6 animate-scale-in">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-1"
              style={{ background: meTheme.gradient, boxShadow: `0 0 20px ${meTheme.glow}` }}
            >
              {me.emoji}
            </div>
            <p className="text-white/80 text-xs font-mono font-bold">{myType}</p>
          </div>
          <div className="text-3xl animate-float">💕</div>
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-1"
              style={{ background: partnerTheme.gradient, boxShadow: `0 0 20px ${partnerTheme.glow}` }}
            >
              {partner.emoji}
            </div>
            <p className="text-white/80 text-xs font-mono font-bold">{partnerType}</p>
          </div>
        </div>

        {/* スコアリング */}
        <div
          className="w-36 h-36 rounded-full flex flex-col items-center justify-center mb-4 animate-count-up"
          style={{ background: "rgba(0,0,0,0.3)", boxShadow: scoreGlow, border: `3px solid ${scoreColor}` }}
        >
          <span className="text-5xl font-black" style={{ color: scoreColor }}>{compat.score}</span>
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
          <h2 className="font-black text-white mb-3 flex items-center gap-2">
            <span style={{ color: scoreColor }}>🔮</span> 相性の解説
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">{compat.description}</p>
        </div>

        {/* アドバイス */}
        <div className="glass rounded-3xl p-6 animate-fade-up delay-100">
          <h2 className="font-black text-white mb-4 flex items-center gap-2">
            <span style={{ color: scoreColor }}>💡</span> うまくいくためのヒント
          </h2>
          <div className="space-y-3">
            {compat.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: scoreColor }}
                >
                  {i + 1}
                </span>
                <p className="text-white/70 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* アクション */}
        <div className="space-y-3 animate-fade-up delay-200 pt-2">
          <button
            onClick={() => window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank")}
            className="btn-cta w-full"
          >
            𝕏 結果をシェアする
          </button>
          <Link href="/match" className="btn-ghost w-full text-sm block text-center">
            🔄 別の相手と診断する
          </Link>
          <Link href="/quiz" className="btn-ghost w-full text-sm block text-center">
            📋 最初からやり直す
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function MatchResultPage() {
  return (
    <Suspense fallback={
      <div className="bg-hero min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-float">💕</div>
          <p className="text-white/50">相性を計算中...</p>
        </div>
      </div>
    }>
      <MatchResult />
    </Suspense>
  );
}
