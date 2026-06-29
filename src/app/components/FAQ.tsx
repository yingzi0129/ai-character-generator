"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the Face Lock technology work?",
    answer:
      "Our Face Lock technology uses a proprietary facial embedding system that captures 128 unique facial features from your base character. When generating new scenes, it maintains these features with 99.7% accuracy, ensuring your character looks identical across all images.",
  },
  {
    question: "Can I use the generated characters commercially?",
    answer:
      "Yes! All paid plans include full commercial usage rights. You own the characters you create and can use them in books, games, marketing materials, or any commercial project.",
  },
  {
    question: "What art styles are supported?",
    answer:
      "We support realistic, anime, cartoon, watercolor, oil painting, 3D render, pixel art, and many more. You can also describe custom styles in your prompt.",
  },
  {
    question: "How long does it take to generate a character?",
    answer:
      "Most characters are generated in 3-5 seconds. Complex scenes with multiple characters or detailed backgrounds may take up to 15 seconds.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F8F6F4] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-center text-[#1A1A1A] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-[800px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#EFEBE6] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-semibold text-base text-[#1A1A1A]">
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === i ? "max-h-[300px] pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-base text-[#555555] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
