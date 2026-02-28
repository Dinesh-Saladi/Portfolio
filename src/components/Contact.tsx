"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggerLink from "./StaggerLink";

const socials = [
  { label: "GITHUB", href: "https://github.com/Dinesh-Saladi" },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/dinesh-saladi-07a441290/",
  },
  { label: "X / TWITTER", href: "https://x.com/dinesh_saladi" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/_.dinesh79._/" },
];

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
      className="relative px-6 py-32 pb-24 md:px-10"
      id="contact"
    >
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.p>

        {/* Big CTA text */}
        <div className="mt-16">
          <motion.h2
            className="text-5xl font-[200] leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            Let&apos;s work
          </motion.h2>
          <motion.h2
            className="text-5xl font-[200] leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            together
          </motion.h2>
        </div>

        {/* Email */}
        <motion.div
          className="mt-12 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <a
            href="mailto:dineshsaladi79@gmail.com"
            className="interactive group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 text-sm font-light text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5 sm:text-base md:text-lg"
            style={{ padding: "6px 8px" }}
          >
            <span className="whitespace-nowrap">dineshsaladi79@gmail.com</span>
            <span className="inline-flex flex-shrink-0 items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M1 11L11 1M11 1H3M11 1V9"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socials.map((social, i) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.08,
                ease: [0.76, 0, 0.24, 1],
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
          © {new Date().getFullYear()} Dinesh Saladi
        </p>
      </div>
    </section>
  );
}
