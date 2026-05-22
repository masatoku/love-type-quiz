"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calcType, type Answer } from "@/data/questions";

const axisLabels: Record<string, string> = {
  EI: "社交の星",
  NS: "直感の星",
  TF: "感性の星",
  JP: "流れの星",
};

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [loading, setLoading] = useState(false);

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const progress = answered / total;

  function select(id: number, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function submit() {
    if (answered < total || loading) return;
    setLoading(true);
    const type = calcType(answers);
    localStorage.setItem("myType", type);
    setTimeout(() => {
      router.push(`/result/${type.toLowerCase()}`);
    }, 1200);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 relative z-10">
        <div className="text-6xl animate-float">🔮</div>
        <p className="text-white/60 text-sm animate-fade-up" style={{ letterSpacing: "0.1em" }}>あなたの恋愛の星を読んでいます...</p>
        <div className="flex gap-2 mt-2">
          {["✦","✧","✦","✧","✦"].map((s, i) => (
            <span key={i} className="animate-twinkle text-sm" style={{ animationDelay: `${i * 0.2}s`, color: "var(--gold)", opacity: 0.6 }}>{s}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-8 relative z-10">
      <div className="max-w-sm mx-auto">

        {/* ヘッダー */}
        <div className="text-center mb-6 animate-fade-up">
          <p className="text-xs mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em", fontFamily: "var(--font-ui)" }}>✦ LOVE TYPE READING ✦</p>
          <h1 className="text-xl font-black text-white">恋愛の星読み</h1>
          <p className="text-white/30 text-xs mt-1">12の問いかけに答えてください</p>
        </div>

        {/* プログレス */}
        <div className="mb-6 animate-fade-up">
          <div className="flex justify-between text-xs mb-2" style={{ color: "var(--gold)", opacity: 0.6 }}>
            <span>{answered} / {total} の星が輝いた</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        {/* 質問リスト */}
        <div className="space-y-4 mb-8">
          {questions.map((q, idx) => (
            <div
              key={q.id}
              className={`quiz-question-block animate-fade-up ${answers[q.id] !== undefined ? "answered" : ""}`}
              style={{ animationDelay: `${idx * 0.04}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="glass text-xs px-2 py-0.5 rounded-full font-semibold" style={{ color: "var(--gold)", fontSize: "0.65rem" }}>
                  {axisLabels[q.axis]}
                </span>
                <span className="text-white/25 text-xs font-mono">#{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-white font-bold text-sm mb-3 leading-relaxed">{q.text}</p>
              <div className="space-y-2">
                <button
                  className={`choice-btn ${answers[q.id] === -2 ? "sel-a" : ""}`}
                  onClick={() => select(q.id, -2)}
                >
                  <span className="text-xl shrink-0">{q.emojiA}</span>
                  <span>{q.labelA}</span>
                </button>
                <button
                  className={`choice-btn ${answers[q.id] === 2 ? "sel-b" : ""}`}
                  onClick={() => select(q.id, 2)}
                >
                  <span className="text-xl shrink-0">{q.emojiB}</span>
                  <span>{q.labelB}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 送信ボタン */}
        <div className="animate-fade-up">
          <button
            onClick={submit}
            disabled={answered < total}
            className="btn-primary"
            style={answered < total ? { opacity: 0.4, cursor: "not-allowed", animation: "none" } : {}}
          >
            {answered < total
              ? `あと ${total - answered} 問残っています`
              : "🔮 星を読み解く"}
          </button>
          {answered === total && (
            <p className="text-center text-xs mt-2 animate-fade-up" style={{ color: "var(--gold)", opacity: 0.6 }}>
              全ての星が揃いました ✦
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
