import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Plus, ArrowRight, MessageSquare } from "lucide-react";

// Inline FadeIn Helper (Guarantees stability)
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

const faqs = [
  { 
    cat: "General", 
    q: "Do I have to buy all three services?", 
    a: "No. Each Vizalliance pillar is designed to be a standalone powerhouse. You can start with ResultReach for visibility and add ConsultConnect later as your lead volume increases." 
  },
  { 
    cat: "ResultReach", 
    q: "How is this different from traditional SEO?", 
    a: "Traditional SEO focuses on outdated keyword tactics. ResultReach focuses on 'Entity-Based' indexing for modern search platforms (like Perplexity), ensuring you are the cited authority when prospects ask direct questions." 
  },
  { 
    cat: "RevenueReady", 
    q: "Is de-anonymizing website visitors legal?", 
    a: "Yes. We utilize fully compliant identity resolution for both B2B and B2C traffic. By safely matching visitor data against opted-in, privacy-compliant networks, we can identify high-intent consumers and businesses actively researching your services while strictly adhering to current data privacy laws." 
  },
  { 
    cat: "ConsultConnect", 
    q: "Will my customers know they are talking to an automated system?", 
    a: "Our automated voice system uses sub-500ms latency and natural conversational flows. Most callers perceive the responder as a highly efficient human receptionist or assistant." 
  },
  {
    cat: "Onboarding",
    q: "How long does it take to deploy the engine?",
    a: "Deployment timelines vary by module. RevenueReady can typically be active within 5 business days. ResultReach and ConsultConnect, however, require extensive data gathering from your team to accurately map your business and conversational flows. The total timeline depends on how quickly you provide the required assets. Once all data is received and processed, full deployment and calibration take up to 10 business days."
  }
];

export default function FAQ() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/10 to-[oklch(0.12_0.02_260)] pointer-events-none" />
        
        <div className="container relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-sm font-medium text-fuchsia-400 mb-4 tracking-wide uppercase font-mono">
              Frequently Asked Questions
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto font-display">
              Common <span className="text-fuchsia-400">Inquiries.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-[oklch(0.60_0.02_260)] max-w-2xl mx-auto">
              Everything you need to know about the Vizalliance Engine. If you don't see your answer here, just ask.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. FAQ LIST */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl mx-auto px-6 space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 50} className="glass-card rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/20 transition-colors">
              <details className="group p-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-bold pr-6 text-lg">{faq.q}</span>
                  <Plus className="w-5 h-5 text-fuchsia-400 group-open:rotate-45 transition-transform duration-300" />
                </summary>
                <div className="pt-4 text-sm text-[oklch(0.60_0.02_260)] leading-relaxed border-t border-white/5 mt-4">
                  <p className="mb-2 uppercase text-[10px] font-mono text-fuchsia-400/60 tracking-wider">{faq.cat}</p>
                  {faq.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS? (Restored CTA) */}
      <section className="py-24 lg:py-32 relative">
         <div className="container text-center px-6">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-display">
              Still Have <span className="text-fuchsia-400">Questions?</span>
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-xl mx-auto mb-8">
              We're here to help. Schedule a free 15-minute consultation to walk through your specific use case.
            </p>
            <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}