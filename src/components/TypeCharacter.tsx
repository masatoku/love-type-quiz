import type { TypeCode } from "@/data/questions";

type Props = { type: TypeCode; size?: number; className?: string };

// 各タイプ = 個性的な動物キャラクター（ちびキャラ顔スタイル）
const chars: Record<TypeCode, (s: number) => React.ReactNode> = {

  // INTJ: 鷹（タカ） - 鋭い目・戦略家
  INTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="ci" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#4c1d95"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#ci)"/>
      {/* 羽の冠 */}
      <ellipse cx="50" cy="22" rx="8" ry="14" fill="#6d28d9" transform="rotate(-15 50 22)"/>
      <ellipse cx="50" cy="22" rx="8" ry="14" fill="#6d28d9" transform="rotate(15 50 22)"/>
      <ellipse cx="50" cy="18" rx="5" ry="10" fill="#a78bfa"/>
      {/* 顔 */}
      <ellipse cx="50" cy="58" rx="28" ry="26" fill="#ddd6fe"/>
      {/* 鋭い目（三角眉） */}
      <path d="M30 50 L42 54" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M58 54 L70 50" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="38" cy="56" r="5" fill="#1e1b4b"/>
      <circle cx="62" cy="56" r="5" fill="#1e1b4b"/>
      <circle cx="40" cy="54" r="1.5" fill="white"/>
      <circle cx="64" cy="54" r="1.5" fill="white"/>
      {/* くちばし */}
      <path d="M46 63 L50 70 L54 63 Z" fill="#fbbf24"/>
      {/* チーク */}
      <ellipse cx="34" cy="62" rx="6" ry="4" fill="#c4b5fd" opacity=".4"/>
      <ellipse cx="66" cy="62" rx="6" ry="4" fill="#c4b5fd" opacity=".4"/>
    </svg>
  ),

  // INTP: フクロウ（博士） - 大きな目・知識人
  INTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cip" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#0c4a6e"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cip)"/>
      {/* 耳羽 */}
      <path d="M22 35 L30 20 L38 35" fill="#0369a1"/>
      <path d="M62 35 L70 20 L78 35" fill="#0369a1"/>
      <path d="M25 35 L30 23 L35 35" fill="#7dd3fc"/>
      <path d="M65 35 L70 23 L75 35" fill="#7dd3fc"/>
      {/* 顔 */}
      <ellipse cx="50" cy="60" rx="30" ry="28" fill="#e0f2fe"/>
      {/* 大きな目 */}
      <circle cx="38" cy="56" r="9" fill="white"/>
      <circle cx="62" cy="56" r="9" fill="white"/>
      <circle cx="38" cy="56" r="9" stroke="#0369a1" strokeWidth="2" fill="none"/>
      <circle cx="62" cy="56" r="9" stroke="#0369a1" strokeWidth="2" fill="none"/>
      <circle cx="38" cy="56" r="5" fill="#0c4a6e"/>
      <circle cx="62" cy="56" r="5" fill="#0c4a6e"/>
      <circle cx="40" cy="54" r="2" fill="white"/>
      <circle cx="64" cy="54" r="2" fill="white"/>
      {/* メガネ */}
      <path d="M27 54 Q29 52 31 54" stroke="#fbbf24" strokeWidth="1.5" fill="none"/>
      <path d="M69 54 Q71 52 73 54" stroke="#fbbf24" strokeWidth="1.5" fill="none"/>
      <line x1="47" y1="56" x2="53" y2="56" stroke="#fbbf24" strokeWidth="1.5"/>
      {/* くちばし */}
      <path d="M46 66 L50 72 L54 66 Z" fill="#fbbf24"/>
      {/* 羽模様 */}
      <ellipse cx="36" cy="62" rx="5" ry="3" fill="#bae6fd" opacity=".5"/>
      <ellipse cx="64" cy="62" rx="5" ry="3" fill="#bae6fd" opacity=".5"/>
    </svg>
  ),

  // ENTJ: ライオン（王者） - 力強い・指揮官
  ENTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cen" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cen)"/>
      {/* たてがみ */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
        <ellipse key={i} cx="50" cy="50" rx="6" ry="16"
          fill={i%2===0?"#b45309":"#d97706"}
          transform={`rotate(${a} 50 50) translate(0 -32)`}/>
      ))}
      {/* 顔 */}
      <circle cx="50" cy="54" r="26" fill="#fef3c7"/>
      {/* 耳 */}
      <circle cx="28" cy="32" r="10" fill="#fbbf24"/>
      <circle cx="72" cy="32" r="10" fill="#fbbf24"/>
      <circle cx="28" cy="32" r="6" fill="#fde68a"/>
      <circle cx="72" cy="32" r="6" fill="#fde68a"/>
      {/* 目 */}
      <circle cx="40" cy="52" r="6" fill="#78350f"/>
      <circle cx="60" cy="52" r="6" fill="#78350f"/>
      <circle cx="42" cy="50" r="2" fill="white"/>
      <circle cx="62" cy="50" r="2" fill="white"/>
      {/* 鼻 */}
      <ellipse cx="50" cy="60" rx="4" ry="3" fill="#b45309"/>
      {/* 口 */}
      <path d="M44 64 Q50 70 56 64" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="60" x2="50" y2="64" stroke="#92400e" strokeWidth="1.5"/>
      {/* 王冠 */}
      <path d="M36 22 L40 14 L44 20 L50 12 L56 20 L60 14 L64 22 Z" fill="#fbbf24"/>
      <rect x="36" y="22" width="28" height="6" rx="2" fill="#fbbf24"/>
    </svg>
  ),

  // ENTP: キツネ（策士） - 賢い・討論者
  ENTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="centp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fb923c"/>
          <stop offset="100%" stopColor="#c2410c"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#centp)"/>
      {/* 耳（とがった） */}
      <path d="M20 40 L30 15 L45 38" fill="#f97316"/>
      <path d="M55 38 L70 15 L80 40" fill="#f97316"/>
      <path d="M24 38 L30 20 L41 37" fill="#fef2f2"/>
      <path d="M59 37 L70 20 L76 38" fill="#fef2f2"/>
      {/* 顔 */}
      <ellipse cx="50" cy="60" rx="28" ry="24" fill="#fed7aa"/>
      {/* 白い顔の模様 */}
      <ellipse cx="50" cy="64" rx="18" ry="16" fill="#fff7ed"/>
      {/* 目（ずる賢そう） */}
      <path d="M32 54 Q38 50 44 54" fill="#7c2d12"/>
      <path d="M56 54 Q62 50 68 54" fill="#7c2d12"/>
      <circle cx="38" cy="56" r="4.5" fill="#7c2d12"/>
      <circle cx="62" cy="56" r="4.5" fill="#7c2d12"/>
      <circle cx="39.5" cy="54.5" r="1.5" fill="white"/>
      <circle cx="63.5" cy="54.5" r="1.5" fill="white"/>
      {/* 鼻 */}
      <ellipse cx="50" cy="64" rx="3" ry="2.5" fill="#7c2d12"/>
      {/* ニヤリとした口 */}
      <path d="M42 68 Q50 75 58 68" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* チーク */}
      <ellipse cx="33" cy="64" rx="7" ry="4" fill="#fb923c" opacity=".4"/>
      <ellipse cx="67" cy="64" rx="7" ry="4" fill="#fb923c" opacity=".4"/>
      {/* 稲妻マーク */}
      <path d="M52 22 L46 32 L52 32 L46 42" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // INFJ: シカ（月の導者） - 神秘的・提唱者
  INFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cinfj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#581c87"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cinfj)"/>
      {/* 角（枝角） */}
      <path d="M32 38 L26 20 M26 20 L20 14 M26 20 L22 26 M32 38 L34 24" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M68 38 L74 20 M74 20 L80 14 M74 20 L78 26 M68 38 L66 24" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round"/>
      {/* 顔 */}
      <ellipse cx="50" cy="62" rx="26" ry="24" fill="#ede9fe"/>
      {/* 耳 */}
      <ellipse cx="27" cy="50" rx="7" ry="10" fill="#a855f7"/>
      <ellipse cx="73" cy="50" rx="7" ry="10" fill="#a855f7"/>
      <ellipse cx="27" cy="50" rx="4" ry="7" fill="#ddd6fe"/>
      <ellipse cx="73" cy="50" rx="4" ry="7" fill="#ddd6fe"/>
      {/* 目（澄んだ） */}
      <circle cx="40" cy="60" r="7" fill="#fff"/>
      <circle cx="60" cy="60" r="7" fill="#fff"/>
      <circle cx="40" cy="60" r="5" fill="#7c3aed"/>
      <circle cx="60" cy="60" r="5" fill="#7c3aed"/>
      <circle cx="42" cy="58" r="2" fill="white"/>
      <circle cx="62" cy="58" r="2" fill="white"/>
      {/* 鼻・口 */}
      <ellipse cx="50" cy="68" rx="2.5" ry="2" fill="#7c3aed"/>
      <path d="M45 72 Q50 76 55 72" stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* 月 */}
      <path d="M54 18 C54 18 60 22 60 28 C60 34 54 36 50 34 C56 32 60 28 56 22 Z" fill="#fbbf24"/>
    </svg>
  ),

  // INFP: ウサギ（詩人） - ふわふわ・仲介者
  INFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cinfp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="100%" stopColor="#9d174d"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cinfp)"/>
      {/* 長い耳 */}
      <ellipse cx="34" cy="22" rx="8" ry="18" fill="#fbcfe8"/>
      <ellipse cx="66" cy="22" rx="8" ry="18" fill="#fbcfe8"/>
      <ellipse cx="34" cy="22" rx="4" ry="13" fill="#fce7f3"/>
      <ellipse cx="66" cy="22" rx="4" ry="13" fill="#fce7f3"/>
      {/* 顔 */}
      <circle cx="50" cy="60" r="27" fill="#fdf2f8"/>
      {/* 目（キラキラ） */}
      <circle cx="40" cy="57" r="7" fill="white"/>
      <circle cx="60" cy="57" r="7" fill="white"/>
      <circle cx="40" cy="57" r="5" fill="#be185d"/>
      <circle cx="60" cy="57" r="5" fill="#be185d"/>
      <circle cx="42" cy="55" r="2" fill="white"/>
      <circle cx="62" cy="55" r="2" fill="white"/>
      <circle cx="38" cy="53" r="1" fill="white" opacity=".7"/>
      <circle cx="58" cy="53" r="1" fill="white" opacity=".7"/>
      {/* 鼻・口 */}
      <ellipse cx="50" cy="64" rx="3" ry="2" fill="#f9a8d4"/>
      <path d="M44 68 Q50 73 56 68" stroke="#db2777" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="64" x2="50" y2="68" stroke="#db2777" strokeWidth="1.5"/>
      {/* チーク */}
      <ellipse cx="33" cy="65" rx="7" ry="5" fill="#f9a8d4" opacity=".5"/>
      <ellipse cx="67" cy="65" rx="7" ry="5" fill="#f9a8d4" opacity=".5"/>
      {/* 花冠 */}
      {[0,60,120,180,240,300].map((a,i) => (
        <circle key={i} cx={50+12*Math.cos(a*Math.PI/180)} cy={14+8*Math.sin(a*Math.PI/180)} r="4"
          fill={["#fde68a","#fbcfe8","#a5f3fc","#bbf7d0","#ddd6fe","#fed7aa"][i]}/>
      ))}
      <circle cx="50" cy="14" r="3" fill="#fbbf24"/>
    </svg>
  ),

  // ENFJ: フェニックス（輝く鳥） - 情熱・主人公
  ENFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cenfj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#b45309"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cenfj)"/>
      {/* 羽冠（炎のような） */}
      <path d="M50 10 L44 26 L50 22 L56 26 Z" fill="#ef4444"/>
      <path d="M40 14 L36 28 L42 24 L44 30" fill="#f97316"/>
      <path d="M60 14 L64 28 L58 24 L56 30" fill="#f97316"/>
      <path d="M32 20 L30 34 L36 30" fill="#fbbf24"/>
      <path d="M68 20 L70 34 L64 30" fill="#fbbf24"/>
      {/* 顔 */}
      <ellipse cx="50" cy="64" rx="26" ry="23" fill="#fef3c7"/>
      {/* 目（輝く） */}
      <circle cx="40" cy="61" r="7" fill="white"/>
      <circle cx="60" cy="61" r="7" fill="white"/>
      <circle cx="40" cy="61" r="5" fill="#92400e"/>
      <circle cx="60" cy="61" r="5" fill="#92400e"/>
      <circle cx="42" cy="59" r="2" fill="white"/>
      <circle cx="62" cy="59" r="2" fill="white"/>
      {/* くちばし */}
      <path d="M46 69 L50 76 L54 69 Z" fill="#f97316"/>
      {/* チーク */}
      <ellipse cx="33" cy="67" rx="7" ry="4" fill="#fbbf24" opacity=".5"/>
      <ellipse cx="67" cy="67" rx="7" ry="4" fill="#fbbf24" opacity=".5"/>
      {/* 星 */}
      <path d="M50 32 L52 38 L58 38 L53 42 L55 48 L50 44 L45 48 L47 42 L42 38 L48 38 Z" fill="#fff" opacity=".8"/>
    </svg>
  ),

  // ENFP: イルカ（自由） - 陽気・運動家
  ENFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cenfp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#065f46"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cenfp)"/>
      {/* 背びれ */}
      <path d="M50 16 L56 30 L44 30 Z" fill="#059669"/>
      {/* 顔（丸みのある） */}
      <ellipse cx="50" cy="60" rx="28" ry="25" fill="#d1fae5"/>
      {/* 口角が上がった笑顔 */}
      <ellipse cx="50" cy="64" rx="20" ry="10" fill="#a7f3d0"/>
      {/* 目 */}
      <circle cx="39" cy="55" r="6" fill="white"/>
      <circle cx="61" cy="55" r="6" fill="white"/>
      <circle cx="39" cy="55" r="4" fill="#065f46"/>
      <circle cx="61" cy="55" r="4" fill="#065f46"/>
      <circle cx="40.5" cy="53.5" r="1.5" fill="white"/>
      <circle cx="62.5" cy="53.5" r="1.5" fill="white"/>
      {/* 笑顔の口 */}
      <path d="M34 66 Q50 78 66 66" stroke="#065f46" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* チーク（水しぶきっぽく） */}
      <ellipse cx="30" cy="62" rx="7" ry="4" fill="#6ee7b7" opacity=".5"/>
      <ellipse cx="70" cy="62" rx="7" ry="4" fill="#6ee7b7" opacity=".5"/>
      {/* 虹 */}
      <path d="M28 26 Q50 14 72 26" stroke="#f093fb" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M32 30 Q50 20 68 30" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  // ISTJ: カメ（堅固） - 誠実・管理者
  ISTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cistj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#334155"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cistj)"/>
      {/* 甲羅 */}
      <ellipse cx="50" cy="50" rx="32" ry="28" fill="#1e293b"/>
      <ellipse cx="50" cy="50" rx="28" ry="24" fill="#334155"/>
      {/* 甲羅の模様 */}
      <path d="M50 28 L40 40 L60 40 Z" fill="#475569"/>
      <path d="M34 40 L40 40 L38 56 Z" fill="#475569"/>
      <path d="M66 40 L60 40 L62 56 Z" fill="#475569"/>
      <path d="M38 56 L60 56 L50 68 Z" fill="#475569"/>
      <ellipse cx="50" cy="44" rx="8" ry="10" fill="#64748b"/>
      {/* 顔 */}
      <ellipse cx="50" cy="70" rx="18" ry="16" fill="#94a3b8"/>
      {/* 目（真面目な） */}
      <circle cx="43" cy="68" r="5" fill="white"/>
      <circle cx="57" cy="68" r="5" fill="white"/>
      <circle cx="43" cy="68" r="3.5" fill="#0f172a"/>
      <circle cx="57" cy="68" r="3.5" fill="#0f172a"/>
      <circle cx="44" cy="67" r="1.5" fill="white"/>
      <circle cx="58" cy="67" r="1.5" fill="white"/>
      {/* 真面目な口 */}
      <path d="M44 75 L56 75" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
      {/* チェック */}
      <path d="M38 46 L43 52 L56 40" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // ISFJ: クマ（守護者） - 温かい・擁護者
  ISFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cisfj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#92400e"/>
          <stop offset="100%" stopColor="#451a03"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cisfj)"/>
      {/* 耳 */}
      <circle cx="26" cy="28" r="14" fill="#78350f"/>
      <circle cx="74" cy="28" r="14" fill="#78350f"/>
      <circle cx="26" cy="28" r="8" fill="#fde68a"/>
      <circle cx="74" cy="28" r="8" fill="#fde68a"/>
      {/* 顔 */}
      <circle cx="50" cy="58" r="30" fill="#d97706"/>
      {/* 顔の白い部分 */}
      <ellipse cx="50" cy="64" rx="18" ry="16" fill="#fef3c7"/>
      {/* 目 */}
      <circle cx="38" cy="55" r="7" fill="#fff"/>
      <circle cx="62" cy="55" r="7" fill="#fff"/>
      <circle cx="38" cy="55" r="5" fill="#451a03"/>
      <circle cx="62" cy="55" r="5" fill="#451a03"/>
      <circle cx="39.5" cy="53.5" r="2" fill="white"/>
      <circle cx="63.5" cy="53.5" r="2" fill="white"/>
      {/* 鼻 */}
      <ellipse cx="50" cy="65" rx="5" ry="4" fill="#451a03"/>
      {/* 口（やさしい） */}
      <path d="M44 70 Q50 76 56 70" stroke="#451a03" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* チーク */}
      <ellipse cx="33" cy="64" rx="8" ry="5" fill="#fca5a5" opacity=".5"/>
      <ellipse cx="67" cy="64" rx="8" ry="5" fill="#fca5a5" opacity=".5"/>
      {/* ハート */}
      <path d="M50 30 C50 30 47 26 44 28 C41 30 41 34 44 36 L50 42 L56 36 C59 34 59 30 56 28 C53 26 50 30 50 30Z" fill="#ef4444" opacity=".9"/>
    </svg>
  ),

  // ESTJ: ゴリラ（将軍） - 力強い・幹部
  ESTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cestj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="100%" stopColor="#1e3a8a"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cestj)"/>
      {/* 軍帽 */}
      <rect x="20" y="24" width="60" height="14" rx="4" fill="#1e3a8a"/>
      <rect x="24" y="20" width="52" height="8" rx="4" fill="#2563eb"/>
      <ellipse cx="50" cy="21" rx="10" ry="4" fill="#3b82f6"/>
      {/* 顔 */}
      <ellipse cx="50" cy="62" rx="28" ry="26" fill="#6b7280"/>
      <ellipse cx="50" cy="67" rx="20" ry="16" fill="#9ca3af"/>
      {/* 目（鋭い） */}
      <rect x="31" y="54" width="14" height="9" rx="4" fill="#1f2937"/>
      <rect x="55" y="54" width="14" height="9" rx="4" fill="#1f2937"/>
      <circle cx="38" cy="58" r="3" fill="#3b82f6"/>
      <circle cx="62" cy="58" r="3" fill="#3b82f6"/>
      <circle cx="39" cy="57" r="1.2" fill="white"/>
      <circle cx="63" cy="57" r="1.2" fill="white"/>
      {/* 鼻 */}
      <ellipse cx="50" cy="66" rx="6" ry="5" fill="#374151"/>
      <circle cx="47" cy="65" r="2.5" fill="#4b5563"/>
      <circle cx="53" cy="65" r="2.5" fill="#4b5563"/>
      {/* 口（真剣） */}
      <path d="M42 72 L58 72" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round"/>
      {/* 星バッジ */}
      <path d="M50 28 L51.5 32.5 L56 32.5 L52.5 35.5 L54 40 L50 37 L46 40 L47.5 35.5 L44 32.5 L48.5 32.5 Z" fill="#fbbf24"/>
    </svg>
  ),

  // ESFJ: ミツバチ（コミュニティ） - 社交的・領事官
  ESFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cesfj" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#92400e"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cesfj)"/>
      {/* 触角 */}
      <line x1="38" y1="26" x2="30" y2="14" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="62" y1="26" x2="70" y2="14" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="30" cy="13" r="4" fill="#fbbf24"/>
      <circle cx="70" cy="13" r="4" fill="#fbbf24"/>
      {/* 羽 */}
      <ellipse cx="24" cy="44" rx="12" ry="7" fill="rgba(255,255,255,0.4)" transform="rotate(-20 24 44)"/>
      <ellipse cx="76" cy="44" rx="12" ry="7" fill="rgba(255,255,255,0.4)" transform="rotate(20 76 44)"/>
      {/* 体（縞模様） */}
      <ellipse cx="50" cy="62" rx="26" ry="22" fill="#fef3c7"/>
      <rect x="26" y="56" width="48" height="8" rx="4" fill="#92400e" opacity=".7"/>
      <rect x="26" y="68" width="48" height="6" rx="3" fill="#92400e" opacity=".5"/>
      {/* 顔 */}
      <ellipse cx="50" cy="54" rx="20" ry="18" fill="#fef3c7"/>
      {/* 目（ニコニコ） */}
      <circle cx="41" cy="51" r="6" fill="white"/>
      <circle cx="59" cy="51" r="6" fill="white"/>
      <circle cx="41" cy="51" r="4" fill="#451a03"/>
      <circle cx="59" cy="51" r="4" fill="#451a03"/>
      <circle cx="42.5" cy="49.5" r="1.5" fill="white"/>
      <circle cx="60.5" cy="49.5" r="1.5" fill="white"/>
      {/* 口 */}
      <path d="M42 58 Q50 65 58 58" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* チーク */}
      <ellipse cx="32" cy="56" rx="6" ry="4" fill="#fca5a5" opacity=".5"/>
      <ellipse cx="68" cy="56" rx="6" ry="4" fill="#fca5a5" opacity=".5"/>
    </svg>
  ),

  // ISTP: オオカミ（職人） - クール・巨匠
  ISTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cistp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1d4ed8"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cistp)"/>
      {/* 耳（とがった） */}
      <path d="M20 42 L28 18 L42 40" fill="#1e40af"/>
      <path d="M58 40 L72 18 L80 42" fill="#1e40af"/>
      <path d="M24 40 L28 22 L38 40" fill="#93c5fd"/>
      <path d="M62 40 L72 22 L76 40" fill="#93c5fd"/>
      {/* 顔 */}
      <ellipse cx="50" cy="62" rx="28" ry="25" fill="#e2e8f0"/>
      {/* 白い模様 */}
      <ellipse cx="50" cy="67" rx="18" ry="15" fill="#f8fafc"/>
      {/* 目（鋭い・クール） */}
      <path d="M30 56 Q38 52 44 57" fill="#1e3a8a"/>
      <path d="M56 57 Q62 52 70 56" fill="#1e3a8a"/>
      <circle cx="38" cy="58" r="5.5" fill="#1e3a8a"/>
      <circle cx="62" cy="58" r="5.5" fill="#1e3a8a"/>
      <circle cx="39.5" cy="56.5" r="2" fill="white"/>
      <circle cx="63.5" cy="56.5" r="2" fill="white"/>
      {/* 鼻 */}
      <ellipse cx="50" cy="67" rx="4" ry="3" fill="#1e3a8a"/>
      {/* 口（クール） */}
      <path d="M44 72 L56 72" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
      {/* チーク */}
      <ellipse cx="33" cy="65" rx="7" ry="4" fill="#93c5fd" opacity=".4"/>
      <ellipse cx="67" cy="65" rx="7" ry="4" fill="#93c5fd" opacity=".4"/>
      {/* レンチ */}
      <rect x="60" y="22" width="6" height="18" rx="3" fill="#64748b" transform="rotate(-30 60 22)"/>
      <circle cx="64" cy="22" r="4" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
    </svg>
  ),

  // ISFP: ネコ（アーティスト） - 創造的・冒険家
  ISFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cisfp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#db2777"/>
          <stop offset="100%" stopColor="#831843"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cisfp)"/>
      {/* 耳（ネコ） */}
      <path d="M20 40 L28 18 L40 38" fill="#be185d"/>
      <path d="M60 38 L72 18 L80 40" fill="#be185d"/>
      <path d="M24 39 L28 22 L37 38" fill="#fbcfe8"/>
      <path d="M63 38 L72 22 L76 39" fill="#fbcfe8"/>
      {/* 顔 */}
      <circle cx="50" cy="60" r="27" fill="#fce7f3"/>
      {/* 目（猫っぽい） */}
      <ellipse cx="39" cy="57" rx="7" ry="8" fill="white"/>
      <ellipse cx="61" cy="57" rx="7" ry="8" fill="white"/>
      <ellipse cx="39" cy="57" rx="3.5" ry="7" fill="#831843"/>
      <ellipse cx="61" cy="57" rx="3.5" ry="7" fill="#831843"/>
      <circle cx="40" cy="54" r="1.5" fill="white"/>
      <circle cx="62" cy="54" r="1.5" fill="white"/>
      {/* ひげ */}
      <line x1="22" y1="64" x2="38" y2="66" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="22" y1="68" x2="38" y2="68" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="62" y1="66" x2="78" y2="64" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="62" y1="68" x2="78" y2="68" stroke="#f9a8d4" strokeWidth="1.5" strokeLinecap="round"/>
      {/* 鼻・口 */}
      <path d="M46 66 L50 70 L54 66" fill="#f9a8d4"/>
      <path d="M44 70 Q50 75 56 70" stroke="#be185d" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* パレット */}
      <circle cx="30" cy="28" r="8" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="27" cy="26" r="2" fill="#ef4444"/>
      <circle cx="33" cy="25" r="2" fill="#3b82f6"/>
      <circle cx="30" cy="31" r="2" fill="#10b981"/>
      <rect x="34" y="30" width="2" height="12" rx="1" fill="#92400e" transform="rotate(30 34 30)"/>
    </svg>
  ),

  // ESTP: チーター（瞬発力） - 行動力・起業家
  ESTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cestp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#c2410c"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cestp)"/>
      {/* 耳（丸い） */}
      <circle cx="28" cy="28" r="12" fill="#ea580c"/>
      <circle cx="72" cy="28" r="12" fill="#ea580c"/>
      <circle cx="28" cy="28" r="7" fill="#fed7aa"/>
      <circle cx="72" cy="28" r="7" fill="#fed7aa"/>
      {/* 顔 */}
      <circle cx="50" cy="58" r="28" fill="#fed7aa"/>
      {/* スポット模様 */}
      <circle cx="36" cy="48" r="4" fill="#c2410c" opacity=".6"/>
      <circle cx="64" cy="48" r="4" fill="#c2410c" opacity=".6"/>
      <circle cx="30" cy="60" r="3" fill="#c2410c" opacity=".5"/>
      <circle cx="70" cy="60" r="3" fill="#c2410c" opacity=".5"/>
      <circle cx="44" cy="74" r="3" fill="#c2410c" opacity=".4"/>
      <circle cx="56" cy="74" r="3" fill="#c2410c" opacity=".4"/>
      {/* 目（キリリ） */}
      <circle cx="40" cy="56" r="7" fill="white"/>
      <circle cx="60" cy="56" r="7" fill="white"/>
      <circle cx="40" cy="56" r="5" fill="#c2410c"/>
      <circle cx="60" cy="56" r="5" fill="#c2410c"/>
      <circle cx="41.5" cy="54.5" r="2" fill="white"/>
      <circle cx="61.5" cy="54.5" r="2" fill="white"/>
      {/* 口（ニッ） */}
      <path d="M43 66 Q50 72 57 66" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* スピードライン */}
      <line x1="12" y1="42" x2="26" y2="42" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
      <line x1="14" y1="50" x2="24" y2="50" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
      <line x1="76" y1="42" x2="88" y2="42" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
    </svg>
  ),

  // ESFP: オウム（パフォーマー） - 華やか・エンターテイナー
  ESFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="cesfp" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#a21caf"/>
          <stop offset="100%" stopColor="#86198f"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#cesfp)"/>
      {/* 頭の羽飾り */}
      <ellipse cx="50" cy="18" rx="5" ry="12" fill="#ef4444" transform="rotate(-10 50 18)"/>
      <ellipse cx="50" cy="18" rx="5" ry="12" fill="#f97316" transform="rotate(10 50 18)"/>
      <ellipse cx="50" cy="16" rx="4" ry="10" fill="#fbbf24"/>
      {/* 翼ヒント */}
      <path d="M18 52 Q14 38 22 32 Q28 46 32 48" fill="#7c3aed" opacity=".8"/>
      <path d="M82 52 Q86 38 78 32 Q72 46 68 48" fill="#7c3aed" opacity=".8"/>
      {/* 顔 */}
      <ellipse cx="50" cy="62" rx="26" ry="24" fill="#f3e8ff"/>
      {/* カラフルな頬 */}
      <ellipse cx="34" cy="62" rx="8" ry="6" fill="#ef4444" opacity=".5"/>
      <ellipse cx="66" cy="62" rx="8" ry="6" fill="#22c55e" opacity=".5"/>
      {/* 目（キラキラ） */}
      <circle cx="40" cy="58" r="7" fill="white"/>
      <circle cx="60" cy="58" r="7" fill="white"/>
      <circle cx="40" cy="58" r="5" fill="#7c3aed"/>
      <circle cx="60" cy="58" r="5" fill="#7c3aed"/>
      <circle cx="42" cy="56" r="2" fill="white"/>
      <circle cx="62" cy="56" r="2" fill="white"/>
      <circle cx="38" cy="54" r="1" fill="white" opacity=".7"/>
      <circle cx="58" cy="54" r="1" fill="white" opacity=".7"/>
      {/* くちばし */}
      <path d="M46 66 L50 72 L54 66 Z" fill="#fbbf24"/>
      <line x1="46" y1="66" x2="54" y2="66" stroke="#f59e0b" strokeWidth="1"/>
      {/* 星 */}
      <circle cx="75" cy="22" r="3" fill="#fbbf24"/>
      <circle cx="24" cy="24" r="2.5" fill="#f9a8d4"/>
      <circle cx="80" cy="38" r="2" fill="#6ee7b7"/>
    </svg>
  ),
};

export default function TypeCharacter({ type, size = 64, className }: Props) {
  const fn = chars[type];
  if (!fn) return null;
  return <span className={className} style={{ display: "inline-block", lineHeight: 0 }}>{fn(size)}</span>;
}
