"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PHILOSOPHY_PHRASES } from "@/lib/data";

function AnimatedParagraph({ phrase, progress }: { phrase: string; progress: MotionValue<number> }) {
  const words = phrase.split(" ");
  return (
    <p
      className="flex flex-wrap font-light leading-snug tracking-tight text-white gap-x-[0.3em]"
      style={{ fontSize: "var(--fluid-3xl)" }}
    >
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
  const y = useTransform(progress, range, [8, 0]);
  const blur = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

  return (
    <span className="mt-1">
      <motion.span
        style={{ opacity, y, filter: blur }}
        className="inline-block"
      >
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
      className="relative flex min-h-[60vh] items-center px-6 py-[var(--section-py)] md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {PHILOSOPHY_PHRASES.map((phrase, i) => (
          <PhraseRow
            key={i}
            phrase={phrase}
            scrollYProgress={scrollYProgress}
            index={i}
            total={PHILOSOPHY_PHRASES.length}
          />
        ))}
      </div>
    </section>
  );
}
