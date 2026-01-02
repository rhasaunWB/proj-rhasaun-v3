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
    <section id="work" className="sticky top-0 z-10 min-h-screen bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <h2 className="mb-6 text-3xl md:text-5xl leading-tight">Selected Work</h2>

        <p className="mb-16 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Proof across enterprise + product.
        </p>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="border border-border/50 p-8 bg-card hover:bg-muted/50 transition-colors">
              <div className="mb-6">
                <h3 className="mb-4 text-2xl md:text-3xl leading-tight">{caseStudy.title}</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{caseStudy.description}</p>
                <p className="mb-4 leading-relaxed">{caseStudy.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-secondary text-sm font-mono border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Read case
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono uppercase text-sm tracking-wider">
            View all work
          </button>
        </div>
      </div>
    </section>
  );
}