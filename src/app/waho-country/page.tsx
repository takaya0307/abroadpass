import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

const faqData = [
  {
    question: "ワーホリで一番おすすめの国はどこですか？",
    answer:
      "目的によって異なります。稼ぎながら生活したいならオーストラリア、英語環境の質を重視するならカナダ、自然の中でゆったり過ごしたいならニュージーランド、長期滞在・ヨーロッパ旅行もしたいならイギリスが向いています。",
  },
  {
    question: "初めてワーホリに行くならどの国がいいですか？",
    answer:
      "日本人コミュニティが充実しており情報が多いオーストラリアが、初めての方に選ばれやすい国です。ただし自分の目的（英語力・貯金・経験）に合わせて選ぶことが最も大切です。",
  },
  {
    question: "ワーホリの年齢制限はいくつですか？",
    answer:
      "多くの国で申請時点で18〜30歳が対象です。カナダは農村・北部地域向けのプログラム（ROワーホリ）を利用することで31〜35歳でも渡航できる場合があります。年齢条件は変更されることがあるため、最新情報は外務省や各国大使館でご確認ください。",
  },
  {
    question: "英語力がなくてもワーホリはできますか？",
    answer:
      "できます。ただし英語力がゼロに近い状態だと、仕事探しや日常生活で苦労する場面が増えます。渡航前に最低限の日常会話を身につけておくと、現地での生活がスムーズになります。",
  },
  {
    question: "エージェントを使った方がいいですか？",
    answer:
      "特に初めての方には、ビザ手続きや学校・仕事探しのサポートを受けられるエージェントの利用をおすすめします。基本的なサービスは無料で利用できるエージェントがほとんどです。",
  },
];

const countries = [
  {
    flag: "🇦🇺",
    name: "オーストラリア",
    tags: ["稼ぎやすい", "情報が多い", "長期滞在可"],
    summary: "ワーホリの定番。最低賃金の高さと情報量の多さが強み",
    pros: [
      "最低賃金がAUD 24.95/時（主要英語圏でトップクラス）",
      "セカンド・サードワーホリで最長3年まで滞在可能",
      "日本人コミュニティが充実しており情報が豊富",
      "ファームジョブなど仕事の選択肢が多い",
    ],
    cons: [
      "物価が高く、生活費がかさみやすい",
      "日本人が多いため英語漬けの環境を作りにくい場合も",
    ],
    age: "18〜30歳（申請時点）",
    period: "最長1年（条件次第でセカンド・サード取得可）",
    fit: "しっかり稼ぎながら長期滞在したい方",
  },
  {
    flag: "🇨🇦",
    name: "カナダ",
    tags: ["治安が良い", "多文化", "都市の選択肢"],
    summary: "治安の良さと多文化環境が魅力。都市によって雰囲気が大きく異なる",
    pros: [
      "治安が良く、生活しやすい環境",
      "バンクーバー・トロントなど都市の選択肢が豊富",
      "多文化国家で英語以外の文化にも触れやすい",
      "2025年4月より2回目のビザ申請が可能になった",
    ],
    cons: [
      "冬の寒さが厳しい地域が多い",
      "抽選制のため、必ずビザが取得できるわけではない",
    ],
    age: "18〜30歳（申請時点）※農村部向けプログラムは31〜35歳も対象の場合あり",
    period: "最長1年（2回申請で最長2年）",
    fit: "安全な環境で多文化体験をしたい方",
  },
  {
    flag: "🇳🇿",
    name: "ニュージーランド",
    tags: ["自然が豊か", "のんびり", "費用を抑えやすい"],
    summary: "大自然とゆったりした生活ペース。英語を学びながら自然を楽しみたい方に",
    pros: [
      "広大な自然の中でゆったりとした生活が送れる",
      "最長6ヶ月間、語学学校に通うことができる",
      "オーストラリアと比べて費用を抑えやすい傾向",
      "最低賃金はNZD 23.50/時（2025年4月〜）",
    ],
    cons: [
      "オーストラリアと比べると求人・仕事の選択肢がやや少ない",
      "都市部以外は交通インフラが限られる",
    ],
    age: "18〜30歳（申請時点）",
    period: "最長1年（条件次第で3ヶ月延長可）",
    fit: "自然の中でのんびり過ごしながら英語を学びたい方",
  },
  {
    flag: "🇬🇧",
    name: "イギリス",
    tags: ["2年滞在可", "本場英語", "ヨーロッパ旅行"],
    summary: "英語圏唯一の2年間滞在が可能。ヨーロッパ各国へのアクセスも魅力",
    pros: [
      "ユース・モビリティ・スキームで最長2年間滞在できる",
      "本場のイギリス英語環境に浸れる",
      "ヨーロッパ各国への旅行がしやすい地理的メリット",
      "ロンドンをはじめ仕事の選択肢が豊富",
    ],
    cons: [
      "物価が高い（特にロンドン）",
      "生活費を工面するのが他国より難しいケースがある",
    ],
    age: "18〜30歳（申請時点）",
    period: "最長2年",
    fit: "長期でじっくり滞在したい・ヨーロッパも旅したい方",
  },
  {
    flag: "🇮🇪",
    name: "アイルランド",
    tags: ["英語圏", "ヨーロッパ拠点", "温かい雰囲気"],
    summary: "英語圏でありながらヨーロッパに位置。アイルランド人の温かさも魅力",
    pros: [
      "英語圏でありながらヨーロッパ各国への旅行拠点になる",
      "アイルランド人は日本人に対して親しみやすいという声が多い",
      "イギリスと比べると物価がやや抑えめ",
    ],
    cons: [
      "日本からの直行便がなく、渡航に時間がかかる",
      "情報量がオーストラリア・カナダと比べて少ない",
    ],
    age: "18〜30歳（申請時点）",
    period: "最長1年",
    fit: "英語圏でヨーロッパも楽しみたい方",
  },
];

