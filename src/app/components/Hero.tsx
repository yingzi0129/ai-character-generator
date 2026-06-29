"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FDF8F2] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-[56px] font-bold leading-[1.15] text-[#1A1A1A] mb-6">
              Create Characters That Stay{" "}
              <em className="italic text-[#FF6B53]">Consistent</em>{" "}
              Across Every Scene
            </h1>
            <p className="text-lg text-[#666666] leading-relaxed mb-8 max-w-[520px]">
              The only AI character generator that maintains perfect consistency
              in face, style, and personality across unlimited images and
              scenarios.
            </p>
            <div className="flex gap-4 mb-4">
              <Link
                href="#"
                className="bg-[#FF6B53] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#E55A4F] transition-colors text-lg"
              >
                Try for free
              </Link>
              <Link
                href="#"
                className="bg-transparent text-[#1A1A1A] px-8 py-3.5 rounded-md font-semibold border border-[#E0D7CD] hover:bg-[#f5f5f5] transition-colors text-lg"
              >
                View Examples
              </Link>
            </div>
            <p className="text-base text-[#888888]">
              No credit card required. Start generating in seconds.
            </p>
          </div>

          {/* Right Mockup */}
          <div className="relative">
            <div className="bg-[#151924] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1E2230]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs text-[#807660] font-medium ml-2">
                  Character Studio
                </span>
              </div>

              {/* Window Body */}
              <div className="p-6">
                <div className="flex items-center justify-center gap-5 mb-5">
                  {/* Character Box */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFE4D6 0%, #FFD4C0 100%)",
                      }}
                    >
                      <svg
                        viewBox="0 0 80 80"
                        width="60"
                        height="60"
                      >
                        <circle cx="40" cy="28" r="16" fill="#E8A87C" />
                        <path
                          d="M20 68c0-12 9-20 20-20s20 8 20 20"
                          fill="#E8A87C"
                        />
                        <path
                          d="M32 26c2-2 4-2 6 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M42 26c2-2 4-2 6 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M36 34c2 2 6 2 8 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-[#807660]">Original</span>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="#FF6B5F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Character Box */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #E8F4FD 0%, #D6EAF8 100%)",
                      }}
                    >
                      <svg
                        viewBox="0 0 80 80"
                        width="60"
                        height="60"
                      >
                        <circle cx="40" cy="28" r="16" fill="#E8A87C" />
                        <path
                          d="M20 68c0-12 9-20 20-20s20 8 20 20"
                          fill="#E8A87C"
                        />
                        <path
                          d="M32 26c2-2 4-2 6 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M42 26c2-2 4-2 6 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M36 34c2 2 6 2 8 0"
                          stroke="#C98B5E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-[#807660]">New Scene</span>
                  </div>
                </div>

                {/* Prompt Box */}
                <div className="bg-[#1E2230] rounded-lg px-4 py-3 flex gap-2">
                  <span className="text-xs text-[#FF6B5F] font-semibold">
                    Prompt:
                  </span>
                  <span className="text-xs text-[#807660]">
                    A brave warrior princess standing in a...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
