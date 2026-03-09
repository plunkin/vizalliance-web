import { Link } from "wouter";
import { 
  PhoneCall, Zap, ShieldCheck, UserCheck, 
  MessageSquare, Calendar, Play, Clock, 
  AlertTriangle, CheckCircle2, XCircle, Volume2, Smartphone, ArrowRight, Mic, PhoneIncoming
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- 1. FADE-IN HELPER ---
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

// --- 2. CALCULATOR COMPONENT ---
function ResponseCalculator() {
  const [minutes, setMinutes] = useState(30);
  const survivalRate = Math.max(0, Math.round(100 * Math.pow(0.9, minutes))); 
  
  const isSafe = minutes <= 5;
  const isWarning = minutes > 5 && minutes <= 20;
  const isCritical = minutes > 20;

  let colorClass = "text-fuchsia-400";
  let statusText = "Optimal Response";
  
  if (isWarning) {
    colorClass = "text-orange-400";
    statusText = "Lead Decay Started";
  } else if (isCritical) {
    colorClass = "text-red-500";
    statusText = "Critical Revenue Loss";
  }

  return (
    <div className={`glass-card p-8 rounded-2xl border transition-colors duration-500 ${isCritical ? "border-red-500/30 bg-red-900/5" : "border-fuchsia-500/30"}`}>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-bold text-white text-lg">Response Time Simulator</h3>
          <p className="text-sm text-white/60">Drag to see how delay kills opportunity.</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${isCritical ? "border-red-500/50 bg-red-500/10 text-red-400" : "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-400"}`}>
          {statusText}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Response Time</p>
          <p className="text-3xl font-mono font-bold text-white">{minutes} <span className="text-sm text-white/40">min</span></p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Lead Survival</p>
          <p className={`text-3xl font-mono font-bold transition-colors duration-300 ${colorClass}`}>
            {survivalRate}%
          </p>
        </div>
      </div>

      <div className="mb-2">
        <input
          type="range"
          min="1"
          max="60"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
          style={{
            background: `linear-gradient(to right, ${isCritical ? '#ef4444' : '#d946ef'} 0%, ${isCritical ? '#ef4444' : '#d946ef'} ${(minutes / 60) * 100}%, rgba(255,255,255,0.1) ${(minutes / 60) * 100}%, rgba(255,255,255,0.1) 100%)`
          }}
        />
        <div className="flex justify-between mt-2 text-xs font-mono text-white/30 uppercase tracking-wider">
          <span>1 Min (Instant)</span>
          <span>30 Min</span>
          <span>60 Min (Cold)</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        {isSafe ? (
          <div className="flex items-center gap-3 text-fuchsia-400 text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p><strong>Excellent.</strong> You are 21x more likely to qualify this lead than waiting 30 mins.</p>
          </div>
        ) : isCritical ? (
          <div className="flex items-center gap-3 text-red-400 text-sm">
            <XCircle className="w-5 h-5 shrink-0" />
            <p><strong>Opportunity Lost.</strong> The lead has likely moved to a competitor or lost interest.</p>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-orange-400 text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <p><strong>Caution.</strong> Interest is fading rapidly. Qualification rates drop 4x after 10 mins.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- 3. MAIN PAGE COMPONENT ---
export default function ConsultConnect() {
  const [showNumber, setShowNumber] = useState(false);

  const handleLiveDemoClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "tel:+14804076234";
    } else {
      setShowNumber(true);
    }
  };

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen overflow-x-hidden">
      
      {/* --- NEW HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: THE COPY */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
                  <PhoneCall className="w-3 h-3 fill-current" /> 
                  The Conversion Engine
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  The 24/7 Automated Front Desk That <br className="hidden lg:block"/>
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">
                    Never Misses a Deal.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-xl text-[oklch(0.60_0.02_260)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Stop losing five-figure jobs to voicemail. ConsultConnect answers every inbound call instantly, qualifies the prospect, and books the appointment directly into your calendar—day or night.
                </p>
              </FadeIn>
              
              <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact?focus=automation" className="btn-glow px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 group">
                  Automate My Inbound Calls <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact?focus=booking" className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all text-white flex items-center justify-center">
                  Book a Call
                </Link>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: THE VISUAL DEMONSTRATION */}
            <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:ml-auto">
              <FadeIn delay={200} className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-500/30 to-purple-500/30 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>
                
                {/* The UI Mockup Graphic */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  
                  {/* Top Bar - Call Status */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <span className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider">
                      <PhoneIncoming className="w-4 h-4 text-fuchsia-400" /> Inbound Call
                    </span>
                    <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                      <Mic className="w-3 h-3 animate-pulse" /> Connected: 0.4s
                    </span>
                  </div>

                  {/* Audio Waveform Simulation */}
                  <div className="flex items-center justify-center gap-1 h-12 mb-6 opacity-80">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-fuchsia-400 rounded-full animate-pulse" 
                        style={{ 
                          height: `${Math.max(20, Math.random() * 100)}%`,
                          animationDelay: `${i * 0.1}s` 
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Live Transcription Simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 w-5/6">
                      <p className="text-xs text-white/40 font-mono mb-1">Caller (Unknown)</p>
                      <p className="text-sm text-white/90">"Hi, my AC just went out and it's 90 degrees. Can someone come out today?"</p>
                    </div>
                    <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-3 w-5/6 ml-auto">
                      <p className="text-xs text-fuchsia-400 font-mono mb-1">ConsultConnect</p>
                      <p className="text-sm text-white/90">"I can absolutely help with that emergency. Let me get a technician scheduled for you. What is your zip code?"</p>
                    </div>
                  </div>

                  {/* Calendar Resolution Action */}
                  <div className="border-t border-white/5 pt-4 mt-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                        <div>
                          <p className="text-sm font-bold text-white">Emergency Dispatch</p>
                          <p className="text-xs text-emerald-400 font-mono">Today @ 2:30 PM</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* THE DECAY SECTION */}
      <section className="py-24 bg-[oklch(0.14_0.02_260)]">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* LEFT SIDE: The Data/Chart */}
             <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">The 10-Minute Decay 📉</h2>
              <p className="text-[oklch(0.60_0.02_260)] mb-10">
                Speed isn't just a "nice to have"—it's the single biggest predictor of whether you close a deal. Whether during business hours or overnight, every minute of silence costs you money.
              </p>
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-fuchsia-400"><Zap className="w-4 h-4 inline mr-2"/> 5 Minutes (Peak Intent)</span>
                    <span className="text-white">90% Qualification Rate</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-fuchsia-400 w-[90%] shadow-[0_0_15px_rgba(232,121,249,0.5)]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-white/60"><Clock className="w-4 h-4 inline mr-2"/> 10 Minutes</span>
                    <span className="text-white/60">40% Qualification Rate</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-white/20 w-[40%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-red-400"><AlertTriangle className="w-4 h-4 inline mr-2"/> 30+ Minutes (Cold)</span>
                    <span className="text-red-400">5% Qualification Rate</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[5%] shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 italic">
                    *Based on industry response data. The odds of qualifying a lead decrease by 400% if you wait just 10 minutes.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* RIGHT SIDE: Interactive Calculator */}
            <FadeIn delay={200}>
              <ResponseCalculator />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- VIDEO DEMO SECTION --- */}
      <section className="py-24 relative overflow-hidden border-t border-white/5 border-b">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
              <Volume2 className="w-3 h-3" /> Sound On
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience the <span className="text-fuchsia-400">Human-Level</span> Connection.
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-2xl mx-auto mb-12">
              Real-time latency. Zero robotic pauses. Watch a live recording of ConsultConnect qualifying an impatient lead and booking the appointment in under 60 seconds.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative group mx-auto max-w-4xl">
              <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-fuchsia-500/30 transition-all duration-500 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-black"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(232,121,249,0.2)]">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                  <p className="font-mono text-sm text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">
                    Watch Demo Reel
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- LIVE EXPERIENCE CTA --- */}
      <section className="py-20 bg-[oklch(0.14_0.02_260)] border-b border-white/5">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Don't Believe the Video?</h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg mb-8">
              Call our live demo responder right now. Ask it about pricing, services, or try to confuse it. It's ready 24/7.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              {!showNumber ? (
                <button 
                  onClick={handleLiveDemoClick}
                  className="btn-glow px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 animate-pulse-glow"
                >
                  <PhoneCall className="w-6 h-6" /> Test Live Responder
                </button>
              ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                  <div className="p-6 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/50 flex flex-col items-center gap-2">
                    <p className="text-sm font-mono uppercase tracking-widest text-fuchsia-300">Dial this number</p>
                    <a href="tel:+14804076234" className="text-3xl md:text-5xl font-bold text-white hover:text-fuchsia-400 transition-colors font-display">
                      +1 (480) 407-6234
                    </a>
                    <p className="text-sm text-white/40 mt-2 flex items-center gap-2">
                      <Smartphone className="w-4 h-4" /> Works best on speakerphone
                    </p>
                  </div>
                </div>
              )}
              
              <p className="text-xs text-white/30 italic">
                *Standard carrier rates apply. The agent is trained on Vizalliance services.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section className="py-24">
        <div className="container px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Empathy at Scale 🎭</h2>
            <p className="text-[oklch(0.60_0.02_260)]">Linguistic mimicry that sounds like your best employee—not a robot.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "Brand Voice Mirror", desc: "Adopts your specific tone, whether professional, friendly, or technical." },
              { icon: UserCheck, title: "Linguistic Mimicry", desc: "Uses industry jargon and regional nuances to build instant rapport." },
              { icon: ShieldCheck, title: "Strict Script Adherence", desc: "Strictly follows your Knowledge Base. No wrong answers. Ever." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="glass-card p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/30 transition-all">
                <item.icon className="w-10 h-10 text-fuchsia-400 mb-6" />
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-[oklch(0.60_0.02_260)] leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLOW */}
      <section className="py-24 bg-[oklch(0.14_0.02_260)]">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Your 24/7 Automated Solution Center 🛠️</h2>
              <p className="text-[oklch(0.60_0.02_260)]">While you're in a meeting or fast asleep, your business is still answering calls, triaging emergencies, and booking solutions.</p>
            </FadeIn>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-8 before:bottom-8 before:w-px before:bg-gradient-to-b from-fuchsia-500/50 to-transparent">
              {[
                { step: "1", title: "The Midnight Emergency", desc: "A prospect visits your website at 2 AM with an urgent problem and dials your phone number." },
                { step: "2", title: "The Instant Answer", desc: "ConsultConnect picks up on the very first ring. No holding, no frustrating phone trees, and zero voicemails." },
                { step: "3", title: "Automated Pre-Qualification", desc: "The system engages in natural conversation, asking targeted discovery questions to confirm they are a high-value fit." },
                { step: "4", title: "Confirmed Booking", desc: "You wake up to a fully vetted, booked appointment on your calendar. Solution scheduled." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 100} className="flex gap-8 items-start pl-2 relative">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.12_0.02_260)] border border-fuchsia-500 text-fuchsia-400 flex items-center justify-center font-bold shrink-0 z-10 shadow-[0_0_10px_rgba(232,121,249,0.2)]">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[oklch(0.60_0.02_260)] text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32">
        <div className="container px-6 text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Stop Losing Leads to the Clock. ⏱️</h2>
            <p className="text-[oklch(0.60_0.02_260)] mb-10">
              Deploy your automated front desk today and turn every inquiry into an immediate opportunity.
            </p>
            <div className="flex flex-col items-center gap-5 mt-4">
              <Link href="/contact?focus=automation" className="btn-glow px-12 py-6 rounded-xl font-bold text-lg inline-flex items-center gap-3">
                Book Your Velocity Audit <Calendar className="w-5 h-5" />
              </Link>
              <Link href="/contact?focus=booking" className="text-sm text-[oklch(0.60_0.02_260)] hover:text-white transition-colors underline decoration-white/20 hover:decoration-white">
                Ready to deploy? Skip the audit and book a strategy session.
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}