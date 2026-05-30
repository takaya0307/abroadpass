import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "ニュージーランドワーキングホリデー完全ガイド【2026年】ビザ・費用・仕事・都市比較 | Abroad Pass",
  description:
    "ニュージーランドワーホリのビザ申請・費用・最低賃金・農業ワークで最長15ヶ月延長・オークランドvsクライストチャーチの都市比較を解説。年間発給枠なし・ビザ費用ほぼ無料の全情報。【2026年最新】",
  openGraph: {
    title: "ニュージーランドワーキングホリデー完全ガイド【2026年】",
    description:
      "発給枠なし・ビザ費用ほぼ無料・2回目参加も可能（2024年12月〜）。ニュージーランドワーホリの全情報を解説。",
  },
};

const faqData = [
  {
    question: "ニュージーランドワーホリのビザはすぐに取れますか？",
    answer:
      "はい。ニュージーランドのワーホリビザは年間発給枠がなく、抽選制でもありません。オンラインで申請でき、通常数日〜数週間で許可が下ります。アイルランドのような抽選待ちがなく、申請すればほぼ確実にビザを取得できるのが大きなメリットです。",
  },
  {
    question: "ニュージーランドワーホリで最長何ヶ月滞在できますか？",
    answer:
      "通常のビザでは最長12ヶ月（1年）です。ただし、ワーホリ期間中に農業・園芸・ぶどう栽培業で3ヶ月以上働いた場合、最大3ヶ月延長するビザ（申請費NZD800）を取得できます。これにより最長15ヶ月の滞在が可能になります。また2024年12月からは日本人の2回目参加も可能になりました。",
  },
  {
    question: "ニュージーランドの最低賃金はいくらですか？",
    answer:
      "2025年4月〜の最低賃金はNZD23.50/時で、2026年4月からNZD23.95/時に改定されます。日本円換算で時給約2,100〜2,150円（1NZD≒90円）が目安です。フルタイム（週40時間）で働けば月収はNZD3,760〜3,832（約34〜35万円）程度になります。",
  },
  {
    question: "ニュージーランドワーホリは車がないと不便ですか？",
    answer:
      "オークランドやウェリントンなどの都市部では公共交通機関でも生活できます。ただしニュージーランドの醍醐味である自然・絶景スポットへのアクセスには車が便利です。現地で中古車を購入し、旅行しながら各地を転々とする「バンライフ」スタイルも人気です。国際免許証があれば現地で運転できます。",
  },
  {
    question: "ニュージーランドは英語が伸びやすいですか？",
    answer:
      "英語圏の中では発音がクリアで聞き取りやすく、英語学習に適した環境です。オーストラリアと同様に日本人コミュニティはありますが、全体的に日本人の絶対数が少ないため英語漬けになりやすいです。治安も良く、英語に不安があっても生活しやすい環境です。",
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
    name: "オークランド",
    flag: "🌆",
    tag: "仕事の多さ・利便性No.1",
    tagColor: "bg-blue-100 text-blue-700",
    pros: ["NZ最大の都市で求人が最も多い", "アジア系コミュニティが豊富で生活しやすい", "国際空港があり旅行の拠点に便利"],
    cons: ["NZで最も物価・家賃が高い", "日本人・アジア人が多く英語が伸びにくい場合も"],
    best: "仕事を最優先・初めてのワーホリで安心感を求める人",
  },
  {
    name: "ウェリントン",
    flag: "🎭",
    tag: "首都・コンパクトで住みやすい",
    tagColor: "bg-green-100 text-green-700",
    pros: ["コンパクトで徒歩で移動しやすい", "カフェ文化・アート・グルメが充実", "NZらしい自然と都市が共存"],
    cons: ["オークランドより求人が少ない", "風が強い（Windy Wellington）"],
    best: "都市生活と自然を両立したい人",
  },
  {
    name: "クライストチャーチ",
    flag: "🌿",
    tag: "南島の拠点・自然へのアクセス◎",
    tagColor: "bg-yellow-100 text-yellow-700",
    pros: ["南島の絶景（フィヨルド・山・氷河）への拠点", "オークランドより物価が安め", "のんびりした雰囲気"],
    cons: ["求人はオークランドより少ない", "2011年地震後の復興中エリアも一部残る"],
    best: "ニュージーランドの自然を思い切り楽しみたい人",
  },
  {
    name: "クイーンズタウン",
    flag: "⛷️",
    tag: "リゾート・アドベンチャーの聖地",
    tagColor: "bg-purple-100 text-purple-700",
    pros: ["バンジー・スカイダイビングなどアクティビティ天国", "スキー・スノーボードシーズンに仕事が増える", "世界中からの観光客と出会える"],
    cons: ["小さな街で求人の幅が狭い", "リゾート地のため物価が高め"],
    best: "アウトドア・リゾート好き・スキー好きな人",
  },
];

