import type { TypeCode } from "./questions";

export type TypeTheme = {
  gradient: string;       // CSSグラデーション
  glow: string;           // box-shadowのglow色
  accent: string;         // テキストアクセント色
  bgClass: string;        // 背景ラベル
};

export const typeThemes: Record<TypeCode, TypeTheme> = {
  INTJ: { gradient: "linear-gradient(135deg,#667eea,#764ba2)", glow: "rgba(102,126,234,0.5)", accent: "#a78bfa", bgClass: "intj" },
  INTP: { gradient: "linear-gradient(135deg,#4facfe,#00f2fe)", glow: "rgba(79,172,254,0.5)", accent: "#67e8f9", bgClass: "intp" },
  ENTJ: { gradient: "linear-gradient(135deg,#f093fb,#f5576c)", glow: "rgba(245,87,108,0.5)", accent: "#fb7185", bgClass: "entj" },
  ENTP: { gradient: "linear-gradient(135deg,#fda085,#f6d365)", glow: "rgba(253,160,133,0.5)", accent: "#fbbf24", bgClass: "entp" },
  INFJ: { gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)", glow: "rgba(161,140,209,0.5)", accent: "#c4b5fd", bgClass: "infj" },
  INFP: { gradient: "linear-gradient(135deg,#fccb90,#d57eeb)", glow: "rgba(213,126,235,0.5)", accent: "#f0abfc", bgClass: "infp" },
  ENFJ: { gradient: "linear-gradient(135deg,#f6d365,#fda085)", glow: "rgba(246,211,101,0.5)", accent: "#fcd34d", bgClass: "enfj" },
  ENFP: { gradient: "linear-gradient(135deg,#43e97b,#38f9d7)", glow: "rgba(67,233,123,0.5)", accent: "#6ee7b7", bgClass: "enfp" },
  ISTJ: { gradient: "linear-gradient(135deg,#2c3e50,#4ca1af)", glow: "rgba(76,161,175,0.5)", accent: "#7dd3fc", bgClass: "istj" },
  ISFJ: { gradient: "linear-gradient(135deg,#accbee,#e7f0fd)", glow: "rgba(172,203,238,0.4)", accent: "#93c5fd", bgClass: "isfj" },
  ESTJ: { gradient: "linear-gradient(135deg,#1a1a2e,#e94560)", glow: "rgba(233,69,96,0.5)", accent: "#f87171", bgClass: "estj" },
  ESFJ: { gradient: "linear-gradient(135deg,#f7971e,#ffd200)", glow: "rgba(255,210,0,0.5)", accent: "#fde68a", bgClass: "esfj" },
  ISTP: { gradient: "linear-gradient(135deg,#373b44,#4286f4)", glow: "rgba(66,134,244,0.5)", accent: "#93c5fd", bgClass: "istp" },
  ISFP: { gradient: "linear-gradient(135deg,#ee9ca7,#ffdde1)", glow: "rgba(238,156,167,0.4)", accent: "#fda4af", bgClass: "isfp" },
  ESTP: { gradient: "linear-gradient(135deg,#f46b45,#eea849)", glow: "rgba(244,107,69,0.5)", accent: "#fb923c", bgClass: "estp" },
  ESFP: { gradient: "linear-gradient(135deg,#f953c6,#b91d73)", glow: "rgba(249,83,198,0.5)", accent: "#f0abfc", bgClass: "esfp" },
};
