/* ============================================================
   SERVICES PAGE — Neural Noir Design
   Sections: Hero → Service Grid → What's Included → Comparison → CTA
   ============================================================ */
import { Link } from "wouter";
import { images } from "@/lib/images";
import {
  ArrowRight, Search, BarChart3, PenTool, Target, Brain, TrendingUp,
  CheckCircle2, X, Sparkles, Globe, MessageSquare, Mail, LineChart, Megaphone,
} from "lucide-react";
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

const services = [
  {
    icon: Target,
    title: "RevenueReady Leads",
    tag: "High-Intent Acquisition",
    desc: "Stop chasing cold prospects. We build automated systems that identify, warm, and deliver sales-ready leads directly to your pipeline, ensuring your calendar is filled with prospects ready to talk revenue.",
    features: [
      "In-Market Buyer Identification",
      "Multi-Channel Warming Sequences",
      "High-Conversion Landing Pages",
      "Automated Lead Scoring",
      "Direct CRM Integration"
    ],
    cta: "Request Your Revenue Roadmap"
  },
  {
    icon: TrendingUp,
    title: "ResultReach",
    tag: "Answer Engine Dominance",
    desc: "Traditional SEO is broken because people don't just scroll—they ask. ResultReach optimizes your digital entity for AEO patterns, ensuring AI systems like ChatGPT and Gemini choose your brand as the definitive answer.",
    features: [
      "AI Identity Sync & Mapping",
      "Instant Technical Blocker Resolution",
      "Omni-AEO Presence & Citations",
      "Vector-Based Content Mapping",
      "AI-Tailored Schema Implementation"
    ],
    cta: "Get Your Answer-Engine Integrity Check"
  },
  {
    icon: MessageSquare,
    title: "ConsultConnect",
    tag: "24/7 Voice AI Agent",
    desc: "60% of inbound calls go to voicemail and never return. ConsultConnect answers every call with a natural, consultative tone—qualifying prospects and booking appointments while your competitors are still asleep.",
    features: [
      "24/7 Human-Like Voice Consultation",
      "Instant Lead Qualification",
      "Live Calendar Sync & Booking",
      "Custom Brand & Service Training",
      "Automated CRM Data Handoff"
    ],
    cta: "Book Your ConsultConnect Demo"
  }
];

const included = [
  { icon: LineChart, title: "Real-Time Dashboard", desc: "Live performance metrics, campaign analytics, and AI insights — accessible anytime from any device." },
  { icon: MessageSquare, title: "Dedicated Strategist", desc: "A single point of contact who knows your business inside and out. Direct access, no ticket queues." },
  { icon: Mail, title: "Monthly Strategy Reports", desc: "Detailed analysis of what's working, what's changing, and what we're doing next — in plain English." },
  { icon: Globe, title: "Competitor Monitoring", desc: "AI-powered surveillance of your competitive landscape. Know what they're doing before they do it." },
  { icon: Sparkles, title: "Continuous Optimization", desc: "Our AI systems run 24/7, making micro-adjustments that compound into massive performance gains." },
  { icon: Megaphone, title: "Quarterly Business Reviews", desc: "Strategic deep-dives to align marketing performance with your evolving business objectives." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.02_260)] to-[oklch(0.12_0.02_260)]" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <FadeIn>
                <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>Our Services</p>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  What We Do &amp; How We <span className="text-gradient-cyan">Help You Grow</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg text-[oklch(0.60_0.02_260)] leading-relaxed max-w-xl">
                  Every service is powered by artificial intelligence, designed to outperform traditional marketing, and built to scale with your business. No fluff. No vanity metrics. Just measurable growth.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={300} className="hidden lg:block">
              <img src={images.aiBrain} alt="AI Services" className="w-full max-w-sm mx-auto animate-float" />
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Detailed Services */}
      <section className="py-24 lg:py-32">
        <div className="container space-y-20">
          {services.map((svc, i) => (
            <FadeIn key={svc.title}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.82_0.15_195/12%)] flex items-center justify-center">
                      <svc.icon className="w-5 h-5 text-[oklch(0.82_0.15_195)]" />
                    </div>
                    <span className="text-xs font-medium text-[oklch(0.55_0.25_285)] px-2.5 py-1 rounded-full border border-[oklch(0.55_0.25_285/30%)]" style={{ fontFamily: "var(--font-mono)" }}>{svc.tag}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>{svc.title}</h3>
                  <p className="text-[oklch(0.60_0.02_260)] leading-relaxed mb-6">{svc.desc}</p>
                  <Link href="/contact" className="btn-glow-outline px-5 py-2.5 rounded-lg text-sm inline-flex items-center gap-2">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className={`glass-card rounded-2xl p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="text-sm font-semibold text-[oklch(0.82_0.15_195)] mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>Key Capabilities</h4>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[oklch(0.75_0.01_260)]">
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.82_0.15_195)] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* What's Included */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>Every Engagement Includes</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                What's Included in Your <span className="text-gradient-cyan">Partnership</span>
              </h2>
              <p className="text-[oklch(0.60_0.02_260)] text-lg">Beyond our core services, every client receives these foundational elements as part of their engagement.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="glass-card rounded-2xl p-7 h-full group transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.55_0.25_285/10%)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.55_0.25_285/20%)] transition-colors">
                    <item.icon className="w-6 h-6 text-[oklch(0.65_0.20_285)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-[oklch(0.55_0.02_260)] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Comparison Table */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Traditional Marketing vs. <span className="text-gradient-cyan">AI-Powered</span>
              </h2>
              <p className="text-[oklch(0.60_0.02_260)] text-lg">See why forward-thinking businesses are making the switch.</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="glass-card rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <div className="grid grid-cols-3 text-sm font-semibold border-b border-[oklch(0.25_0.02_260)]">
                <div className="p-4 lg:p-5 text-[oklch(0.55_0.02_260)]">Feature</div>
                <div className="p-4 lg:p-5 text-center text-[oklch(0.55_0.02_260)]">Traditional</div>
                <div className="p-4 lg:p-5 text-center text-[oklch(0.82_0.15_195)]">Aetheris AI</div>
              </div>
              {[
                ["Campaign Optimization", false, true],
                ["24/7 Lead Response", false, true],
                ["Predictive ROI Forecasting", false, true],
                ["Real-Time Budget Reallocation", false, true],
                ["Automated A/B Testing", false, true],
                ["Algorithm Change Prediction", false, true],
                ["Personalized at Scale", false, true],
              ].map(([feature, trad, ai]) => (
                <div key={feature as string} className="grid grid-cols-3 text-sm border-b border-[oklch(0.20_0.02_260)] last:border-0">
                  <div className="p-4 lg:p-5 text-[oklch(0.70_0.01_260)]">{feature as string}</div>
                  <div className="p-4 lg:p-5 flex justify-center">
                    {trad ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-[oklch(0.40_0.02_260)]" />}
                  </div>
                  <div className="p-4 lg:p-5 flex justify-center">
                    {ai ? <CheckCircle2 className="w-5 h-5 text-[oklch(0.82_0.15_195)]" /> : <X className="w-5 h-5 text-[oklch(0.40_0.02_260)]" />}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
