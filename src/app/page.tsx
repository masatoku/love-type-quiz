import Link from "next/link";

const floatingEmojis = ["💕","✨","🌙","💫","🔮","💜","⭐","🌸"];

export default function Home() {
  return (
    <div className="bg-hero min-h-screen flex flex-col items-center justify-center px-5 py-16 relative overflow-hidden">

      {/* 背景の浮かぶ絵文字 */}
      {floatingEmojis.map((e, i) => (
        <span
          key={i}
          className="absolute text-2xl select-none pointer-events-none animate-float"
          style={{
            left: `${[8,18,30,50,65,75,85,92][i]}%`,
            top: `${[15,70,30,10,80,20,60,45][i]}%`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.25,
          }}
        >{e}</span>
      ))}

      <div className="relative z-10 w-full max-w-sm text-center">

        {/* バッジ */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm text-purple-300 font-semibold">
          <span>✨</span> 累計 10万人が診断済み
        </div>

        {/* メインビジュアル */}
        <div className="animate-fade-up delay-100 text-8xl mb-6 animate-float">💕</div>

        {/* タイトル */}
        <h1 className="animate-fade-up delay-200 text-4xl font-black mb-3 leading-tight">
          <span className="gradient-text">恋愛タイプ</span>
          <br />
          <span className="text-white">診断</span>
        </h1>

        <p className="animate-fade-up delay-300 text-white/60 text-base mb-2 leading-relaxed">
          たった<span className="text-pink-400 font-bold">12問</span>で
          あなたの恋愛スタイルと<br />
          <span className="text-cyan-400 font-bold">相手との相性</span>を完全解析 🔮
        </p>

        <p className="animate-fade-up delay-300 text-white/40 text-xs mb-8">
          16タイプ診断 × 256パターン相性チェック
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-400 space-y-3">
          <Link href="/quiz" className="btn-cta block">
            今すぐ診断する 💕
          </Link>
          <Link href="/match" className="btn-ghost block text-sm">
            相性だけチェックする →
          </Link>
        </div>

        {/* 特徴 */}
        <div className="animate-fade-up delay-500 mt-10 grid grid-cols-3 gap-3">
          {[
            { icon: "⚡", label: "1分で完了" },
            { icon: "🎯", label: "16タイプ判定" },
            { icon: "💑", label: "相性診断" },
          ].map(({ icon, label }) => (
            <div key={label} className="glass rounded-2xl py-3 px-2 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs text-white/60 font-semibold">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
