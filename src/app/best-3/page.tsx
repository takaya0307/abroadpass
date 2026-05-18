import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "留学エージェントおすすめ5選【2026年最新】本音比較",
  description:
    "スマ留・ISS留学ライフ・ラストリゾート・留学ジャーナル・ウインテック留学センターを費用・サポート・口コミで徹底比較。ワーホリ・社会人留学・大学生留学に最適なエージェントが見つかります。",
  alternates: {
    canonical: "https://abroadpass.jp/best-3",
  },
};

const agents = [
  {
    rank: 1,
    name: "スマ留",
    company: "株式会社リアブロード",
    reward: "¥3,000",
    tagline: "業界最安級 × 知名度No.1 ― コスパで選ぶならここ",
    description:
      "語学学校の空き時間を活用することで、留学費用を従来の最大半額まで削減。短期1週間から長期ワーホリまで幅広く対応し、渡航前の英会話レッスンも無料で受けられます。",
    persona: "ユイさん（大学生・コスパ重視）/ ナナさん（まず気軽に相談したい社会人）",
    merits: [
      "業界最安級の料金設定（最大半額）",
      "短期1週間〜長期ワーホリまで全対応",
      "渡航前の無料英会話レッスン付き",
      "オンライン面談で気軽に相談可能",
      "知名度が高く口コミ情報が豊富",
    ],
    demerits: [
      "担当カウンセラーの質にばらつきあり",
      "安い分、現地サポートは最低限",
      "人気すぎて予約が取りにくい時期あり",
    ],
    bestFor: "「費用を抑えたい」「まず気軽に話を聞きたい」人",
    ctaText: "スマ留の無料面談を予約する",
    ctaHref: "https://px.a8.net/svt/ejp?a8mat=45C1IF+B43BAQ+476I+5YJRM",
    pixel: "https://www15.a8.net/0.gif?a8mat=45C1IF+B43BAQ+476I+5YJRM",
    color: "border-accent bg-accent/5",
    badgeColor: "bg-accent text-white",
  },
  {
    rank: 2,
    name: "ISS留学ライフ",
    company: "株式会社ISS（Z会グループ）",
    reward: "¥6,000",
    tagline: "Z会グループの信頼感 ― 確定率100%の安定感",
    description:
      "Z会グループが運営する50年以上の歴史を持つ老舗エージェント。社会人のキャリアアップ留学、大学正規留学に特に強く、帰国後のキャリアサポートまで一貫して対応。",
    persona: "ナナさん（社会人・キャリア留学）/ 大学正規留学を検討する学生",
    merits: [
      "Z会グループの圧倒的な信頼感",
      "50年以上の実績と豊富なノウハウ",
      "社会人のキャリア留学に特化したプラン",
      "帰国後の就職サポートあり",
      "カウンセラーの質が安定して高い",
    ],
    demerits: [
      "料金はスマ留より若干高め",
      "カジュアルさはスマ留に劣る",
      "短期留学のプランは少なめ",
    ],
    bestFor: "「信頼できる大手に任せたい」「キャリアを考えた留学をしたい」人",
    ctaText: "ISS留学ライフに無料相談する",
    ctaHref: "https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX",
    pixel: "https://www12.a8.net/0.gif?a8mat=45C1IF+AMTQR6+5S4I+5Z6WX",
    color: "border-primary bg-primary/5",
    badgeColor: "bg-primary text-white",
  },
  {
    rank: 3,
    name: "ラストリゾート",
    company: "株式会社ラストリゾート",
    reward: "¥500〜¥2,500（段階報酬）",
    tagline: "ワーホリ特化の老舗 ― 段階的に相談できる安心設計",
    description:
      "10万人以上の渡航実績を持つワーホリ・留学専門エージェント。まず資料ダウンロード、次にオンラインセミナー、そしてカウンセリングと、段階的に情報を得られる仕組みが特長。",
    persona: "ナナさん（ワーホリ本命の社会人）/ じっくり検討したい慎重派",
    merits: [
      "資料DL→セミナー→カウンセリングの3段階設計",
      "ワーホリ専門のカウンセラーが在籍",
      "10万人以上の渡航実績と豊富なデータ",
      "全国にオフィスがあり対面相談も可能",
      "渡航前〜現地〜帰国後まで一貫サポート",
    ],
    demerits: [
      "料金体系がやや分かりにくい",
      "地方オフィスは規模が小さい",
      "Webサイトの情報量が多すぎて迷う",
    ],
    bestFor: "「ワーホリに特化した専門家に相談したい」「いきなり面談は緊張する」人",
    ctaText: "ラストリゾートの資料を無料DLする",
    ctaHref: "https://px.a8.net/svt/ejp?a8mat=4AUXWT+16VZM+550A+5YJRM",
    pixel: "https://www18.a8.net/0.gif?a8mat=4AUXWT+16VZM+550A+5YJRM",
    color: "border-green-500 bg-green-50",
    badgeColor: "bg-green-600 text-white",
  },
  {
    rank: 4,
    name: "留学ジャーナル",
    company: "株式会社留学ジャーナル",
    reward: "¥7,364",
    tagline: "創業50年超の老舗 ― 圧倒的な情報量と実績",
    description:
      "1971年創業、日本で最も歴史のある留学エージェントの一つ。雑誌「留学ジャーナル」の出版でも知られ、正規留学・語学留学・ワーホリまで幅広くカバー。カウンセラーの専門性が高く、国別・目的別の詳細なプランニングが強み。",
    persona: "ナナさん（じっくり計画を立てたい社会人）/ 正規留学を目指す学生",
    merits: [
      "50年以上の歴史と圧倒的な実績数",
      "国別の専門カウンセラーが在籍",
      "正規留学（大学・大学院）に強い",
      "留学情報誌の出版社ならではの情報量",
      "全国主要都市にオフィスあり",
    ],
    demerits: [
      "料金は業界平均〜やや高め",
      "カジュアルな短期留学にはやや大げさ",
      "予約制のため即日相談が難しいことも",
    ],
    bestFor: "「実績のある大手に安心して任せたい」「正規留学やキャリア留学を考えている」人",
    ctaText: "留学ジャーナルに無料相談する",
    ctaHref: "https://px.a8.net/svt/ejp?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75",
    pixel: "https://www16.a8.net/0.gif?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75",
    color: "border-purple-500 bg-purple-50",
    badgeColor: "bg-purple-600 text-white",
  },
  {
    rank: 5,
    name: "ウインテック留学センター",
    company: "ウインテック留学センター",
    reward: "¥5,000",
    tagline: "オーダーメイド留学 ― 一人ひとりに合わせた完全カスタマイズ",
    description:
      "「既製品の留学プラン」ではなく、一人ひとりの希望・予算・目的に合わせて完全オーダーメイドのプランを設計。カウンセラーが親身にヒアリングし、他社にはないユニークな留学体験を提案してくれます。",
    persona: "ユイさん（自分だけの留学体験をしたい学生）/ ナナさん（目的が明確な社会人）",
    merits: [
      "完全オーダーメイドのプラン設計",
      "カウンセラーの親身なヒアリング力",
      "ユニークな留学先・プログラムの提案",
      "出発前〜帰国後まで手厚いサポート",
      "満足度の高い口コミが多い",
    ],
    demerits: [
      "知名度はスマ留・ISSほど高くない",
      "オーダーメイドのため見積もりに時間がかかる",
      "料金は標準〜やや高め",
    ],
    bestFor: "「自分だけのプランを作りたい」「画一的なパッケージが合わない」人",
    ctaText: "ウインテックに無料相談する",
    ctaHref: "https://px.a8.net/svt/ejp?a8mat=4B1EPN+DJM182+5P4G+5YZ75",
    pixel: "https://www12.a8.net/0.gif?a8mat=4B1EPN+DJM182+5P4G+5YZ75",
    color: "border-rose-500 bg-rose-50",
    badgeColor: "bg-rose-600 text-white",
  },
];

