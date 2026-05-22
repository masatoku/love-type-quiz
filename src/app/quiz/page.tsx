"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calcType, type Answer } from "@/data/questions";

const OPTIONS: { label: string; value: Answer }[] = [
  { label: "とてもあてはまる", value: -2 },
  { label: "ややあてはまる", value: -1 },
  { label: "どちらでもない", value: 0 },
  { label: "ややあてはまる", value: 1 },
  { label: "とてもあてはまる", value: 2 },
];

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const q = questions[current];
  const progress = Math.round((current / questions.length) * 100);
  const selected = answers[q.id];

  function select(value: Answer) {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(current + 1), 250);
    } else {
      const type = calcType(newAnswers);
      router.push(`/result/${type.toLowerCase()}`);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <p className="text-sm text-pink-500 font-semibold mb-1">質問 {current + 1} / {questions.length}</p>
          <div className="progress-bar mb-4">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* 質問カード */}
        <div className="card p-8 mb-6">
          <p className="text-center text-lg font-bold text-gray-800 mb-8 leading-relaxed">
            Q{current + 1}. {q.text}
          </p>

          {/* 両端ラベル */}
          <div className="flex justify-between text-xs text-gray-400 mb-3 px-2">
            <span>👈 {q.labelA}</span>
            <span>{q.labelB} 👉</span>
          </div>

          {/* 5択ボタン */}
          <div className="grid grid-cols-5 gap-2">
            {OPTIONS.map((opt, i) => {
              const isA = i < 2;
              const isSelected = selected === opt.value;
              return (
                <button
                  key={i}
                  onClick={() => select(opt.value)}
                  className={`answer-btn py-4 flex flex-col items-center gap-1 ${isSelected ? "selected" : ""}`}
                  title={opt.label}
                >
                  <span className={`text-xl font-bold ${isA ? "text-pink-400" : "text-purple-400"} ${i === 2 ? "text-gray-300" : ""}`}>
                    {i === 0 ? "◉" : i === 1 ? "●" : i === 2 ? "○" : i === 3 ? "●" : "◉"}
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block leading-tight text-center">
                    {i === 0 || i === 4 ? "強く" : i === 1 || i === 3 ? "やや" : "どちら\nでも"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 戻るボタン */}
        {current > 0 && (
          <div className="text-center">
            <button
              onClick={() => setCurrent(current - 1)}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              ← 前の質問に戻る
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
