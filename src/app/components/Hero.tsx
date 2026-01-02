import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const text = "Designing and delivering software that survives real-world complexity.";
  const words = text.split(" ");

  return (
    <section id="hero" className="sticky top-0 z-10 min-h-screen pt-24 px-4 md:px-6 border-b border-border/50 bg-background relative overflow-hidden">
      <div className="w-full max-w-[98vw] mx-auto z-10">
        {/* Massive Headline */}
        <h1 className="mb-8 md:mb-12 text-[clamp(3.4rem,8vw,11rem)] leading-[0.9] font-medium tracking-tighter -ml-[0.06em] text-foreground">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] -mb-[0.1em] pb-2 pt-1 align-bottom">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Supporting Copy & Nav */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 border-t border-border/50 py-12 max-w-[98vw] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-mono tracking-tight"
          >
            From early SaaS ideas to enterprise platforms, I help teams reduce product, UX, and architecture
            risk before it becomes expensive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 shrink-0"
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-4 text-sm font-mono uppercase tracking-wider hover:text-primary transition-colors"
            >
              <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              Start a conversation
            </button>
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-4 text-sm font-mono uppercase tracking-wider hover:text-primary transition-colors"
            >
              <span className="w-2 h-2 border border-primary rounded-full group-hover:bg-primary transition-colors" />
              View work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}