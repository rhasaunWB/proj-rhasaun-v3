export function Contact() {
  return (
    <section id="contact" className="border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6 text-3xl md:text-5xl leading-tight">Get in Touch</h2>
            <p className="mb-8 text-lg font-mono text-muted-foreground leading-relaxed max-w-sm">
              [ STATUS: OPEN FOR Q2 2026 ]<br />
              Available for select product and design engagements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-mono uppercase text-sm tracking-wider flex items-center gap-2">
                <span>Email me</span>
                <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono uppercase text-sm tracking-wider">
                Book a call
              </button>
            </div>
          </div>

          <div className="border-l border-border/50 pl-8 md:pl-12 py-2">
            <h3 className="mb-6 text-xl font-mono uppercase tracking-wider text-muted-foreground">Availability</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-mono text-sm uppercase">Accepting new projects</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
                Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}