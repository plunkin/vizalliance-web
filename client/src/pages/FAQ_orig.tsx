/* ============================================================
   FAQ PAGE — Neural Noir Design
   Sections: Hero → FAQ Accordion → Still Have Questions CTA
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
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

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        q: "What makes Aetheris Digital different from other marketing agencies?",
        a: "Unlike traditional agencies that rely on manual processes and intuition, every service we offer is powered by artificial intelligence. Our AI systems analyze data in real time, predict trends before they happen, and optimize campaigns autonomously — 24 hours a day, 7 days a week. This means faster results, smarter decisions, and significantly better ROI.",
      },
      {
        q: "What types of businesses do you work with?",
        a: "We work with growth-stage businesses across a wide range of industries — from SaaS and technology companies to e-commerce, professional services, healthcare, and B2B enterprises. Our ideal clients are businesses generating $1M–$50M in annual revenue who are ready to scale their marketing with intelligent, data-driven systems.",
      },
      {
        q: "Do I need to understand AI to work with you?",
        a: "Not at all. We handle all the technical complexity behind the scenes. You'll receive clear, jargon-free reporting and a dedicated strategist who translates everything into actionable insights. Think of us as your AI-powered marketing department — you focus on your business, we handle the rest.",
      },
    ],
  },
  {
    title: "Services & Process",
    questions: [
      {
        q: "What does the onboarding process look like?",
        a: "Our onboarding follows a structured 3-step process: First, we conduct a comprehensive Discovery & Audit of your current marketing ecosystem using our AI diagnostic tools. Then, we design a custom Strategy & Build phase where we create your personalized AI-powered marketing system. Finally, we Launch & Optimize — deploying your system and continuously improving it with predictive models. The entire onboarding typically takes 2–4 weeks.",
      },
      {
        q: "Can I choose specific services or do I need to buy a full package?",
        a: "We offer both individual services and comprehensive packages. However, we find that clients see the best results when services work together as an integrated system. During your free audit, we'll recommend the combination that makes the most sense for your goals and budget.",
      },
      {
        q: "How long does it take to see results?",
        a: "It depends on the service. Paid media campaigns typically show measurable improvements within the first 2–4 weeks. SEO and content strategies generally take 3–6 months to reach full momentum, though you'll see early indicators of progress within the first month. Our predictive analytics provide ROI forecasts from day one so you always know what to expect.",
      },
      {
        q: "What is AEO and why does it matter?",
        a: "AEO stands for Answer Engine Optimization. As AI-powered search engines like Google's AI Overviews, ChatGPT, and Perplexity reshape how people find information, traditional SEO alone isn't enough. AEO ensures your brand appears in AI-generated answers and conversational search results — positioning you where the future of search is heading.",
      },
    ],
  },
  {
    title: "Pricing & Contracts",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Our pricing is customized based on your business size, goals, and the services you need. We don't believe in one-size-fits-all packages. That said, most of our engagements range from $3,000 to $15,000 per month. The best way to get an accurate quote is to schedule a free audit — we'll provide a detailed proposal with transparent pricing.",
      },
      {
        q: "Do you require long-term contracts?",
        a: "We offer both month-to-month and annual agreements. While we recommend a minimum 6-month commitment for SEO and content services (because these strategies need time to compound), we never lock you into a contract you're unhappy with. Our 98% client retention rate speaks for itself.",
      },
      {
        q: "What's included in the free AI marketing audit?",
        a: "Our free audit includes a comprehensive analysis of your current marketing performance, competitive landscape assessment, AI-powered opportunity identification, and a personalized roadmap with specific recommendations. It's a genuine strategic document — not a sales pitch disguised as a report.",
      },
    ],
  },
  {
    title: "Technology & Data",
    questions: [
      {
        q: "What AI technologies do you use?",
        a: "We use a combination of proprietary and industry-leading AI tools including custom-trained machine learning models, natural language processing engines, predictive analytics platforms, and computer vision systems. Our tech stack is continuously evolving as new capabilities emerge — we evaluate and integrate new tools on a monthly basis.",
      },
      {
        q: "Is my data safe with you?",
        a: "Absolutely. Data security is a core priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. All data processing happens in secure, SOC 2-compliant environments. We're happy to sign NDAs and provide detailed security documentation upon request.",
      },
      {
        q: "Will AI replace my marketing team?",
        a: "No — AI augments your team, it doesn't replace it. Our systems handle the data-heavy, repetitive, and time-sensitive tasks that consume most of a marketer's day. This frees your team to focus on creative strategy, relationship building, and high-level decision making. Most of our clients find that AI makes their existing team significantly more effective.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.22_0.02_260)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm lg:text-base font-medium text-[oklch(0.85_0.01_260)] group-hover:text-[oklch(0.82_0.15_195)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
          {q}
        </span>
        <ChevronDown className={`w-5 h-5 text-[oklch(0.50_0.02_260)] shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-[oklch(0.60_0.02_260)] leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.02_260)] to-[oklch(0.12_0.02_260)]" />
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>Frequently Asked Questions</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
              Everything You Need to <span className="text-gradient-cyan">Know</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-[oklch(0.60_0.02_260)] max-w-2xl mx-auto">
              Got questions about AI-powered marketing? We've compiled answers to the most common ones. If you don't find what you're looking for, just reach out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          {faqCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 100}>
              <div className="mb-12 last:mb-0">
                <h2 className="text-lg font-semibold text-[oklch(0.82_0.15_195)] mb-6 tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                  {cat.title}
                </h2>
                <div className="glass-card rounded-2xl px-6 lg:px-8">
                  {cat.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Still Have Questions CTA */}
      <section className="py-24 lg:py-32 bg-[oklch(0.10_0.02_260)]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Still Have <span className="text-gradient-cyan">Questions?</span>
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-xl mx-auto mb-8">
              We're here to help. Schedule a free consultation and we'll walk you through everything — no pressure, no sales pitch.
            </p>
            <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
