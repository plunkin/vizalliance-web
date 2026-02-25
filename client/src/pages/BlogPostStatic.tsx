import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock, Tag, Share2, Zap, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

export default function BlogPost() {
  // Extract the slug from the URL
  const [match, params] = useRoute("/blog/:slug");
  
  // In a real app, you would fetch the post data from a CMS or database using this slug.
  // For now, we are using a dynamic placeholder that looks great!
  const slug = params?.slug || "article";

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
                AI & Marketing
              </span>
              <span className="text-xs text-white/40 flex items-center gap-1 font-mono uppercase tracking-widest">
                <Clock className="w-3 h-3" /> 10 min read
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 font-display capitalize">
              {slug.split('-').join(' ')}
            </h1>
            <p className="text-xl text-[oklch(0.60_0.02_260)] leading-relaxed mb-8">
              Discover how machine learning models can forecast campaign performance, optimize ad spend in real time, and deliver ROI that traditional methods simply can't match.
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
                <p className="text-xs text-white/40 font-mono uppercase tracking-widest">Feb 19, 2026</p>
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" 
              alt="Article Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* 3. ARTICLE CONTENT (Mockup) */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="prose prose-invert prose-fuchsia max-w-none">
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

              <h2 className="text-2xl font-bold mt-12 mb-6 font-display text-white">What's Next?</h2>
              <p className="text-[oklch(0.60_0.02_260)] mb-8 leading-relaxed">
                The window to establish your brand as the definitive AI answer in your niche is closing. Early adopters are currently enjoying an unfair advantage, capturing highly qualified, high-intent traffic while competitors fight over shrinking traditional search volume.
              </p>
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