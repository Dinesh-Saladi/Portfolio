"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { EASE, DURATION } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import MagneticButton from "./MagneticButton";

function ProjectRow({
  project,
  index,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
}: {
  project: (typeof PROJECTS)[number];
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
        background: isHovered ? "#e8e8e8" : "transparent",
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
        {/* Title — stacked with category on mobile */}
        <div className="col-span-6 md:col-span-4">
          <h3
            className="text-base font-medium tracking-tight md:text-xl"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.6)",
              transform: !reduced && isHovered ? "translateX(10px)" : "translateX(0)",
              transition: reduced ? "none" : "color 0.2s ease-in-out, transform 0.2s ease-in-out",
            }}
          >
            {project.title}
          </h3>
          {/* Mobile-only category */}
          <p
            className="mt-0.5 text-xs font-light tracking-wide md:hidden"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* CATEGORY — desktop only */}
        <div className="col-span-3 hidden md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* CLIENT — desktop only */}
        <div className="hidden md:col-span-3 md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {project.client}
          </p>
        </div>

        {/* YEAR */}
        <div className="col-span-6 md:col-span-2 flex justify-end">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.2s ease-in-out",
            }}
          >
            {project.year}
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
            className="overflow-hidden bg-[#0a0a0a]"
          >
            <div className="px-8 pb-10 pt-4 md:px-10">
              <p className="max-w-2xl text-sm font-light leading-relaxed text-white/70">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-light text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <MagneticButton strength={0.2}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive mt-6 inline-flex items-center gap-2 text-sm font-light text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    See website
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </motion.a>
                </MagneticButton>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section className="py-[var(--section-py)]" id="projects">
      {/* Section framing */}
      <div ref={headerRef} className="px-8 pb-8 md:px-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView || reduced ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.6 }}
        >
          <h2 className="text-xs tracking-[0.2em] text-white/40">SELECTED WORK</h2>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs tabular-nums tracking-[0.1em] text-white/20">
            {String(PROJECTS.length).padStart(2, "0")}
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
            <p className="text-xs tracking-[0.2em] text-white/40">PROJECT</p>
          </div>
          <div className="col-span-3 hidden md:block">
            <p className="text-xs tracking-[0.2em] text-white/40">CATEGORY</p>
          </div>
          <div className="hidden md:col-span-3 md:block">
            <p className="text-xs tracking-[0.2em] text-white/40">CLIENT</p>
          </div>
          <div className="col-span-6 md:col-span-2 flex justify-end">
            <p className="text-xs tracking-[0.2em] text-white/40">YEAR</p>
          </div>
        </motion.div>
      </div>

      {PROJECTS.map((project, i) => (
        <ProjectRow
          key={project.title}
          project={project}
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
