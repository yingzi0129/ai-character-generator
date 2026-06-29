"use client";

import Link from "next/link";

export default function UseCases() {
  const cases = [
    {
      tag: "Consistent Poses",
      title: "Same Character, Any Pose",
      description:
        "Generate your character in action poses, portraits, or full-body shots without losing identity.",
      link: "Try Poses →",
    },
    {
      tag: "Style Transfer",
      title: "Any Style, Same Face",
      description:
        "Apply anime, realistic, watercolor, or 3D styles while keeping the character recognizable.",
      link: "Try Styles →",
    },
    {
      tag: "Expressions",
      title: "Emotional Range",
      description:
        "From joy to anger, create the full spectrum of expressions for your character.",
      link: "Try Expressions →",
    },
    {
      tag: "Scenes",
      title: "Unlimited Scenarios",
      description:
        "Place your character in any environment — from fantasy worlds to modern cities.",
      link: "Try Scenes →",
    },
  ];

  return (
    <section className="bg-[#1A1E24] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="p-6">
              <span className="text-sm font-semibold text-[#F5B84B] uppercase tracking-wider mb-3 block">
                {c.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                {c.description}
              </p>
              <Link
                href="#"
                className="text-base font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors"
              >
                {c.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
