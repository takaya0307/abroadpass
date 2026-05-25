import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "イギリス語学留学の費用・特徴まとめ【2026年最新】ロンドン・マンチェスター・ブライトン比較",
  description:
    "イギリス語学留学の1ヶ月〜1年の費用目安、ロンドン・マンチェスター・ブライトンの違い、ビザの種類、向いている人を解説。ブリティッシュイングリッシュを本場で学ぶ魅力も紹介。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-uk",
  },
};

const faqData = [
  {
    question: "イギリス語学留学の費用はいくらかかりますか？",
    answer:
      "渡航費込みで1ヶ月50〜70万円、3ヶ月130〜180万円が目安です（ロンドンベース）。マンチェスターやブライトンならロンドンより20〜30%ほど抑えられます。英語圏の中では費用が高い部類に入るため、費用重視の方はほかの国との比較もおすすめです。",
  },
  {
    question: "イギリス語学留学にビザは必要ですか？",
    answer:
      "6ヶ月以内の語学留学は「短期学生ビザ（Short-term Study Visa）」が必要で、申請費用は約214GBP（約4万円）です。6ヶ月超の場合は「学生ビザ（Student Visa）」が必要となり、約524GBP（約10万円）＋NHS（国民健康保険）費用が別途かかります。",
  },
  {
    question: "ロンドンとマンチェスター、どちらがおすすめですか？",
    answer:
      "学校の選択肢・都市の活気を重視するならロンドン、費用を抑えながら都市生活も楽しみたいならマンチェスターがおすすめです。マンチェスターはロンドンより生活費が20〜30%ほど安く、学校の質も高いため近年人気が上昇しています。",
  },
  {
    question: "イギリス英語とアメリカ英語はどちらが使えますか？",
    answer:
      "どちらも国際的に通じる英語です。ただし発音・語彙・スペルに違いがあります（例：colour/color、lift/elevator）。本場のブリティッシュイングリッシュを身につけたい方にはイギリス留学は最適ですが、TOEICなど日本の試験はアメリカ英語寄りの傾向があります。",
  },
  {
    question: "イギリス留学でワーキングホリデービザは使えますか？",
    answer:
      "はい、日本人はイギリスのYouth Mobility Scheme（ワーキングホリデービザ）を申請できます（18〜30歳、最長2年）。語学学校で学びながら働くことも可能です。ただし毎年発行枠があり、抽選や早めの申請が必要な場合があります。",
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

export default function RyugakuUkPage() {
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
            <span className="text-2xl">🇬🇧</span>
            <span className="text-primary font-bold text-sm tracking-wide">語学留学ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            イギリス語学留学の
            <span className="text-primary">費用・特徴まとめ</span>
            【2026年最新】
          </h1>
          <p className="text-muted text-base leading-relaxed">
            英語の発祥地イギリスで本場のブリティッシュイングリッシュを学ぶ。
            1ヶ月〜1年の費用目安、ロンドン・マンチェスター・ブライトンの違い、
            ビザの種類、向いている人をまとめました。
          </p>
        </div>
      </section>

      {/* 費用まとめ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">費用の目安（渡航費込み）</h2>
          <p className="text-muted text-sm mb-6">
            語学学校（一般英語コース）＋ホームステイ＋往復航空券を含む総額の目安です。
            ロンドンを基準にしていますが、都市や学校により大きく異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border px-4 py-3 text-left font-bold">期間</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">ロンドン目安</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">地方都市目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">2週間</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約25〜45万円</td>
                  <td className="border border-border px-4 py-3 text-muted">約20〜35万円</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">1ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約45〜70万円</td>
                  <td className="border border-border px-4 py-3 text-muted">約35〜55万円</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">3ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約130〜180万円</td>
                  <td className="border border-border px-4 py-3 text-muted">約100〜140万円</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">半年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約220〜300万円</td>
                  <td className="border border-border px-4 py-3 text-muted">約170〜230万円</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">1年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約350〜450万円</td>
                  <td className="border border-border px-4 py-3 text-muted">約280〜360万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-muted">
            <strong>⚠️ 注意：</strong>
            イギリスは英語圏の語学留学先の中でも費用が高い部類です。
            特にロンドンは円安の影響もあり、費用が大幅に増加しています。
            費用を抑えたい場合はマンチェスター・ブライトン・エディンバラなどの地方都市が選択肢になります。
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
              <p className="text-2xl font-black text-primary mb-1">月15〜25万円</p>
              <p className="text-sm text-muted">
                一般英語コース（週20〜25時間）の目安。
                ロンドンの有名校は高め、地方都市は安い傾向。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏠 滞在費（ホームステイ）</p>
              <p className="text-2xl font-black text-primary mb-1">月15〜25万円</p>
              <p className="text-sm text-muted">
                ロンドンのホームステイは特に高め。
                学生寮・シェアハウスに移行すると抑えられる。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">✈️ 往復航空券</p>
              <p className="text-2xl font-black text-primary mb-1">10〜20万円</p>
              <p className="text-sm text-muted">
                日本〜ロンドンの往復。直行便はJAL・BAなど。
                早期予約や経由便で抑えることも可能。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">📋 ビザ費用</p>
              <p className="text-2xl font-black text-primary mb-1">4〜30万円</p>
              <p className="text-sm text-muted">
                6ヶ月以内は短期学生ビザ（約4万円）。
                6ヶ月超は学生ビザ（約10万円）＋NHS費用が必要。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 都市比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">主要都市を比較</h2>
          <p className="text-muted text-sm mb-6">
            イギリスの語学留学で人気の都市の特徴をまとめます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* ロンドン */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/10 px-5 py-4">
                <p className="font-black text-lg">🌆 ロンドン</p>
                <p className="text-sm text-muted">学校数最多・世界最大級の国際都市</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・語学学校の数・コースの選択肢が圧倒的</li>
                    <li>・世界中の文化・エンタメが集結</li>
                    <li>・美術館・博物館など文化施設が充実</li>
                    <li>・EU・ヨーロッパ旅行の拠点にも最適</li>
                    <li>・グローバルな人脈形成に有利</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・英語圏で最も費用がかかる都市のひとつ</li>
                    <li>・地下鉄・交通費も高め</li>
                    <li>・留学生が多く英語漬けになりにくい面も</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* マンチェスター */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-accent/10 px-5 py-4">
                <p className="font-black text-lg">⚽ マンチェスター</p>
                <p className="text-sm text-muted">ロンドンより安く・活気ある第二の都市</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・ロンドンより生活費が20〜30%安い</li>
                    <li>・サッカー・音楽など独自の文化が豊富</li>
                    <li>・語学学校の質も高く、選択肢も十分</li>
                    <li>・ロンドンより日本人が少なく英語環境◎</li>
                    <li>・北イングランド観光の拠点にもなる</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・ロンドンほどの多様な学校の選択肢はない</li>
                    <li>・冬は雨が多く寒い</li>
                    <li>・北部のアクセントが強い話者もいる</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ブライトン・エディンバラ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border p-5">
              <p className="font-black text-base mb-2">🏖️ ブライトン</p>
              <p className="text-sm text-muted leading-relaxed">
                ロンドンから電車で約1時間の海辺のリゾート都市。
                ロンドンより費用を抑えられ、明るく開放的な雰囲気が人気。
                語学学校数も多く、若い留学生に特に支持されています。
                週末にロンドンへ出かけることも気軽にできます。
              </p>
            </div>
            <div className="rounded-2xl border border-border p-5">
              <p className="font-black text-base mb-2">🏰 エディンバラ</p>
              <p className="text-sm text-muted leading-relaxed">
                スコットランドの首都で歴史的な街並みが美しい都市。
                落ち着いた環境で留学したい人に向いており、
                ロンドンと比べて費用は抑えやすい傾向があります。
                スコットランド英語のアクセントに慣れる必要があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* イギリス留学の特徴 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">イギリス留学の4つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">① 英語の発祥地でブリティッシュイングリッシュを学べる</p>
              <p className="text-sm text-muted leading-relaxed">
                イギリスは英語の母国。本場のブリティッシュイングリッシュを身につけたい方にとって
                最高の環境です。BBC英語に代表されるRP（Received Pronunciation）は
                世界で最もエレガントな英語とも言われ、ビジネスの場でも評価が高い傾向があります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">② 教育水準が世界トップクラス</p>
              <p className="text-sm text-muted leading-relaxed">
                イギリスの語学学校はBritish Council（英国文化振興会）の認定制度があり、
                教育の質が保証されています。毎年約60万人の留学生が世界中からイギリスに集まり、
                国際的な環境でさまざまな国籍の人と交流しながら学べます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">③ ヨーロッパ旅行の拠点になる</p>
              <p className="text-sm text-muted leading-relaxed">
                ロンドンからはヨーロッパの主要都市へLCC（格安航空会社）で気軽にアクセスできます。
                留学の週末や長期休暇を使ってフランス・スペイン・イタリアなどを旅するのも
                イギリス留学ならではの魅力のひとつです。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">④ ワーキングホリデービザでの滞在延長も可能</p>
              <p className="text-sm text-muted leading-relaxed">
                日本人はイギリスのYouth Mobility Scheme（ワーキングホリデービザ）を取得可能（18〜30歳、最長2年）。
                語学学校で英語を学んだあとに就労して生活費を補いながら滞在を延長するルートもあります。
                ただし毎年申請枠があるため、早めの準備が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            イギリス留学が向いている人・向いていない人
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-700 mb-3">✅ 向いている人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>🇬🇧 ブリティッシュイングリッシュにこだわりたい</li>
                <li>🎓 教育水準・語学学校の質を重視する</li>
                <li>🌍 ヨーロッパ旅行も楽しみたい</li>
                <li>🏛️ 歴史・文化・アートに興味がある</li>
                <li>💼 ビジネス英語としてイギリス英語を習得したい</li>
                <li>⬆️ ワーホリで長期滞在を考えている</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-700 mb-3">❌ 向いていない人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>💰 費用をできるだけ抑えたい人</li>
                <li>☀️ 晴れた気候・温暖な環境を好む人（雨が多い）</li>
                <li>🌿 自然の中でゆったり過ごしたい人</li>
                <li>📝 TOEIC・TOEFLなどアメリカ英語寄りの試験対策が目的の人</li>
                <li>⏰ 短期間で費用対効果を最大化したい人</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント案内 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            イギリス留学対応のエージェントを探す
          </h2>
          <p className="text-muted text-sm mb-6">
            紹介している5社すべてがイギリスの語学留学に対応しています。
            学校選びやビザ手続きもサポートしてくれるため、まずは無料相談から始めてみましょう。
          </p>
          <Link
            href="/best-3"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            おすすめ留学エージェントを比較する →
          </Link>
          <p className="text-xs text-muted mt-3">
            ※ 複数のエージェントに相談して、都市・学校・費用感を比較することをおすすめします。
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
              <p className="text-xs text-muted">英語圏でコスパの高い人気留学先</p>
            </Link>
            <Link
              href="/ryugaku-canada"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇨🇦</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                カナダ語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">イギリスより費用を抑えやすい英語圏</p>
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
              <p className="text-xs text-muted">イギリス対応エージェントをまとめて比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
