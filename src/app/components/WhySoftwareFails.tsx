import { Misalignment } from "./animations/Misalignment";

export function WhySoftwareFails() {
  const failures = [
    "Building features without understanding the underlying system complexity",
    "Shipping fast without architectural clarity, creating technical debt from day one",
    "Designing for edge cases instead of the core problem",
    "Treating design and engineering as separate handoffs instead of continuous collaboration"
  ];

  return (
    <section className="min-h-screen bg-background border-b border-border/50">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-20 md:py-32">
        <h2 className="mb-6 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Why Software Fails</h2>

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
              <h3 className="mb-8 text-xl md:text-2xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:bg-none dark:text-[#9cd7cd] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">Four failure modes:</h3>
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