"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { personalities, typeList } from "@/data/personalities";
import type { TypeCode } from "@/data/questions";

export default function ResultClient({ typeCode }: { typeCode: TypeCode }) {
  const router = useRouter();
  const p = personalities[typeCode];

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card p-8 text-center">
          <p className="text-gray-500">無効なタイプです</p>
          <Link href="/" className="btn-primary mt-4 inline-block">トップへ戻る</Link>
        </div>
      </div>
    );
  }

  const shareText = `私の恋愛タイプは「${p.name}（${p.code}）」でした！${p.tagline} #恋愛タイプ診断`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  function shareX() {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  }

  function goMatch() {
    localStorage.setItem("myType", typeCode);
    router.push("/match");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="card p-8 mb-5 text-center">
          <p className="text-sm text-pink-500 font-semibold mb-3">あなたの恋愛タイプは…</p>
          <div
            className="text-7xl mb-4 inline-flex items-center justify-center w-28 h-28 rounded-full"
            style={{ background: `${p.color}20`, border: `3px solid ${p.color}` }}
          >
            {p.emoji}
          </div>
          <h1 className="text-3xl font-black mb-1" style={{ color: p.color }}>{p.name}</h1>
          <p className="text-xl font-bold text-gray-600 mb-3">{p.code}</p>
          <p className="text-gray-500 italic text-sm">「{p.tagline}」</p>
        </div>

        <div className="card p-6 mb-4">
          <h2 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span>💕</span> あなたの恋愛スタイル
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{p.loveStyle}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="card p-5">
            <h3 className="font-bold text-green-600 mb-3 text-sm">✨ 恋愛の強み</h3>
            <ul className="space-y-2">
              {p.strengths.map((s) => (
                <li key={s} className="text-xs text-gray-600 flex items-start gap-1">
                  <span className="text-green-400 mt-0.5">●</span>{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-bold text-orange-500 mb-3 text-sm">⚡ 注意ポイント</h3>
            <ul className="space-y-2">
              {p.weaknesses.map((w) => (
                <li key={w} className="text-xs text-gray-600 flex items-start gap-1">
                  <span className="text-orange-400 mt-0.5">●</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card p-5 mb-6">
          <h3 className="font-bold text-purple-600 mb-2 text-sm">💑 理想のパートナー</h3>
          <p className="text-sm text-gray-600">{p.idealPartner}</p>
        </div>

        <div className="space-y-3">
          <button onClick={goMatch} className="btn-primary w-full text-center block">
            💕 相手との相性を診断する
          </button>
          <button onClick={shareX} className="btn-secondary w-full">
            𝕏 結果をポストする
          </button>
          <Link href="/quiz" className="btn-secondary w-full text-center block">
            🔄 もう一度診断する
          </Link>
        </div>

        <div className="card p-5 mt-6">
          <h3 className="font-bold text-gray-600 mb-4 text-sm text-center">他のタイプを見る</h3>
          <div className="grid grid-cols-4 gap-2">
            {typeList.map((t) => {
              const tp = personalities[t];
              const isMe = t === typeCode;
              return (
                <Link
                  key={t}
                  href={`/result/${t.toLowerCase()}`}
                  className={`text-center p-2 rounded-xl text-xs transition-all ${isMe ? "bg-purple-100 border-2 border-purple-400 font-bold" : "bg-gray-50 hover:bg-purple-50"}`}
                >
                  <div className="text-xl mb-1">{tp.emoji}</div>
                  <div className="font-mono text-gray-500">{t}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
