import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "英語力ゼロでもワーホリ・留学はできる？【不安を解消】| Abroad Pass",
  description:
    "英語が話せなくてもワーホリや留学はできます。英語力ゼロから渡航した人のリアルな体験と、英語力不問でサポートしてくれるエージェントを紹介。不安を解消して第一歩を踏み出しましょう。",
  openGraph: {
    title: "英語力ゼロでもワーホリ・留学はできる？【不安を解消】",
    description:
      "英語ゼロから渡航した人の体験談と、英語力不問のサポートをしてくれるエージェント紹介。不安を一緒に解消しましょう。",
  },
};

const faqItems = [
  {
    q: "英語力ゼロでワーホリ・留学に行っても大丈夫ですか？",
    a: "大丈夫です。実際に英語が全く話せない状態で渡航した人は大勢います。現地の語学学校で基礎から学びながら生活することで、半年〜1年で日常会話レベルまで到達する人が多いです。重要なのは英語力より「行動力」です。",
  },
  {
    q: "英語力がないと仕事はできませんか？",
    a: "最初は日本食レストランや日系企業でのアルバイトから始める人が多いです。英語ゼロでも働ける職場は多く、現地で働きながら英語を身につけていくのが一般的なルートです。",
  },
  {
    q: "英語力ゼロの場合、エージェントはどう役立ちますか？",
    a: "渡航前の準備・語学学校の選定・現地でのサポートまで日本語で対応してくれます。「英語で手続きができない」という不安を丸ごと解消できるのがエージェント最大のメリットです。",
  },
];

const concerns = [
  {
    emoji: "😨",
    worry: "「現地で何も話せなくてパニックになりそう」",
    reality:
      "語学学校では同じ境遇の仲間が世界中から集まります。ゼロスタートはあなただけじゃない。授業はレベル別なので初級クラスから安心してスタートできます。",
  },
  {
    emoji: "🛒",
    worry: "「買い物やレストランで注文できない」",
    reality:
      "スマホの翻訳アプリ・指差しで最初の数週間は乗り切れます。日本人が多い地域（シドニー、バンクーバーなど）なら日本語が通じるお店も豊富。渡航直後は「サバイバル英語」で十分です。",
  },
  {
    emoji: "💼",
    worry: "「英語できないと仕事が見つからない」",
    reality:
      "農業・工場・日本食レストランなど、英語力不問の仕事は多数あります。まず働いて収入を確保しながら英語を伸ばすのが王道ルート。エージェントが仕事探しをサポートしてくれる場合も。",
  },
  {
    emoji: "📞",
    worry: "「何かトラブルが起きたとき対応できない」",
    reality:
      "エージェントに加入していれば、現地でのトラブルを日本語で相談できます。スマ留・ISS留学ライフ・ラストリゾートなどは渡航後の緊急サポート体制が整っています。",
  },
];

const timeline = [
  {
    period: "渡航前（1〜3ヶ月）",
    level: "挨拶・自己紹介レベル",
    action: "アプリで最低限の英語を準備。「話すことへの恐怖感」だけ消しておくと渡航後がグッと楽になります。",
    icon: "📱",
    speakCta: true,
  },
  {
    period: "渡航直後（1〜2ヶ月目）",
    level: "語学学校で基礎固め",
    action: "初級クラスでアルファベット・文法から学び直し。クラスメートと英語で話す練習",
    icon: "🏫",
  },
  {
    period: "3〜4ヶ月目",
    level: "日常会話が少しできるように",
    action: "アルバイトを開始。仕事を通じて実践的な英語が自然に身につく",
    icon: "💼",
  },
  {
    period: "半年後〜",
    level: "日常生活に困らないレベル",
    action: "英語での交渉・雑談が普通にできるように。友達も増えてくる",
    icon: "🗣",
  },
];

