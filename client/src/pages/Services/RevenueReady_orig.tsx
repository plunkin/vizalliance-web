import { Link } from "wouter";
import { TrendingUp, Target, Zap, BarChart3, Layers, MousePointer2, Clock, CheckCircle2, Search } from "lucide-react";
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

export default function RevenueReady() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-fuchsia-400 mb-4 tracking-widest uppercase font-mono">
              Intent-Based Lead Generation
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 font-display">
              Stop Chasing Leads. Start <span className="text-fuchsia-400">Intercepting Intent</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl text-[oklch(0.60_0.02_260)] leading-relaxed mb-10">
              Identify and engage "In-Market" buyers before they ever fill out a competitor's form. 🎯
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
              Claim Your Market Intent Map <Target className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.14_0.02_260)]">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Plug Your Revenue Leaks 💸</h2>
              <p className="text-[oklch(0.60_0.02_260)] mb-8">
                Most businesses lose 56% of their potential market because they only see the leads that "raise their hand." We help you see the hidden researchers.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Anonymous Research", desc: "Buyers are forming criteria without your influence." },
                  { title: "Competitor Interception", desc: "Intent-aware competitors are finding your leads first." },
                  { title: "The Silence Tax", desc: "Waiting for the form fill costs you higher margins." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-colors">
                    <MousePointer2 className="w-6 h-6 text-fuchsia-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-[oklch(0.60_0.02_260)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={200} className="relative">
              <div className="aspect-square rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Layers className="w-20 h-20 text-white/20 mb-4" />
                <p className="text-sm font-mono text-white/40 uppercase tracking-widest">Visualizing The Leak</p>
                <div className="mt-8 w-full max-w-xs space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-fuchsia-500 w-[30%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/30">
                    <span>Captured (30%)</span>
                    <span>Lost (70%)</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Lead Multiplier Effect 🧮</h2>
            <p className="text-[oklch(0.60_0.02_260)]">Triple your qualified opportunities without increasing your ad spend.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100} className="glass-card p-10 rounded-2xl border-l-4 border-l-white/20">
              <p className="text-sm font-mono text-white/40 uppercase mb-4">The Traditional Model</p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Visible Conversion</span>
                  <span className="font-bold">30 Leads</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Hidden Intent</span>
                  <span className="text-white/20">0 Leads</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-xl font-bold">Total Leads</span>
                  <span className="text-xl font-bold">30</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="glass-card p-10 rounded-2xl border-l-4 border-l-fuchsia-400 bg-gradient-to-br from-fuchsia-900/10 to-transparent">
              <p className="text-sm font-mono text-fuchsia-400 uppercase mb-4">The RevenueReady Model</p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Visible Conversion</span>
                  <span className="font-bold">30 Leads</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Identified Intent</span>
                  <span className="text-fuchsia-400 font-bold">+100 Leads</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-xl font-bold">Total Leads</span>
                  <span className="text-xl font-bold text-fuchsia-400">130</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.14_0.02_260)]">
        <div className="container px-6 text-center max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Win the Speed to Lead Race ⚡</h2>
            <p className="text-[oklch(0.60_0.02_260)] mb-12">
              Wait 10 minutes, and your chances of qualifying drop by 10x. We engage in 5 minutes or less.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: Search, label: "Intent Spotted", time: "0 Min" },
               { icon: Zap, label: "Auto-Outreach", time: "2 Min" },
               { icon: Clock, label: "AI Voice Qual", time: "5 Min" },
               { icon: CheckCircle2, label: "Appointment", time: "Done" }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 100}>
                 <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center justify-center border border-white/5">
                   <item.icon className="w-8 h-8 mb-4 text-fuchsia-400" />
                   <p className="font-bold text-sm">{item.label}</p>
                   <p className="text-xs font-mono text-fuchsia-400/60 mt-1">{item.time}</p>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container px-6 text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for Total Market Visibility?</h2>
            <p className="text-[oklch(0.60_0.02_260)] mb-10">
              Uncover the "Hidden 56%" and start building a predictable lead machine today.
            </p>
            <Link href="/contact" className="btn-glow px-10 py-5 rounded-xl font-bold inline-block">
              Get Your Market Intent Map
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}