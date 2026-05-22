"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, calcType, type Answer } from "@/data/questions";

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [animating, setAnimating] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const filled = current;

  function select(value: Answer) {
    if (animating) return;
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);
    setAnimating(true);

    setTimeout(() => {
      if (current < total - 1) {
        setCurrent(current + 1);
        setAnimating(false);
      } else {
        const type = calcType(newAnswers);
        router.push(`/result/${type.toLowerCase()}`);
      }
    }, 320);
  }

  return (
    <div className="bg-hero min-h-screen flex flex-col items-center justify-center px-5 py-10">

      {/* ヘッダー：ハートの進捗 */}
      <div className="w-full max-w-sm mb-8">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => current > 0 && setCurrent(current - 1)}
            className={`text-white/40 hover:text-white/80 text-sm transition-colors ${current === 0 ? "invisible" : ""}`}
          >
            ← 戻る
          </button>
          <span className="text-white/50 text-sm font-medium">
            {current + 1} <span className="text-white/30">/</span> {total}
          </span>
          <div className="w-10" />
        </div>

        {/* ハートの進捗バー */}
        <div className="progress-hearts">
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} className={i < filled ? "heart-filled" : "heart-empty"}>
              {i < filled ? "❤️" : "🤍"}
            </span>
          ))}
        </div>
      </div>

      {/* 質問カード */}
      <div
        key={current}
        className="w-full max-w-sm animate-scale-in"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s" }}
      >
        {/* 軸バッジ */}
        <div className="text-center mb-4">
          <span className="glass text-xs text-purple-300 font-semibold px-3 py-1 rounded-full">
            {{EI:"外向 vs 内向", NS:"直感 vs 感覚", TF:"思考 vs 感情", JP:"計画 vs 柔軟"}[q.axis]}
          </span>
        </div>

        {/* 質問テキスト */}
        <div className="glass rounded-3xl p-6 mb-6 text-center">
          <p className="text-white font-bold text-xl leading-relaxed">{q.text}</p>
        </div>

        {/* A/B 選択カード */}
        <div className="space-y-4">
          <button
            className={`choice-card ${answers[q.id] === -2 ? "selected-a" : ""}`}
            onClick={() => select(-2)}
          >
            <div className="text-4xl mb-2">{q.emojiA}</div>
            <div className="text-white font-bold">{q.labelA}</div>
          </button>

          <div className="text-center text-white/30 text-sm font-medium">— または —</div>

          <button
            className={`choice-card ${answers[q.id] === 2 ? "selected-b" : ""}`}
            onClick={() => select(2)}
          >
            <div className="text-4xl mb-2">{q.emojiB}</div>
            <div className="text-white font-bold">{q.labelB}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
