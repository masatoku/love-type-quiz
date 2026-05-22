import type { TypeCode } from "@/data/questions";

type Props = { type: TypeCode; size?: number; className?: string };

// 各タイプを象徴するSVGアイコン（16タイプ全て異なるデザイン）
const icons: Record<TypeCode, (size: number) => React.ReactNode> = {

  // INTJ: 戦略家 - 城・将棋の王将
  INTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="g-intj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-intj)"/>
      <rect x="22" y="50" width="36" height="6" rx="2" fill="white" opacity=".9"/>
      <rect x="26" y="32" width="28" height="18" rx="2" fill="white" opacity=".8"/>
      <rect x="30" y="24" width="8" height="10" rx="1" fill="white" opacity=".9"/>
      <rect x="42" y="24" width="8" height="10" rx="1" fill="white" opacity=".9"/>
      <rect x="36" y="18" width="8" height="8" rx="1" fill="white"/>
    </svg>
  ),

  // INTP: 論理家 - 望遠鏡・宇宙
  INTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-intp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4facfe"/><stop offset="1" stopColor="#00f2fe"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-intp)"/>
      <circle cx="38" cy="36" r="14" stroke="white" strokeWidth="3" fill="none" opacity=".9"/>
      <circle cx="38" cy="36" r="8" fill="white" opacity=".3"/>
      <circle cx="38" cy="36" r="3" fill="white"/>
      <line x1="48" y1="46" x2="60" y2="60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="28" cy="22" r="2" fill="white" opacity=".7"/>
      <circle cx="58" cy="20" r="1.5" fill="white" opacity=".5"/>
      <circle cx="16" cy="50" r="1" fill="white" opacity=".4"/>
    </svg>
  ),

  // ENTJ: 指揮官 - 王冠
  ENTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-entj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f093fb"/><stop offset="1" stopColor="#f5576c"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-entj)"/>
      <path d="M16 52 L20 28 L32 42 L40 20 L48 42 L60 28 L64 52 Z" fill="white" opacity=".9"/>
      <rect x="16" y="52" width="48" height="8" rx="3" fill="white"/>
      <circle cx="16" cy="28" r="4" fill="white" opacity=".8"/>
      <circle cx="64" cy="28" r="4" fill="white" opacity=".8"/>
      <circle cx="40" cy="20" r="4" fill="white"/>
    </svg>
  ),

  // ENTP: 討論者 - 稲妻・閃き
  ENTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-entp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fda085"/><stop offset="1" stopColor="#f6d365"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-entp)"/>
      <path d="M46 14 L28 44 L40 44 L34 66 L58 32 L44 32 Z" fill="white" opacity=".95"/>
    </svg>
  ),

  // INFJ: 提唱者 - 月と星
  INFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-infj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a18cd1"/><stop offset="1" stopColor="#fbc2eb"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-infj)"/>
      <path d="M44 20 C30 20 18 30 18 44 C18 56 28 65 40 65 C34 65 26 55 26 44 C26 32 34 24 44 24 C48 24 52 26 55 28 C52 23 48 20 44 20Z" fill="white" opacity=".9"/>
      <circle cx="56" cy="26" r="3" fill="white"/>
      <circle cx="62" cy="38" r="2" fill="white" opacity=".7"/>
      <circle cx="54" cy="16" r="1.5" fill="white" opacity=".5"/>
    </svg>
  ),

  // INFP: 仲介者 - 桜・花
  INFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-infp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fccb90"/><stop offset="1" stopColor="#d57eeb"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-infp)"/>
      {/* 5枚の花びら */}
      {[0,72,144,216,288].map((deg, i) => (
        <ellipse key={i} cx="40" cy="40" rx="8" ry="16" fill="white" opacity=".85"
          transform={`rotate(${deg} 40 40) translate(0 -14)`}/>
      ))}
      <circle cx="40" cy="40" r="7" fill="white"/>
      <circle cx="40" cy="40" r="4" fill="url(#g-infp)"/>
    </svg>
  ),

  // ENFJ: 主人公 - 太陽・星
  ENFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-enfj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f6d365"/><stop offset="1" stopColor="#fda085"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-enfj)"/>
      <circle cx="40" cy="40" r="16" fill="white" opacity=".9"/>
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <rect key={i} x="38" y="14" width="4" height="10" rx="2" fill="white" opacity=".8"
          transform={`rotate(${deg} 40 40)`}/>
      ))}
    </svg>
  ),

  // ENFP: 運動家 - 虹・星
  ENFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-enfp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#43e97b"/><stop offset="1" stopColor="#38f9d7"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-enfp)"/>
      <path d="M14 52 Q14 24 40 24 Q66 24 66 52" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9"/>
      <path d="M20 52 Q20 30 40 30 Q60 30 60 52" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".6"/>
      <path d="M26 52 Q26 36 40 36 Q54 36 54 52" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".4"/>
      <circle cx="60" cy="22" r="3" fill="white"/>
      <circle cx="20" cy="28" r="2" fill="white" opacity=".7"/>
    </svg>
  ),

  // ISTJ: 管理者 - 盾
  ISTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-istj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2c3e50"/><stop offset="1" stopColor="#4ca1af"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-istj)"/>
      <path d="M40 16 L62 24 L62 44 C62 56 52 64 40 68 C28 64 18 56 18 44 L18 24 Z" fill="white" opacity=".9"/>
      <path d="M40 24 L54 30 L54 44 C54 52 48 58 40 62 C32 58 26 52 26 44 L26 30 Z" fill="url(#g-istj)" opacity=".6"/>
      <path d="M32 40 L38 46 L50 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  // ISFJ: 擁護者 - ハートシールド
  ISFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-isfj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#accbee"/><stop offset="1" stopColor="#e7f0fd"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-isfj)"/>
      <path d="M40 60 C40 60 18 48 18 34 C18 26 24 20 32 20 C36 20 40 23 40 23 C40 23 44 20 48 20 C56 20 62 26 62 34 C62 48 40 60 40 60Z" fill="white" opacity=".9"/>
      <path d="M40 52 C40 52 24 42 24 32 C24 27 28 23 33 23 C36.5 23 40 26 40 26 C40 26 43.5 23 47 23 C52 23 56 27 56 32 C56 42 40 52 40 52Z" fill="url(#g-isfj)" opacity=".5"/>
    </svg>
  ),

  // ESTJ: 幹部 - 天秤
  ESTJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-estj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a1a2e"/><stop offset="1" stopColor="#e94560"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-estj)"/>
      <line x1="40" y1="18" x2="40" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="18" y1="28" x2="62" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M18 28 L10 42 Q14 46 18 46 Q22 46 26 42 Z" fill="white" opacity=".85"/>
      <path d="M62 28 L54 42 Q58 46 62 46 Q66 46 70 42 Z" fill="white" opacity=".85"/>
      <rect x="36" y="58" width="8" height="4" rx="2" fill="white"/>
    </svg>
  ),

  // ESFJ: 領事官 - 握手・ハート
  ESFJ: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-esfj" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f7971e"/><stop offset="1" stopColor="#ffd200"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-esfj)"/>
      <path d="M40 46 C40 46 24 38 24 28 C24 22 28 18 33 18 C36.5 18 40 22 40 22 C40 22 43.5 18 47 18 C52 18 56 22 56 28 C56 38 40 46 40 46Z" fill="white" opacity=".9"/>
      <path d="M20 50 Q20 46 24 46 L30 46 Q32 46 34 48 L40 54 L46 48 Q48 46 50 46 L56 46 Q60 46 60 50 L60 58 Q50 62 40 62 Q30 62 20 58 Z" fill="white" opacity=".8"/>
    </svg>
  ),

  // ISTP: 巨匠 - レンチ・ギア
  ISTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-istp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#373b44"/><stop offset="1" stopColor="#4286f4"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-istp)"/>
      <circle cx="40" cy="40" r="16" fill="none" stroke="white" strokeWidth="4" opacity=".9"/>
      <circle cx="40" cy="40" r="6" fill="white"/>
      {[0,60,120,180,240,300].map((deg,i) => (
        <rect key={i} x="38" y="20" width="4" height="8" rx="2" fill="white" opacity=".8"
          transform={`rotate(${deg} 40 40)`}/>
      ))}
      <line x1="52" y1="52" x2="64" y2="64" stroke="white" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  ),

  // ISFP: 冒険家 - パレット・絵
  ISFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-isfp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ee9ca7"/><stop offset="1" stopColor="#ffdde1"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-isfp)"/>
      <path d="M20 44 C20 30 28 18 40 18 C52 18 62 28 62 40 C62 46 58 50 54 50 C50 50 50 46 46 46 C42 46 42 50 38 50 C28 50 20 52 20 44Z" fill="white" opacity=".9"/>
      <circle cx="30" cy="34" r="4" fill="#f093fb" opacity=".8"/>
      <circle cx="44" cy="28" r="4" fill="#43e97b" opacity=".8"/>
      <circle cx="54" cy="36" r="4" fill="#fda085" opacity=".8"/>
      <circle cx="50" cy="24" r="3" fill="#4facfe" opacity=".7"/>
    </svg>
  ),

  // ESTP: 起業家 - ロケット
  ESTP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-estp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f46b45"/><stop offset="1" stopColor="#eea849"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-estp)"/>
      <path d="M40 14 C40 14 54 22 54 38 L54 52 L46 58 L46 44 C46 44 44 42 40 42 C36 42 34 44 34 44 L34 58 L26 52 L26 38 C26 22 40 14 40 14Z" fill="white" opacity=".9"/>
      <circle cx="40" cy="34" r="6" fill="url(#g-estp)" opacity=".7"/>
      <circle cx="40" cy="34" r="3" fill="white"/>
      <path d="M34 58 L30 68 L40 62 L50 68 L46 58" fill="white" opacity=".6"/>
    </svg>
  ),

  // ESFP: エンターテイナー - 星・スパークル
  ESFP: (s) => (
    <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
      <defs><linearGradient id="g-esfp" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f953c6"/><stop offset="1" stopColor="#b91d73"/>
      </linearGradient></defs>
      <circle cx="40" cy="40" r="40" fill="url(#g-esfp)"/>
      <path d="M40 16 L43.5 32 L60 32 L46.5 42 L52 58 L40 48 L28 58 L33.5 42 L20 32 L36.5 32 Z" fill="white" opacity=".95"/>
      <circle cx="22" cy="20" r="3" fill="white" opacity=".6"/>
      <circle cx="60" cy="22" r="2" fill="white" opacity=".5"/>
      <circle cx="64" cy="50" r="2.5" fill="white" opacity=".4"/>
      <circle cx="16" cy="54" r="2" fill="white" opacity=".3"/>
    </svg>
  ),
};

export default function TypeIcon({ type, size = 64, className = "" }: Props) {
  const IconFn = icons[type];
  if (!IconFn) return <span className="text-4xl">{type}</span>;
  return (
    <span className={`inline-block ${className}`} style={{ lineHeight: 0 }}>
      {IconFn(size)}
    </span>
  );
}
