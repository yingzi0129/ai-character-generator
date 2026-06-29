"use client";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        '"I used to spend days redrawing characters from different angles. Now I generate them in seconds and they actually look like the same person."',
      author: "Sarah Chen",
      role: "Comic Artist",
    },
    {
      quote:
        '"The face consistency is unreal. I created a character for my novel and generated 50 different scenes without a single mismatch."',
      author: "Marcus Johnson",
      role: "Author",
    },
    {
      quote:
        '"Game devs, this is the tool you\'ve been waiting for. NPCs that look the same across every cutscene and promo art."',
      author: "Alex Rivera",
      role: "Game Developer",
    },
  ];

  return (
    <section className="bg-[#1E2230] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-center text-white mb-12">
          Creating Consistent Characters Shouldn't Take Weeks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#151924] rounded-2xl p-8 text-white"
            >
              <div className="text-5xl text-[#FF6B5F] leading-none mb-4 font-serif">
                &ldquo;
              </div>
              <p className="text-base leading-relaxed mb-6 text-white/90">
                {t.quote}
              </p>
              <span className="text-base text-white/50">
                — {t.author}, {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
