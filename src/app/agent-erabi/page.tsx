import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "留学エージェントの選び方3つのポイント【失敗しないために】| Abroad Pass",
  description:
    "留学エージェントを選ぶ際に必ず確認すべき3つのポイントを解説。費用・サポート体制・専門性で比較する方法と、目的別おすすめエージェントも紹介します。",
  openGraph: {
    title: "留学エージェントの選び方3つのポイント【失敗しないために】",
    description:
      "費用・サポート体制・専門性で比較する方法と、目的別おすすめエージェントを紹介。後悔しないエージェント選びのために。",
  },
};

const faqItems = [
  {
    q: "留学エージェントはどこで選べばいいですか？",
    a: "「費用・サポート体制・専門性」の3点で比較するのが基本です。費用を重視するならスマ留、信頼性重視ならISS留学ライフ、ワーホリ特化ならラストリゾートがおすすめです。まず無料相談で複数のエージェントに話を聞いてみることをおすすめします。",
  },
  {
    q: "複数のエージェントに同時に相談してもいいですか？",
    a: "はい、まったく問題ありません。むしろ推奨します。各エージェントの提案内容・費用・対応を比較してから決めることで、より自分に合ったエージェントを選べます。一社だけに絞って話を進めると比較ができません。",
  },
  {
    q: "無料のエージェントと有料のエージェント、どちらがいいですか？",
    a: "無料エージェントはアフィリエイト（紹介料）で収益を得ています。そのため提携している学校に誘導されるリスクもゼロではありません。重要なのは「どのエージェントが自分の希望に正直に向き合ってくれるか」を無料相談で見極めることです。",
  },
  {
    q: "エージェントを使わない選択肢はありますか？",
    a: "英語が堪能で、ビザ・学校・住居をすべて自分で手配できる方なら不要な場合もあります。ただし初心者・英語に不安がある方・ワーホリ初挑戦の方は、エージェントを使った方が圧倒的にスムーズです。",
  },
];

const checkPoints = [
  {
    num: "01",
    title: "費用・料金体系は透明か",
    icon: "💰",
    desc: "エージェントの費用は「無料」のところも多いですが、語学学校の紹介手数料やオプション費用が別途かかる場合があります。最初の相談時に「トータルでいくらかかりますか？」と明確に聞くことが重要です。",
    checks: [
      "見積もりを書面（メールなど）でもらえるか",
      "追加費用が発生する条件を事前に説明してくれるか",
      "スマ留のような「最安値保証」の仕組みがあるか",
    ],
    bad: "「だいたいこのくらいです」「後から確認します」という曖昧な回答は要注意。",
  },
  {
    num: "02",
    title: "渡航後のサポート体制はあるか",
    icon: "🆘",
    desc: "エージェントの真価は渡航後にわかります。現地で「学校が思っていたと違う」「トラブルが起きた」「仕事が見つからない」——そういったときに日本語でサポートしてくれる体制があるかが重要です。",
    checks: [
      "現地スタッフ・日本語対応の相談窓口があるか",
      "渡航後の緊急連絡先を提供してくれるか",
      "過去のトラブル対応事例を教えてくれるか",
    ],
    bad: "「渡航後は現地で自分でなんとかしてください」というエージェントは避けましょう。",
  },
  {
    num: "03",
    title: "自分の目的に特化しているか",
    icon: "🎯",
    desc: "留学エージェントには「語学留学全般」「ワーホリ特化」「社会人のキャリア留学」「正規留学」など、得意分野があります。自分の目的と合っているエージェントを選ぶことが成功の鍵です。",
    checks: [
      "カウンセラーが自分と同じ経験（ワーホリ・留学）をしているか",
      "希望の国・目的での渡航実績が多いか",
      "担当者の得意分野を聞けるか",
    ],
    bad: "「何でもできます」と言う割に深掘りした質問に答えられないエージェントは要注意。",
  },
];

