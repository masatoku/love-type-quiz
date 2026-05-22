"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { personalities, typeList } from "@/data/personalities";
import { typeThemes } from "@/data/typeThemes";
import TypeCharacter from "@/components/TypeCharacter";
import type { TypeCode } from "@/data/questions";

export default function ResultClient({ typeCode }: { typeCode: TypeCode }) {
  const router = useRouter();
  const p = personalities[typeCode];
  const theme = typeThemes[typeCode];

  if (!p || !theme) {
    return (
      <div className="bg-hero min-h-screen flex items-center justify-center">
        <div className="glass rounded-3xl p-10 text-center">
          <p className="text-white/60 mb-4">タイプが見つかりません</p>
          <Link href="/" className="btn-cta">トップへ戻る</Link>
        </div>
      </div>
    );
  }

  const shareText = `私の恋愛タイプは「${p.name}（${p.code}）」💕\n${p.tagline}\n#恋愛タイプ診断`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  function shareX() {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  }

  function goMatch() {
    localStorage.setItem("myType", typeCode);
    router.push("/match");
  }

  return (
    <div className="bg-hero min-h-screen pb-16">

      {/* ヒーローバナー（タイプカラー） */}
      <div
        className="relative flex flex-col items-center justify-center pt-16 pb-10 px-5 text-center overflow-hidden"
        style={{ background: theme.gradient }}
      >
        {/* 装飾ノイズ */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, white 0%, transparent 50%)" }} />

        <div className="animate-scale-in mb-3 relative z-10">
          <TypeCharacter type={typeCode} size={96} />
        </div>
        <div className="animate-fade-up delay-100 relative z-10">
          <p className="text-white/70 text-sm font-semibold mb-1 uppercase tracking-widest">Your Type</p>
          <h1 className="text-5xl font-black text-white mb-1">{p.name}</h1>
          <p className="text-white/80 text-2xl font-bold font-mono mb-4">{p.code}</p>
          <div className="inline-block glass px-4 py-2 rounded-full text-white/90 text-sm italic">
            「{p.tagline}」
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-sm mx-auto px-5 -mt-4 space-y-4">

        {/* 恋愛スタイル */}
        <div className="glass rounded-3xl p-6 animate-fade-up">
          <h2 className="font-black text-white mb-3 flex items-center gap-2">
            <span style={{ color: theme.accent }}>💕</span> あなたの恋愛スタイル
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">{p.loveStyle}</p>
        </div>

        {/* 強み・弱み */}
        <div className="grid grid-cols-2 gap-3 animate-fade-up delay-100">
          <div className="glass rounded-3xl p-5">
            <h3 className="font-bold text-sm mb-3" style={{ color: theme.accent }}>✨ 恋愛の強み</h3>
            <ul className="space-y-2">
              {p.strengths.map((s) => (
                <li key={s} className="text-xs text-white/70 flex items-start gap-1.5">
                  <span style={{ color: theme.accent }} className="mt-0.5 shrink-0">●</span>{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-5">
            <h3 className="font-bold text-sm mb-3 text-orange-400">⚡ 注意ポイント</h3>
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
        <div className="glass rounded-3xl p-5 animate-fade-up delay-200">
          <h3 className="font-bold text-sm mb-2" style={{ color: theme.accent }}>💑 理想のパートナー</h3>
          <p className="text-white/70 text-sm">{p.idealPartner}</p>
        </div>

        {/* アクション */}
        <div className="space-y-3 animate-fade-up delay-300 pt-2">
          <button onClick={goMatch} className="btn-cta w-full">
            💕 相手との相性を診断する
          </button>
          <button onClick={shareX} className="btn-ghost w-full text-sm">
            𝕏 結果をポストする
          </button>
          <Link href="/quiz" className="btn-ghost w-full text-sm block text-center">
            🔄 もう一度診断する
          </Link>
        </div>

        {/* 全タイプ */}
        <div className="glass rounded-3xl p-5 animate-fade-up delay-400">
          <h3 className="text-white/50 text-xs font-semibold mb-4 text-center uppercase tracking-wider">他のタイプを見る</h3>
          <div className="grid grid-cols-4 gap-2">
            {typeList.map((t) => {
              const tp = personalities[t];
              const th = typeThemes[t];
              const isMe = t === typeCode;
              return (
                <Link
                  key={t}
                  href={`/result/${t.toLowerCase()}`}
                  className="text-center p-2 rounded-2xl text-xs transition-all"
                  style={isMe
                    ? { background: th.gradient, boxShadow: `0 0 12px ${th.glow}` }
                    : { background: "rgba(255,255,255,0.05)" }}
                >
                  <TypeCharacter type={t} size={28} className="mb-1" />
                  <div className="font-mono text-white/60 text-xs">{t}</div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
