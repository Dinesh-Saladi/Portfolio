"use client";

import { motion } from "framer-motion";

interface StaggerLinkProps {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function StaggerLink({
  href,
  label,
  className = "",
  target,
  rel,
  ariaLabel,
}: StaggerLinkProps) {
  const letters = label.split("");

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel ?? label}
      className={`link-hover inline-flex overflow-hidden ${className}`}
      initial="idle"
      whileHover="hover"
    >
      {letters.map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden" style={{ height: "1.2em" }}>
          <motion.span
            className="inline-block"
            variants={{
              idle: { y: 0 },
              hover: {
                y: "-100%",
                transition: {
                  duration: 0.3,
                  delay: i * 0.025,
                  ease: [0.76, 0, 0.24, 1],
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          <motion.span
            className="absolute left-0 inline-block"
            style={{ top: "100%" }}
            variants={{
              idle: { y: 0 },
              hover: {
                y: "-100%",
                transition: {
                  duration: 0.3,
                  delay: i * 0.025,
                  ease: [0.76, 0, 0.24, 1],
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.a>
  );
}
