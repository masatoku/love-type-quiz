"use client";

import { useMemo } from "react";

type Star = { x: number; y: number; size: number; delay: number; duration: number };

// 固定シードで星の位置を生成（SSR/CSR不一致を防ぐ）
function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  // xorshift pseudo-random for deterministic positions
  let seed = 0xdeadbeef;
  function rand() {
    seed ^= seed << 13; seed ^= seed >> 17; seed ^= seed << 5;
    return (seed >>> 0) / 4294967296;
  }
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 2 + 0.5,
      delay: rand() * 4,
      duration: rand() * 3 + 2,
    });
  }
  return stars;
}

const STARS = generateStars(120);

export default function StarField() {
  return (
    <div className="star-layer" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star-dot"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}
