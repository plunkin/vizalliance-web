import { Link } from "wouter";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[oklch(0.10_0.02_260)] pt-16">
      
      {/* 1. CTA BANNER - UPDATED TO FAST LANE */}
      <div className="container px-6 mb-20">
        <div className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-fuchsia-500/20 transition-all duration-700"></div>
          
          <div className="text-center lg:text-left relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 font-display text-white">
              Ready to <span className="text-fuchsia-400">Accelerate</span> Your Growth?
            </h3>
            <p className="text-[oklch(0.65_0.02_260)] max-w-lg">
              Skip the line. Book a direct strategy session with our team to map out your custom automated revenue infrastructure.
            </p>
          </div>
          <Link href="/contact?focus=booking" className="btn-glow px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 whitespace-nowrap relative z-10 text-white">
            Book Strategy Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="container px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src="/logo-dark.png" 
                alt="Vizalliance" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-[oklch(0.60_0.02_260)] text-sm leading-relaxed max-w-sm mb-8">
              Engineering autonomous growth. Your vision, our journey—powered by the most advanced automated revenue infrastructure on the market.
            </p>
            
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/40 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wide uppercase font-display">The Engine</h4>
            <ul className="space-y-4 text-sm text-[oklch(0.60_0.02_260)]">
              <li>
                <Link href="/resultreach" className="hover:text-fuchsia-400 transition-colors">ResultReach (Visibility)</Link>
              </li>
              <li>
                <Link href="/revenueready" className="hover:text-fuchsia-400 transition-colors">RevenueReady (Intent)</Link>
              </li>
              <li>
                <Link href="/consultconnect" className="hover:text-fuchsia-400 transition-colors">ConsultConnect (Conversion)</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wide uppercase font-display">Company</h4>
            <ul className="space-y-4 text-sm text-[oklch(0.60_0.02_260)]">
              <li><Link href="/about" className="hover:text-fuchsia-400 transition-colors">Our Story</Link></li>
              <li><Link href="/blog" className="hover:text-fuchsia-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-fuchsia-400 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-fuchsia-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Vizalliance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}