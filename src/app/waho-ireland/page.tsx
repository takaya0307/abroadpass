import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "アイルランドワーキングホリデー完全ガイド【2026年】ビザ・費用・抽選・仕事を解説 | Abroad Pass",
  description:
    "アイルランドワーホリのビザ申請（抽選制）・費用・最低賃金・ダブリンvsコークの都市比較を解説。年間800名限定・ビザ費用無料・EU唯一の英語圏というアイルランドワーホリの全情報。【2026年最新】",
  openGraph: {
    title: "アイルランドワーキングホリデー完全ガイド【2026年】",
    description:
      "年間800名限定の抽選制・ビザ費用無料・EU唯一の英語圏。アイルランドワーホリのビザ申請・費用・仕事・都市比較を徹底解説。",
  },
};

const faqData = [
  {
    question: "アイルランドワーホリのビザ申請は抽選ですか？",
    answer:
      "はい、年間800名の発給枠に対して抽選制を採用しています。申請受付は年2回（例年1月・7月）で、受付期間内にメールで申請書を送付します。倍率は年によって異なりますが、人気が高く外れることもあるため早めの準備と複数回の挑戦が重要です。第1回（1月）で外れても第2回（7月）に再挑戦できます。",
  },
  {
    question: "アイルランドワーホリのビザ費用はいくらですか？",
    answer:
      "アイルランドのワーキングホリデービザは無料です。オーストラリア（約6〜7万円）やカナダ（約3.9万円）と比べて大きなメリットです。ただし渡航前に50万円以上の預金が必要であることや、往復航空券の準備が条件となります。",
  },
  {
    question: "アイルランドの最低賃金はいくらですか？",
    answer:
      "2026年1月から最低賃金は€14.15/時です。日本円換算で時給約2,260円（1EUR≒160円）が目安です。フルタイム（週39時間）で働けば月収は約€2,200（約35万円）程度になります。ダブリンの生活費は月15〜20万円が目安のため、働けば十分生活できます。",
  },
  {
    question: "アイルランドはEU圏なので他のヨーロッパ諸国にも旅行できますか？",
    answer:
      "アイルランドはEU加盟国ですが、シェンゲン協定には加盟していません。ただしワーホリビザで滞在中もEU・シェンゲン圏への旅行は観光目的で可能です（シェンゲン圏は90日以内）。ダブリンはヨーロッパの主要都市への格安フライトが充実しており、週末旅行でヨーロッパ各国を訪れる方も多いです。",
  },
  {
    question: "アイルランドワーホリは英語が伸びやすいですか？",
    answer:
      "EU圏で唯一の英語公用語国であり、日本人の数がオーストラリア・カナダと比べて少ないため、英語漬けになりやすい環境です。ただしダブリンには日本人コミュニティも存在します。英語力を伸ばしたい場合はダブリン以外のコークやゴールウェイを拠点にするのも有効です。",
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
    name: "ダブリン",
    flag: "🏙️",
    tag: "仕事・利便性No.1",
    tagColor: "bg-green-100 text-green-700",
    pros: ["アイルランド最大の都市で求人が最も多い", "ヨーロッパ各国への格安フライトが充実", "日本人サポートコミュニティも存在"],
    cons: ["家賃・物価がアイルランドで最も高い", "日本人が比較的多く英語が伸びにくい場合も"],
    best: "仕事を最優先・ヨーロッパ旅行もしたい人",
  },
  {
    name: "コーク",
    flag: "🌿",
    tag: "第2の都市・のんびり生活",
    tagColor: "bg-blue-100 text-blue-700",
    pros: ["ダブリンより家賃・物価が安い", "のんびりした雰囲気で生活の質が高い", "日本人が少なく英語漬けになれる"],
    cons: ["求人はダブリンより少なめ", "ダブリンへのアクセスに約2〜3時間かかる"],
    best: "落ち着いた環境で生活・英語力を伸ばしたい人",
  },
  {
    name: "ゴールウェイ",
    flag: "🎵",
    tag: "アイリッシュ文化の中心地",
    tagColor: "bg-purple-100 text-purple-700",
    pros: ["アイリッシュ音楽・伝統文化が根付く街", "大西洋沿いの美しい自然が近い", "コンパクトな街で生活しやすい"],
    cons: ["求人が少ない", "他都市へのアクセスが不便"],
    best: "アイルランドの文化・自然を楽しみたい人",
  },
];

