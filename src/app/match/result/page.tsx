"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { personalities } from "@/data/personalities";
import { getCompatibility } from "@/data/compatibility";
import type { TypeCode } from "@/data/questions";

function MatchResult() {
  const params = useSearchParams();
  const myType = (params.get("me") ?? "INFP") as TypeCode;
  const partnerType = (params.get("partner") ?? "ENFJ") as TypeCode;

  const me = personalities[myType];
  const partner = personalities[partnerType];
  const compat = getCompatibility(myType, partnerType);

  if (!me || !partner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card p-8 text-center">
          <p>タイプが見つかりません</p>
          <Link href="/match" className="btn-primary mt-4 inline-block">戻る</Link>
        </div>
      </div>
    );
  }

  const shareText = `${me.name}（${myType}）と${partner.name}（${partnerType}）の相性は${compat.score}点！「${compat.label}」 #恋愛タイプ診断 #相性診断`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  function shareX() {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  }

  const scoreColor =
    compat.score >= 85 ? "#ec4899" :
    compat.score >= 70 ? "#a855f7" :
    compat.score >= 55 ? "#3b82f6" : "#6b7280";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* ペア表示 */}
        <div className="card p-6 mb-5 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div
                className="text-4xl inline-flex items-center justify-center w-16 h-16 rounded-full mb-2"
                style={{ background: `${me.color}20`, border: `2px solid ${me.color}` }}
              >
                {me.emoji}
              </div>
              <p className="text-xs text-gray-500">{me.name}</p>
              <p className="font-mono text-xs font-bold" style={{ color: me.color }}>{myType}</p>
            </div>
            <div className="text-3xl text-pink-400 font-bold">💕</div>
            <div className="text-center">
              <div
                className="text-4xl inline-flex items-center justify-center w-16 h-16 rounded-full mb-2"
                style={{ background: `${partner.color}20`, border: `2px solid ${partner.color}` }}
              >
                {partner.emoji}
              </div>
              <p className="text-xs text-gray-500">{partner.name}</p>
              <p className="font-mono text-xs font-bold" style={{ color: partner.color }}>{partnerType}</p>
            </div>
          </div>

          {/* スコア */}
          <div className="my-4">
            <p className="text-sm text-gray-400 mb-1">相性スコア</p>
            <p className="text-6xl font-black" style={{ color: scoreColor }}>{compat.score}</p>
            <p className="text-sm font-bold mt-1" style={{ color: scoreColor }}>点</p>
          </div>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-white font-bold text-sm"
            style={{ background: scoreColor }}
          >
            {compat.label}
          </div>
        </div>

        {/* 相性の解説 */}
        <div className="card p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span>🔍</span> 相性の解説
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{compat.description}</p>
        </div>

        {/* アドバイス */}
        <div className="card p-6 mb-6">
          <h2 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span>💡</span> うまくいくためのヒント
          </h2>
          <ul className="space-y-2">
            {compat.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-pink-400 font-bold shrink-0">#{i + 1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* ボタン */}
        <div className="space-y-3">
          <button onClick={shareX} className="btn-primary w-full">
            𝕏 結果をシェアする
          </button>
          <Link href="/match" className="btn-secondary w-full text-center block">
            🔄 別の相手と診断する
          </Link>
          <Link href="/quiz" className="btn-secondary w-full text-center block">
            📋 自分の診断からやり直す
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MatchResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="card p-8 text-center text-gray-400">読み込み中...</div></div>}>
      <MatchResult />
    </Suspense>
  );
}