const comparisonItems = [
  { label: "おすすめ度", values: ["★★★★★", "★★★★☆", "★★★★☆", "★★★★☆", "★★★★☆"] },
  { label: "料金の安さ", values: ["◎ 業界最安級", "○ やや高め", "○ 標準的", "○ やや高め", "○ 標準的"] },
  { label: "サポート充実度", values: ["○ 標準", "◎ 手厚い", "◎ 段階的", "◎ 手厚い", "◎ オーダーメイド"] },
  { label: "ワーホリ対応", values: ["○ 対応", "○ 対応", "◎ 特化", "○ 対応", "○ 対応"] },
  { label: "社会人向け", values: ["○", "◎ 最適", "◎ 最適", "◎ 最適", "◎ 最適"] },
  { label: "大学生向け", values: ["◎ 最適", "○", "○", "◎ 正規留学", "○"] },
  { label: "相談のしやすさ", values: ["◎ オンライン", "○ 対面中心", "◎ 段階式", "○ 予約制", "◎ 親身"] },
  { label: "実績", values: ["知名度No.1", "50年以上", "10万人以上", "50年以上", "高満足度"] },
];

const faqs = [
  {
    q: "留学エージェントの無料相談は本当に無料ですか？",
    a: "はい、この5社はすべて無料で相談できます。相談したからといって必ず申し込む必要はなく、情報収集のためだけに利用しても問題ありません。",
  },
  {
    q: "英語が全くできなくてもワーホリに行けますか？",
    a: "行けます。5社とも英語力不問のプランがあり、渡航前の英会話レッスン付きのプランもあります。スマ留は無料英会話レッスンが付属しています。",
  },
  {
    q: "ワーホリの費用は最低いくら必要ですか？",
    a: "国にもよりますが、渡航費・学校・生活費を含めて100〜150万円が目安です。スマ留は業界最安級で、費用を抑えたい方におすすめです。",
  },
  {
    q: "30歳を過ぎてもワーホリに行けますか？",
    a: "ワーホリビザは多くの国で申請時に30歳以下が条件です。ただし、31歳の誕生日前に申請すれば渡航自体は31歳でも可能な国もあります。詳しくはエージェントに相談してください。",
  },
  {
    q: "複数のエージェントに相談しても問題ないですか？",
    a: "全く問題ありません。むしろ2〜3社を比較することをおすすめします。各社の提案内容や対応の違いが分かり、自分に最適なエージェントを見つけやすくなります。",
  },
  {
    q: "帰国後の就職は不利になりませんか？",
    a: "ワーホリ経験を適切にアピールすれば、むしろプラスになることが多いです。ISS留学ライフや留学ジャーナルは帰国後の就職サポートもあるので、キャリアが心配な方におすすめです。",
  },
];

