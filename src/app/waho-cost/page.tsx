import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "ワーホリにかかる費用はいくら？国別まとめ【2025年最新】| Abroad Pass",
  description:
    "ワーホリに必要な費用を国別に徹底解説。オーストラリア・カナダ・ニュージーランド・イギリス・アイルランドの渡航費・生活費・ビザ代まで。節約のコツも紹介します。",
  openGraph: {
    title: "ワーホリにかかる費用はいくら？国別まとめ【2025年最新】",
    description:
      "ワーホリに必要な費用を国別に徹底解説。渡航費・生活費・ビザ代まで、リアルな数字を公開。",
  },
};

const faqItems = [
  {
    q: "ワーホリにかかる費用の相場はいくらですか？",
    a: "行き先や期間によって大きく異なります。渡航前に準備する費用（ビザ・航空券・保険・語学学校）だけで50〜100万円以上かかります。生活費は現地就労収入でカバーできる部分もありますが、最初の2〜3ヶ月は収入ゼロになることを想定して、渡航前に最低80〜100万円は用意しておくのが安心です。",
  },
  {
    q: "ワーホリの費用を安く抑えるコツはありますか？",
    a: "①渡航前にしっかり貯金する（最低50〜80万円を目安）、②語学学校は現地入学で費用を抑える、③シェアハウスを選ぶ、④早めにアルバイトを始めて現地収入を得る、の4点が効果的です。",
  },
  {
    q: "留学エージェントを使うと費用は高くなりますか？",
    a: "無料相談・プラン設計は無料のエージェントが多いです。語学学校の手配手数料がかかる場合もありますが、スマ留のように「業界最安値保証」を掲げているエージェントも。費用を比較したうえで使うのがベストです。",
  },
];

const countries = [
  {
    name: "🇦🇺 オーストラリア",
    period: "最長1年（農業従事で最大2〜3年延長可）",
    total: "渡航前費用：約60〜100万円＋生活費",
    breakdown: [
      { label: "ビザ申請費", value: "約7万円（AUD670）" },
      { label: "航空券（往復）", value: "約15〜20万円" },
      { label: "語学学校（1〜3ヶ月）", value: "約20〜40万円" },
      { label: "生活費（月額）", value: "月15〜25万円" },
      { label: "留学保険（1年）", value: "現地6〜12万円\n日本の保険18〜26万円" },
    ],
    point: "英語圏で日本人コミュニティも多く初心者でも挑戦しやすい。農業ビザで延長できる唯一の国。最低賃金が高く（時給約2,500円）、働きながら生活費をカバーしやすい。",
    color: "border-yellow-400",
  },
  {
    name: "🇨🇦 カナダ",
    period: "最長1年",
    total: "渡航前費用：約70〜110万円＋生活費",
    breakdown: [
      { label: "ビザ申請費", value: "約4万円（C$357）" },
      { label: "航空券（往復）", value: "約20〜25万円" },
      { label: "語学学校（1〜3ヶ月）", value: "約25〜45万円" },
      { label: "生活費（月額）", value: "月18〜25万円" },
      { label: "留学保険（1年）", value: "現地6〜12万円\n日本の保険18〜26万円" },
    ],
    point: "バンクーバー・トロントなど都市部は物価高め。ケベック州でフランス語も学べるのが特徴。",
    color: "border-red-500",
  },
  {
    name: "🇳🇿 ニュージーランド",
    period: "最長1年",
    total: "渡航前費用：約50〜90万円＋生活費",
    breakdown: [
      { label: "ビザ申請費", value: "約1万円以下（観光税のみ）" },
      { label: "航空券（往復）", value: "約12〜18万円" },
      { label: "語学学校（1〜3ヶ月）", value: "約15〜30万円" },
      { label: "生活費（月額）", value: "月12〜20万円" },
      { label: "留学保険（1年）", value: "現地6〜12万円\n日本の保険18〜26万円" },
    ],
    point: "5か国の中でビザがほぼ無料で渡航前の初期費用を抑えやすい。自然豊かでのんびりした環境が人気。",
    color: "border-green-500",
  },
  {
    name: "🇬🇧 イギリス",
    period: "最長2年（30歳以下対象）",
    total: "渡航前費用：約100〜160万円＋生活費",
    breakdown: [
      { label: "ビザ申請費", value: "約6万円（GBP319）" },
      { label: "NHS医療付加料(IHS)", value: "1年分 約16万円（必須）" },
      { label: "航空券（往復）", value: "約10〜18万円" },
      { label: "語学学校（1〜3ヶ月）", value: "約25〜50万円" },
      { label: "生活費（月額）", value: "月25〜40万円" },
    ],
    note: "※ IHS（医療付加料）支払い済みのためNHS利用可。別途民間保険加入は任意。",
    point: "ロンドンの生活費は非常に高い。ただしIHS支払いでNHS（公的医療）が使えるのは大きなメリット。2年間滞在できる唯一の国。",
    color: "border-blue-600",
  },
  {
    name: "🇮🇪 アイルランド",
    period: "最長1年（抽選制）",
    total: "渡航前費用：約55〜95万円＋生活費",
    breakdown: [
      { label: "ビザ申請費", value: "約1.6万円" },
      { label: "航空券（往復）", value: "約10〜18万円" },
      { label: "語学学校（1〜3ヶ月）", value: "約20〜40万円" },
      { label: "生活費（月額）", value: "月15〜25万円" },
      { label: "留学保険（1年）", value: "現地6〜12万円\n日本の保険18〜26万円" },
    ],
    point: "ダブリンはIT・金融系企業が集まる欧州のハブ。英語を使いながらヨーロッパ旅行も楽しめる。ただし抽選制のため事前の準備が必要。",
    color: "border-emerald-600",
  },
];