export const metadata: Metadata = {
  title: "ワーキングホリデーおすすめ国ランキング【2026年最新】英語圏5カ国を比較",
  description:
    "オーストラリア・カナダ・ニュージーランド・イギリス・アイルランドのワーホリを徹底比較。費用・稼ぎやすさ・英語環境・滞在期間など目的別におすすめを解説します。",
  alternates: {
    canonical: "https://abroadpass.jp/waho-country",
  },
};

export default function WahoCountryPage() {
  return (
    <>
      <div className="bg-accent/10 text-center py-2 text-xs text-muted">
        【PR】当ページにはアフィリエイト広告が含まれています
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-soft to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 text-center">2026年最新版</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4 text-center">
            ワーキングホリデーおすすめ国<br className="hidden md:block" />
            英語圏5カ国を徹底比較
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            「どの国にすればいいかわからない」という方向けに、
            オーストラリア・カナダ・ニュージーランド・イギリス・アイルランドの
            特徴・メリット・デメリットを正直に比較しました。
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 max-w-xl mx-auto text-sm text-foreground/80 leading-relaxed">
            <p className="font-bold text-primary mb-2">📌 この記事でわかること</p>
            <ul className="space-y-1">
              <li>✓ 英語圏5カ国のメリット・デメリット</li>
              <li>✓ 目的別（稼ぎ・英語・旅・費用）のおすすめ国</li>
              <li>✓ 年齢制限・滞在期間のまとめ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 国別詳細 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="メリット・デメリット比較">
            英語圏5カ国の特徴まとめ
          </SectionHeading>
          <div className="space-y-8">
            {countries.map((country, i) => (
              <div key={country.name} className="bg-soft rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-black text-lg">{i + 1}. {country.name}</p>
                      {country.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted mt-1">{country.summary}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-bold text-primary text-xs mb-2">✓ メリット</p>
                    <ul className="space-y-1 text-xs text-foreground/80">
                      {country.pros.map((p) => (
                        <li key={p} className="flex items-start gap-1.5">
                          <span className="text-primary mt-0.5 flex-shrink-0">・</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="font-bold text-red-500 text-xs mb-2">△ デメリット</p>
                    <ul className="space-y-1 text-xs text-foreground/80">
                      {country.cons.map((c) => (
                        <li key={c} className="flex items-start gap-1.5">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">・</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-muted mb-1">年齢制限</p>
                    <p className="font-bold">{country.age}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-muted mb-1">滞在期間</p>
                    <p className="font-bold">{country.period}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-muted mb-1">こんな人に向いている</p>
                    <p className="font-bold">{country.fit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 目的別おすすめ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="目的別で選ぶ">
            あなたの目的に合った国はどこ？
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "💰",
                label: "しっかり稼ぎたい",
                country: "オーストラリア",
                reason: "最低賃金が英語圏でトップクラス。ファームジョブなど仕事の選択肢が多い。",
              },
              {
                icon: "🗣",
                label: "英語力を本気で伸ばしたい",
                country: "カナダ・イギリス",
                reason: "カナダは多文化で自然な英語環境。イギリスは本場英語に触れられる。",
              },
              {
                icon: "🌿",
                label: "費用を抑えたい",
                country: "ニュージーランド",
                reason: "オーストラリアと比べて生活費を抑えやすく、自然豊かな環境で過ごせる。",
              },
              {
                icon: "✈️",
                label: "長く滞在・旅行も楽しみたい",
                country: "イギリス・アイルランド",
                reason: "イギリスは2年間滞在可能。ヨーロッパ各国への旅行拠点としても使いやすい。",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5">
                <p className="text-xl mb-2">{item.icon}</p>
                <p className="font-bold text-sm mb-1">{item.label}</p>
                <p className="text-primary font-bold text-sm mb-2">→ {item.country}</p>
                <p className="text-xs text-muted leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            国選びで一番大切なこと
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              「どの国が正解か」という答えはなく、<strong>自分の目的・予算・期間に合った国を選ぶこと</strong>が最も重要です。
              人気があるからといってオーストラリアが全員に合うわけではありませんし、
              ニュージーランドやアイルランドが自分にとってのベスト国になることも十分あります。
            </p>
            <p>
              また、国選びと同時に<strong>ビザの取得方法・申請タイミング・語学学校選び</strong>なども検討が必要です。
              一人で情報を集めるのが大変な場合は、無料で相談できる留学エージェントを活用するのも一つの方法です。
            </p>
          </div>
          <div className="mt-6 text-center">
            <CtaButton href="/best-3" variant="primary">
              おすすめエージェント5社を比較する
            </CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="よくある質問">
            ワーホリ国選び Q&amp;A
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
              { href: "/waho-towa", title: "ワーホリとは？仕組みから費用・メリット・デメリットまで", desc: "ワーホリの基礎知識を完全解説。" },
              { href: "/waho-cost", title: "ワーホリにかかる費用はいくら？国別まとめ", desc: "渡航先ごとのリアルな費用を公開。" },
              { href: "/agent-erabi", title: "失敗しない留学エージェントの選び方", desc: "自分に合ったエージェントを選ぶポイント。" },
              { href: "/best-3", title: "留学エージェントおすすめ比較", desc: "主要5社を徹底比較。" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="block bg-soft rounded-2xl p-5 hover:shadow-md transition-shadow">
                <p className="font-bold text-sm mb-1 text-primary">{a.title}</p>
                <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料相談から始めてみませんか？</h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            国選び・ビザ・費用など、気になることを無料で相談できます。
          </p>
          <CtaButton href="/best-3" variant="accent">おすすめエージェントを見る</CtaButton>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
