import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const worries = [
  {
    emoji: "💰",
    title: "費用が不安",
    desc: "「100万円で足りる？」リアルな費用を公開中",
    href: "/best-3#cost",
  },
  {
    emoji: "🗣",
    title: "英語力ゼロで大丈夫？",
    desc: "英語力不問でサポートしてくれるエージェントを比較",
    href: "/best-3",
  },
  {
    emoji: "💼",
    title: "帰国後のキャリアが心配",
    desc: "ワーホリ後の就職、実例をもとに解説",
    href: "/best-3",
  },
  {
    emoji: "🏢",
    title: "エージェント選びで失敗したくない",
    desc: "3社の無料相談を実際に体験して比較しました",
    href: "/best-3",
  },
];

const agents = [
  {
    rank: 1,
    name: "スマ留",
    tagline: "業界最安級×知名度No.1",
    points: ["最短1週間〜対応", "無料面談のハードルが低い", "短期も長期もOK"],
    badge: "コスパ重視ならここ",
    color: "border-accent",
  },
  {
    rank: 2,
    name: "ISS留学ライフ",
    tagline: "Z会グループの安心感",
    points: ["確定率100%の実績", "社会人キャリア留学に強い", "50年以上の歴史"],
    badge: "信頼重視ならここ",
    color: "border-primary",
  },
  {
    rank: 3,
    name: "ラストリゾート",
    tagline: "ワーホリ特化の老舗",
    points: ["資料DLから段階的に相談可", "ワーホリ専門カウンセラー", "10万人以上の渡航実績"],
    badge: "ワーホリ本命ならここ",
    color: "border-green-500",
  },
  {
    rank: 4,
    name: "留学ジャーナル",
    tagline: "創業50年超の老舗",
    points: ["国別専門カウンセラー", "正規留学に強い", "圧倒的な情報量"],
    badge: "実績重視ならここ",
    color: "border-purple-500",
  },
  {
    rank: 5,
    name: "ウインテック留学センター",
    tagline: "完全オーダーメイド",
    points: ["一人ひとりに合わせた設計", "親身なカウンセリング", "ユニークな留学体験"],
    badge: "個別対応ならここ",
    color: "border-rose-500",
  },
];

const steps = [
  { num: "01", title: "エージェントを比較", desc: "当サイトで5社の特徴・費用を比較" },
  { num: "02", title: "無料相談を予約", desc: "気になるエージェントに無料相談を申し込み" },
  { num: "03", title: "プランを決定", desc: "カウンセラーと一緒に最適な渡航プランを設計" },
  { num: "04", title: "ワーホリ出発！", desc: "準備サポートを受けて安心して渡航" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-primary font-bold text-sm md:text-base mb-4 tracking-wide">
            留学経験者が本音で比較
          </p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            30歳までに行かないと
            <br className="hidden md:block" />
            <span className="text-primary">後悔するワーホリ</span>、
            <br />
            最初の一歩はエージェント選びから。
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            「いくらかかる？」「英語力ゼロでも大丈夫？」「帰国後の仕事は？」
            <br className="hidden sm:block" />
            そんな不安を、実際に各社の無料相談を受けた経験者が解消します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="/best-3" variant="accent">
              おすすめ5選を見る →
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Worries */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading sub="あなたの悩み、全部カバーしています">
            こんな不安、ありませんか？
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {worries.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <span className="text-3xl flex-shrink-0">{w.emoji}</span>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {w.title}
                  </p>
                  <p className="text-sm text-muted mt-1">{w.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Preview */}
      <section className="py-16 md:py-20 bg-soft">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading sub="留学経験者が各社の無料相談を受けて厳選">
            留学エージェント おすすめ5選
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((a) => (
              <div
                key={a.name}
                className={`bg-white rounded-2xl border-t-4 ${a.color} p-6 shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-foreground text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {a.rank}
                  </span>
                  <h3 className="text-lg font-bold">{a.name}</h3>
                </div>
                <p className="text-sm text-muted mb-4">{a.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 inline-block">
                  {a.badge}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton href="/best-3" variant="accent">
              5社の詳細比較を見る →
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading sub="ワーホリ出発までの流れ">
            たった4ステップで渡航準備完了
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-4xl font-black text-primary/20 mb-2">{s.num}</div>
                <p className="font-bold text-foreground mb-1">{s.title}</p>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            迷っている時間が一番もったいない。
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            ワーホリビザには年齢制限があります。
            <br />
            まずは無料相談で「自分に合うプラン」を聞いてみませんか？
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめ5選を今すぐチェック →
          </CtaButton>
        </div>
      </section>

      {/* PR表記 */}
      <div className="bg-card text-center py-3 text-xs text-muted">
        ※ 当サイトはアフィリエイト広告を利用しています。詳しくは
        <Link href="/disclosure" className="underline hover:text-primary ml-1">
          広告掲載について
        </Link>
        をご確認ください。
      </div>
    </>
  );
}