export default function WahoCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">ワーホリ費用ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ワーホリにかかる費用はいくら？
            <br />
            <span className="text-primary">国別まとめ【2025年最新】</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「100万円で足りる？」「どの国が安い？」——ワーホリを考え始めたとき、誰もが最初に悩む費用の問題。
            この記事では渡航費・生活費・ビザ代を国ごとに整理し、節約のポイントまで解説します。
          </p>
          <p className="text-xs text-muted mt-4">
            ※ 本記事はアフィリエイト広告を含みます。
            <Link href="/disclosure" className="underline hover:text-primary ml-1">広告掲載について</Link>
          </p>
        </div>
      </section>

      {/* 費用の全体像 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">ワーホリの費用：まず全体像を把握しよう</h2>
          <p className="text-muted leading-relaxed mb-6">
            ワーホリに必要な費用は大きく「渡航前」「渡航後」に分かれます。さらに渡航後は、
            <strong>現地での就労収入で生活費を賄える</strong>のがワーホリ最大の特徴。
            全額を日本で用意する必要はありません。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 border border-border font-bold">費用の種類</th>
                  <th className="text-left p-3 border border-border font-bold">タイミング</th>
                  <th className="text-left p-3 border border-border font-bold">目安金額</th>
                  <th className="text-left p-3 border border-border font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "ビザ申請費", timing: "渡航前", amount: "1〜22万円", note: "国によって大きく差がある（NZはほぼ無料〜英国は22万円超）" },
                  { type: "航空券", timing: "渡航前", amount: "10〜25万円", note: "早期予約で節約可能" },
                  { type: "留学・ワーホリ専用保険", timing: "渡航前", amount: "現地保険：6〜12万円\n日本の保険：18〜26万円", note: "短期の海外旅行保険ではなくワーホリ専用保険が必要" },
                  { type: "語学学校費", timing: "渡航直後", amount: "15〜50万円", note: "現地入学で安くなる場合も" },
                  { type: "生活費（月額）", timing: "渡航後", amount: "15〜40万円/月", note: "都市・国によって大きく異なる。就労収入で一部カバー可" },
                  { type: "緊急費・予備費", timing: "渡航後", amount: "10〜20万円", note: "必ず確保しておく" },
                ].map((row) => (
                  <tr key={row.type} className="even:bg-soft">
                    <td className="p-3 border border-border font-medium">{row.type}</td>
                    <td className="p-3 border border-border text-muted">{row.timing}</td>
                    <td className="p-3 border border-border font-bold text-primary">{row.amount}</td>
                    <td className="p-3 border border-border text-muted text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-accent/5 border border-accent/20 rounded-2xl p-5">
            <p className="font-bold text-accent mb-2">💡 渡航前に用意すべき貯金の目安</p>
            <p className="text-sm text-muted leading-relaxed">
              ビザ・航空券・保険・語学学校・現地での最初の生活費を合わせると、
              渡航前に<strong>最低80〜100万円以上</strong>用意しておくのが現実的です。
              現地でアルバイトが見つかるまでの2〜3ヶ月間は収入がゼロになることも。
              余裕を持った資金計画をエージェントと一緒に立てることをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 国別費用 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">国別ワーホリ費用の目安</h2>
          <p className="text-muted text-sm mb-8">※ 為替レートや物価変動により変動します。2025年時点の参考値です。</p>

          <div className="space-y-6">
            {countries.map((c) => (
              <div key={c.name} className={`bg-white rounded-2xl border-l-4 ${c.color} p-6 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted">滞在期間: <strong className="text-foreground">{c.period}</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                  {c.breakdown.map((b) => (
                    <div key={b.label} className="bg-soft rounded-xl p-3 text-center">
                      <p className="text-xs text-muted mb-1">{b.label}</p>
                      <p className="text-sm font-bold whitespace-pre-line">{b.value}</p>
                    </div>
                  ))}
                </div>

                {"note" in c && c.note && (
                  <p className="text-xs text-muted bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 mb-4">{c.note}</p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="bg-primary/5 rounded-xl px-4 py-2 inline-flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm text-muted">渡航前の目安:</span>
                    <span className="text-base font-black text-primary">{c.total}</span>
                  </div>
                  <p className="text-sm text-muted flex-1">{c.point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 中間 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">「自分の予算でどこに行けるか相談したい」</p>
          <p className="text-muted text-sm mb-6">
            費用やプランはエージェントへの無料相談で一気に解決できます。
            比較して自分に合ったエージェントを見つけましょう。
          </p>
          <CtaButton href="/best-3#cost" variant="accent">
            費用比較で選ぶ→おすすめ5選を見る
          </CtaButton>
        </div>
      </section>

      {/* 節約術 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">ワーホリ費用を節約する3つのコツ</h2>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "語学学校は「現地入学」で安くなる場合がある",
                body: "日本から申し込む場合、エージェント手数料が上乗せされるケースも。現地で直接入学すると費用を抑えられます。ただし英語に自信がない場合は、日本語サポートつきのエージェント経由が安心です。スマ留は「業界最安値保証」を掲げており、エージェントを使っても割高にならないのが特徴です。",
                link: { text: "スマ留の詳細を見る", href: "/smaru" },
              },
              {
                num: "02",
                title: "シェアハウスで家賃を大幅カット",
                body: "現地でのアパート一人暮らしは月10万円以上かかることも。シェアハウスなら半額以下に抑えられます。特に渡航直後の3ヶ月間はシェアハウスに住んで、仕事が安定してから引越しを検討するのがおすすめ。",
              },
              {
                num: "03",
                title: "現地就労で生活費をカバー",
                body: "ワーホリの最大の強みは「働きながら暮らせる」こと。レストランや農場でのアルバイトをうまく組み合わせると、月15〜25万円の収入を得られる人も。エージェントに相談すれば、仕事探しのサポートも受けられます。",
              },
            ].map((tip) => (
              <div key={tip.num} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="text-3xl font-black text-primary/20 flex-shrink-0">{tip.num}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{tip.body}</p>
                    {tip.link && (
                      <Link href={tip.link.href} className="text-sm text-primary hover:underline mt-2 inline-block">
                        {tip.link.text} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="border border-border rounded-2xl overflow-hidden">
                <summary className="p-5 cursor-pointer font-bold text-foreground hover:bg-soft transition-colors list-none flex items-center justify-between">
                  <span>Q. {item.q}</span>
                  <span className="text-primary ml-4 flex-shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-border pt-4">
                  A. {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-bold text-foreground mb-5">あわせて読みたい</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/ryugaku-cost", title: "語学留学にかかる費用はいくら？国別まとめ【2026年版】", desc: "フィリピン・カナダ・オーストラリアなど5カ国のトータル費用を比較。節約ポイントも解説。" },
              { href: "/ryugaku-vs-waho", title: "語学留学 vs ワーホリ どちらがいい？目的別に徹底比較", desc: "費用・英語力・就職など7つの観点で徹底比較。あなたの目的に合った選び方を解説。" },
              { href: "/waho-country", title: "ワーホリおすすめ国ランキング【英語圏5カ国を比較】", desc: "オーストラリア・カナダ・ニュージーランドなど5カ国を目的別に比較。" },
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーキングホリデーの基本をまるごと解説。協定32カ国・年齢制限も。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30">
                <p className="font-bold text-sm text-primary mb-1">{a.title}</p>
                <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ・Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            費用の不安は、エージェントへの無料相談で解決できる
          </h2>
          <p className="text-white/80 mb-3 leading-relaxed text-sm">
            「自分の貯金でワーホリできる？」「どの国が予算に合う？」——そんな疑問は、
            経験豊富なカウンセラーに直接聞くのが一番早いです。
          </p>
          <p className="text-white/80 mb-8 leading-relaxed text-sm">
            当サイトで比較している5社はすべて<strong>無料で相談可能</strong>。
            まず話を聞いてから決めても遅くありません。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェント5選を見る →
          </CtaButton>
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
