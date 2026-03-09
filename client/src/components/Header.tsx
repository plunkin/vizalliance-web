import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isServicePage = ["/resultreach", "/revenueready", "/consultconnect"].includes(location);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen 
          ? "bg-[oklch(0.12_0.02_260)] py-4" 
          : scrolled
            ? "bg-[oklch(0.12_0.02_260/95%)] backdrop-blur-xl border-b border-[oklch(0.25_0.02_260/60%)] py-2"
            : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 group cursor-pointer relative z-50">
          <img 
            src="/logo-dark.png" 
            alt="Vizalliance" 
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/" ? "text-fuchsia-400" : "text-white/70"}`}>
            Home
          </Link>
          
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/about" ? "text-fuchsia-400" : "text-white/70"}`}>
            About
          </Link>

          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-fuchsia-400 ${isServicePage ? "text-fuchsia-400" : "text-white/70"}`}>
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-56 bg-[oklch(0.12_0.02_260)] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                {[
                  { name: "ResultReach", href: "/resultreach" },
                  { name: "RevenueReady", href: "/revenueready" },
                  { name: "ConsultConnect", href: "/consultconnect" }
                ].map((s) => (
                  <Link key={s.name} href={s.href} className={`block px-4 py-3 rounded-lg text-sm transition-colors hover:bg-white/5 ${location === s.href ? "text-fuchsia-400 bg-fuchsia-400/5" : "text-white/70"}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/blog" ? "text-fuchsia-400" : "text-white/70"}`}>
            Blog
          </Link>

          {/* THE NEW FAST LANE HEADER BUTTON */}
          <Link href="/contact?focus=booking" className="ml-2 px-6 py-3 text-sm font-bold rounded-lg btn-glow border border-white/10 hover:border-fuchsia-500/50 transition-all text-white">
            Book a Call
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-8 h-8 text-fuchsia-400" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[oklch(0.12_0.02_260)] lg:hidden flex flex-col pt-24 px-6 animate-in slide-in-from-right-10 duration-200 overflow-y-auto pb-8">
          <nav className="flex flex-col gap-6 text-lg relative z-50">
            
            <Link href="/" onClick={handleLinkClick} className={`font-medium py-2 border-b border-white/5 ${location === "/" ? "text-fuchsia-400" : "text-white/80"}`}>
              Home
            </Link>
            
            <div className="border-b border-white/5 pb-2">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center justify-between w-full font-medium py-2 ${isServicePage ? "text-fuchsia-400" : "text-white/80"}`}
              >
                Services 
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`flex flex-col gap-3 pl-4 mt-2 overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-60 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                {[
                  { name: "ResultReach (Visibility)", href: "/resultreach" },
                  { name: "RevenueReady (Intent)", href: "/revenueready" },
                  { name: "ConsultConnect (Conversion)", href: "/consultconnect" }
                ].map((s) => (
                  <Link key={s.href} href={s.href} onClick={handleLinkClick} className={`text-base block py-1 ${location === s.href ? "text-fuchsia-400" : "text-white/50"}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" onClick={handleLinkClick} className={`font-medium py-2 border-b border-white/5 ${location === "/about" ? "text-fuchsia-400" : "text-white/80"}`}>
              About
            </Link>

            <Link href="/blog" onClick={handleLinkClick} className={`font-medium py-2 border-b border-white/5 ${location === "/blog" ? "text-fuchsia-400" : "text-white/80"}`}>
              Blog
            </Link>

            {/* THE NEW FAST LANE MOBILE BUTTON */}
            <div className="mt-8">
              <Link href="/contact?focus=booking" onClick={handleLinkClick} className="w-full btn-glow py-4 rounded-xl flex items-center justify-center font-bold text-center text-white">
                Book a Call
              </Link>
            </div>
            
          </nav>
        </div>
      )}
    </header>
  );
}