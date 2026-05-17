import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Working Holiday Passのプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading tag="h1">プライバシーポリシー</SectionHeading>

      <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">1. 個人情報の取得について</h2>
          <p>
            当サイト「Working Holiday Pass」（以下「当サイト」）では、
            お問い合わせの際に、お名前・メールアドレス等の個人情報をご入力いただく場合がございます。
            取得した個人情報は、お問い合わせへの回答や必要な情報の提供のために利用いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">2. 個人情報の第三者提供について</h2>
          <p>
            取得した個人情報は、以下の場合を除き、第三者に提供することはありません。
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護に必要な場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">3. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleアナリティクスを利用してアクセス情報を収集しています。
            Googleアナリティクスではデータ収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mt-2">
            Cookieの使用を無効にすることで、データの収集を拒否することができます。
            詳しくはお使いのブラウザの設定をご確認ください。
            Googleアナリティクスの利用規約については、Google社のページをご参照ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">4. 広告について</h2>
          <p>
            当サイトは、第三者配信の広告サービス（A8.net、もしもアフィリエイト、
            バリューコマース、アクセストレード、afb、Amazonアソシエイト等）を利用しています。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用する
            ことがあります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">5. 免責事項</h2>
          <p>
            当サイトに掲載する情報は、可能な限り正確な情報を掲載するよう努めておりますが、
            誤情報が入り込んだり、情報が古くなったりする場合がございます。
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、
            あらかじめご了承ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">6. 著作権について</h2>
          <p>
            当サイトに掲載されている文章・画像等の著作物の無断転載は禁止いたします。
            引用する場合は、引用元として当サイト名とURLを明記してください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">7. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じてプライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <p className="text-muted pt-4 border-t border-border">
          制定日：2026年5月9日
          <br />
          運営者：Takaya（Working Holiday Pass）
        </p>
      </div>
    </div>
  );
}
