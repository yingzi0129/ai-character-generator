"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1E24] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FF6B53" />
                <path d="M8 20c0-4 3-8 8-8s8 4 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="14" r="3" fill="white" />
              </svg>
              <span className="font-[family-name:var(--font-playfair)] font-bold text-xl text-[#FFCD6B]">
                AI Character Generator
              </span>
            </Link>
            <p className="text-base text-[#A0AAB2] leading-relaxed max-w-[280px]">
              The most advanced AI character generator for creators who demand consistency.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/examples" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Examples
              </Link>
              <Link href="/blog" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                API Reference
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Community
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Changelog
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-base text-[#A0AAB2] hover:text-white transition-colors">
                Press
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2D3748] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#718096]">
            © 2024 AI Character Generator. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-[#718096] hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#718096] hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
