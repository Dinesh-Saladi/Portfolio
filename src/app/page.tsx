"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TextRevealSection from "@/components/TextRevealSection";
import TextParallax from "@/components/TextParallax";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SmoothScroll>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Header />
      <main className="m-1">
        <Hero />
        <TextRevealSection />
        <TextParallax />
        <Projects />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
