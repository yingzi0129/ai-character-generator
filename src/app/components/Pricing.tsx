"use client";

import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying out",
    features: [
      "10 generations/month",
      "Basic face lock",
      "Standard resolution",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    description: "For hobbyists starting out",
    features: [
      "100 generations/month",
      "Advanced face lock",
      "HD resolution",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For professional creators",
    features: [
      "Unlimited generations",
      "Premium face lock",
      "4K resolution",
      "Priority support",
      "API access",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    description: "For teams and studios",
    features: [
      "Everything in Pro",
      "5 team members",
      "Shared character library",
      "Dedicated support",
      "Custom model training",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#FDF8F2] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center text-[#1A1A1A] mb-12">
          Flexible Plans for Every Creator
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg p-6 flex flex-col relative transition-all hover:shadow-lg ${
                p.featured
                  ? "border-2 border-[#704214] scale-[1.05] shadow-lg"
                  : "border border-[#EAE2D8]"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#704214] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
                {p.name}
              </h3>
              <div className="text-3xl font-bold text-[#1A1A1A] mb-1">
                {p.price}
                <span className="text-sm font-normal text-[#888888]">
                  {p.period}
                </span>
              </div>
              <p className="text-sm text-[#666666] mb-6">{p.description}</p>

              <ul className="flex-1 space-y-3 mb-6">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className="text-sm text-[#666666] py-2 border-b border-[#F0EAE1] last:border-0"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  p.featured
                    ? "bg-[#704214] text-white hover:bg-[#5a3510]"
                    : "border border-[#EAE2D8] text-[#1A1A1A] hover:bg-[#FDF8F2]"
                }`}
              >
                {p.featured ? "Choose" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
