"use client";

import { User, Zap, Shield, Image } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Source Character",
    description:
      "Upload or generate your base character model to use across all scenes and scenarios.",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
  },
  {
    icon: Zap,
    title: "Ultra Fast",
    description:
      "Get variants generated in under 5 seconds with our next-gen generation pipeline.",
    iconBg: "#DBEAFE",
    iconColor: "#3B82F6",
    badge: "NEW",
  },
  {
    icon: Shield,
    title: "Face Lock",
    description:
      "Our proprietary Face Lock technology ensures perfect facial consistency across all generations.",
    iconBg: "#D1FAE5",
    iconColor: "#10B981",
  },
  {
    icon: Image,
    title: "Style Transfer",
    description:
      "Apply any artistic style to your character while maintaining core facial features and proportions.",
    iconBg: "#FCE7F3",
    iconColor: "#EC4899",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-center text-[#1A1A1A] mb-12">
          The Only AI Character Generator{" "}
          <em className="italic text-[#FF6B53]">Built for Consistency</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-[#F0EAE1] rounded-lg p-6 relative hover:shadow-md transition-shadow"
            >
              {f.badge && (
                <span className="absolute top-4 right-4 bg-[#10B981] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {f.badge}
                </span>
              )}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: f.iconBg }}
              >
                <f.icon size={24} color={f.iconColor} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {f.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
