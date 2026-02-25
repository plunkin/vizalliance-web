import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Zap, ArrowRight, UserX, UserCheck, Mail, Phone, ScanSearch, Fingerprint, Send, Target, Check, Search,
         TrendingDown, TrendingUp, XCircle, CheckCircle2, DollarSign, Eye, Repeat, UserSquare, Crosshair, Code2 } from "lucide-react";

// --- THE FADE-IN HELPER ---
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

export default function RevenueReady() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: THE COPY */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
                  <Zap className="w-3 h-3 fill-current" /> 
                  The Intent Signal
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Stop Paying For 100% of Your Traffic Just to <br className="hidden lg:block"/>
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">
                    Lose 95% of It.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-xl text-[oklch(0.60_0.02_260)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Most of your website visitors leave without ever picking up the phone. RevenueReady captures your invisible, high-intent traffic and turns anonymous researchers into verified leads—instantly.
                </p>
              </FadeIn>
              
              <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 group">
                  Stop Leaking Leads <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: THE VISUAL DEMONSTRATION */}
            <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:ml-auto">
              <FadeIn delay={200} className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
                
                {/* The UI Mockup Graphic */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Live Traffic Capture</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Active
                    </span>
                  </div>

                  {/* Anonymous User Block */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 mb-4 opacity-50 grayscale">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <UserX className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/70">Visitor #8492</p>
                      <p className="text-xs text-white/40 font-mono">Bounced 2 mins ago</p>
                    </div>
                  </div>

                  {/* Resolution Arrow */}
                  <div className="flex justify-center mb-4">
                    <div className="w-px h-8 bg-gradient-to-b from-white/10 to-fuchsia-500/50"></div>
                  </div>

                  {/* Verified Lead Block */}
                  <div className="flex flex-col gap-3 p-5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-fuchsia-400" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-white">Robert Anderson</p>
                        <p className="text-xs text-fuchsia-400 font-mono">High-Intent Match Found</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-3 text-sm text-[oklch(0.70_0.02_260)]">
                        <Mail className="w-4 h-4 text-white/30" /> randerson@example.com
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[oklch(0.70_0.02_260)]">
                        <Phone className="w-4 h-4 text-white/30" /> (555) 019-8422
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
      {/* --- SECTION 2: HOW IT WORKS --- */}
      <section className="py-24 relative overflow-hidden bg-black border-t border-white/5">
        
        {/* Background glow - Increased opacity for better brand color */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-sm font-mono text-fuchsia-400 uppercase tracking-[0.3em] mb-4">The Resolution Process</h2>
            <h3 className="text-3xl lg:text-5xl font-bold font-display">
              Turn Invisible Traffic Into <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Booked Appointments.</span>
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/50 to-fuchsia-500/0 z-0"></div>

            {[
              { 
                step: "01", 
                title: "The Silent Capture", 
                icon: ScanSearch, 
                desc: "We deploy a lightweight pixel on your site that acts as a net, instantly detecting anonymous visitors reading your highest-converting pages." 
              },
              { 
                step: "02", 
                title: "The Identity Match", 
                icon: Fingerprint, 
                desc: "In milliseconds, we safely match their digital footprint against a privacy-compliant network of over 300 million opted-in consumers and businesses." 
              },
              { 
                step: "03", 
                title: "The Instant Delivery", 
                icon: Send, 
                desc: "You receive the verified name, email, and phone number pushed directly to your CRM, allowing your team to reach out before they look at a competitor." 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 150} className="relative z-10 h-full">
                <div className="group glass-card p-8 h-full border border-fuchsia-500/10 hover:border-fuchsia-500/50 transition-all duration-500 bg-[oklch(0.14_0.02_260)/60%] backdrop-blur-xl flex flex-col rounded-2xl">
                  
                  {/* Icon & Step Number */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Fuchsia branded icon box */}
                    <div className="w-14 h-14 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(232,121,249,0.1)]">
                      <item.icon className="w-7 h-7 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors" />
                    </div>
                    {/* Fuchsia tinted step number */}
                    <span className="text-4xl font-mono font-bold text-fuchsia-500/10 group-hover:text-fuchsia-500/20 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-[oklch(0.60_0.02_260)] leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2B: ADVANCED PIXEL INTELLIGENCE (SITE LEADS) --- */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[oklch(0.12_0.02_260)] to-black border-t border-white/5">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: THE PIXEL VISUAL */}
            <div className="relative w-full max-w-lg mx-auto">
              <FadeIn delay={100}>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="glass-card bg-black/80 border border-fuchsia-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <Code2 className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-sm font-mono text-white tracking-widest uppercase">Pixel_Config.js</span>
                    <span className="ml-auto flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                      Live
                    </span>
                  </div>
                  
                  {/* Fake Code Block Visual */}
                  <div className="font-mono text-xs text-[oklch(0.60_0.02_260)] space-y-3">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">pixelTracker</span> = new RevenueReady({`{`}</p>
                    <p className="pl-4">mode: <span className="text-emerald-400">'hyper_targeted'</span>,</p>
                    <p className="pl-4">capture_pages: [<span className="text-emerald-400">'/pricing'</span>, <span className="text-emerald-400">'/consultation'</span>],</p>
                    <p className="pl-4">track_frequency: <span className="text-purple-400">true</span>,</p>
                    <p className="pl-4">unique_visitors_only: <span className="text-purple-400">true</span>,</p>
                    <p className="pl-4">auto_retarget: <span className="text-purple-400">true</span></p>
                    <p>{`}`});</p>
                    <p className="pt-2 border-t border-white/5 mt-4 text-fuchsia-400 animate-pulse">
                      // Tracking initiated...
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: THE COPY & FEATURES */}
            <div className="">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
                  <ScanSearch className="w-3 h-3" /> 
                  Advanced Site Analytics
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-display">
                  Total Control Over <br />
                  <span className="text-fuchsia-400">Who You Capture.</span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-[oklch(0.60_0.02_260)] text-lg mb-10 leading-relaxed">
                  Our identity pixel doesn't just grab names blindly. You can customize exactly how it behaves on your website, ensuring you only spend money capturing the highest-quality, bottom-of-funnel leads.
                </p>
              </FadeIn>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Eye, title: "Targeted Pages", desc: "Deploy the pixel specifically on high-value pages (like Pricing or Contact) to ignore casual browsers and capture serious buyers." },
                  { icon: Repeat, title: "Visit Frequency", desc: "Track exactly how many times a prospect returns to your site. High visit frequency signals massive buying intent." },
                  { icon: UserSquare, title: "Unique Visitors", desc: "Our system filters out the noise, bots, and duplicate traffic to ensure you only capture true, unique individuals." },
                  { icon: Crosshair, title: "Precision Retargeting", desc: "Use your newly captured data to instantly build custom audiences and retarget them across Facebook, Google, or direct mail." }
                ].map((feature, i) => (
                  <FadeIn key={i} delay={300 + (i * 100)}>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-colors h-full">
                      <feature.icon className="w-6 h-6 text-fuchsia-400 mb-4" />
                      <h4 className="text-white font-bold text-base mb-2">{feature.title}</h4>
                      <p className="text-[oklch(0.60_0.02_260)] text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: PRE-TARGETING / SEARCH LEADS --- */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[oklch(0.12_0.02_260)]">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: THE COPY */}
            <div className="order-2 lg:order-1">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
                  <Target className="w-3 h-3" /> 
                  Search-Level Pre-Targeting
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-display">
                  Intercept Buyers <span className="text-fuchsia-400 italic">Before</span> <br />
                  They Click Your Competitor.
                </h2>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-[oklch(0.60_0.02_260)] text-lg mb-10 leading-relaxed max-w-lg">
                  Why wait for a prospect to find your website? We monitor the web for your most valuable keywords—and even your competitors' names. The moment a prospect searches for a solution, we capture their identity so you can reach out first.
                </p>
              </FadeIn>

              <FadeIn delay={300} className="space-y-6">
                {[
                  { title: "Competitor Hijacking", desc: "Target people actively searching for your biggest local competitors by name." },
                  { title: "High-Intent Keywords", desc: "Capture verified leads searching for 'emergency repair' or 'pricing' in your city." },
                  { title: "Skip The Google Tax", desc: "Get the exact lead data directly without paying $20+ for a single PPC ad click." }
                ].map((bullet, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50 transition-colors">
                      <Check className="w-4 h-4 text-white/40 group-hover:text-fuchsia-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">{bullet.title}</h4>
                      <p className="text-[oklch(0.50_0.02_260)] text-sm">{bullet.desc}</p>
                    </div>
                  </div>
                ))}
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: THE SEARCH BAR VISUAL */}
            <div className="order-1 lg:order-2 relative w-full max-w-lg mx-auto">
              <FadeIn delay={200}>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative flex flex-col gap-6">
                  
                  {/* The Search Engine Mockup */}
                  <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-3 bg-black/50 border border-white/10 rounded-xl mb-4">
                      <Search className="w-5 h-5 text-white/40" />
                      <div className="text-sm font-mono text-white/80 border-r-2 border-fuchsia-400 animate-[pulse_1s_infinite] pr-1">
                        "best local emergency hvac repair"
                      </div>
                    </div>
                    
                    {/* Fake Search Results - Greyed out */}
                    <div className="space-y-4 opacity-30 grayscale pointer-events-none px-2 pb-2">
                      <div>
                        <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                      </div>
                      <div>
                        <div className="w-2/3 h-3 bg-white/20 rounded mb-2"></div>
                        <div className="w-4/5 h-2 bg-white/10 rounded"></div>
                      </div>
                    </div>

                    {/* The Intercept Overlay */}
                    <div className="absolute inset-0 bg-fuchsia-900/20 backdrop-blur-[2px] flex items-center justify-center">
                       <div className="bg-black/90 border border-fuchsia-500/50 text-fuchsia-400 px-4 py-2 rounded-full font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(232,121,249,0.3)]">
                         <Target className="w-4 h-4" /> Target Identified
                       </div>
                    </div>
                  </div>

                  {/* Delivery Notification Mockup */}
                  <div className="ml-auto w-4/5 glass-card bg-black border border-fuchsia-500/30 rounded-2xl p-4 shadow-2xl flex items-start gap-4 transform translate-y-[-20px] relative z-20">
                     <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                       <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-white mb-1">Lead Synced to CRM</p>
                       <p className="text-xs text-[oklch(0.60_0.02_260)] mb-2">Search Match: "Emergency HVAC"</p>
                       <div className="inline-block px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-white/50">
                         Initiating ConsultConnect...
                       </div>
                     </div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
      {/* --- SECTION 4: ROI & PRICING --- */}
      <section className="py-24 relative overflow-hidden bg-[oklch(0.12_0.02_260)] border-t border-white/5">
        <div className="container relative z-10 mx-auto px-6">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-mono text-fuchsia-400 uppercase tracking-[0.3em] mb-4">The Math is Simple</h2>
            <h3 className="text-3xl lg:text-5xl font-bold font-display mb-6">
              Stop Paying the <span className="text-red-400 line-through decoration-red-500/50">Google Tax.</span>
            </h3>
            <p className="text-[oklch(0.60_0.02_260)] max-w-2xl mx-auto text-lg">
              Traditional PPC forces you to pay for expensive clicks that bounce. RevenueReady allows you to bypass the click entirely and just buy the lead.
            </p>
          </FadeIn>

          {/* --- ROI COMPARISON GRID --- */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
            
            {/* The Old Way (PPC) */}
            <FadeIn delay={100}>
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5 relative overflow-hidden h-full">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                  <h4 className="text-xl font-bold text-white">Traditional Ads</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Pay $15 - $50+ per single click",
                    "Average 95% bounce rate (Lost money)",
                    "Wait days for a form fill",
                    "Compete in bidding wars with rivals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[oklch(0.70_0.02_260)]">
                      <XCircle className="w-5 h-5 text-red-400/50 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-red-500/20">
                  <p className="text-sm text-red-400 font-mono uppercase tracking-wider mb-1">Average Cost Per Lead</p>
                  <p className="text-3xl font-bold text-white">$150 - $300+</p>
                </div>
              </div>
            </FadeIn>

            {/* The RevenueReady Way */}
            <FadeIn delay={200}>
              <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 relative overflow-hidden h-full transform md:-translate-y-4 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  The Unfair Advantage
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                  <h4 className="text-xl font-bold text-white">RevenueReady</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Pay $0 for clicks",
                    "Capture up to 40% of abandoning visitors",
                    "Get instant delivery to your CRM",
                    "Intercept competitors' traffic directly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-emerald-500/30">
                  <p className="text-sm text-emerald-400 font-mono uppercase tracking-wider mb-1">Average Cost Per Lead</p>
                  <p className="text-3xl font-bold text-white">As low as $2.00</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* --- PRICING TIERS --- */}
          <FadeIn delay={300}>
             <div className="text-center mb-12">
               <h3 className="text-2xl font-bold font-display">Choose Your Resolution Engine</h3>
             </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Tier 1: Site Leads */}
            <FadeIn delay={400}>
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/30 transition-all bg-black flex flex-col h-full">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2">Site Resolution</h4>
                  <p className="text-sm text-[oklch(0.60_0.02_260)]">Perfect for businesses with existing website traffic that isn't converting.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold">$497</span>
                  <span className="text-[oklch(0.50_0.02_260)]">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Capture up to 500 site leads", "Name, Email & Phone matching", "Real-time CRM integration", "Dedicated tracking pixel"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[oklch(0.80_0.02_260)]">
                      <Zap className="w-4 h-4 text-fuchsia-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold text-center transition-all">
                  Start Capturing Traffic
                </Link>
              </div>
            </FadeIn>

            {/* Tier 2: Search Leads (Premium) */}
            <FadeIn delay={500}>
              <div className="glass-card p-8 rounded-2xl border border-fuchsia-500/50 bg-fuchsia-500/5 relative flex flex-col h-full shadow-[0_0_30px_rgba(232,121,249,0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fuchsia-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Market Dominator
                </div>
                <div className="mb-6 mt-2">
                  <h4 className="text-2xl font-bold mb-2">Search Interception</h4>
                  <p className="text-sm text-[oklch(0.60_0.02_260)]">Aggressive growth for businesses that want to hijack competitor traffic.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold">$997</span>
                  <span className="text-[oklch(0.50_0.02_260)]">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Everything in Site Resolution", "Intercept up to 1,000 search leads", "Track up to 10 competitor names", "Custom high-intent keywords"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white">
                      <Target className="w-4 h-4 text-fuchsia-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-glow w-full py-4 rounded-xl font-bold text-center transition-all shadow-[0_0_20px_rgba(232,121,249,0.4)]">
                  Start Intercepting Buyers
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        {/* Massive Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
              <Zap className="w-3 h-3 fill-current" /> 
              Deploy RevenueReady
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight">
              Ready to Claim Your <br />
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">
                Unfair Advantage?
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-xl text-[oklch(0.60_0.02_260)] mb-12 leading-relaxed">
              Every day you wait is another day you pay for traffic that leaves without calling. Get a free, customized intent audit and find out exactly how many hidden buyers are on your site right now.
            </p>
          </FadeIn>

          <FadeIn delay={300} className="flex flex-col items-center">
            <Link href="/contact" className="btn-glow px-12 py-6 rounded-2xl font-bold text-xl flex items-center gap-3 group shadow-[0_0_30px_rgba(232,121,249,0.3)] hover:shadow-[0_0_50px_rgba(232,121,249,0.5)] transition-all">
              Reveal My Hidden Buyers
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-6 text-sm font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free 15-Minute Audit • Setup in 48 Hours
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}