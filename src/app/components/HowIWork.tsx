export function HowIWork() {
  const pillars = [
    {
      title: "Ideation",
      description: "Translating ambiguous business problems into structured product thinking",
      laws: ["Problem-first thinking", "User research drives design", "Constraints breed clarity"]
    },
    {
      title: "UI/UX",
      description: "Creating interfaces that feel inevitable—not just usable",
      laws: ["Consistency compounds", "Simplicity is strategic", "Test early, test often"]
    },
    {
      title: "Architecture",
      description: "Designing systems that can grow without breaking",
      laws: ["Modularity from day one", "Scale thoughtfully", "Document decisions"]
    },
    {
      title: "Delivery",
      description: "Shipping iteratively while maintaining product coherence",
      laws: ["Ship small, learn fast", "Quality over speed", "Feedback loops matter"]
    }
  ];

  return (
    <section id="how" className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h2 className="mb-6 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">How I Work</h2>

        <p className="mb-16 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          A clear loop: discover → design → architect → ship → learn.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="border border-border/50 p-8 bg-card hover:bg-muted/50 transition-colors">
              <h3 className="mb-4 text-2xl leading-tight">Pillar {index + 1} — {pillar.title}</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">{pillar.description}</p>
              <ul className="space-y-2 mb-6">
                {pillar.laws.map((law, lawIndex) => (
                  <li key={lawIndex} className="text-sm flex items-center gap-2 leading-relaxed">
                    <span className="w-2 h-2 bg-primary flex-shrink-0"></span>
                    {law}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 border border-border/50 hover:bg-secondary transition-colors font-mono text-xs uppercase tracking-wider">
                View Laws
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-primary flex-shrink-0"></span>
            Discover
          </span>
          <span className="hidden md:inline">→</span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-primary flex-shrink-0"></span>
            Design
          </span>
          <span className="hidden md:inline">→</span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-primary flex-shrink-0"></span>
            Architect
          </span>
          <span className="hidden md:inline">→</span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 bg-primary flex-shrink-0"></span>
            Ship
          </span>
        </div>
      </div>
    </section>
  );
}