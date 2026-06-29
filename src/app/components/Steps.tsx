"use client";

export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "Write Prompt",
      description:
        "Describe your character's appearance, personality, and style in natural language.",
    },
    {
      number: "2",
      title: "Generate Base",
      description:
        "Our AI creates your base character with perfect facial structure and proportions.",
    },
    {
      number: "3",
      title: "Create Scenes",
      description:
        "Generate unlimited scenes, poses, and expressions while keeping the same face.",
    },
  ];

  return (
    <section className="bg-[#FDF8F2] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-center text-[#1A1A1A] mb-12">
          From Description to Character in 3 Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[900px] mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 bg-[#1A1A1A] text-white rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                {s.number}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {s.title}
              </h3>
              <p className="text-base text-[#666666] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
