import { useState, useEffect, useRef } from "react";
import { 
  ShieldCheck, Calendar, Mail, Phone, MapPin, 
  Linkedin, Twitter, MessageSquare, ArrowRight, Loader2, CheckCircle2, Target, Mic
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "wouter";


// --- SUPABASE SETUP ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- FADE-IN HELPER ---
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

export default function Contact() {
  // --- DYNAMIC PAGE STATE ---
  const [pageFocus, setPageFocus] = useState<"visibility" | "capture" | "automation" | "booking">("visibility");

  // Read the URL when the page loads
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focusParam = params.get("focus");
    if (focusParam === "capture") setPageFocus("capture");
    if (focusParam === "automation") setPageFocus("automation");
    if (focusParam === "booking") setPageFocus("booking");
  }, []);

  // --- CONTENT MAPPER ---
  const content = {
    visibility: {
      titlePrefix: "Design Your",
      titleHighlight: "Growth Architecture.",
      subtext: "Step 1 is identifying the leaks. Request your free visibility audit to see exactly what your competitors are capturing.",
      formTitle: "Request Your Audit",
      formSub: "Enter your details to generate your report.",
      buttonText: "Send My Report",
      icon: <ShieldCheck className="w-5 h-5 text-fuchsia-400" />,
      featureTitle: "Privacy Guaranteed",
      featureText: "Your data remains confidential. We only analyze public search signals."
    },
    capture: {
      titlePrefix: "Reveal Your",
      titleHighlight: "Hidden Buyers.",
      subtext: "97% of your traffic leaves without buying. Let's calculate exactly how much revenue you're losing—and how to capture it.",
      formTitle: "Get Your Revenue Projection",
      formSub: "Enter your details to see your missed revenue calculation.",
      buttonText: "Calculate Missed Revenue",
      icon: <Target className="w-5 h-5 text-fuchsia-400" />,
      featureTitle: "Data-Driven Insights",
      featureText: "We use standard industry conversion metrics to calculate your lost baseline."
    },
    automation: {
      titlePrefix: "Experience Your",
      titleHighlight: "24/7 AI Receptionist.",
      subtext: "Stop missing calls and bleeding leads. Enter your details below to instantly access our live AI voice agent demo.",
      formTitle: "Access the Live Demo",
      formSub: "Enter your details to get the secure demo phone number.",
      buttonText: "Unlock Voice Demo",
      icon: <Mic className="w-5 h-5 text-fuchsia-400" />,
      featureTitle: "Interactive Experience",
      featureText: "You will be connected to a live, conversational AI agent designed to handle inbound lead qualification."
    },
    booking: {
      titlePrefix: "Book Your",
      titleHighlight: "Strategy Session.",
      subtext: "Ready to accelerate your growth? Choose a time on the calendar below to speak directly with our team.",
      formTitle: "", // Not used in booking state
      formSub: "",
      buttonText: "",
      icon: <Calendar className="w-5 h-5 text-fuchsia-400" />,
      featureTitle: "Direct Access",
      featureText: "Skip the line and get straight to building your custom implementation plan."
    }
  };

  const currentContent = content[pageFocus];

  // --- FORM STATE ---
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    websiteUrl: "",
    qualifyingAnswer: "",
    monthlyVisitors: "",
    phoneNumber: "",
    smsConsent: false
  });

  // --- SUBMIT HANDLER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // 1. Save to Supabase (Your primary vault)
    const { error } = await supabase
      .from("leads")
      .insert([
        {
          first_name: formData.firstName,
          email: formData.email,
          website_url: formData.websiteUrl,
          qualifying_answer: formData.qualifyingAnswer,
          monthly_visitors: formData.monthlyVisitors,
          phone_number: formData.phoneNumber,
          lead_type: pageFocus,
          sms_consent: formData.smsConsent 
        }
      ]);

    if (error) {
      console.error("Error saving lead:", error);
      alert("Something went wrong connecting to the database. Please try again.");
      setFormStatus("idle");
      return; // Stop here if the database fails
    } 

    // 2. Fire the Webhook to GoHighLevel or Make.com
    try {
      // You can eventually move this URL into your .env.local file as VITE_WEBHOOK_URL
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || "YOUR_GHL_OR_MAKE_WEBHOOK_URL_HERE";
      
      if (webhookUrl && webhookUrl !== "YOUR_GHL_OR_MAKE_WEBHOOK_URL_HERE") {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            email: formData.email,
            websiteUrl: formData.websiteUrl,
            qualifyingAnswer: formData.qualifyingAnswer,
            monthlyVisitors: formData.monthlyVisitors,
            phoneNumber: formData.phoneNumber,
            tag: pageFocus, // <--- THIS IS YOUR SEGMENTATION TAG!
            smsConsent: formData.smsConsent,
            source: "Vizalliance Website"
          }),
        });
      }
    } catch (webhookError) {
      // If the webhook fails for some reason, we log it, but we DO NOT stop the user 
      // from seeing the success screen and booking their calendar appointment.
      console.error("Webhook failed:", webhookError);
    }

    // 3. Reveal the Calendar!
    setFormStatus("success");
  };

  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 pb-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Dynamic Context */}
          <div className="lg:col-span-5">
            <FadeIn>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {currentContent.titlePrefix} <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent italic pr-2">{currentContent.titleHighlight}</span>
              </h1>
              <p className="text-lg text-[oklch(0.60_0.02_260)] mb-10 leading-relaxed">
                {currentContent.subtext}
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                    {currentContent.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{currentContent.featureTitle}</h4>
                    <p className="text-sm text-[oklch(0.60_0.02_260)]">{currentContent.featureText}</p>
                  </div>
                </div>
                
                {/* Only show Instant Delivery badge if they are requesting an asset */}
                {pageFocus !== "booking" && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Instant Delivery</h4>
                      <p className="text-sm text-[oklch(0.60_0.02_260)]">Get immediate access to your requested assets upon submission.</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: Dynamic Form Container */}
          <div className="lg:col-span-7 relative">
            <FadeIn delay={200} className="h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-fuchsia-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="glass-card rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl h-full min-h-[600px] flex flex-col relative z-10 overflow-hidden shadow-2xl p-8 lg:p-10">
                
                {/* --- FAST LANE: DIRECT BOOKING --- */}
                {pageFocus === "booking" && (
                  <div className="flex flex-col h-full animate-in fade-in duration-500">
                    <div className="text-center mb-6 mt-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Select a Time</h2>
                      <p className="text-sm text-[oklch(0.60_0.02_260)] max-w-md mx-auto">
                        Choose a convenient time below to discuss your custom implementation plan.
                      </p>
                    </div>
                    <div className="flex-grow w-full rounded-2xl overflow-hidden relative min-h-[500px]">
                      <iframe src="https://vizalliance1.trafft.com" width="100%" height="100%" className="absolute inset-0 w-full h-full border-none" title="Schedule a Growth Strategy Session"></iframe>
                    </div>
                  </div>
                )}

                {/* --- TIER 1: LEAD CAPTURE FORM (Only shows if NOT in booking mode) --- */}
                {pageFocus !== "booking" && formStatus !== "success" && (
                  <div className="flex flex-col h-full justify-center w-full max-w-lg mx-auto animate-in fade-in duration-500">
                    <div className="mb-8 text-center">
                      <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-4">Step 1</div>
                      <h2 className="text-3xl font-bold text-white mb-2">{currentContent.formTitle}</h2>
                      <p className="text-[oklch(0.60_0.02_260)]">{currentContent.formSub}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">First Name</label>
                          <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">Work Email</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="john@company.com" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">Website URL</label>
                        <input type="url" required value={formData.websiteUrl} onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="https://yourcompany.com" />
                      </div>

                      {pageFocus === "visibility" && (
                        <div>
                          <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">Biggest Growth Bottleneck?</label>
                          <select required value={formData.qualifyingAnswer} onChange={(e) => setFormData({...formData, qualifyingAnswer: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors appearance-none">
                            <option value="" disabled>Select an option...</option>
                            <option value="Not enough traffic/visibility">Not enough traffic/visibility</option>
                            <option value="Traffic isn't converting">Traffic isn't converting</option>
                            <option value="Missing calls/slow response time">Missing calls/slow response time</option>
                          </select>
                        </div>
                      )}

                      {pageFocus === "capture" && (
                        <div>
                          <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">Estimated Monthly Website Visitors?</label>
                          <input type="number" required value={formData.monthlyVisitors} onChange={(e) => setFormData({...formData, monthlyVisitors: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="e.g., 5000" />
                        </div>
                      )}

                      {pageFocus === "automation" && (
                        <div>
                          <label className="block text-sm font-medium text-[oklch(0.70_0.02_260)] mb-2">Cell Phone Number</label>
                          <input type="tel" required value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="(555) 123-4567" />
                        </div>
                      )}

                      {/* --- A2P 10DLC SMS COMPLIANCE CHECKBOX --- */}
                      <div className="flex items-start gap-3 mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                        <input 
                          type="checkbox" 
                          id="smsConsent" 
                          checked={formData.smsConsent}
                          onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                          className="mt-1 w-4 h-4 rounded border-white/20 bg-black/50 accent-fuchsia-500 cursor-pointer shrink-0"
                        />
                        <label htmlFor="smsConsent" className="text-[11px] text-[oklch(0.60_0.02_260)] leading-relaxed cursor-pointer">
                          By checking this box, I consent to receive SMS messages from Vizalliance. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. See our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link> and <Link href="/terms" className="underline hover:text-white">Terms of Service</Link>.
                        </label>
                      </div>

                      <button type="submit" disabled={formStatus === "submitting"} className="w-full mt-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-400 hover:to-purple-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70">
                        {formStatus === "submitting" ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <>{currentContent.buttonText} <ArrowRight className="w-5 h-5" /></>}
                      </button>

                      {/* THE UX SKIP BUTTON */}
                      <div className="mt-4 text-center">
                        <button 
                          type="button" 
                          onClick={() => setPageFocus("booking")} 
                          className="text-sm text-[oklch(0.60_0.02_260)] hover:text-white transition-colors underline decoration-white/20 hover:decoration-white"
                        >
                          Already know what you need? Skip straight to booking a call.
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* --- TIER 2: CALENDAR REVEAL (Only shows after form submission) --- */}
                {pageFocus !== "booking" && formStatus === "success" && (
                  <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
                    <div className="text-center mb-6 mt-4">
                      <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-bold mb-4">
                        <CheckCircle2 className="w-4 h-4" /> Request Received
                      </div>
                      
                      {pageFocus === "automation" ? (
                        <>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Step 2: Call The AI & Book</h2>
                          <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-6 mb-6 inline-block w-full max-w-md">
                            <p className="text-[oklch(0.80_0.02_260)] font-medium mb-1">Your Live Demo Number:</p>
                            <p className="text-3xl font-bold text-white tracking-wider mb-2">+1 (555) 123-4567</p>
                            <p className="text-sm text-[oklch(0.60_0.02_260)]">Call this number right now to speak with our live AI agent. Once you hang up, grab a time below to map out your custom build.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Step 2: Book Your Strategy Session</h2>
                          <p className="text-sm text-[oklch(0.60_0.02_260)] max-w-md mx-auto">
                            While your data is being processed, choose a time below to build your implementation plan.
                          </p>
                        </>
                      )}
                    </div>
                    
                    <div className="flex-grow w-full rounded-2xl overflow-hidden relative min-h-[500px]">
                      <iframe src="https://vizalliance1.trafft.com" width="100%" height="100%" className="absolute inset-0 w-full h-full border-none" title="Schedule a Growth Strategy Session"></iframe>
                    </div>
                  </div>
                )}

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}