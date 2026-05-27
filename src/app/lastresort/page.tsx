import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "ラストリゾートはワーホリ専門ですか？",
    answer:
      "ワーホリに特に強みを持つエージェントですが、語学留学にも対応しています。ワーホリを本格的に検討している方に向いているエージェントです。",
  },
  {
    question: "サポート費用はかかりますか？",
    answer:
      "基本的なサポートは無料です。ただし語学学校や渡航手配にかかる実費は別途発生します。詳細は無料相談で確認できます。",
  },
  {
    question: "現地でのサポートはありますか？",
    answer:
      "主要都市に現地オフィスがあり、日本人スタッフが常駐しています。渡航直後の生活立ち上げをサポートしてもらえます。",
  },
  {
    question: "相談だけでも大丈夫ですか？",
    answer:
      "大丈夫です。資料ダウンロード→オンラインセミナー→カウンセリングと段階的に進められるので、いきなり面談という必要はありません。",
  },
  {
    question: "どの国のワーホリに対応していますか？",
    answer:
      "複数のワーホリ協定国に対応しており、渡航先の都市選びからも相談できます。希望する国・都市について、無料相談で詳しく確認することをおすすめします。",
  },
];

export const metadata: Metadata = {
  title: "ラストリゾートの評判・口コミ【2026年最新】ワーホリ特化エージェントの実態",
  description:
    "ラストリゾートの評判・口コミを実際のユーザーの声をもとに徹底解説。渡航前サポートの充実度・現地オフィスの安心感・料金の高さなど、メリット・デメリットを正直にまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/lastresort",
  },
};

const goodReviews = [
  {
    age: "20代",
    stars: 5,
    good: "これまでもさまざまなエージェントを利用してきたが、最もカウンセリングが丁寧で、渡航までのサポートが充実している。",
    bad: "特になし。",
  },
  {
    age: "20代",
    stars: 4,
    good: "オフィスが滞在していた都市にあった。",
    bad: "特になし。",
  },
  {
    age: "30代女性",
    stars: 4,
    good: "イギリスに憧れていましたが、費用の面から考えを変えました。子供に関わる仕事を海外でしたかったため、そのような仕事がある都市をエージェントの方がアドバイスしてくださいました。またエージェントの方が実際に留学経験者であったため、参考になりました。",
    bad: "最初の数週間はホームステイをしましたが、家族とのふれあいの時間がほとんどありませんでした。「基本的にホームステイはステイ場所と一部の食事を提供するのみ」ということを事前に知りたかったです。",
  },
  {
    age: "30代女性",
    stars: 4,
    good: "ビザの取得、現地の語学学校やホームステイ先への手続きを代行してもらえたので、安心して渡航できました。現地にオフィスがあり、最初の1〜2ヶ月くらいは何かあればそこに行っていました。同じようにラストリゾートを利用している人達と繋がれたのもよかったです。",
    bad: "やはり料金は少し高いかなと思うのが正直なところです。",
  },
  {
    age: "20代男性",
    stars: 4,
    good: "ビザ申請から語学学校の手配、渡航前オリエンテーションまで一通りサポートしてもらえた点が良かったです。",
    bad: "現地到着後のサポートは最低限という印象で、もう少し踏み込んだフォローがあるとより良かったです。",
  },
  {
    age: "20代女性",
    stars: 4,
    good: "都市選びから相談に乗ってくれた。語学学校やビザの手続きをやってもらえた。",
    bad: "特になし。",
  },
  {
    age: "20代",
    stars: 5,
    good: "サポートは無料なのに、現地にもオフィスがあって日本人スタッフがいて、連絡もマイページからいつでもできて、とても安心できました。思い返せば、学校選びも真摯に向き合ってくれて、いろいろ正直に教えてくれて、感謝しかありません。",
    bad: "特にないです！",
  },
];

