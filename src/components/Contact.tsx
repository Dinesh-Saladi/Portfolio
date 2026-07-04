"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIALS, SITE } from "@/lib/data";
import { EASE, DURATION, STAGGER } from "@/lib/motion";
import StaggerLink from "./StaggerLink";
import MagneticButton from "./MagneticButton";

const EASE_ARR = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const year = new Date().getFullYear();

  return (
    <section
      ref={containerRef}
      className="relative px-6 pt-[var(--section-py)] md:px-10"
      id="contact"
    >
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl">
        {/* 12-col grid — same structural pattern as About (label left, content right) */}
        <div className="grid grid-cols-12 gap-8">
          {/* Label column — anchors the section, mirrors "ABOUT" in About.tsx */}
          <div className="col-span-12 md:col-span-3">
            <motion.p
              className="text-xs tracking-[0.3em] text-white/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_ARR }}
            >
              CONTACT
            </motion.p>
          </div>

          {/* Content column — asymmetric, left-aligned (no forced symmetry) */}
          <div className="col-span-12 md:col-span-9">
            {/* GROUP 1 + 2 — Headline + supporting text (tight inside the group) */}
            <div>
              <motion.h2
                className="font-[200] leading-[1.05] tracking-tight text-white"
                style={{ fontSize: "var(--fluid-cta)" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: DURATION.slow, ease: EASE }}
              >
                Let's work together
              </motion.h2>

              <motion.p
                className="mt-6 font-light tracking-wide text-white/40"
                style={{ fontSize: "var(--fluid-base)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: DURATION.base, delay: 0.15, ease: EASE }}
              >
                {SITE.location} &middot; {SITE.availability}
              </motion.p>
            </div>

            {/* GROUP 3 — Email as the hairline CTA (the line IS the action) */}
            <div className="mt-24">
              <MagneticButton strength={0.12}>
                <motion.a
                  href={`mailto:${SITE.email}`}
                  aria-label={`Send email to ${SITE.email}`}
                  className="interactive group flex w-full items-baseline justify-between border-t border-white/15 pt-6 transition-colors duration-300 hover:border-white/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                >
                  <span
                    className="font-light text-white/80 transition-colors duration-300 group-hover:text-white"
                    style={{ fontSize: "var(--fluid-lg)" }}
                  >
                    {SITE.email}
                  </span>
                  <span className="inline-flex flex-shrink-0 items-center justify-center pb-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 11L11 1M11 1H3M11 1V9"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>
                </motion.a>
              </MagneticButton>
            </div>

            {/* GROUP 4 — Socials as a single inline row (signature, not grid) */}
            <motion.div
              className="mt-32 flex flex-wrap items-center gap-x-10 gap-y-4 md:gap-x-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {SOCIALS.map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: DURATION.base,
                    delay: 0.3 + i * STAGGER.item,
                    ease: EASE,
                  }}
                >
                  <StaggerLink
                    href={social.href}
                    label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.2em] font-light text-white/50 hover:text-white transition-colors duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* GROUP 5 — Closing hairline + copyright (the publisher's mark) */}
            <div className="mt-32 border-t border-white/10 pt-6">
              <p className="text-xs font-light tracking-[0.15em] text-white/25">
                &copy; {year} {SITE.name}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