const agentByPurpose = [
  {
    purpose: "コスパ重視でワーホリ・語学留学したい",
    agent: "スマ留",
    reason: "業界最安値保証。費用を徹底的に抑えたい人に最適。無料面談のハードルが低い。",
    href: "/smaru",
    badge: "コスパ重視",
    color: "border-accent",
  },
  {
    purpose: "信頼できる大手で安心して準備したい",
    agent: "ISS留学ライフ",
    reason: "Z会グループの安心感。社会人のキャリア留学にも対応。確定率100%の実績。",
    href: "/iss",
    badge: "信頼・安心重視",
    color: "border-primary",
  },
  {
    purpose: "ワーホリに特化したプロに相談したい",
    agent: "ラストリゾート",
    reason: "ワーホリ専門カウンセラーが対応。10万人以上の渡航実績。段階的に相談できる。",
    href: "/lastresort",
    badge: "ワーホリ特化",
    color: "border-green-500",
  },
  {
    purpose: "正規留学・海外大学進学を考えている",
    agent: "留学ジャーナル",
    reason: "創業50年超の老舗。国別専門カウンセラーが対応。圧倒的な情報量と実績。",
    href: "/ryugakujournal",
    badge: "正規留学・実績重視",
    color: "border-purple-500",
  },
  {
    purpose: "一人ひとりに合わせた個別プランがほしい",
    agent: "ウインテック留学センター",
    reason: "完全オーダーメイドのプラン設計。親身なカウンセリングで個別対応。",
    href: "/wintech",
    badge: "個別対応重視",
    color: "border-rose-500",
  },
];

export default function AgentErabiPage() {
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
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">エージェント選びガイド</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            留学エージェントの選び方
            <br />
            <span className="text-primary">3つのポイント</span>【失敗しないために】
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            「どのエージェントを選べばいいかわからない」——よく聞く悩みです。
            この記事では、エージェント選びで絶対に確認すべき3つのポイントと、
            目的別のおすすめエージェントを紹介します。
          </p>
          <p className="text-xs text-muted mt-4">
            ※ 本記事はアフィリエイト広告を含みます。
            <Link href="/disclosure" className="underline hover:text-primary ml-1">広告掲載について</Link>
          </p>
        </div>
      </section>

      {/* 3つのポイント */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            エージェント選びの3つのチェックポイント
          </h2>
          <div className="space-y-8">
            {checkPoints.map((cp) => (
              <div key={cp.num} className="border border-border rounded-2xl overflow-hidden">
                <div className="bg-primary/5 p-5 flex items-center gap-4">
                  <span className="text-3xl font-black text-primary/30">{cp.num}</span>
                  <span className="text-2xl">{cp.icon}</span>
                  <h3 className="text-lg font-bold">{cp.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted text-sm leading-relaxed mb-5">{cp.desc}</p>

                  <p className="text-sm font-bold text-foreground mb-3">✅ 確認すべきこと</p>
                  <ul className="space-y-2 mb-5">
                    {cp.checks.map((check, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <p className="text-xs text-red-600 leading-relaxed">
                      ⚠️ {cp.bad}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 中間 */}
      <section className="py-10 bg-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">実際に比較して確かめるのが一番</p>
          <p className="text-muted text-sm mb-6">
            この3つのポイントを踏まえた上で、複数のエージェントに無料相談してみましょう。
          </p>
          <CtaButton href="/best-3" variant="accent">
            5社を比較してみる →
          </CtaButton>
        </div>
      </section>

      {/* 目的別おすすめ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">目的別おすすめエージェント</h2>
          <p className="text-muted text-sm mb-8">
            あなたの目的に近いものを選んでクリック。詳しい口コミ・費用情報を確認できます。
          </p>
          <div className="space-y-4">
            {agentByPurpose.map((a) => (
              <Link
                key={a.agent}
                href={a.href}
                className={`block bg-white border-l-4 ${a.color} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-muted mb-1">👉 {a.purpose}</p>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-foreground">{a.agent}</p>
                      <span className="text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-0.5">
                        {a.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1">{a.reason}</p>
                  </div>
                  <p className="text-sm text-primary font-bold flex-shrink-0">詳細を見る →</p>
                </div>
              </Link>
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

      {/* まとめ */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">まとめ：エージェント選びの3つのポイント</h2>
          <div className="bg-soft rounded-2xl p-6">
            <ul className="space-y-3">
              {[
                "①費用・料金体系が透明かどうか確認する",
                "②渡航後のサポート体制があるかを事前に確認する",
                "③自分の目的（ワーホリ・語学留学・正規留学など）に特化しているか",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted mt-4 leading-relaxed">
              最終的に一番重要なのは「相談してみて、自分に親身に向き合ってくれると感じたか」です。
              費用やスペックよりも、カウンセラーとの相性が留学成功のカギになります。
              複数社に無料相談して比較するのがベストです。
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            迷ったら、まず複数のエージェントに相談してみよう
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed text-sm">
            無料相談は各社どこも無料。費用ゼロで比較できるので、
            一社に絞る前にいくつか話を聞いてみるのがおすすめです。
          </p>
          <CtaButton href="/best-3" variant="accent">
            おすすめ5社を比較する →
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
