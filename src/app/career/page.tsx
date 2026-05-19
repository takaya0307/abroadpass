import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "ワーホリ・留学後の就職は不利？帰国後のキャリアをリアルに解説 | Abroad Pass",
  description:
    "ワーホリ後の就職は不利？実際にカナダ・オーストラリアに各1年渡航した筆者の体験をもとに、帰国後のキャリアへの影響・就活での伝え方・活かせる業界を解説します。",
  openGraph: {
    title: "ワーホリ・留学後の就職は不利？帰国後のキャリアをリアルに解説",
    description:
      "カナダ・オーストラリアに各1年渡航した筆者の実体験をもとに、ワーホリ後のキャリアと就職活動のリアルを解説。",
  },
};

const faqItems = [
  {
    q: "ワーホリ中の空白期間は職歴に書くべきですか？",
    a: "履歴書の職歴欄には「ワーキングホリデー（カナダ・オーストラリアなど）」と明記するのが基本です。空白のままにすると説明を求められるので、むしろ積極的に記載した方が面接で話しやすくなります。",
  },
  {
    q: "ワーホリ後は転職エージェントを使った方がいいですか？",
    a: "帰国後の就職活動では、ワーホリ経験者の転職支援に慣れたエージェントを使うのがおすすめです。ワーホリ前の留学エージェントとは別に、帰国後は転職エージェントを活用する流れが一般的です。",
  },
  {
    q: "年齢的に就職が不利になりませんか？",
    a: "20代であれば基本的に不利にはなりません。30代の場合は「ワーホリで得た経験を具体的にどう仕事に活かせるか」の説明がより重要になります。ただし外資系・グローバル企業では年齢よりスキルや経験を重視する傾向が強いです。",
  },
];

const industries = [
  { icon: "🌐", name: "外資系企業", desc: "メーカー・IT・金融など。英語力が直接評価される。" },
  { icon: "✈️", name: "航空・旅行・ホテル", desc: "海外経験・語学力・接客スキルが活かせる業界。" },
  { icon: "📦", name: "貿易・商社", desc: "海外取引先とのやりとりで英語力が武器になる。" },
  { icon: "💻", name: "IT・エンジニア系", desc: "グローバルチームのある企業では海外経験が強みに。" },
  { icon: "📚", name: "英語教師・通訳・翻訳", desc: "現地での実践的な英語力を直接活かせる職種。" },
  { icon: "🏢", name: "一般企業のグローバル部門", desc: "海外展開を進める国内企業でも需要が高まっている。" },
];

