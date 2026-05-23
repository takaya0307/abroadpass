import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "ワーホリは就職に不利になりますか？",
    answer:
      "企業によって評価は異なります。「1年間の空白」とネガティブに見る企業がある一方、語学力・自立心・行動力を評価する企業も増えています。帰国後にワーホリ経験を具体的に語れるよう準備しておくことが重要です。",
  },
  {
    question: "英語力がゼロでもワーホリはできますか？",
    answer:
      "渡航自体は可能ですが、仕事探しや日常生活で苦労する場面が増えます。渡航前に最低限の日常会話を身につけておくことで、現地での体験の幅が広がります。",
  },
  {
    question: "ワーホリで後悔した人はどんな理由で後悔していますか？",
    answer:
      "よく挙げられる理由は「英語力が思ったより伸びなかった」「目的が曖昧なまま行ってしまった」「帰国後の就活が思ったより大変だった」などです。いずれも渡航前の準備と目的設定で対策できるものがほとんどです。",
  },
  {
    question: "ワーホリに向いていない人はどんな人ですか？",
    answer:
      "「なんとなく行けばどうにかなる」という考えで行く方は後悔しやすい傾向があります。目的が曖昧、資金準備が不十分、帰国後のプランが全くない、という状態での渡航はリスクが高いです。",
  },
  {
    question: "ワーホリに行くか迷っています。どうすればいいですか？",
    answer:
      "「なぜ行きたいか」「帰国後にどうなっていたいか」を言葉にしてみてください。それが明確になれば、準備の方向性も見えてきます。無料で相談できる留学エージェントに話を聞いてもらうことも、判断材料を増やすのに有効です。",
  },
];

const demerits = [
  {
    title: "① 帰国後のキャリアに影響する場合がある",
    body: "ワーホリ中の期間は職歴上「空白」となるため、帰国後の就活でマイナスに見られるケースがあります。特に専門職・昇進を目指す方にとっては影響が出やすいとされています。ただし、語学力・自立心・行動力を評価する企業も存在しており、どう評価されるかは企業・業界・個人の経験によって異なります。",
    counter: "渡航前から「帰国後に何をするか」を明確にしておき、ワーホリの経験を具体的に語れる準備をしておくことが大切です。",
  },
  {
    title: "② 費用が思ったよりかかる",
    body: "渡航費・生活費・語学学校費用などを合わせると、渡航前後の費用は国や期間によって大きく異なります。十分な資金なしに渡航すると、生活費の工面に追われてしまい、本来の目的に集中できなくなることがあります。",
    counter: "国別の費用目安については「ワーホリにかかる費用」の記事で確認し、余裕を持った資金計画を立てましょう。",
  },
  {
    title: "③ 英語力が思ったより伸びないことがある",
    body: "海外にいれば自動的に英語力が上がるわけではありません。日本人コミュニティに入りすぎて日本語ばかり使う環境になってしまったり、仕事が英語を使わない職場になってしまうと、英語力の伸びが限られることがあります。",
    counter: "意識的に英語を使う環境に身を置く、語学学校に通う期間を設けるなど、英語漬けになる工夫が必要です。",
  },
  {
    title: "④ 目的が曖昧なまま行くと後悔しやすい",
    body: "「なんとなく海外で働いてみたい」という気持ちだけで渡航すると、現地での生活が思ったほど充実せずに終わってしまうことがあります。「なぜワーホリをするのか」「帰国後にどうなっていたいか」が明確でないと、時間とお金だけが過ぎていく結果になりかねません。",
    counter: "渡航前に「ワーホリで何を得たいか」を具体的に言語化しておきましょう。英語力・貯金・資格・人脈など目標が明確なほど、現地での行動が変わります。",
  },
];

export const metadata: Metadata = {
  title: "ワーホリはやめた方がいい？デメリットと後悔しないための判断基準【2026年】",
  description:
    "ワーキングホリデーは本当にやめた方がいいのか。帰国後のキャリア・費用・英語力など実際のデメリットを正直に解説。後悔しないための準備と判断基準もまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/waho-demerits",
  },
};