const costs = [
  { item: "ビザ申請費", amount: "無料", note: "アイルランドワーホリビザは申請費用がかかりません", highlight: true },
  { item: "航空券", amount: "10〜18万円", note: "経由便が多い。時期・航空会社により変動" },
  { item: "海外旅行保険（1年）", amount: "15〜30万円", note: "ワーホリは長期加入が必要。渡航前に手配を" },
  { item: "渡航初期費用", amount: "5〜10万円", note: "SIM・日用品・最初の宿泊等" },
  { item: "語学学校（任意・1〜3ヶ月）", amount: "20〜50万円", note: "ダブリンの語学学校は欧米水準で高め" },
  { item: "生活費（月額・ダブリン）", amount: "17〜22万円", note: "家賃・食費・交通費・娯楽含む" },
  { item: "生活費（月額・コーク等）", amount: "13〜18万円", note: "ダブリン以外は家賃が安く生活費を抑えられる" },
  { item: "渡航前の必要資金（条件）", amount: "50万円以上", note: "ビザ申請条件として50万円以上の預金証明が必要" },
];

export default function WahoIrelandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">🇮🇪 ワーホリ アイルランド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            アイルランド<br />
            <span className="text-primary">ワーキングホリデー完全ガイド</span>
            <span className="text-lg md:text-2xl font-bold text-muted ml-2">【2026年】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            EU圏で唯一の英語公用語国・ビザ費用無料・年間800名限定の抽選制——
            アイルランドワーホリは「狭き門だからこそ行く価値がある」と言われる特別な渡航先です。
            ビザの抽選・費用・仕事・都市選びまで、渡航前に必要な情報をすべて解説します。
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "申請年齢", value: "18〜30歳", icon: "🎂" },
              { label: "滞在期間", value: "最長1年", icon: "📅" },
              { label: "ビザ費用", value: "無料", icon: "🎁" },
              { label: "年間発給枠", value: "800名限定", icon: "🎯" },
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

      {/* アイルランドの強み */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <p className="font-bold text-primary mb-3">🍀 アイルランドワーホリが選ばれる3つの理由</p>
            <div className="space-y-3">
              {[
                { icon: "🆓", title: "ビザ費用が無料", desc: "オーストラリア（約6〜7万円）やカナダ（約3.9万円）と異なり、アイルランドのワーホリビザは申請費用がかかりません。" },
                { icon: "🇪🇺", title: "EU圏唯一の英語公用語国", desc: "EUの英語圏という希少な環境で、日本人が少なく本格的な英語漬けの生活を送れます。ヨーロッパ旅行の拠点にもなります。" },
                { icon: "💰", title: "高い最低賃金", desc: "最低賃金は€14.15/時（2026年〜）。フルタイムで働けば月収約35万円が見込め、生活費を差し引いても余裕が生まれます。" },
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

      {/* ビザ・抽選 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に必ず確認">
            ビザの基本情報と抽選の仕組み
          </SectionHeading>
          <div className="bg-white rounded-2xl border border-border p-6 mb-5">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  { label: "対象年齢", value: "18歳〜30歳（申請書受理時点）" },
                  { label: "滞在期間", value: "最長12ヶ月（1年）" },
                  { label: "年間発給枠", value: "800名（日本→アイルランド）" },
                  { label: "申請方式", value: "抽選制（年2回の受付期間あり）" },
                  { label: "申請時期", value: "第1回：例年1月中旬〜2月上旬 ／ 第2回：例年7月中旬〜下旬" },
                  { label: "ビザ申請費", value: "無料" },
                  { label: "必要資金", value: "50万円以上の預金（証明書が必要）" },
                  { label: "就労時間", value: "週39〜40時間まで" },
                  { label: "申請方法", value: "在日アイルランド大使館へメールで申請書を送付" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-bold text-foreground w-32 shrink-0">{row.label}</td>
                    <td className="py-3 text-muted leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 抽選フロー */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <p className="font-bold mb-4">📋 抽選〜渡航までの流れ</p>
            <div className="space-y-3">
              {[
                { step: "1", text: "申請受付期間（1月または7月）に申請書をメールで大使館へ送付" },
                { step: "2", text: "抽選結果の通知（当選・落選）を受け取る" },
                { step: "3", text: "当選した場合、必要書類を準備して正式申請" },
                { step: "4", text: "ビザ（スタンプ）が発行されたら渡航準備を進める" },
                { step: "5", text: "アイルランド入国後、現地でIRP（居住登録）を行う" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="text-xs font-bold bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                  <p className="text-sm text-muted leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
              ⚠️ 第1回（1月）で落選しても第2回（7月）に再申請できます。2回連続で落選する可能性もあるため、<span className="font-bold">他国のワーホリと並行して検討する</span>のがおすすめです。最新情報は<a href="https://www.ireland.ie/ja/japan/tokyo/services/visas/working-holiday-programme/" target="_blank" rel="noopener noreferrer" className="underline font-bold">在日アイルランド大使館公式サイト</a>でご確認ください。
            </div>
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
                航空券・保険・初期費用に加え、ビザ条件として<span className="font-bold text-foreground">50万円以上の預金証明</span>が必要です。
                生活費の立ち上がり分も含め<span className="font-bold text-foreground">80〜100万円</span>を目安に準備する方が多いです。
              </p>
            </div>
            <div className="bg-soft rounded-2xl border border-border p-5">
              <p className="font-bold mb-2">💰 現地での収支バランス</p>
              <p className="text-sm text-muted leading-relaxed">
                最低賃金€14.15でフルタイム（週39時間）で働けば月収は約<span className="font-bold text-foreground">€2,200（約35万円）</span>。
                ダブリンの生活費（月17〜22万円）を差し引いても<span className="font-bold text-foreground">月10〜15万円の余裕</span>が生まれます。
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
            <p className="text-sm text-muted mb-1">2026年1月〜の最低賃金</p>
            <p className="text-4xl font-black text-primary">€14.15<span className="text-lg font-bold text-muted">/時</span></p>
            <p className="text-sm text-muted mt-1">日本円換算で約2,260円/時（1EUR≒160円）※レートにより変動</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                category: "ホスピタリティ系",
                icon: "🍺",
                jobs: ["パブ・バーのスタッフ", "カフェ・レストランのスタッフ", "ホテルのフロント・ハウスキーピング"],
                note: "アイルランドのパブ文化を体験しながら稼げる。最も求人が多い分野。",
                english: "初級〜",
              },
              {
                category: "小売・サービス",
                icon: "🛍️",
                jobs: ["スーパー・コンビニのレジ", "アパレルショップ", "観光案内業務"],
                note: "ダブリン市内で求人が多い。接客英語が身につく。",
                english: "初級〜",
              },
              {
                category: "農業・食品加工",
                icon: "🌾",
                jobs: ["農場での作業", "食品工場・梱包", "漁業関連"],
                note: "英語力不問なことが多い。地方在住の場合に選択肢として。",
                english: "ゼロでもOK",
              },
              {
                category: "オフィス・ITサポート",
                icon: "💻",
                jobs: ["ITサポート・ヘルプデスク", "カスタマーサービス", "データ入力・事務"],
                note: "ダブリンはGoogle・Meta・Appleなど大手IT企業が集積するヨーロッパの拠点。英語力次第でITサポートの求人も。",
                english: "中級〜",
              },
              {
                category: "日系企業・日本語活用",
                icon: "🇯🇵",
                jobs: ["日本食レストラン", "日系企業のサポート職", "日本語ガイド"],
                note: "英語力ゼロでも働けるが数が少ない。英語力は伸びにくい。",
                english: "不問",
              },
              {
                category: "クリエイティブ・専門職",
                icon: "🎨",
                jobs: ["ライター・デザイナー", "写真・映像制作", "英語教師・言語サポート"],
                note: "スキルがあれば高収入も狙える。リモートワークも活用しやすい。",
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
            アイルランドワーホリのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-border p-5">
              <p className="font-bold text-green-700 mb-3">✓ メリット</p>
              <ul className="space-y-2.5">
                {[
                  "ビザ費用が無料（他国は数万円かかる）",
                  "EU圏唯一の英語圏で日本人が少なく英語漬けになれる",
                  "最低賃金が高く（€14.15/時）稼ぎながら生活できる",
                  "ヨーロッパ旅行の拠点として最適な立地",
                  "緑豊かな自然・パブ文化など独特の魅力がある",
                  "治安が比較的良く、一人旅・女性にも安心",
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
                  "年間800名の抽選制のため必ずビザが取れるわけではない",
                  "滞在は最長1年（オーストラリア・カナダより短い）",
                  "ダブリンは家賃が非常に高く住居探しが難しい",
                  "天気が悪い日が多い（雨・曇りが多い）",
                  "オーストラリアのようなセカンドビザ延長制度はない",
                  "直行便がなく移動に時間がかかる",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5 font-bold">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-sm">
            <p className="font-bold text-primary mb-1">👤 こんな人にアイルランドワーホリはおすすめ</p>
            <ul className="space-y-1 text-muted">
              {[
                "EU圏で英語を学びながらヨーロッパ旅行もしたい",
                "日本人の少ない環境で本格的な英語漬け生活を送りたい",
                "ビザ費用を抑えて渡航したい",
                "アイルランドの独自の文化・自然に興味がある",
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
          <SectionHeading tag="h2" sub="抽選・渡航準備をサポート">
            アイルランドワーホリに強いエージェント
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            抽選のタイミング・必要書類・語学学校の選定・現地サポートまで、
            エージェントを使えば<span className="font-bold text-foreground">すべて無料でサポート</span>してもらえます。
            「抽選に落ちたら他の国はどうすればいい？」という相談も気軽にできます。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "ラストリゾート",
                href: "/lastresort",
                tag: "ワーホリ専門・アイルランド対応",
                desc: "ワーホリ専門エージェント。アイルランドの抽選申請から現地サポートまで対応。抽選が外れた場合の代替プランも一緒に考えてもらえる。",
              },
              {
                name: "留学ジャーナル",
                href: "/ryugakujournal",
                tag: "アイルランド留学・ワーホリ実績豊富",
                desc: "アイルランドへの語学留学・ワーホリ実績が豊富。ダブリンの語学学校選びや住居探しのアドバイスも得られる。",
              },
              {
                name: "スマ留",
                href: "/smaru",
                tag: "語学留学→ワーホリのルートにも対応",
                desc: "アイルランドをはじめ多国に対応。語学留学からワーホリへの移行プランも相談可能。英語力に不安がある方の渡航前サポートが充実。",
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
              { href: "/ryugaku-ireland", emoji: "🇮🇪", title: "アイルランド語学留学の費用・特徴まとめ", tag: "語学留学" },
              { href: "/waho-australia", emoji: "🇦🇺", title: "オーストラリアワーホリ完全ガイド", tag: "ワーホリ国別" },
              { href: "/waho-country", emoji: "🌏", title: "ワーホリおすすめ国ランキング", tag: "国選び" },
              { href: "/joshi-waho", emoji: "👩", title: "女性一人でワーホリは危険？安全な国選びを解説", tag: "女性ワーホリ" },
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
            アイルランドワーホリを<br />プロに相談してみる
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            抽選のタイミング・必要書類・都市選び——<br />
            不安なことをまとめて相談できます。抽選に落ちた場合の代替プランも一緒に考えてもらえます。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
          </CtaButton>
        </div>
      </section>
    </>
  );
}
