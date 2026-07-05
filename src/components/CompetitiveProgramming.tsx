"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { COMPETITIVE_PROGRAMMING } from "@/lib/data";
import { EASE, DURATION } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

function PlatformRow({
  name,
  rating,
  rank,
  url,
  index,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
}: {
  name: string;
  rating: string;
  rank: string;
  url: string;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="project-row"
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isInView || reduced ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: reduced ? 0 : DURATION.base,
        delay: reduced ? 0 : index * 0.08,
        ease: EASE,
      }}
      onMouseEnter={reduced ? undefined : onHover}
      onMouseLeave={reduced ? undefined : onLeave}
      style={{
        background: isHovered ? "var(--foreground)" : "transparent",
        opacity: reduced ? 1 : isDimmed ? 0.3 : 1,
        transition: reduced ? "none" : "opacity 0.2s ease-in-out, background 0.2s ease-in-out",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="interactive grid grid-cols-12 items-baseline gap-4 px-8 py-8 md:px-10 min-h-[44px] focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2 focus-visible:rounded"
      >
        {/* Platform name */}
        <div className="col-span-7 md:col-span-4">
          <h3
            className="text-lg font-medium tracking-tight md:text-2xl"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.7)",
              transform: !reduced && isHovered ? "translateX(10px)" : "translateX(0)",
              transition: reduced ? "none" : "color 0.2s ease-in-out, transform 0.2s ease-in-out",
            }}
          >
            {name}
          </h3>
        </div>

        {/* Rank — desktop only */}
        <div className="hidden md:col-span-4 md:block">
          <p
            className="text-sm font-light tracking-[0.15em]"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.4)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {rank}
          </p>
        </div>

        {/* Rating — right aligned */}
        <div className="col-span-5 md:col-span-4 flex justify-end">
          <p
            className="font-[200] tabular-nums tracking-tight"
            style={{
              fontSize: "var(--fluid-2xl)",
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.8)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {rating}
          </p>
        </div>

        {/* Rank — mobile only */}
        <div className="col-span-12 md:hidden">
          <p
            className="text-xs font-light tracking-[0.15em]"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.4)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {rank}
          </p>
        </div>
      </a>
    </motion.div>
  );
}

export default function CompetitiveProgramming() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section className="py-[var(--section-py)]" id="competitive-programming">
      {/* Section framing */}
      <div ref={headerRef} className="px-8 pb-8 md:px-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView || reduced ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6 }}
        >
          <h2 className="text-xs tracking-[0.2em] text-white/40">
            COMPETITIVE PROGRAMMING
          </h2>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs tabular-nums tracking-[0.1em] text-white/20">
            {String(COMPETITIVE_PROGRAMMING.platforms.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Column headers */}
      <div className="px-8 pb-6 md:px-10">
        <motion.div
          className="grid grid-cols-12"
          initial={{ opacity: 0 }}
          animate={isInView || reduced ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6 }}
        >
          <div className="col-span-7 md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-white/40">PLATFORM</p>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <p className="text-xs tracking-[0.2em] text-white/40">RANK</p>
          </div>
          <div className="col-span-5 md:col-span-4 flex justify-end">
            <p className="text-xs tracking-[0.2em] text-white/40">RATING</p>
          </div>
        </motion.div>
      </div>

      {/* Platform rows */}
      {COMPETITIVE_PROGRAMMING.platforms.map((p, i) => (
        <PlatformRow
          key={p.name}
          name={p.name}
          rating={p.rating}
          rank={p.rank}
          url={p.url}
          index={i}
          isHovered={hoveredIndex === i}
          isDimmed={hoveredIndex !== null && hoveredIndex !== i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </section>
  );
}
