import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "社会人が留学するには？費用・期間・注意点まとめ | Abroad Pass",
  description:
    "社会人が留学するための3つのパターン（有給休暇・休職・退職）を徹底解説。期間・費用・キャリアへの影響・注意点まで経験者目線でまとめました。",
};

const faqData = [
  {
    question: "社会人が留学するのは現実的ですか？",
    answer:
      "はい、現実的です。有給休暇を使った短期留学から、休職・退職を活用した長期留学まで、働き方に合わせた選択肢があります。近年は社会人留学者が増えており、エージェントによる手厚いサポート体制も整っています。",
  },
  {
    question: "仕事を辞めずに留学できますか？",
    answer:
      "短期（1〜4週間）であれば有給休暇を使った留学が可能です。1〜3ヶ月程度なら、会社の休職制度を利用するケースもあります。まずは就業規則を確認し、人事や上司に相談してみましょう。",
  },
  {
    question: "英語力はどの程度必要ですか？",
    answer:
      "ゼロからでも渡航できますが、英語力はあればあるほど有利です。スタート位置が高い分、同じ期間でもより実践的な内容を学べます。留学前にオンライン英会話などで基礎を固めておくと効果的です。",
  },
  {
    question: "留学エージェントは使ったほうがいいですか？",
    answer:
      "社会人の場合、準備にかけられる時間が限られるため、エージェントの利用がおすすめです。学校選び・ビザ申請・現地サポートまで一括して任せられるため、仕事と並行して準備を進めやすくなります。",
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

export default function ShakaijinRyugakuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">社会人留学ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            社会人が留学するには？
            <br />
            <span className="text-primary">費用・期間・注意点まとめ</span>
          </h1>
          <p className="text-muted text-base leading-relaxed">
            「社会人になってから留学したい」と思っても、仕事・お金・キャリアへの不安でなかなか踏み出せない方は多いはず。
            この記事では、働きながら留学を実現するための3つのパターンと、期間・費用・注意点を整理します。
          </p>
        </div>
      </section>

      {/* 3つのパターン */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-8">
            社会人が留学する<span className="text-primary">3つのパターン</span>
          </h2>

          <div className="space-y-6">
            {/* パターン1 */}
            <div className="p-6 rounded-2xl border border-border bg-soft">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏖️</span>
                <h3 className="text-lg font-bold">① 有給休暇を使った短期留学</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">
                1〜4週間程度であれば、有給休暇をまとめて取得して渡航する方法があります。
                仕事を辞める必要がなく、最もリスクが低いパターンです。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">期間：1〜4週間</span>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">リスク：低</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">対象：語学研修・旅行型留学</span>
              </div>
            </div>

            {/* パターン2 */}
            <div className="p-6 rounded-2xl border border-border bg-soft">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💼</span>
                <h3 className="text-lg font-bold">② 休職制度を使った中期留学</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">
                会社の休職制度や留学支援制度を活用して1〜6ヶ月程度留学するパターンです。
                会社によっては「自己啓発休職」として認められるケースもあります。
                復帰前提のため、キャリアのブランクを最小限に抑えられます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">期間：1〜6ヶ月</span>
                <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">リスク：中</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">対象：語学留学・専門留学</span>
              </div>
            </div>

            {/* パターン3 */}
            <div className="p-6 rounded-2xl border border-border bg-soft">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">✈️</span>
                <h3 className="text-lg font-bold">③ 退職して長期留学</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">
                仕事を退職して半年〜1年以上の長期留学に挑むパターンです。
                時間的な自由度が高く、本格的な語学習得や資格取得まで目指せます。
                帰国後の転職活動を前提に、計画的に進めることが重要です。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">期間：6ヶ月〜1年以上</span>
                <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full">リスク：高</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">対象：本格的な語学習得・キャリアチェンジ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 期間別プランの目安 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            期間別プランの<span className="text-primary">目安</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left rounded-tl-lg">期間</th>
                  <th className="p-3 text-left">おすすめパターン</th>
                  <th className="p-3 text-left">目標</th>
                  <th className="p-3 text-left rounded-tr-lg">費用目安</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-white">
                  <td className="p-3 font-bold">1〜4週間</td>
                  <td className="p-3">有給休暇</td>
                  <td className="p-3">英語の雰囲気をつかむ・海外体験</td>
                  <td className="p-3">30〜60万円</td>
                </tr>
                <tr className="border-b border-border bg-soft">
                  <td className="p-3 font-bold">1〜3ヶ月</td>
                  <td className="p-3">有給 or 休職</td>
                  <td className="p-3">日常会話レベルの英語力向上</td>
                  <td className="p-3">60〜120万円</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <td className="p-3 font-bold">3ヶ月〜1年</td>
                  <td className="p-3">休職 or 退職</td>
                  <td className="p-3">ビジネス英語・専門スキル習得</td>
                  <td className="p-3">120〜250万円</td>
                </tr>
                <tr className="bg-soft">
                  <td className="p-3 font-bold">1年以上</td>
                  <td className="p-3">退職</td>
                  <td className="p-3">本格的な語学習得・資格取得・キャリアチェンジ</td>
                  <td className="p-3">250万円〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">※ 費用は渡航先・学校・生活水準によって大きく異なります。</p>
        </div>
      </section>

      {/* 国別費用 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2">
            国別・期間別の<span className="text-primary">費用目安</span>
          </h2>
          <p className="text-muted text-sm mb-6">
            留学費用は「学費＋滞在費＋航空券＋保険」が主な内訳です。渡航先によって大きく変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left rounded-tl-lg">国</th>
                  <th className="p-3 text-left">1ヶ月</th>
                  <th className="p-3 text-left">3ヶ月</th>
                  <th className="p-3 text-left rounded-tr-lg">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-white">
                  <td className="p-3 font-bold">🇵🇭 フィリピン</td>
                  <td className="p-3">20〜30万円</td>
                  <td className="p-3">60〜90万円</td>
                  <td className="p-3">コスパ最高。マンツーマン授業が充実</td>
                </tr>
                <tr className="border-b border-border bg-soft">
                  <td className="p-3 font-bold">🇨🇦 カナダ</td>
                  <td className="p-3">30〜40万円</td>
                  <td className="p-3">90〜120万円</td>
                  <td className="p-3">治安が良く社会人に人気。多文化環境</td>
                </tr>
                <tr className="border-b border-border bg-white">
                  <td className="p-3 font-bold">🇦🇺 オーストラリア</td>
                  <td className="p-3">35〜45万円</td>
                  <td className="p-3">100〜140万円</td>
                  <td className="p-3">時差が少なく生活しやすい。英語環境が豊富</td>
                </tr>
                <tr className="border-b border-border bg-soft">
                  <td className="p-3 font-bold">🇮🇪 アイルランド</td>
                  <td className="p-3">40〜55万円</td>
                  <td className="p-3">120〜160万円</td>
                  <td className="p-3">本場の英語。ヨーロッパ観光の拠点にも</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">※ 航空券・保険込みの概算。学校・宿泊タイプによって変動します。</p>
        </div>
      </section>

      {/* 帰国後のキャリア */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">
            留学後のキャリアへの<span className="text-primary">影響は？</span>
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            社会人留学後の就職・転職活動は、準備次第で有利にも不利にもなります。
            ポイントは「留学の目的と成果を言語化できるか」です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">✅ 有利になるケース</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>・英語力が業務で活かせる職種（外資・商社・IT）</li>
                <li>・明確な目的（TOEIC向上・専門スキル習得）があった</li>
                <li>・帰国後にすぐ転職活動を開始できた</li>
                <li>・留学中にポートフォリオやスキルを積み上げた</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">⚠️ 注意が必要なケース</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>・留学の目的が曖昧なまま渡航した</li>
                <li>・帰国後の転職活動が長引いた</li>
                <li>・英語力の向上が採用基準に達していない</li>
                <li>・年齢的なキャリアのブランクが大きく見られた</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-bold text-primary">ポイント：</span>
              留学前に「なぜ留学するのか」「帰国後に何がしたいのか」を言語化しておくことが、
              面接での説得力に直結します。目的のある留学は、企業からも評価されやすいです。
            </p>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-8">
            社会人留学の<span className="text-primary">4つの注意点</span>
          </h2>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 rounded-2xl border border-border bg-soft">
              <span className="text-2xl flex-shrink-0">📋</span>
              <div>
                <h3 className="font-bold mb-1">① 休職条件を事前に確認する</h3>
                <p className="text-sm text-muted leading-relaxed">
                  休職制度は会社によって条件が大きく異なります。「自己都合の休職は認めない」という就業規則もあるため、
                  渡航前に必ず人事・上司に確認しましょう。制度がない場合は退職・転職のタイミングを見極める必要があります。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl border border-border bg-soft">
              <span className="text-2xl flex-shrink-0">📅</span>
              <div>
                <h3 className="font-bold mb-1">② ビザ申請には時間がかかる</h3>
                <p className="text-sm text-muted leading-relaxed">
                  語学留学で3ヶ月以上滞在する場合、学生ビザが必要な国があります。
                  申請〜取得まで1〜3ヶ月かかることもあるため、渡航の半年前には動き始めることをおすすめします。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl border border-border bg-soft">
              <span className="text-2xl flex-shrink-0">💰</span>
              <div>
                <h3 className="font-bold mb-1">③ 社会保険・年金の扱いを整理する</h3>
                <p className="text-sm text-muted leading-relaxed">
                  退職して留学する場合、社会保険の任意継続や国民健康保険への切り替えが必要です。
                  また、海外在住中も国民年金の支払いが発生するため、資金計画に含めておきましょう。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl border border-border bg-soft">
              <span className="text-2xl flex-shrink-0">📊</span>
              <div>
                <h3 className="font-bold mb-1">④ 帰国後の資金計画を立てる</h3>
                <p className="text-sm text-muted leading-relaxed">
                  帰国後すぐに働けるとは限りません。転職活動期間（1〜3ヶ月）の生活費も含めた資金計画を立てておくことが重要です。
                  留学費用に加えて、帰国後の生活費として最低でも30〜50万円の余裕を持っておきましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント活用 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-4">
            社会人こそ<span className="text-primary">エージェントを活用しよう</span>
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            仕事をしながら留学準備を進めるのは、思った以上に大変です。
            学校選び・ビザ申請・現地での手続きまで、エージェントに任せることで、
            限られた時間を有効活用できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-2xl bg-white border border-border">
              <h3 className="font-bold mb-2">ISS留学ライフ</h3>
              <p className="text-sm text-muted leading-relaxed">
                社会人・大人の留学に強いエージェント。丁寧なカウンセリングと豊富な実績で、
                目的やライフスタイルに合わせた学校選びを手伝ってくれます。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-border">
              <h3 className="font-bold mb-2">留学ジャーナル</h3>
              <p className="text-sm text-muted leading-relaxed">
                創業40年以上の老舗エージェント。社会人留学の実績が豊富で、
                渡航前・渡航中・帰国後のサポート体制が充実しています。
              </p>
            </div>
          </div>
          <Link
            href="/best-3"
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            留学エージェントを比較する →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-8">
            よくある<span className="text-primary">質問</span>
          </h2>
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div key={index} className="p-5 rounded-2xl border border-border bg-soft">
                <h3 className="font-bold text-foreground mb-2">Q. {faq.question}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-6">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ryugaku-towa"
              className="p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-primary mb-2 block">基礎知識</span>
              <p className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                語学留学とは？仕組み・期間・費用・ワーホリとの違いを徹底解説
              </p>
            </Link>
            <Link
              href="/ryugaku-cost"
              className="p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-primary mb-2 block">費用ガイド</span>
              <p className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                語学留学にかかる費用はいくら？国別まとめ【2026年最新版】
              </p>
            </Link>
            <Link
              href="/agent-hitsuyou"
              className="p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-primary mb-2 block">基礎知識</span>
              <p className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                そもそも留学エージェントって必要？
              </p>
            </Link>
            <Link
              href="/career"
              className="p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-primary mb-2 block">キャリア・就職</span>
              <p className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                ワーホリ後の就職は不利？帰国後のキャリアをリアルに解説
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* エージェント別おすすめ */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black mb-2 text-center">
            社会人留学を<span className="text-primary">一緒に考えよう</span>
          </h2>
          <p className="text-muted text-sm mb-6 leading-relaxed text-center">
            「どのパターンが自分に合うか」「どの国がいいか」——目的に合わせてエージェントを選んでみましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link href="/smaru" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">💰 コスパ重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">スマ留</p>
              <p className="text-xs text-muted leading-relaxed">業界最安値保証。有給・休職期間を最大限活用したい方に。</p>
            </Link>
            <Link href="/ryugakujournal" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">👔 社会人・長期向け</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">留学ジャーナル</p>
              <p className="text-xs text-muted leading-relaxed">40年以上の実績。社会人留学の豊富な実績と長期プランに対応。</p>
            </Link>
            <Link href="/iss" className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow border border-border hover:border-primary/30 group">
              <p className="text-xs font-bold text-primary mb-1">🛡️ サポート重視</p>
              <p className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">ISS留学ライフ</p>
              <p className="text-xs text-muted leading-relaxed">創業50年以上の老舗。忙しい社会人でも安心の手厚いサポート。</p>
            </Link>
          </div>
          <p className="text-center text-sm text-muted">
            全社を比較したい方は → <Link href="/best-3" className="text-primary font-bold hover:underline">おすすめエージェント比較ページ</Link>
          </p>
        </div>
      </section>
    </>
  );
}
