import { Link } from "wouter";
import { 
  Zap, 
  Target, 
  PhoneCall, 
  ArrowRight,
  Rocket,
  Scale,
  Wrench,
  Shield,
  Share2,
  Cloud,
  LayoutTemplate,
  CreditCard
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- 1. THE FADE-IN HELPER ---
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

// --- 2. OUR AVATAR DATA (UPDATED WITH NEW IMAGES) ---
const targetNiches = [
  {
    name: "Roofers",
    image: "image_6.png", 
  },
  {
    name: "HVAC Pros",
    image: "image_7.png", 
  },
  {
    name: "Lawyers",
    image: "image_8.png", 
  },
  {
    name: "Consultants",
    image: "image_9.png", 
  }
];

// --- 3. OUR INTEGRATIONS DATA ---
const integrations = [
  { name: "HighLevel", icon: Rocket },
  { name: "Clio", icon: Scale },
  { name: "Jobber", icon: Wrench },
  { name: "ServiceTitan", icon: Shield },
  { name: "HubSpot", icon: Share2 },
  { name: "Salesforce", icon: Cloud },
  { name: "Zapier", icon: Zap },
  { name: "WordPress", icon: LayoutTemplate },
  { name: "Stripe", icon: CreditCard },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync Timer: Swaps the text and image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % targetNiches.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  // ... inside export default function Home() { ...

  // SEO: Dynamically update Title and Meta Description
  useEffect(() => {
    // 1. Set the Title
    document.title = "Vizalliance | Automated Growth Engine for Service Pros";

    // 2. Set or Create the Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute(
      'content', 
      'Vizalliance is the automated growth system for service professionals. Capture missed calls, uncover hidden leads, and fill your calendar 24/7 without lifting a finger.'
    );
  }, []);

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="text-center lg:text-left order-2 lg:order-1">
             <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-mono mb-6">
                  <Zap className="w-3 h-3 fill-current" /> 
                  Automated Growth For Service Pros
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
                  The Automated Growth Engine That <br />
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">
                    Fills Your Calendar.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-xl text-[oklch(0.60_0.02_260)] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed min-h-[84px] sm:min-h-0">
                  We help <span className="font-bold text-fuchsia-400 transition-all duration-300 px-1 border-b border-fuchsia-500/30 bg-fuchsia-500/10 rounded">{targetNiches[activeIndex].name}</span> dominate modern search, capture missed calls instantly, and book appointments while you sleep.
                </p>
              </FadeIn>
              
              <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2">
                  See How It Works <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all">
                  View Success Stories
                </button>
              </FadeIn>
            </div>

            <FadeIn delay={0} className="relative order-1 lg:order-2 w-4/5 mx-auto lg:w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
              
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(232,121,249,0.15)] animate-float bg-black">
                 {targetNiches.map((niche, i) => (
                   <img 
                     key={niche.name}
                     src={niche.image} 
                     alt={`${niche.name} looking for solutions`}
                     className={`absolute inset-0 w-full h-full object-cover mix-blend-luminosity transition-opacity duration-1000 ease-in-out
                       ${i === activeIndex ? "opacity-80 hover:opacity-100 hover:mix-blend-normal z-10" : "opacity-0 z-0"}
                     `}
                   />
                 ))}
                 <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_260)] via-transparent to-transparent z-20 pointer-events-none"></div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE REVENUE ENGINE SUMMARY --- */}
      <section className="py-24 relative overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* THE LOCAL AI IMAGE */}
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/pillars-cyber.png')` }}
          ></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.02_260)] via-transparent to-[oklch(0.08_0.02_260)]"></div>
        </div>

        <div className="container relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-sm font-mono text-[oklch(0.40_0.02_260)] uppercase tracking-[0.3em] mb-4">The Vizalliance System</h2>
            <h3 className="text-3xl lg:text-5xl font-bold">Three Pillars. One <span className="text-fuchsia-400">Revenue Engine.</span></h3>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

            {[
              { step: "01", name: "ResultReach", icon: Target, tagline: "The Discovery Engine", desc: "Dominate modern search platforms and build authority exactly where your ideal clients are looking.", link: "/resultreach" },
              { step: "02", name: "RevenueReady", icon: Zap, tagline: "The Intent Signal", desc: "Uncover the hidden 56% of your market currently researching your solutions in silence.", link: "/revenueready" },
              { step: "03", name: "ConsultConnect", icon: PhoneCall, tagline: "The Closer", desc: "An automated first-responder that answers in under 10 seconds to qualify and book your leads, 24/7.", link: "/consultconnect" }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 150} className="relative z-10 h-full">
                <div className="group glass-card p-10 h-full border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 bg-[oklch(0.14_0.02_260)/70%] backdrop-blur-xl flex flex-col shadow-2xl">
                  <div className="text-4xl font-mono text-white/5 mb-6 group-hover:text-fuchsia-500/20 transition-colors">{pillar.step}</div>
                  <pillar.icon className="w-10 h-10 text-fuchsia-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-2">{pillar.name}</h4>
                  <p className="text-fuchsia-400/80 text-xs font-mono uppercase tracking-widest mb-4">{pillar.tagline}</p>
                  <p className="text-[oklch(0.60_0.02_260)] text-sm leading-relaxed mb-8 flex-grow">{pillar.desc}</p>
                  <Link href={pillar.link} className="inline-flex items-center gap-2 text-sm font-bold group-hover:text-fuchsia-400 transition-colors mt-auto">
                    Explore Component <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MODULAR CHOICE --- */}
      <section className="py-24 bg-gradient-to-b from-[oklch(0.08_0.02_260)] to-[oklch(0.12_0.02_260)]">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Precision Deployment</h2>
            <p className="text-[oklch(0.60_0.02_260)] max-w-xl mx-auto">
              Each Vizalliance pillar is a standalone powerhouse. Deploy a single module to solve a specific bottleneck, or link them for total market dominance.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Immediate Visibility", focus: "Best for: Brand Authority", service: "ResultReach", cta: "Fix My Visibility", benefit: "Get cited by modern search platforms and own your niche's narrative." },
              { title: "Lead Intelligence", focus: "Best for: Sales Teams", service: "RevenueReady", cta: "Uncover My Leads", benefit: "Identify anonymous researchers and triple your prospect volume." },
              { title: "Instant Response", focus: "Best for: High-Volume Ops", service: "ConsultConnect", cta: "Activate 24/7 Voice", benefit: "Never miss another lead with instant, 24/7 automated voice qualification." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} className="h-full">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col h-full hover:border-fuchsia-500/30 transition-colors">
                  <span className="text-fuchsia-400 font-mono text-xs uppercase tracking-tighter mb-2">{item.focus}</span>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-sm text-[oklch(0.60_0.02_260)] mb-8 flex-grow">{item.benefit}</p>
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <p className="text-xs text-white/40 mb-4 italic text-center">Powered by {item.service}</p>
                    <Link href={`/${item.service.toLowerCase()}`} className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center font-bold transition-all hover:text-fuchsia-400 hover:border-fuchsia-500/50">
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: INTEGRATIONS WALL --- */}
      <section className="py-24 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Plugs into your <span className="text-fuchsia-400">Existing Stack.</span></h2>
              <p className="text-[oklch(0.60_0.02_260)] mb-8 leading-relaxed">
                Whether you're a law firm using Clio, a contractor using Jobber, or an agency running on GoHighLevel—Vizalliance integrates seamlessly. No new software to learn. Just better results.
              </p>
              <div className="flex flex-wrap gap-4">
                {["CRM Sync", "Instant Webhooks", "API Access", "Email Automation"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/40">{tag}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                
                {/* THE NEW LOGO GRID */}
                {integrations.map((app) => (
                  <div 
                    key={app.name} 
                    className="aspect-video bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 p-4 hover:bg-white/10 hover:border-fuchsia-500/30 transition-all cursor-default group/logo"
                  >
                    <app.icon className="w-8 h-8 text-white/70 group-hover/logo:text-fuchsia-400 transition-colors" strokeWidth={1.5} />
                    <span className="text-xs font-bold text-white/50 group-hover/logo:text-white transition-colors tracking-wide">
                      {app.name}
                    </span>
                  </div>
                ))}

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Is Your Revenue Engine <br />
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Leaking?</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-[oklch(0.60_0.02_260)] mb-12">
              Most businesses lose over half their potential leads to invisibility and slow response times. Get a free, industry-specific **Revenue Audit** and see exactly where your gaps are.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="flex flex-col items-center">
            <Link href="/contact" className="btn-glow px-12 py-6 rounded-2xl font-bold text-xl flex items-center gap-3 group">
              Claim My Free Engine Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-6 text-sm font-mono text-white/30 uppercase tracking-widest">
              Customized for your niche • 15-minute walkthrough
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}