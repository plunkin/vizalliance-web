import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { 
  Send, CheckCircle2, ShieldCheck, Zap, 
  Mail, Phone, MapPin, Linkedin, Twitter, MessageSquare 
} from "lucide-react";
import { toast } from "sonner";

// Inline FadeIn Helper (Guarantees this file works standalone)
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

const contactMethods = [
  { icon: Mail, label: "Email", value: "lvh@vizalliance.com", href: "mailto:lvh@vizalliance.com" },
  { icon: Phone, label: "Phone", value: "+1 (480) 577-7194", href: "tel:+14805777194" }, // Update with real number
  { icon: MapPin, label: "HQ", value: "Gilbert, AZ", href: "#" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Audit Request Received! We'll be in touch shortly.");
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[oklch(0.12_0.02_260)] flex items-center justify-center p-6">
        <FadeIn className="text-center max-w-md glass-card p-12 rounded-3xl border border-fuchsia-500/30">
          <CheckCircle2 className="w-16 h-16 text-fuchsia-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Audit Requested.</h2>
          <p className="text-[oklch(0.60_0.02_260)] mb-8">
            Our team is analyzing your industry's "Hidden Market" data. We'll reach out within 24 hours to present your Revenue Blueprint.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-fuchsia-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors">
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
          
          {/* LEFT SIDE: Context & Contact Info */}
          <div>
            <FadeIn>
              <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Request Your <span className="text-gradient-cyan">Engine Audit.</span>
              </h1>
              <p className="text-lg text-[oklch(0.60_0.02_260)] mb-12">
                We'll scan your niche's AI visibility, quantify your hidden intent market, and identify your response-time leaks. No fluff—just data.
              </p>
              
              <div className="space-y-8 mb-16">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                    <ShieldCheck className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Privacy Guaranteed</h4>
                    <p className="text-sm text-[oklch(0.60_0.02_260)]">Your data remains confidential. We only analyze public search signals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                    <Zap className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Fast-Track Results</h4>
                    <p className="text-sm text-[oklch(0.60_0.02_260)]">Get your industry-specific Revenue Blueprint in less than 24 hours.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* General Contact Info */}
            <FadeIn delay={200}>
              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold mb-6">General Inquiries</h3>
                <div className="space-y-5">
                  {contactMethods.map((method) => (
                    <a key={method.label} href={method.href} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-fuchsia-500/20 transition-colors">
                        <method.icon className="w-4 h-4 text-white/60 group-hover:text-fuchsia-400" />
                      </div>
                      <span className="text-sm text-[oklch(0.60_0.02_260)] group-hover:text-white transition-colors">
                        {method.value}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                  {[Linkedin, Twitter, MessageSquare].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/40 transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: The Audit Form */}
          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 rounded-3xl border border-white/5 space-y-6 sticky top-32">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-fuchsia-500/50 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40">Work Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-fuchsia-500/50 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Industry / Niche</label>
                <div className="relative">
                  <select className="w-full bg-[oklch(0.16_0.02_260)] border border-white/10 rounded-xl px-4 py-3 focus:border-fuchsia-500/50 outline-none transition-all appearance-none text-white/80 cursor-pointer">
                    <option>Home Services (Roofing, HVAC, etc)</option>
                    <option>Legal & Professional Services</option>
                    <option>Coaching & Consulting</option>
                    <option>B2B / SaaS</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Primary Growth Bottleneck</label>
                <div className="relative">
                  <select className="w-full bg-[oklch(0.16_0.02_260)] border border-white/10 rounded-xl px-4 py-3 focus:border-fuchsia-500/50 outline-none transition-all appearance-none text-white/80 cursor-pointer">
                    <option>Visibility (People can't find us)</option>
                    <option>Volume (We need more leads)</option>
                    <option>Velocity (We aren't closing fast enough)</option>
                    <option>Efficiency (Ad costs are too high)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Additional Context (Optional)</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-fuchsia-500/50 outline-none transition-all" placeholder="Tell us a bit about your current setup..." />
              </div>

              <button type="submit" className="w-full btn-glow py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group">
                Request Audit
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-white/30 pt-2">
                Have a general question? <a href="mailto:lvh@vizalliance.com" className="text-fuchsia-400 hover:underline">Email us instead.</a>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}