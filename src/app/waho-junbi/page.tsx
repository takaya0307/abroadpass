import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "ワーホリ出発前にやること・準備チェックリスト【経験者が教える】| Abroad Pass",
  description:
    "ワーホリ出発前にやること・持ち物を経験者が徹底解説。カナダ・オーストラリア計2年の実体験をもとに、手続き・持ち物・マインドセットまでまとめました。",
  openGraph: {
    title: "ワーホリ出発前にやること・準備チェックリスト【経験者が教える】",
    description:
      "カナダ・オーストラリア計2年の実体験をもとに、手続き・持ち物・マインドセットまで解説。",
  },
};

const faqItems = [
  {
    q: "ワーホリの準備はいつから始めればいいですか？",
    a: "ビザ申請が必要なため、出発の3〜6ヶ月前から動き始めるのが理想です。特にイギリス・アイルランドは抽選制のため、さらに早めの準備が必要です。エージェントに相談すれば逆算したスケジュールを一緒に作ってもらえます。",
  },
  {
    q: "お金はいくら持っていけばいいですか？",
    a: "最初の2〜3ヶ月は収入ゼロを想定して、生活費の3ヶ月分（30〜60万円）を手元に確保しておくのが安心です。クレジットカードと現金を組み合わせて持っていきましょう。",
  },
  {
    q: "スマホはどうすればいいですか？",
    a: "出発前にSIMロック解除をしておき、現地でプリペイドSIMを購入するのが最もコスパが良いです。渡航先によって対応バンドが異なるので、エージェントや渡航先の情報を事前に確認しましょう。",
  },
];

const todoList = [
  {
    category: "最優先（出発6ヶ月前〜）",
    color: "border-red-400",
    items: [
      { task: "ビザ申請", note: "国によっては抽選・先着。早めが鉄則" },
      { task: "留学・ワーホリ専用保険の加入", note: "海外旅行保険ではなく専用保険が必要" },
      { task: "エージェントへの相談", note: "準備全体のスケジュールを一緒に作ってもらう" },
    ],
  },
  {
    category: "出発3ヶ月前まで",
    color: "border-yellow-400",
    items: [
      { task: "航空券の購入", note: "早めほど安い。オープンジョーも検討" },
      { task: "海外対応クレジットカードの作成", note: "VISAかMastercard、2枚あると安心" },
      { task: "国際免許証の取得", note: "運転する可能性があれば必須" },
      { task: "スマホのSIMロック解除", note: "現地SIMを使う場合に必要" },
    ],
  },
  {
    category: "出発1ヶ月前まで",
    color: "border-green-400",
    items: [
      { task: "住居の仮手配", note: "最初の1〜2週間分だけ確保しておく" },
      { task: "持ち物の準備・荷造り", note: "スーツケース1個＋バックパック1個が目安" },
      { task: "日本の銀行・住所変更手続き", note: "長期不在の場合は金融機関に連絡を" },
      { task: "健康診断・歯科検診", note: "現地の医療費は高いので出発前に済ませておく" },
    ],
  },
];

