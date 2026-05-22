export type Axis = "EI" | "NS" | "TF" | "JP";
export type Answer = -2 | 2;

export type Question = {
  id: number;
  axis: Axis;
  text: string;
  emojiA: string;
  labelA: string;
  emojiB: string;
  labelB: string;
};

// A=-2 (A側), B=+2 (B側)
// E=-, I=+ / N=-, S=+ / T=-, F=+ / J=-, P=+
export const questions: Question[] = [
  // E/I
  {
    id: 1, axis: "EI",
    text: "週末の過ごし方は？",
    emojiA: "🎉", labelA: "友達と外に出かけたい",
    emojiB: "🏠", labelB: "家でひとりでまったりしたい",
  },
  {
    id: 2, axis: "EI",
    text: "疲れたとき回復するのは？",
    emojiA: "🗣️", labelA: "誰かと話すと元気になる",
    emojiB: "🛁", labelB: "ひとりで過ごすと回復する",
  },
  {
    id: 3, axis: "EI",
    text: "初めて会う人と話すのは？",
    emojiA: "😄", labelA: "得意！すぐ仲良くなれる",
    emojiB: "😤", labelB: "少し緊張する・苦手",
  },
  // N/S
  {
    id: 4, axis: "NS",
    text: "物事を考えるとき重視するのは？",
    emojiA: "🌠", labelA: "可能性・未来のビジョン",
    emojiB: "📊", labelB: "今の事実・現実のデータ",
  },
  {
    id: 5, axis: "NS",
    text: "新しいことを学ぶとき？",
    emojiA: "🧩", labelA: "全体像・コンセプトから入る",
    emojiB: "📋", labelB: "具体的な手順・詳細から入る",
  },
  {
    id: 6, axis: "NS",
    text: "会話のスタイルは？",
    emojiA: "🌈", labelA: "比喩・たとえ話をよく使う",
    emojiB: "💬", labelB: "具体的・ストレートに話す",
  },
  // T/F
  {
    id: 7, axis: "TF",
    text: "大事な決断をするとき？",
    emojiA: "🧠", labelA: "論理・合理性で決める",
    emojiB: "💖", labelB: "気持ち・人間関係で決める",
  },
  {
    id: 8, axis: "TF",
    text: "友達が悩み相談してきたら？",
    emojiA: "🔧", labelA: "解決策・客観的アドバイスをしたい",
    emojiB: "🤗", labelB: "まず気持ちに寄り添いたい",
  },
  {
    id: 9, axis: "TF",
    text: "批判・指摘を受けたとき？",
    emojiA: "📝", labelA: "内容が正しければ受け入れられる",
    emojiB: "😢", labelB: "言い方によっては結構傷つく",
  },
  // J/P
  {
    id: 10, axis: "JP",
    text: "旅行の計画は？",
    emojiA: "📅", labelA: "事前にしっかり立てたい",
    emojiB: "🌀", labelB: "現地で自由に決めたい",
  },
  {
    id: 11, axis: "JP",
    text: "締め切りや期限について？",
    emojiA: "✅", labelA: "早めに終わらせて安心したい",
    emojiB: "⚡", labelB: "直前のほうが集中できる",
  },
  {
    id: 12, axis: "JP",
    text: "日常のルーティンは？",
    emojiA: "⏰", labelA: "決まったリズムがあると安心",
    emojiB: "🎲", labelB: "その日の気分で変えたい",
  },
];

export type TypeCode =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export function calcType(answers: Record<number, Answer>): TypeCode {
  const axes: Axis[] = ["EI", "NS", "TF", "JP"];
  let result = "";
  for (const axis of axes) {
    const axisQs = questions.filter((q) => q.axis === axis);
    const sum = axisQs.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
    if (axis === "EI") result += sum <= 0 ? "E" : "I";
    else if (axis === "NS") result += sum <= 0 ? "N" : "S";
    else if (axis === "TF") result += sum <= 0 ? "T" : "F";
    else result += sum <= 0 ? "J" : "P";
  }
  return result as TypeCode;
}
