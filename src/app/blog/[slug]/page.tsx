import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: "how-to-create-consistent-ai-characters" },
    { slug: "mastering-style-transfer" },
    { slug: "10-prompt-engineering-tips" },
  ];
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Article Header */}
      <article className="max-w-[800px] mx-auto px-6 pt-16 pb-20">
        {/* Breadcrumb */}
        <div className="text-xs font-semibold uppercase tracking-wider text-[#059669] mb-4">
          <Link href="/blog" className="hover:underline">CHARACTER DESIGN</Link>
          <span className="mx-2">—</span>
          <span>Jan 24, 2024</span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-[42px] font-bold text-[#111111] leading-tight mb-6">
          How to Create Consistent AI Characters: A Complete Guide
        </h1>

        {/* Author */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E5E0D5]" />
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">Alex Rivera</p>
              <p className="text-xs text-[#6B7280]">Lead AI Researcher</p>
            </div>
          </div>
          <span className="text-xs text-[#6B7280]">4 min read</span>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#FFFDF9] border border-[#FDE68A] rounded p-6 mb-10">
          <h3 className="text-sm font-bold mb-3">In This Article</h3>
          <ul className="space-y-2 text-sm text-[#374151]">
            <li>1. Why consistency matters</li>
            <li>2. Choosing the right prompts</li>
            <li>3. Using Face Lock technology</li>
            <li>4. Style transfer techniques</li>
            <li>5. Best practices for batch generation</li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base text-[#374151] leading-relaxed mb-6">
            Creating consistent AI characters is one of the biggest challenges in generative AI. 
            Whether you&apos;re building a visual novel, designing game assets, or creating marketing materials, 
            maintaining character consistency across multiple scenes is crucial for professional results.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111111] mt-12 mb-4">
            Why Consistency Matters
          </h2>
          <p className="text-base text-[#374151] leading-relaxed mb-6">
            Inconsistent characters break immersion. When a character&apos;s face changes between scenes, 
            readers and players notice immediately. This is especially critical for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#374151] mb-6">
            <li>Visual novels and comics</li>
            <li>Game character assets</li>
            <li>Brand mascots</li>
            <li>Educational content</li>
          </ul>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#F59E0B] pl-5 my-8 italic text-lg text-[#4B5563]">
            &ldquo;The moment your character&apos;s nose changes shape or eye color shifts, 
            you&apos;ve lost the trust of your audience.&rdquo;
          </blockquote>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111111] mt-12 mb-4">
            Choosing the Right Prompts
          </h2>
          <p className="text-base text-[#374151] leading-relaxed mb-6">
            The foundation of character consistency starts with detailed, structured prompts. 
            Include specific details about:
          </p>

          {/* Dark Info Box */}
          <div className="bg-[#0F172A] rounded p-5 my-6">
            <p className="text-sm text-[#E2E8F0] font-mono leading-relaxed">
              Prompt: A young woman with shoulder-length auburn hair, 
              green eyes, freckles across nose and cheeks, wearing a leather jacket, 
              standing in a cyberpunk city street, neon lights reflecting in eyes
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111111] mt-12 mb-4">
            Using Face Lock Technology
          </h2>
          <p className="text-base text-[#374151] leading-relaxed mb-6">
            Our Face Lock system captures 128 unique facial features from your base character 
            and maintains them across all generations. Here&apos;s how to use it effectively:
          </p>

          {/* CTA Banner */}
          <div className="bg-[#FEF3C7] rounded p-6 my-8 text-center">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Ready to batch your character?</h3>
            <p className="text-sm text-[#666666] mb-4">Try Face Lock and generate unlimited consistent scenes</p>
            <Link href="/" className="inline-block bg-[#78350F] text-white px-6 py-2.5 rounded text-sm font-semibold">
              Try Face Lock
            </Link>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#111111] mt-12 mb-4">
            Best Practices for Batch Generation
          </h2>
          <p className="text-base text-[#374151] leading-relaxed mb-6">
            When generating multiple scenes for the same character, follow these guidelines:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-[#374151] mb-6">
            <li>Start with a high-quality base character</li>
            <li>Use consistent lighting descriptions</li>
            <li>Maintain the same art style keywords</li>
            <li>Test with small batches before large runs</li>
            <li>Use the seed feature for fine-tuning</li>
          </ol>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mt-10 pt-6 border-t border-[#E5E0D5]">
          <span className="text-sm text-[#2563EB]">#AI</span>
          <span className="text-sm text-[#2563EB]">#Character</span>
          <span className="text-sm text-[#2563EB]">#Design</span>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-center text-[#1A1A1A] mb-10">
          Continue Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="cursor-pointer">
              <div className="aspect-video bg-[#F7F3EB] rounded mb-3 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <span className="text-[10px] uppercase text-[#9CA3AF] tracking-wider">IMAGE GENERATION</span>
              <h3 className="text-base font-semibold text-[#1A1A1A] mt-1 leading-snug">
                {i === 1 ? "Mastering Style Transfer for Characters" : 
                 i === 2 ? "10 Prompt Engineering Tips" : 
                 "Building Character Bibles with AI"}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
