"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const phrases = [
  "I build digital experiences",
  "that feel alive — blending",
  "clean engineering with",
  "motion, interaction, and",
  "thoughtful design.",
];

function AnimatedParagraph({ phrase, progress }: { phrase: string; progress: MotionValue<number> }) {
  const words = phrase.split(" ");
  return (
    <p className="flex flex-wrap text-3xl font-light leading-snug tracking-tight text-white md:text-5xl lg:text-6xl gap-x-[0.3em]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={progress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mt-1">
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

function PhraseRow({ phrase, scrollYProgress, index, total }: {
  phrase: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const phraseProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  return <AnimatedParagraph phrase={phrase} progress={phraseProgress} />;
}

export default function TextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[60vh] items-center px-6 py-32 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {phrases.map((phrase, i) => (
          <PhraseRow
            key={i}
            phrase={phrase}
            scrollYProgress={scrollYProgress}
            index={i}
            total={phrases.length}
          />
        ))}
      </div>
    </section>
  );
}
