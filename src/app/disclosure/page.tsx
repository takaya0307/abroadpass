import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "広告掲載について（PR表記）",
  description:
    "Abroad Passにおける広告掲載・アフィリエイトプログラムについての説明。ステマ規制対応。",
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading tag="h1" sub="景品表示法に基づく表記">
        広告掲載について
      </SectionHeading>

      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-10">
        <p className="font-bold text-foreground mb-2">【広告についての明示】</p>
        <p className="text-sm leading-relaxed text-foreground/80">
          当サイト「Abroad Pass」は、アフィリエイトプログラムに参加しています。
          記事内にはアフィリエイトリンク（広告リンク）が含まれており、リンク経由で商品・
          サービスの申し込みがあった場合、当サイトに報酬が支払われることがあります。
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">利用しているアフィリエイトサービス</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>A8.net</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">コンテンツの独立性について</h2>
          <p>
            各エージェントの情報は公式サイト・口コミサイト・各種公開情報をもとに作成しています。
            読者にとって有益な情報提供を最優先とし、掲載内容の正確性・公平性に努めています。
          </p>
          <p className="mt-3">
            メリットだけでなくデメリットも正直に記載し、読者が自分に合った選択をできるよう
            心がけています。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">広告リンクの見分け方</h2>
          <p>
            当サイトの記事中にある「公式サイトを見る」「無料相談を予約する」等のボタンリンク、
            および各サービスの紹介テキスト内のリンクは、アフィリエイトリンクを含む場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">景品表示法への対応</h2>
          <p>
            2023年10月1日施行のステルスマーケティング規制（景品表示法）に基づき、
            広告であることを適切に表示しています。記事の冒頭またはサイト共通部分に
            「当サイトはアフィリエイト広告を利用しています」と明記しています。
          </p>
        </section>

        <p className="text-muted pt-4 border-t border-border">
          最終更新日：2026年5月9日
        </p>
      </div>
    </div>
  );
}
