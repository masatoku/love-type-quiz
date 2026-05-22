import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-16 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-sm text-center">

        {/* バッジ */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-semibold" style={{ color: "var(--gold)", letterSpacing: "0.05em" }}>
          <span>✦</span> 16タイプ × 256パターン相性診断
        </div>

        {/* メインビジュアル */}
        <div className="animate-fade-up delay-1 text-7xl mb-6 animate-float select-none">🔮</div>

        {/* タイトル */}
        <h1 className="animate-fade-up delay-2 mb-2 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="block text-5xl font-bold grad-text">恋愛の星を</span>
          <span className="block text-5xl font-bold text-white">読み解く</span>
        </h1>

        <p className="animate-fade-up delay-3 text-white/50 text-sm mb-2 leading-relaxed">
          たった<span className="font-bold" style={{ color: "var(--gold)" }}>12問</span>の問いかけで<br />
          あなたの恋愛の星座と、<span className="font-bold text-white/70">相手との相性</span>が判明
        </p>
        <p className="animate-fade-up delay-3 text-white/25 text-xs mb-10" style={{ letterSpacing: "0.08em" }}>
          診断後はカードを保存してシェアできます
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-4 space-y-3">
          {/* メインボタン（ボタンであることを明確に） */}
          <Link href="/quiz" className="btn-cta">
            ✦ 今すぐ診断する（無料）
          </Link>

          {/* サブテキスト - ボタンではなく説明 */}
          <p className="text-white/30 text-xs py-1">所要時間：約1〜2分</p>

          {/* セカンダリボタン */}
          <Link href="/match" className="btn-ghost">
            🔍 タイプ別の相性だけ見る
          </Link>
        </div>

        {/* 特徴グリッド */}
        <div className="animate-fade-up delay-5 mt-10 grid grid-cols-3 gap-3">
          {[
            { icon: "⚡", title: "1〜2分", desc: "サクッと完了" },
            { icon: "🌌", title: "16タイプ", desc: "精密な星読み" },
            { icon: "💑", title: "相性診断", desc: "256パターン" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl py-4 px-2 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs font-black text-white mb-0.5">{title}</div>
              <div className="text-xs text-white/40">{desc}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