export default function Best5Page() {
  return (
    <>
      {/* PR表記（最上部） */}
      <div className="bg-accent/10 text-center py-2 text-xs text-muted">
        【PR】当ページにはアフィリエイト広告が含まれています
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary font-bold text-sm mb-3">2026年最新版</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4">
            留学エージェント おすすめ5選
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            費用・サポート・口コミをもとに5社を正直に比較。
            ワーホリ・語学留学・社会人留学など目的別に
            あなたに合ったエージェントが見つかります。
          </p>

          {/* Quick pick */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-left">
            <p className="font-bold text-sm mb-3 text-center">忙しい人向け：結論はこちら</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-accent min-w-[5rem]">コスパ重視</span>
                <span>→ <strong>スマ留</strong>（業界最安級・気軽に面談OK）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary min-w-[5rem]">信頼重視</span>
                <span>→ <strong>ISS留学ライフ</strong>（Z会グループ・キャリア支援付き）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600 min-w-[5rem]">ワーホリ本命</span>
                <span>→ <strong>ラストリゾート</strong>（段階的に相談できて安心）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 min-w-[5rem]">実績重視</span>
                <span>→ <strong>留学ジャーナル</strong>（50年超の歴史・正規留学に強い）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-600 min-w-[5rem]">個別対応重視</span>
                <span>→ <strong>ウインテック</strong>（完全オーダーメイド設計）</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 選び方 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="この3つを押さえれば失敗しない">
            留学エージェントの選び方 3つの基準
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "費用の透明性",
                desc: "総額が明確か、追加費用はないか。見積もりを複数社から取って比較するのが鉄則。",
              },
              {
                num: "2",
                title: "サポート範囲",
                desc: "渡航前の英会話、現地トラブル対応、帰国後の就職まで。どこまで含まれるか要確認。",
              },
              {
                num: "3",
                title: "カウンセラーとの相性",
                desc: "無料相談で実際に話してみることが一番大事。2〜3社受けて比較するのがおすすめ。",
              },
            ].map((item) => (
              <div key={item.num} className="bg-soft rounded-xl p-6">
                <span className="text-3xl font-black text-primary/30">{item.num}</span>
                <h3 className="font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {agents.map((agent) => (
            <article
              key={agent.name}
              id={`agent-${agent.rank}`}
              className={`bg-white rounded-2xl border-l-4 ${agent.color} shadow-sm overflow-hidden`}
            >
              {/* Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`${agent.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    第{agent.rank}位
                  </span>
                  <span className="text-xs text-muted">{agent.company}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mt-2 mb-1">{agent.name}</h3>
                <p className="text-sm text-muted mb-4">{agent.tagline}</p>
                <p className="text-sm leading-relaxed text-foreground/80 mb-6">
                  {agent.description}
                </p>

                <p className="text-xs font-bold text-muted mb-1">こんな人におすすめ</p>
                <p className="text-sm mb-6 bg-soft rounded-lg px-4 py-3">{agent.persona}</p>

                {/* Merits / Demerits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-bold text-sm text-primary mb-3">メリット</p>
                    <ul className="space-y-2">
                      {agent.merits.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-red-500 mb-3">デメリット</p>
                    <ul className="space-y-2">
                      {agent.demerits.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <span className="text-red-400 mt-0.5">△</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-soft rounded-xl p-4 mb-6">
                  <p className="text-sm">
                    <span className="font-bold">結論：</span>
                    {agent.bestFor}
                  </p>
                </div>

                <div className="text-center">
                  <CtaButton href={agent.ctaHref} variant="accent" external>
                    {agent.ctaText}
                  </CtaButton>
                  {/* A8.net tracking pixel */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.pixel}
                    width={1}
                    height={1}
                    alt=""
                    style={{ border: "none" }}
                  />
                  <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="cost" className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading tag="h2" sub="ひと目で分かる5社比較">
            比較表
          </SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-foreground text-white">
                  <th className="px-3 py-3 text-left font-medium rounded-tl-lg">項目</th>
                  <th className="px-3 py-3 text-center font-medium">スマ留</th>
                  <th className="px-3 py-3 text-center font-medium">ISS留学ライフ</th>
                  <th className="px-3 py-3 text-center font-medium">ラストリゾート</th>
                  <th className="px-3 py-3 text-center font-medium">留学ジャーナル</th>
                  <th className="px-3 py-3 text-center font-medium rounded-tr-lg">ウインテック</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-soft" : "bg-white"}
                  >
                    <td className="px-3 py-3 font-medium">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-3 py-3 text-center">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="留学エージェント選びでよくある疑問に回答">
            よくある質問
          </SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl border border-border group"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-sm flex items-center justify-between list-none">
                  <span>Q. {faq.q}</span>
                  <span className="text-muted ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-foreground/80 leading-relaxed">
                  A. {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料相談から始めてみませんか？
          </h2>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            5社とも無料で相談できます。2〜3社を比較してから決めるのが賢い選び方です。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 相談しただけで申し込み義務は一切ありません
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <CtaButton href="#agent-1" variant="accent">
              スマ留を見る
            </CtaButton>
            <CtaButton href="#agent-2" variant="accent">
              ISS留学ライフを見る
            </CtaButton>
            <CtaButton href="#agent-3" variant="accent">
              ラストリゾートを見る
            </CtaButton>
            <CtaButton href="#agent-4" variant="accent">
              留学ジャーナルを見る
            </CtaButton>
            <CtaButton href="#agent-5" variant="accent">
              ウインテックを見る
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