const badReviews = [
  {
    age: "30代",
    stars: 1,
    good: "フィリピン人英語教師とのオンライン英会話が無料（手数料の中に含まれていたと思います）だった。",
    bad: "フィリピン英語とニュージーランド英語は違い、留学もたった3週間だったので役に立った感があまりしませんでした。日本では薬いっぱい持って行ってくださいと言われ、現地では保険払ってきてるから小さなことでも病院行った方がいいと言われ、真逆のことを言われました。国家資格のバリスタコースを申し込んだのに、英語力英検2級程度必要というのも現地に行ってテストを受けてから言われ、バリスタコースに参加できませんでした。国家資格取りに行ったのに騙された感じでした。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function LastResortPage() {
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
            ラストリゾートの評判・口コミ
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            ワーホリ・留学に特化した老舗エージェント「ラストリゾート」。
            実際の利用者の口コミをもとに、サポートの実態・料金・向いている人を正直にまとめました。
          </p>

          {/* 総合評価 */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-center mb-8">
            <p className="text-sm font-bold text-muted mb-2">総合評価</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl font-black">4.0</span>
              <div>
                <Stars count={4} />
                <p className="text-xs text-muted mt-1">※ 本サイト掲載の口コミ{goodReviews.length + badReviews.length}件をもとに算出した参考評価です</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">渡航前サポートの丁寧さ・現地オフィスの安心感</span>が高評価な一方、
              <span className="font-bold text-red-500">料金の高さと現地到着後のフォロー</span>に課題が見られます。
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4AUXWT+16VZM+550A+5YJRM" variant="accent" external>
              ラストリゾートに無料相談する
            </CtaButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www18.a8.net/0.gif?a8mat=4AUXWT+16VZM+550A+5YJRM" width={1} height={1} alt="" style={{ border: "none" }} />
            <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
          </div>
        </div>
      </section>

      {/* ラストリゾートとは */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="10万人以上の渡航実績を持つワーホリ特化エージェント">
            ラストリゾートとは
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ラストリゾートは、10万人以上の渡航実績を持つワーホリ・留学専門エージェントです。
              資料ダウンロード→オンラインセミナー→カウンセリングという段階的な相談の仕組みが特徴で、
              「いきなり面談はハードルが高い」という方でも情報収集から始めやすい設計になっています。
            </p>
            <p>
              全国にオフィスを構えており、海外の主要都市にも現地オフィスを持っています。
              ワーホリ専門のカウンセラーが在籍し、渡航前から現地生活のスタートまで一貫してサポートしてくれます。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "渡航実績", value: "10万人以上" },
                { label: "相談の仕組み", value: "段階式（3ステップ）" },
                { label: "特徴", value: "ワーホリ特化" },
                { label: "現地", value: "オフィスあり" },
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
          <SectionHeading tag="h2" sub="ワーホリ・語学留学対応国">
            ラストリゾートの対応国一覧
          </SectionHeading>
          <div className="flex flex-wrap gap-2 mb-3">
            {[
              { flag: "🇦🇺", name: "オーストラリア" },
              { flag: "🇨🇦", name: "カナダ" },
              { flag: "🇳🇿", name: "ニュージーランド" },
              { flag: "🇬🇧", name: "イギリス" },
              { flag: "🇮🇪", name: "アイルランド" },
              { flag: "🇩🇪", name: "ドイツ" },
              { flag: "🇫🇷", name: "フランス" },
              { flag: "🇰🇷", name: "韓国" },
              { flag: "🇺🇸", name: "アメリカ" },
              { flag: "🇵🇭", name: "フィリピン" },
              { flag: "🇲🇹", name: "マルタ" },
            ].map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1 bg-soft border border-border rounded-full px-3 py-1 text-sm font-medium">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted">※ ワーホリ対応国はオーストラリア・カナダ・ニュージーランド・イギリス・アイルランド・ドイツ・フランス・韓国の8カ国。語学留学はアメリカ・フィリピン・マルタ等も対応。対応国・プランは変更になる場合があります。最新情報は公式サイトまたは無料相談でご確認ください。</p>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="口コミから見えてきた実態">
            ラストリゾートのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "カウンセリングが丁寧・渡航前サポートが充実している",
                  "資料DL→セミナー→面談の段階式でプレッシャーなく始められる",
                  "ビザ申請・語学学校・ホームステイ手配を一括代行",
                  "渡航先都市の選び方まで相談に乗ってくれる",
                  "現地オフィスがあり、渡航後も頼れる日本人スタッフが常駐",
                  "同じラストリゾート利用者と現地でつながれる",
                  "マイページからいつでも連絡できる安心感",
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
                  "料金はやや高めという口コミが複数ある",
                  "現地到着後のサポートは最低限という声も",
                  "事前説明の不足（ホームステイの実態・英語力要件など）を感じるケースがある",
                  "短期留学では効果を実感しにくいプログラムもある",
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
            ラストリゾートが向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "ワーホリを本気で検討しているが、まず情報収集から始めたい",
                  "いきなり面談はハードルが高いと感じる",
                  "渡航先の都市選びから一緒に考えてほしい",
                  "現地での日本語サポート環境が欲しい",
                  "同じ境遇の仲間とつながりたい",
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
                  "現地での手厚いフォローアップを最重視する",
                  "短期の語学留学（数週間程度）を検討している",
                  "プログラムの詳細を事前に細かく確認したい",
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

      {/* 良い口コミ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="実際の利用者の声">
            ラストリゾートの良い口コミ
          </SectionHeading>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 text-sm text-foreground/70">
            ※ 以下の口コミは第三者口コミサービスに投稿されたユーザーの声を参考に掲載しています。
          </div>
          <div className="space-y-4">
            {goodReviews.map((review, i) => (
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

      {/* 悪い口コミ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="気になる点も正直に掲載">
            ラストリゾートの悪い口コミ
          </SectionHeading>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-6 text-sm text-foreground/70">
            ※ 悪い口コミも含めて正直に掲載しています。参考情報としてご確認ください。
          </div>
          <div className="space-y-4">
            {badReviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-red-100">
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
                    <p className="font-bold text-red-500 mb-1">悪かった点</p>
                    <p className="text-foreground/80 leading-relaxed">{review.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            ラストリゾートはこんなエージェント
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              ラストリゾートの強みは<strong>渡航前の丁寧なカウンセリングと、段階的に相談できる仕組み</strong>です。
              「いきなり面談はハードルが高い」という方でも資料ダウンロードから始められるため、
              ワーホリを本気で検討しているが最初の一歩を踏み出せていない方に向いています。
            </p>
            <p>
              また、現地オフィスと日本人スタッフの存在は、初めての海外生活での安心感につながります。
              現地で同じラストリゾート利用者とつながれる点も、孤独になりがちな海外生活のサポートになります。
            </p>
            <p>
              一方で、<strong>料金はやや高め</strong>という声が複数あります。
              また、現地到着後の踏み込んだサポートを期待しすぎると物足りなさを感じるケースもあるようです。
              申し込み前にサポート範囲の詳細をしっかり確認することをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            ラストリゾート Q&amp;A
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
                href: "/waho-towa",
                title: "ワーキングホリデーとは？",
                desc: "ワーホリの仕組み・対象年齢・協定国をわかりやすく解説。",
              },
              {
                href: "/waho-cost",
                title: "ワーホリにかかる費用まとめ",
                desc: "国別・期間別の費用目安を徹底解説。",
              },
              {
                href: "/agent-erabi",
                title: "失敗しない留学エージェントの選び方",
                desc: "自分に合ったエージェントを選ぶ5つのポイント。",
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
      <section className="py-10 bg-white">
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
            費用・プラン・サポート内容など、気になることを直接確認してみましょう。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 無料・申し込み不要
          </p>
          <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4AUXWT+16VZM+550A+5YJRM" variant="accent" external>
            ラストリゾートに無料相談する
          </CtaButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www18.a8.net/0.gif?a8mat=4AUXWT+16VZM+550A+5YJRM" width={1} height={1} alt="" style={{ border: "none" }} />
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ラストリゾート",
            description: "10万人以上の渡航実績を持つワーホリ・留学特化エージェント。段階的な相談の仕組みと現地オフィスが特徴。",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: String(goodReviews.length + badReviews.length),
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
