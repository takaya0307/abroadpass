import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アイルランド語学留学の費用・特徴まとめ【2026年最新】ダブリン・コーク比較",
  description:
    "アイルランド語学留学の1ヶ月〜1年の費用目安、ダブリン・コークの違い、日本人が少ない理由、ワーホリとの組み合わせ方を解説。EU唯一の英語圏で学ぶ魅力も紹介。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-ireland",
  },
};

const faqData = [
  {
    question: "アイルランド語学留学の費用はいくらかかりますか？",
    answer:
      "渡航費込みで1ヶ月45〜80万円、3ヶ月90〜160万円が目安です。学費は月10〜17万円、ホームステイは月13〜20万円が相場です。ダブリンは費用がやや高く、コークなどの地方都市を選ぶと抑えられます。",
  },
  {
    question: "アイルランドに日本人留学生は少ないですか？",
    answer:
      "オーストラリアやカナダと比べると日本人留学生の数は少ない傾向があります。そのため「日本語環境に甘えてしまう」リスクが低く、自然と英語を使う機会が増えます。英語力を短期間で伸ばしたい方に向いている理由のひとつです。",
  },
  {
    question: "アイルランドはEUの英語圏というのはどういう意味ですか？",
    answer:
      "イギリスがEUを離脱（Brexit）した結果、アイルランドはEU加盟国の中で唯一、英語を公用語とする国になりました。そのため、EU企業のヨーロッパ本部（Google・Facebook・Appleなど）がダブリンに多く集まっており、英語＋ヨーロッパビジネスの拠点として注目されています。",
  },
  {
    question: "アイルランドのワーキングホリデービザはありますか？",
    answer:
      "はい、日本人はアイルランドのワーキングホリデービザを取得可能です（18〜30歳、最長1年）。語学留学後にワーホリへ切り替えて働きながら滞在を延長するルートもあります。ビザ取得の条件や申請方法はエージェントに相談するのがスムーズです。",
  },
  {
    question: "アイルランド英語は聞き取りにくいですか？",
    answer:
      "アイルランド英語には独特のアクセント（イントネーションが独特）がありますが、発音はクリアで慣れれば問題ありません。語学学校では標準的な英語で授業が行われるため、授業中は標準英語、日常生活でアイルランド英語に触れるというバランスになります。",
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

export default function RyugakuIrelandPage() {
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
            <span className="text-2xl">🇮🇪</span>
            <span className="text-primary font-bold text-sm tracking-wide">語学留学ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            アイルランド語学留学の
            <span className="text-primary">費用・特徴まとめ</span>
            【2026年最新】
          </h1>
          <p className="text-muted text-base leading-relaxed">
            EU唯一の英語圏・日本人が少なく英語漬けになれるアイルランド。
            1ヶ月〜1年の費用目安、ダブリン・コークの違い、
            ワーホリとの組み合わせ方をまとめました。
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
                  <td className="border border-border px-4 py-3 text-primary font-bold">約45〜80万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費13万＋滞在費17万＋航空券15〜25万</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">3ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約90〜160万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費39万＋滞在費51万＋航空券・保険など</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">半年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約180〜280万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費78万＋滞在費102万＋航空券・保険など</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">1年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約320〜500万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費156万＋滞在費204万＋航空券・保険など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-accent/10 rounded-xl text-sm text-muted">
            <strong>💡 ポイント：</strong>
            日本からアイルランドへの直行便はなく、ロンドンやパリ経由が一般的。
            往復航空券は約15〜25万円が目安です。コークなどの地方都市を選ぶと
            ダブリンより滞在費を抑えられます。
          </div>
        </div>
      </section>

      {/* 費用内訳 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">費用の内訳を詳しく見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏫 語学学校の学費</p>
              <p className="text-2xl font-black text-primary mb-1">月10〜17万円</p>
              <p className="text-sm text-muted">
                一般英語コース（週20〜25時間）の目安。
                ダブリンの有名校はやや高め。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏠 滞在費（ホームステイ）</p>
              <p className="text-2xl font-black text-primary mb-1">月13〜20万円</p>
              <p className="text-sm text-muted">
                朝夕食付きホームステイの目安。
                ダブリンはホームステイの需要が高く、供給不足気味。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">✈️ 往復航空券</p>
              <p className="text-2xl font-black text-primary mb-1">15〜25万円</p>
              <p className="text-sm text-muted">
                直行便がないためロンドン・パリ経由が一般的。
                乗継便はその分時間がかかります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🛡️ 海外留学保険</p>
              <p className="text-2xl font-black text-primary mb-1">月1〜3万円</p>
              <p className="text-sm text-muted">
                アイルランドは医療費が高いため保険は必須。
                エージェント経由で加入できる場合も。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 都市比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">ダブリン vs コーク</h2>
          <p className="text-muted text-sm mb-6">
            アイルランドの語学留学で人気の2都市を比較します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* ダブリン */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/10 px-5 py-4">
                <p className="font-black text-lg">🏙️ ダブリン</p>
                <p className="text-sm text-muted">アイルランドの首都・語学留学の中心地</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・語学学校の数・コースの選択肢が最多</li>
                    <li>・Google・Apple・Metaなど大手IT企業のEU本部が集積</li>
                    <li>・交通・インフラが整っており生活しやすい</li>
                    <li>・国際色豊かで多様な文化に触れられる</li>
                    <li>・スマ留の専用学生寮（SMARYU RESIDENCE）あり</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・アイルランド国内では物価・家賃が最も高い</li>
                    <li>・ホームステイの数が不足気味で競争率が高い</li>
                    <li>・留学生が多く日本人に出会う機会もある</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    学校の選択肢を広く持ちたい方・都市の活気を楽しみたい方・ビジネス英語に興味がある方
                  </p>
                </div>
              </div>
            </div>

            {/* コーク */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-accent/10 px-5 py-4">
                <p className="font-black text-lg">🌿 コーク</p>
                <p className="text-sm text-muted">アイルランド第2の都市・落ち着いた環境</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・ダブリンより生活費（特に宿泊費）が安い</li>
                    <li>・ホームステイの週額がダブリン比で約20%安め</li>
                    <li>・コンパクトで歩きやすく、アイリッシュな雰囲気</li>
                    <li>・日本人が非常に少なく英語漬けになりやすい</li>
                    <li>・アイルランドの自然・田舎への観光もしやすい</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・語学学校の選択肢がダブリンより少ない</li>
                    <li>・都市の規模が小さく娯楽は限られる</li>
                    <li>・ダブリンへのアクセスはバス・電車で約2〜3時間</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    英語に集中したい方・費用を抑えたい方・アイルランドの文化を深く体験したい方
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* その他の都市 */}
          <div className="mt-6 p-5 bg-soft rounded-2xl border border-border">
            <p className="font-bold mb-3">その他の都市</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-bold">🌊 ゴールウェイ</p>
                <p className="text-muted">西海岸に位置するアイルランドの文化が色濃い都市。アイルランド語（ゲール語）の話者も多く、伝統音楽や文化を深く体験できる。語学学校の数は少なめ。</p>
              </div>
              <div>
                <p className="font-bold">🏖️ リムリック</p>
                <p className="text-muted">アイルランド中部の都市。ダブリン・コークより規模は小さいが、費用を抑えやすく落ち着いた環境で勉強できる。語学学校の選択肢は限られる。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アイルランド留学の特徴 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">アイルランド留学の4つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">① EU唯一の英語圏で英語を学べる</p>
              <p className="text-sm text-muted leading-relaxed">
                イギリスのEU離脱（Brexit）以降、アイルランドはEU加盟国の中で唯一英語を公用語とする国になりました。
                Google・Apple・Meta・Twitterなど世界的なIT企業がダブリンにEUの本部を置いており、
                ビジネス英語の観点からも注目が集まっています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">② 日本人が少なく英語漬けになりやすい</p>
              <p className="text-sm text-muted leading-relaxed">
                オーストラリアやカナダに比べると、アイルランドへの日本人留学生数はまだ少ない傾向があります。
                そのため「日本語を話す機会が少ない＝英語を使わざるを得ない環境」が自然と生まれ、
                短期間での英語力向上を目指す人に向いています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">③ フレンドリーな国民性・親日感情が高い</p>
              <p className="text-sm text-muted leading-relaxed">
                アイルランド人は「世界で最もフレンドリーな人々のひとつ」とよく言われます。
                パブ文化を中心にローカルの人々との交流機会も多く、英語を使いながら自然に
                アイリッシュカルチャーに溶け込んでいけます。治安も比較的良好です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">④ ワーキングホリデーとの組み合わせが可能</p>
              <p className="text-sm text-muted leading-relaxed">
                日本人はアイルランドのワーキングホリデービザを取得可能（18〜30歳、最長1年）。
                語学留学後にワーホリへ切り替えて働きながら滞在費を補うルートもあります。
                IT企業が多いダブリンではカフェ・ホスピタリティ系の仕事から
                IT関連の仕事まで幅広い就業機会があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            アイルランド留学が向いている人・向いていない人
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-700 mb-3">✅ 向いている人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>🌍 EU圏で英語を学びたい</li>
                <li>🗣️ 日本人が少ない環境で英語漬けになりたい</li>
                <li>💼 ビジネス英語・グローバルキャリアに関心がある</li>
                <li>🍀 アイリッシュ文化・パブ文化を体験したい</li>
                <li>⬆️ 語学留学後にワーホリへ移行したい</li>
                <li>✈️ ヨーロッパ各国も旅行したい</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-700 mb-3">❌ 向いていない人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>💰 費用をとにかく抑えたい人（フィリピン比較）</li>
                <li>✈️ 直行便で気軽に行きたい人（経由便のみ）</li>
                <li>☀️ 温暖な気候を求める人（雨が多く曇りがち）</li>
                <li>🏙️ 大都市の活気・選択肢を求める人</li>
                <li>🇦🇺 南半球でのんびり過ごしたい人</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">アイルランド留学におすすめのエージェント</h2>
          <p className="text-muted text-sm mb-6">
            ダブリンはホームステイの競争率が高めです。早めにエージェントに相談して滞在先を確保しましょう。
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
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。ホームステイ手配も含め安心のサポート。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 実績・社会人向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。社会人留学やワーホリとの組み合わせにも対応。</p>
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
              href="/ryugaku-uk"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇬🇧</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                イギリス語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">同じ島国・英語圏のイギリスと比較</p>
            </Link>
            <Link
              href="/ryugaku-australia"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇦🇺</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                オーストラリア語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">日本人に人気の定番英語圏留学先</p>
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
              <p className="text-xs text-muted">アイルランド対応エージェントをまとめて比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
