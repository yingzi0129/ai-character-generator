"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function AuthButton({ mobile = false }: { mobile?: boolean }) {
  const [user, setUser] = useState<{
    email: string;
    name: string;
    avatar: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "same-origin" })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const baseClass = mobile
    ? "bg-[#FF6B53] text-white px-5 py-2.5 rounded-md text-base font-semibold text-center"
    : "bg-[#FF6B53] text-white px-5 py-2.5 rounded-md text-base font-semibold hover:bg-[#E55A4F] transition-colors";

  if (loading) {
    return <div className={`${baseClass} opacity-60`}>Loading...</div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
        ) : null}
        <span className="text-sm font-medium text-[#1A1A1A] hidden lg:inline">{user.name || user.email}</span>
        <button
          onClick={() => {
            fetch("/api/auth/logout", { credentials: "same-origin" }).then(() => {
              window.location.href = "/";
            });
          }}
          className="bg-[#FF6B53] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#E55A4F] transition-colors"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <a href="/api/auth/google" className={baseClass}>
      Log in
    </a>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FDF8F2]/90 backdrop-blur-md border-b border-[#F0EAE1]">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#FF6B5F"/>
            <path d="M8 20c0-4 3-8 8-8s8 4 8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="14" r="3" fill="white"/>
          </svg>
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl text-[#1A1A1A]">
            AI Character Generator
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/examples" className="text-base font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Examples
          </Link>
          <Link href="/pricing" className="text-base font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-base font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-base font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
            About
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <AuthButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
      <div className="md:hidden bg-[#FDF8F2] border-t border-[#F0EAE1] px-6 py-4">
        <div className="flex flex-col gap-4">
          <Link href="/examples" className="text-base font-medium text-[#666666]">Examples</Link>
          <Link href="/pricing" className="text-base font-medium text-[#666666]">Pricing</Link>
          <Link href="/blog" className="text-base font-medium text-[#666666]">Blog</Link>
          <Link href="/about" className="text-base font-medium text-[#666666]">About</Link>
          <hr className="border-[#F0EAE1]" />
          <AuthButton mobile />
        </div>
      </div>
      )}
    </nav>
  );
}
