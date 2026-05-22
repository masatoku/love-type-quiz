import type { TypeCode } from "@/data/questions";

type Props = { type: TypeCode; size?: number; className?: string };

// 各タイプ = 星座ベースのシンボルマーク
const chars: Record<TypeCode, (s: number) => React.ReactNode> = {

  // INTJ: 十字の剣（戦略家）紫
  INTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-intj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-intj)" stroke="#a78bfa" strokeWidth="1"/>
      {/* 剣の縦線 */}
      <line x1="50" y1="18" x2="50" y2="82" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      {/* 剣の横線（ガード） */}
      <line x1="30" y1="42" x2="70" y2="42" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      {/* 星の点 */}
      <circle cx="50" cy="18" r="3" fill="#e0d7ff"/>
      <circle cx="50" cy="82" r="2" fill="#7c6fbd"/>
      <circle cx="30" cy="42" r="2.5" fill="#c4b5fd"/>
      <circle cx="70" cy="42" r="2.5" fill="#c4b5fd"/>
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.9"/>
      {/* 小さな装飾星 */}
      <circle cx="36" cy="28" r="1.5" fill="#a78bfa" opacity="0.7"/>
      <circle cx="64" cy="28" r="1.5" fill="#a78bfa" opacity="0.7"/>
      <circle cx="36" cy="72" r="1" fill="#7c6fbd" opacity="0.5"/>
      <circle cx="64" cy="72" r="1" fill="#7c6fbd" opacity="0.5"/>
      <line x1="50" y1="18" x2="36" y2="28" stroke="#7c3aed" strokeWidth="0.8" opacity="0.5"/>
      <line x1="50" y1="18" x2="64" y2="28" stroke="#7c3aed" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),

  // INTP: 多角形の知的ネット（論理家）青
  INTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-intp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0c4a6e" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-intp)" stroke="#38bdf8" strokeWidth="1"/>
      {/* 六角形の骨格 */}
      <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" stroke="#38bdf8" strokeWidth="1.2" fill="none"/>
      {/* 内部ライン */}
      <line x1="50" y1="20" x2="50" y2="80" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
      <line x1="24" y1="35" x2="76" y2="65" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
      <line x1="76" y1="35" x2="24" y2="65" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.6"/>
      {/* 頂点の星 */}
      <circle cx="50" cy="20" r="3" fill="#e0f2fe"/>
      <circle cx="76" cy="35" r="2.5" fill="#7dd3fc"/>
      <circle cx="76" cy="65" r="2.5" fill="#7dd3fc"/>
      <circle cx="50" cy="80" r="2.5" fill="#7dd3fc"/>
      <circle cx="24" cy="65" r="2.5" fill="#7dd3fc"/>
      <circle cx="24" cy="35" r="2.5" fill="#7dd3fc"/>
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.9"/>
    </svg>
  ),

  // ENTJ: 王冠（指揮官）深紅×金
  ENTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-entj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#4a0010" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-entj)" stroke="#fb7185" strokeWidth="1"/>
      {/* 王冠の3つの先端 */}
      <polyline points="22,68 22,38 36,52 50,24 64,52 78,38 78,68" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* 王冠のベース */}
      <line x1="22" y1="68" x2="78" y2="68" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round"/>
      {/* 宝石 */}
      <circle cx="50" cy="24" r="4" fill="#fff" opacity="0.95"/>
      <circle cx="22" cy="38" r="3" fill="#fca5a5"/>
      <circle cx="78" cy="38" r="3" fill="#fca5a5"/>
      <circle cx="36" cy="52" r="2.5" fill="#fcd34d" opacity="0.8"/>
      <circle cx="64" cy="52" r="2.5" fill="#fcd34d" opacity="0.8"/>
      <circle cx="50" cy="50" r="3" fill="#fbbf24" opacity="0.7"/>
    </svg>
  ),

  // ENTP: 螺旋（討論者）オレンジ
  ENTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-entp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#78350f" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-entp)" stroke="#fbbf24" strokeWidth="1"/>
      {/* 螺旋（3段の円弧） */}
      <path d="M50,50 Q68,32 50,26 Q32,20 28,38 Q24,56 42,66 Q60,76 74,62 Q82,50 74,36" stroke="#fde68a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* 螺旋の点 */}
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.95"/>
      <circle cx="50" cy="26" r="2.5" fill="#fde68a"/>
      <circle cx="28" cy="38" r="2" fill="#fcd34d" opacity="0.8"/>
      <circle cx="74" cy="62" r="2" fill="#fcd34d" opacity="0.8"/>
      <circle cx="74" cy="36" r="2.5" fill="#fde68a"/>
      {/* 装飾点 */}
      <circle cx="32" cy="62" r="1.5" fill="#fb923c" opacity="0.6"/>
      <circle cx="68" cy="30" r="1.5" fill="#fb923c" opacity="0.6"/>
    </svg>
  ),

  // INFJ: 三日月と星（提唱者）ラベンダー
  INFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-infj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-infj)" stroke="#c4b5fd" strokeWidth="1"/>
      {/* 三日月 */}
      <path d="M60,24 Q38,28 34,50 Q30,72 54,78 Q34,78 28,56 Q22,34 44,22 Q52,18 60,24Z" fill="#c4b5fd" opacity="0.85"/>
      {/* 星の散らばり */}
      <circle cx="70" cy="26" r="3" fill="#e0d7ff"/>
      <circle cx="76" cy="44" r="2" fill="#ddd6fe"/>
      <circle cx="72" cy="62" r="2.5" fill="#c4b5fd"/>
      <circle cx="64" cy="74" r="1.5" fill="#a78bfa" opacity="0.8"/>
      {/* 小さな星 */}
      <circle cx="62" cy="36" r="1.5" fill="#ede9fe" opacity="0.7"/>
      <circle cx="78" cy="56" r="1" fill="#c4b5fd" opacity="0.6"/>
    </svg>
  ),

  // INFP: ハートの星座（仲介者）ピンク
  INFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-infp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#500724" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-infp)" stroke="#f9a8d4" strokeWidth="1"/>
      {/* ハート形の星座ライン */}
      <path d="M50,72 L26,52 Q18,36 32,28 Q44,22 50,36 Q56,22 68,28 Q82,36 74,52 Z" stroke="#fce7f3" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      {/* 頂点の星 */}
      <circle cx="26" cy="52" r="2.5" fill="#fce7f3"/>
      <circle cx="74" cy="52" r="2.5" fill="#fce7f3"/>
      <circle cx="32" cy="28" r="2.5" fill="#fbcfe8"/>
      <circle cx="68" cy="28" r="2.5" fill="#fbcfe8"/>
      <circle cx="50" cy="72" r="3" fill="#fff"/>
      <circle cx="50" cy="36" r="3.5" fill="#fff" opacity="0.9"/>
    </svg>
  ),

  // ENFJ: 太陽放射（主人公）金×オレンジ
  ENFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-enfj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#451a03" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-enfj)" stroke="#fcd34d" strokeWidth="1"/>
      {/* 8本の光線 */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = 50 + Math.cos(rad) * 34;
        const y2 = 50 + Math.sin(rad) * 34;
        return <line key={i} x1="50" y1="50" x2={x2} y2={y2} stroke="#fcd34d" strokeWidth={i % 2 === 0 ? "1.5" : "1"} opacity={i % 2 === 0 ? "0.9" : "0.5"}/>;
      })}
      {/* 外側の星 */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 34;
        const y = 50 + Math.sin(rad) * 34;
        return <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 3 : 2} fill={i % 2 === 0 ? "#fde68a" : "#fcd34d"} opacity={i % 2 === 0 ? "0.95" : "0.7"}/>;
      })}
      <circle cx="50" cy="50" r="9" fill="#fef3c7" opacity="0.9"/>
      <circle cx="50" cy="50" r="5" fill="#fff"/>
    </svg>
  ),

  // ENFP: 虹の弧（運動家）グリーン×シアン
  ENFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-enfp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#064e3b" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-enfp)" stroke="#6ee7b7" strokeWidth="1"/>
      {/* 3本の虹弧 */}
      <path d="M20,62 Q50,24 80,62" stroke="#6ee7b7" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M26,68 Q50,36 74,68" stroke="#a7f3d0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M32,74 Q50,46 68,74" stroke="#d1fae5" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* 弧の端の星 */}
      <circle cx="20" cy="62" r="3" fill="#6ee7b7"/>
      <circle cx="80" cy="62" r="3" fill="#6ee7b7"/>
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.95"/>
      {/* 散らばる星 */}
      <circle cx="36" cy="30" r="2" fill="#a7f3d0" opacity="0.8"/>
      <circle cx="64" cy="30" r="2" fill="#a7f3d0" opacity="0.8"/>
      <circle cx="50" cy="24" r="2.5" fill="#d1fae5" opacity="0.9"/>
    </svg>
  ),

  // ISTJ: 方位磁針グリッド（管理者）青緑
  ISTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-istj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#042f2e" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-istj)" stroke="#5eead4" strokeWidth="1"/>
      {/* グリッドライン */}
      <line x1="50" y1="18" x2="50" y2="82" stroke="#5eead4" strokeWidth="1" opacity="0.6"/>
      <line x1="18" y1="50" x2="82" y2="50" stroke="#5eead4" strokeWidth="1" opacity="0.6"/>
      <line x1="28" y1="28" x2="72" y2="72" stroke="#5eead4" strokeWidth="0.8" opacity="0.4"/>
      <line x1="72" y1="28" x2="28" y2="72" stroke="#5eead4" strokeWidth="0.8" opacity="0.4"/>
      {/* 方位の星 */}
      <circle cx="50" cy="18" r="3.5" fill="#ccfbf1"/>
      <circle cx="82" cy="50" r="2.5" fill="#99f6e4"/>
      <circle cx="50" cy="82" r="2.5" fill="#99f6e4"/>
      <circle cx="18" cy="50" r="2.5" fill="#99f6e4"/>
      {/* 対角の星 */}
      <circle cx="28" cy="28" r="1.5" fill="#5eead4" opacity="0.7"/>
      <circle cx="72" cy="28" r="1.5" fill="#5eead4" opacity="0.7"/>
      <circle cx="72" cy="72" r="1.5" fill="#5eead4" opacity="0.7"/>
      <circle cx="28" cy="72" r="1.5" fill="#5eead4" opacity="0.7"/>
      <circle cx="50" cy="50" r="5" fill="#fff" opacity="0.9"/>
    </svg>
  ),

  // ISFJ: シールド＋ハート（擁護者）温かい青
  ISFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-isfj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-isfj)" stroke="#93c5fd" strokeWidth="1"/>
      {/* シールドの輪郭 */}
      <path d="M50,20 L76,32 L76,56 Q76,74 50,82 Q24,74 24,56 L24,32 Z" stroke="#bfdbfe" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      {/* 内部の小さなハート（星の配置） */}
      <circle cx="40" cy="48" r="2" fill="#bfdbfe"/>
      <circle cx="60" cy="48" r="2" fill="#bfdbfe"/>
      <circle cx="50" cy="58" r="2.5" fill="#dbeafe"/>
      <line x1="40" y1="48" x2="50" y2="40" stroke="#93c5fd" strokeWidth="1" opacity="0.6"/>
      <line x1="60" y1="48" x2="50" y2="40" stroke="#93c5fd" strokeWidth="1" opacity="0.6"/>
      <line x1="40" y1="48" x2="50" y2="58" stroke="#93c5fd" strokeWidth="1" opacity="0.6"/>
      <line x1="60" y1="48" x2="50" y2="58" stroke="#93c5fd" strokeWidth="1" opacity="0.6"/>
      <circle cx="50" cy="40" r="3" fill="#fff" opacity="0.9"/>
      {/* シールドの角の星 */}
      <circle cx="50" cy="20" r="2.5" fill="#e0f2fe"/>
      <circle cx="76" cy="32" r="2" fill="#bfdbfe"/>
      <circle cx="24" cy="32" r="2" fill="#bfdbfe"/>
    </svg>
  ),

  // ESTJ: ダイヤモンド（幹部）赤
  ESTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-estj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#450a0a" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-estj)" stroke="#fca5a5" strokeWidth="1"/>
      {/* ダイヤモンドの形 */}
      <polygon points="50,20 76,50 50,80 24,50" stroke="#fca5a5" strokeWidth="1.5" fill="none"/>
      {/* 内側の小さなダイヤ */}
      <polygon points="50,34 62,50 50,66 38,50" stroke="#fca5a5" strokeWidth="1" fill="rgba(220,38,38,0.3)"/>
      {/* 頂点の星 */}
      <circle cx="50" cy="20" r="3.5" fill="#fef2f2"/>
      <circle cx="76" cy="50" r="3" fill="#fca5a5"/>
      <circle cx="50" cy="80" r="3" fill="#fca5a5"/>
      <circle cx="24" cy="50" r="3" fill="#fca5a5"/>
      <circle cx="50" cy="50" r="4.5" fill="#fff" opacity="0.9"/>
      {/* 対角ライン */}
      <line x1="50" y1="20" x2="76" y2="50" stroke="#ef4444" strokeWidth="0.8" opacity="0.5"/>
      <line x1="76" y1="50" x2="50" y2="80" stroke="#ef4444" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),

  // ESFJ: 蜂の巣（領事）黄金
  ESFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-esfj" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#422006" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-esfj)" stroke="#fde68a" strokeWidth="1"/>
      {/* 中心の六角形 */}
      <polygon points="50,32 63,39.5 63,54.5 50,62 37,54.5 37,39.5" stroke="#fde68a" strokeWidth="1.5" fill="none"/>
      {/* 周囲の6つの小六角形の中心点 */}
      <circle cx="50" cy="20" r="2.5" fill="#fef08a"/>
      <circle cx="68" cy="29" r="2.5" fill="#fde68a"/>
      <circle cx="68" cy="71" r="2.5" fill="#fde68a"/>
      <circle cx="50" cy="80" r="2.5" fill="#fef08a"/>
      <circle cx="32" cy="71" r="2.5" fill="#fde68a"/>
      <circle cx="32" cy="29" r="2.5" fill="#fde68a"/>
      {/* 接続ライン */}
      <line x1="50" y1="32" x2="50" y2="20" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <line x1="63" y1="39.5" x2="68" y2="29" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <line x1="63" y1="54.5" x2="68" y2="71" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <line x1="50" y1="62" x2="50" y2="80" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <line x1="37" y1="54.5" x2="32" y2="71" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <line x1="37" y1="39.5" x2="32" y2="29" stroke="#fde68a" strokeWidth="1" opacity="0.6"/>
      <circle cx="50" cy="47" r="5" fill="#fef3c7" opacity="0.9"/>
    </svg>
  ),

  // ISTP: レンチ＋星（巨匠）ダーク青
  ISTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-istp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0f172a" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-istp)" stroke="#60a5fa" strokeWidth="1"/>
      {/* L字型の工具形状 */}
      <line x1="34" y1="24" x2="34" y2="68" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="34" y1="68" x2="68" y2="68" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
      {/* 工具の星のアクセント */}
      <circle cx="34" cy="24" r="4" fill="#eff6ff"/>
      <circle cx="34" cy="68" r="3.5" fill="#bfdbfe"/>
      <circle cx="68" cy="68" r="4" fill="#eff6ff"/>
      {/* 周囲の精密な点 */}
      <circle cx="56" cy="34" r="1.8" fill="#60a5fa" opacity="0.7"/>
      <circle cx="68" cy="44" r="1.5" fill="#60a5fa" opacity="0.6"/>
      <circle cx="24" cy="50" r="1.5" fill="#93c5fd" opacity="0.6"/>
      <circle cx="24" cy="36" r="2" fill="#93c5fd" opacity="0.7"/>
      {/* 接続 */}
      <line x1="34" y1="24" x2="56" y2="34" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
      <line x1="56" y1="34" x2="68" y2="44" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  ),

  // ISFP: 流れる波（冒険者）ローズ
  ISFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-isfp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#be185d" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#500724" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-isfp)" stroke="#f9a8d4" strokeWidth="1"/>
      {/* 3本の波線 */}
      <path d="M20,38 Q30,28 40,38 Q50,48 60,38 Q70,28 80,38" stroke="#fce7f3" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M20,50 Q30,40 40,50 Q50,60 60,50 Q70,40 80,50" stroke="#fbcfe8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M20,62 Q30,52 40,62 Q50,72 60,62 Q70,52 80,62" stroke="#f9a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* 波の山の星 */}
      <circle cx="40" cy="38" r="2.5" fill="#fce7f3"/>
      <circle cx="60" cy="38" r="2.5" fill="#fce7f3"/>
      <circle cx="50" cy="60" r="2.5" fill="#fbcfe8"/>
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.9"/>
    </svg>
  ),

  // ESTP: 矢印（起業家）オレンジ炎
  ESTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-estp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#431407" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-estp)" stroke="#fb923c" strokeWidth="1"/>
      {/* 上向き矢印（稲妻） */}
      <polyline points="32,70 50,24 68,70" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="38" y1="52" x2="62" y2="52" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round"/>
      {/* 頂点の星 */}
      <circle cx="50" cy="24" r="4.5" fill="#fff7ed"/>
      <circle cx="32" cy="70" r="2.5" fill="#fdba74"/>
      <circle cx="68" cy="70" r="2.5" fill="#fdba74"/>
      {/* スピード線の星 */}
      <circle cx="28" cy="38" r="1.5" fill="#fb923c" opacity="0.7"/>
      <circle cx="72" cy="38" r="1.5" fill="#fb923c" opacity="0.7"/>
      <circle cx="24" cy="56" r="1.2" fill="#fdba74" opacity="0.5"/>
      <circle cx="76" cy="56" r="1.2" fill="#fdba74" opacity="0.5"/>
      <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.7"/>
    </svg>
  ),

  // ESFP: 花火（エンターテイナー）ビビッドピンク
  ESFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="g-esfp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a21caf" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#2e1065" stopOpacity="1"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#g-esfp)" stroke="#e879f9" strokeWidth="1"/>
      {/* 12本の花火ライン */}
      {Array.from({ length: 12 }).map((_, i) => {
        const deg = i * 30;
        const rad = (deg * Math.PI) / 180;
        const len = i % 3 === 0 ? 30 : i % 3 === 1 ? 22 : 16;
        const x2 = 50 + Math.cos(rad) * len;
        const y2 = 50 + Math.sin(rad) * len;
        const ex = 50 + Math.cos(rad) * (len + 2);
        const ey = 50 + Math.sin(rad) * (len + 2);
        return (
          <g key={i}>
            <line x1="50" y1="50" x2={x2} y2={y2} stroke="#f0abfc" strokeWidth={i % 3 === 0 ? "1.5" : "1"} opacity={i % 3 === 0 ? "0.9" : "0.6"}/>
            <circle cx={ex} cy={ey} r={i % 3 === 0 ? 2.5 : 1.5} fill={i % 3 === 0 ? "#f5d0fe" : "#e879f9"} opacity={i % 3 === 0 ? "0.95" : "0.7"}/>
          </g>
        );
      })}
      <circle cx="50" cy="50" r="5.5" fill="#fdf4ff" opacity="0.95"/>
      <circle cx="50" cy="50" r="3" fill="#fff"/>
    </svg>
  ),
};

export default function TypeCharacter({ type, size = 64, className }: Props) {
  const fn = chars[type];
  if (!fn) return null;
  return <span className={className} style={{ display: "inline-block", lineHeight: 0 }}>{fn(size)}</span>;
}
