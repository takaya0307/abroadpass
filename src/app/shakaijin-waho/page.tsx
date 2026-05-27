import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "30代・社会人がワーホリに行くには？会社の辞め方から帰国後の就職まで解説【2026年】 | Abroad Pass",
  description:
    "30代でもワーホリは間に合う？会社を辞めるべきか・貯金はいくら必要か・帰国後の就職への影響まで、社会人ワーホリのリアルをまとめて解説します。【2026年最新】",
  openGraph: {
    title: "30代・社会人がワーホリに行くには？会社の辞め方から帰国後の就職まで解説【2026年】",
    description:
      "会社を辞めるべきか、貯金はいくら必要か、帰国後の就職は大丈夫か。30代・社会人のワーホリに関する疑問をまとめて解説します。",
  },
};

const faqData = [
  {
    question: "30代でもワーキングホリデーに申請できますか？",
    answer:
      "多くの国では「申請時点で30歳以下」が条件です。つまり30歳の誕生日を迎える前に申請すれば、現地滞在中に31歳になっても問題ありません。ただし国によって上限年齢が異なり、アイルランドは35歳以下、ニュージーランドは30歳以下など差があります。まず希望国の年齢条件を確認することが最初のステップです。",
  },
  {
    question: "会社を辞めずにワーホリに行くことはできますか？",
    answer:
      "ワーキングホリデービザの滞在期間は原則1年のため、休職や有給休暇での対応は現実的ではありません。退職して渡航するのが一般的です。ただし1〜3ヶ月の短期語学留学であれば、有給休暇や休職制度を活用するケースもあります。",
  },
  {
    question: "ワーホリに行くための貯金はいくら必要ですか？",
    answer:
      "渡航前の準備費用（ビザ・航空券・保険など）として30〜50万円、現地での生活費として月20〜30万円が目安です。現地での就労で補えますが、仕事が決まるまでの最低3ヶ月分は手元に用意しておくと安心です。合計では150〜300万円を目標に貯金する方が多いです。",
  },
  {
    question: "ワーホリ後の就職活動は不利になりますか？",
    answer:
      "20代後半〜30代前半であれば、経験の説明次第で不利にはなりません。ただし「なんとなくワーホリした」ではなく「英語力・異文化経験をこう活かしたい」という具体的なストーリーが必要です。外資系・グローバル企業・観光業では特にプラス評価されやすいです。",
  },
  {
    question: "英語力がなくても30代でワーホリに行けますか？",
    answer:
      "行けます。ただし英語ゼロの状態では現地での就職活動や日常生活の難易度が上がります。渡航前に語学学校や現地での最初の数ヶ月を語学学習に充てる計画を立てておくと、その後の就労・生活がスムーズになります。",
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

const timeline = [
  {
    month: "12〜18ヶ月前",
    title: "情報収集・目標国を決める",
    tasks: ["希望国の年齢制限を確認する", "ワーホリビザの条件を調べる", "概算費用を把握して貯金目標を設定する"],
  },
  {
    month: "9〜12ヶ月前",
    title: "エージェントに相談・貯金を本格化",
    tasks: ["無料相談でプランを具体化する", "毎月の貯金額を増やす", "オンライン英会話で英語力を上げる"],
  },
  {
    month: "6〜9ヶ月前",
    title: "会社への報告・ビザ申請準備",
    tasks: ["退職時期の見通しを立てる", "ビザ申請書類を準備する", "航空券・保険の目途をつける"],
  },
  {
    month: "3〜6ヶ月前",
    title: "退職手続き・各種申請",
    tasks: ["退職願を提出する（原則2ヶ月前）", "ビザを申請する", "海外保険・銀行口座を手配する"],
  },
  {
    month: "1〜3ヶ月前",
    title: "渡航準備・最終確認",
    tasks: ["航空券を購入する", "住居（最初の宿）を確保する", "持ち物をそろえて荷物を減らす"],
  },
];

const ageByCountry = [
  { country: "🇦🇺 オーストラリア", limit: "30歳以下（申請時）" },
  { country: "🇨🇦 カナダ", limit: "30歳以下（申請時）" },
  { country: "🇳🇿 ニュージーランド", limit: "30歳以下（申請時）" },
  { country: "🇬🇧 イギリス", limit: "30歳以下（申請時）" },
  { country: "🇮🇪 アイルランド", limit: "30歳以下（申請時）※年間発給枠800人" },
  { country: "🇩🇪 ドイツ", limit: "30歳以下（申請時）" },
  { country: "🇫🇷 フランス", limit: "30歳以下（申請時）" },
  { country: "🇰🇷 韓国", limit: "30歳以下（申請時）" },
];

export default function ShakaijinWahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-bold text-sm mb-3 tracking-wide">社会人・30代のワーホリ</p>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-5">
            30代・社会人がワーホリに行くには？
            <br />
            <span className="text-primary">会社の辞め方から帰国後の就職まで解説</span>
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">
            「仕事を辞めてワーホリに行きたいけど、年齢的に遅すぎないか…」「帰国後の就職が心配」——そんな不安を抱えている社会人の方へ。
            この記事では、30代が今すぐ動くべき理由と、準備・費用・帰国後のキャリアまでまとめて解説します。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
            <p className="font-bold mb-1">⏰ 知っておくべき年齢リミット</p>
            <p>多くの国のワーホリビザは「申請時点で30歳以下」が条件です。30歳を過ぎてから動こうとしても<span className="font-bold">申請できません</span>。迷っているなら、今すぐ動くことが最優先です。</p>
          </div>
        </div>
      </section>

      {/* 年齢制限 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="まず最初に確認すること">
            国別ワーホリ年齢制限一覧
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            「申請時点で30歳以下」とは、<span className="font-bold text-foreground">31歳の誕生日を迎える前に申請を完了すれば良い</span>ということです。
            現地滞在中に31歳になっても、ビザの有効期間は変わりません。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">国</th>
                  <th className="p-3 text-left">年齢制限</th>
                </tr>
              </thead>
              <tbody>
                {ageByCountry.map((row, i) => (
                  <tr key={row.country} className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-soft"}`}>
                    <td className="p-3 font-medium">{row.country}</td>
                    <td className="p-3 text-muted">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">※ 外務省公式情報（2026年4月時点）に基づきます。年齢制限・発給枠・条件は変更になる場合があります。必ず各国大使館・公式サイトで最新情報をご確認ください。</p>
        </div>
      </section>

      {/* 3つのパターン */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="会社との関係をどうするか">
            社会人がワーホリに行く3つのパターン
          </SectionHeading>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">✈️</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">① 退職してワーホリ（最もポピュラー）</h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    ワーホリは原則1年間の滞在が可能なため、退職して渡航するケースが大半です。
                    「仕事を辞める」ことへの不安は大きいですが、帰国後の就職活動で活かせる経験を得るために決断する社会人が多いです。
                    30歳前後が多く、転職市場での評価が下がりにくいうちに動くのが鍵です。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">滞在期間：最大1年</span>
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">対象：ほとんどの社会人ワーホリ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">💼</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">② 休職制度を使う（条件が揃う人向け）</h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    会社の「自己啓発休職」や「留学休職」制度が整っている場合、退職せずに渡航できるケースがあります。
                    ただしワーホリのような1年間の休職を認める会社は多くなく、実際には3〜6ヶ月の語学留学に適用されることが多いです。
                    まず就業規則・人事に確認することが先決です。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">滞在期間：会社の制度次第</span>
                    <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">条件：会社の制度が必要</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">🔄</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">③ 転職活動と並行して計画する</h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    「現職を辞めてワーホリ → 帰国後に転職」を前提に、帰国後の就職先のイメージを持ちながら渡航するパターンです。
                    ワーホリ中に外資系・グローバル企業への転職を目指して英語力を高める、という明確な目標があると、
                    帰国後の就活でも説得力が出ます。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">滞在期間：最大1年</span>
                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">目標：帰国後のキャリアアップ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="貯金はいくら必要か">
            社会人ワーホリにかかる費用の目安
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            ワーホリ中は現地で就労して生活費を稼ぐことができます。ただし仕事が決まるまでの数ヶ月は収入がないため、
            <span className="font-bold text-foreground">最低150〜200万円の貯金を持って渡航する</span>のが現実的です。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
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
                  { item: "航空券（往復）", cost: "10〜25万円", note: "行き先・時期で変動" },
                  { item: "海外保険（1年）", cost: "15〜30万円", note: "加入必須" },
                  { item: "渡航前語学準備", cost: "5〜10万円", note: "オンライン英会話など" },
                  { item: "現地初期費用", cost: "20〜40万円", note: "最初の住居・生活用品" },
                  { item: "現地生活費（月）", cost: "15〜25万円", note: "就職前の3ヶ月分は手元に" },
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
          <div className="mt-4 p-4 bg-primary/5 rounded-2xl text-sm text-muted">
            💡 現地での就労収入（カフェ・ファーム・日系企業など）で月10〜20万円程度を稼ぐ人が多く、
            後半は出費を自力でカバーできるケースがほとんどです。
          </div>
          <div className="mt-4 text-center">
            <Link href="/waho-cost" className="text-primary text-sm font-bold underline underline-offset-4">
              → 国別ワーホリ費用の詳細はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* スケジュール */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="逆算で動く">
            出発までの準備スケジュール
          </SectionHeading>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            社会人は会社の退職手続きがあるため、思い立ってすぐ出発とはいきません。
            <span className="font-bold text-foreground">理想は12〜18ヶ月前から動き始めること</span>。
            特に30歳の年齢制限が迫っている方は、今すぐエージェントに相談することをおすすめします。
          </p>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 bg-border flex-1 mt-2" />}
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border flex-1 mb-2">
                  <p className="text-xs text-primary font-bold mb-1">{t.month}</p>
                  <h3 className="font-bold mb-2">{t.title}</h3>
                  <ul className="space-y-1">
                    {t.tasks.map((task, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社の辞め方 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="実際の動き方">
            会社の辞め方・伝え方のポイント
          </SectionHeading>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 bg-soft rounded-2xl border border-border">
              <span className="text-2xl shrink-0">📋</span>
              <div>
                <h3 className="font-bold mb-1">退職の意思は2〜3ヶ月前に伝える</h3>
                <p className="text-sm text-muted leading-relaxed">
                  法律上は2週間前でも退職は可能ですが、引き継ぎや後任の採用を考えると2〜3ヶ月前に伝えるのがマナーです。
                  渡航日から逆算して退職日を決め、余裕を持ったスケジュールを立てましょう。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-soft rounded-2xl border border-border">
              <span className="text-2xl shrink-0">💬</span>
              <div>
                <h3 className="font-bold mb-1">理由はシンプルに「海外経験を積みたい」でいい</h3>
                <p className="text-sm text-muted leading-relaxed">
                  「ワーキングホリデーで海外に行くために退職します」と正直に伝えるのが一番シンプルです。
                  引き止めに備えて、意思が固まった段階で報告しましょう。退職理由を詳しく説明する必要はありません。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-soft rounded-2xl border border-border">
              <span className="text-2xl shrink-0">📄</span>
              <div>
                <h3 className="font-bold mb-1">退職後の手続きを忘れずに</h3>
                <p className="text-sm text-muted leading-relaxed">
                  健康保険の切り替え（任意継続 or 国民健康保険）、年金の手続き、確定申告の準備など、
                  退職後にやることが多いです。渡航前に済ませておかないと後が大変になります。
                  エージェントに相談すると、手続きのチェックリストをもらえることもあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 帰国後の就職 */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="最大の不安を解消する">
            ワーホリ後の就職・キャリアへの影響
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            「30代でワーホリから帰ってきたら、就職できないのでは？」という不安が最も多い声です。
            結論として、<span className="font-bold text-foreground">経験の「伝え方」次第でプラス評価に変えられます</span>。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "🌐", title: "外資系・グローバル企業", desc: "英語力と海外での実務経験が直接評価される。特に営業・マーケ・エンジニア職で需要が高い。" },
              { icon: "✈️", title: "航空・旅行・ホテル業界", desc: "海外生活経験・語学力・接客スキルが活かせる。外資系ホテルなどは特に親和性が高い。" },
              { icon: "🏢", title: "グローバル展開する日本企業", desc: "海外拠点との橋渡し役として、英語力と現地感覚を持つ人材の需要が増えている。" },
              { icon: "💻", title: "IT・Web系（外資含む）", desc: "スキルがあれば年齢よりも実力重視の傾向が強く、ワーホリ経験がマイナスになりにくい。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
            <p className="font-bold mb-1">⚠️ 帰国後に後悔しないために</p>
            <p>「なんとなく1年過ごした」では就活での説明に困ります。渡航前に「どんな経験を積んで・どんな仕事に就きたいか」を決めておくと、ワーホリ中の行動が変わります。</p>
          </div>
          <div className="mt-4 text-center">
            <Link href="/career" className="text-primary text-sm font-bold underline underline-offset-4">
              → 帰国後の就職・キャリアの詳細はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* 英語力 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="渡航前に準備すべきこと">
            英語力はどのくらい必要か
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            英語力ゼロでもワーホリには行けます。ただし<span className="font-bold text-foreground">英語力が高いほど選択肢が広がる</span>のは事実です。
            現地で早めに就職できる・より良い仕事に就ける・生活のストレスが減るなど、全ての面で有利になります。
          </p>
          <div className="space-y-4">
            {[
              { level: "英語ゼロ", icon: "😰", desc: "日常会話も難しい状態。現地の日系企業・農場・工場など日本語でも働ける環境から始めることが多い。渡航前に最低でも挨拶・数字・簡単な自己紹介ができるレベルまで上げておくと安心。" },
              { level: "日常会話レベル（TOEIC 500〜700程度）", icon: "😊", desc: "カフェ・ショップ・ホテルなど現地での接客業に就きやすい。英語で生活のほとんどが賄える。このレベルで渡航できると選択肢がぐっと広がる。" },
              { level: "ビジネス会話レベル（TOEIC 700以上）", icon: "😎", desc: "現地の英語圏企業や専門職でも仕事に就ける。ワーホリ中の収入も増え、帰国後の転職活動でも高く評価される。" },
            ].map((item) => (
              <div key={item.level} className="flex gap-4 p-5 bg-soft rounded-2xl border border-border">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.level}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/eigo-zero" className="text-primary text-sm font-bold underline underline-offset-4">
              → 英語力ゼロでもワーホリに行けるか詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* エージェント */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading tag="h2" sub="社会人こそ使うべき理由">
            ワーホリエージェントを使うメリット
          </SectionHeading>
          <p className="text-muted text-sm mb-6 leading-relaxed">
            仕事をしながら準備を進める社会人にとって、<span className="font-bold text-foreground">時間は最も貴重なリソースです</span>。
            エージェントに任せることで、ビザ申請・学校選び・渡航準備を効率よく進められます。
            しかも<strong>サービスは無料</strong>（語学学校からの紹介料で運営）なので、使わない理由がありません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "⏱️", title: "準備時間を大幅に短縮", desc: "ビザ書類・学校選び・住居手配など、一人でやると数ヶ月かかる作業をまとめてサポート。仕事と並行して準備できる。" },
              { icon: "🎯", title: "目的に合った国・学校を提案", desc: "「キャリアアップ」「英語習得」「費用を抑えたい」など、目的に合った最適なプランを無料で提案してもらえる。" },
              { icon: "🛡️", title: "渡航後のトラブルにも対応", desc: "現地でのトラブル・学校変更・ビザの延長など、渡航後も日本語でサポートを受けられる。一人で抱え込まなくて良い。" },
              { icon: "💰", title: "完全無料で使える", desc: "エージェントの費用は語学学校が負担するため、利用者は基本的に無料。直接申し込みと費用は変わらない。" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* おすすめエージェント */}
          <h3 className="font-bold text-base mb-4">社会人ワーホリにおすすめのエージェント</h3>
          <div className="space-y-3">
            {[
              { name: "スマ留", href: "/smaru", tag: "費用重視・マルタ対応", desc: "業界最安水準の語学学校手配料が特徴。フィリピン・マルタなどコスパの良い国への対応も充実。" },
              { name: "ラストリゾート", href: "/lastresort", tag: "ワーホリ特化", desc: "ワーホリに特化した専門エージェント。オーストラリア・カナダ・アイルランドに現地オフィスを持ち、渡航後も安心。" },
              { name: "ISS留学ライフ", href: "/iss", tag: "実績・サポート重視", desc: "創業30年以上の実績。カウンセラーの対応が丁寧で、30代の社会人からの相談にも慣れている。" },
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
              { href: "/career", emoji: "💼", title: "帰国後の就職・キャリアへの影響", tag: "キャリア" },
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
          <p className="text-primary font-bold text-sm mb-2">年齢リミットが迫っているなら今すぐ動こう</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            まずは無料相談で<br />プランを具体化する
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            「30歳の誕生日まであと○ヶ月」という状況なら、動き出すのは今日です。<br />
            エージェントへの相談は完全無料。希望の国・予算・スケジュールを伝えるだけで、
            あなたに合ったプランを提案してもらえます。
          </p>
          <CtaButton href="/best-3">
            おすすめエージェント3選を見る
          </CtaButton>
        </div>
      </section>
    </>
  );
}
