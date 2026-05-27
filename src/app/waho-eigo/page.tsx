import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "ワーホリに必要な英語力はどのくらい？レベル別にできることを解説【2026年】 | Abroad Pass",
  description:
    "ワーホリに最低限必要な英語力は？TOEIC何点あれば仕事に就けるか、英語ゼロでも大丈夫か、渡航前に何をすべきかをレベル別にわかりやすく解説します。【2026年最新】",
  openGraph: {
    title: "ワーホリに必要な英語力はどのくらい？レベル別にできることを解説【2026年】",
    description:
      "英語力ゼロでもワーホリには行けるが、レベルによって現地でできることが変わる。TOEIC目安・仕事の種類・渡航前の準備を解説。",
  },
};

const faqData = [
  {
    question: "英語力ゼロでもワーホリに行けますか？",
    answer:
      "行けます。ただし現地での仕事探し・住居探し・日常生活において、英語ゼロだと困難な場面が増えます。渡航後に語学学校に通いながらスタートする方法が一般的ですが、最低限「挨拶・数字・簡単な自己紹介」ができる状態で渡航することをおすすめします。英語力が高いほど選択肢と質が上がることは事実です。",
  },
  {
    question: "ワーホリで仕事を見つけるのに必要な英語力はどのくらいですか？",
    answer:
      "仕事の種類によって異なります。日系企業・農場・工場などは英語力がほぼ不要なケースもあります。カフェ・ショップ・ホテルなどのサービス業は日常会話レベル（TOEIC500〜600程度）が目安です。現地の英語圏企業でオフィスワークをしたい場合はビジネス会話レベル（TOEIC700以上）が必要です。",
  },
  {
    question: "TOEIC何点あればワーホリで困りませんか？",
    answer:
      "日常生活をストレスなく過ごすにはTOEIC600点程度を目安にする方が多いです。仕事・友人作り・生活全般を英語でこなしたい場合は700点以上あると安心です。ただしTOEICはリーディング・リスニング中心の試験であり、実際のコミュニケーション力とは異なるため、スピーキングの練習も並行して行うことが重要です。",
  },
  {
    question: "渡航前に英語力を上げるのにどれくらいの期間が必要ですか？",
    answer:
      "ゼロから日常会話レベルまで到達するには、毎日1〜2時間の学習で6ヶ月〜1年程度が目安です。オンライン英会話を週3〜5回受講しながら、単語・文法の基礎を固める学習が効果的です。語学力を上げることよりも「話すことへの慣れ」を重視した学習が、実際のワーホリ生活では役立ちます。",
  },
  {
    question: "語学学校に通ってからワーホリはできますか？",
    answer:
      "できます。「語学留学（3〜6ヶ月）→ワーホリ（1年）」という順番で渡航する方は多く、特に英語力に不安がある方にはおすすめのルートです。語学学校で基礎を作ってからワーホリに移行することで、仕事探しや生活の立ち上がりがスムーズになります。エージェントに相談するとこのルートのプランも提案してもらえます。",
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

const levels = [
  {
    level: "英語力ゼロ",
    toeic: "〜300点",
    icon: "😰",
    color: "border-red-200 bg-red-50",
    badgeColor: "bg-red-100 text-red-700",
    canDo: [
      "日本語が通じる環境（日系企業・農場・日本人コミュニティ）での生活",
      "翻訳アプリを使えばある程度の日常生活",
      "語学学校に通いながらの基礎学習",
    ],
    cannotDo: [
      "現地の英語圏企業への就職",
      "英語での仕事探し・面接",
      "トラブル時の自力解決",
    ],
    advice: "渡航前に最低限「挨拶・数字・簡単な自己紹介」だけでも練習しておきましょう。エージェントを使えば日本語サポートがあるので安心です。",
  },
  {
    level: "初級（旅行英語レベル）",
    toeic: "300〜500点",
    icon: "😅",
    color: "border-orange-200 bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-700",
    canDo: [
      "簡単な買い物・注文・交通機関の利用",
      "農場・工場・倉庫など英語を多く使わない仕事",
      "日本人の多いシェアハウスでの生活",
    ],
    cannotDo: [
      "カフェ・ホテルなどサービス業への就職",
      "ネイティブと深い会話・友人関係",
      "賃貸契約・銀行口座開設などの手続きを単独で",
    ],
    advice: "このレベルで渡航する場合は、最初の1〜2ヶ月を語学学校に通う期間として計画に組み込むのがおすすめです。",
  },
  {
    level: "日常会話レベル",
    toeic: "500〜650点",
    icon: "😊",
    color: "border-yellow-200 bg-yellow-50",
    badgeColor: "bg-yellow-100 text-yellow-700",
    canDo: [
      "カフェ・レストラン・ショップなどのサービス業",
      "現地人との日常的な会話・友人作り",
      "住居探し・各種手続きの自力対応",
      "英語でのSNS・求人サイトを使った仕事探し",
    ],
    cannotDo: [
      "専門職・マネジメント職・オフィスワーク",
      "英語でのビジネスメール・報告書",
      "複雑な契約や交渉",
    ],
    advice: "このレベルが「ワーホリで困らない最低ライン」とされることが多いです。渡航前にここまで到達しておくと選択肢が大きく広がります。",
  },
  {
    level: "中上級（ビジネス会話）",
    toeic: "650〜800点",
    icon: "😎",
    color: "border-green-200 bg-green-50",
    badgeColor: "bg-green-100 text-green-700",
    canDo: [
      "現地の英語圏企業でのオフィスワーク・事務職",
      "ホテル・エアライン系のフロント業務",
      "英語でのミーティング・報告・交渉",
      "現地での幅広い人脈形成",
    ],
    cannotDo: [
      "専門的な法律・医療・金融分野での業務",
      "完全にネイティブ水準のコミュニケーション",
    ],
    advice: "このレベルなら帰国後の転職活動でも英語力が強みになります。ワーホリ中の就労経験と組み合わせることで外資系・グローバル企業へのキャリアチェンジも狙えます。",
  },
  {
    level: "上級（ほぼネイティブ）",
    toeic: "800点以上",
    icon: "🤩",
    color: "border-blue-200 bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    canDo: [
      "専門職・管理職・プロフェッショナル職への応募",
      "現地での起業・フリーランス活動",
      "英語での講師・トレーナー業",
      "帰国後のキャリアで英語を最大限に武器にできる",
    ],
    cannotDo: [
      "特に制限なし",
    ],
    advice: "このレベルで渡航できれば、ワーホリは英語力を磨く場というより「キャリアをつくる場」になります。",
  },
];

const studyMethods = [
  {
    icon: "💻",
    title: "オンライン英会話（最優先）",
    cost: "月3,000〜8,000円",
    desc: "スピーキングの慣れを作るのに最も効果的。フィリピン人講師と毎日25分話すだけで、話すことへの抵抗感が大幅に下がります。Cambly・DMM英会話・ネイティブキャンプが人気。",
    recommended: true,
  },
  {
    icon: "📱",
    title: "英単語アプリ（Anki・mikan）",
    cost: "無料〜月数百円",
    desc: "通勤・スキマ時間に英単語を増やす。最低1,000〜2,000語の語彙があると日常会話がスムーズになります。",
    recommended: false,
  },
  {
    icon: "🎧",
    title: "英語ポッドキャスト・YouTube",
    cost: "無料",
    desc: "英語を「聞く習慣」を作る。BBC Learning English・VOA Learning Englishは速度が遅めで聞き取りやすい。",
    recommended: false,
  },
  {
    icon: "📚",
    title: "文法の参考書（1冊だけ）",
    cost: "1,500〜2,500円",
    desc: "「一億人の英文法」などで基礎を固める。深入りせず、全体像を把握するために1冊だけ通読する程度でOK。",
    recommended: false,
  },
  {
    icon: "🏫",
    title: "フィリピン留学（英語力を短期集中で上げたい場合）",
    cost: "1ヶ月30〜50万円",
    desc: "マンツーマン授業中心で費用が安いフィリピン留学は、英語力を3〜6ヶ月で集中的に伸ばすのに最適。ワーホリ前の「英語準備留学」として選ぶ人も多い。",
    recommended: false,
  },
];

export default function WahoEigoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">ワーホリ英語力ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ワーホリに必要な英語力は<br />
            <span className="text-primary">どのくらい？レベル別に解説</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            「英語ができないとワーホリに行けない？」「TOEICは何点あればいい？」という疑問は多くの方が持っています。
            結論として、英語力ゼロでも渡航はできますが、<strong>レベルによって現地でできることが大きく変わります</strong>。
            この記事ではレベル別にできること・できないことと、渡航前の効率的な勉強法を解説します。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-sm">
            <p className="font-bold text-primary mb-1">📌 この記事と「英語力ゼロでもワーホリはできる？」の違い</p>
            <p className="text-muted leading-relaxed">
              <Link href="/eigo-zero" className="text-primary font-bold underline underline-offset-2">英語力ゼロ記事</Link>は「行けるかどうか」の不安を解消する内容です。
              この記事は「英語レベルごとに何ができるか」を具体的に解説するものです。
            </p>
          </div>
        </div>
      </section>

      {/* レベル別 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="英語レベルと現地での可能性">
            レベル別｜ワーホリでできること・できないこと
          </SectionHeading>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            英語力の目安としてTOEICスコアを記載していますが、あくまで参考値です。
            実際の会話力はTOEICスコアと必ずしも一致しません。<span className="font-bold text-foreground">特にスピーキング力は別途練習が必要</span>です。
          </p>
          <div className="space-y-6">
            {levels.map((l) => (
              <div key={l.level} className={`rounded-2xl border-2 p-6 ${l.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{l.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{l.level}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${l.badgeColor}`}>TOEIC目安：{l.toeic}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/70 rounded-xl p-3">
                    <p className="text-xs font-bold text-green-700 mb-2">✓ できること</p>
                    <ul className="space-y-1">
                      {l.canDo.map((item, i) => (
                        <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                          <span className="text-green-500 mt-0.5 shrink-0">●</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/70 rounded-xl p-3">
                    <p className="text-xs font-bold text-red-600 mb-2">✗ 難しいこと</p>
                    <ul className="space-y-1">
                      {l.cannotDo.map((item, i) => (
                        <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                          <span className="text-red-400 mt-0.5 shrink-0">●</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-3 border border-white">
                  <p className="text-xs text-muted leading-relaxed">
                    <span className="font-bold text-foreground">💡 アドバイス：</span>{l.advice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 目標ライン */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前の現実的な目標">
            「最低ライン」と「理想ライン」
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border-2 border-yellow-300 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="font-bold">最低ライン（これだけは）</h3>
              </div>
              <p className="text-3xl font-black text-yellow-600 mb-2">TOEIC 500点</p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                日常会話の基礎ができており、カフェやショップなど接客業への就職が視野に入るレベル。
                現地での生活立ち上がりがスムーズになります。
              </p>
              <p className="text-xs font-bold text-yellow-700 bg-yellow-50 rounded-lg p-2">
                渡航6ヶ月前から毎日30分の学習で到達可能
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-primary p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold">理想ライン（目指したい）</h3>
              </div>
              <p className="text-3xl font-black text-primary mb-2">TOEIC 650点</p>
              <p className="text-sm text-muted leading-relaxed mb-3">
                ほとんどの仕事に応募できる。現地での友人も作りやすく、ワーホリの質が大きく変わるレベル。
                帰国後の就職活動でも評価されます。
              </p>
              <p className="text-xs font-bold text-primary bg-primary/5 rounded-lg p-2">
                渡航1年前から毎日1時間の学習で到達可能
              </p>
            </div>
          </div>
          <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-800">
            <p className="font-bold mb-1">⚠️ TOEICよりスピーキングを優先すべき理由</p>
            <p className="leading-relaxed">
              ワーホリで実際に使うのは「話す・聞く」スキルです。TOEICのスコアが高くても話せない人は多く、
              逆にTOEICは低くても会話力の高い人はすぐに馴染めます。
              スコアを上げることより<strong>「話す習慣をつくること」が最優先</strong>です。
            </p>
          </div>
        </div>
      </section>

      {/* 勉強法 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前にやるべきこと">
            効率的な英語学習法
          </SectionHeading>
          <div className="space-y-4">
            {studyMethods.map((m) => (
              <div key={m.title} className={`rounded-2xl border p-5 ${m.recommended ? "border-primary bg-primary/5" : "border-border bg-soft"}`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{m.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-sm">{m.title}</h3>
                      {m.recommended && (
                        <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">最優先</span>
                      )}
                      <span className="text-xs text-muted ml-auto">{m.cost}</span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-soft rounded-2xl border border-border">
            <h3 className="font-bold mb-3">📅 6ヶ月で日常会話レベルを目指すスケジュール例</h3>
            <div className="space-y-3">
              {[
                { period: "1〜2ヶ月目", task: "英単語1,000語 + 文法の基礎固め（参考書1冊）" },
                { period: "3〜4ヶ月目", task: "オンライン英会話を週3〜5回開始。単語は継続" },
                { period: "5〜6ヶ月目", task: "オンライン英会話を週5〜毎日に増やす。英語ポッドキャストを日課に" },
              ].map((row) => (
                <div key={row.period} className="flex gap-3 items-start">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full shrink-0 whitespace-nowrap">{row.period}</span>
                  <p className="text-sm text-muted leading-relaxed">{row.task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 語学留学→ワーホリルート */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="英語力に不安がある方への提案">
            語学留学→ワーホリの「最強ルート」
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            英語力に不安がある場合、<span className="font-bold text-foreground">「先に語学留学で英語の基礎を作ってからワーホリに移行する」</span>方法が多くの人に選ばれています。
            特にフィリピン留学は費用が安く、マンツーマン授業中心なので短期間で話す力を伸ばしやすいです。
          </p>
          <div className="bg-white rounded-2xl border border-border p-6 mb-5">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span>🗺️</span> おすすめルート例
            </h3>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
              {[
                { label: "フィリピン語学留学", sub: "2〜3ヶ月", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { label: "→", sub: "", color: "text-muted text-2xl font-bold" },
                { label: "オーストラリア ワーホリ", sub: "1年", color: "bg-primary/10 border-primary/30 text-primary" },
              ].map((step, i) =>
                step.sub ? (
                  <div key={i} className={`flex-1 rounded-xl border px-4 py-3 text-center ${step.color}`}>
                    <p className="font-bold text-sm">{step.label}</p>
                    <p className="text-xs mt-0.5 opacity-70">{step.sub}</p>
                  </div>
                ) : (
                  <span key={i} className={step.color}>→</span>
                )
              )}
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "フィリピンで英語の基礎を作り、自信をつけてからオーストラリアへ",
                "フィリピンは費用が安いため、全体の総費用を抑えられる",
                "英語力がある状態でワーホリに入ると、仕事探しが格段にスムーズ",
                "エージェントを通じて語学留学→ワーホリの一貫プランを組んでもらえる",
              ].map((item, i) => (
                <li key={i} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Link href="/ryugaku-vs-waho" className="text-primary text-sm font-bold underline underline-offset-4">
              → 語学留学 vs ワーホリ どちらがいい？詳しく比較する
            </Link>
          </div>
        </div>
      </section>

      {/* エージェント */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="英語力に不安があるなら">
            エージェントに相談するメリット
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            「英語力がどのくらいあれば渡航できるか」「渡航前に何をすべきか」——こうした疑問は、
            エージェントへの<span className="font-bold text-foreground">無料相談で全部答えてもらえます</span>。
            自分の今の英語力を伝えるだけで、最適な渡航時期・学習プラン・国の提案をしてもらえます。
          </p>
          <div className="space-y-3">
            {[
              { name: "スマ留", href: "/smaru", tag: "語学留学→ワーホリルートに強い", desc: "フィリピン・マルタ含む多国籍に対応。語学留学からワーホリへの一貫プランも相談可能。渡航前の無料英会話レッスン付き。" },
              { name: "ラストリゾート", href: "/lastresort", tag: "ワーホリ特化・現地英語サポート充実", desc: "ワーホリ専門のため英語力に関するリアルなアドバイスが豊富。オーストラリア・カナダに現地オフィスがあり渡航後も安心。" },
              { name: "留学ジャーナル", href: "/ryugakujournal", tag: "創業50年・幅広い相談実績", desc: "語学留学・ワーホリ両方に精通。英語力に不安がある方の相談実績が豊富で、段階的なプランを一緒に設計してもらえる。" },
            ].map((agent) => (
              <Link key={agent.name} href={agent.href} className="flex items-center justify-between p-4 bg-soft rounded-2xl border border-border hover:border-primary transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{agent.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{agent.tag}</span>
                  </div>
                  <p className="text-xs text-muted">{agent.desc}</p>
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
              { href: "/eigo-zero", emoji: "🗣️", title: "英語力ゼロでもワーホリはできる？", tag: "英語・不安解消" },
              { href: "/ryugaku-vs-waho", emoji: "🆚", title: "語学留学 vs ワーホリ どちらがいい？", tag: "基礎知識" },
              { href: "/ryugaku-philippines", emoji: "🇵🇭", title: "フィリピン語学留学の費用・特徴", tag: "語学留学" },
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
          <p className="text-primary font-bold text-sm mb-2">英語力の不安はエージェントに相談しよう</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            今の英語力で<br />どこまでできるか聞いてみる
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            「自分の英語力でワーホリに行けるか」「渡航前に何ヶ月準備すればいいか」——<br />
            こうした疑問は無料相談で全部解消できます。相談するだけで申し込む必要はありません。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
          </CtaButton>
        </div>
      </section>
    </>
  );
}
