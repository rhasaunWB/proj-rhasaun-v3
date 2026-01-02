import { SystemArchitecture } from "./animations/SystemArchitecture";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h2 className="mb-8 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">What I Do</h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed">
              I work across the full lifecycle of modern software—helping teams turn complex ideas into
              systems that can actually be built, shipped, and evolved.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My focus isn't just getting something live. It's making sure the early decisions don't quietly limit
              what the product can become later.
            </p>

            <div className="pt-8">
              <h3 className="mb-6 text-2xl md:text-3xl leading-tight">
                Clarifying what to build—and why
              </h3>
              <div className="space-y-4">
                <div className="pl-6 border-l border-primary">
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic product thinking that connects business goals to buildable systems
                  </p>
                </div>
                <div className="pl-6 border-l border-primary">
                  <p className="text-muted-foreground leading-relaxed">
                    Information architecture and system design that scales with your team
                  </p>
                </div>
                <div className="pl-6 border-l border-primary">
                  <p className="text-muted-foreground leading-relaxed">
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