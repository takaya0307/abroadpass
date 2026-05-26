import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "フィリピン語学留学はなぜ安いのですか？",
    answer:
      "フィリピンの物価が欧米と比べて低いため、語学学校の授業料や生活費を抑えられます。また、マンツーマン授業が多く含まれるプランが多いにも関わらず、欧米留学より費用が安い点が特徴です。",
  },
  {
    question: "フィリピン留学に向いている人はどんな人ですか？",
    answer:
      "費用を抑えながら短期間で集中的に英語を学びたい方に向いています。マンツーマン授業が多いため、英語初心者でも授業についていきやすく、英語力ゼロから挑戦したい方にも選ばれています。",
  },
  {
    question: "フィリピン英語はネイティブではないのでは？",
    answer:
      "フィリピンは英語が公用語のひとつであり、日常的に英語が使われています。発音が比較的聞き取りやすいという特徴もあり、英語学習の入門として適しています。欧米留学と比較する場合は、目的に合わせて選ぶことが重要です。",
  },
  {
    question: "セブ島とマニラ、どちらがいいですか？",
    answer:
      "セブ島は語学留学向けの学校が多く、リゾートエリアに近い環境でのびのびと学べます。マニラは大都市で生活費が少し高めですが、都市生活を楽しみながら留学したい方に向いています。初めての方にはセブ島が選ばれることが多いです。",
  },
  {
    question: "エージェントを使った方がいいですか？",
    answer:
      "特に初めての方には、学校選び・ビザ・渡航手続きをまとめてサポートしてもらえる留学エージェントの利用をおすすめします。基本的なサービスは無料で利用できるエージェントがほとんどです。",
  },
];

export const metadata: Metadata = {
  title: "フィリピン語学留学の費用・特徴まとめ【2026年最新】セブ島・マニラを比較",
  description:
    "フィリピン語学留学の費用相場・特徴・メリット・デメリットを解説。1ヶ月・3ヶ月の費用目安、セブ島とマニラの違い、向いている人・向いていない人もまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-philippines",
  },
};

export default function RyugakuPhilippinesPage() {
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
            フィリピン語学留学の費用・特徴まとめ<br className="hidden md:block" />
            セブ島・マニラを徹底解説
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            「費用を抑えて英語を集中的に学びたい」という方に人気のフィリピン留学。
            費用の目安・特徴・向いている人・エージェントの選び方まで正直にまとめました。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ フィリピン留学の費用目安（1ヶ月・3ヶ月）</li>
              <li>✓ 欧米留学との違い・メリット・デメリット</li>
              <li>✓ セブ島 vs マニラの特徴比較</li>
              <li>✓ 向いている人・向いていない人</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="期間別の費用目安">
            フィリピン語学留学の費用はいくら？
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              フィリピン語学留学の費用は、欧米留学と比べて大幅に抑えられる点が最大の特徴です。
              費用の内訳は主に「語学学校の授業料」「寮（ドミトリー）費」「食費」「渡航費」です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { period: "1ヶ月", cost: "約26〜46万円", note: "短期集中に人気" },
                { period: "3ヶ月", cost: "約69〜161万円", note: "英語力を伸ばしたい方に" },
                { period: "6ヶ月以上", cost: "要問い合わせ", note: "長期プランはエージェントに相談" },
              ].map((item) => (
                <div key={item.period} className="bg-white rounded-2xl p-4 text-center">
                  <p className="text-xs text-muted mb-1">{item.period}</p>
                  <p className="font-black text-lg text-primary mb-1">{item.cost}</p>
                  <p className="text-xs text-muted">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-2">
              ※ 費用は学校・プラン・都市・時期によって異なります。渡航費・保険料は含まない目安です。詳細はエージェントへの無料相談でご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="欧米留学との違い">
            フィリピン語学留学の特徴
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "欧米留学と比べて費用が大幅に安い",
                  "マンツーマン授業が多く、英語初心者でも学びやすい",
                  "英語が公用語のひとつであり、日常的に英語環境がある",
                  "発音が比較的聞き取りやすく、英語学習の入門に適している",
                  "1ヶ月〜の短期留学から対応しており、社会人も参加しやすい",
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
                  "ネイティブ英語環境（アメリカ・イギリス英語）とは異なる",
                  "治安に注意が必要なエリアがある（学校・滞在先の選択が重要）",
                  "学校によって授業の質にばらつきがある",
                  "長期滞在には欧米留学の方が適している場合もある",
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

      {/* セブ vs マニラ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="どちらを選ぶ？">
            セブ島 vs マニラの違い
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                city: "🏝 セブ島",
                tag: "語学留学の定番エリア",
                points: [
                  "語学学校が多く留学生向けの環境が整っている",
                  "リゾートエリアに近く、休日も充実しやすい",
                  "マニラと比べて費用を抑えやすい傾向",
                  "初めてのフィリピン留学に選ばれることが多い",
                ],
              },
              {
                city: "🏙 マニラ",
                tag: "都市型留学を求める方に",
                points: [
                  "フィリピンの首都で都市生活を楽しめる",
                  "交通インフラが整っており移動しやすい",
                  "セブ島と比べて生活費がやや高め",
                  "ビジネス英語を学びたい方にも向いている",
                ],
              },
            ].map((item) => (
              <div key={item.city} className="bg-soft rounded-2xl p-6">
                <p className="font-black text-lg mb-1">{item.city}</p>
                <p className="text-xs text-primary font-bold mb-4">{item.tag}</p>
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
        </div>
      </section>

      {/* 向いている人 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="こんな人におすすめ">
            フィリピン留学が向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "費用を抑えながら集中的に英語を学びたい",
                  "英語初心者でマンツーマン授業を求めている",
                  "1〜3ヶ月の短期留学を検討している",
                  "欧米留学前の準備として英語力を高めたい",
                  "社会人で長期休暇が取りにくい",
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
                  "ネイティブ英語（アメリカ・イギリス）環境にこだわりたい",
                  "長期滞在で英語を完全習得したい",
                  "治安面に強い不安がある",
                  "就職・キャリアアップ目的で留学を考えている",
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
            フィリピン留学におすすめのエージェント
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
          <p className="text-sm text-muted mb-3">費用の詳細や学校選びはエージェントへの無料相談で確認できます</p>
          <CtaButton href="/best-3" variant="primary">
            おすすめエージェント5社を比較する
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            フィリピン語学留学 Q&amp;A
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
              { href: "/ryugaku-towa", title: "語学留学とは？仕組み・期間・費用を解説", desc: "語学留学の基礎知識をまとめて解説。" },
              { href: "/agent-erabi", title: "失敗しない留学エージェントの選び方", desc: "自分に合ったエージェントを選ぶポイント。" },
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
            費用・学校選び・渡航手続きなど、気になることを無料で相談できます。
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
