"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_LINES } from "@/lib/data";

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

interface HeroLineProps {
  text: string;
  ornateIndices: readonly number[];
  index: number;
}

const heroStyles = [
  { fontSize: "var(--fluid-hero-name)", weight: "300", color: "white" },
  { fontSize: "var(--fluid-hero-title)", weight: "300", color: "white" },
  { fontSize: "var(--fluid-hero-title)", weight: "300", color: "white" },
  { fontSize: "var(--fluid-hero-sub)", weight: "300", color: "rgba(255,255,255,0.7)" },
  { fontSize: "var(--fluid-hero-sub)", weight: "300", color: "rgba(255,255,255,0.7)" },
];

function HeroLine({ text, ornateIndices, index }: HeroLineProps) {
  const chars = text.split("");

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-baseline justify-center font-serif tracking-[0.04em] leading-[1.15]"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={index}
        style={{
          fontSize: heroStyles[index].fontSize,
          fontWeight: heroStyles[index].weight,
          color: heroStyles[index].color,
        }}
      >
        {chars.map((char, ci) => {
          const isOrnate = ornateIndices.includes(ci);
          if (isOrnate) {
            return (
              <span
                key={ci}
                className="inline-block"
                style={{ fontSize: "1.3em", lineHeight: 1, fontStyle: "italic", fontWeight: 300 }}
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
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  /* Background ghost layer parallax — moves in opposite direction for depth */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.03, 0.02, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Background parallax ghost text */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
      >
        <p
          className="font-serif font-[100] leading-none tracking-tighter text-white whitespace-nowrap select-none"
          style={{ fontSize: "clamp(8rem, 20vw, 25rem)" }}
        >
          DINESH SALADI
        </p>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        className="relative flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        {HERO_LINES.map((line, i) => (
          <HeroLine
            key={i}
            text={line.text}
            ornateIndices={line.ornateIndices}
            index={i}
          />
        ))}
      </motion.div>
    </section>
  );
}
