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
    <section id="hero" className="md:min-h-screen flex flex-col px-4 md:px-6 border-b border-border/50 bg-[url('/img/hero-mobile.jpg')] md:bg-[url('/img/hero-light.jpg')] dark:md:bg-[url('/img/hero-dark.jpg')] bg-cover bg-center md:bg-cover md:bg-center bg-no-repeat overflow-hidden relative">
      {/* Dark gradient fade for text legibility below the fold on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden z-0 pointer-events-none mt-[50svh]"></div>

      <div className="w-full max-w-[98vw] mx-auto z-10 flex flex-col flex-1 pb-12 pt-[70svh] md:pt-24 md:pb-12 justify-end md:justify-start">
        {/* Massive Headline */}
        <div className="max-w-[100%] md:max-w-[70%] lg:max-w-[60%] mb-auto md:mb-0 mt-8 md:mt-0 z-10">
          <h1 className="mb-12 md:mb-12 text-[clamp(2.5rem,6vw,8rem)] leading-[0.9] font-medium tracking-tighter -ml-[0.06em] bg-gradient-to-r from-emerald-200 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
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
        </div>

        {/* Supporting Copy & Nav */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 border-t border-border/50 pt-8 md:pt-12 w-full z-10 text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:max-w-[50%]"
          >
            <blockquote className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-mono tracking-tight pl-4 border-l-[3px] border-emerald-300/50 italic">
              &ldquo;From early SaaS ideas to enterprise platforms, I help teams reduce product, UX, and architecture
              risk before it becomes expensive.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 shrink-0 pb-12 md:pb-0"
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-4 text-sm font-mono uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              Start a conversation
            </button>
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-4 text-sm font-mono uppercase tracking-wider hover:text-emerald-300 transition-colors"
            >
              <span className="w-2 h-2 border border-emerald-400 rounded-full group-hover:bg-emerald-400 transition-colors shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
              View work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}