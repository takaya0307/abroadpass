import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "語学留学とは？仕組み・期間・費用・ワーホリとの違いを徹底解説【2026年版】 | Abroad Pass",
  description:
    "語学留学とは何か？仕組み・期間・ビザ・費用・ワーホリとの違いをわかりやすく解説。短期・長期・社会人留学の選び方も紹介。【2026年版】",
};

const types = [
  {
    label: "① 短期語学留学（1週間〜3ヶ月）",
    desc: "有給休暇や学校の長期休暇を活用して渡航する人が多いスタイル。英語への慣れやモチベーションのきっかけづくりに向いています。3ヶ月以内であれば多くの国でビザ不要（観光ビザ）で渡航できます。",
  },
  {
    label: "② 長期語学留学（3ヶ月〜1年以上）",
    desc: "英語力を本格的に伸ばしたい人向けのスタイル。日常会話からビジネス英語・資格取得対策まで、目的に応じたコースを組み合わせられます。3ヶ月を超える場合は学生ビザの取得が必要になる国がほとんどです。",
  },
  {
    label: "③ 社会人語学留学",
    desc: "キャリアチェンジや英語力強化を目的に渡航するスタイル。近年は1〜3ヶ月の短期で集中的に学ぶ「リスキリング留学」として注目されています。エージェントを活用することで、スケジュール設計から帰国後のキャリアまで相談できます。",
  },
];

const fitFor = [
  "英語力の向上を最優先にしたい",
  "年齢や仕事の都合でワーホリが難しい",
  "短期集中で英語を鍛えたい社会人",
  "帰国後に英語を活かした仕事に就きたい",
  "正規留学や海外大学進学の準備をしたい",
];

const notFitFor = [
  "現地で働きながら長期滞在したい",
  "費用をできるだけ現地収入で補いたい",
  "29歳以下で1年以上の海外生活を考えている",
];

const agentPoints = [
  "目的・予算に合った国と学校の提案",
  "ビザ・保険・航空券の手配サポート",
  "渡航後のトラブル対応",
  "帰国後のキャリア相談（エージェントによる）",
];

const costTable = [
  { country: "フィリピン", total: "約60〜100万円" },
  { country: "カナダ", total: "約90〜120万円" },
  { country: "オーストラリア", total: "約110〜150万円" },
  { country: "マルタ", total: "約100〜150万円" },
  { country: "アイルランド", total: "約130〜160万円" },
];

