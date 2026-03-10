import { SystemArchitecture } from "./animations/SystemArchitecture";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="min-h-screen bg-background border-b border-border/50">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-20 md:py-32">
        <h2 className="mb-8 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">What I Do</h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed">
              I work across the full lifecycle of modern software. I help teams turn complex ideas into
              systems that can actually be built, shipped, and evolved.
            </p>

            My focus goes beyond getting something live. I ensure the early decisions don't quietly limit
            what the product can become later.

            <div className="pt-8">
              <h3 className="mb-6 text-2xl md:text-3xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:bg-none dark:text-[#9cd7cd] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                Clarifying what to build and why
              </h3>
              <div className="space-y-4">
                <div className="pl-6 border-l border-primary">
                  <p className="text-black dark:text-white leading-relaxed">
                    Strategic product thinking that connects business goals to buildable systems
                  </p>
                </div>
                <div className="pl-6 border-l border-primary">
                  <p className="text-black dark:text-white leading-relaxed">
                    Information architecture and system design that scales with your team
                  </p>
                </div>
                <div className="pl-6 border-l border-primary">
                  <p className="text-black dark:text-white leading-relaxed">
                    Interface design and prototyping that reduces risk before development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animation */}
          <div className="hidden md:block relative">
            <div className="sticky top-32">
              <SystemArchitecture />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}