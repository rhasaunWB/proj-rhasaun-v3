export function WhySoftwareFails() {
  const failures = [
    "Building features without understanding the underlying system complexity",
    "Shipping fast without architectural clarity—creating technical debt from day one",
    "Designing for edge cases instead of the core problem",
    "Treating design and engineering as separate handoffs instead of continuous collaboration"
  ];

  return (
    <section className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h2 className="mb-6 text-3xl md:text-5xl max-w-3xl leading-tight">Why Software Fails</h2>

        <p className="mb-4 text-lg md:text-xl max-w-3xl leading-relaxed">
          Most teams don't fail on design.
        </p>
        <p className="mb-12 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          They fail on alignment.
        </p>

        <div className="max-w-4xl">
          <h3 className="mb-8 text-xl md:text-2xl leading-tight">Four failure modes:</h3>
          <ul className="space-y-6">
            {failures.map((failure, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 font-mono text-primary">
                  [0{index + 1}]
                </span>
                <span className="text-lg leading-relaxed">{failure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}