import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus } from "lucide-react";

export function SelectedWork() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  const cases = [
    {
      id: 1,
      title: "Adobe Discover",
      subtitle: "Designing a Scalable Content Platform",
      description: "Building a headless content engine for 10M+ monthly users across Creative Cloud.",
      tags: ["AEM", "Headless", "10M+ MAU"],
      impact: "Architected a solution treating content as a product API, not a page.",
      role: "Principal Technical Lead",
      details: {
        problem: "Adobe’s content teams were producing high-value educational content, but it lived in silos. In-app surfaces had inconsistent delivery, and editorial velocity was constrained by engineering dependencies.",
        solution: "Architected a headless AEM platform that treated content as a product API. This enabled syndication across multiple Creative Cloud apps without duplicating logic and decoupled content from presentation.",
        outcomes: [
          "Supported 10M+ monthly active users across CC products",
          "Enabled rapid experimentation with in-app surfaces",
          "Reduced engineering involvement in content updates"
        ]
      }
    },
    {
      id: 2,
      title: "Royal Caribbean",
      subtitle: "Personalized Pricing Engine",
      description: "Turning static homepage real estate into a real-time revenue engine.",
      tags: ["My Role: Principal Architect", "Real-time Decisioning", "Personalization"],
      impact: "$2.9M+ incremental revenue in year one through inventory-aware personalization.",
      role: "Principal Architect & Strategy Lead",
      details: {
        problem: "The homepage received millions of visits but the pricing carousel was static. Offers were disconnected from customer intent, loyalty status, or real-time inventory conditions.",
        solution: "Architected a real-time decisioning system treating the homepage as a marketplace. Offers were selected algorithmically based on margin, loyalty, and availability before creative was rendered.",
        outcomes: [
          "18–23% increase in homepage carousel CTR",
          "15–19% lift in booking conversion",
          "$2.9–$4.3M incremental revenue in year one"
        ]
      }
    },
    {
      id: 3,
      title: "Viacom",
      subtitle: "Global Content Platform",
      description: "Modernizing a legacy component system for rapid multi-brand deployment.",
      tags: ["AEM", "Design System", "Enterprise"],
      impact: "Led design system evolution supporting 50+ brand websites including MTV & Comedy Central.",
      role: "Lead Business Systems Analyst",
      details: {
        problem: "Legacy CMS patterns tightly coupled content, templates, and delivery. Any front-end change risked downstream breakage, slowing down editorial velocity for global brands.",
        solution: "Led the delivery of a headless architecture that served as the connective tissue between offshore teams and stakeholders. Defined a content model that ensured longevity beyond any single front-end.",
        outcomes: [
          "Enabled multi-channel content delivery",
          "Reduced dependency on monolithic CMS templates",
          "Improved delivery velocity for digital teams"
        ]
      }
    }
  ];

  return (
    <section id="work" className="relative md:sticky md:top-0 z-10 min-h-screen bg-background border-b border-border/50 flex flex-col justify-center md:overflow-hidden">
      <div className="relative w-full h-full max-w-[98vw] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col justify-center">

        {/* Section Header - Fades out when a case is selected */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6"
          animate={{
            opacity: selectedId ? 0 : 1,
            y: selectedId ? -20 : 0,
            pointerEvents: selectedId ? "none" : "auto"
          }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="mb-4 text-[clamp(2.5rem,6vw,8rem)] font-medium tracking-tighter leading-tight">Selected Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Proof across enterprise + product.
            </p>
          </div>
        </motion.div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {cases.map((caseStudy) => (
            <div key={caseStudy.id} className={`relative ${selectedId === caseStudy.id ? 'z-50' : 'z-0'}`}>
              {/* Placeholder to keep grid layout stable while the actual card expands */}
              <div className="invisible border border-border/50 p-6 lg:p-8 flex flex-col justify-between h-[300px]"></div>

              <motion.div
                layoutId={`card-container-${caseStudy.id}`}
                onClick={() => !selectedId && setSelectedId(caseStudy.id)}
                className={`absolute inset-0 bg-card border border-border/50 overflow-hidden cursor-pointer ${selectedId === caseStudy.id ? 'fixed inset-0 z-50 md:inset-12 border-accent-cyan/20 shadow-2xl' : 'hover:bg-muted/50'}`}
                animate={{
                  opacity: selectedId && selectedId !== caseStudy.id ? 0 : 1,
                  // When selected, expand to fixed position logic handled by layoutId + class change
                }}
                transition={{
                  layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.3 }
                }}
              >
                {/* Inner Content Container */}
                <motion.div className="flex flex-col h-full p-6 pt-20 md:pt-6 lg:p-12 relative w-full">

                  {/* Close Button - Only visible when expanded */}
                  {selectedId === caseStudy.id && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      className="absolute top-20 md:top-6 right-6 p-2 rounded-full bg-accent-orange/10 hover:bg-accent-orange/20 text-accent-orange transition-colors z-50"
                    >
                      <X size={24} />
                    </motion.button>
                  )}


                  {/* Initial Content - Fades out on expand */}
                  <AnimatePresence>
                    {selectedId !== caseStudy.id && (
                      <motion.div
                        key="collapsed-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col justify-between h-full"
                      >
                        <div>
                          <div className="mb-6">
                            <h3 className="mb-2 text-2xl leading-tight group-hover:text-accent-cyan transition-colors">{caseStudy.title}</h3>
                            <p className="text-sm font-mono text-muted-foreground mb-4">{caseStudy.tags[0]} / {caseStudy.tags[1]}</p>
                            <p className="text-muted-foreground mb-4 leading-relaxed text-sm lg:text-base">{caseStudy.description}</p>
                          </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-border/50 flex justify-between items-center group">
                          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-accent-cyan transition-colors">Read Case</span>
                          <Plus size={16} className="text-muted-foreground group-hover:text-accent-orange transition-colors" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>


                  {/* Expanded Content - Slides in on expand */}
                  {selectedId === caseStudy.id && (
                    <motion.div
                      key="expanded-content"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex flex-col lg:flex-row gap-12 h-full overflow-y-auto"
                    >
                      {/* Left Side: Header & Context */}
                      <div className="lg:w-1/3 lg:border-r border-border/50 lg:pr-12 flex flex-col gap-8">
                        <div>
                          <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-accent-cyan">{caseStudy.title}</h3>
                          <p className="text-xl text-muted-foreground">{caseStudy.subtitle}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="text-xs font-mono uppercase text-accent-cyan">My Role</div>
                          <div className="text-sm">{caseStudy.role}</div>
                        </div>

                        <div className="space-y-4">
                          <div className="text-xs font-mono uppercase text-accent-cyan">Tags</div>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-secondary text-xs border border-border/50">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Problem, Solution, Results */}
                      <div className="lg:w-2/3 lg:pl-4 space-y-12">
                        <div>
                          <h4 className="text-lg font-medium mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                            The Problem
                          </h4>
                          <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.details.problem}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 bg-accent-cyan rounded-full"></span>
                            The Solution
                          </h4>
                          <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.details.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-4 flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Outcomes
                          </h4>
                          <ul className="grid gap-4">
                            {caseStudy.details.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex gap-4 items-start">
                                <span className="font-mono text-xs text-muted-foreground pt-1">0{idx + 1}</span>
                                <span className="text-lg leading-relaxed">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}