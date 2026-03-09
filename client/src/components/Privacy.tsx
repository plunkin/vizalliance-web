export default function Privacy() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 pb-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-display">Privacy Policy</h1>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-black/50 space-y-8 text-[oklch(0.70_0.02_260)] leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including when you fill out a form, request an audit, or communicate with us. This may include your name, email address, phone number, and website URL.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to deliver our services, process your requests, and communicate with you about your account or our offerings.</p>
          </section>

          {/* CRITICAL A2P 10DLC CLAUSE - DO NOT REMOVE */}
          <section className="p-6 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30">
            <h2 className="text-xl font-bold text-fuchsia-400 mb-3">3. Mobile and SMS Data (A2P Compliance)</h2>
            <p className="text-white">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@vizalliance.com.</p>
          </section>
          
        </div>
      </div>
    </div>
  );
}