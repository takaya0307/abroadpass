import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "オーストラリアワーキングホリデー完全ガイド【2026年】費用・ビザ・仕事・都市比較 | Abroad Pass",
  description:
    "オーストラリアワーホリのビザ申請・費用・仕事・最低賃金・セカンドビザ条件・おすすめ都市をまとめて解説。2026年最新情報をもとに、渡航前に知っておくべきことをすべて網羅しました。",
  openGraph: {
    title: "オーストラリアワーキングホリデー完全ガイド【2026年】",
    description:
      "ビザ費用・生活費・最低賃金・セカンドワーホリ条件・シドニー vs メルボルンの都市比較まで。オーストラリアワーホリの全情報をまとめました。",
  },
};

const faqData = [
  {
    question: "オーストラリアワーホリのビザ申請はいつからできますか？",
    answer:
      "18歳以上30歳以下であれば申請できます（申請時点での年齢）。ビザはオンラインで申請でき、通常数日〜数週間で許可が下ります。入国は許可から1年以内に行う必要があります。エージェントを利用すれば申請手続きをサポートしてもらえます。",
  },
  {
    question: "オーストラリアワーホリの最低賃金はいくらですか？",
    answer:
      "2025年7月〜の最低賃金はAUD24.95/時（週38時間で月収AUD3,792程度）です。日本円換算で時給約2,500円、月収約38万円（1AUD=100円換算）が目安です。ただし为替レートにより変動します。農業・工場などの仕事は最低賃金またはそれ以上が一般的です。",
  },
  {
    question: "セカンドワーキングホリデービザの条件は何ですか？",
    answer:
      "ファーストビザ中に、指定地域（地方・農村部など）での特定業務（農業・林業・漁業・建設・牧場など）を88日間（約3ヶ月）行うことが条件です。雇用主からの証明書類が必要です。3年目（サードビザ）はさらに6ヶ月の指定業務が必要です。",
  },
  {
    question: "シドニーとメルボルンどちらがワーホリにおすすめですか？",
    answer:
      "仕事の多さと都市の活気を求めるなら「シドニー」、カフェ文化・アートシーン・住みやすさなら「メルボルン」が人気です。どちらも日本人コミュニティが豊富で仕事も見つかりやすいです。英語漬けになりたい場合は日本人の少ないパースやブリスベンもおすすめです。",
  },
  {
    question: "エージェントなしでオーストラリアワーホリは申請できますか？",
    answer:
      "ビザ申請自体は自分でもできます。ただし、語学学校の選定・住居探し・仕事探し・渡航後のトラブル対応などを全て自力でこなす必要があります。英語に自信がある方は自力でも問題ありませんが、初めての海外長期滞在の場合はエージェントを使う方が安心です。無料で利用できるので相談だけでもおすすめです。",
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

const cities = [
  {
    name: "シドニー",
    flag: "🌉",
    tag: "仕事の多さNo.1",
    tagColor: "bg-blue-100 text-blue-700",
    pros: ["求人数が最多・仕事が見つかりやすい", "日本語サポートも豊富で安心", "観光・文化・ビーチが揃う"],
    cons: ["生活費が高め（家賃月10〜15万円）", "日本人が多く英語が伸びにくい場合も"],
    best: "初めてのワーホリ・仕事を早く見つけたい人",
  },
  {
    name: "メルボルン",
    flag: "☕",
    tag: "住みやすさ人気No.1",
    tagColor: "bg-green-100 text-green-700",
    pros: ["カフェ・グルメ・アートが充実", "住みやすい街並みで生活満足度が高い", "IT・クリエイティブ系の仕事も多い"],
    cons: ["天気が変わりやすい（1日4シーズン）", "シドニーと同様に物価は高め"],
    best: "長期滞在・生活の質を重視する人",
  },
  {
    name: "ブリスベン",
    flag: "☀️",
    tag: "温暖な気候・コスパ良",
    tagColor: "bg-yellow-100 text-yellow-700",
    pros: ["1年中温暖な気候", "シドニーより物価が安め", "2032年五輪開催地で発展中"],
    cons: ["シドニー・メルボルンより求人がやや少ない", "規模感は2都市より小さい"],
    best: "物価を抑えてのんびり過ごしたい人",
  },
  {
    name: "パース",
    flag: "🌅",
    tag: "日本人少なく英語漬け",
    tagColor: "bg-purple-100 text-purple-700",
    pros: ["日本人が少なく英語力が伸びやすい", "日本から最も近いオーストラリアの主要都市", "自然・ビーチ・のんびりした雰囲気"],
    cons: ["他都市と比べ求人が少ない", "孤立感を感じる場合も"],
    best: "英語力をとにかく伸ばしたい人",
  },
];

const costs = [
  { item: "ビザ申請費", amount: "約6〜7万円", note: "AUD 670（レートにより変動。2025年7月改定）" },
  { item: "航空券", amount: "10〜15万円", note: "時期・航空会社により変動" },
  { item: "海外旅行保険（1年）", amount: "15〜30万円", note: "ワーホリは長期加入が必要" },
  { item: "渡航初期費用", amount: "5〜10万円", note: "SIM・日用品・最初の宿泊等" },
  { item: "語学学校（1〜3ヶ月）", amount: "15〜40万円", note: "任意。英語力に自信がある場合は不要" },
  { item: "生活費（月額・シドニー）", amount: "20〜30万円", note: "家賃・食費・交通費・娯楽含む" },
  { item: "生活費（月額・地方）", amount: "12〜20万円", note: "地方は家賃が安く節約しやすい" },
];

export default function WahoAustraliaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">🇦🇺 ワーホリ オーストラリア</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            オーストラリア<br />
            <span className="text-primary">ワーキングホリデー完全ガイド</span>
            <span className="text-lg md:text-2xl font-bold text-muted ml-2">【2026年】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            日本人に最も人気のワーホリ先・オーストラリア。
            高い最低賃金・充実した仕事環境・最大3年滞在できる延長制度など、
            ワーホリ先として魅力が豊富です。ビザ・費用・仕事・都市選びまで、渡航前に必要な情報をすべて解説します。
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "申請年齢", value: "18〜30歳", icon: "🎂" },
              { label: "滞在期間", value: "最長3年", icon: "📅" },
              { label: "ビザ費用", value: "約6〜7万円", icon: "💳" },
              { label: "最低賃金", value: "約2,500円/時", icon: "💰" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-border p-4 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <p className="text-xs text-muted mb-0.5">{stat.label}</p>
                <p className="font-bold text-sm text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ビザ基本情報 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に確認すること">
            ビザの基本情報
          </SectionHeading>
          <div className="bg-soft rounded-2xl border border-border p-6 mb-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  { label: "ビザ種別", value: "ワーキングホリデービザ（サブクラス417）" },
                  { label: "対象年齢", value: "18歳〜30歳（申請時）" },
                  { label: "滞在期間", value: "1回のビザで最長12ヶ月" },
                  { label: "延長", value: "条件を満たせばセカンド・サードビザで最長3年" },
                  { label: "就労制限", value: "同一雇用主での就労は最長6ヶ月（農業等の地方業務は除く）" },
                  { label: "就学制限", value: "同一学校での就学は最長4ヶ月" },
                  { label: "ビザ申請費", value: "AUD 670（約6〜7万円 ※レートにより変動。2025年7月改定）" },
                  { label: "申請方法", value: "オンライン申請のみ（ImmiAccountから）" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-bold text-foreground w-32 shrink-0">{row.label}</td>
                    <td className="py-3 text-muted leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-800">
            <p className="font-bold mb-1">⚠️ ビザ費用・条件は変更される場合があります</p>
            <p className="leading-relaxed">申請前に必ず<a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="underline font-bold">オーストラリア内務省公式サイト</a>で最新情報を確認してください。エージェントを利用すれば最新の申請手順をサポートしてもらえます。</p>
          </div>
        </div>
      </section>

      {/* セカンド・サードビザ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="最長3年滞在できる仕組み">
            セカンド・サードワーホリの条件
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            オーストラリアワーホリ最大の魅力のひとつが<span className="font-bold text-foreground">最長3年の滞在が可能</span>なこと。
            条件を満たすことでビザを延長できます。
          </p>
          <div className="space-y-4">
            {[
              {
                title: "セカンドビザ（2年目）",
                color: "border-primary/30 bg-primary/5",
                badgeColor: "bg-primary text-white",
                condition: "ファーストビザ期間中に、指定地域での特定業務を88日間（約3ヶ月）行うこと",
                works: ["農業・果物の収穫", "林業・漁業・牧場", "農村部での建設・鉱業", "指定地域での看護・医療"],
                note: "雇用主からの就労証明書（Form 1263）が必要です",
              },
              {
                title: "サードビザ（3年目）",
                color: "border-accent/30 bg-accent/5",
                badgeColor: "bg-accent text-white",
                condition: "セカンドビザ期間中に、指定地域での特定業務をさらに6ヶ月間行うこと",
                works: ["セカンドビザと同様の指定業務が対象"],
                note: "3年目はさらに厳しい条件が設定されている場合があります。エージェントへの確認を推奨します",
              },
            ].map((v) => (
              <div key={v.title} className={`rounded-2xl border-2 p-6 ${v.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${v.badgeColor}`}>{v.title}</span>
                </div>
                <p className="text-sm font-bold text-foreground mb-3">条件：{v.condition}</p>
                <p className="text-xs text-muted font-bold mb-2">対象となる主な業務：</p>
                <ul className="space-y-1 mb-3">
                  {v.works.map((w, i) => (
                    <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>{w}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted bg-white/70 rounded-xl p-2.5">📌 {v.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に準備すべき金額">
            費用の目安
          </SectionHeading>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-soft">
                <tr>
                  <th className="text-left p-4 font-bold text-foreground">項目</th>
                  <th className="text-left p-4 font-bold text-foreground">費用目安</th>
                  <th className="text-left p-4 font-bold text-muted text-xs">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {costs.map((row) => (
                  <tr key={row.item} className="bg-white hover:bg-soft/50 transition-colors">
                    <td className="p-4 font-bold text-foreground">{row.item}</td>
                    <td className="p-4 text-primary font-bold">{row.amount}</td>
                    <td className="p-4 text-xs text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-soft rounded-2xl border border-border p-5">
              <p className="font-bold mb-2">💡 渡航前に必要な貯金の目安</p>
              <p className="text-sm text-muted leading-relaxed">
                ビザ・航空券・保険・初期費用を合わせると<span className="font-bold text-foreground">最低50〜70万円</span>は用意しておくのが安心です。
                現地で仕事が見つかるまでの生活費（2〜3ヶ月分）も含めると<span className="font-bold text-foreground">100万円前後</span>を目安にする方が多いです。
              </p>
            </div>
            <div className="bg-soft rounded-2xl border border-border p-5">
              <p className="font-bold mb-2">💰 現地での稼ぎと生活費のバランス</p>
              <p className="text-sm text-muted leading-relaxed">
                最低賃金でフルタイム（週40時間）で働けば月収は約<span className="font-bold text-foreground">AUD3,800（約38万円）</span>。
                シドニーの生活費（月25万円）を差し引いても<span className="font-bold text-foreground">月10〜15万円の余裕</span>ができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 仕事・最低賃金 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="現地での働き方">
            仕事の種類と収入
          </SectionHeading>
          <div className="bg-white rounded-2xl border-2 border-primary/20 p-5 mb-6 text-center">
            <p className="text-sm text-muted mb-1">2024年7月〜の最低賃金</p>
            <p className="text-4xl font-black text-primary">AUD 24.95<span className="text-lg font-bold text-muted">/時</span></p>
            <p className="text-sm text-muted mt-1">日本円換算で約2,500円/時（1AUD≒100円）※レートにより変動。2025年7月改定。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                category: "ホスピタリティ系",
                icon: "☕",
                jobs: ["カフェ・レストランのスタッフ", "ホテルのフロント・ハウスキーピング", "バー・パブのスタッフ"],
                note: "最も求人が多い。英語力がつきやすい。",
                english: "中級〜",
              },
              {
                category: "農業・地方ワーク",
                icon: "🌾",
                jobs: ["果物・野菜の収穫（ピッキング）", "牧場での作業", "農場全般"],
                note: "セカンドビザ条件を満たせる。英語力不要なことも多い。",
                english: "ゼロでもOK",
              },
              {
                category: "小売・サービス系",
                icon: "🛍️",
                jobs: ["スーパー・コンビニのレジ", "アパレルショップ", "観光地での案内業務"],
                note: "接客英語が身につく。シフトの融通が利くことも。",
                english: "初級〜",
              },
              {
                category: "日系企業・日本語活用",
                icon: "🇯🇵",
                jobs: ["日本食レストラン", "日系旅行会社・不動産", "日本人向けサービス業"],
                note: "英語力ゼロでも働けるが英語力は伸びにくい。",
                english: "不問",
              },
              {
                category: "専門職・スキル活用",
                icon: "💻",
                jobs: ["ITエンジニア・デザイナー", "ヘアサロン（美容師）", "フリーランス・リモートワーク"],
                note: "専門スキルがあれば高収入も狙える。",
                english: "上級〜",
              },
              {
                category: "工場・倉庫・清掃",
                icon: "🏭",
                jobs: ["食品工場・梱包作業", "倉庫でのピッキング", "ビルクリーニング"],
                note: "体力仕事だが英語力不問で稼ぎやすい。",
                english: "ゼロでもOK",
              },
            ].map((j) => (
              <div key={j.category} className="bg-white rounded-2xl border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{j.icon}</span>
                  <h3 className="font-bold text-sm">{j.category}</h3>
                  <span className="ml-auto text-xs bg-soft text-muted px-2 py-0.5 rounded-full">英語：{j.english}</span>
                </div>
                <ul className="space-y-1 mb-2">
                  {j.jobs.map((job, i) => (
                    <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                      <span className="text-primary shrink-0 mt-0.5">•</span>{job}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted bg-soft rounded-lg p-2">{j.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 都市比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="どこに住む？">
            主要都市の比較
          </SectionHeading>
          <div className="space-y-4">
            {cities.map((city) => (
              <div key={city.name} className="rounded-2xl border border-border p-5 bg-soft">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{city.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{city.name}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${city.tagColor}`}>{city.tag}</span>
                    </div>
                    <p className="text-xs text-muted mt-0.5">こんな人におすすめ：{city.best}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs font-bold text-green-700 mb-1.5">✓ メリット</p>
                    {city.pros.map((p, i) => (
                      <p key={i} className="text-xs text-muted flex items-start gap-1.5 mb-1">
                        <span className="text-green-500 shrink-0 mt-0.5">●</span>{p}
                      </p>
                    ))}
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs font-bold text-red-600 mb-1.5">✗ デメリット</p>
                    {city.cons.map((c, i) => (
                      <p key={i} className="text-xs text-muted flex items-start gap-1.5 mb-1">
                        <span className="text-red-400 shrink-0 mt-0.5">●</span>{c}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に知っておきたいこと">
            オーストラリアワーホリのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="font-bold text-green-700 mb-3">✓ メリット</p>
              <ul className="space-y-2.5">
                {[
                  "最低賃金が高く、働けば生活費を十分まかなえる",
                  "最長3年（セカンド・サードビザ）滞在できる",
                  "英語圏で英語力が確実に身につく",
                  "仕事の種類が豊富で英語力に関わらず働きやすい",
                  "日本人コミュニティが充実しており初めてでも安心",
                  "農業体験・都市生活・リゾートなど多様なライフスタイルを選べる",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-green-500 shrink-0 mt-0.5 font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="font-bold text-red-600 mb-3">✗ デメリット・注意点</p>
              <ul className="space-y-2.5">
                {[
                  "主要都市（シドニー・メルボルン）は生活費が高い",
                  "日本人が多い環境では英語が伸びにくい場合がある",
                  "セカンドビザのための農業・地方ワークは体力的にきつい",
                  "ビザ申請費がAUD635と安くない",
                  "帰国後の就職活動では説明の仕方を工夫する必要がある",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm">
            <p className="font-bold text-primary mb-1">👤 こんな人にオーストラリアワーホリはおすすめ</p>
            <ul className="space-y-1 text-muted">
              {[
                "英語圏での生活・仕事経験を積みたい",
                "できるだけ長く海外に滞在したい（最長3年）",
                "働きながら生活費を現地で稼ぎたい",
                "農業や自然の中での生活を経験してみたい",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-primary shrink-0 mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* エージェント */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前の無料相談">
            オーストラリアワーホリに強いエージェント
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            ビザ申請・語学学校の選定・仕事探し・現地サポートまで、エージェントを使えば<span className="font-bold text-foreground">すべて無料でサポート</span>してもらえます。
            特に初めてのワーホリの場合、エージェントへの相談が安心への近道です。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "ラストリゾート",
                href: "/lastresort",
                tag: "ワーホリ専門・オーストラリア現地オフィスあり",
                desc: "ワーホリに特化したエージェント。オーストラリアに現地オフィスがあり、渡航後のトラブル対応も日本語でサポート。セカンドビザのための農業ワーク紹介実績も豊富。",
              },
              {
                name: "スマ留",
                href: "/smaru",
                tag: "語学留学→ワーホリのルートにも対応",
                desc: "オーストラリアをはじめ多国に対応。英語力に不安がある場合の語学留学→ワーホリのセットプランも相談可能。渡航前の無料英会話レッスン付き。",
              },
              {
                name: "留学ジャーナル",
                href: "/ryugakujournal",
                tag: "創業50年の安心感・相談実績が豊富",
                desc: "オーストラリアへの留学・ワーホリ実績が豊富。丁寧なカウンセリングで、都市選び・語学学校・仕事探しの計画を一緒に立ててもらえる。",
              },
            ].map((agent) => (
              <Link key={agent.name} href={agent.href} className="flex items-center justify-between p-4 bg-soft rounded-2xl border border-border hover:border-primary transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-sm">{agent.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{agent.tag}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{agent.desc}</p>
                </div>
                <span className="text-primary text-sm font-bold ml-3 shrink-0">詳細 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            Q&A
          </SectionHeading>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-border p-5 group">
                <summary className="font-bold text-sm cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>Q. {faq.question}</span>
                  <span className="text-primary shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-muted leading-relaxed mt-3 pt-3 border-t border-border">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: "/waho-cost", emoji: "💰", title: "ワーホリにかかる費用はいくら？国別まとめ", tag: "費用ガイド" },
              { href: "/waho-eigo", emoji: "🗣️", title: "ワーホリに必要な英語力はどのくらい？", tag: "英語・不安解消" },
              { href: "/ryugaku-australia", emoji: "🇦🇺", title: "オーストラリア語学留学の費用・特徴", tag: "語学留学" },
              { href: "/waho-country", emoji: "🌏", title: "ワーホリおすすめ国ランキング", tag: "国選び" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 p-4 bg-soft rounded-2xl border border-border hover:border-primary transition-colors">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="text-xs text-primary font-bold mb-0.5">{item.tag}</p>
                  <p className="text-sm font-bold leading-snug">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-soft">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-primary font-bold text-sm mb-2">まずは無料相談から</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            オーストラリアワーホリを<br />プロに相談してみる
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            ビザ・費用・仕事・都市選び——不安なことを全部まとめて相談できます。<br />
            相談だけでも完全無料。まず話を聞いてみましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
          </CtaButton>
        </div>
      </section>
    </>
  );
}
