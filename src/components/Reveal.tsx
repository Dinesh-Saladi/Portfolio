"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE, DURATION, STAGGER } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  /** Slide distance (px). 0 = fade only. */
  y?: number;
  /** Per-element stagger delay (s). */
  stagger?: number;
  /** Base delay before the first item (s). */
  delay?: number;
  className?: string;
  /** If true, each child is animated individually (requires children as array). */
  asStagger?: boolean;
}

/**
 * Reusable scroll-driven entrance animation.
 *
 * - Fades + slides in when the element enters the viewport.
 * - Respects `prefers-reduced-motion`.
 * - Can stagger multiple children when `asStagger` is true.
 */
export function Reveal({
  children,
  y = 20,
  stagger = STAGGER.item,
  delay = 0,
  className,
  asStagger = false,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  if (asStagger) {
    return (
      <div className={className}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: DURATION.base,
                  delay: delay + i * stagger,
                  ease: EASE,
                }}
              >
                {child}
              </motion.div>
            ))
          : children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: DURATION.slow,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger wrapper – utility shorthand for staggered entrance of multiple items.
 * Renders as a `<div>` and expects an array of children.
 */
export function Stagger({
  children,
  className,
  baseDelay = 0.3,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: DURATION.base,
                delay: baseDelay + i * STAGGER.item,
                ease: EASE,
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  );
}
