import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ワーホリ（ワーキングホリデー）とは？仕組みから費用・メリット・デメリットまで完全解説【2026年】 | Abroad Pass",
  description:
    "ワーキングホリデー（ワーホリ）とは何か？仕組み・協定32カ国・年齢制限・費用・メリット・デメリットを外務省情報をもとに正確に解説。語学留学との違いも。【2026年最新】",
};

const countries = [
  { region: "オセアニア", list: "オーストラリア、ニュージーランド" },
  { region: "北米", list: "カナダ" },
  { region: "南米", list: "アルゼンチン、チリ、ウルグアイ" },
  { region: "アジア", list: "韓国、台湾、香港" },
  {
    region: "ヨーロッパ",
    list: "フランス、ドイツ、英国、アイルランド、デンマーク、ノルウェー、ポルトガル、ポーランド、スロバキア、オーストリア、ハンガリー、スペイン、アイスランド、チェコ、リトアニア、スウェーデン、エストニア、オランダ、フィンランド、ラトビア、ルクセンブルク、マルタ、イタリア",
  },
];

const merits = [
  {
    emoji: "💰",
    title: "現地で働いて費用を補える",
    desc: "就労が認められているため、カフェ・農場・工場・日系企業など様々な仕事に就けます。語学留学と違い、生活費を自分で稼ぎながら滞在できます。ただし国によって職種や同一雇用主のもとで働ける期間に制限がある場合があります。",
  },
  {
    emoji: "🗣",
    title: "本物の英語環境に長期間浸れる",
    desc: "観光旅行や短期留学では得られない「日常の英語」を体験できます。1年間の滞在で英語力が実践的に伸びる人が多いです。",
  },
  {
    emoji: "💼",
    title: "帰国後のキャリアで活かせる",
    desc: "海外経験・英語力・異文化適応力は就職活動で評価されます。特に外資系・グローバル企業・観光業では強みになります。",
  },
  {
    emoji: "📚",
    title: "語学学校にも通える",
    desc: "多くの国で最大6ヶ月程度の語学学校への通学が可能です。「英語を学びながら働く」二刀流スタイルができます。",
  },
];

const demerits = [
  {
    title: "年齢制限がある",
    desc: "30歳（一部の国は異なる）を超えると申請できません。「いつかやろう」と先延ばしにしているうちに年齢を超えてしまうケースも多いです。",
  },
  {
    title: "就労に制限がある場合がある",
    desc: "ワーホリは「付随的な就労」を認める制度のため、国によっては職種や同一雇用主のもとで働ける期間に上限が設けられています。渡航前に各国の条件を確認しましょう。",
  },
  {
    title: "計画性がないと目的を見失いやすい",
    desc: "自由度が高い分、「気づいたら1年が終わっていた」という人も。渡航前にある程度の目標設定をしておくことが重要です。",
  },
  {
    title: "キャリアの空白になりうる",
    desc: "企業によってはワーホリ期間をキャリアの空白と見る場合もあります。ただし近年は海外経験をポジティブに評価する企業も増えています。",
  },
];

