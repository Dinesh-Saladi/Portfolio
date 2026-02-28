"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SlideTextProps {
  direction: "left" | "right";
  text: string;
  speed?: number;
}

function SlideText({ direction, text, speed = 1 }: SlideTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -150 * speed]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-150 * speed, 0]);
  const x = direction === "left" ? xLeft : xRight;

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex gap-8">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[8vw] font-[200] tracking-[-0.04em] text-white/[0.07] md:text-[6vw]"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TextParallax() {
  return (
    <section className="py-20">
      <SlideText direction="left" text="SOFTWARE ENGINEER •" speed={1.2} />
      <SlideText direction="right" text="FULL STACK DEVELOPER •" speed={1} />
      <SlideText direction="left" text="CREATIVE CODER •" speed={0.8} />
    </section>
  );
}
