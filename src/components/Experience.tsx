"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { EASE, DURATION } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

function ExperienceRow({
  entry,
  index,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
}: {
  entry: (typeof EXPERIENCE)[number];
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
        delay: reduced ? 0 : index * 0.1,
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
      {/* ── Main row ── */}
      <div
        className="interactive grid cursor-pointer grid-cols-12 items-center px-8 py-7 md:px-10 min-h-[44px] focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2 focus-visible:rounded"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen); }}
        aria-expanded={isOpen}
      >
        {/* Company — stacked with role on mobile */}
        <div className="col-span-6 md:col-span-4">
          <h3
            className="text-base font-medium tracking-tight md:text-xl"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.6)",
              transform: !reduced && isHovered ? "translateX(10px)" : "translateX(0)",
              transition: reduced ? "none" : "color 0.2s ease-in-out, transform 0.2s ease-in-out",
            }}
          >
            {entry.company}
          </h3>
          {/* Mobile-only role */}
          <p
            className="mt-0.5 text-xs font-light tracking-wide md:hidden"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {entry.role}
          </p>
        </div>

        {/* ROLE — desktop only */}
        <div className="col-span-3 hidden md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {entry.role}
          </p>
        </div>

        {/* LOCATION — desktop only */}
        <div className="hidden md:col-span-3 md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {entry.location}
          </p>
        </div>

        {/* PERIOD */}
        <div className="col-span-6 md:col-span-2 flex justify-end">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "var(--background)" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {entry.period}
          </p>
        </div>
      </div>

      {/* ── Expanded detail ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduced ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : DURATION.base, ease: EASE }}
            layout
            className="overflow-hidden bg-background"
          >
            <div className="px-8 pb-10 pt-4 md:px-10">
              <p className="max-w-2xl text-sm font-light leading-relaxed text-white/70">
                {entry.summary}
              </p>

              <ul className="mt-6 max-w-2xl space-y-3">
                {entry.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm font-light leading-relaxed text-white/50"
                  >
                    <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {entry.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-light text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section className="py-[var(--section-py)]" id="experience">
      {/* Section framing */}
      <div ref={headerRef} className="px-8 pb-8 md:px-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView || reduced ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6 }}
        >
          <h2 className="text-xs tracking-[0.2em] text-white/40">EXPERIENCE</h2>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs tabular-nums tracking-[0.1em] text-white/20">
            {String(EXPERIENCE.length).padStart(2, "0")}
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
          <div className="col-span-6 md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-white/40">COMPANY</p>
          </div>
          <div className="col-span-3 hidden md:block">
            <p className="text-xs tracking-[0.2em] text-white/40">ROLE</p>
          </div>
          <div className="hidden md:col-span-3 md:block">
            <p className="text-xs tracking-[0.2em] text-white/40">LOCATION</p>
          </div>
          <div className="col-span-6 md:col-span-2 flex justify-end">
            <p className="text-xs tracking-[0.2em] text-white/40">PERIOD</p>
          </div>
        </motion.div>
      </div>

      {EXPERIENCE.map((entry, i) => (
        <ExperienceRow
          key={entry.company}
          entry={entry}
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
