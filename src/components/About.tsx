"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ABOUT_PARAGRAPHS, SKILLS } from "@/lib/data";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-8 py-[var(--section-py)] md:px-10"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        {/* Left label */}
        <div className="col-span-12 md:col-span-3">
          <motion.p
            className="text-xs tracking-[0.3em] text-white/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            ABOUT
          </motion.p>
        </div>

        {/* Right content */}
        <div className="col-span-12 md:col-span-8">
          <motion.p
            className="font-light leading-relaxed tracking-tight text-white/80"
            style={{ fontSize: "var(--fluid-2xl)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {ABOUT_PARAGRAPHS.primary}
          </motion.p>

          <motion.p
            className="mt-8 font-light leading-relaxed text-white/40"
            style={{ fontSize: "var(--fluid-base)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {ABOUT_PARAGRAPHS.secondary}
          </motion.p>

          {/* Skills grid */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <p className="text-xs tracking-[0.2em] text-white/40">
                  {skill.label.toUpperCase()}
                </p>
                <p className="mt-2 font-light text-white/60" style={{ fontSize: "var(--fluid-sm)" }}>
                  {skill.items}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background parallax text */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 select-none pointer-events-none"
      >
        <p className="text-[20vw] font-[100] tracking-tighter text-white/[0.02] whitespace-nowrap">
          DINESH SALADI
        </p>
      </motion.div>
    </section>
  );
}
