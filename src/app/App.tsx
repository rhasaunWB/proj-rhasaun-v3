import { Header } from "./components/Header";
import { TechnicalLayout } from "./components/TechnicalLayout";
import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { WhySoftwareFails } from "./components/WhySoftwareFails";
import { HowIWork } from "./components/HowIWork";
import { SelectedWork } from "./components/SelectedWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <TechnicalLayout>
      <Header />
      <Hero />
      <WhatIDo />
      <WhySoftwareFails />
      <HowIWork />
      <SelectedWork />
      <Contact />
      <Footer />
    </TechnicalLayout>
  );
}
