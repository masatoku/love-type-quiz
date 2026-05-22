"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { personalities, typeList } from "@/data/personalities";
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-gray-800 mb-2">💑 相性診断</h1>
          <p className="text-gray-500 text-sm">相手の恋愛タイプを選んでください</p>
        </div>

        {/* 自分のタイプ表示 */}
        {myType && (
          <div className="card p-4 mb-5 flex items-center gap-3">
            <span className="text-2xl">{personalities[myType].emoji}</span>
            <div>
              <p className="text-xs text-gray-400">あなた</p>
              <p className="font-bold text-gray-700">{personalities[myType].name}（{myType}）</p>
            </div>
            <Link href="/quiz" className="ml-auto text-xs text-purple-500 hover:underline">変更</Link>
          </div>
        )}

        {!myType && (
          <div className="card p-4 mb-5 text-center">
            <p className="text-sm text-gray-500 mb-2">先に自分のタイプを診断しましょう</p>
            <Link href="/quiz" className="btn-primary inline-block text-sm py-2 px-6">診断する</Link>
          </div>
        )}

        {/* 相手のタイプ選択 */}
        <div className="card p-5 mb-5">
          <h2 className="font-bold text-gray-700 mb-4 text-sm">相手のタイプを選んでください</h2>
          <div className="grid grid-cols-4 gap-2">
            {typeList.map((t) => {
              const tp = personalities[t];
              const isSelected = partnerType === t;
              return (
                <button
                  key={t}
                  onClick={() => setPartnerType(t)}
                  className={`text-center p-3 rounded-xl text-xs transition-all border-2 ${
                    isSelected
                      ? "border-purple-400 bg-purple-50 font-bold"
                      : "border-transparent bg-gray-50 hover:bg-purple-50 hover:border-purple-200"
                  }`}
                >
                  <div className="text-2xl mb-1">{tp.emoji}</div>
                  <div className="font-mono text-gray-600 text-xs">{t}</div>
                  <div className="text-gray-400 text-xs mt-0.5 hidden sm:block">{tp.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {partnerType && (
          <div className="card p-4 mb-5 flex items-center gap-3">
            <span className="text-2xl">{personalities[partnerType].emoji}</span>
            <div>
              <p className="text-xs text-gray-400">相手</p>
              <p className="font-bold text-gray-700">{personalities[partnerType].name}（{partnerType}）</p>
            </div>
          </div>
        )}

        <button
          onClick={goResult}
          disabled={!partnerType}
          className={`btn-primary w-full ${!partnerType ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          💕 相性を診断する
        </button>
      </div>
    </div>
  );
}
