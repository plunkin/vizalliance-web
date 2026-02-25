import { Link } from "wouter";
import { Zap, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.02_260)] border-t border-white/5 pt-20 pb-10">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold tracking-tighter uppercase font-display">Vizalliance</span>
            </Link>
            <p className="text-[oklch(0.60_0.02_260)] max-w-sm leading-relaxed">
              Engineering autonomous growth. Your vision, our journey—powered by the most advanced AI revenue infrastructure on the market.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">The Engine</h4>
            <ul className="space-y-4 text-sm text-[oklch(0.60_0.02_260)]">
              <li><Link href="/resultreach" className="hover:text-cyan-400">ResultReach (Visibility)</Link></li>
              <li><Link href="/revenueready" className="hover:text-cyan-400">RevenueReady (Intent)</Link></li>
              <li><Link href="/consultconnect" className="hover:text-cyan-400">ConsultConnect (Conversion)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-[oklch(0.60_0.02_260)]">
              <li><Link href="/about" className="hover:text-cyan-400">Our Story</Link></li>
              <li><Link href="/faq" className="hover:text-cyan-400">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400">Get an Audit</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest font-mono">
          <p>© 2026 Vizalliance. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}