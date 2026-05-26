import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "語学留学にかかる費用はいくら？国別まとめ【2026年最新版】 | Abroad Pass",
  description:
    "語学留学にかかるリアルな費用を国別に徹底解説。フィリピン・カナダ・オーストラリア・アイルランド・マルタの3ヶ月の総額と内訳、節約ポイントまで。【2026年最新】",
};

const countries = [
  {
    flag: "🇵🇭",
    name: "フィリピン（セブ・バギオ）",
    label: "最安水準のコスパ",
    total: "約60〜100万円",
    items: [
      { label: "学費（寮費・食事込み）", value: "30〜50万円" },
      { label: "航空券（往復）", value: "5〜10万円" },
      { label: "生活費（小遣い・外食・観光）", value: "6〜9万円" },
      { label: "保険料", value: "5〜8万円" },
    ],
    desc: "フィリピンの語学学校は多くの場合、学費に寮費と食事が含まれています。そのため生活費の大部分が学費でカバーされ、手元に必要なのは週末の外食や観光費程度です。また「マンツーマン授業が標準」というのも特徴で、短期間でのスピーキング力向上を目指す人に向いています。",
    caution: "2ヶ月を超える滞在にはSSP（Special Study Permit）の取得が必要です。費用は学校によって学費に含まれる場合と別途かかる場合があります。",
  },
  {
    flag: "🇨🇦",
    name: "カナダ（バンクーバー・トロント）",
    label: "英語環境の質が高い",
    total: "約90〜120万円",
    items: [
      { label: "学費", value: "50〜60万円" },
      { label: "航空券（往復）", value: "15〜25万円" },
      { label: "生活費（ホームステイ込み）", value: "45〜55万円" },
      { label: "保険料", value: "7〜10万円" },
    ],
    desc: "学費は12週間で約C$4,500（54万円前後）が相場。生活費はホームステイが月15〜17万円、食費・交通費が月5〜7万円程度です。カナダは物価が上昇傾向にあるため、余裕を持った予算設定が安心です。",
    caution: "為替レートによって総額が変わります（2026年時点：1CAD≒114円）。カナダドルの動向を事前に確認しておきましょう。",
  },
  {
    flag: "🇦🇺",
    name: "オーストラリア（メルボルン・シドニー）",
    label: "人気No.1の定番留学先",
    total: "約110〜150万円",
    items: [
      { label: "学費", value: "30〜50万円" },
      { label: "航空券（往復）", value: "7〜11万円" },
      { label: "生活費", value: "36〜50万円" },
      { label: "保険料", value: "5〜7万円" },
    ],
    desc: "語学学校の授業料は1週間あたりA$350前後が平均。生活費は月12〜16万円が目安です。3ヶ月以内の語学留学であれば観光ビザ（eVisitor）で滞在可能なためビザ費用は基本かかりません。",
    caution: "都市によって物価差が大きく、シドニーはメルボルンより家賃が高い傾向があります。",
  },
  {
    flag: "🇮🇪",
    name: "アイルランド（ダブリン）",
    label: "ヨーロッパで英語を学ぶ",
    total: "約130〜160万円",
    items: [
      { label: "学費", value: "30〜70万円" },
      { label: "航空券（往復）", value: "15〜30万円" },
      { label: "生活費（ホームステイ込み）", value: "55〜75万円" },
      { label: "保険料", value: "8〜13万円" },
    ],
    desc: "EU圏内で英語を公用語とする数少ない国で、ヨーロッパ旅行と組み合わせる人に人気です。ただし、ダブリンは近年の物価・家賃上昇が顕著で、総費用はカナダ・オーストラリアを上回るケースが増えています。90日以内の滞在はビザ不要です。",
    caution: null,
  },
  {
    flag: "🇲🇹",
    name: "マルタ（バレッタ）",
    label: "地中海の穴場留学地",
    total: "約100〜150万円",
    items: [
      { label: "学費", value: "18〜50万円" },
      { label: "航空券（往復）", value: "20〜25万円" },
      { label: "生活費（ホームステイ込み）", value: "45〜65万円" },
      { label: "保険料", value: "6〜8万円" },
    ],
    desc: "ヨーロッパとしては割安な留学先として注目されています。ただし航空券は直行便がなく日本からの所要時間が長いため、渡航コストはやや高めです。授業料は時期（夏場は高め）によって変動幅が大きいため、渡航時期の調整が節約のカギになります。",
    caution: "マルタ英語には独特の訛りがあります。純粋なイギリス英語・アメリカ英語を習得したい場合は注意が必要です。",
  },
];

