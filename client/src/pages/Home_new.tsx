{/* --- MODULAR CHOICE SECTION --- */}
<section className="py-24 bg-gradient-to-b from-[oklch(0.12_0.02_260)] to-[oklch(0.08_0.02_260)]">
  <div className="container">
    <FadeIn className="text-center mb-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Precision Deployment</h2>
      <p className="text-[oklch(0.60_0.02_260)] max-w-xl mx-auto">
        Each Aetheris pillar is a standalone powerhouse. Deploy a single module to solve a specific bottleneck, or link them for total market dominance.
      </p>
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Immediate Visibility",
          focus: "Best for: Brand Authority",
          service: "ResultReach",
          cta: "Fix My Visibility",
          benefit: "Get cited by AI search engines and own your niche's narrative."
        },
        {
          title: "Lead Intelligence",
          focus: "Best for: Sales Teams",
          service: "RevenueReady",
          cta: "Uncover My Leads",
          benefit: "Identify anonymous researchers and triple your prospect volume."
        },
        {
          title: "Instant Response",
          focus: "Best for: High-Volume Ops",
          service: "ConsultConnect",
          cta: "Activate 24/7 Voice",
          benefit: "Never miss another lead with 10-second AI voice qualification."
        }
      ].map((item, i) => (
        <FadeIn key={i} delay={i * 100}>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col h-full">
            <span className="text-[oklch(0.82_0.15_195)] font-mono text-xs uppercase tracking-tighter mb-2">{item.focus}</span>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-sm text-[oklch(0.60_0.02_260)] mb-8 flex-grow">
              {item.benefit}
            </p>
            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-white/40 mb-4 italic text-center">Powered by {item.service}</p>
              <Link href={item.service.toLowerCase()} className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center font-bold transition-all">
                {item.cta}
              </Link>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
</section>

{/* --- INTEGRATIONS WALL --- */}
<section className="py-24 border-t border-white/5">
  <div className="container">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">Plugs into your <span className="text-gradient-cyan">Existing Stack.</span></h2>
        <p className="text-[oklch(0.60_0.02_260)] mb-8 leading-relaxed">
          Whether you're a law firm using Clio, a contractor using Jobber, or an agency running on GoHighLevel—Vizalliance integrates seamlessly. No new software to learn. Just better results.
        </p>
        <div className="flex flex-wrap gap-4">
          {["CRM Sync", "Instant Webhooks", "API Access", "Email Automation"].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/40">
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {/* You can replace these with actual SVGs later */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-default">
              <div className="w-full h-2 bg-white/10 rounded-full"></div> {/* Placeholder for Logo */}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
</section>