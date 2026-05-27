import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "ウインテック留学センターの特徴は何ですか？",
    answer:
      "既製のパッケージではなく、一人ひとりの希望・予算・目的に合わせた完全オーダーメイドのプランを設計してくれるエージェントです。カウンセラーによる丁寧なヒアリングが特徴です。",
  },
  {
    question: "渡航前のサポートはどんな内容ですか？",
    answer:
      "ビザ手続き・語学学校の手配に加え、渡航前の英語レッスンも受けられます。オリエンテーションで海外生活の基礎情報も提供してくれます。",
  },
  {
    question: "現地（海外）でのサポートはありますか？",
    answer:
      "渡航先によってサポート内容が異なります。現地オフィスを持たない国もあるため、相談の際に渡航先のサポート体制を確認することをおすすめします。",
  },
  {
    question: "語学留学とワーホリ、両方対応していますか？",
    answer:
      "はい、どちらも対応しています。目的や予算に合わせてプランを一から提案してもらえます。",
  },
  {
    question: "無料相談だけでも大丈夫ですか？",
    answer:
      "大丈夫です。相談しただけで申し込む義務は一切ありません。費用感やプランの詳細など、気になることを直接確認してみましょう。",
  },
];

export const metadata: Metadata = {
  title: "ウインテック留学センターの評判・口コミ【2026年最新】オーダーメイド留学の実態",
  description:
    "ウインテック留学センターの評判・口コミを実際のユーザーの声をもとに解説。渡航前サポートの内容・費用の高さ・現地サポートの有無など、メリット・デメリットを正直にまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/wintech",
  },
};

