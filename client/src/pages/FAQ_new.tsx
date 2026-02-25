import { FadeIn } from "@/components/FadeIn";
import { Plus } from "lucide-react";

const faqs = [
  { 
    cat: "General", 
    q: "Do I have to buy all three services?", 
    a: "No. Each Vizalliance pillar is designed to be a standalone powerhouse. You can start with ResultReach for visibility and add ConsultConnect later as your lead volume increases." 
  },
  { 
    cat: "ResultReach", 
    q: "How is this different from traditional SEO?", 
    a: "Traditional SEO focuses on keywords for humans. ResultReach focuses on 'Entity-Based' indexing for AI models (Perplexity, GPT-4), ensuring you are the cited authority in AI-generated answers." 
  },
  { 
    cat: "RevenueReady", 
    q: "Is de-anonymizing website visitors legal?", 
    a: "Yes. We use standard B2B identity resolution that complies with all current privacy laws. We only identify business-level intent signals, not private individual data." 
  },
  { 
    cat: "ConsultConnect", 
    q: "Will my customers know they are talking to an AI?", 
    a: "Our Voice AI uses sub-500ms latency and linguistic mimicry. Most callers perceive the agent as a highly efficient human receptionist or assistant." 
  }
];

export default function FAQ() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 pb-20 px-6">
      <div className="container max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Common <span className="text-gradient-cyan">Inquiries.</span></h1>
          <p className="text-[oklch(0.60_0.02_260)]">Everything you need to know about the Vizalliance Engine.</p>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 50} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
              <details className="group p-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-bold pr-6">{faq.q}</span>
                  <Plus className="w-5 h-5 text-cyan-400 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="pt-4 text-sm text-[oklch(0.60_0.02_260)] leading-relaxed border-t border-white/5 mt-4">
                  <p className="mb-2 uppercase text-[10px] font-mono text-cyan-400/50">{faq.cat}</p>
                  {faq.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}