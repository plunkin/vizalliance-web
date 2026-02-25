/* ============================================================
   CONTACT PAGE — Neural Noir Design
   Sections: Hero → Contact Form + Info → Map → FAQ Link
   ============================================================ */
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

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

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@aetherisdigital.com", href: "mailto:hello@aetherisdigital.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon-Fri, 9am-6pm PST", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.02_260)] to-[oklch(0.12_0.02_260)]" />
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-[oklch(0.82_0.15_195)] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-mono)" }}>Get in Touch</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
              Let's Build Something <span className="text-gradient-cyan">Intelligent</span> Together
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-[oklch(0.60_0.02_260)] max-w-2xl mx-auto">
              Ready to transform your marketing with AI? Schedule a free audit, ask a question, or just say hello. We respond to every inquiry within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
            {/* Form */}
            <FadeIn>
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[oklch(0.75_0.01_260)] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[oklch(0.16_0.02_260)] border border-[oklch(0.25_0.02_260)] text-sm text-[oklch(0.90_0.01_260)] placeholder:text-[oklch(0.45_0.02_260)] focus:outline-none focus:border-[oklch(0.82_0.15_195/50%)] focus:ring-1 focus:ring-[oklch(0.82_0.15_195/30%)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[oklch(0.75_0.01_260)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[oklch(0.16_0.02_260)] border border-[oklch(0.25_0.02_260)] text-sm text-[oklch(0.90_0.01_260)] placeholder:text-[oklch(0.45_0.02_260)] focus:outline-none focus:border-[oklch(0.82_0.15_195/50%)] focus:ring-1 focus:ring-[oklch(0.82_0.15_195/30%)] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[oklch(0.75_0.01_260)] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[oklch(0.16_0.02_260)] border border-[oklch(0.25_0.02_260)] text-sm text-[oklch(0.90_0.01_260)] placeholder:text-[oklch(0.45_0.02_260)] focus:outline-none focus:border-[oklch(0.82_0.15_195/50%)] focus:ring-1 focus:ring-[oklch(0.82_0.15_195/30%)] transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[oklch(0.75_0.01_260)] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[oklch(0.16_0.02_260)] border border-[oklch(0.25_0.02_260)] text-sm text-[oklch(0.90_0.01_260)] placeholder:text-[oklch(0.45_0.02_260)] focus:outline-none focus:border-[oklch(0.82_0.15_195/50%)] focus:ring-1 focus:ring-[oklch(0.82_0.15_195/30%)] transition-all resize-none"
                      placeholder="Tell us about your business and what you're looking to achieve..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn-glow px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? "Message Sent!" : "Send Message"} <Send className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[oklch(0.45_0.02_260)]">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn delay={100}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {contactMethods.map((method) => (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[oklch(0.82_0.15_195/10%)] flex items-center justify-center shrink-0 group-hover:bg-[oklch(0.82_0.15_195/20%)] transition-colors">
                          <method.icon className="w-5 h-5 text-[oklch(0.82_0.15_195)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[oklch(0.50_0.02_260)] mb-1">{method.label}</p>
                          <p className="text-sm text-[oklch(0.80_0.01_260)] group-hover:text-[oklch(0.82_0.15_195)] transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg border border-[oklch(0.25_0.02_260)] flex items-center justify-center text-[oklch(0.55_0.02_260)] hover:text-[oklch(0.82_0.15_195)] hover:border-[oklch(0.82_0.15_195/40%)] transition-all"
                      aria-label="Email"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-[oklch(0.82_0.15_195/8%)] to-[oklch(0.55_0.25_285/8%)]">
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    Prefer to Talk First?
                  </h3>
                  <p className="text-sm text-[oklch(0.60_0.02_260)] mb-4">
                    Schedule a free 30-minute consultation to discuss your goals and see if we're a good fit.
                  </p>
                  <button className="btn-glow-outline px-5 py-2.5 rounded-lg text-sm inline-flex items-center gap-2">
                    Book a Call <Phone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Link Section */}
      <section className="py-20 lg:py-28 bg-[oklch(0.10_0.02_260)]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Have Questions <span className="text-gradient-cyan">Before Reaching Out?</span>
            </h2>
            <p className="text-[oklch(0.60_0.02_260)] text-lg max-w-xl mx-auto mb-8">
              Check out our FAQ page for answers to common questions about our services, pricing, and process.
            </p>
            <Link href="/faq" className="btn-glow-outline px-7 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              View FAQ <MessageSquare className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
