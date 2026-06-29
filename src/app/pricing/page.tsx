"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying out",
    features: [
      "10 generations/month",
      "Basic face consistency",
      "Standard resolution",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
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
    cta: "Get Started",
    highlighted: false,
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
      "Commercial license",
    ],
    cta: "Choose",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    description: "For teams and studios",
    features: [
      "Everything in Pro",
      "5 team members",
      "API access",
      "Dedicated support",
      "Custom models",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Generations/month", free: "10", starter: "100", pro: "Unlimited", team: "Unlimited" },
  { name: "Face Consistency", free: "Basic", starter: "Advanced", pro: "Premium", team: "Premium" },
  { name: "Resolution", free: "Standard", starter: "HD", pro: "4K", team: "4K" },
  { name: "Commercial License", free: "—", starter: "—", pro: "✓", team: "✓" },
  { name: "API Access", free: "—", starter: "—", pro: "—", team: "✓" },
  { name: "Team Members", free: "1", starter: "1", pro: "1", team: "5" },
  { name: "Support", free: "Community", starter: "Email", pro: "Priority", team: "Dedicated" },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-[#F7F3EB]">
      <Navbar />
      {/* Header */}
      <section className="text-center pt-16 pb-12 px-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
          Simple Pricing for Every Creator
        </h1>
        <p className="text-[#666666] text-xl mb-6 max-w-[680px] mx-auto">
          Start free, upgrade when you need more power
        </p>
        <div className="inline-flex items-center gap-2 bg-[#F3E8D6] text-[#D9822B] px-5 py-2.5 rounded-full text-base font-semibold">
          Save 20% with yearly billing
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#14171A] text-white relative overflow-hidden"
                  : "bg-white border border-[#E8ECEF]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-[#FFC107] text-[#14171A] text-[10px] font-bold px-8 py-1 transform rotate-45 translate-x-6 translate-y-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[#1A1A1A]"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-base ml-1 ${plan.highlighted ? "text-white/70" : "text-[#666666]"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-base mb-6 ${plan.highlighted ? "text-white/70" : "text-[#666666]"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-base">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-white/90" : "text-[#343839]"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`block text-center py-3.5 rounded-lg font-semibold transition-colors text-base ${
                  plan.highlighted
                    ? "bg-[#FFB938] text-[#14171A] hover:bg-[#FFA726]"
                    : "bg-white border border-[#E8ECEF] text-[#1A1A1A] hover:bg-[#F7F3EB]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center text-[#1A1A1A] mb-10">
          Full Feature Comparison
        </h2>
        <div className="bg-white rounded-xl overflow-hidden border border-[#E8ECEF]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F3F5F7]">
                <th className="text-left py-4 px-6 text-sm font-semibold text-[#6C7275]">Feature</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-[#6C7275]">Free</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-[#6C7275]">Starter</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-[#6C7275]">Pro</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-[#6C7275]">Team</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, i) => (
                <tr key={i} className="border-t border-[#E8ECEF]">
                  <td className="py-4 px-6 text-sm font-medium text-[#1A1A1A]">{feature.name}</td>
                  <td className="text-center py-4 px-4 text-sm text-[#343839]">{feature.free}</td>
                  <td className="text-center py-4 px-4 text-sm text-[#343839]">{feature.starter}</td>
                  <td className="text-center py-4 px-4 text-sm text-[#343839]">{feature.pro}</td>
                  <td className="text-center py-4 px-4 text-sm text-[#343839]">{feature.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="bg-[#14171A] rounded-2xl p-16 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white mb-4">
            Need a Custom Plan?
          </h2>
          <p className="text-[#E8ECEF] text-lg mb-8 max-w-[680px] mx-auto">
            Contact us for enterprise pricing with custom models, dedicated infrastructure, and SLA guarantees.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#FFB938] text-[#14171A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFA726] transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
