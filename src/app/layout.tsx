import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://abroadpass.jp"),
  title: {
    default: "Abroad Pass｜ワーホリ・留学エージェント比較サイト",
    template: "%s｜Abroad Pass",
  },
  description:
    "留学経験者が本音で比較。ワーホリ・留学エージェントのおすすめランキング、費用シミュレーション、体験談を掲載。30歳までに行きたい社会人・大学生を全力サポート。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://abroadpass.jp",
    siteName: "Abroad Pass",
    title: "Abroad Pass｜ワーホリ・留学エージェント比較サイト",
    description:
      "留学経験者が本音で比較。ワーホリ・留学エージェントのおすすめランキング、費用、体験談を掲載。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abroad Pass｜ワーホリ・留学エージェント比較サイト",
    description:
      "留学経験者が本音で比較。ワーホリ・留学エージェントのおすすめランキング。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://abroadpass.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
