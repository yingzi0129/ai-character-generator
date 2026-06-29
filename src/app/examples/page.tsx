"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

const categories = ["All", "Fantasy", "Realistic", "Anime", "Cartoon", "3D", "Watercolor"];

const examples = [
  {
    id: 1,
    title: "Elena the Warrior Princess",
    description: "A brave warrior princess with flowing red hair and emerald armor, generated across multiple battle scenes.",
    category: "Fantasy",
    style: "3D",
  },
  {
    id: 2,
    title: "Detective Morgan",
    description: "A noir-style detective character maintaining consistent facial features across different investigation scenes.",
    category: "Realistic",
    style: "Realistic",
  },
  {
    id: 3,
    title: "Kaito the Cyber Ninja",
    description: "An anime-style cyberpunk ninja with glowing blue accents, shown in various action poses.",
    category: "Anime",
    style: "Anime",
  },
  {
    id: 4,
    title: "Professor Bloom",
    description: "A friendly cartoon professor character used in educational content and children's books.",
    category: "Cartoon",
    style: "Cartoon",
  },
  {
    id: 5,
    title: "The Forest Guardian",
    description: "A mystical forest guardian rendered in beautiful watercolor style across all four seasons.",
    category: "Watercolor",
    style: "Watercolor",
  },
  {
    id: 6,
    title: "Space Explorer Ava",
    description: "A futuristic space explorer character in detailed 3D render style, visiting different planets.",
    category: "3D",
    style: "3D",
  },
  {
    id: 7,
    title: "Medieval Knight Sir Roland",
    description: "A noble knight character with consistent armor and facial features across various medieval settings.",
    category: "Fantasy",
    style: "Realistic",
  },
  {
    id: 8,
    title: "Mia the Magical Girl",
    description: "A magical girl anime character with transformation sequences and consistent costume details.",
    category: "Anime",
    style: "Anime",
  },
];

export default function ExamplesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExamples = activeCategory === "All" 
    ? examples 
    : examples.filter(e => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FBF5ED]">
      <Navbar />
      {/* Header */}
      <section className="text-center pt-16 pb-8 px-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
          Character Examples Created by Our Users
        </h1>
        <p className="text-[#666666] text-xl max-w-[680px] mx-auto">
          See how creators are using our AI to maintain perfect character consistency
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1200px] mx-auto px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-base font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#5C4033] text-white"
                  : "bg-transparent text-[#666666] hover:bg-[#EEDEC9] hover:text-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Examples Grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-xl border border-[#EEDEC9] p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/5] bg-[#F7F3EB] rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#999999]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[11px] px-2 py-1 rounded backdrop-blur-sm">
                  {example.style}
                </span>
              </div>
              <span className="text-sm uppercase tracking-wider text-[#999999] mb-1 block">
                {example.category}
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {example.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed line-clamp-2 mb-4">
                {example.description}
              </p>
              <button className="w-full py-3 border border-[#E2D5C5] rounded-md text-[#5C4033] text-base font-semibold hover:bg-[#5C4033] hover:text-white hover:border-[#5C4033] transition-colors">
                View Character
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
