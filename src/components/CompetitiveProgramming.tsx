"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COMPETITIVE_PROGRAMMING } from "@/lib/data";
import { EASE, DURATION, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

function PlatformRow({
  name,
  rating,
  rank,
  suffix,
  index,
}: {
  name: string;
  rating: string;
  rank: string;
  suffix?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="group project-row"
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isInView || reduced ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: reduced ? 0 : DURATION.base,
        delay: reduced ? 0 : index * 0.08,
        ease: EASE,
      }}
    >
      <div className="grid grid-cols-12 items-baseline gap-4 px-8 py-8 md:px-10 min-h-[44px]">
        {/* Platform name */}
        <div className="col-span-7 md:col-span-4">
          <h3
            className="text-lg font-medium tracking-tight md:text-2xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {name}
          </h3>
          {suffix && (
            <p
              className="mt-1 text-xs font-light tracking-wide text-white/30"
            >
              {suffix}
            </p>
          )}
        </div>

        {/* Rank — desktop only */}
        <div className="hidden md:col-span-4 md:block">
          <p className="text-sm font-light tracking-[0.15em] text-white/40">
            {rank}
          </p>
        </div>

        {/* Rating — right aligned */}
        <div className="col-span-5 md:col-span-4 flex justify-end">
          <p
            className="font-[200] tabular-nums tracking-tight text-white/80"
            style={{ fontSize: "var(--fluid-2xl)" }}
          >
            {rating}
          </p>
        </div>

        {/* Rank — mobile only */}
        <div className="col-span-12 md:hidden">
          <p className="text-xs font-light tracking-[0.15em] text-white/40">
            {rank}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CompetitiveProgramming() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
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
          suffix={p.suffix}
          index={i}
        />
      ))}

      {/* Achievement highlight */}
      <div className="px-8 pt-16 md:px-10">
        <motion.div
          className="flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-baseline md:gap-12"
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: reduced ? 0 : DURATION.slow,
            delay: reduced ? 0 : 0.2,
            ease: EASE,
          }}
        >
          <p className="text-xs tracking-[0.3em] text-white/30">ACHIEVEMENT</p>
          <div>
            <p
              className="font-[200] leading-tight tracking-tight text-white/80"
              style={{ fontSize: "var(--fluid-2xl)" }}
            >
              {COMPETITIVE_PROGRAMMING.achievements[0].label}
            </p>
            <p className="mt-2 text-sm font-light text-white/40">
              {COMPETITIVE_PROGRAMMING.achievements[0].detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
