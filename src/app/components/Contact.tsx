export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-background border-b border-border/50">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-20 md:py-32">
        {/* Header - separate row */}
        <h2 className="mb-12 md:mb-24 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Column - Contact Info */}
          <div>
            <div className="space-y-12">
              {/* About */}
              <div>
                <h3 className="mb-4 text-xl font-mono uppercase tracking-wider text-muted-foreground">About Rhasaun</h3>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  <p>
                    I am a customer centric and results-driven professional, with over 5+ years in professional services business having honed my craft in roles ranging from customer facing strategy & technology consulting, product development, transformation leader and now leading services strategy and programs of a thriving professional services business.
                  </p>
                  <p>
                    I am known as an influential leader with strong followership, adept at defining strategy, establishing strategic alignment and sponsorship, and excelling in its execution.
                  </p>
                  <p>
                    My key areas of expertise include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Services GTM Strategy & Execution</li>
                    <li>Digital Transformation & CX Strategy</li>
                    <li>Digital Marketing</li>
                    <li>Agile & Lean Product Development</li>
                    <li>Cross-functional Team Leadership</li>
                    <li>Professional Development, Mentoring & Coaching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Availability & Contact Details */}
          <div className="border-l border-border/50 pl-8 md:pl-12 py-2 flex flex-col gap-12">

            {/* Availability */}
            <div>
              <h3 className="mb-6 text-xl font-mono uppercase tracking-wider text-muted-foreground">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
                  </span>
                  <span className="text-xl md:text-2xl">Accepting new projects</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-sm">
                  Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams.
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="mb-2 text-xl font-mono uppercase tracking-wider text-muted-foreground">Email</h3>
              <a href="mailto:consultation@rhasaun.com" className="text-xl md:text-2xl hover:text-accent-orange transition-colors">
                consultation@rhasaun.com
              </a>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-2 text-xl font-mono uppercase tracking-wider text-muted-foreground">Connect</h3>
              <a
                href="https://www.linkedin.com/in/rhasauncampbell/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl hover:text-accent-orange transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Partnerships */}
            <div>
              <h3 className="mb-6 text-xl font-mono uppercase tracking-wider text-muted-foreground">Partnerships</h3>
              <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
                {/* Halcyon Logo - Text Representation based on image */}
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold tracking-[0.2em] text-foreground">HALCYON</span>
                  <div className="w-full h-[2px] bg-accent-orange my-1"></div>
                  <span className="text-[0.6rem] font-light tracking-[0.1em] text-muted-foreground uppercase">Tech Consultants</span>
                </div>

                {/* Wrecking Ball Logo */}
                <img
                  src="https://www.getwrecked.com/wp-content/uploads/2023/05/wrecking-ball-logo-light-bg.png"
                  alt="Wrecking Ball"
                  className="h-12 w-auto object-contain invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/50 text-sm text-muted-foreground font-mono">
          <p>&copy; {new Date().getFullYear()} Rhasaun Campbell, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}