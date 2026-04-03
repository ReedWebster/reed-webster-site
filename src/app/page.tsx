import { Hero } from "@/components/hero";
import { Ventures } from "@/components/ventures";
import { Experience } from "@/components/experience";
import { WritingPreview } from "@/components/writing-preview";
import { Academic } from "@/components/academic";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Ambient background blur orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Sand/warm orb - top left */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#e8ddd4] opacity-40 blur-[120px] dark:bg-[#2a2118] dark:opacity-30" />
        {/* Blue/teal orb - top right */}
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-[#bde0f5] opacity-25 blur-[120px] dark:bg-[#1a2a3d] dark:opacity-20" />
        {/* Subtle sand orb - bottom */}
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-[#e8ddd4] opacity-20 blur-[140px] dark:bg-[#2a2118] dark:opacity-15" />
      </div>

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
