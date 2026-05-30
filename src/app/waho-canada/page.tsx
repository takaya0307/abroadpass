import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "カナダワーキングホリデー完全ガイド【2026年】費用・ビザ・仕事・都市比較 | Abroad Pass",
  description:
    "カナダワーホリのビザ（IEC）申請・費用・最低賃金・バンクーバーvsトロントの都市比較を解説。2025年4月から生涯2回取得可能になったカナダワーホリの全情報をまとめました。【2026年最新】",
  openGraph: {
    title: "カナダワーキングホリデー完全ガイド【2026年】",
    description:
      "2025年4月から生涯2回取得可能になったカナダワーホリ。IECビザの申請方法・費用・バンクーバー vs トロントの都市比較・最低賃金まで徹底解説。",
  },
};

const faqData = [
  {
    question: "カナダワーホリのビザはいつでも申請できますか？",
    answer:
      "カナダのワーホリビザ（IEC）はプール制を採用しており、申請後に招待（ITA）を待つ仕組みです。毎年1〜2月頃にシーズンが開始し、プールに登録後に招待状が届いたらビザ申請に進みます。人気のため招待状が来るまで数週間〜数ヶ月かかる場合があります。エージェントを使うと手続きのサポートを受けられます。",
  },
  {
    question: "カナダワーホリは何年滞在できますか？",
    answer:
      "1回のビザは最長12ヶ月（1年）です。ただし2025年4月1日から日本人は生涯2回までワーホリビザを取得できるようになり、合計で最長2年間カナダに滞在することが可能になりました。2回目のビザ取得にオーストラリアのような農業ワーク等の条件はありません。年間の定員枠（2025年は1回目・2回目合計6,500名）があるため早めの申請準備が重要です。",
  },
  {
    question: "カナダワーホリの最低賃金はいくらですか？",
    answer:
      "最低賃金は州によって異なります。バンクーバーのあるブリティッシュコロンビア州はCAD17.85/時（2025年6月〜）、トロントのあるオンタリオ州はCAD17.60/時（2025年10月〜）が目安です。日本円換算で時給約1,800〜1,900円（1CAD≒105円）ですが、チップ文化があるホスピタリティ業界では実質収入がさらに増えます。",
  },
  {
    question: "バンクーバーとトロント、どちらがおすすめですか？",
    answer:
      "気候・自然・住みやすさを重視するなら「バンクーバー」、仕事の多さ・都市の規模・多文化な環境を求めるなら「トロント」がおすすめです。バンクーバーは日本人が多く初めてのワーホリに安心感があります。トロントはカナダ最大の都市で求人が豊富です。どちらも英語が公用語ですが、モントリオールはフランス語が主体の独特な都市です。",
  },
  {
    question: "カナダワーホリに英語力はどのくらい必要ですか？",
    answer:
      "英語力の基準はありませんが、現地で働きながら生活するには日常会話レベル（TOEIC500〜600程度）があると選択肢が広がります。最初は日系レストランや日本人向けサービス業からスタートし、徐々に英語を使う仕事へステップアップする方も多いです。渡航前に語学学校でスピーキングを集中的に学ぶ方法もおすすめです。",
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
    name: "バンクーバー",
    flag: "🌲",
    tag: "日本人に人気No.1",
    tagColor: "bg-blue-100 text-blue-700",
    pros: ["温暖な気候（カナダで最も暖かい）", "自然・山・海が近く生活が充実", "日本人コミュニティが豊富で初めてでも安心"],
    cons: ["カナダで最も物価・家賃が高い", "日本人が多く英語が伸びにくい場合も"],
    best: "初めてのワーホリ・自然好き・住みやすさ重視の人",
  },
  {
    name: "トロント",
    flag: "🏙️",
    tag: "仕事の多さ・規模感No.1",
    tagColor: "bg-green-100 text-green-700",
    pros: ["カナダ最大の都市で求人が豊富", "多文化・多国籍で英語が伸びやすい", "エンタメ・グルメ・文化施設が充実"],
    cons: ["冬が厳しく寒い（−20℃になることも）", "物価は高め"],
    best: "仕事を重視・都市生活を楽しみたい人",
  },
  {
    name: "モントリオール",
    flag: "⚜️",
    tag: "ヨーロッパの雰囲気・物価安め",
    tagColor: "bg-purple-100 text-purple-700",
    pros: ["他都市より家賃・物価が安い", "フランス文化が混ざった独特の雰囲気", "アートシーン・音楽・グルメが豊か"],
    cons: ["フランス語が主体で英語だけでは不便な場面も", "冬はカナダ屈指の厳しさ"],
    best: "物価を抑えたい・ユニークな文化体験をしたい人",
  },
  {
    name: "カルガリー",
    flag: "🏔️",
    tag: "ロッキー山脈の玄関口",
    tagColor: "bg-yellow-100 text-yellow-700",
    pros: ["ロッキー山脈・バンフが近く大自然を満喫", "州税なしでコスパが良い", "日本人が少なく英語漬けになれる"],
    cons: ["求人がバンクーバー・トロントより少ない", "冬の寒さが厳しい"],
    best: "大自然・アウトドアが好き・英語力を伸ばしたい人",
  },
];

