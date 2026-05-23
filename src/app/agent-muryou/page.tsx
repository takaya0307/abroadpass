import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "留学エージェントはなぜ無料で使えるのですか？",
    answer:
      "留学エージェントは、あなたを語学学校に紹介することで学校側から紹介料（コミッション）を受け取っています。学校がコストを負担する仕組みのため、利用者は手数料ゼロで使えます。",
  },
  {
    question: "エージェント経由だと学費が高くなりますか？",
    answer:
      "基本的には変わりません。語学学校はエージェント経由・直接申し込みにかかわらず同じ学費を設定しているのが一般的です。ただし、エージェントによって独自のキャンペーンや割引が適用される場合もあります。",
  },
  {
    question: "「無料」でも追加費用がかかることはありますか？",
    answer:
      "あります。基本的なカウンセリングや学校手配は無料でも、ビザ申請サポート・海外送金代行・保険手配など個別サービスに費用がかかるケースがあります。利用前に「何が無料で何が有料か」を確認しておきましょう。",
  },
  {
    question: "エージェントを使うと提携校しか紹介してもらえないのですか？",
    answer:
      "傾向としてはその可能性があります。エージェントは提携している学校からしか紹介料を得られないため、提携校を優先的に勧める場合があります。希望する学校がある場合は、最初に「この学校に申し込みたい」と伝えるか、複数社に相談して比較するのがおすすめです。",
  },
  {
    question: "無料エージェントと有料エージェントはどちらがいいですか？",
    answer:
      "目的によります。手続きのサポートだけを求めるなら無料エージェントで十分です。現地でのトラブル対応や手厚いアフターフォローを求めるなら、サポート費用を支払う有料エージェントが向いているケースもあります。",
  },
];

export const metadata: Metadata = {
  title: "留学エージェントはなぜ無料？仕組みをわかりやすく解説【2026年最新】",
  description:
    "留学エージェントが無料でサービスを提供できる理由は、語学学校から受け取る紹介料（コミッション）にあります。仕組み・注意点・直接申し込みとの費用比較をわかりやすく解説します。",
  alternates: {
    canonical: "https://abroadpass.jp/agent-muryou",
  },
};

