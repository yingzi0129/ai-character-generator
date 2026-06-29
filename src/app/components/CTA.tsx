"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#FF6B53] py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
          Stop Redrawing. Start Creating.
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-[680px] mx-auto">
          Join thousands of creators who are already saving hours with consistent AI characters.
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-[#FF6B53] px-8 py-4 rounded-md font-semibold text-lg hover:scale-105 transition-transform"
        >
          Generate Your Character →
        </Link>
      </div>
    </section>
  );
}
