"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

const stats = [
  { number: "10,000+", label: "characters" },
  { number: "500,000+", label: "custom text" },
  { number: "50+", label: "templates" },
  { number: "4.9/5", label: "review" },
];

const principles = [
  {
    title: "Creator First",
    description: "Every feature we build starts with the creator's workflow in mind. Your time is valuable.",
  },
  {
    title: "Quality Over Speed",
    description: "We'd rather generate one perfect character than ten mediocre ones. Precision is our priority.",
  },
  {
    title: "Ethical AI",
    description: "We believe in responsible AI usage. No deepfakes, no unauthorized likenesses, no exceptions.",
  },
  {
    title: "Open Innovation",
    description: "We share our research and learn from the community. Better tools come from collaboration.",
  },
];

const timeline = [
  { date: "2023", title: "Project Aphrodite", description: "Started research on facial consistency algorithms" },
  { date: "2024", title: "Official Launch", description: "Released the first version of AI Character Generator" },
  { date: "2024", title: "Face Lock 2.0", description: "Achieved 99.7% facial consistency accuracy" },
  { date: "2025", title: "Team Expansion", description: "Grew to 20+ team members across 3 continents" },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO",
    bio: "Former AI researcher at Stanford. Passionate about democratizing creative tools.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead AI Researcher",
    bio: "PhD in Computer Vision. Built the core Face Lock technology from scratch.",
  },
  {
    name: "Alex Rivera",
    role: "Head of Product",
    bio: "10+ years in product design. Believes great tools should feel invisible.",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    bio: "Award-winning illustrator. Ensures our AI understands artistic nuance.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7EFE5]">
      <Navbar />
      {/* Hero */}
      <section className="text-center pt-16 pb-8 px-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
          Built by Creators,{" "}
          <span className="text-[#FFB830]">for Creators</span>
        </h1>
        <p className="text-[#666666] text-xl max-w-[680px] mx-auto">
          We're a team of artists, engineers, and dreamers building the future of character creation
        </p>
      </section>

      {/* Hero Image */}
      <section className="max-w-[1000px] mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden shadow-xl bg-[#252834] aspect-video flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#121620] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#FFB830] text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#FFB830] text-sm font-bold uppercase tracking-wider">
              MISSION
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mt-3 mb-6">
              Taming the Chaos of Generative AI
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed mb-4">
              When we first started using AI image generators, we were amazed by the possibilities but frustrated by the inconsistency. Characters would change faces, styles would drift, and maintaining continuity across a project was nearly impossible.
            </p>
            <p className="text-[#666666] text-lg leading-relaxed mb-4">
              We built AI Character Generator to solve this problem. Our goal is simple: give creators the power to generate unlimited scenes while keeping their characters perfectly consistent.
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">
              Today, thousands of creators use our tool for visual novels, games, marketing, and more. We're just getting started.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden bg-[#252834] aspect-square flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center text-[#1A1A1A] mb-10">
          Our Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-8 h-8 bg-[#FFF9EE] rounded-md flex items-center justify-center text-[#FFB830] mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {principle.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center text-[#1A1A1A] mb-10">
          Our Journey
        </h2>
        <div className="max-w-[600px] mx-auto relative pl-8 border-l-2 border-[#FFB830]">
          {timeline.map((item, i) => (
            <div key={i} className="relative mb-10">
              <div className="absolute -left-[37px] top-1 w-3 h-3 bg-[#FFB830] rounded-full border-3 border-[#F7EFE5]" />
              <div className="text-[#FFB830] text-base font-semibold mb-1">
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                {item.title}
              </h3>
              <p className="text-base text-[#666666]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#121620] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-white text-base font-bold uppercase tracking-wider mb-2">
            THE MINDS BEHIND THE LAB
          </h2>
          <p className="text-[#A0A5B5] text-base mb-12">
            Meet the team building the future of character creation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name}>
                <div className="aspect-square bg-[#1E2230] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FFB830] text-base font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-[#A0A5B5] text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-[#FFB830] rounded-xl p-12 text-center">
          <h2 className="text-[#1A1A1A] text-4xl font-bold mb-3">
            Join our team — We're hiring
          </h2>
          <p className="text-[#1A1A1A]/80 text-base max-w-[500px] mx-auto mb-6">
            We're always looking for talented people who are passionate about AI and creativity. Check out our open positions.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#333333] transition-colors"
          >
            View Openings
          </Link>
        </div>
      </section>
    </div>
  );
}
