import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  // 1. Detect scrolling for the sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. NEW: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup function just in case the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // 3. Close mobile menu when route changes
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
          ? "bg-[oklch(0.12_0.02_260)] py-4" // Solid background when menu is open
          : scrolled
            ? "bg-[oklch(0.12_0.02_260/95%)] backdrop-blur-xl border-b border-[oklch(0.25_0.02_260/60%)] py-2"
            : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        
        {/* LOGO IMAGE */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 group cursor-pointer relative z-50">
          <img 
            src="/logo-dark.png" 
            alt="Vizalliance" 
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/">
            <a className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/" ? "text-fuchsia-400" : "text-white/70"}`}>
              Home
            </a>
          </Link>
          
          <Link href="/about">
            <a className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/about" ? "text-fuchsia-400" : "text-white/70"}`}>
              About
            </a>
          </Link>

          {/* SERVICES DROPDOWN */}
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
                  <Link key={s.name} href={s.href}>
                    <a className={`block px-4 py-3 rounded-lg text-sm transition-colors hover:bg-white/5 ${location === s.href ? "text-fuchsia-400 bg-fuchsia-400/5" : "text-white/70"}`}>
                      {s.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog">
            <a className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/blog" ? "text-fuchsia-400" : "text-white/70"}`}>
              Blog
            </a>
          </Link>

          <Link href="/contact">
            <a className={`text-sm font-medium transition-colors hover:text-fuchsia-400 ${location === "/contact" ? "text-fuchsia-400" : "text-white/70"}`}>
              Contact
            </a>
          </Link>

          <Link href="/contact" className="ml-2 px-6 py-3 text-sm font-bold rounded-lg btn-glow border border-white/10 hover:border-fuchsia-500/50 transition-all">
            Engine Audit
          </Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-8 h-8 text-fuchsia-400" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[oklch(0.12_0.02_260)] lg:hidden flex flex-col pt-24 px-6 animate-in slide-in-from-right-10 duration-200 overflow-y-auto pb-8">
          <nav className="flex flex-col gap-6 text-lg relative z-50">
            
            <Link href="/" onClick={handleLinkClick}>
              <a className={`font-medium py-2 border-b border-white/5 ${location === "/" ? "text-fuchsia-400" : "text-white/80"}`}>
                Home
              </a>
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
                  <Link key={s.href} href={s.href} onClick={handleLinkClick}>
                    <a className={`text-base block py-1 ${location === s.href ? "text-fuchsia-400" : "text-white/50"}`}>
                      {s.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" onClick={handleLinkClick}>
              <a className={`font-medium py-2 border-b border-white/5 ${location === "/about" ? "text-fuchsia-400" : "text-white/80"}`}>
                About
              </a>
            </Link>

            <Link href="/blog" onClick={handleLinkClick}>
              <a className={`font-medium py-2 border-b border-white/5 ${location === "/blog" ? "text-fuchsia-400" : "text-white/80"}`}>
                Blog
              </a>
            </Link>

            <Link href="/contact" onClick={handleLinkClick}>
              <a className={`font-medium py-2 border-b border-white/5 ${location === "/contact" ? "text-fuchsia-400" : "text-white/80"}`}>
                Contact
              </a>
            </Link>

            <div className="mt-8">
              <Link href="/contact" onClick={handleLinkClick}>
                <a className="w-full btn-glow py-4 rounded-xl flex items-center justify-center font-bold text-center text-white">
                  Get Engine Audit
                </a>
              </Link>
            </div>
            
          </nav>
        </div>
      )}
    </header>
  );
}