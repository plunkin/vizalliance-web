/* ============================================================
   BLOG PAGE — Cyber Magenta Design
   Sections: Hero → Featured Post → Category Filter → Article Grid
   ============================================================ */
import { Link } from "wouter";
import { images } from "@/lib/images";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = ["All", "AI & Marketing", "SEO", "AEO", "Analytics", "Content Strategy", "Industry Insights"];

// Added 'slug' to each post so they have actual URL destinations
const blogPosts = [
  {
    slug: "complete-guide-to-aeo-2025",
    title: "The Complete Guide to Answer Engine Optimization (AEO) in 2025",
    excerpt: "As AI reshapes search, traditional SEO alone won't cut it. Learn how AEO positions your brand in AI-generated answers, featured snippets, and conversational search results — and why it matters now more than ever.",
    category: "AEO",
    date: "Feb 5, 2026",
    readTime: "12 min read",
    featured: true,
    image: images.blogHeader || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    slug: "predictive-analytics-digital-advertising",
    title: "How Predictive Analytics Is Transforming Digital Advertising",
    excerpt: "Discover how machine learning models can forecast campaign performance, optimize ad spend in real time, and deliver ROI that traditional methods simply can't match.",
    category: "Analytics",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    slug: "ai-powered-seo-algorithm-update",
    title: "AI-Powered SEO: What Google's Latest Algorithm Update Means",
    excerpt: "Google's newest core update prioritizes AI-generated content quality signals. Here's what changed, what it means for your strategy, and how to adapt before your competitors do.",
    category: "SEO",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    slug: "content-automation-brand-voice",
    title: "Content Automation Without Losing Your Brand Voice",
    excerpt: "Scaling content production with AI doesn't mean sacrificing authenticity. This framework shows you how to train AI systems to write in your brand's unique voice.",
    category: "Content Strategy",
    date: "Jan 12, 2026",
    readTime: "9 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=400&fit=crop",
  },
  {
    slug: "roi-of-ai-marketing",
    title: "The ROI of AI Marketing: Real Numbers From Real Campaigns",
    excerpt: "We analyzed 200+ AI-powered campaigns across 15 industries. Here are the actual performance benchmarks, cost savings, and revenue gains — backed by data.",
    category: "AI & Marketing",
    date: "Jan 5, 2026",
    readTime: "11 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
  },
  {
    slug: "ai-marketing-trends-2025",
    title: "5 AI Marketing Trends That Will Define 2026",
    excerpt: "From autonomous campaign management to hyper-personalization at scale, these are the AI marketing trends that forward-thinking businesses need to prepare for right now.",
    category: "Industry Insights",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts = blogPosts.filter((p) => {
    if (p.featured) return false;
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.02_260)] to-[oklch(0.12_0.02_260)]" />
        <div className="container relative z-10 px-6">
          <FadeIn>
            <p className="text-sm font-medium text-fuchsia-400 mb-4 tracking-wide uppercase font-mono">
              Blog & Resources
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl font-display">
              Insights at the Intersection of <span className="text-fuchsia-400">AI</span> &amp; <span className="text-purple-400">Marketing</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-[oklch(0.60_0.02_260)] max-w-2xl">
              Actionable strategies, industry analysis, and thought leadership to help you stay ahead in the rapidly evolving world of autonomous revenue.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 lg:py-16">
          <div className="container px-6">
            <FadeIn>
              <div className="glass-card rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-0 border border-white/5 hover:border-fuchsia-500/30 transition-all group">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-[oklch(0.14_0.02_260)]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-fuchsia-400 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 font-mono uppercase tracking-widest">
                      Featured
                    </span>
                    <span className="text-xs text-[oklch(0.50_0.02_260)] flex items-center gap-1 font-mono uppercase tracking-widest">
                      <Tag className="w-3 h-3" /> {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight font-display group-hover:text-fuchsia-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm md:text-base text-[oklch(0.60_0.02_260)] leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40">
                      <span>{featuredPost.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime}</span>
                    </div>
                    {/* FIXED: Now a functional Link instead of a dead button */}
                    <Link href={`/blog/${featuredPost.slug}`} className="btn-glow-outline px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <div className="section-divider" />

      {/* Search + Filter + Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-6">
          {/* Search bar */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-fuchsia-500/50 transition-all"
                />
              </div>
            </div>
          </FadeIn>

          {/* Category filter */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/50 shadow-[0_0_15px_rgba(232,121,249,0.2)]"
                      : "bg-white/5 text-white/60 border border-white/10 hover:text-white hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 80}>
                {/* FIXED: The entire card is now a Link for better usability */}
                <Link href={`/blog/${post.slug}`}>
                  <a className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col transition-all duration-300 border border-white/5 hover:border-fuchsia-500/30 block">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 font-mono uppercase tracking-widest">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-white/40 flex items-center gap-1 font-mono uppercase tracking-widest">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug group-hover:text-fuchsia-400 transition-colors font-display">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[oklch(0.60_0.02_260)] leading-relaxed flex-1 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{post.date}</span>
                        <span className="text-xs text-fuchsia-400 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <FadeIn>
              <div className="text-center py-16 glass-card rounded-2xl border border-white/5">
                <p className="text-white/60 text-lg mb-4">No articles found matching your criteria.</p>
                <button 
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} 
                  className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold transition-all text-fuchsia-400"
                >
                  Clear Filters
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-[oklch(0.10_0.02_260)]">
        <div className="container text-center px-6">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-display">
              Stay Ahead of the <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Curve</span>
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-xl mx-auto mb-10">
              Get weekly AI marketing insights, strategies, and industry updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-fuchsia-500/50 transition-all"
              />
              <button className="btn-glow px-8 py-4 rounded-xl text-sm font-bold whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mt-6">No spam. Unsubscribe anytime.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}