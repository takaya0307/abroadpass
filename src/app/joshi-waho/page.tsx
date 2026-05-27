import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "女性一人でワーホリは危険？安全な国選び・仕事探し・注意点を解説【2026年】 | Abroad Pass",
  description:
    "女性が一人でワーホリに行くのは危険？治安・住居・仕事・費用など、女性特有の不安をまとめて解消。安全な国の選び方やエージェント活用法も解説します。【2026年最新】",
  openGraph: {
    title: "女性一人でワーホリは危険？安全な国選び・仕事探し・注意点を解説【2026年】",
    description:
      "治安・住居・仕事探しなど、女性一人のワーホリに関する不安をまとめて解消。安全な国の選び方と渡航前の準備を解説します。",
  },
};

const faqData = [
  {
    question: "女性一人でワーホリに行くのは危険ですか？",
    answer:
      "国と場所を選べば十分安全に過ごせます。オーストラリア・カナダ・ニュージーランドは治安が良く、日本人女性の一人渡航者も多いです。ただしどの国でも夜の一人歩きや知らない人の車に乗ることなど、基本的な安全対策は必要です。エージェントを通じて最初の住居や環境を整えてから渡航すると、リスクを大幅に下げられます。",
  },
  {
    question: "女性一人でも仕事は見つかりますか？",
    answer:
      "見つかります。カフェ・レストラン・ホテル・保育施設・日系企業など、女性が活躍しやすい職場は多くあります。特にカフェやホスピタリティ系は採用されやすく、英語力を問わず働けるケースもあります。渡航前にある程度の英語力を身につけておくと、選択肢がさらに広がります。",
  },
  {
    question: "一人での住居探しが不安です。どうすればいいですか？",
    answer:
      "最初の1〜2ヶ月は学校付きのホームステイか女性専用シェアハウスを利用するのがおすすめです。エージェントを通じて渡航前に手配しておくと、到着後すぐに安心できる環境が整います。現地に慣れてから自分でシェアハウスやフラットに引っ越す流れが一般的です。",
  },
  {
    question: "費用はどのくらい準備すればいいですか？",
    answer:
      "渡航前の準備費用（ビザ・航空券・保険など）で30〜50万円、現地での生活費として月20〜30万円が目安です。仕事が決まるまでの3ヶ月分は手元に用意しておくと安心です。合計150〜250万円を目標に貯めておくと余裕を持って渡航できます。",
  },
  {
    question: "英語がほとんどできませんが一人で大丈夫ですか？",
    answer:
      "大丈夫です。語学学校に通いながらスタートする方法が一般的で、最初の数ヶ月で日常生活に必要な英語は身につきます。ただし、ゼロの状態だと住居探しや仕事探しで苦労することもあるので、渡航前にオンライン英会話などで基礎を固めておくと安心です。エージェントを使えば、英語力が低い段階でも日本語でサポートを受けられます。",
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

const countries = [
  {
    flag: "🇦🇺",
    name: "オーストラリア",
    safety: "★★★★★",
    jobs: "★★★★★",
    japanese: "多い",
    point: "女性一人渡航者が最も多く、日本人コミュニティも充実。シドニー・メルボルンは生活インフラが整っていて安心感が高い。",
  },
  {
    flag: "🇨🇦",
    name: "カナダ",
    safety: "★★★★☆",
    jobs: "★★★★☆",
    japanese: "多い",
    point: "バンクーバー・トロントは多文化都市で日本人も多く馴染みやすい。治安は全般的に良好で、女性一人でも生活しやすい。",
  },
  {
    flag: "🇳🇿",
    name: "ニュージーランド",
    safety: "★★★★★",
    jobs: "★★★☆☆",
    japanese: "普通",
    point: "世界有数の治安の良さ。のんびりした国民性で女性が暮らしやすい。仕事の数はオーストラリアより少なめ。",
  },
  {
    flag: "🇮🇪",
    name: "アイルランド",
    safety: "★★★★☆",
    jobs: "★★★☆☆",
    japanese: "少ない",
    point: "EU唯一の英語圏。年齢制限は他国と同じく30歳以下だが年間発給枠が800人と少ないため早めの申請が必要。日本人が少なく英語漬けになれる。",
  },
  {
    flag: "🇬🇧",
    name: "イギリス",
    safety: "★★★☆☆",
    jobs: "★★★★☆",
    japanese: "普通",
    point: "ロンドンは仕事が豊富だが物価が高く、治安のばらつきも大きい。エリア選びが重要。ブライトンは比較的住みやすい。",
  },
];

const safetyTips = [
  { icon: "🏠", title: "最初の住居は渡航前に手配する", desc: "到着当日に住む場所が決まっていない状態は危険です。最初の1〜2ヶ月分だけでも渡航前にエージェントを通じて手配しておきましょう。女性専用シェアハウスやホームステイが安心です。" },
  { icon: "📱", title: "現地SIMカードをすぐに取得する", desc: "スマートフォンが使えない状態での移動はリスクが高いです。空港でSIMを購入するか、日本でeSIMを契約してから渡航しましょう。Google Mapsとタクシーアプリは必須です。" },
  { icon: "🚕", title: "移動はUberや正規タクシーを使う", desc: "知らない人の車に乗ること・夜間の一人歩きは避けましょう。UberやLyftなどの配車アプリを活用すると、記録が残るため安全性が上がります。" },
  { icon: "💊", title: "海外保険は手厚いものに加入する", desc: "病気・怪我・盗難など、海外では予期せぬトラブルが起こります。特に女性は婦人科系の医療費も念頭に、カバー範囲の広い保険に加入しておきましょう。" },
  { icon: "👭", title: "友人・コミュニティを早めに作る", desc: "一人で抱え込まないことが大切です。語学学校のクラスメート・シェアハウスの住人・日本人コミュニティなど、現地での繋がりを早めに作ることがメンタル面でも安全面でも重要です。" },
  { icon: "📋", title: "緊急連絡先リストを作っておく", desc: "現地の警察番号・エージェントの緊急連絡先・大使館の番号は必ず控えておきましょう。日本の家族にも滞在先住所を共有しておくと安心です。" },
];

const jobs = [
  { icon: "☕", title: "カフェ・飲食店", desc: "最も就職しやすい職種の一つ。英語力が低くてもOKなケースが多く、チップ収入も見込める。バリスタスキルを身につけると重宝される。" },
  { icon: "🏨", title: "ホテル・ホスピタリティ", desc: "フロント・ハウスキーピング・レストランスタッフなど。大手ホテルチェーンは研修制度が整っており、未経験でも入りやすい。" },
  { icon: "👶", title: "オペア・チャイルドケア", desc: "現地家庭に住み込みで子どものお世話をしながら、食事・住居・小遣いをもらう形態。語学力向上と節約を同時に実現できる。" },
  { icon: "🛒", title: "小売・スーパーマーケット", desc: "基本的な英語力があれば働けるケースが多い。シフト制で時間の自由が効き、英語学校と並行しやすい。" },
  { icon: "💻", title: "日系企業・日本語スタッフ", desc: "日本語が活かせる環境。観光地の土産店・日本食レストラン・現地の日系企業など。英語力が低い段階でのスタートに向いている。" },
  { icon: "🌾", title: "ファームジョブ（農場）", desc: "オーストラリアのセカンドビザ申請に必要な88日ルールへの対応に使われることが多い。体力仕事だが高収入なケースも。" },
];

export default function JoshiWahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">女性のワーホリガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            女性一人でワーホリは危険？
            <br />
            <span className="text-primary">安全な国選び・仕事・注意点を解説</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            「一人で海外に行くのが怖い」「仕事が見つかるか不安」「住む場所はどうすれば？」——
            女性一人のワーホリに対して不安を持つ方は多いですが、適切な準備をすれば十分安全に楽しめます。
            この記事では、女性特有の不安を一つひとつ解消していきます。
          </p>
          <div className="flex flex-wrap gap-3">
            {["🇦🇺 女性ワーホリ人気No.1はオーストラリア", "💼 女性向けの仕事は豊富", "🛡️ 準備次第で安全に過ごせる"].map((t) => (
              <span key={t} className="text-sm bg-white border border-border rounded-full px-4 py-1.5 font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 国別比較 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="どの国が女性に向いているか">
            女性一人ワーホリ おすすめ国比較
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            治安・仕事の見つけやすさ・日本人コミュニティの充実度など、女性目線で主要国を比較しました。
          </p>
          <div className="space-y-4">
            {countries.map((c) => (
              <div key={c.name} className="bg-soft rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="font-bold">{c.name}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm mb-3">
                  <div><span className="text-muted text-xs">治安</span><br /><span className="font-medium">{c.safety}</span></div>
                  <div><span className="text-muted text-xs">仕事の多さ</span><br /><span className="font-medium">{c.jobs}</span></div>
                  <div><span className="text-muted text-xs">日本人コミュニティ</span><br /><span className="font-medium">{c.japanese}</span></div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{c.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-3">※ 評価は一般的な傾向であり、エリアや時期によって異なります。</p>
          <div className="mt-4 text-center">
            <Link href="/waho-country" className="text-primary text-sm font-bold underline underline-offset-4">
              → 国別ワーホリ詳細比較はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* 安全対策 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="危険を避けるための準備">
            女性ワーホリの安全対策 6つのポイント
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            「治安が良い国でも油断は禁物」というのは事実ですが、<span className="font-bold text-foreground">事前準備を徹底すればリスクは大幅に下げられます</span>。
            特に最初の住居と移動手段の確保が最重要です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tip.icon}</span>
                  <h3 className="font-bold text-sm">{tip.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 住居 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="最初の環境が大切">
            女性一人の住居選び
          </SectionHeading>
          <div className="space-y-4">
            {[
              {
                type: "ホームステイ",
                icon: "🏡",
                good: "現地家族と一緒に住むため最も安全。英語力が低くても安心できる環境。食事付きのケースも多く、生活費が予測しやすい。",
                bad: "自由度が低く、門限や生活ルールがある場合がある。費用はシェアハウスより高め。",
                recommend: "渡航初期・英語力が低い方に特におすすめ",
              },
              {
                type: "女性専用シェアハウス",
                icon: "👩‍👩‍👧",
                good: "同性のみの環境で安心感が高い。他の女性ワーホリ仲間と情報共有しやすく、友人もできやすい。費用はホームステイより安め。",
                bad: "人気物件は早めに埋まるため、早めの手配が必要。",
                recommend: "安全・コスパ・コミュニティを重視する方に",
              },
              {
                type: "一般シェアハウス",
                icon: "🏠",
                good: "費用が最も安く、自由度が高い。現地の人との交流で英語力が伸びやすい。",
                bad: "男女混合のケースも多く、ルームメイトの当たり外れがある。現地に慣れてから選ぶのが無難。",
                recommend: "現地に慣れた後・費用を抑えたい方に",
              },
            ].map((h) => (
              <div key={h.type} className="bg-soft rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{h.icon}</span>
                  <h3 className="font-bold">{h.type}</h3>
                  <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{h.recommend}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-green-700 mb-1">✓ メリット</p>
                    <p className="text-xs text-muted leading-relaxed">{h.good}</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-red-600 mb-1">✗ デメリット</p>
                    <p className="text-xs text-muted leading-relaxed">{h.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 仕事 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="収入を得るための選択肢">
            女性が働きやすいワーホリの仕事
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            ワーホリ中は現地で働いて生活費を稼ぐことができます。
            女性が働きやすい職種は多く、<span className="font-bold text-foreground">英語力が低い段階でも始められる仕事</span>から順番に紹介します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{job.icon}</span>
                  <h3 className="font-bold text-sm">{job.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="いくら準備すればいいか">
            女性ワーホリの費用目安
          </SectionHeading>
          <div className="overflow-x-auto rounded-2xl border border-border mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">項目</th>
                  <th className="p-3 text-left">費用目安</th>
                  <th className="p-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "ビザ申請料", cost: "約2〜4万円", note: "国によって異なる" },
                  { item: "航空券（往復）", cost: "10〜25万円", note: "時期・行き先で変動" },
                  { item: "海外保険（1年）", cost: "15〜30万円", note: "婦人科カバーの確認を" },
                  { item: "渡航前英語学習", cost: "3〜10万円", note: "オンライン英会話など" },
                  { item: "現地初期費用", cost: "20〜40万円", note: "最初の住居・生活用品" },
                  { item: "現地生活費（月）", cost: "15〜25万円", note: "就職前3ヶ月分は手元に" },
                ].map((row, i) => (
                  <tr key={row.item} className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-soft"}`}>
                    <td className="p-3 font-medium">{row.item}</td>
                    <td className="p-3 font-bold text-primary">{row.cost}</td>
                    <td className="p-3 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-primary/5 rounded-2xl text-sm text-muted">
            💡 現地での就労（カフェ・ホテル・農場など）で月10〜20万円程度を稼ぐ方が多く、
            後半は出費を自力でカバーできるケースがほとんどです。まずは<span className="font-bold text-foreground">150〜200万円</span>を目標に貯金を始めましょう。
          </div>
          <div className="mt-4 text-center">
            <Link href="/waho-cost" className="text-primary text-sm font-bold underline underline-offset-4">
              → 国別ワーホリ費用の詳細はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* エージェント */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="女性こそ使うべき理由">
            エージェントを使うと何が変わるか
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            女性一人のワーホリで最もリスクが高いのは「何も手配せずに渡航すること」です。
            エージェントを使えば<span className="font-bold text-foreground">住居・語学学校・緊急サポートを渡航前に確保でき</span>、
            現地での一人感が大幅に減ります。サービスは完全無料です。
          </p>
          <div className="space-y-4 mb-8">
            {[
              { icon: "🏠", title: "住居を日本から手配できる", desc: "到着当日から安全な住居が確保された状態で渡航できる。ホームステイや女性向けシェアハウスの紹介も可能。" },
              { icon: "🆘", title: "現地トラブルを日本語でサポート", desc: "体調不良・盗難・職場のトラブルなど、緊急時に日本語で相談できる窓口があるだけで心強さが全然違う。" },
              { icon: "🎓", title: "語学学校とセットで手配できる", desc: "到着後すぐ学校に通える状態を作ることで、同じ境遇の友人が早期にできてコミュニティが生まれやすい。" },
              { icon: "💰", title: "完全無料で使える", desc: "エージェントの費用は語学学校側が負担するため、利用者の費用は増えない。直接申し込みと費用は変わらない。" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-white rounded-2xl border border-border">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-base mb-4">女性ワーホリにおすすめのエージェント</h3>
          <div className="space-y-3">
            {[
              { name: "ラストリゾート", href: "/lastresort", tag: "ワーホリ特化・現地サポート充実", desc: "ワーホリ専門エージェント。オーストラリア・カナダ・アイルランドに現地オフィスを持ち、渡航後のトラブルにも素早く対応。" },
              { name: "スマ留", href: "/smaru", tag: "費用重視・コスパ最強", desc: "学校手配料が業界最安水準。費用を抑えながらしっかりサポートを受けたい方に。フィリピン・マルタなど多国籍に対応。" },
              { name: "ISS留学ライフ", href: "/iss", tag: "丁寧なカウンセリング", desc: "創業30年以上の実績と丁寧なカウンセリングが特徴。初めての海外・不安が多い方でも安心して相談できる。" },
            ].map((agent) => (
              <Link key={agent.name} href={agent.href} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-border hover:border-primary transition-colors">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            Q&A
          </SectionHeading>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-soft rounded-2xl border border-border p-5 group">
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
      <section className="py-12 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: "/waho-country", emoji: "🌏", title: "ワーホリおすすめ国ランキング", tag: "国選び" },
              { href: "/waho-cost", emoji: "💰", title: "ワーホリ費用 国別まとめ", tag: "費用" },
              { href: "/shakaijin-waho", emoji: "👔", title: "30代・社会人のワーホリ完全ガイド", tag: "社会人" },
              { href: "/eigo-zero", emoji: "🗣️", title: "英語力ゼロでもワーホリはできる？", tag: "英語" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-border hover:border-primary transition-colors">
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
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-primary font-bold text-sm mb-2">不安なことは渡航前に全部解消しよう</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            まずは無料相談で<br />安全なプランを作る
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            「どの国が女性一人に向いているか」「住居はどうすればいいか」など、<br />
            不安なことはすべてエージェントへの無料相談で解消できます。<br />
            準備を整えた上で渡航すれば、きっと最高の1年になります。
          </p>
          <CtaButton href="/best-3">
            おすすめエージェント3選を見る
          </CtaButton>
        </div>
      </section>
    </>
  );
}