export default function CareerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">キャリア・就職ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ワーホリ・留学後の就職は不利？
            <br />
            <span className="text-primary">帰国後のキャリアをリアルに解説</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「ワーホリに行ったら就職できなくなるんじゃないか」——これは、ワーホリを考えている多くの人が抱える不安です。
            実際に筆者はカナダとオーストラリアに各1年、計2年のワーホリ経験があります。
            帰国後の就職活動は思ったよりスムーズで、前職では外資系企業で英語を活かすことができました。
            この記事では、ワーホリ後のキャリアについてリアルな視点で解説します。
          </p>
          <p className="text-xs text-muted mt-4">
            ※ 本記事はアフィリエイト広告を含みます。
            <Link href="/disclosure" className="underline hover:text-primary ml-1">広告掲載について</Link>
          </p>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-4">
              ✅ 結論：ワーホリは就職に「不利」ではない
            </h2>
            <ul className="space-y-3">
              {[
                "空白期間よりも「何をしてきたか」の説明力が大事",
                "英語力・主体性・異文化適応力はどの業界でも評価される",
                "外資系・航空・観光・商社・IT系では特に強みになる",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 企業からの評価 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            ワーホリ経験は就職でどう評価される？
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            企業が気にするのは「なぜワーホリに行ったのか」と「そこで何を得たのか」の2点です。
            「なんとなく行った」では評価されませんが、「英語力を身につけて帰国後のキャリアに活かすため」
            という軸があれば、むしろ<strong>行動力・自立心のある人材</strong>として評価されます。
          </p>
          <p className="text-muted leading-relaxed">
            特に最近は、グローバル化が進む中で「海外経験あり」の人材を積極的に採用する企業が増えています。
            ワーホリは留学とは異なり<strong>「働いた経験」でもある</strong>ため、
            社会人基礎力のアピールにもなります。
          </p>
        </div>
      </section>

      {/* 実体験 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            【実体験】帰国後の就職はスムーズだった
          </h2>
          <div className="bg-soft rounded-2xl p-6 md:p-8 border-l-4 border-primary">
            <p className="text-sm font-bold text-primary mb-4">✍️ 筆者の経験談</p>
            <p className="text-muted leading-relaxed mb-4">
              カナダ・オーストラリアで各1年を過ごし帰国しましたが、就職活動は比較的スムーズでした。
              面接では必ずワーホリについて聞かれましたが、
              「現地で英語を使いながら働いた経験」「自分でビザ・住居・仕事をすべて手配した経験」は
              面接官に好意的に受け取られることが多かったです。
            </p>
            <p className="text-muted leading-relaxed mb-4">
              前職は外資系企業で、日常的に英語を使う環境でした。
              ワーホリで鍛えた英語力が直接仕事に活きた形です。
            </p>
            <p className="text-muted leading-relaxed">
              現在の仕事では英語をあまり使いませんが、「海外で2年間自力で生き抜いた経験」は
              自信やメンタルの強さという形で今も活きていると感じています。
            </p>
          </div>
        </div>
      </section>

      {/* 活かせる業界 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            ワーホリ後に活かせる職種・業界
          </h2>
          <p className="text-muted text-sm mb-8">
            英語力に自信がなくても、「海外で自力で生活した行動力」「異文化の中でコミュニケーションした経験」は
            どの業界でも評価されるポータブルスキルです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm">
                <span className="text-2xl flex-shrink-0">{ind.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{ind.name}</p>
                  <p className="text-xs text-muted">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 伝え方 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            就職活動でワーホリ経験をどう伝えるか
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            面接での伝え方で差がつきます。ポイントは「行動の理由」「現地での具体的な経験」
            「帰国後にどう活かせるか」の3点を押さえることです。
          </p>
          <div className="space-y-4">
            <div className="border border-red-100 bg-red-50 rounded-2xl p-5">
              <p className="text-sm font-bold text-red-600 mb-2">❌ NG例</p>
              <p className="text-sm text-muted">
                「英語を勉強してきました」だけで終わる。何を得たのか・どう活かすのかが伝わらない。
              </p>
            </div>
            <div className="border border-green-100 bg-green-50 rounded-2xl p-5">
              <p className="text-sm font-bold text-green-700 mb-2">✅ OK例</p>
              <p className="text-sm text-muted leading-relaxed">
                「カナダとオーストラリアで各1年、現地企業でアルバイトをしながら生活費を自己調達しました。
                英語力だけでなく、未知の環境への適応力と自己解決力が身についたと思っています。
                この経験を御社の〇〇業務でも活かしたいと考えています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* エージェントとの関連 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            エージェントに相談すれば、キャリアプランも一緒に考えられる
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            「ワーホリに行きたいけど帰国後が不安」という人こそ、エージェントへの無料相談が効果的です。
            行く前から帰国後のキャリアを見据えてプランを設計してくれるエージェントを選ぶと、
            目的意識を持って渡航できます。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "ISS留学ライフ",
                point: "社会人のキャリア留学に強い。「行く前から帰国後のキャリアを見据えたプラン設計」を得意としている。Z会グループの安心感も◎。",
                href: "/iss",
              },
              {
                name: "ラストリゾート",
                point: "ワーホリ経験者のカウンセラーが対応。帰国後のリアルな話を聞けるので、不安を具体的に解消しやすい。",
                href: "/lastresort",
              },
              {
                name: "スマ留",
                point: "費用を抑えながらプランを設計できる。まず話を聞いてみたい人向けに無料面談のハードルが低い。",
                href: "/smaru",
              },
            ].map((agent) => (
              <div key={agent.name} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                <div className="flex-1">
                  <Link href={agent.href} className="font-bold text-primary hover:underline">
                    {agent.name}
                  </Link>
                  <p className="text-xs text-muted mt-1">{agent.point}</p>
                </div>
                <Link href={agent.href} className="text-xs text-primary hover:underline flex-shrink-0">
                  詳細 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 中間 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">帰国後のキャリアも含めて、まず相談してみよう</p>
          <p className="text-muted text-sm mb-6">
            「行った後どうなるか」を一緒に考えてくれるエージェントを比較できます。
          </p>
          <CtaButton href="/best-3" variant="accent">
            エージェントを比較してみる →
          </CtaButton>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="border border-border rounded-2xl overflow-hidden bg-white">
                <summary className="p-5 cursor-pointer font-bold text-foreground hover:bg-soft transition-colors list-none flex items-center justify-between">
                  <span>Q. {item.q}</span>
                  <span className="text-primary ml-4 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-border pt-4">
                  A. {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            キャリアの不安はエージェントへの無料相談で解決できる
          </h2>
          <p className="text-white/80 mb-3 leading-relaxed text-sm">
            ワーホリは「就職に不利」どころか、使い方次第でキャリアの武器になります。
            「帰国後どうなるか不安」という人ほど、行く前にエージェントに相談して
            目的意識を持って渡航することをおすすめします。
          </p>
          <p className="text-white/80 mb-8 leading-relaxed text-sm">
            当サイトで比較している5社はすべて<strong>無料で相談可能</strong>。
            まず話を聞いてから決めても遅くありません。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
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