const faqs = [
  {
    q: "語学留学に英語力は必要ですか？",
    a: "ゼロからでも渡航はできますが、英語力はあればあるほど有利です。スタート位置が高い分、同じ期間でもより実践的な内容を学べます。入学前にレベルチェックテストを受けてクラスが決まるため、まずは今の自分の英語力で飛び込んでみることが大切です。",
  },
  {
    q: "社会人でも語学留学できますか？",
    a: "はい。語学留学には年齢制限がなく、有給休暇や休職制度を使って渡航する社会人も多くいます。1〜3ヶ月の短期留学が社会人に特に人気です。",
  },
  {
    q: "語学留学とワーホリを組み合わせることはできますか？",
    a: "はい。ワーホリビザで渡航し、最初の数ヶ月を語学学校に通い、その後働くというスタイルが一般的です。ただし語学学校への通学期間はビザの条件（多くの国で最大6ヶ月）を超えないよう注意が必要です。",
  },
  {
    q: "語学留学の学校はどうやって選べばいいですか？",
    a: "目的（一般英語・ビジネス英語・資格対策など）・期間・予算・国をもとに選びます。エージェントに相談すると、目的に合った学校を複数提案してもらえるため、比較しやすくなります。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RyugakuTowaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">基礎知識｜語学留学</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            語学留学とは？
            <br />
            <span className="text-primary">仕組み・期間・費用・ワーホリとの違い</span>を徹底解説
            <br className="hidden md:block" />
            【2026年版】
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「語学留学ってどういう制度？」「ワーホリと何が違うの？」この記事では、語学留学の仕組みをゼロからわかりやすく解説します。
          </p>
        </div>
      </section>

      {/* What is */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="一言でいうと">語学留学とは？</SectionHeading>
          <div className="bg-soft rounded-2xl p-6 border border-border">
            <p className="text-base leading-relaxed text-foreground">
              語学留学とは、<strong>外国語の習得を主な目的として、海外の語学学校に通う留学</strong>のことです。英語であれば一般英語コース・ビジネス英語・IELTS対策など、目的に応じたコースを選べます。
            </p>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              期間は1週間〜数年と幅広く、短期休暇を使ったお試し留学から、本格的なキャリアチェンジを見据えた長期留学まで、自分のライフスタイルに合わせて設計できるのが特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* vs ワーホリ */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="どちらが自分に合っている？">語学留学とワーホリの違い</SectionHeading>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">比較項目</th>
                  <th className="text-left px-4 py-3 font-bold">語学留学</th>
                  <th className="text-left px-4 py-3 font-bold">ワーホリ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["目的", "語学習得", "語学習得＋就労＋観光"],
                  ["就労", "制限あり（国・ビザによる）", "可能（国によって制限あり）"],
                  ["年齢制限", "なし", "基本30歳以下"],
                  ["期間", "1週間〜数年", "最長1〜2年"],
                  ["費用の補い方", "基本的に持参資金のみ", "現地で働いて補える"],
                  ["向いている人", "英語習得に集中したい", "働きながら長期滞在したい"],
                ].map(([item, ryugaku, waho], i) => (
                  <tr key={item} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-4 py-3 font-medium text-muted">{item}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{ryugaku}</td>
                    <td className="px-4 py-3 text-muted">{waho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            語学留学はワーホリより就労の自由度が低い分、英語学習に集中できる環境が整っています。年齢制限がないため、社会人や30代以降でも利用しやすいのも大きな特徴です。
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="目的とライフスタイルで選ぶ">語学留学の種類</SectionHeading>
          <div className="space-y-5">
            {types.map((t) => (
              <div key={t.label} className="bg-soft rounded-2xl border border-border p-6">
                <p className="font-bold text-foreground mb-2">{t.label}</p>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="期間と国によって変わる">ビザについて</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">滞在期間</th>
                  <th className="text-left px-4 py-3 font-bold">ビザの種類</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3ヶ月以内", "多くの国で観光ビザ（無料・不要）で滞在可能"],
                  ["3ヶ月超〜1年程度", "学生ビザの取得が必要"],
                  ["長期・正規留学", "学生ビザ（国ごとの申請手続きが必要）"],
                ].map(([period, visa], i) => (
                  <tr key={period} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-4 py-3 font-medium">{period}</td>
                    <td className="px-4 py-3 text-muted">{visa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            ※ 学生ビザの申請手続きは国によって異なり、書類準備に数週間〜数ヶ月かかる場合があります。エージェントを活用するとビザ手続きのサポートを受けられます。
          </p>
        </div>
      </section>

      {/* Fit for / Not fit for */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="自分に合うスタイルを選ぼう">語学留学が向いている人・向いていない人</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
              <p className="font-bold text-primary mb-4">語学留学が向いている人</p>
              <ul className="space-y-2">
                {fitFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-soft rounded-2xl border border-border p-6">
              <p className="font-bold text-foreground mb-4">ワーホリの方が向いている人</p>
              <ul className="space-y-2">
                {notFitFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-muted mt-0.5">→</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/waho-towa" className="text-sm text-primary font-bold mt-4 block hover:underline">
                ワーホリとは？詳しくはこちら →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="3ヶ月・総額の目安">費用の目安</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">国</th>
                  <th className="text-left px-4 py-3 font-bold">3ヶ月の総額目安</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={row.country} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-4 py-3 font-medium">{row.country}</td>
                    <td className="px-4 py-3 font-bold text-primary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            ※ 学費・渡航費・生活費・保険料を含む目安です。詳細は
            <Link href="/ryugaku-cost" className="text-primary underline ml-1">語学留学の費用まとめ</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* Agent */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="利用者の追加費用は基本ゼロ">エージェントを使うべき理由</SectionHeading>
          <p className="text-sm text-muted leading-relaxed mb-6">
            語学留学は「どの国」「どの学校」「何ヶ月」によって英語力の伸びや費用が大きく変わります。自分に合った選択をするには情報収集に時間がかかりますが、エージェントを使えば以下をまとめてサポートしてもらえます。
          </p>
          <ul className="space-y-3 mb-6">
            {agentPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5 font-bold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent/10 border border-accent/20 rounded-2xl px-5 py-4">
            <p className="text-sm font-bold text-accent">
              エージェントの費用は学校側が負担する仕組みのため、利用者への追加費用は基本ゼロです。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="よくある疑問にお答えします">よくある質問</SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-border rounded-2xl p-6 bg-white">
                <p className="font-bold text-foreground mb-2">Q. {faq.q}</p>
                <p className="text-sm text-muted leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            迷ったらまず無料相談を。
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            国選びから学校・費用・スケジュール設計まで、<br className="hidden sm:block" />
            エージェントの無料相談で一緒に考えてもらうのが最短ルートです。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5社を比較する →
          </CtaButton>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-bold text-foreground mb-5">関連記事</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "🌍", title: "語学留学にかかる費用はいくら？国別まとめ【2026年最新版】", href: "/ryugaku-cost" },
              { emoji: "✈️", title: "ワーホリ（ワーキングホリデー）とは？完全解説", href: "/waho-towa" },
              { emoji: "🗣", title: "英語力ゼロでもワーホリ・留学はできる？", href: "/eigo-zero" },
              { emoji: "🔍", title: "留学エージェントの選び方3つのポイント", href: "/agent-erabi" },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-2xl flex-shrink-0">{article.emoji}</span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
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
