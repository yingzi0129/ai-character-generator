"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

const posts = [
  {
    id: 1,
    title: "How to Create Consistent AI Characters: A Complete Guide",
    excerpt: "Learn the fundamentals of creating characters that maintain perfect consistency across multiple generations and scenes.",
    category: "Character Design",
    date: "Jan 24, 2024",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 2,
    title: "10 Tips for Better AI Character Prompts",
    excerpt: "Master the art of prompt writing to get exactly the character you envision every time.",
    category: "Tips",
    date: "Jan 20, 2024",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Face Lock Technology Explained",
    excerpt: "Deep dive into how our proprietary Face Lock system maintains facial consistency with 99.7% accuracy.",
    category: "Technology",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Building a Visual Novel with AI Characters",
    excerpt: "How indie developer Sarah Chen used our tool to create 50+ consistent characters for her visual novel.",
    category: "Case Study",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Style Transfer: From Realistic to Anime",
    excerpt: "Explore how to apply different artistic styles while keeping your character's core identity intact.",
    category: "Tutorial",
    date: "Jan 5, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of AI in Game Development",
    excerpt: "How AI character generation is revolutionizing NPC creation and game asset production.",
    category: "Industry",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    featured: false,
  },
];

const tags = ["AI", "Character Design", "Tutorial", "Tips", "Technology", "Case Study", "Industry", "Game Dev"];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#F9F5EB]">
      <Navbar />
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-2">
          Character Creation Tips & Guides
        </h1>
        <p className="text-[#707070] text-lg">
          Learn how to create consistent, high-quality AI characters
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-[1200px] mx-auto px-6 pb-12">
          <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-[#F7F3EB] min-h-[320px] flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <span className="bg-[#E2A53B] text-black text-xs font-bold uppercase px-2.5 py-1 self-start mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-[#666666] text-base leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-[#999999]">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Blog Grid */}
          <div className="lg:w-3/4">
            <div className="flex gap-4 border-b border-[#E5E0D5] pb-3 mb-8">
              <span className="text-sm uppercase font-bold text-[#1A1A1A]">All Posts</span>
              <span className="text-sm uppercase text-[#777777]">Tutorials</span>
              <span className="text-sm uppercase text-[#777777]">Case Studies</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="flex flex-col">
                  <div className="aspect-[3/4] bg-white border border-[#E5E0D5] mb-4 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                  <span className="bg-[#E2A53B] text-black text-xs font-bold uppercase px-2 py-0.5 self-start mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-base text-[#666666] leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-[#999999] border-t border-[#E5E0D5] pt-3">
                    <span>{post.date}</span>
                    <span>→</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Tags */}
            <div>
              <h3 className="text-base font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs border border-[#CCCCCC] px-2.5 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-[#222831] text-white p-6 rounded">
              <h3 className="text-lg font-bold mb-2">Laboratory Insights</h3>
              <p className="text-sm text-white/70 mb-4">Get weekly tips on character creation</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 text-sm text-black mb-3 rounded"
              />
              <button className="w-full bg-[#D97706] text-black text-sm font-bold py-2 rounded">
                SUBSCRIBE
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
