"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIALS, SITE } from "@/lib/data";
import { EASE, DURATION, STAGGER } from "@/lib/motion";
import StaggerLink from "./StaggerLink";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-[var(--section-py)] pb-24 md:px-10"
      id="contact"
    >
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.p>

        {/* Big CTA text */}
        <div className="mt-16">
          <motion.h2
            className="font-[200] leading-tight tracking-tight text-white"
            style={{ fontSize: "var(--fluid-cta)" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: DURATION.slow,
              ease: EASE,
            }}
          >
            Let&apos;s work
          </motion.h2>
          <motion.h2
            className="font-[200] leading-tight tracking-tight text-white"
            style={{ fontSize: "var(--fluid-cta)" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: DURATION.slow,
              delay: 0.1,
              ease: EASE,
            }}
          >
            together
          </motion.h2>
        </div>

        {/* Availability tag line */}
        <motion.p
          className="mt-6 text-sm font-light tracking-wide text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.base, delay: 0.15, ease: EASE }}
        >
          {SITE.location} &middot; {SITE.availability}
        </motion.p>

        {/* Email — wrapped in MagneticButton for subtle follow */}
        <motion.div
          className="mt-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <MagneticButton strength={0.15}>
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Send email to ${SITE.email}`}
              className="interactive group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 font-light text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
              style={{
                padding: "10px 20px",
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
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

        {/* Socials */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
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
      </motion.div>

      {/* Footer */}
      <div className="mt-20 flex items-center justify-center px-6 py-6 md:px-10">
        <p className="text-xs font-light text-white/20">
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </section>
  );
}
