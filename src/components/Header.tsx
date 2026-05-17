"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/best-3", label: "おすすめ5選" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary-dark">
          <span className="text-2xl">✈</span>
          <span className="hidden sm:inline">Abroad Pass</span>
          <span className="sm:hidden">Abroad Pass</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/best-3#cost"
            className="text-sm font-bold bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full transition-colors"
          >
            無料で比較する
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-muted hover:text-primary border-b border-border/50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/best-3#cost"
            className="block mt-3 text-center text-sm font-bold bg-accent text-white px-4 py-3 rounded-full"
            onClick={() => setOpen(false)}
          >
            無料で比較する
          </Link>
        </nav>
      )}
    </header>
  );
}
