"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const currentYear = new Date().getFullYear();

const heroLines = [
  { text: "DINESH SALADI", ornateIndices: [0, 7] },
  { text: "SOFTWARE", ornateIndices: [] },
  { text: "☼ENGINEER☀", ornateIndices: [] },
  { text: "INCOMING INTERN @ MICROSOFT", ornateIndices: [] },
  { text: "BASED IN HYDERABAD", ornateIndices: [] },
  { text: `FOLIO©${currentYear}⚗`, ornateIndices: [] },
];

const lineVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.4 + i * 0.12,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

function HeroLine({
  text,
  ornateIndices,
  index,
}: {
  text: string;
  ornateIndices: number[];
  index: number;
}) {
  // Render characters with ornate caps
  const chars = text.split("");

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-baseline justify-center"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        {chars.map((char, ci) => {
          const isOrnate = ornateIndices.includes(ci);
          if (isOrnate) {
            return (
              <span
                key={ci}
                className="ornate-cap inline-block"
                style={{ fontSize: "1.3em", lineHeight: 1 }}
              >
                {char}
              </span>
            );
          }
          return (
            <span key={ci} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity }}
      >
        {heroLines.map((line, i) => (
          <div
            key={i}
            className={`font-serif tracking-[0.04em] text-white leading-[1.15] ${
              i === 0
                ? "text-[8vw] md:text-[5.5vw] font-light"
                : i === 2
                ? "text-[7vw] md:text-[4.5vw] font-light"
                : i === 3
                ? "text-[4vw] md:text-[2.8vw] font-light text-white/70"
                : i === 4
                ? "text-[4vw] md:text-[2.8vw] font-light text-white/70"
                : i === 5
                ? "text-[4vw] md:text-[2.5vw] font-light text-white/50"
                : "text-[7vw] md:text-[4.5vw] font-light"
            }`}
          >
            <HeroLine
              text={line.text}
              ornateIndices={line.ornateIndices}
              index={i}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
