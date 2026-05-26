import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報 | Abroad Pass",
  description:
    "Abroad Pass の運営者情報ページです。カナダ・オーストラリアでのワーキングホリデー経験をもとに、留学・ワーホリ準備に役立つ情報を発信しています。",
  alternates: {
    canonical: "https://abroadpass.jp/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3">運営者情報</p>
          <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4">
            Abroad Pass について
          </h1>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            ワーキングホリデー・語学留学の準備に役立つ情報を、実体験をもとに発信しているメディアです。
          </p>
        </div>
      </section>

      {/* 運営者プロフィール */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-soft rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
                ✈️
              </div>
              <div>
                <p className="font-black text-lg">Abroad Pass 編集部</p>
                <p className="text-sm text-muted">ワーホリ・留学情報メディア</p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                カナダ・オーストラリアで計2年のワーキングホリデーを経験。
                渡航前の準備段階で「費用の全体像がわからない」「エージェントって本当に必要？」「英語力ゼロでも大丈夫？」といった疑問に答えてくれる情報がなかなか見つからず、苦労した経験があります。
              </p>
              <p>
                帰国後、同じ悩みを抱えている方のために、実体験にもとづいた正直な情報をまとめたのが Abroad Pass です。
                費用・エージェント選び・英語力・帰国後のキャリアまで、「渡航前に知っておきたかった」情報を網羅することを目指しています。
              </p>
              <p>
                紹介しているエージェントはすべて実際に調査・比較したうえで掲載しています。
                アフィリエイト広告を含む場合がありますが、紹介料の有無によって評価を変えることはありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サイトのこだわり */}
      <section className="py-14 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-black mb-6">Abroad Pass が大切にしていること</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🔍",
                title: "一次情報を大切に",
                desc: "外務省・各国政府の公式情報をもとに記事を構成。憶測や古い情報は掲載しないようにしています。",
              },
              {
                icon: "💬",
                title: "実体験に基づく発信",
                desc: "「行ってみてわかったこと」「準備中に苦労したこと」を正直に書くことを心がけています。",
              },
              {
                icon: "⚖️",
                title: "メリットもデメリットも",
                desc: "ワーホリ・留学の良い面だけでなく、デメリットや向いていない人の特徴も正直に伝えています。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5">
                <p className="text-2xl mb-3">{item.icon}</p>
                <p className="font-bold text-sm mb-2">{item.title}</p>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 広告・アフィリエイトについて */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-black mb-4">広告・アフィリエイトについて</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-sm leading-relaxed text-foreground/80 space-y-3">
            <p>
              当サイトでは、留学エージェントを紹介するページにアフィリエイト広告（A8.net 経由）を含む場合があります。
              読者がエージェントに資料請求・無料相談をした場合に、当サイトに紹介料が支払われる仕組みです。
            </p>
            <p>
              紹介料の有無によって掲載順位や評価内容を変えることはありません。
              コンテンツの内容はすべて編集部が独自に調査・判断したものです。
            </p>
            <p>
              詳しくは <Link href="/disclosure" className="text-primary font-bold hover:underline">広告掲載ポリシー（アフィリエイト開示）</Link> をご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* ナビゲーション */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
          <Link href="/column" className="text-sm text-primary font-bold hover:underline">
            コラム一覧を見る
          </Link>
          <Link href="/best-3" className="text-sm text-primary font-bold hover:underline">
            おすすめエージェントを見る
          </Link>
          <Link href="/disclosure" className="text-sm text-muted hover:text-primary transition-colors">
            広告掲載ポリシー
          </Link>
          <Link href="/privacy" className="text-sm text-muted hover:text-primary transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </section>
    </>
  );
}