export default function AgentMuryouPage() {
  return (
    <>
      {/* PR表記 */}
      <div className="bg-accent/10 text-center py-2 text-xs text-muted">
        【PR】当ページにはアフィリエイト広告が含まれています
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 text-center">2026年最新版</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4 text-center">
            留学エージェントはなぜ無料？<br className="hidden md:block" />
            仕組みをわかりやすく解説
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            「無料なのに大丈夫？」「裏があるんじゃないか？」と感じる方も多いはず。
            エージェントが無料で使える理由と、利用前に知っておくべき注意点を正直に解説します。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80 leading-relaxed">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ 無料で使える理由（収益の仕組み）</li>
              <li>✓ エージェント経由と直接申し込みで費用は変わる？</li>
              <li>✓ 「無料」でも注意すべきこと</li>
              <li>✓ 結局、使った方がいいのか？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="一言で言うと">
            無料の理由は「語学学校が費用を負担しているから」
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              留学エージェントが無料でサービスを提供できる理由はシンプルです。
              <strong>あなたではなく、語学学校側がエージェントにお金を支払っている</strong>からです。
            </p>
            <p>
              エージェントはあなたを語学学校に紹介することで、学校から<strong>「紹介料（コミッション）」</strong>を受け取ります。
              紹介料は一般的に授業料の10〜30%程度とされています。
              学校にとっては「広告費」と同じ感覚で、エージェントを通じた集客コストとして見込んでいます。
            </p>
            <p>
              この仕組みは<strong>転職エージェント</strong>とまったく同じモデルです。
              転職エージェントも求職者（あなた）から手数料はとらず、採用した企業側から紹介料を受け取っています。
            </p>
          </div>

          {/* 図解 */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center text-sm">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-3xl mb-2">👤</p>
                <p className="font-bold mb-1">あなた（留学希望者）</p>
                <p className="text-xs text-muted">手数料ゼロ<br />カウンセリング・手続き支援を無料で受ける</p>
              </div>
              <div className="flex flex-col items-center gap-1 text-muted text-xs">
                <div className="hidden md:block">
                  <p>← 紹介・サポート</p>
                  <p>→ 紹介料を支払い</p>
                </div>
                <div className="md:hidden">
                  <p>↕ 紹介 / 紹介料</p>
                </div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5">
                <p className="text-3xl mb-2">🏫</p>
                <p className="font-bold mb-1">語学学校</p>
                <p className="text-xs text-muted">エージェントに紹介料を支払う<br />（授業料の10〜30%程度）</p>
              </div>
            </div>
            <div className="mt-4 bg-soft rounded-2xl p-4 text-center">
              <p className="text-3xl mb-2">🏢</p>
              <p className="font-bold text-sm mb-1">留学エージェント</p>
              <p className="text-xs text-muted">学校から受け取る紹介料で運営 → あなたへのサービスは無料</p>
            </div>
          </div>
        </div>
      </section>

      {/* 直接申し込みとの費用比較 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="気になる疑問">
            エージェント経由だと学費が高くなる？
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              「エージェントに紹介料が入るなら、その分学費が高くなるんじゃないの？」という疑問はもっともです。
            </p>
            <p>
              結論としては、<strong>基本的に学費は変わりません。</strong>
              語学学校はエージェント経由でも直接申し込みでも、同じ授業料を設定しているのが一般的です。
              紹介料は学校が集客コストとしてあらかじめ料金に織り込んでいると考えるとわかりやすいでしょう。
            </p>
            <p>
              ただし、以下のケースでは価格が変わることがあります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-primary/5 rounded-xl p-4">
                <p className="font-bold text-primary mb-2 text-xs">エージェント経由の方が安くなるケース</p>
                <ul className="space-y-1 text-xs">
                  <li>・エージェント限定の割引キャンペーンがある</li>
                  <li>・複数校をまとめて交渉できる場合</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-bold text-red-500 mb-2 text-xs">直接申し込みの方が安くなるケース</p>
                <ul className="space-y-1 text-xs">
                  <li>・学校が直接申し込み割引を設定している場合</li>
                  <li>・エージェントが独自の手数料を上乗せしている場合</li>
                </ul>
              </div>
            </div>
            <p>
              複数のエージェントで見積もりを比較し、直接申し込みの金額とも確認することが大切です。
            </p>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="利用前に知っておきたい">
            「無料」でも注意すること
          </SectionHeading>
          <div className="space-y-4">
            {[
              {
                title: "① 追加サービスは有料になる場合がある",
                body: "基本的なカウンセリングや語学学校の手配は無料でも、「ビザ申請サポート」「海外送金代行」「保険手配」などのオプションサービスに別途費用がかかるエージェントがあります。「何が無料で何が有料か」を最初に確認しておきましょう。",
              },
              {
                title: "② 提携している学校に限定される可能性がある",
                body: "エージェントは提携している語学学校からしか紹介料を得られません。そのため、提携校を優先的に勧める傾向があります。必ずしも悪いわけではありませんが、希望する学校がある場合は最初に伝えるか、複数社に相談して比較するのがおすすめです。",
              },
              {
                title: "③ サポートの範囲・質はエージェントによって差がある",
                body: "「無料」といっても、渡航後のサポートまで手厚く対応してくれるエージェントもあれば、手配のみで終わるエージェントもあります。現地でのトラブル対応・緊急連絡先の有無など、サポート範囲を事前に確認しましょう。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-soft rounded-2xl p-6 text-sm text-foreground/80 leading-relaxed">
                <p className="font-bold mb-2">{item.title}</p>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            結局、エージェントは使うべき？
          </SectionHeading>
          <div className="bg-white rounded-2xl p-6 text-sm leading-relaxed space-y-4 text-foreground/80">
            <p>
              仕組みを理解したうえで言えることは、<strong>「無料だから怪しい」ということはない</strong>、ということです。
              語学学校とエージェントの間には確立されたビジネスモデルがあり、日本の大手エージェントの多くもこの仕組みで運営されています。
            </p>
            <p>
              ただし、「無料だから何でも任せて安心」ではありません。
              エージェントには得意な国・エリアや提携校のネットワークに違いがあります。
              <strong>1社だけで決めず、複数社に無料相談して比較する</strong>ことが、後悔しない留学選びの基本です。
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-2">
              <p className="font-bold text-primary text-xs mb-2">✓ エージェントを使うメリットまとめ</p>
              <ul className="space-y-1 text-xs">
                <li>・ビザ手続き・語学学校選び・手配をまとめてサポート</li>
                <li>・学校の比較・交渉を代わりにやってもらえる</li>
                <li>・渡航後のトラブル相談窓口になる（エージェントによる）</li>
                <li>・費用は基本的に直接申し込みと変わらない</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm text-muted mb-3">まずは複数社に無料相談して比較してみましょう</p>
          <CtaButton href="/best-3" variant="primary">
            おすすめエージェント5社を比較する
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            留学エージェント「無料」Q&amp;A
          </SectionHeading>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <p className="font-bold text-sm mb-2">Q. {item.question}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="あわせて読みたい">
            関連記事
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/agent-hitsuyou",
                title: "留学エージェントは本当に必要？",
                desc: "使うメリット・デメリットをフラットに解説。",
              },
              {
                href: "/agent-erabi",
                title: "失敗しない留学エージェントの選び方",
                desc: "自分に合ったエージェントを選ぶポイントを紹介。",
              },
              {
                href: "/ryugaku-cost",
                title: "語学留学の費用はいくらかかる？",
                desc: "国別・期間別の費用目安を徹底まとめ。",
              },
              {
                href: "/best-3",
                title: "留学エージェントおすすめ比較",
                desc: "主要5社を徹底比較。あなたに合うエージェントが見つかります。",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-soft rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-sm mb-1 text-primary">{article.title}</p>
                <p className="text-xs text-muted leading-relaxed">{article.desc}</p>
              </Link>
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
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            相談しただけで申し込む義務は一切ありません。
            複数のエージェントに相談して、自分に合った留学を見つけましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめエージェントを見る
          </CtaButton>
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