const costs = [
  { item: "ビザ申請費（IEC）", amount: "約3.9万円", note: "CAD 369.75（IEC参加費 CAD184.75 + オープンワーパミット CAD100 + バイオメトリクス CAD85）" },
  { item: "航空券", amount: "10〜18万円", note: "時期・航空会社・直行便 or 乗継により変動" },
  { item: "海外旅行保険（2年）", amount: "25〜45万円", note: "2年間の長期加入が必要。渡航前に必ず手配を" },
  { item: "渡航初期費用", amount: "5〜10万円", note: "SIM・日用品・最初の宿泊等" },
  { item: "語学学校（任意・1〜3ヶ月）", amount: "20〜50万円", note: "カナダの語学学校は欧米水準で高め" },
  { item: "生活費（月額・バンクーバー）", amount: "22〜32万円", note: "家賃・食費・交通費・娯楽含む" },
  { item: "生活費（月額・トロント）", amount: "20〜30万円", note: "バンクーバーと同水準" },
  { item: "生活費（月額・モントリオール）", amount: "15〜23万円", note: "主要3都市で最も安め" },
];

export default function WahoCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">🇨🇦 ワーホリ カナダ</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            カナダ<br />
            <span className="text-primary">ワーキングホリデー完全ガイド</span>
            <span className="text-lg md:text-2xl font-bold text-muted ml-2">【2026年】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            「2025年4月から生涯2回取得可能になった」「チップで収入が増える」「多文化な環境で英語が伸びる」——
            カナダはオーストラリアと並ぶ日本人に人気のワーホリ先です。
            IECビザの仕組み・費用・都市の選び方まで、渡航前に必要な情報をすべて解説します。
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "申請年齢", value: "18〜30歳", icon: "🎂" },
              { label: "滞在期間", value: "1年×生涯2回", icon: "📅" },
              { label: "ビザ費用", value: "約3.9万円", icon: "💳" },
              { label: "最低賃金", value: "約1,800〜1,900円/時", icon: "💰" },
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

      {/* オーストラリアとの比較 */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <p className="font-bold text-primary mb-3">🆚 オーストラリアワーホリとの大きな違い</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-foreground mb-2">🇨🇦 カナダ</p>
                <ul className="space-y-1.5 text-muted">
                  <li className="flex items-start gap-2"><span className="text-primary shrink-0">✓</span>2025年4月〜<span className="font-bold text-foreground">生涯2回</span>取得可能に（合計最長2年）</li>
                  <li className="flex items-start gap-2"><span className="text-primary shrink-0">✓</span>2回目取得に農業ワーク等の条件が不要</li>
                  <li className="flex items-start gap-2"><span className="text-primary shrink-0">✓</span>チップ文化で実質収入が増える</li>
                  <li className="flex items-start gap-2"><span className="text-muted shrink-0">−</span>1回のビザは12ヶ月。最低賃金はやや低め</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground mb-2">🇦🇺 オーストラリア</p>
                <ul className="space-y-1.5 text-muted">
                  <li className="flex items-start gap-2"><span className="text-primary shrink-0">✓</span>最低賃金が高い（AUD24.10/時）</li>
                  <li className="flex items-start gap-2"><span className="text-primary shrink-0">✓</span>条件次第で最長3年まで延長可能</li>
                  <li className="flex items-start gap-2"><span className="text-muted shrink-0">−</span>2年目以降は農業ワーク88日が必要</li>
                  <li className="flex items-start gap-2"><span className="text-muted shrink-0">−</span>主要都市の物価が高い</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ビザ基本情報 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に確認すること">
            ビザ（IEC）の基本情報
          </SectionHeading>
          <div className="bg-white rounded-2xl border border-border p-6 mb-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  { label: "ビザ制度", value: "International Experience Canada（IEC）ワーキングホリデーカテゴリ" },
                  { label: "対象年齢", value: "18歳〜30歳（申請時）" },
                  { label: "滞在期間", value: "1回のビザで最長12ヶ月。2025年4月〜生涯2回取得可能（合計最長2年）" },
                  { label: "申請方式", value: "プール制：登録後に招待状（ITA）が届いてから申請" },
                  { label: "シーズン", value: "例年1〜2月頃に開始（年によって変動）" },
                  { label: "就労制限", value: "制限なし（同一雇用主でも継続就労可）" },
                  { label: "ビザ申請費", value: "CAD 369.75（IEC参加費 CAD184.75 + オープンワーパミット CAD100 + バイオメトリクス CAD85）約3.9万円" },
                  { label: "申請方法", value: "オンライン（カナダ移民局IRCC公式サイトから）" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-bold text-foreground w-32 shrink-0">{row.label}</td>
                    <td className="py-3 text-muted leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* プール制の説明 */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <p className="font-bold mb-3">📋 プール制とは？申請の流れ</p>
            <div className="space-y-3">
              {[
                { step: "①", text: "シーズン開始（例年1〜2月頃）に合わせてIECプールに登録" },
                { step: "②", text: "抽選により招待状（ITA: Invitation to Apply）が届くのを待つ" },
                { step: "③", text: "ITAが届いたら20日以内にビザ申請を行う" },
                { step: "④", text: "審査通過後にオープンワーパミット（就労許可証）を取得" },
                { step: "⑤", text: "ビザ有効期限内（通常1年以内）に入国" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="text-xs font-bold bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{s.step.replace("①②③④⑤".indexOf(s.step[1]) >= 0 ? s.step : "", s.step[1] || s.step)}</span>
                  <p className="text-sm text-muted leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
              ⚠️ 招待状が届くタイミングや枠数は年によって変わります。最新情報は<a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html" target="_blank" rel="noopener noreferrer" className="underline font-bold">カナダ移民局公式サイト</a>またはエージェントに確認してください。
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
                ビザ・航空券・保険・初期費用を合わせると<span className="font-bold text-foreground">最低50〜80万円</span>が安心の目安。
                現地で仕事が決まるまでの3ヶ月分の生活費を含めると<span className="font-bold text-foreground">100〜120万円</span>を用意する人が多いです。
              </p>
            </div>
            <div className="bg-soft rounded-2xl border border-border p-5">
              <p className="font-bold mb-2">💰 チップ文化で収入アップ</p>
              <p className="text-sm text-muted leading-relaxed">
                カナダのレストラン・カフェではチップが慣習（通常15〜20%）。
                最低賃金ベースの収入にチップが加算されるため、<span className="font-bold text-foreground">ホスピタリティ系の仕事は実質収入がかなり高くなります</span>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 仕事・最低賃金 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="州によって異なる最低賃金">
            仕事の種類と収入
          </SectionHeading>
          <div className="bg-white rounded-2xl border border-border p-5 mb-6">
            <p className="font-bold mb-3">📊 主要州の最低賃金（2024年時点）</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-soft">
                  <tr>
                    <th className="text-left p-3 font-bold">州・都市</th>
                    <th className="text-left p-3 font-bold">最低賃金</th>
                    <th className="text-left p-3 font-bold text-muted text-xs">日本円換算目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { area: "ブリティッシュコロンビア州（バンクーバー）", wage: "CAD 17.85/時", jpy: "約1,870円/時" },
                    { area: "オンタリオ州（トロント）", wage: "CAD 17.60/時", jpy: "約1,850円/時" },
                    { area: "ケベック州（モントリオール）", wage: "CAD 16.10/時", jpy: "約1,690円/時" },
                    { area: "アルバータ州（カルガリー）", wage: "CAD 15.00/時", jpy: "約1,580円/時" },
                  ].map((row) => (
                    <tr key={row.area}>
                      <td className="p-3 text-muted">{row.area}</td>
                      <td className="p-3 font-bold text-primary">{row.wage}</td>
                      <td className="p-3 text-xs text-muted">{row.jpy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-3">※ 1CAD≒105円換算。為替レートにより変動します。BC州は2025年6月〜、ON州は2025年10月〜の最新レート。最低賃金は改定される場合があります。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                category: "ホスピタリティ系（チップあり）",
                icon: "☕",
                jobs: ["カフェ・レストランのスタッフ", "バー・パブのスタッフ", "ホテルのフロント業務"],
                note: "チップ込みで実質収入大幅アップ。カナダワーホリで最も稼ぎやすい仕事。",
                english: "初級〜",
              },
              {
                category: "小売・サービス",
                icon: "🛍️",
                jobs: ["スーパー・コンビニ", "アパレルショップ", "観光案内・ツアーガイド"],
                note: "英語の実践練習になる。シフトの融通が利くことが多い。",
                english: "初級〜",
              },
              {
                category: "日系企業・日本語活用",
                icon: "🇯🇵",
                jobs: ["日本食レストラン", "日系旅行会社・不動産", "日本語教師・通訳"],
                note: "英語力ゼロでも働けるが英語力は伸びにくい。収入は安定しやすい。",
                english: "不問",
              },
              {
                category: "農業・アウトドア",
                icon: "🌾",
                jobs: ["果物・野菜の収穫", "スキーリゾートでの仕事", "農場全般"],
                note: "自然の中での仕事。英語力不問なことも多く、住み込みで節約できる。",
                english: "ゼロでもOK",
              },
              {
                category: "専門職・スキル活用",
                icon: "💻",
                jobs: ["ITエンジニア・デザイナー", "美容師・ネイリスト", "フリーランス"],
                note: "スキルがあれば高収入。英語力も求められるが、帰国後のキャリアに直結。",
                english: "上級〜",
              },
              {
                category: "工場・倉庫",
                icon: "🏭",
                jobs: ["食品工場・梱包作業", "倉庫でのピッキング", "配送補助"],
                note: "体力仕事だが英語力不問。安定した収入が見込める。",
                english: "ゼロでもOK",
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
            カナダワーホリのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="font-bold text-green-700 mb-3">✓ メリット</p>
              <ul className="space-y-2.5">
                {[
                  "2025年4月〜生涯2回取得可能（合計最長2年）。2回目に農業ワーク等の条件なし",
                  "チップ文化でホスピタリティ系の実質収入が高い",
                  "多文化・多国籍な環境で自然と英語力が伸びやすい",
                  "ビザ申請費がオーストラリアより安い（約3.9万円）",
                  "バンクーバー・トロントなど魅力的な都市が複数ある",
                  "自然・アウトドアアクティビティが豊富",
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
                  "プール制のためビザ取得のタイミングが読みにくい",
                  "最低賃金はオーストラリアより低め",
                  "主要都市の物価・家賃が非常に高い",
                  "冬の寒さが厳しい（特にトロント・カルガリー）",
                  "日本人が多い環境では英語が伸びにくい場合がある",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm">
            <p className="font-bold text-primary mb-1">👤 こんな人にカナダワーホリはおすすめ</p>
            <ul className="space-y-1 text-muted">
              {[
                "農業ワーク等の延長条件なしで2年間滞在したい",
                "多文化な環境で英語力を伸ばしたい",
                "チップで稼ぎながら生活費をまかないたい",
                "バンクーバーやトロントなど都市的な生活を楽しみたい",
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
            カナダワーホリに強いエージェント
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            IECプールへの登録・ビザ申請・語学学校の選定・現地サポートまで、
            エージェントを使えば<span className="font-bold text-foreground">すべて無料でサポート</span>してもらえます。
            プール制で申請タイミングがわかりにくいカナダこそ、エージェントへの相談がおすすめです。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "ラストリゾート",
                href: "/lastresort",
                tag: "ワーホリ専門・カナダ対応実績豊富",
                desc: "ワーホリ専門エージェント。カナダのIECビザ申請から現地サポートまで対応。プール制の申請タイミングや注意点も詳しくアドバイスしてもらえる。",
              },
              {
                name: "スマ留",
                href: "/smaru",
                tag: "語学留学→ワーホリのルートにも対応",
                desc: "カナダをはじめ多国に対応。英語力に不安がある場合の語学留学→ワーホリのセットプランも相談可能。渡航前の無料英会話レッスン付き。",
              },
              {
                name: "留学ジャーナル",
                href: "/ryugakujournal",
                tag: "創業50年・カナダ相談実績が豊富",
                desc: "カナダへの語学留学・ワーホリの実績が豊富。バンクーバー・トロントどちらにするかの相談から、ビザ申請・語学学校選びまで丁寧にサポートしてもらえる。",
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
              { href: "/waho-australia", emoji: "🇦🇺", title: "オーストラリアワーホリ完全ガイド", tag: "ワーホリ国別" },
              { href: "/ryugaku-canada", emoji: "🇨🇦", title: "カナダ語学留学の費用・特徴まとめ", tag: "語学留学" },
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
            カナダワーホリを<br />プロに相談してみる
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            IECビザの申請タイミング・都市選び・仕事探し——<br />
            不安なことをまとめて相談できます。完全無料です。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
          </CtaButton>
        </div>
      </section>
    </>
  );
}
