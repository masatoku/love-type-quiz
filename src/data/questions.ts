export type Axis = "EI" | "NS" | "TF" | "JP";
export type Answer = -2 | -1 | 0 | 1 | 2; // -2=強くA, 2=強くB

export type Question = {
  id: number;
  axis: Axis;
  text: string;
  labelA: string; // スコア -
  labelB: string; // スコア +
};

// E=-, I=+  /  N=-, S=+  /  T=-, F=+  /  J=-, P=+
export const questions: Question[] = [
  // E/I
  {
    id: 1,
    axis: "EI",
    text: "初めて会う人と話すのが",
    labelA: "得意・楽しい",
    labelB: "苦手・緊張する",
  },
  {
    id: 2,
    axis: "EI",
    text: "週末は",
    labelA: "友人と外出して過ごしたい",
    labelB: "家でひとりで過ごしたい",
  },
  {
    id: 3,
    axis: "EI",
    text: "疲れたときは",
    labelA: "誰かと話すと元気になる",
    labelB: "ひとりで過ごすと回復する",
  },
  // N/S
  {
    id: 4,
    axis: "NS",
    text: "物事を考えるとき",
    labelA: "可能性や将来像を想像する",
    labelB: "今の事実や現実を重視する",
  },
  {
    id: 5,
    axis: "NS",
    text: "新しいことを学ぶとき",
    labelA: "全体像・コンセプトから入りたい",
    labelB: "具体的な手順・詳細から入りたい",
  },
  {
    id: 6,
    axis: "NS",
    text: "会話の中で",
    labelA: "比喩やたとえ話をよく使う",
    labelB: "具体的・事実ベースで話す",
  },
  // T/F
  {
    id: 7,
    axis: "TF",
    text: "大事な決断をするとき",
    labelA: "論理や合理性を優先する",
    labelB: "感情や人間関係を優先する",
  },
  {
    id: 8,
    axis: "TF",
    text: "友人が悩みを相談してきたとき",
    labelA: "解決策や客観的なアドバイスをしたい",
    labelB: "まず気持ちに寄り添い共感したい",
  },
  {
    id: 9,
    axis: "TF",
    text: "批判や指摘を受けたとき",
    labelA: "内容が正しければ受け入れられる",
    labelB: "言い方によっては傷つく",
  },
  // J/P
  {
    id: 10,
    axis: "JP",
    text: "旅行の計画は",
    labelA: "事前にしっかり立てたい",
    labelB: "現地で自由に決めたい",
  },
  {
    id: 11,
    axis: "JP",
    text: "締め切りや期限について",
    labelA: "早めに終わらせて安心したい",
    labelB: "直前のほうが集中できる",
  },
  {
    id: 12,
    axis: "JP",
    text: "日常生活は",
    labelA: "ルーティンが決まっていると安心",
    labelB: "その日の気分で変えたい",
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
    const axisQuestions = questions.filter((q) => q.axis === axis);
    const sum = axisQuestions.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
    if (axis === "EI") result += sum <= 0 ? "E" : "I";
    else if (axis === "NS") result += sum <= 0 ? "N" : "S";
    else if (axis === "TF") result += sum <= 0 ? "T" : "F";
    else result += sum <= 0 ? "J" : "P";
  }
  return result as TypeCode;
}
