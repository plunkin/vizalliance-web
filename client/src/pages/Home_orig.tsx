/* ============================================================
   HOME PAGE — Neural Noir Design
   Sections: Hero → Pain Points → Solution → Services Preview →
   Process → Stats → Testimonials → Lead Magnet → Blog Preview
   ============================================================ */
import { Link } from "wouter";
import { images } from "@/lib/images";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  BarChart3,
  Search,
  PenTool,
  Target,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Shield,
  ChevronRight,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ---------- Animated counter hook ---------- */
function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display: `${count}${suffix}` };
}

/* ---------- Fade-in-on-scroll wrapper ---------- */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Services data ---------- */
const services = [
  { icon: Search, title: "AI-Powered SEO", desc: "Machine learning algorithms that analyze ranking signals in real time, predicting algorithm shifts before they happen." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast customer behavior, market trends, and campaign ROI with neural network models trained on your data." },
  { icon: PenTool, title: "Content Automation", desc: "AI-generated content strategies that maintain your brand voice while scaling output across every channel." },
  { icon: Target, title: "Performance Marketing", desc: "Autonomous ad optimization that reallocates budgets in real time based on conversion probability scoring." },
  { icon: Brain, title: "AI Chatbot & Engagement", desc: "Intelligent conversational AI that qualifies leads, answers questions, and books appointments 24/7." },
  { icon: TrendingUp, title: "AEO & AI Visibility", desc: "Optimize for Answer Engine Optimization so your brand appears in AI-generated search results and overviews." },
];

/* ---------- Process steps ---------- */
const steps = [
  { num: "01", title: "Discovery & Audit", desc: "We analyze your current marketing ecosystem, identify gaps, and map opportunities using our AI diagnostic tools." },
  { num: "02", title: "Strategy & Build", desc: "Our team designs a custom AI-powered marketing system tailored to your goals, audience, and competitive landscape." },
  { num: "03", title: "Launch & Optimize", desc: "We deploy your system, monitor performance in real time, and continuously optimize using predictive models." },
];

/* ---------- Testimonials ---------- */
const testimonials = [
  { quote: "Aetheris transformed our lead generation. Their AI-driven SEO strategy increased our organic traffic by 340% in just six months.", name: "Sarah Chen", role: "CMO, TechVenture Inc.", stars: 5 },
  { quote: "The predictive analytics alone paid for themselves within the first quarter. We now forecast campaign ROI with remarkable accuracy.", name: "Marcus Rivera", role: "VP Marketing, ScaleUp Co.", stars: 5 },
  { quote: "Their content automation system produces better copy than our previous agency — and it runs around the clock without missing a beat.", name: "Emily Thornton", role: "Founder, BrightPath Media", stars: 5 },
];

export default function Home() {
  const stat1 = useCountUp(340, 2000, "%");
  const stat2 = useCountUp(12, 2000, "x");
  const stat3 = useCountUp(98, 2000, "%");
  const stat4 = useCountUp(500, 2000, "+");

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={images.heroBg}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.02_260/70%)] via-[oklch(0.12_0.02_260/50%)] to-[oklch(0.12_0.02_260)]" />
        </div>

        <div className="container relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.82_0.15_195/30%)] bg-[oklch(0.82_0.15_195/8%)] text-xs font-medium text-[oklch(0.82_0.15_195)] mb-6" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.15_195)] animate-pulse" />
                  AI-First Marketing Agency
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Marketing That{" "}
                  <span className="text-gradient-cyan">Thinks</span>,{" "}
                  <span className="text-gradient-violet">Adapts</span>, &amp; Delivers
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-lg text-[oklch(0.65_0.02_260)] leading-relaxed max-w-xl mb-8">
                  We fuse artificial intelligence with proven digital marketing strategies to build systems that predict customer behavior, automate campaigns, and drive revenue — while you focus on running your business.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <ul className="space-y-3 mb-8">
                  {["AI-powered SEO that adapts to algorithm changes", "Predictive analytics for smarter ad spend", "Content automation that scales without losing your voice"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[oklch(0.80_0.01_260)]">
                      <CheckCircle2 className="w-5 h-5 text-[oklch(0.82_0.15_195)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-glow px-7 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2">
                    Get Your Free AI Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="btn-glow-outline px-7 py-3.5 rounded-xl text-base flex items-center gap-2">
                    Explore Services <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <p className="mt-6 text-sm italic text-[oklch(0.55_0.02_260)]">
                  "It's like having an entire data science team embedded in your marketing department."
                </p>
              </FadeIn>
            </div>

            {/* Right — AI Brain visual */}
            <FadeIn delay={300} className="hidden lg:block">
              <div className="relative">
                <img
                  src={images.aiBrain}
                  alt="AI Neural Network Visualization"
                  className="w-full max-w-md mx-auto animate-float"
                />
                <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.82_0.15_195/15%)] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[oklch(0.82_0.15_195)]" />
                  </div>
                  <div>
                    <p className="stat-value text-lg">+340%</p>
                    <p className="text-xs text-[oklch(0.55_0.02_260)]">Avg. Traffic Growth</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.25_285/15%)] flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[oklch(0.65_0.20_285)]" />
                  </div>
                  <div>
                    <p className="stat-value text-lg">24/7</p>
                    <p className="text-xs text-[oklch(0.55_0.02_260)]">AI Optimization</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scrolling results ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-[oklch(0.82_0.15_195/10%)] border-t border-b border-[oklch(0.82_0.15_195/20%)] py-3 overflow-hidden">
          <div className="flex gap-12">
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[
                "340% organic traffic increase — SaaS Client",
                "12x ROAS on paid campaigns — E-commerce Brand",
                "98% client retention rate",
                "500+ campaigns optimized by AI",
                "4.2M leads generated last year",
                "Featured in Forbes, TechCrunch, MarketingWeek",
              ].map((item, i) => (
                <span key={i} className="text-sm text-[oklch(0.82_0.15_195)] font-medium flex items-center gap-2 px-6" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.15_195)]" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap" aria-hidden="true">
              {[
                "340% organic traffic increase — SaaS Client",
                "12x ROAS on paid campaigns — E-commerce Brand",
                "98% client retention rate",
                "500+ campaigns optimized by AI",
                "4.2M leads generated last year",
                "Featured in Forbes, TechCrunch, MarketingWeek",
              ].map((item, i) => (
                <span key={`dup-${i}`} className="text-sm text-[oklch(0.82_0.15_195)] font-medium flex items-center gap-2 px-6" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.15_195)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PAIN POINTS ==================== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Still Guessing With Your <span className="text-gradient-cyan">Marketing?</span>
              </h2>
              <p className="text-[oklch(0.60_0.02_260)] text-lg leading-relaxed">
                Most businesses waste thousands on marketing that relies on gut feelings instead of data. Campaigns underperform, leads go cold, and growth stalls — not because you're not trying, but because traditional marketing can't keep up with today's pace.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Clock, title: "Wasted Ad Spend", desc: "Manual campaign management means slow reactions to market shifts. By the time you adjust, your budget is already burned." },
              { icon: Users, title: "Cold Leads, Lost Revenue", desc: "Without intelligent follow-up systems, potential customers slip through the cracks. Every missed response is money left on the table." },
              { icon: Shield, title: "Falling Behind Competitors", desc: "While you're running campaigns the old way, your competitors are using AI to move faster, target smarter, and convert more." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 150}>
                <div className="glass-card rounded-2xl p-8 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.577_0.245_27/12%)] flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[oklch(0.70_0.20_27)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-[oklch(0.55_0.02_260)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== SOLUTION / WHY AI ==================== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <FadeIn>
              <img
                src={images.processDiagram}
                alt="AI Marketing Process"
                className="rounded-2xl w-full"
              />
            </FadeIn>
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  There's a <span className="text-gradient-mixed">Smarter Way</span> to Grow
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-[oklch(0.60_0.02_260)] text-lg leading-relaxed mb-8">
                  What if your marketing ran like clockwork — adapting to trends in real time, qualifying leads automatically, and optimizing every dollar of ad spend while you sleep? That's exactly what we build.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-[oklch(0.60_0.02_260)] leading-relaxed mb-8">
                  Our AI-powered marketing systems replace guesswork with intelligence. We combine machine learning, predictive analytics, and automation to create a marketing engine that gets smarter every day — learning from your data, your customers, and your market.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  {["Real-time optimization", "Predictive targeting", "Automated follow-ups", "Smart budget allocation"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[oklch(0.82_0.15_195)] shrink-0" />
                      <span className="text-[oklch(0.80_0.01_260)]">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== SERVICES PREVIEW ==================== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                AI-Powered Services That <span className="text-gradient-cyan">Drive Results</span>
              </h2>
              <p className="text-[oklch(0.60_0.02_260)] text-lg">
                Every service is built on a foundation of artificial intelligence, designed to outperform traditional marketing at every level.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 100}>
                <div className="glass-card rounded-2xl p-7 h-full group transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.82_0.15_195/10%)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.82_0.15_195/20%)] transition-colors">
                    <svc.icon className="w-6 h-6 text-[oklch(0.82_0.15_195)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{svc.title}</h3>
                  <p className="text-sm text-[oklch(0.55_0.02_260)] leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-glow-outline px-7 py-3 rounded-xl text-sm inline-flex items-center gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>How It Works</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                From Audit to <span className="text-gradient-cyan">Autopilot</span> in 3 Steps
              </h2>
              <p className="text-[oklch(0.60_0.02_260)] text-lg">
                You don't need to learn new tools or hire extra staff. We handle everything — so you can focus on what you do best.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 200}>
                <div className="relative">
                  <span className="stat-value text-5xl opacity-20 absolute -top-2 -left-1" style={{ fontFamily: "var(--font-mono)" }}>{step.num}</span>
                  <div className="pt-12 pl-2">
                    <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                    <p className="text-sm text-[oklch(0.55_0.02_260)] leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[oklch(0.82_0.15_195/40%)] to-transparent" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="py-16 border-y border-[oklch(0.25_0.02_260/40%)] bg-[oklch(0.14_0.02_260)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { ref: stat1.ref, display: stat1.display, label: "Avg. Traffic Growth", sub: "for SEO clients" },
              { ref: stat2.ref, display: stat2.display, label: "Return on Ad Spend", sub: "paid media average" },
              { ref: stat3.ref, display: stat3.display, label: "Client Retention", sub: "industry avg: 50%" },
              { ref: stat4.ref, display: stat4.display, label: "Campaigns Optimized", sub: "by our AI systems" },
            ].map((s) => (
              <div key={s.label} ref={s.ref} className="text-center">
                <p className="stat-value text-3xl lg:text-4xl mb-1">{s.display}</p>
                <p className="text-sm font-medium text-[oklch(0.80_0.01_260)]">{s.label}</p>
                <p className="text-xs text-[oklch(0.45_0.02_260)] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>Client Results</p>
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                Hear From Our <span className="text-gradient-cyan">Partners</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 150}>
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[oklch(0.82_0.15_195)] text-[oklch(0.82_0.15_195)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[oklch(0.75_0.01_260)] leading-relaxed flex-1 italic">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-[oklch(0.25_0.02_260/40%)]">
                    <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>{t.name}</p>
                    <p className="text-xs text-[oklch(0.50_0.02_260)]">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== LEAD MAGNET ==================== */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
        <div className="container">
          <FadeIn>
            <div className="glass-card rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.82_0.15_195/5%)] to-[oklch(0.55_0.25_285/5%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[oklch(0.82_0.15_195/30%)] bg-[oklch(0.82_0.15_195/8%)] text-xs font-medium text-[oklch(0.82_0.15_195)] mb-6" style={{ fontFamily: "var(--font-mono)" }}>
                  <Zap className="w-3 h-3" /> Free Resource
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Get Your Free <span className="text-gradient-cyan">AI Marketing Audit</span>
                </h2>
                <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-2xl mx-auto mb-8">
                  Discover exactly where AI can amplify your marketing. Our diagnostic tool analyzes your current strategy and delivers a personalized roadmap — completely free.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-[oklch(0.18_0.02_260)] border border-[oklch(0.30_0.02_260)] text-sm text-[oklch(0.90_0.01_260)] placeholder:text-[oklch(0.45_0.02_260)] focus:outline-none focus:border-[oklch(0.82_0.15_195/50%)] focus:ring-1 focus:ring-[oklch(0.82_0.15_195/30%)] transition-all"
                  />
                  <button className="btn-glow px-7 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                    Get Free Audit <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-[oklch(0.40_0.02_260)] mt-4">No spam. Unsubscribe anytime. Your data stays private.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
