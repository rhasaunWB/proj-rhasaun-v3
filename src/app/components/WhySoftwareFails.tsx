import { Misalignment } from "./animations/Misalignment";

export function WhySoftwareFails() {
  const failures = [
    "Building features without understanding the underlying system complexity",
    "Shipping fast without architectural clarity—creating technical debt from day one",
    "Designing for edge cases instead of the core problem",
    "Treating design and engineering as separate handoffs instead of continuous collaboration"
  ];

  return (
    <section className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-20 md:py-32">
        <h2 className="mb-6 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">Why Software Fails</h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                Most teams don't fail on design.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                They fail on alignment.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="mb-8 text-xl md:text-2xl leading-tight">Four failure modes:</h3>
              <ul className="space-y-8">
                {failures.map((failure, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 font-mono text-primary text-xs pt-1">
                      [0{index + 1}]
                    </span>
                    <span className="text-lg leading-relaxed">{failure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Animation */}
          <div className="hidden md:block relative">
            <div className="sticky top-32">
              <Misalignment />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}