const reviews = [
  {
    age: "20代女性",
    stars: 3,
    good: "海外出発前に英語のレッスンを合わせて受けることができるところ。",
    bad: "カナダに支店がなく、出発までのサポートという感じで、現地でのサポートがなかったところ。",
  },
  {
    age: "20代女性",
    stars: 3,
    good: "安心だった。",
    bad: "金額が高い。",
  },
  {
    age: "20代",
    stars: 3,
    good: "初めての海外だったため、オリエンテーションなど海外生活の基礎的な情報を得ることができた。VISA手続きや語学学校手配などアイルランド生活の初期のサポートをしてくださった。",
    bad: "全体的に費用が高い。拠点がかなり限られるため、その近くに住んでいる方なら良いかもしれないが、遠方だと営業所までの往復が大変かもしれない（場合によってはオンラインでの対応もあるとのこと）。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function WintechPage() {
  return (
    <>
      {/* PR表記 */}
      <div className="bg-accent/10 text-center py-2 text-xs text-muted">
        【PR】当ページにはアフィリエイト広告が含まれています
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 text-center">2026年最新版</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4 text-center">
            ウインテック留学センターの評判・口コミ
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            一人ひとりに合わせたオーダーメイドプランが特徴の「ウインテック留学センター」。
            実際の利用者の口コミをもとに、サポートの実態・費用・向いている人を正直にまとめました。
          </p>

          {/* 総合評価 */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-center mb-8">
            <p className="text-sm font-bold text-muted mb-2">総合評価</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl font-black">3.0</span>
              <div>
                <Stars count={3} />
                <p className="text-xs text-muted mt-1">※ 本サイト掲載の口コミ{reviews.length}件をもとに算出した参考評価です（件数が少ないため参考程度にご覧ください）</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">渡航前の英語レッスン・手続きサポート</span>は評価される一方、
              <span className="font-bold text-red-500">費用の高さと現地サポートの薄さ</span>を指摘する声が目立ちます。
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4B1EPN+DJM182+5P4G+5YZ75" variant="accent" external>
              ウインテックに無料相談する
            </CtaButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www12.a8.net/0.gif?a8mat=4B1EPN+DJM182+5P4G+5YZ75" width={1} height={1} alt="" style={{ border: "none" }} />
            <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
          </div>
        </div>
      </section>

      {/* ウインテックとは */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="一人ひとりに合わせた完全オーダーメイドプランが特徴">
            ウインテック留学センターとは
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ウインテック留学センターは、「既製品の留学プラン」ではなく
              一人ひとりの希望・予算・目的に合わせて完全オーダーメイドのプランを設計することを売りにしている留学エージェントです。
              カウンセラーが親身にヒアリングし、他社にはないユニークな留学体験を提案してくれます。
            </p>
            <p>
              渡航前の英語レッスンを合わせて受けられる点や、
              VISA手続き・語学学校の手配など初期サポートの丁寧さは評価されています。
              ただし、拠点が限られており現地オフィスを持たない国もあるため、
              どの国・都市に行くかによってサポート内容が異なります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "特徴", value: "完全オーダーメイド" },
                { label: "渡航前", value: "英語レッスンあり" },
                { label: "拠点", value: "国内・一部海外" },
                { label: "対象", value: "語学・ワーホリ" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 text-center">
                  <p className="text-xs text-muted mb-1">{item.label}</p>
                  <p className="font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 対応国 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="留学・ワーホリ対応国">
            ウインテック留学センターの対応国一覧
          </SectionHeading>
          <div className="flex flex-wrap gap-2 mb-3">
            {[
              { flag: "🇦🇺", name: "オーストラリア" },
              { flag: "🇨🇦", name: "カナダ" },
              { flag: "🇳🇿", name: "ニュージーランド" },
              { flag: "🇬🇧", name: "イギリス" },
              { flag: "🇮🇪", name: "アイルランド" },
              { flag: "🇺🇸", name: "アメリカ" },
              { flag: "🇵🇭", name: "フィリピン" },
              { flag: "🇲🇹", name: "マルタ" },
              { flag: "🇩🇪", name: "ドイツ" },
              { flag: "🇫🇷", name: "フランス" },
              { flag: "🇪🇸", name: "スペイン" },
              { flag: "🇮🇹", name: "イタリア" },
              { flag: "🇰🇷", name: "韓国" },
            ].map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1 bg-soft border border-border rounded-full px-3 py-1 text-sm font-medium">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted">※ 対応国・プランは変更になる場合があります。最新情報は公式サイトまたは無料相談でご確認ください。</p>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="口コミから見えてきた実態">
            ウインテックのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "渡航前に英語レッスンが受けられる",
                  "VISA手続き・語学学校手配など初期サポートが丁寧",
                  "オリエンテーションで海外生活の基礎情報を提供",
                  "一人ひとりに合わせたオーダーメイドプランの提案",
                  "安心感を感じたという口コミあり",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">△ デメリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "費用が高いという口コミが複数",
                  "現地オフィスがない国もあり、渡航後のサポートが薄い",
                  "拠点が限られており、遠方の人は相談に行きにくい",
                  "知名度はスマ留・ISS・ラストリゾートに比べて低め",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">△</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="こんな人におすすめ・おすすめしない">
            ウインテックが向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "既製品のパッケージではなく、自分だけのプランを作りたい",
                  "渡航前から英語力も同時に高めたい",
                  "手続き全般をしっかりサポートしてもらいたい",
                  "営業所が近くにあり、対面で相談したい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">👎 向いていない人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "費用をできるだけ抑えたい",
                  "現地（海外）での手厚いサポートを重視する",
                  "知名度の高い大手エージェントで安心したい",
                  "拠点から遠い地域に住んでいる",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 口コミ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="実際の利用者の声">
            ウインテックの口コミ
          </SectionHeading>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 text-sm text-foreground/70">
            ※ 以下の口コミは第三者口コミサービスに投稿されたユーザーの声を参考に掲載しています。口コミ件数が少ないため、参考情報として捉えていただき、実際の相談で詳細を確認することをおすすめします。
          </div>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold">{review.age}</span>
                  <Stars count={review.stars} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-primary mb-1">良かった点</p>
                    <p className="text-foreground/80 leading-relaxed">{review.good}</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-500 mb-1">気になった点</p>
                    <p className="text-foreground/80 leading-relaxed">{review.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            ウインテックはこんなエージェント
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ウインテック留学センターは、<strong>渡航前の英語レッスンやオリエンテーションなど、
              出発前の準備を丁寧にサポートしてくれる</strong>点が評価されています。
              オーダーメイドプランの提案力は他社にない強みです。
            </p>
            <p>
              一方で、<strong>費用が高い・現地サポートが薄い</strong>という点は複数の口コミで共通して挙げられています。
              現地オフィスを持たない国に渡航する場合、到着後は自力で動く場面が多くなる可能性があります。
              事前に「どの国・都市にオフィスがあるか」「現地でのトラブル時にどう対応してもらえるか」を
              確認した上で利用を検討することをおすすめします。
            </p>
            <p>
              口コミ件数がまだ少ないエージェントのため、無料相談を通じて
              <strong>直接カウンセラーの雰囲気や対応力を確認する</strong>ことが判断材料として有効です。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            ウインテック留学センター Q&amp;A
          </SectionHeading>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <p className="font-bold text-sm mb-2">Q. {item.question}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="あわせて読みたい">
            関連記事
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/agent-hitsuyou",
                title: "留学エージェントは本当に必要？",
                desc: "エージェントを使うメリット・デメリットをフラットに解説。",
              },
              {
                href: "/agent-erabi",
                title: "失敗しない留学エージェントの選び方",
                desc: "自分に合ったエージェントを選ぶ5つのポイント。",
              },
              {
                href: "/ryugaku-cost",
                title: "語学留学の費用はいくらかかる？",
                desc: "国別・期間別の費用目安を徹底まとめ。",
              },
              {
                href: "/best-3",
                title: "留学エージェントおすすめ比較",
                desc: "主要5社を徹底比較。あなたに合うエージェントが見つかります。",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-soft rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-sm mb-1 text-primary">{article.title}</p>
                <p className="text-xs text-muted leading-relaxed">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 他のエージェントとの比較 */}
      <section className="py-10 bg-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted mb-4">他のエージェントとも比較したい方はこちら</p>
          <Link
            href="/best-3#cost"
            className="inline-block text-sm font-bold text-primary underline hover:text-primary-dark"
          >
            留学エージェント5社の比較表を見る →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料相談から始めてみませんか？
          </h2>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            相談しただけで申し込む義務は一切ありません。
            オーダーメイドプランの詳細や費用感など、直接確認してみましょう。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 無料・申し込み不要
          </p>
          <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4B1EPN+DJM182+5P4G+5YZ75" variant="accent" external>
            ウインテックに無料相談する
          </CtaButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www12.a8.net/0.gif?a8mat=4B1EPN+DJM182+5P4G+5YZ75" width={1} height={1} alt="" style={{ border: "none" }} />
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ウインテック留学センター",
            description: "一人ひとりに合わせた完全オーダーメイドの留学プランを提供するエージェント。渡航前英語レッスン付き。",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "3.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: String(reviews.length),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
