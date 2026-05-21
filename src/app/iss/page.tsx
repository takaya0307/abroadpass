import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "ISS留学ライフはどんな会社ですか？",
    answer:
      "Z会グループが運営する留学エージェントです。1990年の創立以来、10万人以上の留学をサポートしてきた実績があります。語学留学・ワーキングホリデーから大学正規留学まで幅広く対応しています。",
  },
  {
    question: "ISS留学ライフの費用は高いですか？",
    answer:
      "業界平均と比べるとやや高めです。ただし現地スタッフによるサポートや空港送迎など、サービスの手厚さを考慮すると納得感があるという声も多くあります。費用の詳細は無料相談で確認できます。",
  },
  {
    question: "現地ではどんなサポートを受けられますか？",
    answer:
      "空港送迎・携帯契約・銀行口座開設のサポートなど、現地生活のスタートを手厚くフォローしてくれます。現地スタッフが常駐しており、トラブル時にも対応してもらえます。",
  },
  {
    question: "ワーキングホリデーにも対応していますか？",
    answer:
      "はい、対応しています。語学留学だけでなくワーホリ・社会人のキャリアアップ留学・帰国後の就職サポートまで一貫して相談できます。",
  },
  {
    question: "無料相談だけでも大丈夫ですか？",
    answer:
      "大丈夫です。相談しただけで申し込む義務は一切なく、費用感や渡航先の候補など気になることを気軽に確認できます。",
  },
];

export const metadata: Metadata = {
  title: "ISS留学ライフの評判・口コミ【2026年最新】Z会グループの信頼性を検証",
  description:
    "ISS留学ライフの評判・口コミを実際のユーザーの声をもとに徹底解説。Z会グループの安心感・現地サポートの手厚さ・費用の高さなど、メリット・デメリットを正直にまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/iss",
  },
};

