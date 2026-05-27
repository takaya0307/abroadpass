import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "スマ留の料金はなぜ安いのですか？",
    answer:
      "語学学校の空き場所や空き時間を活用するシェアリングエコノミーの仕組みにより、費用を抑えた留学プランを提供しています。国と期間でシンプルに料金が決まるため、予算が立てやすいのも特徴です。",
  },
  {
    question: "LINEだけで全て手続きできますか？",
    answer:
      "相談・やり取りの多くはLINEで完結します。ビザ申請や学校手続きなど煩雑な手続きも代行してもらえます。",
  },
  {
    question: "現地でのサポートはありますか？",
    answer:
      "基本的にオンライン・メール対応が中心です。現地にスタッフが常駐するタイプのエージェントとは異なるため、現地サポートを重視する方は事前に確認することをおすすめします。",
  },
  {
    question: "短期留学（数週間）から対応していますか？",
    answer:
      "はい、1週間からの短期留学にも対応しています。長期のワーホリまで幅広く相談できます。",
  },
  {
    question: "無料相談だけでも大丈夫ですか？",
    answer:
      "大丈夫です。相談しただけで申し込む義務は一切ありません。",
  },
];

export const metadata: Metadata = {
  title: "スマ留の評判・口コミ【2026年最新】メリット・デメリットを徹底解説",
  description:
    "スマ留の評判・口コミをリアルなユーザーの声をもとに徹底解説。料金の安さ・サポート品質・デメリットまで正直にまとめました。スマ留が向いている人・向いていない人も紹介。",
  alternates: {
    canonical: "https://abroadpass.jp/smaru",
  },
};

const goodReviews = [
  {
    age: "20代女性",
    stars: 4,
    good: "他の留学エージェントよりもコストが安く抑えられた。",
    bad: "スマ留の定休日には、連絡が取れなかったので滞在先で困ったことを相談できなかった。",
  },
  {
    age: "20代",
    stars: 5,
    good: "口コミ通りに費用も安く、スタッフがとても親切で説明に関しても丁寧で好印象。",
    bad: "特になかった。",
  },
  {
    age: "20代",
    stars: 5,
    good: "お申し込みから渡航までLINEでのサポートがあり、わからない点なども質問したらすぐに返信が来て安心して利用することができ不安がなく留学に行けた。",
    bad: "とくにない。",
  },
  {
    age: "20代",
    stars: 5,
    good: "低価格でありながらサポートの質が高く、安心して過ごせた。",
    bad: "問い合わせへの対応が遅い事がありました。",
  },
  {
    age: "30代",
    stars: 4,
    good: "LINEで大まかなことができるのが良かったし、料金もわかりやすかった。",
    bad: "留学後の対応はイマイチかなというのと、ホームステイ先は運が大きいと感じた。",
  },
  {
    age: "30代男性",
    stars: 4,
    good: "料金体系がわかりやすく、最初の見積もりと実際の費用に大きな差がなかった点が安心できた。担当者の方がイギリス留学の経験者で、現地の生活費や住むエリアの特徴など、ネットでは分かりにくい情報を詳しく教えてくれた。",
    bad: "現地到着後のフォローがやや弱く感じた。トラブルがあった際に問い合わせたところ、返信までに少し時間がかかった。紹介された滞在先の選択肢が少なかった。",
  },
  {
    age: "30代女性",
    stars: 4,
    good: "留学先がなかなか決められずに悩んでいたところ、LINEで親身になって色々と相談に乗ってくれたので納得のいく留学先が決まった。",
    bad: "事前に聞いていた費用は安かったのですが、オプション費用が色々と取られたので予算オーバーになってしまった。事前に最終的にはこれぐらいかかるかもしれないと教えてほしかった。",
  },
  {
    age: "30代",
    stars: 4,
    good: "担当の方がとても丁寧で、こちらが不安に思っていた費用の見積もりや現地での生活費の目安まで細かく説明してくれた。",
    bad: "出発直前のオリエンテーションが少し駆け足で、現地生活の細かい情報がやや不足していると感じた。",
  },
  {
    age: "20代男性",
    stars: 4,
    good: "スマ留は料金体系がシンプルで、国と期間で費用が決まるため予算が立てやすい。手続きもオンラインで完結でき、ビザ申請や学校入学手続きなど煩雑な部分を代行してもらえた。初めての留学でも不安が少なく、スムーズに渡航できた。",
    bad: "人気のあるプランは申込が集中していて、希望の学校や期間がすぐに埋まってしまうことがあった。現地でのサポートは基本的にオンライン・メール対応中心で、直接的なフォローはやや物足りなかった。",
  },
];

