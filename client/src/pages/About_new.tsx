export default function About() {
  return (
    <div className="bg-[oklch(0.12_0.02_260)] text-white min-h-screen pt-32 flex items-center">
      <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-8">Your Vision. <br/><span className="text-gradient-cyan">Our Journey.</span></h1>
          <p className="text-xl text-[oklch(0.60_0.02_260)] leading-relaxed mb-6">
            Vizalliance was born from a simple observation: modern businesses are over-tooled and under-powered.
          </p>
          <p className="text-[oklch(0.60_0.02_260)]">
            [Story placeholder: Talk about the shift from manual marketing to autonomous revenue engines here.]
          </p>
        </FadeIn>
        <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-12">
          <p className="text-white/20 font-mono text-xs uppercase tracking-widest">Brand Visual Placeholder</p>
        </div>
      </div>
    </div>
  );
}