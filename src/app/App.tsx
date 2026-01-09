import { Header } from "./components/Header";
import { TechnicalLayout } from "./components/TechnicalLayout";
import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { WhySoftwareFails } from "./components/WhySoftwareFails";
import { HowIWork } from "./components/HowIWork";
import { SelectedWork } from "./components/SelectedWork";
import { Contact } from "./components/Contact";
import { StickyScrollSection } from "./components/StickyScrollSection";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <TechnicalLayout>
      <Header />

      <StickyScrollSection index={0} zIndex={0}>
        <Hero />
      </StickyScrollSection>

      <StickyScrollSection index={1} zIndex={10}>
        <WhatIDo />
      </StickyScrollSection>

      <StickyScrollSection index={2} zIndex={20}>
        <WhySoftwareFails />
      </StickyScrollSection>

      <StickyScrollSection index={3} zIndex={30}>
        <HowIWork />
      </StickyScrollSection>

      <StickyScrollSection index={4} zIndex={40}>
        <SelectedWork />
      </StickyScrollSection>

      <div className="relative z-[60] bg-background">
        <Contact />
      </div>
      <Toaster />
    </TechnicalLayout>
  );
}
