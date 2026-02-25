/* Neural Noir — Sticky header with glassmorphism, logo, nav links, mobile menu */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.12_0.02_260/85%)] backdrop-blur-xl border-b border-[oklch(0.25_0.02_260/60%)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.82_0.15_195)] to-[oklch(0.55_0.25_285)] flex items-center justify-center transition-shadow group-hover:shadow-[0_0_20px_oklch(0.82_0.15_195/40%)]">
            <Zap className="w-4 h-4 text-[oklch(0.12_0.02_260)]" />
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gradient-cyan">Aetheris</span>{" "}
            <span className="text-[oklch(0.75_0.01_260)]">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                location === link.href
                  ? "text-[oklch(0.82_0.15_195)] bg-[oklch(0.82_0.15_195/10%)]"
                  : "text-[oklch(0.65_0.02_260)] hover:text-[oklch(0.90_0.01_260)] hover:bg-[oklch(1_0_0/5%)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg btn-glow"
          >
            Get Free Audit
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[oklch(0.75_0.01_260)] hover:text-[oklch(0.82_0.15_195)] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.14_0.02_260/95%)] backdrop-blur-xl border-t border-[oklch(0.25_0.02_260/60%)]">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  location === link.href
                    ? "text-[oklch(0.82_0.15_195)] bg-[oklch(0.82_0.15_195/10%)]"
                    : "text-[oklch(0.65_0.02_260)] hover:text-[oklch(0.90_0.01_260)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg btn-glow text-center"
            >
              Get Free Audit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