export default function WahoDeMeritsPage() {
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
            ワーホリはやめた方がいい？<br className="hidden md:block" />
            デメリットと後悔しないための判断基準
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            「ワーホリはやめとけ」という声をよく聞きます。
            実際にどんなリスクがあるのか、後悔した人はどんな理由で後悔しているのかを
            正直にまとめました。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80 leading-relaxed">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ ワーホリのデメリット4つ（正直に解説）</li>
              <li>✓ 向いている人・向いていない人</li>
              <li>✓ 後悔しないための判断チェックリスト</li>
            </ul>
          </div>
        </div>
      </section>

      {/* デメリット */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="正直に解説">
            ワーホリの主なデメリット4つ
          </SectionHeading>
          <div className="space-y-5">
            {demerits.map((item) => (
              <div key={item.title} className="bg-soft rounded-2xl p-6 text-sm leading-relaxed">
                <p className="font-bold mb-3">{item.title}</p>
                <p className="text-foreground/80 mb-4">{item.body}</p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3">
                  <p className="font-bold text-primary text-xs mb-1">💡 対策</p>
                  <p className="text-xs text-foreground/80">{item.counter}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 向いている・向いていない */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="自分に当てはめてみよう">
            向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 ワーホリが向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "「なぜ行くか」が自分の言葉で説明できる",
                  "帰国後のざっくりとしたプランがある",
                  "ある程度の資金を準備できている",
                  "語学力向上・異文化体験・自立心を求めている",
                  "多少の不便や孤独を乗り越えるメンタルがある",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">●</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">👎 慎重に考えた方がいい人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "「なんとなく行けばなんとかなる」と思っている",
                  "帰国後のキャリアや生活プランが全くない",
                  "資金がほとんどない状態で渡航しようとしている",
                  "英語が伸びることへの具体的なイメージがない",
                  "現地での不便・孤独に対して強い不安がある",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">●</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* チェックリスト */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に考えておきたいこと">
            後悔しないための判断チェックリスト
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 space-y-3 text-sm">
            {[
              "なぜワーホリに行くのか、自分の言葉で説明できる",
              "帰国後にどうなっていたいか、ざっくりでもイメージがある",
              "生活費・渡航費など必要な資金をある程度準備できている",
              "英語力を伸ばすための具体的な行動（語学学校・現地での練習）を考えている",
              "日本人コミュニティだけに頼らない環境を意識する気持ちがある",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <span className="text-primary font-bold text-sm flex-shrink-0">☑</span>
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-4 leading-relaxed">
            上記の項目をある程度クリアできているなら、ワーホリへの準備ができている状態と言えます。
            まだ不安な点がある場合は、エージェントへの無料相談で疑問を整理するのも一つの方法です。
          </p>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            「やめた方がいい」は人による
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ワーホリを「やめた方がいい」と言われる理由のほとんどは、
              <strong>目的が曖昧なまま渡航する・事前準備が不足している</strong>ことに起因しています。
              ワーホリ自体が悪いのではなく、準備と目的設定の差が「後悔する人」と「良かったと思う人」を分けています。
            </p>
            <p>
              「行って良かった」と感じる人の多くは、渡航前から<strong>なぜ行くのか・帰国後にどうするか</strong>を
              考えていた方です。
              反対に「行っても意味がなかった」と感じる人は、行き当たりばったりで過ごしてしまったケースが多いようです。
            </p>
            <p>
              迷っている方は、まずエージェントへの無料相談から始めてみてください。
              費用・国選び・準備スケジュールなど、具体的な情報を整理することで判断しやすくなります。
            </p>
          </div>
          <div className="mt-6 text-center">
            <CtaButton href="/best-3" variant="primary">
              おすすめエージェント5社を比較する
            </CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            ワーホリのデメリット Q&amp;A
          </SectionHeading>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="bg-soft rounded-2xl p-6">
                <p className="font-bold text-sm mb-2">Q. {item.question}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="あわせて読みたい">
            関連記事
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーホリの基礎をまるごと解説。" },
              { href: "/waho-cost", title: "ワーホリにかかる費用はいくら？国別まとめ", desc: "渡航前の資金計画に役立ててください。" },
              { href: "/career", title: "ワーホリ後の就職は不利？帰国後のキャリアをリアルに解説", desc: "帰国後の就活のリアルをまとめました。" },
              { href: "/best-3", title: "留学エージェントおすすめ比較", desc: "主要5社を徹底比較。無料相談から始められます。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-white rounded-2xl p-5 hover:shadow-md transition-shadow">
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
            行くべきか迷っている方こそ、エージェントへの無料相談で情報を整理してみましょう。
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
