/* ============================================================
   ABOUT PAGE — Cyber Magenta Design
   Sections: Hero → Mission → Values → Story → CTA
   ============================================================ */
import { Link } from "wouter";
import { images } from "@/lib/images";
import { ArrowRight, Lightbulb, Shield, Zap, Users, Target, BarChart3 } from "lucide-react";
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

const values = [
  { icon: Lightbulb, title: "Intelligence First", desc: "Every decision, every campaign, every optimization is driven by data and machine learning — never guesswork." },
  { icon: Shield, title: "Radical Transparency", desc: "Real-time dashboards, clear reporting, and honest communication. You always know exactly what's happening and why." },
  { icon: Target, title: "Results Over Vanity", desc: "We measure success by revenue generated and leads converted — not impressions, likes, or hollow metrics." },
  { icon: Users, title: "True Partnership", desc: "We embed ourselves in your business. Your goals become our goals. Your growth is our growth." },
  { icon: Zap, title: "Relentless Innovation", desc: "The AI landscape evolves daily. We stay ahead so you don't have to — constantly testing, learning, and improving." },
  { icon: BarChart3, title: "Scalable Systems", desc: "We build marketing infrastructure that grows with you. What works for 100 leads works for 100,000." },
];

const milestones = [
  { year: "2020", event: "Founded with a mission to make AI-powered marketing accessible to growth-stage businesses." },
  { year: "2021", event: "Launched our proprietary predictive analytics engine. Onboarded first 50 clients." },
  { year: "2022", event: "Expanded to a team of 25+ specialists. Crossed $100M in client revenue generated." },
  { year: "2023", event: "Introduced AI content automation platform. Named a Top 10 AI Marketing Agency by MarketingWeek." },
  { year: "2024", event: "Launched AEO optimization services. Surpassed 200 active clients across 15 industries." },
  { year: "2025", event: "Released next-gen AI campaign orchestration. Expanded into international markets." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.02_260)] to-[oklch(0.12_0.02_260)]" />
        <div className="container relative z-10">
          <FadeIn>
            <p className="text-sm font-medium text-fuchsia-400 mb-4 tracking-wide uppercase font-mono">
              About Vizalliance
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl font-display">
              We Build Marketing Systems That <span className="text-gradient-cyan">Think for Themselves</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-[oklch(0.60_0.02_260)] leading-relaxed max-w-2xl">
              Vizalliance was founded on a simple belief: the future of growth belongs to those who harness artificial intelligence — not as a buzzword, but as the core engine driving every strategy, every campaign, and every decision.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission + Image */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <p className="text-sm font-medium text-fuchsia-400 mb-3 tracking-wide uppercase font-mono">
                  Our Mission
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                  Democratize <span className="text-gradient-cyan">AI-Powered Growth</span>
                </h2>
                <p className="text-[oklch(0.60_0.02_260)] leading-relaxed mb-6">
                  Enterprise companies have had access to AI-driven marketing for years. We believe every ambitious business — from startups to scaling mid-market companies — deserves the same advantage.
                </p>
                <p className="text-[oklch(0.60_0.02_260)] leading-relaxed mb-8">
                  Our team combines deep expertise in machine learning, data science, and digital marketing to build systems that don't just execute campaigns — they learn, adapt, and improve autonomously. The result? Marketing that gets smarter every single day.
                </p>
                <Link href="/services" className="btn-glow-outline px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
                  See How We Do It <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-fuchsia-500/20 shadow-[0_0_30px_rgba(232,121,249,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-900/40 to-transparent mix-blend-overlay z-10"></div>
                 <img src={images.aboutTeam} alt="Vizalliance Team Collaboration" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-fuchsia-400 mb-3 tracking-wide uppercase font-mono">
                Our Values
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold font-display">
                The Principles That <span className="text-gradient-cyan">Guide Us</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="glass-card rounded-2xl p-7 h-full group transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-5 group-hover:bg-fuchsia-500/20 transition-colors border border-fuchsia-500/20">
                    <v.icon className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-display">{v.title}</h3>
                  <p className="text-sm text-[oklch(0.55_0.02_260)] leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-fuchsia-400 mb-3 tracking-wide uppercase font-mono">
                Our Journey
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold font-display">
                Building the Future of <span className="text-gradient-cyan">Marketing</span>
              </h2>
            </div>
          </FadeIn>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 100}>
                <div className="flex gap-6 mb-8 last:mb-0 group">
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-bold text-fuchsia-400 group-hover:text-white transition-colors">{m.year}</span>
                    <div className="w-px flex-1 bg-gradient-to-b from-fuchsia-500/40 to-transparent mt-2 group-hover:from-fuchsia-400 transition-colors" />
                  </div>
                  <p className="text-sm text-[oklch(0.65_0.02_260)] leading-relaxed pb-6 pt-1">{m.event}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA to match the rest of the site */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
         <div className="container text-center px-6">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-display">
              Ready to <span className="text-fuchsia-400">Scale?</span>
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-xl mx-auto mb-8">
              Let's build your autonomous revenue engine together.
            </p>
            <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              Get Your Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}