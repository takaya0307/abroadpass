import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/70 text-sm">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-lg mb-2">✈ Abroad Pass</p>
            <p className="text-white/50 text-xs leading-relaxed">
              費用・サポート・口コミで徹底比較する
              <br />
              留学エージェント情報サイト
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold text-white mb-3">コンテンツ</p>
            <ul className="space-y-2">
              <li>
                <Link href="/best-3" className="hover:text-white transition-colors">
                  おすすめエージェント5選
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-bold text-white mb-3">サイト情報</p>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-white transition-colors">
                  広告掲載について（PR表記）
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Abroad Pass All rights reserved.
        </div>
      </div>
    </footer>
  );
}
