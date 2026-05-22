"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calcType, type Answer } from "@/data/questions";

const axisLabels: Record<string, string> = {
  EI: "外向 vs 内向",
  NS: "直感 vs 感覚",
  TF: "思考 vs 感情",
  JP: "計画 vs 柔軟",
};

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const progress = answered / total;

  function select(id: number, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function submit() {
    if (answered < total) return;
    const type = calcType(answers);
    localStorage.setItem("myType", type);
    router.push(`/result/${type.toLowerCase()}`);
  }

  return (
    <div className="min-h-screen px-5 py-8">
      <div className="max-w-sm mx-auto">

        {/* ヘッダー */}
        <div className="text-center mb-6 animate-fade-up">
          <h1 className="text-xl font-black text-white mb-1">恋愛タイプ診断</h1>
          <p className="text-white/40 text-xs">全{total}問に答えてね</p>
        </div>

        {/* プログレスバー */}
        <div className="mb-6 animate-fade-up">
          <div className="flex justify-between text-xs text-white/50 mb-2">
            <span>{answered} / {total} 回答済み</span>
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
                <span className="glass text-xs px-2 py-0.5 rounded-full text-purple-300 font-semibold">
                  {axisLabels[q.axis]}
                </span>
                <span className="text-white/30 text-xs font-mono">Q{idx + 1}</span>
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
            style={answered < total ? { opacity: 0.45, cursor: "not-allowed", animation: "none" } : {}}
          >
            {answered < total
              ? `あと ${total - answered} 問答えてね`
              : "診断結果を見る 💕"}
          </button>
        </div>

      </div>
    </div>
  );
}
