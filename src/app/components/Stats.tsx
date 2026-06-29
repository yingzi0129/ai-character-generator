"use client";

export default function Stats() {
  return (
    <section className="bg-white py-12 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-[#888888] uppercase tracking-wider mb-10">
          Join 10,000+ creators who already generated 500,000+ characters
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto">
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-[#D99B52]">1M+</span>
            <span className="text-sm text-[#888888] uppercase">Users</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-[#439A86]">100%</span>
            <span className="text-sm text-[#888888] uppercase">Consistent</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-[#E76F51]">0</span>
            <span className="text-sm text-[#888888] uppercase">Prompt Hassle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-[#2A9D8F]">1/10</span>
            <span className="text-sm text-[#888888] uppercase">Production Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
