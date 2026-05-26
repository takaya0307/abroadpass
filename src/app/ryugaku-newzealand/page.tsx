import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ニュージーランド語学留学の費用・特徴まとめ【2026年最新】オークランド・クライストチャーチ比較",
  description:
    "ニュージーランド語学留学の1ヶ月〜1年の費用目安、オークランドとクライストチャーチの違い、NZ留学が向いている人を解説。治安・自然・英語環境など魅力も紹介。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-newzealand",
  },
};

const faqData = [
  {
    question: "ニュージーランド語学留学の費用はいくらかかりますか？",
    answer:
      "渡航費込みで1ヶ月30〜40万円、3ヶ月95〜130万円が目安です。学費は月16万円前後、生活費（ホームステイ）は月12〜16万円程度です。オーストラリアやカナダと比べると若干費用を抑えやすい傾向があります。",
  },
  {
    question: "ニュージーランド英語は聞き取りにくいですか？",
    answer:
      "ニュージーランド英語にはやや独特のアクセントがありますが、発音はクリアで比較的聞き取りやすいとされています。「i」の音が「e」に近く聞こえるなど特徴はありますが、カナダやオーストラリアと同様に国際的に通じる標準英語に近い英語です。",
  },
  {
    question: "オークランドとクライストチャーチはどちらがおすすめですか？",
    answer:
      "学校の選択肢が多く都市生活も楽しみたいならオークランド、落ち着いた環境で集中して英語を勉強したいならクライストチャーチがおすすめです。オークランドは日本人コミュニティも大きく、初めての留学に安心感があります。",
  },
  {
    question: "ニュージーランドの治安はどうですか？",
    answer:
      "外務省の情報でも「一般的に治安が良い国」とされています。ただし、オークランドなど都市部ではスリや置き引きが発生することもあるため、基本的な防犯意識は必要です。全体的には語学留学先として安心して選べる国です。",
  },
  {
    question: "ニュージーランドへの語学留学はエージェントなしでもできますか？",
    answer:
      "語学学校への直接申し込みも可能ですが、ビザ手続き・学校選び・ホームステイ手配など準備することが多く、初めての方にはエージェント利用が安心です。無料で使えるエージェントがほとんどなので、活用しない理由はありません。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RyugakuNewzealandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🇳🇿</span>
            <span className="text-primary font-bold text-sm tracking-wide">語学留学ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ニュージーランド語学留学の
            <span className="text-primary">費用・特徴まとめ</span>
            【2026年最新】
          </h1>
          <p className="text-muted text-base leading-relaxed">
            治安が良く自然豊かなニュージーランドは、落ち着いた環境で英語を学びたい人に人気の留学先です。
            1ヶ月〜1年の費用目安、オークランド・クライストチャーチの違い、NZ留学が向いている人をまとめました。
          </p>
        </div>
      </section>

      {/* 費用まとめ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">費用の目安（渡航費込み）</h2>
          <p className="text-muted text-sm mb-6">
            語学学校（一般英語コース）＋ホームステイ＋往復航空券を含む総額の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border px-4 py-3 text-left font-bold">期間</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">総費用の目安</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">内訳イメージ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">1ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約30〜40万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費16万＋滞在費12万＋航空券6〜12万</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">3ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約95〜130万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費48万＋滞在費36万＋航空券・雑費</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">半年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約215〜235万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費96万＋滞在費72万＋航空券・保険など</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">1年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約318〜375万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費192万＋滞在費144万＋航空券・保険など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-accent/10 rounded-xl text-sm text-muted">
            <strong>💡 ポイント：</strong>
            往復航空券は日本〜ニュージーランド間で約6〜17万円（時期・航空会社により変動）。
            オーストラリアと比べると全体的に費用をやや抑えやすい傾向があります。
          </div>
        </div>
      </section>

      {/* 費用の内訳 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">費用の内訳を詳しく見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏫 語学学校の学費</p>
              <p className="text-2xl font-black text-primary mb-1">月16万円前後</p>
              <p className="text-sm text-muted">
                一般英語コース（週20〜25時間）の目安。
                学校・コース・都市によって差があります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏠 滞在費（ホームステイ）</p>
              <p className="text-2xl font-black text-primary mb-1">月12〜16万円</p>
              <p className="text-sm text-muted">
                朝夕食付きホームステイの目安。
                学生寮やフラット（シェアハウス）では安くなる場合も。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">✈️ 往復航空券</p>
              <p className="text-2xl font-black text-primary mb-1">6〜17万円</p>
              <p className="text-sm text-muted">
                直行便か経由便、時期によって大きく変動。
                早めの予約でコストを抑えられます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🛡️ 海外留学保険</p>
              <p className="text-2xl font-black text-primary mb-1">月1〜3万円</p>
              <p className="text-sm text-muted">
                ニュージーランドは医療費が高いため、
                留学保険への加入は必須です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 都市比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            オークランド vs クライストチャーチ
          </h2>
          <p className="text-muted text-sm mb-6">
            ニュージーランドの語学留学で人気の2都市を比較します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* オークランド */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/10 px-5 py-4">
                <p className="font-black text-lg">🌆 オークランド</p>
                <p className="text-sm text-muted">NZ最大の都市・語学留学の定番</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・語学学校の数・コースの選択肢が最多</li>
                    <li>・日本人コミュニティが充実、日本食も豊富</li>
                    <li>・都市インフラが整っており生活しやすい</li>
                    <li>・アジア系留学生も多く国際色豊か</li>
                    <li>・ショッピング・エンタメも充実</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・NZ最大都市のため物価はやや高め</li>
                    <li>・日本人が多く日本語環境に甘えやすい</li>
                    <li>・スリ等の軽犯罪には一定の注意が必要</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    初めての留学で不安がある方・都市生活も楽しみたい方・学校の選択肢を広く持ちたい方
                  </p>
                </div>
              </div>
            </div>

            {/* クライストチャーチ */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-accent/10 px-5 py-4">
                <p className="font-black text-lg">🌿 クライストチャーチ</p>
                <p className="text-sm text-muted">落ち着いた環境で集中して学べる</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・少人数制・アットホームな語学学校が多い</li>
                    <li>・自然に囲まれた落ち着いた環境</li>
                    <li>・オークランドより生活費が抑えやすい</li>
                    <li>・NZ人との交流機会が多く英語漬けになりやすい</li>
                    <li>・南島観光の拠点としても便利</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・オークランドより学校の選択肢が少ない</li>
                    <li>・都市の規模が小さく娯楽は限られる</li>
                    <li>・冬（6〜8月）は冷え込む日もある</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    英語学習に集中したい方・自然が好きな方・費用を少し抑えたい方
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* その他の都市 */}
          <div className="mt-6 p-5 bg-soft rounded-2xl border border-border">
            <p className="font-bold mb-3">その他の主要都市</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-bold">🏛️ ウェリントン（首都）</p>
                <p className="text-muted">芸術・文化の街。コンパクトで歩きやすく、ビビッドな都市の雰囲気が人気。語学学校の選択肢はオークランドより少なめ。</p>
              </div>
              <div>
                <p className="font-bold">🏔️ クイーンズタウン</p>
                <p className="text-muted">アドベンチャースポーツの聖地。スキー・バンジージャンプなどアクティビティを楽しみながら留学したい人向け。語学学校は少ない。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NZ留学の特徴 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">ニュージーランド留学の4つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">① 治安が良く安心して生活できる</p>
              <p className="text-sm text-muted leading-relaxed">
                外務省の情報でも「一般的に治安が良い国」と位置づけられており、留学初心者でも安心して生活できます。
                都市部での軽犯罪には基本的な防犯意識が必要ですが、全体的に穏やかで暮らしやすい環境です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">② 自然豊かで生活の質が高い</p>
              <p className="text-sm text-muted leading-relaxed">
                映画「ロード・オブ・ザ・リング」の撮影地としても有名な壮大な自然が魅力。
                週末にハイキングやビーチを楽しめる環境で、英語学習と観光・アクティビティを両立できます。
                「ニュージーランドの生活満足度は世界トップクラス」とも言われています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">③ オーストラリアより費用を抑えやすい</p>
              <p className="text-sm text-muted leading-relaxed">
                語学学校の学費・生活費ともにオーストラリアより若干安めの傾向があります。
                英語圏の中で費用対効果の高い留学先として人気があり、
                「英語圏に留学したいがコストが心配」という方にも選ばれています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">④ ワーキングホリデーとの組み合わせが可能</p>
              <p className="text-sm text-muted leading-relaxed">
                日本人はニュージーランドのワーキングホリデービザを取得可能（18〜30歳、最長1年）。
                語学留学後にワーホリへ切り替えて働きながら滞在を延長するルートもあります。
                最低賃金はNZD 23.50/時（2025年4月〜）で、働きながら滞在費を補うことも可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            ニュージーランド留学が向いている人・向いていない人
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-700 mb-3">✅ 向いている人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>🌿 自然の中でゆったり英語を学びたい</li>
                <li>🛡️ 治安の良い安心な環境を重視する</li>
                <li>💰 オーストラリアより費用を抑えたい</li>
                <li>🤝 NZ人と交流して英語漬けになりたい</li>
                <li>🏄 アクティビティや観光も楽しみたい</li>
                <li>⬆️ 語学留学後にワーホリへ移行したい</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-700 mb-3">❌ 向いていない人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>🏙️ 大都市の賑やかな生活が好きな人</li>
                <li>📚 語学学校の選択肢を最大限に広げたい人</li>
                <li>💼 就労ビザや永住権へのルートを考えている人</li>
                <li>🌡️ 南半球の季節の逆転が気になる人（夏は12〜2月）</li>
                <li>✈️ 渡航費を極力抑えたい人（フィリピン比）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">ニュージーランド留学におすすめのエージェント</h2>
          <p className="text-muted text-sm mb-6">
            紹介している5社すべてがニュージーランドの語学留学に対応しています。目的に合わせて選んでみましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link href="/smaru" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">💰 コスパ重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">スマ留</p>
              <p className="text-xs text-muted leading-relaxed">業界最安値保証。費用を抑えながら留学したい方に。</p>
            </Link>
            <Link href="/iss" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🛡️ サポート重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">ISS留学ライフ</p>
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。初めての留学でも安心のサポート。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 実績・社会人向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。長期・社会人留学に強い老舗エージェント。</p>
            </Link>
          </div>
          <p className="text-center text-sm text-muted">
            全社を比較したい方は → <Link href="/best-3" className="text-primary font-bold hover:underline">おすすめエージェント比較ページ</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details
                key={i}
                className="rounded-2xl border border-border bg-soft group"
              >
                <summary className="px-5 py-4 font-bold cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Q. {faq.question}</span>
                  <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ryugaku-australia"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇦🇺</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                オーストラリア語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">NZと並ぶ人気の南半球英語圏の比較に</p>
            </Link>
            <Link
              href="/ryugaku-philippines"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇵🇭</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                フィリピン語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">費用を抑えて英語を学ぶならフィリピン</p>
            </Link>
            <Link
              href="/ryugaku-cost"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🌍</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                語学留学にかかる費用はいくら？国別まとめ
              </p>
              <p className="text-xs text-muted">5ヵ国の費用を一括比較</p>
            </Link>
            <Link
              href="/best-3"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🏆</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                おすすめ留学エージェント比較
              </p>
              <p className="text-xs text-muted">NZ対応エージェントをまとめて比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
