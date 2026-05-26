import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "留学エージェントは必要？使わないとどうなるか正直に解説【2026年】",
  description:
    "留学エージェントは必要かどうか迷っていませんか？自分で手続きした場合の大変さ、エージェントを使うメリット・デメリット、使うべき人・使わなくていい人を正直に解説します。",
  alternates: {
    canonical: "https://abroadpass.jp/agent-hitsuyou",
  },
};

const faqs = [
  {
    q: "留学エージェントの利用は有料ですか？",
    a: "ほとんどのエージェントは利用者への手数料が無料です。エージェントの収益は提携する語学学校から支払われる紹介手数料のため、自分で直接申し込んでも費用は変わりません。",
  },
  {
    q: "複数のエージェントに相談してもいいですか？",
    a: "まったく問題ありません。むしろ2〜3社に相談して比較するのが賢い選び方です。対応の丁寧さや提案内容の違いが分かり、自分に合ったエージェントを見つけやすくなります。",
  },
  {
    q: "英語が全くできなくても相談できますか？",
    a: "はい。日本のエージェントはすべて日本語で相談できます。むしろ英語が不安な方こそ、手続き全般をサポートしてもらえるエージェントを使うメリットが大きいです。",
  },
];

export default function AgentHitsuyouPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 text-center">留学準備の基礎知識</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4 text-center">
            留学エージェントは必要？
            <br className="hidden sm:block" />
            使わないとどうなるか正直に解説
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center">
            「エージェントって絶対に使わないといけないの？」
            自分で手続きすれば費用を抑えられる？その疑問に正直にお答えします。
          </p>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
            <p className="font-bold text-primary mb-2">この記事の結論</p>
            <p className="text-sm leading-relaxed text-foreground/80">
              エージェントを使わなくても留学はできます。ただし、
              <strong>初めての海外留学・ワーホリなら使った方が圧倒的に楽で安全です。</strong>
              しかも多くのエージェントは<strong>利用者への手数料が無料</strong>のため、
              使わない理由はほとんどありません。
            </p>
          </div>
        </div>
      </section>

      {/* エージェントとは */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="まず基本から">
            留学エージェントは何をしてくれるのか
          </SectionHeading>
          <p className="text-sm leading-relaxed text-foreground/80 mb-6">
            留学エージェントは、留学に必要な手続きを一括でサポートしてくれる専門業者です。具体的にやってくれることはこのとおりです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "語学学校・留学先の選定と提案",
              "語学学校への入学申し込み代行",
              "ビザ（査証）の申請サポート",
              "ホームステイ・寮などの滞在先の手配",
              "渡航前のオリエンテーション",
              "現地到着後のトラブル対応（エージェントによる）",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-soft rounded-xl px-4 py-3 text-sm">
                <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-foreground/80 mt-6">
            これをすべて自分でやろうとすると、何が大変なのか。次のセクションで具体的に解説します。
          </p>
        </div>
      </section>

      {/* 使わないとどうなるか */}
      <section className="py-12 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="自分で手続きした場合の現実">
            エージェントを使わないと何が大変なのか
          </SectionHeading>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "学校選びに膨大な時間がかかる",
                body: "世界中の語学学校を自分で調べ、比較し、問い合わせをすべて英語でやり取りする必要があります。「どの学校が自分のレベルや目的に合っているか」「日本人比率はどのくらいか」「立地は安全か」といった情報は、ネットだけでは限界があります。エージェントなら目的・予算・英語力をヒアリングした上で、複数の候補を提案してくれます。",
              },
              {
                num: "02",
                title: "ビザの手続きが複雑",
                body: "ワーキングホリデービザや学生ビザは、国によって必要書類・申請方法・タイミングが異なります。書類の不備や申請ミスで渡航が遅れたり、最悪ビザが取得できないケースも実際に起きています。エージェントは申請のチェック・代行を行うため、こうしたミスを防ぎやすくなります。",
              },
              {
                num: "03",
                title: "現地トラブル時に一人で対応しなければならない",
                body: "体調を崩した、ホームステイ先と揉めた、学校でトラブルがあった——こういった場面で日本語で相談できる窓口がないのは、精神的に非常に厳しいです。ISS留学ライフやラストリゾートのように現地オフィスを持つエージェントなら、到着後のトラブル対応も任せられます。",
              },
              {
                num: "04",
                title: "現地の生活立ち上げが大変",
                body: "銀行口座の開設、携帯電話の契約、交通機関の使い方。これをすべて英語でこなす必要があります。エージェントによっては到着直後のこうした手続きもサポートしてくれるため、現地生活のスタートをスムーズに切ることができます。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-primary/20 flex-shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/80">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用の誤解 */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="ここが大きな誤解ポイント">
            「エージェントって費用がかかるんじゃ？」
          </SectionHeading>
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              <strong className="text-accent">ほとんどの留学エージェントは、利用者への手数料が無料です。</strong>
            </p>
            <p>
              エージェントの収益は、提携している語学学校から支払われる紹介手数料です。
              利用者がエージェントに直接お金を払う必要はありません。
            </p>
            <p>
              つまり、「エージェントを使わずに直接学校に申し込んでも、費用は変わらない」どころか、
              手続きをすべて自分でやる分、手間だけが増えるということです。
            </p>
            <p className="text-xs text-muted border-t border-border pt-3 mt-3">
              ※ 一部のエージェントは手数料を取るケースもあります。最初の相談時に確認しておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 使うべき人・使わなくていい人 */}
      <section className="py-12 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="自分はどちら？">
            エージェントを使うべき人・使わなくていい人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 使うべき人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "初めての海外留学・ワーホリである",
                  "英語に自信がなく、手続きのやり取りが不安",
                  "仕事・学業で忙しく手続きに時間をかけられない",
                  "現地トラブル時に日本語でサポートを受けたい",
                  "学校・滞在先の選択肢を複数比較して選びたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-soft border border-border rounded-2xl p-6">
              <p className="font-bold text-muted mb-4">👋 使わなくていい人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "留学経験が複数回あり手続きに慣れている",
                  "英語が堪能で現地とのやり取りが問題ない",
                  "特定の学校への入学が既に決まっている",
                  "費用よりも自由度を重視する",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-muted mt-0.5 flex-shrink-0">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted mt-4 leading-relaxed">
                初めての留学・ワーホリでこれらの条件が揃う人はまれです。迷っているなら、まず無料相談を受けてみるのが合理的な選択です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 中間CTA */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">「使ってみよう」と思ったら、まず比較から</p>
          <p className="text-sm text-muted mb-6">
            エージェントによって得意な留学スタイル・費用・サポート体制は大きく異なります。
            無料相談の前に、5社の特徴を比較しておきましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめ5社を比較する →
          </CtaButton>
        </div>
      </section>

      {/* どのエージェントを選ぶか */}
      <section className="py-12 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="目的別に選ぶ">
            どのエージェントを選べばいい？
          </SectionHeading>
          <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
            エージェントによって得意分野が異なります。自分の目的に近いものから詳しく見てみましょう。
          </p>
          <div className="space-y-3">
            {[
              { label: "費用を抑えたい・気軽に相談したい", name: "スマ留", href: "/smaru", color: "border-accent" },
              { label: "現地サポートを重視・信頼感で選びたい", name: "ISS留学ライフ", href: "/iss", color: "border-primary" },
              { label: "ワーホリ専門・段階的に情報収集したい", name: "ラストリゾート", href: "/lastresort", color: "border-green-500" },
              { label: "正規留学・長期計画を立てたい", name: "留学ジャーナル", href: "/ryugakujournal", color: "border-purple-500" },
              { label: "オーダーメイドプランで進めたい", name: "ウインテック留学センター", href: "/wintech", color: "border-rose-500" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between bg-white rounded-xl border-l-4 ${item.color} px-5 py-4 hover:shadow-md transition-shadow group`}
              >
                <div>
                  <p className="text-xs text-muted mb-0.5">{item.label}</p>
                  <p className="font-bold group-hover:text-primary transition-colors">{item.name}</p>
                </div>
                <span className="text-primary text-sm">口コミを見る →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/best-3#cost"
              className="text-sm font-bold text-primary underline hover:text-primary-dark"
            >
              5社を一覧で比較する →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある疑問に回答">
            よくある質問
          </SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-soft rounded-xl border border-border group"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-sm flex items-center justify-between list-none">
                  <span>Q. {faq.q}</span>
                  <span className="text-muted ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-foreground/80 leading-relaxed">
                  A. {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-12 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            まとめ：まずは無料相談だけでもしてみよう
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              留学エージェントは、使うことで手続きの手間とリスクを大幅に削減できます。
              しかも多くは<strong>利用者への手数料が無料</strong>なので、使わない理由はほとんどありません。
            </p>
            <p>
              「まだ留学するか決めていない」という段階でも、無料相談に申し込む義務は一切なく、
              情報収集のためだけに使っても全く問題ありません。
            </p>
            <p>
              <strong>迷っている時間が一番もったいない。</strong>
              気になるエージェントがあれば、まず話を聞いてみるのが近道です。
            </p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-bold text-foreground mb-5">あわせて読みたい</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/agent-muryou", title: "留学エージェントはなぜ無料？仕組みをわかりやすく解説", desc: "「無料なのに大丈夫？」という疑問に答えます。収益モデルと注意点を正直に解説。" },
              { href: "/agent-erabi", title: "留学エージェントの選び方3つのポイント", desc: "失敗しないために確認すべきポイントと目的別おすすめを紹介。" },
              { href: "/ryugaku-towa", title: "語学留学とは？仕組み・期間・費用を徹底解説", desc: "語学留学の基本をわかりやすくまとめました。" },
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーキングホリデーの基本情報を外務省情報をもとに正確に解説。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30">
                <p className="font-bold text-sm text-primary mb-1">{a.title}</p>
                <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            どのエージェントが自分に合う？
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            費用・サポート・口コミで5社を徹底比較。
            気になるエージェントの無料相談を予約してみましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめ5社を今すぐ比較する →
          </CtaButton>
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
