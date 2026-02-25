import { Link, useRoute, useLocation } from "wouter";
import { ArrowLeft, Clock, Tag, Share2, Linkedin, Twitter, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";

// --- FADE-IN HELPER ---
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

// --- MOCK DATABASE (Must match the one in Blog.tsx) ---
// In a production app, you would fetch this from an API or CMS based on the slug.
const blogPosts = [
  {
    slug: "complete-guide-to-aeo-2025",
    title: "The Complete Guide to Answer Engine Optimization (AEO) in 2025",
    excerpt: "As AI reshapes search, traditional SEO alone won't cut it. Learn how AEO positions your brand in AI-generated answers, featured snippets, and conversational search results — and why it matters now more than ever.",
    category: "AEO",
    date: "Feb 5, 2026",
    readTime: "12 min read",
    image: images.blogHeader || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    // We add 'content' here so each post has unique text.
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          In the era of AI, traditional search engine optimization is rapidly becoming obsolete. As users shift from scrolling through pages of blue links to asking conversational AI for direct answers, businesses must adapt or risk becoming invisible.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">The Shift to Answer Engines</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          Platforms like ChatGPT, Perplexity, and Google's AI Overviews don't just index content; they synthesize it. To be recommended by these systems, your brand data must be structured as clear, authoritative "Entities." 
        </p>
        <blockquote className="border-l-4 border-fuchsia-400 pl-6 my-10 italic text-xl text-white/80 bg-fuchsia-500/5 py-4 pr-4 rounded-r-xl">
          "If you aren't the cited answer in ChatGPT or Gemini, you're entirely invisible to the modern researcher."
        </blockquote>
        <h3 className="text-xl font-bold mt-10 mb-4 font-display text-white">Core Pillars of AEO</h3>
        <ul className="space-y-4 mb-8 text-[oklch(0.60_0.02_260)] list-disc pl-6 marker:text-fuchsia-400">
          <li><strong>Entity Resolution:</strong> Ensuring AI models know exactly who you are, what you do, and who you serve.</li>
          <li><strong>Semantic Density:</strong> Writing content that answers specific, long-tail questions deeply and contextually.</li>
          <li><strong>Citation Building:</strong> Generating trust signals on high-authority platforms that AI models scrape for training data.</li>
        </ul>
      </>
    )
  },
  {
    slug: "predictive-analytics-digital-advertising",
    title: "How Predictive Analytics Is Transforming Digital Advertising",
    excerpt: "Discover how machine learning models can forecast campaign performance, optimize ad spend in real time, and deliver ROI that traditional methods simply can't match.",
    category: "Analytics",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          The days of "spend and pray" advertising are officially over. By leveraging predictive analytics, marketers can now forecast the exact outcome of their campaigns before spending a single dollar.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">Moving from Reactive to Proactive</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          Traditional analytics tell you what happened yesterday. Predictive analytics tell you what will happen tomorrow. By analyzing historical data, seasonality, and user behavior patterns, AI models can identify which segments will convert at the highest rate.
        </p>
      </>
    )
  },
  {
    slug: "ai-powered-seo-algorithm-update",
    title: "AI-Powered SEO: What Google's Latest Algorithm Update Means",
    excerpt: "Google's newest core update prioritizes AI-generated content quality signals. Here's what changed, what it means for your strategy, and how to adapt before your competitors do.",
    category: "SEO",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          Google's algorithms are now heavily reliant on machine learning to determine "Helpful Content." If your website is still relying on keyword stuffing and basic backlinks, you are likely seeing a drop in traffic.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">The End of Mass-Produced Content</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          Google is actively penalizing programmatic, low-effort AI content. However, they are rewarding content where AI was used to enhance structure, data analysis, and user experience. The key is using AI for *insight*, not just *generation*.
        </p>
      </>
    )
  },
  {
    slug: "content-automation-brand-voice",
    title: "Content Automation Without Losing Your Brand Voice",
    excerpt: "Scaling content production with AI doesn't mean sacrificing authenticity. This framework shows you how to train AI systems to write in your brand's unique voice.",
    category: "Content Strategy",
    date: "Jan 12, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=800&fit=crop",
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          The biggest fear most brands have when adopting AI content generation is sounding like a robot. But with the right fine-tuning and system prompts, an AI model can replicate your top copywriter perfectly.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">Building a Voice Persona Prompt</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          You must provide the AI with constraints. Define your tone (e.g., authoritative but accessible), your vocabulary (words to use and words to avoid), and provide 5-10 examples of your best previous work as a baseline.
        </p>
      </>
    )
  },
  {
    slug: "roi-of-ai-marketing",
    title: "The ROI of AI Marketing: Real Numbers From Real Campaigns",
    excerpt: "We analyzed 200+ AI-powered campaigns across 15 industries. Here are the actual performance benchmarks, cost savings, and revenue gains — backed by data.",
    category: "AI & Marketing",
    date: "Jan 5, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          The hype around AI is deafening, but what do the actual numbers say? We compiled data from over 200 autonomous revenue engine deployments to find the truth about ROI.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">Cost Reduction vs. Revenue Generation</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          While most companies adopt AI to cut costs (seeing an average 34% reduction in manual marketing labor), the true value lies in revenue generation. Companies utilizing intent-based lead scoring saw a 210% increase in pipeline velocity.
        </p>
      </>
    )
  },
  {
    slug: "ai-marketing-trends-2025",
    title: "5 AI Marketing Trends That Will Define 2026",
    excerpt: "From autonomous campaign management to hyper-personalization at scale, these are the AI marketing trends that forward-thinking businesses need to prepare for right now.",
    category: "Industry Insights",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
    content: (
      <>
        <p className="text-lg leading-relaxed text-[oklch(0.80_0.02_260)] mb-8">
          The pace of technological advancement is accelerating. What was considered "cutting edge" twelve months ago is now standard practice. To stay ahead in 2026, marketers must look beyond simple generation.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">Trend 1: Autonomous AI Agents</h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
          We are moving from tools that assist humans to agents that act on our behalf. AI systems that can independently qualify leads, schedule appointments, and adjust ad spend will become the new baseline for competitive businesses.
        </p>
      </>
    )
  }
];

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  
  // Find the post that matches the URL slug
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  // If the user types a random URL (like /blog/asdfgh), send them back to the blog main page.
  useEffect(() => {
    if (!post && slug) {
      setLocation("/blog");
    }
  }, [post, slug, setLocation]);

  // Prevent rendering if post isn't found (avoids flashes of broken UI before the redirect happens)
  if (!post) return null; 

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pb-24">
      
      {/* 1. ARTICLE HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/10 to-transparent pointer-events-none" />
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-fuchsia-400 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </a>
            </Link>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-fuchsia-400 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 font-mono uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-xs text-white/40 flex items-center gap-1 font-mono uppercase tracking-widest">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 font-display capitalize">
              {post.title}
            </h1>
            <p className="text-xl text-[oklch(0.60_0.02_260)] leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </FadeIn>

          {/* Author & Date Row */}
          <FadeIn delay={300} className="flex items-center justify-between py-6 border-t border-white/10 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/50 flex items-center justify-center font-bold text-fuchsia-400 font-display">
                VZ
              </div>
              <div>
                <p className="font-bold text-sm">Vizalliance Team</p>
                <p className="text-xs text-white/40 font-mono uppercase tracking-widest">{post.date}</p>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. FEATURED IMAGE */}
      <section className="container max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <FadeIn delay={400}>
          <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* 3. ARTICLE CONTENT (Dynamic) */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="prose prose-invert prose-fuchsia max-w-none">
              {post.content}
            </div>
            
            {/* INLINE CTA */}
            <div className="mt-16 glass-card p-8 rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-900/10 to-transparent text-center">
              <Zap className="w-8 h-8 text-fuchsia-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 font-display">Ready to secure your AI visibility?</h3>
              <p className="text-[oklch(0.60_0.02_260)] mb-6 text-sm">
                Get a free integrity check to see how AI search engines currently view your brand.
              </p>
              <Link href="/contact" className="btn-glow px-8 py-3 rounded-xl text-sm font-bold inline-block">
                Request Audit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}