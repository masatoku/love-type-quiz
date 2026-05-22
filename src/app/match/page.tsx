"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { personalities, typeList } from "@/data/personalities";
import { typeThemes } from "@/data/typeThemes";
import TypeCharacter from "@/components/TypeCharacter";
import type { TypeCode } from "@/data/questions";

export default function MatchPage() {
  const router = useRouter();
  const [myType, setMyType] = useState<TypeCode | null>(null);
  const [partnerType, setPartnerType] = useState<TypeCode | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("myType") as TypeCode | null;
    setMyType(saved);
  }, []);

  function goResult() {
    if (!partnerType) return;
    const my = myType ?? "INFP";
    router.push(`/match/result?me=${my}&partner=${partnerType}`);
  }

  return (
    <div className="bg-hero min-h-screen px-5 py-12">
      <div className="max-w-sm mx-auto">

        {/* ヘッダー */}
        <div className="text-center mb-8 animate-fade-up">
          <Link href="/" className="text-white/40 text-sm hover:text-white/70 block mb-4">← 戻る</Link>
          <div className="text-5xl mb-3">💑</div>
          <h1 className="text-3xl font-black text-white mb-2">相性診断</h1>
          <p className="text-white/50 text-sm">相手のタイプを選んでください</p>
        </div>

        {/* 自分のタイプ */}
        {myType ? (
          <div className="glass rounded-3xl p-4 mb-5 animate-fade-up delay-100 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: typeThemes[myType].gradient }}
            >
              <TypeCharacter type={myType} size={32} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/40 text-xs">あなた</p>
              <p className="text-white font-bold text-sm">{personalities[myType].name}（{myType}）</p>
            </div>
            <Link href="/quiz" className="text-xs shrink-0 px-3 py-1.5 rounded-full border border-white/20 text-white/50 hover:text-white/80">
              変更
            </Link>
          </div>
        ) : (
          <div className="glass rounded-3xl p-5 mb-5 text-center animate-fade-up delay-100">
            <p className="text-white/50 text-sm mb-3">先に自分のタイプを診断しましょう</p>
            <Link href="/quiz" className="btn-cta text-sm py-2.5 px-6 inline-block">診断する</Link>
          </div>
        )}

        {/* 相手タイプ選択 */}
        <div className="glass rounded-3xl p-5 mb-5 animate-fade-up delay-200">
          <h2 className="text-white/60 text-xs font-semibold mb-4 uppercase tracking-wider">相手のタイプを選んでください</h2>
          <div className="grid grid-cols-4 gap-2">
            {typeList.map((t) => {
              const tp = personalities[t];
              const th = typeThemes[t];
              const isSelected = partnerType === t;
              return (
                <button
                  key={t}
                  onClick={() => setPartnerType(t)}
                  className="type-select-btn"
                  style={isSelected ? {
                    background: th.gradient,
                    borderColor: "transparent",
                    boxShadow: `0 0 16px ${th.glow}`,
                  } : {}}
                >
                  <TypeCharacter type={t} size={28} className="mx-auto mb-1" />
                  <div className="font-mono text-xs">{t}</div>
                  <div className="text-xs text-white/40 mt-0.5 leading-tight hidden sm:block">{tp.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 選択中の相手 */}
        {partnerType && (
          <div className="glass rounded-3xl p-4 mb-5 animate-scale-in flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: typeThemes[partnerType].gradient }}
            >
              <TypeCharacter type={partnerType} size={32} />
            </div>
            <div>
              <p className="text-white/40 text-xs">相手</p>
              <p className="text-white font-bold text-sm">{personalities[partnerType].name}（{partnerType}）</p>
            </div>
          </div>
        )}

        <button
          onClick={goResult}
          disabled={!partnerType}
          className={`btn-cta w-full ${!partnerType ? "opacity-40 cursor-not-allowed" : ""}`}
          style={!partnerType ? { animation: "none" } : {}}
        >
          💕 相性を診断する
        </button>

      </div>
    </div>
  );
}
