import type { TypeCode } from "./questions";

export type Compatibility = {
  score: number;
  label: string;
  description: string;
  tips: string[];
};

type CompatibilityMap = Partial<Record<TypeCode, Partial<Record<TypeCode, Compatibility>>>>;

// 相性データ（代表的な組み合わせを定義し、それ以外はスコアで自動計算）
const overrides: CompatibilityMap = {
  INFJ: {
    ENTP: { score: 92, label: "最高の相性✨", description: "INFJの深い洞察力とENTPの知的探求心が完璧にマッチ。お互いの欠点を補い合い、刺激的な知的対話が絶えません。", tips: ["定期的に深い対話の時間を作ろう", "ENTPは感情表現を意識して", "INFJは批判を個人攻撃と受け取らないように"] },
    INTJ: { score: 88, label: "深い絆💫", description: "同じ内向的直感型として、深いレベルで理解し合えます。互いの内面世界を尊重し合う静かで深い関係です。", tips: ["お互いの孤独な時間を尊重しよう", "感情を言葉で表現する練習を", "共通の理想・ビジョンを語り合おう"] },
    ENFP: { score: 90, label: "運命の出会い💘", description: "INFJの深さとENFPの情熱が融合。お互いに理解されない孤独を癒し合える、まれに見る深い絆を築けます。", tips: ["ENFPは一貫性を意識して", "INFJは感情をもっと表現して", "お互いの成長を一緒に喜ぼう"] },
  },
  INFP: {
    ENFJ: { score: 91, label: "魂の伴侶💞", description: "INFPの深い感受性とENFJのサポート力が絶妙にマッチ。INFPが安心して自分を表現でき、ENFJは深く愛されます。", tips: ["INFPのペースを大切に", "ENFJは求めすぎないように", "共通の価値観を確認し合おう"] },
    ENFP: { score: 85, label: "夢見る二人🌈", description: "同じ感受性を持つ二人は深く共鳴し合えます。お互いの理想と感情を理解し、温かい関係を作れます。", tips: ["現実的な計画も立てよう", "お互いのネガティブを増幅させないよう注意", "定期的に将来について話し合おう"] },
  },
  INTJ: {
    ENFP: { score: 87, label: "理想の補完関係🧩", description: "INTJの戦略的思考とENFPの創造性・情熱が絶妙な化学反応を起こします。互いに磨き合える関係。", tips: ["ENFPは計画性を意識して", "INTJは感情表現を積極的に", "互いの強みを活かした役割分担を"] },
    ENTP: { score: 85, label: "知的なパートナー🔮", description: "二人の知的探求心が共鳴します。深い議論と戦略的思考を共有できる、刺激的な関係です。", tips: ["感情面のケアも忘れずに", "競争ではなく協力関係を築こう", "お互いの弱さを認め合おう"] },
  },
  ENFJ: {
    INFP: { score: 91, label: "魂の伴侶💞", description: "ENFJのサポート力とINFPの深い感受性が絶妙なバランス。INFPが安心して輝き、ENFJは深く愛されます。", tips: ["ENFJは求めすぎないように", "INFPのペースを大切に", "感謝の言葉を忘れずに"] },
    ISFP: { score: 83, label: "優しさが溢れる関係🌸", description: "両者の穏やかな優しさが重なり、温かい関係を作ります。互いに感受性が高く、共感し合えます。", tips: ["率直なコミュニケーションを心がけて", "衝突を避けすぎないように", "お互いの意見を尊重しよう"] },
  },
  ENTP: {
    INFJ: { score: 92, label: "最高の相性✨", description: "ENTPの知的挑戦とINFJの深い洞察が完璧にマッチ。互いを刺激し成長させ合える稀な組み合わせです。", tips: ["ENTPは感情への配慮を忘れずに", "INFJは批判を恐れず意見を言おう", "定期的に深い対話の時間を"] },
    INTJ: { score: 85, label: "知的なパートナー🔮", description: "互いの知性を尊重し合える関係。戦略と革新が組み合わさり、強力なパートナーシップを築けます。", tips: ["感情表現も大切に", "協力関係を意識しよう", "互いの独立性を尊重して"] },
  },
};

// スコアを基にラベルと説明を自動生成
function generateCompatibility(score: number, typeA: TypeCode, typeB: TypeCode): Compatibility {
  let label: string;
  let description: string;
  let tips: string[];

  if (score >= 85) {
    label = "素晴らしい相性💕";
    description = `${typeA}と${typeB}は自然に惹かれ合う組み合わせ。互いの個性を尊重しながら、深い関係を築けます。`;
    tips = ["お互いの良いところを言葉で伝えよう", "定期的に二人だけの時間を作ろう", "違いを個性として楽しもう"];
  } else if (score >= 70) {
    label = "良いバランス🌿";
    description = `${typeA}と${typeB}は異なる個性を持ちますが、その違いがお互いを補い合います。コミュニケーションを大切にすれば長続きします。`;
    tips = ["積極的に気持ちを伝え合おう", "違いを受け入れる心の余裕を持とう", "共通の趣味・目標を見つけよう"];
  } else if (score >= 55) {
    label = "成長できる関係🌱";
    description = `${typeA}と${typeB}の組み合わせは挑戦もありますが、その分お互いを大きく成長させてくれます。努力次第で深い絆が生まれます。`;
    tips = ["相手の価値観を否定しないで", "小さな感謝を積み重ねよう", "意見の違いは話し合いで解決を"];
  } else {
    label = "刺激的な関係⚡";
    description = `${typeA}と${typeB}はまったく異なるタイプ。衝突することもありますが、互いの世界を広げてくれる可能性を秘めています。`;
    tips = ["相手の違いを否定しないで", "お互いの「当たり前」が違うと認識しよう", "共通点を意識的に探そう"];
  }

  return { score, label, description, tips };
}

// スコア計算ロジック（共通する文字数ベース）
function calcScore(a: TypeCode, b: TypeCode): number {
  if (a === b) return 78; // 同じタイプはそれなりに相性良い
  let common = 0;
  for (let i = 0; i < 4; i++) {
    if (a[i] === b[i]) common++;
  }
  // 共通1文字=50, 2文字=65, 3文字=75 をベースに調整
  const base = [45, 52, 67, 76][common];
  // E/Iが違う場合は少しボーナス（外向・内向の補完）
  const eiBonus = a[0] !== b[0] ? 5 : 0;
  // T/Fが同じ場合はボーナス（価値観の近さ）
  const tfBonus = a[2] === b[2] ? 5 : 0;
  return Math.min(94, base + eiBonus + tfBonus);
}

export function getCompatibility(typeA: TypeCode, typeB: TypeCode): Compatibility {
  // オーバーライドを両方向でチェック
  const override = overrides[typeA]?.[typeB] ?? overrides[typeB]?.[typeA];
  if (override) return override;

  const score = calcScore(typeA, typeB);
  return generateCompatibility(score, typeA, typeB);
}
