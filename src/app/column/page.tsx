import type { Metadata } from "next";
import ColumnClient from "./ColumnClient";

export const metadata: Metadata = {
  title: "コラム一覧 | Abroad Pass",
  description:
    "ワーホリ・留学に関するお役立ちコラム一覧。費用・英語力・エージェント選び・帰国後のキャリアまで、留学準備に役立つ情報をまとめています。",
};

export default function ColumnPage() {
  return <ColumnClient />;
}
