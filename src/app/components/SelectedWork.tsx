export function SelectedWork() {
  const cases = [
    {
      title: "Adobe Discover",
      description: "Building a content discovery platform that scaled to millions of monthly visits",
      tags: ["AEM", "10M+ visits"],
      impact: "Architected a headless CMS solution for enterprise-scale content distribution"
    },
    {
      title: "Adobe ECP",
      description: "Creating a unified content platform for distributed marketing teams",
      tags: ["Headless", "Syndication"],
      impact: "Designed systems enabling global content reuse and localization at scale"
    },
    {
      title: "Viacom",
      description: "Modernizing a legacy component system for rapid site deployment",
      tags: ["AEM", "Component system"],
      impact: "Led design system evolution supporting 50+ brand websites"
    }
  ];

  return (
    <section id="work" className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50 flex flex-col justify-center">
      <div className="max-w-[98vw] mx-auto px-4 md:px-6 py-12 md:py-20 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="mb-4 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">Selected Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Proof across enterprise + product.
            </p>
          </div>
          <button className="hidden md:block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono uppercase text-sm tracking-wider h-fit">
            View all work
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="border border-border/50 p-6 lg:p-8 bg-card hover:bg-muted/50 transition-colors flex flex-col justify-between h-full group">
              <div className="mb-6">
                <h3 className="mb-3 text-2xl leading-tight group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm lg:text-base">{caseStudy.description}</p>
                <p className="mb-4 leading-relaxed text-sm font-medium">{caseStudy.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-secondary text-xs font-mono border border-border/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full text-left pt-4 border-t border-border/50 text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                Read case &rarr;
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <button className="w-full px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono uppercase text-sm tracking-wider">
            View all work
          </button>
        </div>
      </div>
    </section>
  );
}