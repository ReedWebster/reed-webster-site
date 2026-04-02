import { Hero } from "@/components/hero";
import { Ventures } from "@/components/ventures";
import { Experience } from "@/components/experience";
import { WritingPreview } from "@/components/writing-preview";
import { Academic } from "@/components/academic";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ventures />
      <Experience />
      <WritingPreview />
      <Academic />
      <Contact />
      <Footer />
    </>
  );
}
