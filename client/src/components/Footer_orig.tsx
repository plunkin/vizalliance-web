/* Neural Noir — Footer with navigation, social links, and newsletter signup */
import { Link } from "wouter";
import { Zap, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "AI-Powered SEO", href: "/services" },
    { label: "Predictive Analytics", href: "/services" },
    { label: "Content Automation", href: "/services" },
    { label: "Performance Marketing", href: "/services" },
  ],
  Resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/about" },
    { label: "Free Audit", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[oklch(0.25_0.02_260/60%)] bg-[oklch(0.10_0.02_260)]">
      {/* CTA Banner */}
      <div className="container py-16">
        <div className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3
              className="text-2xl lg:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to <span className="text-gradient-cyan">Transform</span> Your Marketing?
            </h3>
            <p className="text-[oklch(0.65_0.02_260)] max-w-lg">
              Get a free AI-powered audit of your current marketing strategy. Discover untapped opportunities in minutes.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-glow px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 whitespace-nowrap"
          >
            Get Your Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Links Grid */}
      <div className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.82_0.15_195)] to-[oklch(0.55_0.25_285)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[oklch(0.12_0.02_260)]" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-gradient-cyan">Aetheris</span>{" "}
                <span className="text-[oklch(0.75_0.01_260)]">Digital</span>
              </span>
            </Link>
            <p className="text-[oklch(0.55_0.02_260)] text-sm leading-relaxed max-w-sm mb-6">
              We fuse artificial intelligence with digital marketing to deliver strategies that don't just compete — they predict, adapt, and dominate.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold text-[oklch(0.85_0.01_260)] mb-4 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.82_0.15_195)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[oklch(0.20_0.02_260)]">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.45_0.02_260)]">
            &copy; {new Date().getFullYear()} Aetheris Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[oklch(0.45_0.02_260)] hover:text-[oklch(0.65_0.02_260)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[oklch(0.45_0.02_260)] hover:text-[oklch(0.65_0.02_260)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
