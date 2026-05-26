import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "マルタ語学留学の費用・特徴まとめ【2026年最新】スリエマ・セントジュリアンズ比較",
  description:
    "マルタ語学留学の1ヶ月〜1年の費用目安、スリエマ・セントジュリアンズの違い、ヨーロッパで費用を抑えて英語を学べる理由、ワーホリ制度も解説。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-malta",
  },
};

const faqData = [
  {
    question: "マルタ語学留学の費用はいくらかかりますか？",
    answer:
      "渡航費込みで1ヶ月35〜55万円、3ヶ月90〜160万円が目安です。学費は月15万円前後、滞在費は月10〜15万円が相場です。イギリス（ロンドン）と比べると約60〜70%の費用で留学でき、ヨーロッパの英語圏の中では最もコスパが高い留学先のひとつです。",
  },
  {
    question: "マルタ留学にビザは必要ですか？",
    answer:
      "90日以内の語学留学であれば、日本国籍の方はビザが不要です。マルタはEU加盟国ですが、シェンゲン協定加盟国のため、他のシェンゲン加盟国と合わせて180日間で最大90日間の滞在が可能です。90日を超える場合は別途ビザが必要になります。",
  },
  {
    question: "マルタ英語は聞き取りにくいですか？",
    answer:
      "マルタ人の英語には独特のアクセント（イントネーションが強め）があります。ただし、語学学校の授業は標準的な英語で行われるため、授業中は問題ありません。日常生活でマルタ英語に触れることで、さまざまなアクセントへの対応力も身につきます。",
  },
  {
    question: "マルタのワーキングホリデービザはありますか？",
    answer:
      "はい、2026年よりマルタのワーキングホリデー制度が開始されました。年間発給数は100名と少なく、最長1年間の滞在・就労が可能です。枠が非常に限られているため、希望する方は早めにエージェントへ相談することをおすすめします。",
  },
  {
    question: "マルタとフィリピン、どちらの留学がおすすめですか？",
    answer:
      "目的によって異なります。費用を最優先にするならフィリピン、ヨーロッパの文化に触れながら英語を学びたい・多国籍な環境を求めるならマルタがおすすめです。フィリピンはマンツーマン授業が豊富で短期の英語集中に向き、マルタはグループレッスン中心でヨーロッパ系の留学生と交流できます。",
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

export default function RyugakuMaltaPage() {
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
            <span className="text-2xl">🇲🇹</span>
            <span className="text-primary font-bold text-sm tracking-wide">語学留学ガイド</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            マルタ語学留学の
            <span className="text-primary">費用・特徴まとめ</span>
            【2026年最新】
          </h1>
          <p className="text-muted text-base leading-relaxed">
            地中海に浮かぶ小さな島国マルタは、ヨーロッパの英語圏でありながら
            イギリスより費用を大幅に抑えられる穴場の留学先です。
            費用の目安、人気エリアの違い、気候・治安・ワーホリ制度をまとめました。
          </p>
        </div>
      </section>

      {/* 費用まとめ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">費用の目安（渡航費込み）</h2>
          <p className="text-muted text-sm mb-6">
            語学学校（一般英語コース）＋ホームステイ＋往復航空券を含む総額の目安です。
            夏（6〜9月）はハイシーズンで学費・滞在費ともに高くなる傾向があります。
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
                  <td className="border border-border px-4 py-3 font-bold">2週間</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約25〜40万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費7万＋滞在費8万＋航空券15〜20万</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">1ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約35〜55万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費15万＋滞在費12万＋航空券15〜20万</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">3ヶ月</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約90〜160万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費45万＋滞在費36万＋航空券・保険など</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">半年</td>
                  <td className="border border-border px-4 py-3 text-primary font-bold">約170〜250万円</td>
                  <td className="border border-border px-4 py-3 text-muted">学費90万＋滞在費72万＋航空券・保険など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-accent/10 rounded-xl text-sm text-muted">
            <strong>💡 ポイント：</strong>
            日本からマルタへの直行便はなく、ロンドン・ローマ・フランクフルトなどの経由が一般的。
            往復航空券は約15〜25万円が目安です。ロンドン留学と比べると
            同じ期間でも費用を<strong>約30〜40%</strong>抑えられます。
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
                夏のハイシーズン（6〜9月）は高くなる。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">🏠 滞在費（ホームステイ）</p>
              <p className="text-2xl font-black text-primary mb-1">月10〜15万円</p>
              <p className="text-sm text-muted">
                朝夕食付きホームステイの目安。
                学生寮・シェアハウスはさらに安い場合も。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">✈️ 往復航空券</p>
              <p className="text-2xl font-black text-primary mb-1">15〜25万円</p>
              <p className="text-sm text-muted">
                直行便なし・経由便のみ。ロンドン・ローマ・
                フランクフルト経由が一般的。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold mb-2">📋 ビザ費用</p>
              <p className="text-2xl font-black text-primary mb-1">90日以内は無料</p>
              <p className="text-sm text-muted">
                90日以内の語学留学はビザ不要。
                シェンゲン協定の滞在日数に注意が必要。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* エリア比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            スリエマ vs セントジュリアンズ
          </h2>
          <p className="text-muted text-sm mb-6">
            マルタの語学留学で人気の2エリアを比較します。
            どちらもマルタ本島の北東部に位置し、徒歩や公共バスでの移動も便利です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* スリエマ */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/10 px-5 py-4">
                <p className="font-black text-lg">🛍️ スリエマ（Sliema）</p>
                <p className="text-sm text-muted">洗練された雰囲気・語学学校の集積地</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・語学学校の数が多く選択肢が豊富</li>
                    <li>・大型スーパーやショッピングモールが充実</li>
                    <li>・海沿いのプロムナードが気持ちよく散歩できる</li>
                    <li>・親子留学向けプログラムが充実している学校も</li>
                    <li>・落ち着いた雰囲気で生活しやすい</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・セントジュリアンズより若干静かめ</li>
                    <li>・夜の娯楽はセントジュリアンズほど充実していない</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    落ち着いた環境で学びたい方・家族連れ・学校の選択肢を重視する方
                  </p>
                </div>
              </div>
            </div>

            {/* セントジュリアンズ */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-accent/10 px-5 py-4">
                <p className="font-black text-lg">🎉 セントジュリアンズ（St. Julian's）</p>
                <p className="text-sm text-muted">マルタ最大の繁華街・若い留学生に人気</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-primary mb-1">✅ おすすめポイント</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・マルタ最大の繁華街でショッピング・飲食が充実</li>
                    <li>・海沿いのリゾート感があり観光も楽しめる</li>
                    <li>・映画館・エンターテイメント施設が多い</li>
                    <li>・世界中の留学生が集まり国際的な交流がしやすい</li>
                    <li>・スクールウィズなど多くのエージェントが推薦</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted mb-1">⚠️ 注意点</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・夜は賑やかなため、静かな環境が好きな人には不向き</li>
                    <li>・繁忙期は観光客も多く混雑する</li>
                  </ul>
                </div>
                <div className="bg-soft rounded-xl p-3">
                  <p className="text-xs font-bold mb-1">こんな人におすすめ</p>
                  <p className="text-sm text-muted">
                    アクティブに観光も楽しみたい方・若い世代・多国籍な交流を求める方
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-soft rounded-2xl border border-border">
            <p className="font-bold mb-3">その他のエリア</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-bold">🏛️ バレッタ（Valletta）</p>
                <p className="text-muted">マルタの首都でユネスコ世界遺産の旧市街。歴史的な建造物が多く観光に最適。語学学校はやや少ないが文化的な体験が豊富。</p>
              </div>
              <div>
                <p className="font-bold">🌊 セントポールズベイ（St. Paul's Bay）</p>
                <p className="text-muted">北部の落ち着いた漁村エリア。観光地化が進んでいないため地元の雰囲気を味わえる。スリエマ・セントジュリアンズより静か。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* マルタ留学の特徴 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">マルタ留学の5つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">① ヨーロッパの英語圏でイギリスより費用が安い</p>
              <p className="text-sm text-muted leading-relaxed">
                マルタはイギリスと並ぶヨーロッパの英語圏でありながら、
                ロンドン留学と比べて費用は約60〜70%。同じ期間で大幅にコストを抑えられます。
                「ヨーロッパで英語を学びたいが、ロンドンは高すぎる」という方に選ばれています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">② 年間を通して温暖な地中海性気候</p>
              <p className="text-sm text-muted leading-relaxed">
                マルタは地中海性気候で年間300日以上晴れる温暖な島国です。
                冬でも平均気温12〜15℃前後と過ごしやすく、
                イギリスやアイルランドの曇り・雨がちな気候が苦手な方に特に向いています。
                夏（6〜9月）は30℃を超えることも多く、海水浴も楽しめます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">③ 日本人が少なくヨーロッパ系留学生と交流できる</p>
              <p className="text-sm text-muted leading-relaxed">
                マルタの語学学校にはイタリア・スペイン・フランスなどヨーロッパ各国からの留学生が多く、
                日本人の比率は比較的低い傾向があります。
                多様な国籍の人たちと英語で交流することで、さまざまなアクセントへの対応力と
                グローバルな視野が自然と身につきます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">④ 治安が良く初めての留学でも安心</p>
              <p className="text-sm text-muted leading-relaxed">
                外務省の海外安全情報でも「凶悪犯罪はほとんどない」とされており、
                安心して生活できる国です。島国のため地理的にもコンパクトで、
                公共交通機関でどこにでもアクセスしやすく、初めての海外留学にも向いています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border">
              <p className="font-bold text-primary mb-2">⑤ 2026年よりワーキングホリデー制度が開始</p>
              <p className="text-sm text-muted leading-relaxed">
                2026年から日本・マルタ間のワーキングホリデー制度が始まりました。
                年間100名という非常に少ない発給枠で、最長1年間の滞在・就労が可能。
                語学留学後にワーホリへ切り替えるルートも選択肢に入りました。
                希望する方は早めのエージェント相談をおすすめします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            マルタ留学が向いている人・向いていない人
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="font-bold text-green-700 mb-3">✅ 向いている人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>🌍 ヨーロッパで英語を学びたい</li>
                <li>💰 イギリスより費用を抑えたい</li>
                <li>☀️ 温暖な気候・リゾート感のある環境が好き</li>
                <li>🌏 ヨーロッパ系の多国籍な環境で学びたい</li>
                <li>🛡️ 治安が良く安心な場所を選びたい</li>
                <li>✈️ ヨーロッパ各国へ旅行もしたい</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-bold text-red-700 mb-3">❌ 向いていない人</p>
              <ul className="text-sm space-y-2 text-muted">
                <li>💰 とにかく費用を最小限にしたい人（フィリピン比較）</li>
                <li>📖 マンツーマン授業で集中的に学びたい人</li>
                <li>✈️ 直行便でアクセスしたい人（経由便のみ）</li>
                <li>🏙️ 大都市の活気・多様な選択肢を求める人</li>
                <li>📅 90日超の長期留学を検討している人（ビザ要確認）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">マルタ留学におすすめのエージェント</h2>
          <p className="text-muted text-sm mb-6">
            マルタは経由便が必要なため、エージェントを通じた総合サポートが特に役立ちます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link href="/smaru" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🏠 マルタ特化</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">スマ留</p>
              <p className="text-xs text-muted leading-relaxed">マルタに自社専用学生寮（SMARYU RESIDENCE）を保有。安定した滞在先と最安値保証。</p>
            </Link>
            <Link href="/iss" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🛡️ サポート重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">ISS留学ライフ</p>
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。渡航前から現地まで手厚いサポートで安心。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 実績・社会人向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。欧州留学の豊富なノウハウで安心して任せられる。</p>
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
              href="/ryugaku-ireland"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇮🇪</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                アイルランド語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">EU唯一の英語圏・日本人が少ない人気留学先</p>
            </Link>
            <Link
              href="/ryugaku-uk"
              className="flex flex-col p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🇬🇧</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                イギリス語学留学の費用・特徴まとめ
              </p>
              <p className="text-xs text-muted">マルタと同じ英語圏・費用を比較してみよう</p>
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
              <p className="text-xs text-muted">マルタ対応エージェントをまとめて比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
