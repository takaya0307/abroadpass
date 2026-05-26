import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "オーストラリア語学留学の費用はどれくらいかかりますか？",
    answer:
      "1ヶ月で約65万円、3ヶ月で約140万円、6ヶ月で約200万円、1年で約300万円が目安です。シドニーなど大都市は生活費が高く、ケアンズやパースなど郊外都市では費用を抑えられる傾向があります。詳細はエージェントへの無料相談でご確認ください。",
  },
  {
    question: "語学留学とワーキングホリデーの違いは何ですか？",
    answer:
      "語学留学は主に英語を学ぶことを目的とした滞在で、就労の制限があります。ワーキングホリデーは現地で働きながら生活することが目的で、語学学校に通うことも可能です。費用を現地で稼ぎながら学びたい方にはワーホリが、純粋に英語学習に集中したい方には語学留学が向いています。",
  },
  {
    question: "シドニーとメルボルン、どちらがいいですか？",
    answer:
      "シドニーは観光スポットが多く活気があり、語学学校の選択肢も豊富です。メルボルンはカフェ文化・多文化都市として知られ、芸術・音楽シーンが充実しています。どちらも生活費は高めですが、留学生に人気の都市です。費用を抑えたい場合はケアンズやゴールドコーストも検討できます。",
  },
  {
    question: "オーストラリア英語は聞き取りにくいですか？",
    answer:
      "オーストラリア英語には独特のアクセントがありますが、語学学校では標準的な英語が教えられることが多く、授業での学習に支障はありません。現地生活に慣れるにつれて自然と聞き取れるようになります。",
  },
  {
    question: "エージェントを使った方がいいですか？",
    answer:
      "特に初めての方には、学校選び・ビザ・渡航手続きをサポートしてもらえる留学エージェントの利用をおすすめします。基本的なサービスは無料で利用できます。複数社に相談して比較するとより安心です。",
  },
];

export const metadata: Metadata = {
  title: "オーストラリア語学留学の費用・特徴まとめ【2026年最新】シドニー・メルボルン比較",
  description:
    "オーストラリア語学留学の費用相場・特徴・メリット・デメリットを解説。1ヶ月・3ヶ月・1年の費用目安、シドニーとメルボルンの違い、ワーホリとの違いもまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-australia",
  },
};