export default function EigoZeroPage() {
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
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">英語力・不安解消ガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            英語力ゼロでも
            <span className="text-primary">ワーホリ・留学はできる？</span>
            <br />
            不安を全部解消します
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            結論から言います。<strong>英語力ゼロでも、ワーホリ・留学は可能です。</strong>
            実際に「英単語すら怪しい」状態で渡航し、現地で英語を身につけた人は大勢います。
            この記事では、英語への不安を一つひとつ解消していきます。
          </p>
          <p className="text-xs text-muted mt-4">
            ※ 本記事はアフィリエイト広告を含みます。
            <Link href="/disclosure" className="underline hover:text-primary ml-1">広告掲載について</Link>
          </p>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-4">
              ✅ 英語力ゼロでもワーホリ・留学できる3つの理由
            </h2>
            <ul className="space-y-3">
              {[
                "語学学校では初級クラスがあり、ゼロから学べる環境が整っている",
                "最初は英語不要の仕事（日系レストラン・農業など）から始められる",
                "エージェントを使えば渡航準備から現地サポートまで日本語で対応できる",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* よくある不安 → 現実 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            英語ゼロの不安、全部答えます
          </h2>
          <div className="space-y-5">
            {concerns.map((c) => (
              <div key={c.worry} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-3 mb-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <p className="font-bold text-foreground">{c.worry}</p>
                </div>
                <div className="pl-10">
                  <p className="text-sm text-muted leading-relaxed bg-accent/5 border border-accent/10 rounded-xl p-4">
                    👉 {c.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 英語力の伸び方タイムライン */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            英語ゼロからの現地生活タイムライン
          </h2>
          <p className="text-muted text-sm mb-8">実際にゼロから渡航した人の典型的なパターン</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {timeline.map((t, i) => (
              <div key={i} className="bg-soft rounded-2xl p-5 relative">
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="text-xs font-bold text-primary mb-1">{t.period}</p>
                <p className="font-bold text-sm mb-2">{t.level}</p>
                <p className="text-xs text-muted leading-relaxed">{t.action}</p>
                {t.speakCta && (
                  <div className="mt-2 pt-2 border-t border-border/50">
                    <p className="text-xs text-muted leading-relaxed mb-1">
                      <span className="font-bold text-foreground">人と話すのが怖い…</span>という方はAI相手に練習できる
                      <strong className="text-foreground"> Speak</strong> が第一歩に最適。
                    </p>
                    <a
                      href="https://px.a8.net/svt/ejp?a8mat=4B3LML+BAN2YA+5PZU+5YRHE"
                      rel="nofollow sponsored"
                      target="_blank"
                      className="text-xs text-primary font-bold underline underline-offset-2 hover:text-primary-dark"
                    >
                      → 無料で試す
                    </a>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www10.a8.net/0.gif?a8mat=4B3LML+BAN2YA+5PZU+5YRHE" width={1} height={1} alt="" style={{ display: "inline" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-6 leading-relaxed">
            個人差はありますが、<strong>半年〜1年で日常会話は十分できるようになる</strong>
            という人が大多数です。英語力より「現地に飛び込む覚悟」の方がずっと重要です。
          </p>
        </div>
      </section>

      {/* エージェントの役割 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            英語力ゼロなら、エージェントはほぼ必須
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            英語力がある人なら現地で自力でなんとかできることも、英語ゼロだとすべてが難しくなります。
            エージェントを使うことで、以下のことを<strong>すべて日本語でサポート</strong>してもらえます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🛂", title: "ビザ申請のサポート", desc: "英語の書類を代わりに確認・アドバイス" },
              { icon: "🏫", title: "語学学校の選定", desc: "レベルや予算に合った学校を日本語で提案" },
              { icon: "🏠", title: "渡航前の準備全般", desc: "住居・保険・持ち物リストまで丁寧に案内" },
              { icon: "🆘", title: "現地トラブル対応", desc: "困ったときに日本語で相談できる安心感" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">英語力不問でサポートしてくれる主なエージェント</h3>
            <div className="space-y-3">
              {[
                {
                  name: "スマ留",
                  point: "日本語でのサポートが充実。英語が不安な初心者に特に人気。無料面談のハードルが低い。",
                  href: "/smaru",
                },
                {
                  name: "ISS留学ライフ",
                  point: "Z会グループの安心感。丁寧な事前カウンセリングで不安を一つひとつ解消してくれる。",
                  href: "/iss",
                },
                {
                  name: "ラストリゾート",
                  point: "ワーホリ専門カウンセラーが対応。ゼロから渡航した人の実績が豊富。",
                  href: "/lastresort",
                },
              ].map((agent) => (
                <div key={agent.name} className="flex items-start gap-3 p-4 bg-soft rounded-xl">
                  <span className="text-primary font-bold text-sm flex-shrink-0">✓</span>
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
        </div>
      </section>

      {/* CTA 中間 */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">英語の不安はエージェントへの相談で解消できます</p>
          <p className="text-muted text-sm mb-6">
            「英語ゼロでも行けますか？」——この質問を一番多くされているのがカウンセラーです。
            無料相談でプロに直接聞いてみましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            英語力不問のエージェントを比較する →
          </CtaButton>
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
              { href: "/ryugaku-philippines", title: "フィリピン語学留学の費用・特徴まとめ【2026年最新】", desc: "英語ゼロからでも集中して学べるフィリピン留学。1ヶ月の費用目安とセブ島の特徴を解説。" },
              { href: "/ryugaku-towa", title: "語学留学とは？仕組み・期間・費用を徹底解説", desc: "英語力を伸ばすための語学留学について基礎からわかりやすく解説。" },
              { href: "/ryugaku-vs-waho", title: "語学留学 vs ワーホリ どちらがいい？目的別に徹底比較", desc: "英語力・費用・年齢などの観点で比較。英語ゼロからどちらを選ぶかの判断基準も。" },
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーキングホリデーの基本情報をまるごと解説。" },
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
            英語力より「行動力」が、ワーホリ成功の鍵
          </h2>
          <p className="text-white/80 mb-3 leading-relaxed text-sm">
            英語ゼロで渡航した人のほとんどが、帰国時には「なんとかなった」と言います。
            大切なのは完璧な英語より、一歩踏み出す勇気。
          </p>
          <p className="text-white/80 mb-8 leading-relaxed text-sm">
            まずはエージェントへの無料相談から。「英語が不安」という悩み、
            一緒に解消してもらいましょう。
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