const faqs = [
  {
    q: "ワーホリは何歳から何歳まで行けますか？",
    a: "基本は18歳以上30歳以下（申請時点）です。一部の国・地域は異なる場合があるため、渡航先の大使館や公式情報で確認することをおすすめします。",
  },
  {
    q: "ワーホリ中は何でも仕事ができますか？",
    a: "国によって就業職種や同一雇用主のもとで働ける期間に制限がある場合があります。例えばオーストラリアでは一部の農業・漁業を除き、同一雇用主での就労は6ヶ月が上限です。渡航前に必ず確認しましょう。",
  },
  {
    q: "ワーホリに英語力は必要ですか？",
    a: "ビザ申請に英語力の基準はありません。ただし現地での生活・仕事探しには最低限の会話力があると大きく変わります。渡航前に語学学校やオンライン英会話で基礎を作るのがおすすめです。",
  },
  {
    q: "ワーホリは一人でも大丈夫ですか？",
    a: "はい、一人で渡航する人が大多数です。エージェントを利用することで、現地の情報収集・学校や仕事の手配を一緒に進めてもらえるため、一人でも安心して準備できます。",
  },
  {
    q: "ワーホリは複数の国に行けますか？",
    a: "各国のビザで別々に申請することで、複数の国に順番に滞在することが可能です。例えばオーストラリア1年→カナダ1年のように、2カ国合計2年の海外生活を実現する方も多くいます。",
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

export default function WahoTowaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">基礎知識｜ワーホリ</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ワーホリ（ワーキングホリデー）とは？
            <br />
            <span className="text-primary">仕組みから費用・メリット・デメリットまで</span>
            <br />
            完全解説【2026年】
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「ワーホリって何？」「語学留学と何が違うの？」この記事では、ワーキングホリデーの仕組みを基礎からわかりやすく解説します。
          </p>
        </div>
      </section>

      {/* What is */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="一言でいうと">ワーホリとは？</SectionHeading>
          <div className="bg-soft rounded-2xl p-6 border border-border mb-8">
            <p className="text-base leading-relaxed text-foreground">
              ワーキングホリデー（ワーホリ）とは、<strong>協定を結んだ国の間で、若者が相手国に滞在しながら就労できる制度</strong>です（外務省）。観光・就学・就労を組み合わせて自由に過ごせるのが最大の特徴です。
            </p>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              制度の趣旨は「休暇目的の滞在中に、旅行・生活費を補うための付随的な就労を認める」というもの。就労はあくまで滞在費を補う手段であり、国によって職種や同一雇用主のもとで働ける期間に制限が設けられている場合があります。
            </p>
          </div>

          {/* Comparison table */}
          <p className="font-bold text-foreground mb-4">語学留学との違い</p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">比較項目</th>
                  <th className="text-left px-4 py-3 font-bold">ワーホリ</th>
                  <th className="text-left px-4 py-3 font-bold">語学留学</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ビザの種類", "ワーキングホリデービザ", "学生ビザ（または観光ビザ）"],
                  ["就労", "可能（国によって制限あり）", "制限あり"],
                  ["学校通学", "最大6ヶ月程度", "自由"],
                  ["滞在期間", "最長1〜2年", "数週間〜数年"],
                  ["費用の補い方", "現地で働いて収入を得られる", "基本的に持参資金のみ"],
                ].map(([item, waho, study], i) => (
                  <tr key={item} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-4 py-3 font-medium text-muted">{item}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{waho}</td>
                    <td className="px-4 py-3 text-muted">{study}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="2026年4月時点・外務省">ワーホリに行ける国・地域（32カ国・地域）</SectionHeading>
          <div className="space-y-4">
            {countries.map((c) => (
              <div key={c.region} className="bg-white rounded-2xl border border-border p-5">
                <p className="font-bold text-primary text-sm mb-2">{c.region}</p>
                <p className="text-sm text-foreground leading-relaxed">{c.list}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            ※ 人気が高いのはオーストラリア・カナダ・ニュージーランド・英国の4カ国です。出典：<a href="https://www.mofa.go.jp/mofaj/toko/visa/working_h.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">外務省 ワーキング・ホリデー制度</a>
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="申請前に確認しておこう">年齢制限・申請条件</SectionHeading>
          <div className="bg-soft rounded-2xl p-6 border border-border mb-6">
            <p className="font-bold text-foreground mb-3">基本条件：18歳以上30歳以下（申請時点）</p>
            <p className="text-sm text-muted leading-relaxed">
              一部の国・地域は年齢上限が異なる場合があります。渡航を検討している国の大使館や公式情報で最新の条件を必ず確認してください。
            </p>
          </div>
          <p className="font-bold text-foreground mb-3">その他の主な条件</p>
          <ul className="space-y-2">
            {[
              "日本国籍を持つこと",
              "有効なパスポートを持つこと",
              "健康であること",
              "滞在資金を所持すること",
              "子・被扶養者を同伴しないこと",
              "過去に同国のワーホリビザを取得していないこと（一部の国を除く）",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
            <p className="text-sm text-blue-800 leading-relaxed">
              <span className="font-bold">複数回参加について：</span>
              2024〜2026年の改定により、カナダ・韓国・台湾・スロバキアでは一生涯2回の参加が可能になりました。また英国は最長2年間の連続滞在が認められています。
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="渡航前に把握しておきたい">ワーホリにかかる費用の目安</SectionHeading>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ビザ申請費", "4〜7万円"],
                  ["航空券（往復）", "10〜25万円"],
                  ["保険料（1年）", "18〜26万円（日本の保険）／6〜12万円（現地保険）"],
                  ["語学学校（任意・3ヶ月）", "30〜50万円"],
                  ["生活費（家賃込み）", "月20〜30万円"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-soft"}>
                    <td className="px-5 py-3 text-muted font-medium">{label}</td>
                    <td className="px-5 py-3 font-bold text-foreground text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-4 leading-relaxed">
            現地での就労収入で生活費を補えるため、実質の持ち出しは100〜200万円程度で収まるケースが多いです。国ごとの詳しい費用は
            <Link href="/waho-cost" className="text-primary underline ml-1">ワーホリ費用の国別まとめ</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* Merits */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="ワーホリを選ぶ理由">メリット</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {merits.map((m) => (
              <div key={m.title} className="bg-soft rounded-2xl border border-border p-6">
                <span className="text-3xl mb-3 block">{m.emoji}</span>
                <p className="font-bold text-foreground mb-2">{m.title}</p>
                <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demerits */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="出発前に知っておきたい">デメリット・注意点</SectionHeading>
          <div className="space-y-4">
            {demerits.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl border border-border p-6">
                <p className="font-bold text-foreground mb-2">⚠️ {d.title}</p>
                <p className="text-sm text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading sub="よくある疑問にお答えします">よくある質問</SectionHeading>
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

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            年齢制限がある制度だからこそ、早めの一歩が大切。
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            「まず話だけ聞いてみたい」でも大丈夫。<br className="hidden sm:block" />
            エージェントの無料相談で、自分に合ったプランを一緒に考えてもらいましょう。
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
              { emoji: "💰", title: "ワーホリにかかる費用はいくら？国別まとめ", href: "/waho-cost" },
              { emoji: "🗣", title: "英語力ゼロでもワーホリ・留学はできる？", href: "/eigo-zero" },
              { emoji: "🧳", title: "ワーホリ出発前にやること・準備チェックリスト", href: "/waho-junbi" },
              { emoji: "💼", title: "ワーホリ後の就職は不利？帰国後のキャリアをリアルに解説", href: "/career" },
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
