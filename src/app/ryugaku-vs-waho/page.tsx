import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "語学留学 vs ワーホリ どちらがいい？目的別に徹底比較【2026年版】",
  description:
    "語学留学とワーキングホリデーの違いを費用・英語力・就職・年齢制限など7つの観点で徹底比較。あなたの目的に合った選び方と、組み合わせる「留学→ワーホリ」ルートも解説。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugaku-vs-waho",
  },
};

const faqData = [
  {
    question: "語学留学とワーホリはどちらが英語力が伸びますか？",
    answer:
      "目的や過ごし方によります。語学留学は体系的なカリキュラムで文法・スピーキングを効率よく学べますが、費用が高めです。ワーホリは現地で働きながら自然と英語を使う機会が増えますが、日本人コミュニティに入ってしまうと英語を使わずに終わるリスクもあります。「短期で英語力を集中して上げたい」なら語学留学、「長期で実践的な英語を身につけたい」ならワーホリが向いています。",
  },
  {
    question: "ワーホリに年齢制限はありますか？",
    answer:
      "ほとんどの国で18〜30歳が対象です（一部の国では35歳まで）。また、同じ国に対して基本的に1回しか申請できません。30歳に近い方はワーホリを先に活用し、語学留学はその後というルートも選択肢に入れましょう。",
  },
  {
    question: "語学留学→ワーホリの組み合わせはおすすめですか？",
    answer:
      "非常に人気の高いルートです。まず語学学校で英語の基礎を固めてから、ワーホリに切り替えて就労・生活を楽しむことで、英語力と海外経験の両方を効率よく得られます。語学留学期間は1〜3ヶ月が一般的で、その後ワーホリに移行する人が多いです。",
  },
  {
    question: "社会人でもワーホリはできますか？",
    answer:
      "はい。30歳以下であれば社会人でも申請できます。ただし、帰国後のキャリアへの影響を考慮する必要があります。「転職のタイミングで経験を積む」「リスキリングの一環として捉える」など、明確な目的を持って臨むと帰国後の就職活動がしやすくなります。",
  },
  {
    question: "語学留学とワーホリ、どちらが就職に有利ですか？",
    answer:
      "就職への影響は目的と内容次第です。語学留学は英語力の証明として評価されやすく、TOEICスコア向上に直結しやすいです。ワーホリは「就労経験・主体性・異文化適応力」として評価されます。帰国後の転職・就活では、何を学び何を達成したかを具体的に話せることが最も重要です。",
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

export default function RyugakuVsWahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">徹底比較</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            語学留学 vs ワーホリ
            <span className="text-primary block mt-1">どちらがいい？</span>
          </h1>
          <p className="text-muted text-base leading-relaxed">
            「英語を学びに行きたいけど、語学留学とワーホリどちらを選べばいい？」
            費用・英語力・就職・年齢制限など7つの観点で徹底比較。
            あなたの目的に合った選び方と、両方を活かす「組み合わせルート」も解説します。
          </p>
        </div>
      </section>

      {/* 基本の違い */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">まず、基本的な違いを理解しよう</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="border border-border px-4 py-3 text-left font-bold w-1/3">項目</th>
                  <th className="border border-border px-4 py-3 text-center font-bold text-blue-600">📚 語学留学</th>
                  <th className="border border-border px-4 py-3 text-center font-bold text-green-600">✈️ ワーホリ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">主な目的</td>
                  <td className="border border-border px-4 py-3 text-center">英語学習</td>
                  <td className="border border-border px-4 py-3 text-center">就労＋生活体験＋学習</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">年齢制限</td>
                  <td className="border border-border px-4 py-3 text-center">なし</td>
                  <td className="border border-border px-4 py-3 text-center">18〜30歳（国により35歳）</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">就労</td>
                  <td className="border border-border px-4 py-3 text-center">原則不可</td>
                  <td className="border border-border px-4 py-3 text-center">可能（制限あり）</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">期間</td>
                  <td className="border border-border px-4 py-3 text-center">2週間〜1年（自由）</td>
                  <td className="border border-border px-4 py-3 text-center">最長1〜2年（国による）</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">同国への再申請</td>
                  <td className="border border-border px-4 py-3 text-center">何度でも可能</td>
                  <td className="border border-border px-4 py-3 text-center">基本1回限り</td>
                </tr>
                <tr className="bg-soft">
                  <td className="border border-border px-4 py-3 font-bold">英語ゼロから参加</td>
                  <td className="border border-border px-4 py-3 text-center">✅ しやすい</td>
                  <td className="border border-border px-4 py-3 text-center">⚠️ ハードルが上がる</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-bold">自由度</td>
                  <td className="border border-border px-4 py-3 text-center">低め（授業中心）</td>
                  <td className="border border-border px-4 py-3 text-center">高い（自分で設計）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7つの観点で比較 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">7つの観点で徹底比較</h2>
          <div className="space-y-5">

            {/* ① 費用 */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">① 費用</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    学費＋滞在費が主なコスト。オーストラリア1年間で約<strong>350〜450万円</strong>が目安。
                    働けないため資金が出ていく一方になります。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    現地で働いて収入を得られるため、1年間の実質負担はオーストラリアで<strong>約200〜300万円</strong>程度に抑えられる場合も。
                    フルタイムで働けば月20〜30万円の収入も可能です。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700 font-bold">
                  💰 費用重視なら → ワーホリが有利
                </p>
              </div>
            </div>

            {/* ② 英語力の伸び */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">② 英語力の伸び</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    体系的なカリキュラムで文法・語彙・発音を効率よく習得できます。
                    初心者でもゼロから学べるクラス設定があり、短期間でも確実に基礎が固まります。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    ネイティブと働く環境では実践的な英語力が鍛えられます。
                    ただし、日本人コミュニティに入ってしまうと英語を使わずに終わるリスクも。
                    自分でネイティブと関われる環境を作れるかどうかが鍵です。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-700 font-bold">
                  📖 短期集中で英語力を上げたいなら → 語学留学が有利
                </p>
              </div>
            </div>

            {/* ③ 年齢・タイミング */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">③ 年齢・タイミング</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    年齢制限なし。学生・社会人・主婦・シニアまで誰でも参加できます。
                    期間も2週間〜1年と自由に設定できるため、ライフステージに合わせやすいです。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    多くの国で18〜<strong>30歳</strong>が上限（カナダ・オーストラリア等）。
                    1国につき原則1回限りの使い切りビザです。
                    年齢が近づいている方は優先してワーホリを検討しましょう。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700 font-bold">
                  🕐 30歳に近いなら → ワーホリを先に使うことを優先
                </p>
              </div>
            </div>

            {/* ④ 自由度・生活スタイル */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">④ 自由度・生活スタイル</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    学校のスケジュールを中心に生活が組まれます。
                    授業・宿題・テストなど学校の枠組みの中で動くため、自由時間は放課後と週末が中心。
                    初めての海外で不安がある方は、枠組みがある方が安心できます。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    学ぶ・働く・旅行する・のんびりするなど、自分でスケジュールを設計できます。
                    自由度が高い分、「何もしないまま終わった」という失敗談もあります。
                    目標意識を高く持てる人に向いています。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-700 font-bold">
                  🏫 初めての海外・不安が大きいなら → 語学留学の方が安心
                </p>
              </div>
            </div>

            {/* ⑤ 就職・キャリアへの影響 */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">⑤ 就職・キャリアへの影響</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    TOEICスコア向上や英語資格取得などの成果が出やすく、
                    帰国後の就職活動で「英語力の証明」として評価されやすいです。
                    特に外資系・グローバル企業志望の方に有利です。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    「就労経験・主体性・異文化適応力」として評価されます。
                    ただし「遊んでいたのでは？」と思われるリスクもあり、
                    何を学び何を達成したかを具体的に話せることが重要です。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-primary font-bold">
                  💼 どちらも「何をしたか」を語れることが就活では最重要
                </p>
              </div>
            </div>

            {/* ⑥ 英語ゼロからの参加 */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">⑥ 英語力ゼロからの参加</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学</p>
                  <p className="text-sm text-muted leading-relaxed">
                    ほぼ全ての語学学校にビギナークラスがあり、英語ゼロでも参加できます。
                    エージェントのサポートもあるため、初めての海外でも安心して準備を進められます。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリ</p>
                  <p className="text-sm text-muted leading-relaxed">
                    英語ゼロでも参加は可能ですが、仕事探し・日常会話で苦労することが多いです。
                    英語力ゼロでワーホリに挑戦する場合、最初の1〜3ヶ月を語学学校に通う人がほとんどです。
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4">
                <p className="text-xs bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-700 font-bold">
                  🗣️ 英語ゼロなら → まず語学留学でベースを作ることを強く推奨
                </p>
              </div>
            </div>

            {/* ⑦ 向いている人 */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="font-black">⑦ 向いている人</p>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 mb-2">📚 語学留学が向いている人</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・英語を短期集中で学びたい</li>
                    <li>・初めての海外で不安がある</li>
                    <li>・30歳以上でワーホリが使えない</li>
                    <li>・特定の国の語学学校に通いたい</li>
                    <li>・TOEICなど英語資格を取得したい</li>
                    <li>・社会人で限られた休暇で行きたい</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 mb-2">✈️ ワーホリが向いている人</p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>・長期間海外で生活・就労したい</li>
                    <li>・費用を現地収入で賄いたい</li>
                    <li>・自由なライフスタイルで過ごしたい</li>
                    <li>・海外での就労経験をキャリアに生かしたい</li>
                    <li>・ある程度の英語力がすでにある</li>
                    <li>・18〜30歳で今がチャンス</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 組み合わせルート */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            実は最強の選択肢：「語学留学 → ワーホリ」の組み合わせ
          </h2>
          <p className="text-muted text-sm mb-6">
            どちらか一方に絞る必要はありません。多くの経験者が選ぶのが、この組み合わせルートです。
          </p>

          <div className="relative">
            {/* フロー */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
              <div className="flex-1 bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-blue-600 mb-2">STEP 1</p>
                <p className="font-black text-blue-800 mb-2">語学学校（1〜3ヶ月）</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>✅ 英語の基礎を固める</li>
                  <li>✅ 現地生活に慣れる</li>
                  <li>✅ 仕事探しの英語力をつける</li>
                  <li>✅ 友達・ネットワークを作る</li>
                </ul>
              </div>
              <div className="flex items-center justify-center text-2xl font-black text-primary sm:px-2">
                →
              </div>
              <div className="flex-1 bg-green-50 border border-green-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-green-600 mb-2">STEP 2</p>
                <p className="font-black text-green-800 mb-2">ワーホリ（残り期間）</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>✅ 実践的な英語環境で働く</li>
                  <li>✅ 現地収入で生活費を補う</li>
                  <li>✅ 旅行・文化体験も楽しむ</li>
                  <li>✅ 長期間の海外生活を実現</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <p className="font-bold text-primary mb-2">🎯 この組み合わせが最強な理由</p>
              <p className="text-sm text-muted leading-relaxed">
                英語力ゼロや初心者のままワーホリに行くと、最初の数ヶ月を英語に苦労して過ごすことになりがちです。
                語学学校で英語の基礎と現地生活の感覚を掴んでからワーホリに切り替えることで、
                就職活動がスムーズになり、英語を使った充実した海外生活を早期に実現できます。
                多くのエージェントが推薦する、失敗しにくい鉄板ルートです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 目的別おすすめ診断 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">あなたはどっち？目的別おすすめ</h2>
          <div className="space-y-3">
            {[
              { cond: "英語力ゼロで不安がある", rec: "語学留学", icon: "📚", color: "blue" },
              { cond: "費用を抑えて長期滞在したい", rec: "ワーホリ", icon: "✈️", color: "green" },
              { cond: "30歳に近くてチャンスは今だけ", rec: "ワーホリを先に", icon: "✈️", color: "green" },
              { cond: "短期（1〜3ヶ月）で英語を集中的に学びたい", rec: "語学留学", icon: "📚", color: "blue" },
              { cond: "海外での就労経験を積みたい", rec: "ワーホリ", icon: "✈️", color: "green" },
              { cond: "社会人で限られた有給を使いたい", rec: "語学留学（短期）", icon: "📚", color: "blue" },
              { cond: "ヨーロッパ（マルタ・アイルランド等）で学びたい", rec: "語学留学", icon: "📚", color: "blue" },
              { cond: "英語も身につけながら長期で海外生活をしたい", rec: "語学留学→ワーホリの組み合わせ", icon: "🎯", color: "primary" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border flex items-center gap-4 px-5 py-4">
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-muted">「{item.cond}」</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                  item.color === "blue" ? "bg-blue-100 text-blue-700" :
                  item.color === "green" ? "bg-green-100 text-green-700" :
                  "bg-primary/10 text-primary"
                }`}>
                  {item.rec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            まずはエージェントに相談してみよう
          </h2>
          <p className="text-muted text-sm mb-6">
            「語学留学かワーホリか」は、あなたの年齢・英語力・期間・予算によって最適解が変わります。
            無料で相談できる留学エージェントを活用して、自分に合ったプランを一緒に考えてもらいましょう。
          </p>
          <Link
            href="/best-3"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            おすすめ留学エージェントを比較する →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details
                key={i}
                className="rounded-2xl border border-border bg-white group"
              >
                <summary className="px-5 py-4 font-bold cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>Q. {faq.question}</span>
                  <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/waho-towa"
              className="flex flex-col p-5 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">✈️</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                ワーホリとは？仕組み・費用・メリット・デメリット完全解説
              </p>
              <p className="text-xs text-muted">ワーホリの基礎をまず理解したい方に</p>
            </Link>
            <Link
              href="/ryugaku-towa"
              className="flex flex-col p-5 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">📚</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                語学留学とは？仕組み・期間・費用を徹底解説
              </p>
              <p className="text-xs text-muted">語学留学の基礎をまず理解したい方に</p>
            </Link>
            <Link
              href="/waho-cost"
              className="flex flex-col p-5 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">💰</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                ワーホリにかかる費用はいくら？国別まとめ
              </p>
              <p className="text-xs text-muted">ワーホリの費用を国別に比較</p>
            </Link>
            <Link
              href="/ryugaku-cost"
              className="flex flex-col p-5 rounded-2xl border border-border bg-soft hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-2xl mb-2">🌍</span>
              <p className="font-bold group-hover:text-primary transition-colors text-sm mb-1">
                語学留学にかかる費用はいくら？国別まとめ
              </p>
              <p className="text-xs text-muted">語学留学の費用を国別に比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