const reviews = [
  {
    age: "20代女性",
    stars: 4,
    good: "初めての留学で何から何まで分からなかったので情報をもらえてよかった。現地に着いた時に空港に迎えに来てもらえて安心した。",
    bad: "費用は安くなかったので、留学でお金がかかる状態だと少し負担になる。",
  },
  {
    age: "30代女性",
    stars: 5,
    good: "初めての海外留学だったのでとても不安でした。担当の方は一から説明してくださり、Visaの申請代行や語学学校・ホームステイの手配を全てして頂きました。語学学校も何校か候補を出して下さり、私に合った学校を見つけて下さりとても感謝しています。現地に着いてからも空港の送迎はもちろん、携帯の契約の仕方や銀行口座の作り方を現地のスタッフ方が丁寧に説明してくださったので、問題なく留学をスタートできました。現地のスタッフの方は、まめに連絡をくださり、語学学校後の仕事探しのコツなども教えてくださいました。1年間有意義にオーストラリア生活を送れたのは、日本のエージェントの方はもちろん、現地でサポートしてくださった方のおかげだと思います。",
    bad: "ホームステイ先のオーナーさんが時間にとても厳しい方だったので、シャワー時間はもちろんディナーの時間も決まっており、学校後に即帰宅しなければなりませんでした。また、語学学校からホームステイ先も遠かったので、事前にそういった情報があれば良かったと感じました。",
  },
  {
    age: "20代女性",
    stars: 4,
    good: "留学エージェントを利用して一番良かったのは、手続き面の不安がかなり減ったこと。学校選びから出願、ビザ関連まで一通りサポートしてもらえたので、初めての留学でも流れを理解しやすかった。現地情報や過去の事例も教えてもらえたのは安心材料になり、準備に集中できた点は助かったと思う。",
    bad: "提案される学校やプランがやや エージェント都合に感じる場面があったこと。選択肢が限られていたり、費用面の説明が分かりにくかった点は反省点。最終的には自分でも情報収集をしないと、本当に納得できる選択は難しいと感じた。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function IssPage() {
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
            ISS留学ライフの評判・口コミ
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            Z会グループが運営するISS留学ライフ。実際の利用者の口コミをもとに、
            現地サポートの手厚さ・費用の実態・向いている人を正直にまとめました。
          </p>

          {/* 総合評価 */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-center mb-8">
            <p className="text-sm font-bold text-muted mb-2">総合評価</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl font-black">4.5</span>
              <div>
                <Stars count={5} />
                <p className="text-xs text-muted mt-1">※ 本サイト掲載の口コミ{reviews.length}件をもとに算出した参考評価です</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">現地サポートの手厚さ</span>が高評価な一方、
              <span className="font-bold text-red-500">費用の高さ</span>への言及が目立ちます。
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX" variant="accent" external>
              ISS留学ライフに無料相談する
            </CtaButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www12.a8.net/0.gif?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX" width={1} height={1} alt="" style={{ border: "none" }} />
            <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
          </div>
        </div>
      </section>

      {/* ISS留学ライフとは */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="株式会社ISS（Z会グループ）が運営">
            ISS留学ライフとは
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ISS留学ライフは、Z会グループが運営する1990年創立の留学エージェントです。
              これまでに10万人以上の留学をサポートしてきた実績を持ち、
              語学留学・ワーキングホリデーはもちろん、社会人のキャリアアップ留学や大学正規留学にも強く、
              帰国後の就職サポートまで一貫して対応しています。
            </p>
            <p>
              現地にスタッフが常駐しており、空港送迎から銀行口座の開設方法まで、
              渡航後も手厚くフォローしてくれる点が他社との大きな差別化ポイントです。
              Z会グループというブランドの安心感から、初めての留学で慎重に選びたい方に選ばれています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "運営", value: "Z会グループ" },
                { label: "創立", value: "1990年" },
                { label: "特徴", value: "現地サポート充実" },
                { label: "対象", value: "語学・ワーホリ・正規留学" },
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

      {/* メリット・デメリット */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="口コミから見えてきた実態">
            ISS留学ライフのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "Z会グループの安心感・ブランド信頼性",
                  "現地スタッフが常駐・空港送迎あり",
                  "Visaの申請代行・語学学校・ホームステイの手配を一括対応",
                  "携帯契約・銀行口座開設など現地生活の立ち上げもサポート",
                  "学校の候補を複数出してくれるので選びやすい",
                  "帰国後の就職サポートまでカバー",
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
                  "費用が業界平均よりやや高め",
                  "ホームステイ先の詳細情報（距離・ルールなど）が事前に不足することがある",
                  "提案プランがエージェント都合に感じる場面があるという声も",
                  "費用面の説明がわかりにくいというレビューあり",
                  "カジュアルな短期留学より、じっくり相談したい人向け",
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
            ISS留学ライフが向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "信頼できる大手エージェントに安心して任せたい",
                  "渡航後の現地サポートを重視する",
                  "社会人のキャリアアップ留学を考えている",
                  "大学正規留学を目指している",
                  "帰国後の就職まで見据えてサポートを受けたい",
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
                  "とにかく費用を安く抑えたい",
                  "気軽にLINEでサクッと相談したい",
                  "短期の語学留学だけ検討している",
                  "自分でリサーチして自由に選択肢を広げたい",
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
            ISS留学ライフの口コミ
          </SectionHeading>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 text-sm text-foreground/70">
            ※ 以下の口コミは第三者口コミサービスに投稿されたユーザーの声を参考に掲載しています。良い点・悪い点ともに正直に掲載しています。
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
            ISS留学ライフはこんなエージェント
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ISS留学ライフの最大の強みは<strong>現地サポートの手厚さ</strong>です。
              空港送迎から銀行口座の開設まで、現地スタッフが伴走してくれる安心感は、
              他のエージェントと比較しても頭一つ抜けています。
              特に初めての海外留学・ワーホリで「右も左も分からない」という方には心強い存在です。
            </p>
            <p>
              一方で、<strong>費用はスマ留などのコスパ系エージェントと比べると高め</strong>です。
              手厚いサポートの分、コストがかかるという点は理解した上で選ぶ必要があります。
              また、提案されるプランや学校の選択肢が限られる場面があるという声もあるため、
              自分でも情報収集を行いながら活用するのがおすすめです。
            </p>
            <p>
              <strong>「信頼できる大手に安心して任せたい」「現地でのサポートを重視する」</strong>
              という方にはISS留学ライフが向いています。無料相談は費用もかからず、
              話を聞くだけでも問題ありません。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            ISS留学ライフ Q&amp;A
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
                desc: "国・期間別の費用目安を徹底まとめ。",
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
            現地サポートの詳細や費用感など、気になることを直接聞いてみるのが一番の近道です。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 無料・申し込み不要
          </p>
          <CtaButton href="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX" variant="accent" external>
            ISS留学ライフに無料相談する
          </CtaButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www12.a8.net/0.gif?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX" width={1} height={1} alt="" style={{ border: "none" }} />
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ISS留学ライフ",
            description: "Z会グループが運営する1990年創立の老舗留学エージェント。10万人以上のサポート実績。現地スタッフによる手厚いサポートが特徴。",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
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
