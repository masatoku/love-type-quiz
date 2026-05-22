import type { TypeCode } from "@/data/questions";
import type { TypeTheme } from "@/data/typeThemes";
import TypeCharacter from "./TypeCharacter";

type Props = {
  typeCode: TypeCode;
  name: string;
  tagline: string;
  theme: TypeTheme;
};

// html2canvas で撮影する用のカード（blur/backdrop-filter 不使用）
export default function ShareCard({ typeCode, name, tagline, theme }: Props) {
  return (
    <div
      id="share-card"
      style={{
        width: 390,
        height: 693,
        background: "#030314",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* グラデーション背景（中央放射） */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: theme.gradient,
        opacity: 0.25,
      }} />

      {/* 星の装飾（固定） */}
      {[
        [12,8],[88,12],[6,30],[94,28],[15,70],[85,68],[10,90],[90,88],
        [50,6],[30,20],[70,18],[25,50],[75,52],[40,82],[60,80],[50,95],
      ].map(([x,y], i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
          height: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
          borderRadius: "50%",
          background: "white",
          opacity: 0.3 + (i % 3) * 0.15,
        }} />
      ))}

      {/* ボーダー */}
      <div style={{
        position: "absolute",
        inset: 16,
        border: "1px solid rgba(232,201,122,0.25)",
        borderRadius: 24,
      }} />
      <div style={{
        position: "absolute",
        inset: 20,
        border: "0.5px solid rgba(232,201,122,0.1)",
        borderRadius: 20,
      }} />

      {/* サイトロゴ（上部） */}
      <div style={{
        position: "absolute",
        top: 36,
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 11,
        color: "rgba(232,201,122,0.5)",
        letterSpacing: "0.2em",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
      }}>
        ✦ LOVE TYPE READING ✦
      </div>

      {/* タイプコード（上部右） */}
      <div style={{
        position: "absolute",
        top: 34,
        right: 38,
        fontSize: 10,
        color: "rgba(255,255,255,0.3)",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.15em",
      }}>
        {typeCode}
      </div>

      {/* 中央コンテンツ */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: "0 48px",
      }}>

        {/* シンボル */}
        <div style={{
          filter: `drop-shadow(0 0 20px ${theme.glow})`,
        }}>
          <TypeCharacter type={typeCode} size={140} />
        </div>

        {/* 区切り線 */}
        <div style={{
          width: 60,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
        }} />

        {/* タイプ名 */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontSize: 13,
            color: theme.accent,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.3em",
            marginBottom: 8,
          }}>
            {typeCode}
          </div>
          <div style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#fff",
            fontFamily: "'Noto Sans JP', sans-serif",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}>
            {name}
          </div>
        </div>

        {/* タグライン */}
        <div style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.65)",
          fontFamily: "'Noto Sans JP', sans-serif",
          textAlign: "center",
          lineHeight: 1.7,
          padding: "12px 0",
          borderTop: "1px solid rgba(232,201,122,0.15)",
          borderBottom: "1px solid rgba(232,201,122,0.15)",
          width: "100%",
        }}>
          「{tagline}」
        </div>
      </div>

      {/* URLフッター */}
      <div style={{
        position: "absolute",
        bottom: 36,
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 10,
        color: "rgba(255,255,255,0.25)",
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: "0.15em",
      }}>
        love-type-quiz.pages.dev
      </div>
    </div>
  );
}
