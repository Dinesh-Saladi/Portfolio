import Hero from "@/components/Hero";
import TextRevealSection from "@/components/TextRevealSection";
import TextParallax from "@/components/TextParallax";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TextRevealSection />
      <TextParallax />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