export default function RyugakuAustraliaPage() {
  return (
    <>
      <div className="bg-accent/10 text-center py-2 text-xs text-muted">
        【PR】当ページにはアフィリエイト広告が含まれています
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 text-center">2026年最新版</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4 text-center">
            オーストラリア語学留学の費用・特徴まとめ<br className="hidden md:block" />
            シドニー・メルボルンを徹底解説
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            ワーホリでも人気のオーストラリアは、語学留学先としても定番の国です。
            費用の目安・主要都市の特徴・向いている人まで正直にまとめました。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ 費用目安（1ヶ月・3ヶ月・1年）</li>
              <li>✓ メリット・デメリット</li>
              <li>✓ シドニー vs メルボルンの違い</li>
              <li>✓ ワーホリとの違い・組み合わせ方</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="期間別の費用目安">
            オーストラリア語学留学の費用はいくら？
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              オーストラリアの語学留学費用は、語学学校の授業料・滞在費（ホームステイまたは学生寮）・食費・渡航費などで構成されます。
              近年は円安・物価高の影響により費用が上昇傾向にあります。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {[
                { period: "1ヶ月", cost: "約65万円" },
                { period: "3ヶ月", cost: "約140万円" },
                { period: "6ヶ月", cost: "約200万円" },
                { period: "1年", cost: "約300万円" },
              ].map((item) => (
                <div key={item.period} className="bg-white rounded-2xl p-4 text-center">
                  <p className="text-xs text-muted mb-1">{item.period}</p>
                  <p className="font-black text-base text-primary">{item.cost}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-2">
              ※ 都市・学校・プランによって大きく異なります。渡航費・保険料は含まない目安です。詳細はエージェントへの無料相談でご確認ください。
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-foreground/70">
              💡 シドニーなど大都市は生活費が高め。ケアンズやパースなど郊外都市を選ぶと、同じ期間でも費用を大幅に抑えられる場合があります。
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="他の国と比べて">
            オーストラリア語学留学の特徴
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "英語圏で本格的な英語環境に浸れる",
                  "語学学校の選択肢が多く、目的に合わせて選べる",
                  "治安が比較的良く、日本人に安心感がある",
                  "ワーキングホリデービザと組み合わせることで費用の一部を現地で稼ぐことも可能",
                  "都市・郊外・リゾートなど滞在スタイルの選択肢が広い",
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
                  "円安・物価高の影響で費用が上昇傾向にある",
                  "フィリピンなど東南アジアと比べると費用が高い",
                  "オーストラリア英語の独特のアクセントに慣れるまで時間がかかることがある",
                  "日本人コミュニティが多く、意識しないと日本語環境になりがち",
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

      {/* 都市比較 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="どの都市を選ぶ？">
            主要都市の特徴まとめ
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                city: "🦘 シドニー",
                tags: ["語学学校が多い", "活気あり", "生活費高め"],
                desc: "オーストラリア最大の都市。語学学校の選択肢が豊富で、観光スポットも充実。生活費は高め。",
              },
              {
                city: "☕ メルボルン",
                tags: ["多文化都市", "カフェ文化", "生活費高め"],
                desc: "カフェ・アート・音楽が盛んな都市。多文化で国際色豊か。住みやすいという声が多い。",
              },
              {
                city: "🌊 ゴールドコースト",
                tags: ["リゾート感", "初心者向け", "やや費用抑えめ"],
                desc: "ビーチリゾートに近い環境で、のびのびとした留学生活を送れる。日本人に人気。",
              },
              {
                city: "🌿 ケアンズ・パース",
                tags: ["費用を抑えやすい", "自然豊か", "コンパクト"],
                desc: "大都市と比べて生活費を抑えやすい。自然が豊かで、ゆったりとした環境で学びたい方に向いている。",
              },
            ].map((item) => (
              <div key={item.city} className="bg-soft rounded-2xl p-5">
                <p className="font-bold text-base mb-2">{item.city}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ワーホリとの違い */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="どちらを選ぶ？">
            語学留学 vs ワーキングホリデー
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "語学留学",
                icon: "📚",
                color: "bg-primary/5 border-primary/20",
                points: [
                  "英語学習に集中できる",
                  "就労制限があるため収入は得にくい",
                  "短期（1ヶ月〜）から参加しやすい",
                  "年齢制限なし",
                ],
              },
              {
                label: "ワーキングホリデー",
                icon: "💼",
                color: "bg-accent/10 border-accent/20",
                points: [
                  "現地で働いて費用の一部を稼げる",
                  "最長1年（条件次第でセカンドも）",
                  "語学学校にも通える（条件あり）",
                  "18〜30歳（申請時点）",
                ],
              },
            ].map((item) => (
              <div key={item.label} className={`border rounded-2xl p-6 ${item.color}`}>
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-bold mb-3">{item.label}</p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0">・</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-4 leading-relaxed">
            語学学校で英語力を高めてからワーホリに切り替えるという組み合わせ方もあります。
            詳しくはエージェントへの無料相談でプランを相談してみましょう。
          </p>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="目的別に選ぼう">
            オーストラリア留学におすすめのエージェント
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link href="/smaru" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">💰 コスパ重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">スマ留</p>
              <p className="text-xs text-muted leading-relaxed">業界最安値保証。同じ学校・期間なら他社より高ければ差額返金。費用を抑えたい方に。</p>
            </Link>
            <Link href="/iss" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🛡️ サポート重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">ISS留学ライフ</p>
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。渡航前から現地まで手厚いサポートで初めての留学も安心。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 実績・社会人向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。社会人留学や長期プランに強く、豊富な学校ラインナップが魅力。</p>
            </Link>
          </div>
          <p className="text-center text-sm text-muted">
            全社を比較したい方は → <Link href="/best-3" className="text-primary font-bold hover:underline">おすすめエージェント比較ページ</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm text-muted mb-3">費用の詳細や学校・プラン選びはエージェントへの無料相談で確認できます</p>
          <CtaButton href="/best-3" variant="primary">
            おすすめエージェント5社を比較する
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            オーストラリア語学留学 Q&amp;A
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
              { href: "/ryugaku-cost", title: "語学留学の費用はいくらかかる？国別まとめ", desc: "フィリピン・カナダなど5カ国の費用を比較。" },
              { href: "/waho-country", title: "ワーキングホリデーおすすめ国ランキング", desc: "英語圏5カ国のワーホリを徹底比較。" },
              { href: "/ryugaku-philippines", title: "フィリピン語学留学の費用・特徴まとめ", desc: "費用を抑えたい方に人気のフィリピン留学を解説。" },
              { href: "/best-3", title: "留学エージェントおすすめ比較", desc: "主要5社を徹底比較。無料相談から始められます。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-soft rounded-2xl p-5 hover:shadow-md transition-shadow">
                <p className="font-bold text-sm mb-1 text-primary">{a.title}</p>
                <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料相談から始めてみませんか？</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            費用・都市選び・渡航スケジュールなど、気になることを無料で相談できます。
          </p>
          <CtaButton href="/best-3" variant="accent">おすすめエージェントを見る</CtaButton>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
