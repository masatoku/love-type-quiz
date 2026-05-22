import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">

        {/* ヒーローセクション */}
        <div className="mb-8">
          <div className="text-7xl mb-4">💕</div>
          <h1 className="text-3xl font-black text-gray-800 mb-3 leading-tight">
            恋愛タイプ診断
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            たった<span className="text-pink-500 font-bold">12問</span>で<br />
            あなたの恋愛スタイルと<br />
            <span className="text-purple-500 font-bold">相手との相性</span>がわかる！
          </p>
        </div>

        {/* カード */}
        <div className="card p-7 mb-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { emoji: "🧠", label: "12問で診断" },
              { emoji: "💌", label: "16タイプ判定" },
              { emoji: "💑", label: "相性チェック" },
            ].map(({ emoji, label }) => (
              <div key={label} className="text-center p-3 bg-pink-50 rounded-xl">
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-xs text-gray-600 font-semibold">{label}</div>
              </div>
            ))}
          </div>

          <Link href="/quiz" className="btn-primary block w-full text-center">
            診断スタート 💕
          </Link>
        </div>

        {/* 相性だけ診断 */}
        <div className="card p-5 mb-6">
          <p className="text-sm text-gray-500 mb-3">
            すでに自分のタイプを知っている方は
          </p>
          <Link href="/match" className="btn-secondary block w-full text-center text-sm">
            💑 相性診断だけする
          </Link>
        </div>

        {/* 全タイプ一覧へ */}
        <p className="text-xs text-gray-400">
          16タイプの詳細は
          <Link href="/result/infj" className="text-purple-400 hover:underline ml-1">こちら</Link>
        </p>

      </div>
    </div>
  );
}
