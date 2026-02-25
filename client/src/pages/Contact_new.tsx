import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add lead submission logic here
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[oklch(0.12_0.02_260)] flex items-center justify-center p-6">
        <FadeIn className="text-center max-w-md glass-card p-12 rounded-3xl border border-cyan-500/30">
          <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Audit Requested.</h2>
          <p className="text-[oklch(0.60_0.02_260)] mb-8">
            Our team is analyzing your industry's "Hidden Market" data. We'll reach out within 24 hours to present your Revenue Blueprint.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-cyan-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors">
            ← Back to Vizalliance
          </button>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 pb-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Context & Trust */}
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Request Your <span className="text-gradient-cyan">Engine Audit.</span>
            </h1>
            <p className="text-lg text-[oklch(0.60_0.02_260)] mb-12">
              We'll scan your niche's AI visibility, quantify your hidden intent market, and identify your response-time leaks. No fluff—just data.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Privacy Guaranteed</h4>
                  <p className="text-sm text-[oklch(0.60_0.02_260)]">Your data remains confidential. We only analyze public search signals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Fast-Track Results</h4>
                  <p className="text-sm text-[oklch(0.60_0.02_260)]">Get your industry-specific Revenue Blueprint in less than 24 hours.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: The Form */}
          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 rounded-3xl border border-white/5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Industry / Niche</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 outline-none transition-all appearance-none text-white/60">
                  <option>Home Services (Roofing, HVAC, etc)</option>
                  <option>Legal & Professional Services</option>
                  <option>Coaching & Consulting</option>
                  <option>B2B / SaaS</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Primary Growth Bottleneck</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 outline-none transition-all appearance-none text-white/60">
                  <option>Visibility (People can't find us)</option>
                  <option>Volume (We need more leads)</option>
                  <option>Velocity (We aren't closing fast enough)</option>
                  <option>Efficiency (Ad costs are too high)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Additional Context (Optional)</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 outline-none transition-all" placeholder="Tell us a bit about your current setup..." />
              </div>

              <button type="submit" className="w-full btn-glow py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group">
                Request Audit
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}