const comparison = [
  { country: "フィリピン", total: "60〜100万円", feature: "コスパ最高・マンツーマン授業" },
  { country: "カナダ", total: "90〜120万円", feature: "英語環境が充実・都市生活" },
  { country: "マルタ", total: "100〜150万円", feature: "ヨーロッパ圏で割安" },
  { country: "オーストラリア", total: "110〜150万円", feature: "人気No.1・情報が豊富" },
  { country: "アイルランド", total: "130〜160万円", feature: "EU圏・観光も充実" },
];

const tips = [
  {
    num: "01",
    title: "渡航時期を選ぶ",
    desc: "語学学校の学費は夏（7〜8月）に高騰します。閑散期の1〜2月や10〜11月に渡航すると、同じ学校でも学費が10〜20%安くなるケースがあります。",
  },
  {
    num: "02",
    title: "滞在方法を検討する",
    desc: "ホームステイは食事付きで安心感がありますが、長期になるほど割高です。シェアハウスや学生寮に移ることで生活費を大幅に抑えられます。",
  },
  {
    num: "03",
    title: "エージェントを活用する",
    desc: "エージェントを通すことで学校選びから保険・ビザの手配まで一括サポートを受けられます。費用は学校側が負担する仕組みのため、利用者への追加費用は基本ゼロです。",
  },
];

