import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "運営者情報｜Abroad Pass",
  description:
    "Abroad Passの運営者プロフィール。留学経験者として、ワーホリ・留学エージェントの本音比較をお届けします。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <SectionHeading tag="h1" sub="Abroad Pass 運営者">
        運営者プロフィール
      </SectionHeading>

      <div className="bg-soft rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
            ✈
          </div>
          <div>
            <p className="font-bold text-lg">Takaya</p>
            <p className="text-sm text-muted">Abroad Pass 運営者</p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            はじめまして、Takayaです。
            このサイトは、私自身の留学経験をもとに「失敗しない留学エージェント選び」を
            テーマに運営しています。
          </p>
          <p>
            留学前の私は、ネットで情報を集めるほど「どのエージェントも同じに見える」状態でした。
            結局、実際に複数社の無料相談を受けてみて初めて、サービスの違いが分かりました。
          </p>
          <p>
            このサイトでは、その経験をベースに、各エージェントの特徴を公平に比較しています。
            読者のみなさんが、自分に合ったエージェントを見つけるお手伝いができれば嬉しいです。
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">このサイトの方針</h2>
        <ul className="space-y-3">
          {[
            "一次情報（実体験）を重視します",
            "メリットだけでなくデメリットも正直に書きます",
            "特定のエージェントを無理に押し売りしません",
            "読者の状況に合わせたおすすめを心がけます",
            "広告掲載がある場合は明示します（ステマ規制対応）",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <span className="text-primary font-bold mt-0.5">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <CtaButton href="/best-3" variant="accent">
          おすすめエージェント5選を見る →
        </CtaButton>
      </div>
    </div>
  );
}