export default function WahoJunbiPage() {
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
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">ワーホリ準備ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            ワーホリ出発前にやること・
            <br />
            <span className="text-primary">準備チェックリスト</span>【経験者が教える】
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「何を準備すればいい？」「持ち物は何が必要？」——ワーホリ出発前は準備することが多くて
            何から手をつけるか迷いがちです。実際にカナダ・オーストラリアに各1年渡航した筆者が、
            やっておいてよかった手続き・持ち物・マインドセットをまとめました。
          </p>
          <p className="text-xs text-muted mt-4">
            ※ 本記事はアフィリエイト広告を含みます。
            <Link href="/disclosure" className="underline hover:text-primary ml-1">広告掲載について</Link>
          </p>
        </div>
      </section>

      {/* 大前提 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-4">
              ✅ 準備の大前提：「やりすぎない」がコツ
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-3">
              出発前に完璧に準備しようとすると疲弊します。
              ワーホリで最も大切なマインドは<strong>「最悪、現地でなんとかなる」</strong>です。
              現地では日本のものがほぼ手に入ります。ただし高い。
              なので「絶対に必要なもの」だけ日本で準備して、あとは現地調達と割り切るのが正解です。
            </p>
            <p className="text-muted text-sm leading-relaxed">
              またワーホリ中は<strong>予期せぬ引っ越しや移動が頻繁に発生します。</strong>
              シェアハウスのオーナーとのトラブル、入居者とのトラブル、仕事の都合での都市移動など。
              荷物が多いとそのたびに体力・精神力を消耗するので、
              スーツケース1個＋バックパック1個に収まる量を目安にしましょう。
            </p>
          </div>
        </div>
      </section>

      {/* チェックリスト */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            出発前にやること：手続きチェックリスト
          </h2>
          <div className="space-y-6">
            {todoList.map((section) => (
              <div key={section.category} className={`bg-white rounded-2xl border-l-4 ${section.color} p-6 shadow-sm`}>
                <h3 className="font-bold text-base mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.task} className="flex items-start gap-3">
                      <span className="w-5 h-5 border-2 border-muted rounded flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{item.task}</p>
                        <p className="text-xs text-muted mt-0.5">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 中間 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">「何をいつまでにやるか」迷ったらエージェントへ</p>
          <p className="text-muted text-sm mb-6">
            準備のスケジュール管理もエージェントが一緒に考えてくれます。無料なのでまず相談を。
          </p>
          <CtaButton href="/best-3" variant="accent">
            エージェントに無料相談する →
          </CtaButton>
        </div>
      </section>

      {/* 持ち物 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">持ち物リスト</h2>

          {/* 実体験 */}
          <div className="bg-white rounded-2xl p-6 border-l-4 border-primary shadow-sm mb-6">
            <p className="text-sm font-bold text-primary mb-4">✍️ 筆者の実体験：持っていってよかったもの</p>

            <div className="space-y-4">
              <div>
                <p className="font-bold text-sm mb-1">🍜 日本の食品・調味料</p>
                <p className="text-sm text-muted leading-relaxed">
                  現地でも買えますが値段が日本の2〜3倍することも。
                  <strong>鶏ガラの素・中華味・だしの素など粉末・顆粒タイプ</strong>は
                  軽くてかさばらず、現地では手に入りにくいのでおすすめ。
                  インスタントラーメンや好きなお菓子も少量持参すると◎。
                  醤油・みりんなどの液体系は重いので現地調達で。
                </p>
              </div>

              <div>
                <p className="font-bold text-sm mb-1">💊 薬</p>
                <p className="text-sm text-muted leading-relaxed">
                  現地の薬は成分・効き目が日本のものと異なるため、
                  自分に合った薬を持参するのが安心です。
                  胃腸薬・風邪薬・頭痛薬・絆創膏・体温計など、
                  使い慣れたものを一通り持参しましょう。
                </p>
              </div>

              <div>
                <p className="font-bold text-sm mb-1">🧴 日用品</p>
                <p className="text-sm text-muted leading-relaxed">
                  シャンプー・コンディショナー・洗顔料・歯ブラシなど、
                  スーツケースに入るものは日本から持参した方がトータルコストを抑えられます。
                  全部現地調達にすると出費がかさみます。
                </p>
              </div>

              <div>
                <p className="font-bold text-sm mb-1">⚡ その他あると便利なもの</p>
                <p className="text-sm text-muted leading-relaxed">
                  変圧器不要の電化製品、速乾性タオル、折りたたみ傘、
                  洗濯ネット、常備サプリ（ビタミンCなど）。
                </p>
              </div>
            </div>
          </div>

          {/* 現地調達でOKなもの */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="font-bold text-sm mb-4">🛒 現地調達でOKなもの</p>
            <ul className="space-y-2">
              {[
                "衣類（特にかさばるもの。現地で安く買える）",
                "醤油・みりんなどの液体調味料（重いので現地で）",
                "大きな調理器具",
                "家具・インテリア（シェアハウスは基本備え付き）",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* エージェント */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            エージェントに相談すれば準備がぐっと楽になる
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            手続き系の準備（ビザ・保険・住居）はエージェントに相談すれば日本語でサポートしてもらえます。
            「何をいつまでにやるべきか」のスケジュール管理もエージェントが一緒に考えてくれるので、
            初めてのワーホリでも安心です。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "スマ留",
                point: "無料面談のハードルが低く、準備段階から気軽に相談できる。業界最安値保証で費用も安心。",
                href: "/smaru",
              },
              {
                name: "ラストリゾート",
                point: "ワーホリ専門カウンセラーが準備から帰国まで伴走。10万人以上の渡航実績で経験が豊富。",
                href: "/lastresort",
              },
              {
                name: "ISS留学ライフ",
                point: "Z会グループの安心感。丁寧なカウンセリングで準備の不安を一つひとつ解消してくれる。",
                href: "/iss",
              },
            ].map((agent) => (
              <div key={agent.name} className="flex items-start gap-3 p-4 bg-soft rounded-xl">
                <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                <div className="flex-1">
                  <Link href={agent.href} className="font-bold text-primary hover:underline">
                    {agent.name}
                  </Link>
                  <p className="text-xs text-muted mt-1">{agent.point}</p>
                </div>
                <Link href={agent.href} className="text-xs text-primary hover:underline flex-shrink-0">
                  詳細 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="border border-border rounded-2xl overflow-hidden bg-white">
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
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーキングホリデーの基本情報をまるごと解説。協定32カ国・年齢制限も。" },
              { href: "/waho-cost", title: "ワーホリにかかる費用はいくら？国別まとめ", desc: "オーストラリア・カナダなど5カ国のリアルな費用を公開。節約術も解説。" },
              { href: "/waho-country", title: "ワーホリおすすめ国ランキング【英語圏5カ国を比較】", desc: "国の選び方に迷ったら。目的別のおすすめ国を徹底比較。" },
              { href: "/waho-demerits", title: "ワーホリはやめた方がいい？デメリットと後悔しない判断基準", desc: "デメリットを正直に解説。向いている人・向いていない人の判断基準も。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30">
                <p className="font-bold text-sm text-primary mb-1">{a.title}</p>
                <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            準備の不安はエージェントへの無料相談で一気に解決
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm">
            何を準備すべきか、いつまでにやるべきか——こうした疑問はエージェントに
            一度相談するだけでスッキリ解決できます。
            無料なので、まず話を聞いてみるところから始めましょう。
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
