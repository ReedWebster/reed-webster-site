import { Hero } from "@/components/hero";
import { Ventures } from "@/components/ventures";
import { Experience } from "@/components/experience";
import { WritingPreview } from "@/components/writing-preview";
import { Academic } from "@/components/academic";
import { Contact, Footer } from "@/components/contact";
import { SectionNav } from "@/components/section-nav";
import { BackgroundOrbs } from "@/components/background-orbs";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundOrbs />
      <SectionNav />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-border/50" /></div>
        <Ventures />
        <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-border/50" /></div>
        <Experience />
        <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-border/50" /></div>
        <WritingPreview />
        <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-border/50" /></div>
        <Academic />
        <div className="mx-auto max-w-5xl px-6"><div className="h-px bg-border/50" /></div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
