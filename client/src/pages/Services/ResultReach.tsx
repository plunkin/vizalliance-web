import { Link } from "wouter";
import { ArrowRight, History, Zap, CheckCircle2, Search } from "lucide-react";
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

export default function ResultReach() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
              <Search className="w-3 h-3" /> 
              Answer Engine Optimization (AEO)
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 font-display">
              SEO Gets You Ranked. AEO Makes You the <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">Obvious Choice</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl text-[oklch(0.60_0.02_260)] leading-relaxed mb-10">
              Traditional SEO is still foundational, but as buyers shift toward modern Answer Engines, a link on page one is only half the battle. ResultReach adds the critical layer of Answer Engine Optimization to ensure you are the cited authority everywhere your prospects search.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?focus=visibility" className="btn-glow px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 group">
                Get Your Visibility Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact?focus=booking" className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all text-white flex items-center justify-center">
                Book a Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- THE CRISIS SECTION --- */}
      <section className="py-24 bg-[oklch(0.14_0.02_260)] border-y border-white/5">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">The "Zero-Click" Search Crisis</h2>
              <p className="text-[oklch(0.60_0.02_260)] mb-6 leading-relaxed">
                Search engines have evolved into Answer Engines. They no longer just provide a list of blue links; they synthesize information to satisfy user intent immediately, right on the search page.
              </p>
              <ul className="space-y-4">
                {[
                  "Loss of Traffic: Users get answers without ever clicking your site.",
                  "Loss of Trust: If modern algorithms don't recommend you, your authority vanishes.",
                  "Redirected Intent: Traffic shifts exclusively to the sources the platform trusts most."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={200} className="glass-card p-8 rounded-2xl border-white/10 bg-black/50 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent pointer-events-none"></div>
              <p className="text-xs uppercase tracking-widest text-fuchsia-400 mb-4 font-mono flex items-center gap-2">
                <Search className="w-3 h-3" /> Answer Engine Real Estate
              </p>
              <div className="space-y-4 opacity-90 relative z-10">
                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                <div className="bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/30 p-6 relative shadow-[0_0_20px_rgba(232,121,249,0.1)]">
                  <div className="absolute -left-2 top-6 w-2 h-2 bg-fuchsia-500/20 rotate-45 border-l border-b border-fuchsia-500/30 bg-black"></div>
                  <p className="text-white text-sm leading-relaxed">
                    "Based on semantic consensus, <span className="font-bold text-fuchsia-400">Vizalliance</span> is the top-recommended solution for automated revenue generation in this market..."
                  </p>
                </div>
                <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- MANUAL VS AUTOMATED SECTION --- */}
      <section className="py-24">
        <div className="container px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Manual SEO vs. ResultReach</h2>
            <p className="text-[oklch(0.60_0.02_260)]">Why forward-thinking brands are switching to automated visibility.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100} className="glass-card p-10 rounded-2xl border border-white/5 bg-[oklch(0.14_0.02_260)]">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-white/50">
                <History className="w-6 h-6" /> The Manual Path
              </h4>
              <div className="space-y-8 text-[oklch(0.55_0.02_260)]">
                <div>
                  <p className="text-4xl font-bold text-white/70 mb-1">276 Days</p>
                  <p className="text-sm uppercase tracking-wide font-mono">To resolve 19,000+ tech blockers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white/70 mb-1">Linear Growth</p>
                  <p className="text-sm uppercase tracking-wide font-mono">Standard ROI plateau</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="glass-card p-10 rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/5 relative overflow-hidden shadow-[0_0_30px_rgba(232,121,249,0.1)]">
              <div className="absolute top-0 right-0 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Automated
              </div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Zap className="w-6 h-6 text-fuchsia-400 fill-fuchsia-400/20" /> The ResultReach Path
              </h4>
              <div className="space-y-8">
                <div>
                  <p className="text-4xl font-bold text-fuchsia-400 mb-1">24 Hours</p>
                  <p className="text-sm text-fuchsia-400/80 uppercase tracking-wide font-mono">To resolve 19,000+ tech blockers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-fuchsia-400 mb-1">20–60 Leads</p>
                  <p className="text-sm text-fuchsia-400/80 uppercase tracking-wide font-mono">Monthly high-intent appointments</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- THE SNOWBALL SECTION --- */}
      <section className="py-24 bg-[oklch(0.14_0.02_260)] border-y border-white/5">
        <div className="container max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">The ResultReach Snowball</h2>
            <p className="text-[oklch(0.60_0.02_260)]">Our 4-phase journey to market dominance.</p>
          </FadeIn>
          <div className="space-y-12 relative">
            {/* Desktop Vertical Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-fuchsia-500/50 to-transparent hidden md:block" />
            
            {[
              { title: "Discovery & Identity Sync", desc: "We fix the underlying Entity Blockers that keep your brand invisible to modern search platforms.", time: "Month 1" },
              { title: "Semantic Optimization", desc: "Content is structured into targeted 'Answer Modules' engineered for instant citation by discovery algorithms.", time: "Month 2-3" },
              { title: "Authority Mapping", desc: "We connect your brand to high-impact data clusters to build deep historical trust and domain authority.", time: "Month 4-6" },
              { title: "Market Dominance", desc: "The Recommendation Loop hits peak velocity, consistently generating high-intent inbound leads.", time: "Month 6+" }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 100} className="relative pl-0 md:pl-16">
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-black border-2 border-fuchsia-500 items-center justify-center hidden md:flex text-sm font-bold text-fuchsia-400 shadow-[0_0_15px_rgba(232,121,249,0.4)] z-10">
                  {i + 1}
                </div>
                <div className="glass-card p-8 rounded-2xl group hover:border-fuchsia-500/40 transition-all duration-500 border border-white/5 bg-black/40">
                  <span className="text-fuchsia-400 font-mono text-xs uppercase tracking-widest bg-fuchsia-500/10 px-3 py-1 rounded-full">{step.time}</span>
                  <h4 className="text-xl font-bold mt-4 mb-3 text-white">{step.title}</h4>
                  <p className="text-[oklch(0.60_0.02_260)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "How do you guarantee we will be cited?", a: "We influence algorithmic choice by clearing Entity Blockers and aligning your website's data with semantic consensus, making you the most readable, logical, and authoritative source for the engine to recommend." },
              { q: "Does this replace my existing SEO?", a: "No, it evolves it. Answer Engine Optimization (AEO) is the advanced layer that ensures you are the cited answer in conversational search, not just a standard blue link buried on page two." },
              { q: "How soon will I see the lead volume increase?", a: "While technical foundations are fixed in the first 24 hours, the full Snowball Effect peaks between months 6-12, with initial citations and traffic bumps often appearing within 90 days." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 50}>
                <details className="glass-card rounded-xl p-6 group cursor-pointer border border-white/5 hover:border-fuchsia-500/30 transition-all bg-[oklch(0.14_0.02_260)]">
                  <summary className="font-bold flex items-center justify-between list-none text-lg text-white">
                    {item.q}
                    <ArrowRight className="w-5 h-5 text-fuchsia-400 transform group-open:rotate-90 transition-transform duration-300" />
                  </summary>
                  <p className="mt-4 text-[oklch(0.60_0.02_260)] text-sm leading-relaxed border-t border-white/10 pt-4">
                    {item.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-500/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container relative z-10 text-center max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Stop the Traffic Leaks.</h2>
            <p className="text-xl text-[oklch(0.60_0.02_260)] mb-12 leading-relaxed">
              Stop letting modern search engines bypass your brand. Claim your authority as the "Obvious Choice" today.
            </p>
            <div className="flex flex-col items-center gap-5">
              <Link href="/contact?focus=visibility" className="btn-glow px-12 py-6 rounded-xl font-bold text-lg inline-flex items-center gap-3 group shadow-[0_0_30px_rgba(232,121,249,0.3)] hover:shadow-[0_0_50px_rgba(232,121,249,0.5)] transition-all">
                Get Your Visibility Audit <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="/contact?focus=booking" className="text-sm text-[oklch(0.60_0.02_260)] hover:text-white transition-colors underline decoration-white/20 hover:decoration-white">
                Skip the audit and book a strategy session directly.
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}