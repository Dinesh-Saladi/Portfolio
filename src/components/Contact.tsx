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
      className="relative px-8 pt-[var(--section-py)] md:px-10"
      id="contact"
    >
      <motion.div style={{ y, opacity }}>
        {/* Section label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-white/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_ARR }}
        >
          CONTACT
        </motion.p>

        {/* ── CTA area — headline left, email right ── */}
        <div className="mt-24 grid grid-cols-12 gap-8 pb-32 md:mt-32 md:pb-40">
          {/* Headline (left) */}
          <div className="col-span-12 md:col-span-8">
            <motion.h2
              className="font-[200] leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "var(--fluid-cta)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.slow, ease: EASE }}
            >
              Let&apos;s work
            </motion.h2>
            <motion.h2
              className="font-[200] leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "var(--fluid-cta)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.slow, delay: 0.1, ease: EASE }}
            >
              together
            </motion.h2>
          </div>

          {/* Email CTA (right) — intentional negative space around it */}
          <div className="col-span-12 self-center md:col-span-4 md:flex md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <MagneticButton strength={0.12}>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label={`Send email to ${SITE.email}`}
                  className="interactive group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 font-light text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
                  style={{
                    padding: "16px 24px",
                    fontSize: "var(--fluid-base)",
                  }}
                >
                  <span className="whitespace-nowrap">{SITE.email}</span>
                  <span className="inline-flex flex-shrink-0 items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 11L11 1M11 1H3M11 1V9"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* ── Divider separating CTA from footer navigation ── */}
        <div className="border-t border-white/10" />

        {/* ── Footer row: socials centered ── */}
        <div className="mt-32 pb-16 md:mt-40">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 md:gap-x-16"
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

          {/* Copyright — centered beneath socials */}
          <motion.div
            className="mt-20 text-center md:mt-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.base, delay: 0.4, ease: EASE }}
          >
            <p className="text-xs font-light tracking-[0.15em] text-white/20">
              &copy; {year} {SITE.name}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
