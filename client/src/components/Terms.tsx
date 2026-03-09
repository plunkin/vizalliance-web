export default function Terms() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 pb-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-display">Terms of Service</h1>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-black/50 space-y-8 text-[oklch(0.70_0.02_260)] leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Vizalliance's website and services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Modifications</h2>
            <p>Vizalliance reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. SMS Communications</h2>
            <p>By opting in to SMS communications, you agree to receive text messages from Vizalliance regarding your account, services, and promotional offers. Message frequency varies. Message and data rates may apply. You can opt-out at any time by replying "STOP" to any message.</p>
          </section>
          
        </div>
      </div>
    </div>
  );
}