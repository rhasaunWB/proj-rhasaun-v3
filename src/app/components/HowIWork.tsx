import { motion } from "motion/react";

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
    <section id="how" className="min-h-screen bg-background border-b border-border/50">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-12 md:py-20">
        <h2 className="mb-6 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">How I Work</h2>

        <p className="mb-16 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          A clear loop: discover → design → architect → ship → learn.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ x: -50 * (index + 1), opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15, // Staggered slide effect
                ease: "easeOut"
              }}
              className="border border-border/50 p-6 bg-card hover:bg-muted/50 transition-colors flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="mb-4 text-3xl leading-tight font-medium">{pillar.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed text-base md:text-lg">{pillar.description}</p>
                <ul className="space-y-3 mb-4">
                  {pillar.laws.map((law, lawIndex) => (
                    <li key={lawIndex} className="text-sm md:text-base flex items-center gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-primary flex-shrink-0"></span>
                      {law}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center gap-y-6 gap-x-12 md:gap-4 text-sm text-muted-foreground w-full max-w-sm mx-auto md:max-w-none">
          {["Discover", "Design", "Architect", "Ship"].map((label, idx) => (
            <div key={label} className="flex items-center justify-start">
              <span className="flex items-center gap-2">
                <motion.span
                  className="w-4 h-4 bg-primary flex-shrink-0"
                  initial={{ backgroundColor: "var(--primary)", scale: 1 }}
                  whileInView={{
                    backgroundColor: ["var(--primary)", "var(--accent-cyan)", "var(--accent-cyan)", "var(--primary)"],
                    scale: [1, 1, 1.2, 1]
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.5, // Longer total duration
                    times: [0, 0.2, 0.8, 1], // White -> Cyan (0.2), Hold Cyan (until 0.8), Pulse/White (0.8-1)
                    delay: 1.0 + (idx * 0.2) // Staggered start
                  }}
                ></motion.span>
                {label}
              </span>
              {idx < 3 && <span className="hidden md:inline mx-3">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}