const faqs = [
  {
    q: "語学留学の費用は分割で支払えますか？",
    a: "学費は一括払いが多いですが、エージェント経由であれば分割払いや留学ローンの案内をしてもらえる場合があります。まず無料相談で確認してみましょう。",
  },
  {
    q: "社会人でも短期の語学留学はできますか？",
    a: "はい。1〜3ヶ月の短期留学は有給休暇や長期休暇を活用して渡航する社会人も多く、エージェントもこうしたニーズに対応したプランを持っています。",
  },
  {
    q: "語学留学とワーホリはどう違いますか？",
    a: "語学留学ビザは就労に制限があり「学ぶこと」が目的です。ワーホリは現地で働ける分、費用を現地収入で補えます。目的と予算に合わせてどちらが向いているかを検討しましょう。",
  },
  {
    q: "フィリピンとカナダ、英語力の伸びに差はありますか？",
    a: "習得できる英語の質は異なります。フィリピンはマンツーマンでスピーキングを集中的に鍛えるのに向いており、カナダは多国籍環境でのリアルな英語運用に強みがあります。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RyugakuCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">費用ガイド｜語学留学</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            語学留学にかかる費用はいくら？
            <br />
            <span className="text-primary">国別まとめ【2026年最新版】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            学費だけでなく、渡航費・生活費・保険料を含めたトータルの費用を国別に解説します。予算計画の参考にしてください。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-soft rounded-2xl p-6 border border-border">
            <p className="font-bold text-foreground mb-3">まず知っておきたい：語学留学費用の4つの内訳</p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              語学留学の費用を考えるとき、「学費」だけを見て安い・高いと判断するのはよくある失敗です。実際には以下の4項目の合計で考える必要があります。
            </p>
            <ul className="space-y-2">
              {[
                "語学学校の学費（授業料・教材費）",
                "渡航費（往復航空券）",
                "生活費（家賃・食費・交通費など）",
                "保険料（留学・海外専用保険）",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              ※ 保険について：一般的な「海外旅行保険」では補償が不十分なことが多く、語学留学には留学・海外専用保険への加入が推奨されます。3ヶ月の保険料の相場は5〜13万円程度です。
            </p>
          </div>
        </div>
      </section>

      {/* Country cards */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="3ヶ月・総額目安（2026年版）">
            国別：語学留学の費用内訳
          </SectionHeading>
          <div className="space-y-8">
            {countries.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <p className="font-bold text-foreground">{c.name}</p>
                    <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                      {c.label}
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <tbody>
                      {c.items.map((item) => (
                        <tr key={item.label} className="border-b border-border/50 last:border-0">
                          <td className="py-2 text-muted pr-4">{item.label}</td>
                          <td className="py-2 font-medium text-right">{item.value}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/5">
                        <td className="py-2 font-bold text-foreground pr-4">合計目安</td>
                        <td className="py-2 font-bold text-primary text-right">{c.total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>

                {c.caution && (
                  <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                    <p className="text-xs text-amber-800">
                      <span className="font-bold">注意：</span>{c.caution}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="コスパ順で並べるとこうなる">
            5カ国の費用比較まとめ
          </SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">国</th>
                  <th className="text-left px-4 py-3 font-bold">3ヶ月の総額目安</th>
                  <th className="text-left px-4 py-3 font-bold hidden sm:table-cell">特徴</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.country} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-4 py-3 font-medium">{row.country}</td>
                    <td className="px-4 py-3 font-bold text-primary">{row.total}</td>
                    <td className="px-4 py-3 text-muted hidden sm:table-cell">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            ※ 費用は2026年時点の為替・相場を参考にした目安です。為替変動・学校・時期により変わります。
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="知っているだけで数十万変わる">
            費用を抑える3つのポイント
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.num} className="bg-white rounded-2xl p-6 border border-border">
                <div className="text-3xl font-black text-primary/20 mb-2">{tip.num}</div>
                <p className="font-bold text-foreground mb-2">{tip.title}</p>
                <p className="text-sm text-muted leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="よくある疑問にお答えします">
            よくある質問
          </SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-border rounded-2xl p-6">
                <p className="font-bold text-foreground mb-2">Q. {faq.q}</p>
                <p className="text-sm text-muted leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="目的別に選ぼう">
            費用を相談できるおすすめエージェント
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link href="/smaru" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">💰 コスパ重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">スマ留</p>
              <p className="text-xs text-muted leading-relaxed">業界最安値保証。同じ学校・期間なら他社より高ければ差額返金。費用を抑えたい方に。</p>
            </Link>
            <Link href="/iss" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🛡️ サポート重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">ISS留学ライフ</p>
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。費用相談から渡航まで丁寧にサポートしてくれる。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 実績・社会人向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。多彩な国・学校から自分に合ったプランを提案してもらえる。</p>
            </Link>
          </div>
          <p className="text-center text-sm text-muted">
            全社を比較したい方は → <Link href="/best-3" className="text-primary font-bold hover:underline">おすすめエージェント比較ページ</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            迷ったらまず無料相談を。
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            国選びから費用の内訳、スケジュール設計まで、<br className="hidden sm:block" />
            エージェントの無料相談で一緒に考えてもらうのが最短ルートです。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5社を比較する →
          </CtaButton>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-bold text-foreground mb-5">関連記事</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                emoji: "💰",
                title: "ワーホリにかかる費用はいくら？国別まとめ",
                href: "/waho-cost",
              },
              {
                emoji: "🤔",
                title: "そもそも留学エージェントって必要？",
                href: "/agent-hitsuyou",
              },
              {
                emoji: "🔍",
                title: "留学エージェントの選び方3つのポイント",
                href: "/agent-erabi",
              },
              {
                emoji: "🗣",
                title: "英語力ゼロでもワーホリ・留学はできる？",
                href: "/eigo-zero",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-2xl flex-shrink-0">{article.emoji}</span>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PR表記 */}
      <div className="bg-card text-center py-3 text-xs text-muted">
        ※ 当サイトはアフィリエイト広告を利用しています。詳しくは
        <Link href="/disclosure" className="underline hover:text-primary ml-1">
          広告掲載について
        </Link>
        をご確認ください。
      </div>
    </>
  );
}
