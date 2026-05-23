import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コラム一覧 | Abroad Pass",
  description:
    "ワーホリ・留学に関するお役立ちコラム一覧。費用・英語力・エージェント選び・帰国後のキャリアまで、留学準備に役立つ情報をまとめています。",
};

const articles = [
  {
    emoji: "🤔",
    tag: "基礎知識",
    title: "そもそも留学エージェントって必要？",
    desc: "使わないと何が大変？費用は？メリット・デメリットをまとめて解説。",
    href: "/agent-hitsuyou",
  },
  {
    emoji: "💰",
    tag: "費用ガイド",
    title: "ワーホリにかかる費用はいくら？国別まとめ",
    desc: "オーストラリア・カナダなど5か国のリアルな費用を公開。節約術も解説。",
    href: "/waho-cost",
  },
  {
    emoji: "🗣",
    tag: "英語・不安解消",
    title: "英語力ゼロでもワーホリ・留学はできる？",
    desc: "英語ゼロから渡航した人の体験談と、不安を解消する方法を紹介。",
    href: "/eigo-zero",
  },
  {
    emoji: "🔍",
    tag: "エージェント選び",
    title: "留学エージェントの選び方3つのポイント",
    desc: "失敗しないために確認すべきポイントと目的別おすすめを紹介。",
    href: "/agent-erabi",
  },
  {
    emoji: "💼",
    tag: "キャリア・就職",
    title: "ワーホリ後の就職は不利？帰国後のキャリアをリアルに解説",
    desc: "カナダ・オーストラリア計2年の実体験をもとに、帰国後の就職活動のリアルを紹介。",
    href: "/career",
  },
  {
    emoji: "🧳",
    tag: "準備・持ち物",
    title: "ワーホリ出発前にやること・準備チェックリスト【経験者が教える】",
    desc: "ビザ・保険・持ち物…出発前にやることを経験者がまとめ。「荷物は軽く」の理由も解説。",
    href: "/waho-junbi",
  },
  {
    emoji: "🌍",
    tag: "費用ガイド",
    title: "語学留学にかかる費用はいくら？国別まとめ【2026年最新版】",
    desc: "フィリピン・カナダ・オーストラリア・アイルランド・マルタの3ヶ月トータル費用を徹底比較。節約ポイントも解説。",
    href: "/ryugaku-cost",
  },
  {
    emoji: "✈️",
    tag: "基礎知識",
    title: "ワーホリ（ワーキングホリデー）とは？仕組みから費用・メリット・デメリットまで完全解説",
    desc: "ワーホリの仕組み・協定32カ国・年齢制限・費用・語学留学との違いを外務省情報をもとに正確に解説。",
    href: "/waho-towa",
  },
  {
    emoji: "📚",
    tag: "基礎知識",
    title: "語学留学とは？仕組み・期間・費用・ワーホリとの違いを徹底解説",
    desc: "語学留学の仕組み・種類・ビザ・費用・ワーホリとの違いをわかりやすく解説。短期・長期・社会人留学の選び方も。",
    href: "/ryugaku-towa",
  },
  {
    emoji: "👔",
    tag: "社会人留学",
    title: "社会人が留学するには？費用・期間・注意点まとめ",
    desc: "有給・休職・退職の3パターンを徹底解説。費用・キャリアへの影響・注意点まで社会人目線でまとめました。",
    href: "/shakaijin-ryugaku",
  },
  {
    emoji: "💡",
    tag: "基礎知識",
    title: "留学エージェントはなぜ無料？仕組みをわかりやすく解説",
    desc: "「無料なのに大丈夫？」という疑問に答えます。語学学校との収益モデル・注意点・直接申し込みとの費用比較を正直に解説。",
    href: "/agent-muryou",
  },
  {
    emoji: "🌏",
    tag: "国選び",
    title: "ワーキングホリデーおすすめ国ランキング【英語圏5カ国を比較】",
    desc: "オーストラリア・カナダ・ニュージーランド・イギリス・アイルランドの特徴・メリット・デメリットを目的別に比較。",
    href: "/waho-country",
  },
  {
    emoji: "🤔",
    tag: "ワーホリ",
    title: "ワーホリはやめた方がいい？デメリットと後悔しないための判断基準",
    desc: "帰国後のキャリア・費用・英語力など実際のデメリットを正直に解説。向いている人・向いていない人の判断基準もまとめました。",
    href: "/waho-demerits",
  },
];

export default function ColumnPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">お役立ちコラム</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            留学・ワーホリの疑問を
            <span className="text-primary">まとめて解決</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            費用・英語力・エージェント選び・帰国後のキャリアまで、
            留学準備で気になるテーマを徹底解説しています。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex flex-col p-6 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-3">{article.emoji}</span>
                <span className="text-xs font-bold text-primary mb-2">{article.tag}</span>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                  {article.title}
                </p>
                <p className="text-sm text-muted mb-4">{article.desc}</p>
                <span className="text-sm text-primary font-bold mt-auto">記事を読む →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