const badReviews = [
  {
    age: "20代女性",
    stars: 1,
    good: "なし",
    bad: "対応が非常に悪い、遅い、上乗せ料金を取られた。4か月前から学生ビザの申請書類を完了していたのにその後音沙汰がなく、オーストラリアの学生ビザ料金が上がり10万円さらに支払えと言われた。スマ留側が申請を怠っていたせいで新料金の差額を支払わなければならなくなったのに認めず、支払った翌日にビザ取得できましたとすぐに連絡が来て信用できない。",
  },
  {
    age: "10代男性",
    stars: 2,
    good: "寮が2人部屋で日本人のみから比較的綺麗にリスペクトを持って過ごすことができた。",
    bad: "寮が写真と違い実際は少し古かったり汚かったりした。停電が何回もあったが保証は一切なかった。実際に話されていた内容と少し違う部分があった。",
  },
  {
    age: "20代",
    stars: 1,
    good: "なし",
    bad: "「ここの語学学校は日本人がいないのでおすすめです」と言われ選んだが入学時には9割が日本人だった。アフターサービスが悪い。",
  },
  {
    age: "20代",
    stars: 2,
    good: "留学前に留学した後の現実（デメリット）もしっかり話してくれた点。",
    bad: "実際に留学して、予定しているルートと違くなることはほとんどあると思う。ルートを変える相談を何回かしても、元のルートでないとと言われ、話が合わなくなり結局解約した。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function SmaruPage() {
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
            スマ留の評判・口コミ
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            実際の利用者の口コミをもとに、スマ留のメリット・デメリットを正直にまとめました。
            「費用は本当に安いのか？」「サポートは信頼できる？」気になる疑問に答えます。
          </p>

          {/* 総合評価 */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-center mb-8">
            <p className="text-sm font-bold text-muted mb-2">総合評価</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl font-black">3.5</span>
              <div>
                <Stars count={4} />
                <p className="text-xs text-muted mt-1">口コミ多数より集計</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">コスパ重視・初めての留学</span>に向いている一方、
              <span className="font-bold text-red-500">現地サポートの手薄さ</span>に注意が必要。
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="https://px.a8.net/svt/ejp?a8mat=45C1IF+B43BAQ+476I+5YJRM" variant="accent" external>
              スマ留の無料面談を予約する
            </CtaButton>
            <img src="https://www15.a8.net/0.gif?a8mat=45C1IF+B43BAQ+476I+5YJRM" width={1} height={1} alt="" style={{ border: "none" }} />
            <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
          </div>
        </div>
      </section>

      {/* スマ留とは */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="株式会社リアブロードが運営">
            スマ留とは
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              スマ留は「語学学校の空き時間を活用する」という独自の仕組みで、
              留学費用を従来の最大半額まで削減することを売りにしている留学エージェントです。
              国と期間で料金が決まるシンプルな料金体系が特徴で、予算が立てやすいと評判です。
            </p>
            <p>
              短期1週間から長期のワーホリまで幅広く対応しており、
              LINEで気軽に相談できる手軽さから、初めて留学を検討する20代を中心に利用者が多いエージェントです。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "対応期間", value: "1週間〜" },
                { label: "相談方法", value: "LINE・オンライン" },
                { label: "特徴", value: "業界最安級" },
                { label: "対象", value: "語学留学・ワーホリ" },
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
            スマ留の対応国一覧
          </SectionHeading>
          <div className="flex flex-wrap gap-2 mb-3">
            {[
              { flag: "🇵🇭", name: "フィリピン" },
              { flag: "🇦🇺", name: "オーストラリア" },
              { flag: "🇨🇦", name: "カナダ" },
              { flag: "🇳🇿", name: "ニュージーランド" },
              { flag: "🇬🇧", name: "イギリス" },
              { flag: "🇮🇪", name: "アイルランド" },
              { flag: "🇲🇹", name: "マルタ" },
              { flag: "🇺🇸", name: "アメリカ" },
              { flag: "🇦🇪", name: "ドバイ" },
              { flag: "🇿🇦", name: "南アフリカ" },
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
            スマ留のメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "業界最安級の料金設定（最大半額）",
                  "国と期間で決まるシンプルな料金体系で予算が立てやすい",
                  "LINEで気軽に相談・やり取りができる",
                  "渡航前の無料英会話レッスン付き",
                  "ビザ申請・学校手続きなど煩雑な作業を代行",
                  "初めての留学でも不安が少ない手厚い渡航前サポート",
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
                  "渡航後・現地でのサポートが手薄という口コミが多い",
                  "定休日は連絡が取れず、現地トラブル時に困ることも",
                  "オプション費用が別途かかり、予算オーバーになるケースあり",
                  "ホームステイ先・寮の当たり外れが大きい",
                  "紹介された学校の実態（日本人比率など）が説明と異なることがある",
                  "学校・滞在先の選択肢がやや少なめ",
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
            スマ留が向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "とにかく費用を安く抑えたい",
                  "初めての留学で気軽に相談したい",
                  "LINEで手軽にやり取りしたい",
                  "短期留学（語学留学）を検討している",
                  "渡航前のサポートを重視する",
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
                  "現地でのトラブル対応を重視する",
                  "ホームステイ・滞在先にこだわりがある",
                  "日本人が少ない環境を強く希望する",
                  "長期ワーホリで手厚いフォローを求める",
                  "学校の選択肢を広く比較したい",
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
            スマ留の良い口コミ
          </SectionHeading>
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
                    <p className="font-bold text-red-500 mb-1">悪かった点</p>
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
            スマ留の悪い口コミ
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
            スマ留はこんなエージェント
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              スマ留の最大の強みは<strong>料金の安さと気軽さ</strong>です。
              LINEで相談でき、料金体系もシンプルなため、初めて留学を考える人が最初の一歩を踏み出しやすいエージェントです。
            </p>
            <p>
              一方で、<strong>渡航後・現地でのサポートが手薄</strong>という口コミが複数あります。
              現地でトラブルが起きた際に自力で対処できる自信がない方や、
              ホームステイ先にこだわりがある方は、他のエージェントと比較することをおすすめします。
            </p>
            <p>
              <strong>「費用を抑えたい」「まず気軽に話を聞きたい」</strong>という方にはおすすめです。
              無料相談は費用もかからず、話を聞くだけでも問題ありません。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            スマ留 Q&amp;A
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
                href: "/ryugaku-cost",
                title: "語学留学の費用はいくらかかる？",
                desc: "国別・期間別の費用目安を徹底まとめ。",
              },
              {
                href: "/agent-erabi",
                title: "失敗しない留学エージェントの選び方",
                desc: "自分に合ったエージェントを選ぶ5つのポイント。",
              },
              {
                href: "/eigo-zero",
                title: "英語ゼロから留学できる？",
                desc: "英語力に不安がある方へ。準備の仕方と現地での乗り越え方。",
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
            気になることを直接聞いてみるのが一番の近道です。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 無料・申し込み不要
          </p>
          <CtaButton href="https://px.a8.net/svt/ejp?a8mat=45C1IF+B43BAQ+476I+5YJRM" variant="accent" external>
            スマ留の無料面談を予約する
          </CtaButton>
          <img src="https://www15.a8.net/0.gif?a8mat=45C1IF+B43BAQ+476I+5YJRM" width={1} height={1} alt="" style={{ border: "none" }} />
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "スマ留",
            description: "業界最安級の料金設定が特徴の留学エージェント。短期から長期まで対応。",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "3.5",
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
