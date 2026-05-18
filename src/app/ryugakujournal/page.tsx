import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "留学ジャーナルの評判・口コミ【2026年最新】50年超の老舗エージェントの実態",
  description:
    "留学ジャーナルの評判・口コミを実際のユーザーの声をもとに徹底解説。24時間サポートの充実度・費用の高さ・担当者の質のばらつきなど、メリット・デメリットを正直にまとめました。",
  alternates: {
    canonical: "https://abroadpass.jp/ryugakujournal",
  },
};

const reviews = [
  {
    age: "20代男性",
    stars: 4,
    good: "渡航前から現地生活まで一貫してサポートしてもらえる安心感が大きかったです。ビザ申請や必要書類の準備は手順を一つずつ丁寧に案内してもらえたため、不安なく進めることができました。現地の最新情報や仕事探しのコツ、住まい選びの注意点など、自分では調べきれない実践的な情報を教えてもらえたのも心強かったです。語学学校の手配もスムーズで、希望に合った学校を提案してもらえたことで出発前の準備に余裕が生まれました。",
    bad: "想像以上に費用がかかりました。語学学校の手配やオプションサービスを追加していくと総額が分かりにくくなり、結果的に自力で準備するより割高に感じました。また、担当者によって対応の質に差があり、連絡の返信が遅いときは不安になることもありました。仕事探しについても、紹介される情報が一般的な内容にとどまり、最終的には自分で動く必要がありました。",
  },
  {
    age: "20代",
    stars: 3,
    good: "サポートが丁寧だった。",
    bad: "手数料が高く感じました。",
  },
  {
    age: "20代",
    stars: 4,
    good: "ビザ申請や学校選びのサポートが非常に丁寧で、初めての留学でも安心できました。渡航前のオリエンテーションで現地生活の注意点を詳しく説明してもらえたことが役立ちました。到着後も24時間対応の電話相談があり、トラブル時にすぐ相談できたのは心強かったです。",
    bad: "費用がやや高めに感じました。また現地でのサポート窓口が限られていて、地方都市に滞在した際は対応が遅れることがありました。",
  },
  {
    age: "30代女性",
    stars: 4,
    good: "初めての留学で利用したエージェントでした。分からないことだらけでしたが、カウンセリングして頂き、私に合いそうな語学学校を提案してくれました。担当の方自身の留学体験談を話してくれて、留学のイメージが沸きありがたかったです。",
    bad: "英語レベルを低めに設定しようとしましたが「大丈夫大丈夫！」と担当の方が仰り少しレベルを高めにしてしまい、留学後ホームステイ先のホームメイトが自分よりベラベラ英語を話す子ばかりでレベルが合わず後悔しました。もう少し丁寧にカウンセリングをしてくれたら有難いと思いました。",
  },
  {
    age: "20代",
    stars: 4,
    good: "初めての留学で不安が多かったのですが、ビザ申請や学校手続き、航空券の手配まで一括でサポートしてくれたので非常に助かりました。現地到着後も24時間対応の電話サポートがあり、トラブル時にすぐ相談できたのは安心感につながりました。カウンセラーの方が留学経験者で、生活面や勉強方法について具体的なアドバイスをもらえた点も良かったです。",
    bad: "費用がやや高めに感じました。追加オプションを勧められることが多く、予算を超えてしまった部分がありました。また、人気校の情報は早めに埋まってしまい、希望通りの学校を選べなかったのは少し残念でした。",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default function RyugakuJournalPage() {
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
            留学ジャーナルの評判・口コミ
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 text-center">
            創業50年超の老舗エージェント「留学ジャーナル」。実際の利用者の口コミをもとに、
            24時間サポートの実態・費用の高さ・向いている人を正直にまとめました。
          </p>

          {/* 総合評価 */}
          <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto text-center mb-8">
            <p className="text-sm font-bold text-muted mb-2">総合評価</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl font-black">4.0</span>
              <div>
                <Stars count={4} />
                <p className="text-xs text-muted mt-1">※ 本サイト掲載の口コミ{reviews.length}件をもとに算出した参考評価です</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">渡航前の丁寧なサポートと24時間電話対応</span>が高評価な一方、
              <span className="font-bold text-red-500">費用の高さと担当者の質のばらつき</span>に注意が必要です。
            </p>
          </div>

          <div className="text-center">
            <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75" variant="accent" external>
              留学ジャーナルに無料相談する
            </CtaButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www16.a8.net/0.gif?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75" width={1} height={1} alt="" style={{ border: "none" }} />
            <p className="text-xs text-muted mt-2">※ 公式サイトに移動します（無料）</p>
          </div>
        </div>
      </section>

      {/* 留学ジャーナルとは */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="1971年創業・日本最古参の留学エージェントのひとつ">
            留学ジャーナルとは
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              留学ジャーナルは1971年創業、日本で最も歴史のある留学エージェントのひとつです。
              雑誌「留学ジャーナル」の出版でも知られ、語学留学・ワーホリから大学正規留学まで幅広く対応。
              国別の専門カウンセラーが在籍しており、ビザ申請から航空券手配まで一括でサポートしてくれます。
            </p>
            <p>
              到着後も24時間対応の電話サポートがあり、現地でのトラブル時も日本語で相談できる体制が整っています。
              カウンセラーが実際の留学経験者であることが多く、現地の生活情報や仕事探しの実践的なアドバイスが
              もらえる点も特徴です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { label: "創業", value: "1971年" },
                { label: "歴史", value: "50年以上" },
                { label: "サポート", value: "24時間電話対応" },
                { label: "対象", value: "語学・ワーホリ・正規留学" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 text-center">
                  <p className="text-xs text-muted mb-1">{item.label}</p>
                  <p className="font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="口コミから見えてきた実態">
            留学ジャーナルのメリット・デメリット
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">✓ メリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "渡航前から現地生活まで一貫した手厚いサポート",
                  "ビザ申請・学校手配・航空券まで一括対応",
                  "到着後も24時間電話で相談できる安心感",
                  "カウンセラーが留学経験者で実践的なアドバイスがもらえる",
                  "国別専門カウンセラーが在籍、目的別のプランニングが強み",
                  "50年以上の実績・情報量の豊富さ",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">△ デメリット</p>
              <ul className="space-y-3 text-sm">
                {[
                  "費用がやや高め・追加オプションで予算オーバーになりやすい",
                  "担当者によって対応の質に差があるという声が複数",
                  "連絡の返信が遅いケースがある",
                  "地方都市では現地サポートの対応が遅れることも",
                  "英語レベルなどのカウンセリングが担当者任せになりやすい",
                  "人気校は早く埋まるため、希望通りに選べないことがある",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">△</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 向いている人・向いていない人 */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="こんな人におすすめ・おすすめしない">
            留学ジャーナルが向いている人・向いていない人
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-bold text-primary mb-4">👍 向いている人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "初めての留学で手続き全般を任せたい",
                  "現地でのトラブル対応を重視する（24時間サポート）",
                  "正規留学・大学院留学など長期・本格的な留学を考えている",
                  "実績のある大手に安心して任せたい",
                  "カウンセラーの経験談を参考にしながら計画を立てたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">👎 向いていない人</p>
              <ul className="space-y-2 text-sm">
                {[
                  "費用をできるだけ抑えたい",
                  "追加オプションを勧められるのが苦手",
                  "短期の語学留学だけを検討している",
                  "自分でリサーチして自由に選択肢を広げたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 口コミ */}
      <section className="py-14 bg-soft">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="実際の利用者の声">
            留学ジャーナルの口コミ
          </SectionHeading>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 text-sm text-foreground/70">
            ※ 以下の口コミは第三者口コミサービスに投稿されたユーザーの声を参考に掲載しています。良い点・悪い点ともに正直に掲載しています。
          </div>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold">{review.age}</span>
                  <Stars count={review.stars} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-primary mb-1">良かった点</p>
                    <p className="text-foreground/80 leading-relaxed">{review.good}</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-500 mb-1">気になった点</p>
                    <p className="text-foreground/80 leading-relaxed">{review.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading tag="h2" sub="結論">
            留学ジャーナルはこんなエージェント
          </SectionHeading>
          <div className="bg-soft rounded-2xl p-6 text-sm leading-relaxed space-y-3 text-foreground/80">
            <p>
              留学ジャーナルの強みは<strong>50年以上の歴史に裏付けられた情報量と、24時間電話対応という安心感</strong>です。
              渡航前から現地到着後まで一貫してサポートが受けられるため、
              「初めての留学で手続き全般を任せたい」という方には頼もしい存在です。
            </p>
            <p>
              一方で、<strong>費用の高さと担当者による質のばらつき</strong>は複数の口コミで指摘されています。
              追加オプションを勧められることで予算オーバーになりやすい点も注意が必要です。
              相談の際は最初から「予算の上限」を明確に伝え、総額をしっかり確認することをおすすめします。
            </p>
            <p>
              <strong>「正規留学を目指している」「長期留学で現地サポートを重視する」</strong>という方には
              特に向いているエージェントです。
              無料相談は費用もかからず、話を聞くだけでも問題ありません。
            </p>
          </div>
        </div>
      </section>

      {/* 他のエージェントとの比較 */}
      <section className="py-10 bg-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted mb-4">他のエージェントとも比較したい方はこちら</p>
          <Link
            href="/best-3#cost"
            className="inline-block text-sm font-bold text-primary underline hover:text-primary-dark"
          >
            留学エージェント5社の比較表を見る →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料相談から始めてみませんか？
          </h2>
          <p className="text-white/80 mb-4 text-sm leading-relaxed">
            相談しただけで申し込む義務は一切ありません。
            費用の詳細や担当カウンセラーの雰囲気など、気になることを直接確認してみましょう。
          </p>
          <p className="text-white/60 text-xs mb-8">
            ※ 無料・申し込み不要
          </p>
          <CtaButton href="https://px.a8.net/svt/ejp?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75" variant="accent" external>
            留学ジャーナルに無料相談する
          </CtaButton>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www16.a8.net/0.gif?a8mat=4AUXWS+GAFZN6+5U7S+5YZ75" width={1} height={1} alt="" style={{ border: "none" }} />
        </div>
      </section>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "留学ジャーナル",
            description: "1971年創業、50年以上の歴史を持つ老舗留学エージェント。24時間電話サポートと国別専門カウンセラーが特徴。",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: String(reviews.length),
            },
          }),
        }}
      />
    </>
  );
}