const costs = [
  { item: "ビザ申請費", amount: "NZD 35（約3,200円）", note: "IVL（観光税）のみ。ビザ申請手数料は無料", highlight: true },
  { item: "航空券", amount: "10〜15万円", note: "直行便はなく経由が基本。時期・航空会社により変動" },
  { item: "海外旅行保険（1年）", amount: "15〜30万円", note: "ワーホリは長期加入が必要。渡航前に手配を" },
  { item: "渡航初期費用", amount: "5〜10万円", note: "SIM・日用品・最初の宿泊等" },
  { item: "語学学校（任意・1〜3ヶ月）", amount: "15〜40万円", note: "任意。英語力に自信がある場合は不要" },
  { item: "生活費（月額・オークランド）", amount: "18〜25万円", note: "家賃・食費・交通費・娯楽含む" },
  { item: "生活費（月額・地方都市）", amount: "13〜20万円", note: "クライストチャーチ・ウェリントン等" },
  { item: "渡航前の必要資金（条件）", amount: "NZD4,200（約38万円）以上", note: "ビザ申請条件として必要な残高証明" },
];

export default function WahoNewzealandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">🇳🇿 ワーホリ ニュージーランド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ニュージーランド<br />
            <span className="text-primary">ワーキングホリデー完全ガイド</span>
            <span className="text-lg md:text-2xl font-bold text-muted ml-2">【2026年】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            「抽選なし・枠なし・ビザ費用ほぼ無料」——取得のしやすさで際立つニュージーランドワーホリ。
            豊かな自然・治安の良さ・高い最低賃金に加え、2024年12月から2回目参加も可能になりました。
            ビザ・費用・仕事・都市選びまで、渡航前に必要な情報をすべて解説します。
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "申請年齢", value: "18〜30歳", icon: "🎂" },
              { label: "滞在期間", value: "最長15ヶ月", icon: "📅" },
              { label: "ビザ費用", value: "NZD35のみ", icon: "🎁" },
              { label: "最低賃金", value: "約2,100〜2,150円/時", icon: "💰" },
            ].map((stat) => (
              <div key={stat.label} className={`bg-white rounded-2xl border p-4 text-center ${stat.label === "ビザ費用" ? "border-accent/40 bg-accent/5" : "border-border"}`}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <p className="text-xs text-muted mb-0.5">{stat.label}</p>
                <p className={`font-bold text-sm ${stat.label === "ビザ費用" ? "text-accent" : "text-foreground"}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NZの強み */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <p className="font-bold text-primary mb-3">🥝 ニュージーランドワーホリが選ばれる理由</p>
            <div className="space-y-3">
              {[
                { icon: "🚫", title: "抽選なし・発給枠なし", desc: "アイルランド（年800名）と異なり、条件を満たせば誰でも申請できます。申請後数日〜数週間で取得可能です。" },
                { icon: "🆓", title: "ビザ費用がほぼ無料", desc: "申請手数料は無料。IVL（観光税）のNZD35（約3,200円）のみ。オーストラリア（約6〜7万円）と比べて圧倒的に安い。" },
                { icon: "🔄", title: "2回目参加が可能（2024年12月〜）", desc: "外務省の制度改定により、2024年12月1日から日本人のNZワーホリ2回目参加が可能になりました。" },
                { icon: "⏳", title: "農業ワークで最長15ヶ月に延長", desc: "農業・園芸・ぶどう栽培業で3ヶ月以上働くと、3ヶ月の延長ビザを申請できます（費用NZD800）。" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ビザ基本情報 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に確認すること">
            ビザの基本情報
          </SectionHeading>
          <div className="bg-white rounded-2xl border border-border p-6 mb-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  { label: "対象年齢", value: "18歳〜30歳（申請時）" },
                  { label: "滞在期間", value: "最長12ヶ月。農業ワーク3ヶ月で最長15ヶ月に延長可能" },
                  { label: "年間発給枠", value: "なし（上限なし）" },
                  { label: "申請方式", value: "オンライン申請（NZ移民局公式サイトから）" },
                  { label: "ビザ申請費", value: "無料（IVL観光税 NZD35のみ）" },
                  { label: "必要資金", value: "NZD4,200（約38万円）以上の残高証明" },
                  { label: "就労制限", value: "同一雇用主での就労は最長3ヶ月" },
                  { label: "就学制限", value: "最長6ヶ月" },
                  { label: "2回目参加", value: "2024年12月1日より可能（日本人）" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-bold text-foreground w-32 shrink-0">{row.label}</td>
                    <td className="py-3 text-muted leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 延長ビザの説明 */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <p className="font-bold mb-3">🌾 農業ワークで最長15ヶ月に延長する方法</p>
            <div className="space-y-2 mb-4">
              {[
                "ワーホリ期間中（12ヶ月以内）に農業・園芸・ぶどう栽培業で3ヶ月以上働く",
                "雇用主から就労証明書を発行してもらう",
                "Working Holiday Extension Work Visaを申請（費用：NZD800、約7.2万円）",
                "承認されれば最大3ヶ月延長（合計最長15ヶ月の滞在が可能）",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xs font-bold bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted p-3 bg-amber-50 border border-amber-200 rounded-xl">
              ⚠️ 延長ビザの条件・費用は変更される場合があります。最新情報は<a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="underline font-bold">ニュージーランド移民局公式サイト</a>でご確認ください。
            </p>
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
                  <tr key={row.item} className={row.highlight ? "bg-accent/5" : "bg-white hover:bg-soft/50 transition-colors"}>
                    <td className="p-4 font-bold text-foreground">{row.item}</td>
                    <td className={`p-4 font-bold ${row.highlight ? "text-accent" : "text-primary"}`}>{row.amount}</td>
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
                航空券・保険・初期費用に加え、ビザ条件の<span className="font-bold text-foreground">NZD4,200（約38万円）</span>以上が必要。
                現地で仕事が決まるまでの生活費も含め<span className="font-bold text-foreground">80〜100万円</span>を準備する方が多いです。
              </p>
            </div>
            <div className="bg-soft rounded-2xl border border-border p-5">
              <p className="font-bold mb-2">💰 現地での収支バランス</p>
              <p className="text-sm text-muted leading-relaxed">
                最低賃金でフルタイム（週40時間）で働けば月収は約<span className="font-bold text-foreground">NZD3,760（約34万円）</span>。
                オークランドの生活費（月18〜25万円）を差し引いても<span className="font-bold text-foreground">月9〜16万円の余裕</span>が生まれます。
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
            <p className="text-sm text-muted mb-1">最低賃金（2025年4月〜 / 2026年4月からNZD23.95/時に改定）</p>
            <p className="text-4xl font-black text-primary">NZD 23.50<span className="text-lg font-bold text-muted">/時</span></p>
            <p className="text-sm text-muted mt-1">日本円換算で約2,115円/時（1NZD≒90円）※レートにより変動</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                category: "ホスピタリティ系",
                icon: "☕",
                jobs: ["カフェ・レストランのスタッフ", "ホテルのフロント・ハウスキーピング", "バー・パブのスタッフ"],
                note: "最も求人が多い。NZのカフェ文化は世界的にも有名。",
                english: "初級〜",
              },
              {
                category: "農業・園芸（延長ビザ対象）",
                icon: "🍇",
                jobs: ["果物・野菜の収穫（ピッキング）", "ぶどう園（ワイン産地が多い）", "農場全般・パッキング"],
                note: "3ヶ月以上働くと延長ビザ（最長15ヶ月）申請の条件を満たせる。住み込みで節約できる場合も。",
                english: "ゼロでもOK",
              },
              {
                category: "小売・サービス",
                icon: "🛍️",
                jobs: ["スーパー・コンビニのレジ", "アパレルショップ", "観光地での案内・ショップ"],
                note: "都市部での求人が多い。接客英語が身につく。",
                english: "初級〜",
              },
              {
                category: "観光・アクティビティ",
                icon: "🏔️",
                jobs: ["スキーリゾートのスタッフ", "アドベンチャーツアーのスタッフ", "宿泊施設・YHA等"],
                note: "クイーンズタウン等のリゾートエリアに集中。シーズン性があるが体験が豊か。",
                english: "初級〜",
              },
              {
                category: "日系企業・日本語活用",
                icon: "🇯🇵",
                jobs: ["日本食レストラン", "日系旅行会社", "通訳・翻訳サポート"],
                note: "英語力ゼロでも働けるが数が限られる。英語力は伸びにくい。",
                english: "不問",
              },
              {
                category: "IT・専門職",
                icon: "💻",
                jobs: ["ITサポート・エンジニア", "マーケティング", "フリーランス・リモートワーク"],
                note: "英語力とスキルがあれば高収入も。オークランドでの求人が中心。",
                english: "上級〜",
              },
            ].map((j) => (
              <div key={j.category} className="bg-white rounded-2xl border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{j.icon}</span>
                  <h3 className="font-bold text-sm">{j.category}</h3>
                  <span className="ml-auto text-xs bg-soft text-muted px-2 py-0.5 rounded-full shrink-0">英語：{j.english}</span>
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
            ニュージーランドワーホリのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="font-bold text-green-700 mb-3">✓ メリット</p>
              <ul className="space-y-2.5">
                {[
                  "抽選なし・発給枠なし・ビザ費用ほぼ無料",
                  "農業ワーク3ヶ月で最長15ヶ月に延長可能",
                  "2024年12月〜2回目の参加が可能に",
                  "治安が良く、女性一人でも安心",
                  "雄大な自然・絶景スポットが豊富",
                  "英語が聞き取りやすく英語力が伸びやすい環境",
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
                  "オーストラリアより最低賃金がやや低い",
                  "同一雇用主での就労は最長3ヶ月",
                  "オークランドは物価・家賃が高い",
                  "地方は車がないと不便な場合が多い",
                  "直行便がなく渡航に時間がかかる",
                  "都市部以外は求人が限られる",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm">
            <p className="font-bold text-primary mb-1">👤 こんな人にニュージーランドワーホリはおすすめ</p>
            <ul className="space-y-1 text-muted">
              {[
                "抽選なしで確実にビザを取得したい",
                "自然・アウトドアを楽しみながら働きたい",
                "治安の良い環境で安心して生活したい",
                "農業ワークを経験しながら長期滞在したい",
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
            ニュージーランドワーホリに強いエージェント
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            ビザ申請・語学学校の選定・農業ワークのある仕事探し・現地サポートまで、
            エージェントを使えば<span className="font-bold text-foreground">すべて無料でサポート</span>してもらえます。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "ラストリゾート",
                href: "/lastresort",
                tag: "ワーホリ専門・NZ対応実績豊富",
                desc: "ワーホリ専門エージェント。NZのビザ申請から現地サポートまで対応。農業ワークを使った延長ビザの申請サポートも相談可能。",
              },
              {
                name: "スマ留",
                href: "/smaru",
                tag: "語学留学→ワーホリのルートにも対応",
                desc: "NZをはじめ多国に対応。英語力に不安がある場合の語学留学→ワーホリのセットプランも相談可能。渡航前の無料英会話レッスン付き。",
              },
              {
                name: "留学ジャーナル",
                href: "/ryugakujournal",
                tag: "創業50年・NZ相談実績が豊富",
                desc: "NZへの語学留学・ワーホリの実績が豊富。都市選び・語学学校・仕事探しの計画を丁寧に一緒に立ててもらえる。",
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
              { href: "/ryugaku-newzealand", emoji: "🇳🇿", title: "ニュージーランド語学留学の費用・特徴まとめ", tag: "語学留学" },
              { href: "/waho-australia", emoji: "🇦🇺", title: "オーストラリアワーホリ完全ガイド", tag: "ワーホリ国別" },
              { href: "/waho-cost", emoji: "💰", title: "ワーホリにかかる費用はいくら？国別まとめ", tag: "費用ガイド" },
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
            ニュージーランドワーホリを<br />プロに相談してみる
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            ビザ・費用・仕事・都市選び——不安なことをまとめて相談できます。<br />
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
