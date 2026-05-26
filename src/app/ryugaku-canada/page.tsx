import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "カナダ語学留学の費用はどれくらいかかりますか？",
    answer:
      "渡航費を含めた1ヶ月の目安は約37〜83万円です。生活費は月1,400〜2,000カナダドル（約15〜22万円）が目安ですが、都市・学校・プランによって大きく異なります。詳細はエージェントへの無料相談でご確認ください。",
  },
  {
    question: "バンクーバーとトロント、どちらがいいですか？",
    answer:
      "バンクーバーは冬でも比較的温暖で、自然環境が豊かです。トロントは東部の大都市で、冬は厳しい寒さになります。現在は両都市で物価差はほぼなくなっています。語学学校の選択肢はどちらも豊富なため、気候や生活スタイルの好みで選ぶとよいでしょう。",
  },
  {
    question: "カナダ英語は聞き取りやすいですか？",
    answer:
      "はい。カナダ英語はアクセントや癖が少なく、ゆっくり話す方が多いため、英語学習者にとって聞き取りやすいと言われています。英語をゼロから学びたい方にも取り組みやすい環境です。",
  },
  {
    question: "カナダ語学留学に向いている人はどんな人ですか？",
    answer:
      "本格的な英語圏で英語力を高めたい方、多文化な環境で視野を広げたい方、治安が良くて安心感のある留学先を求めている方に向いています。費用面ではオーストラリアと同程度かやや高めになる場合があります。",
  },
  {
    question: "エージェントを使った方がいいですか？",
    answer:
      "特に初めての方には、学校選び・ビザ・渡航手続きをサポートしてもらえる留学エージェントの利用をおすすめします。基本的なサービスは無料で利用できます。複数社に相談して比較するとより安心です。",
  },
];

export const metadata: Metadata = {
  title: "カナダ語学留学の費用・特徴まとめ【2026年最新】バンクーバー・トロント比較",
  description:
    "カナダ語学留学の費用相場・特徴・メリット・デメリットを解説。1ヶ月の費用目安、バンクーバーとトロントの違い、向いている人・向いていない人もまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-canada",
  },
};

export default function RyugakuCanadaPage() {
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
            カナダ語学留学の費用・特徴まとめ<br className="hidden md:block" />
            バンクーバー・トロントを徹底解説
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            治安の良さと聞き取りやすい英語環境で人気のカナダ。
            費用の目安・主要都市の特徴・向いている人まで正直にまとめました。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ 費用目安（1ヶ月・渡航費込み）</li>
              <li>✓ カナダ留学のメリット・デメリット</li>
              <li>✓ バンクーバー vs トロントの違い</li>
              <li>✓ 向いている人・向いていない人</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="期間別の費用目安">
            カナダ語学留学の費用はいくら？
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              カナダ語学留学の費用は、語学学校の授業料・滞在費・食費・渡航費などで構成されます。
              オーストラリアと同程度かやや高めになるケースが多く、円安の影響も踏まえた資金計画が重要です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { period: "1ヶ月", cost: "約37〜83万円", note: "渡航費込みの目安" },
                { period: "生活費（月）", cost: "約15〜22万円", note: "1,400〜2,000CAD" },
                { period: "3ヶ月以上", cost: "要問い合わせ", note: "長期はエージェントに相談" },
              ].map((item) => (
                <div key={item.period} className="bg-white rounded-2xl p-4 text-center">
                  <p className="text-xs text-muted mb-1">{item.period}</p>
                  <p className="font-black text-base text-primary mb-1">{item.cost}</p>
                  <p className="text-xs text-muted">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-2">
              ※ 都市・学校・プランによって大きく異なります。為替レートにより変動します。詳細はエージェントへの無料相談でご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="他の国と比べて">
            カナダ語学留学の特徴
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "アクセントが少なく聞き取りやすい英語環境",
                  "治安が良く、日本人にとって安心感がある",
                  "多文化国家で様々な国籍の人と交流できる",
                  "バンクーバー・トロントなど都市の選択肢が豊富",
                  "自然環境が豊かで、都市と自然どちらも楽しめる",
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
                  "フィリピンと比べると費用が高い",
                  "円安の影響を受けやすく、費用が増加傾向",
                  "冬のトロントなど寒さが厳しい地域がある",
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
            バンクーバー vs トロントの違い
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                city: "🌊 バンクーバー",
                tags: ["温暖な気候", "自然が豊か", "西海岸"],
                points: [
                  "冬でも気温がマイナスになることが少なく比較的温暖",
                  "山と海に囲まれた自然豊かな環境",
                  "語学学校の選択肢が多く、留学生に人気",
                  "アジア系コミュニティが多い多文化都市",
                ],
              },
              {
                city: "🏙 トロント",
                tags: ["大都市", "カナダ最大", "冬は厳しい"],
                points: [
                  "カナダ最大の都市で、ビジネス・文化の中心地",
                  "冬は平均気温がマイナスになるほど厳しい寒さ",
                  "都市としての規模が大きく、仕事や生活の選択肢が豊富",
                  "現在はバンクーバーと物価差はほぼなし",
                ],
              },
            ].map((item) => (
              <div key={item.city} className="bg-soft rounded-2xl p-6">
                <p className="font-bold text-lg mb-2">{item.city}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{tag}</span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">・</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-soft rounded-2xl p-4 text-sm text-foreground/80">
            <p className="font-bold mb-1">💡 その他の都市も選択肢に</p>
            <p>カルガリー・モントリオール・ビクトリアなど、都市によって雰囲気や費用が異なります。「どの都市が自分に合うか」はエージェントへの相談で整理するのがおすすめです。</p>
          </div>
        </div>
      </section>

      {/* 向いている人 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="こんな人におすすめ">
            カナダ留学が向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "聞き取りやすい英語環境で英語力を伸ばしたい",
                  "治安の良い安心感のある環境を求めている",
                  "多文化な環境でさまざまな国の人と交流したい",
                  "都市と自然の両方を楽しみながら留学したい",
                  "本格的な英語圏で中〜長期滞在を考えている",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">●</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">👎 慎重に考えた方がいい人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "できるだけ費用を抑えたい（→ フィリピンの方が安い）",
                  "厳しい冬の寒さが苦手（特にトロント）",
                  "短期1〜2ヶ月で費用対効果を最大化したい",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">●</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="目的別に選ぼう">
            カナダ留学におすすめのエージェント
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
          <p className="text-sm text-muted mb-3">費用の詳細や都市・学校選びはエージェントへの無料相談で確認できます</p>
          <CtaButton href="/best-3" variant="primary">
            おすすめエージェント5社を比較する
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            カナダ語学留学 Q&amp;A
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
              { href: "/ryugaku-australia", title: "オーストラリア語学留学の費用・特徴まとめ", desc: "カナダと並ぶ人気留学先。都市比較やワーホリとの違いも解説。" },
              { href: "/ryugaku-philippines", title: "フィリピン語学留学の費用・特徴まとめ", desc: "費用を抑えたい方に人気。カナダとの違いも確認できます。" },
              { href: "/ryugaku-cost", title: "語学留学の費用はいくらかかる？国別まとめ", desc: "5カ国の費用を一覧で比較。" },
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
            都市選び・費用・渡航スケジュールなど、気になることを無料で相談できます。
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
