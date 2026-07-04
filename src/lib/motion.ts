import type { Transition, Variants } from "framer-motion";

/**
 * Single source of truth for motion timing across the site.
 * Every animation derives from these constants so the feel stays
 * cohesive and easy to tune.
 *
 * The signature easing is an aggressive ease-in-out that starts fast
 * and decelerates smoothly — the premium, snappy backbone of the site.
 */

export const EASE = [0.76, 0, 0.24, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  dramatic: 1,
  preloaderExit: 0.8,
} as const;

export const STAGGER = {
  letter: 0.025,
  item: 0.08,
  heroLine: 0.12,
} as const;

/** Shared transition presets. */
export const transitions = {
  preloaderWord: {
    duration: DURATION.fast,
    ease: "easeInOut" as const,
  },
  preloaderExit: {
    duration: DURATION.preloaderExit,
    ease: EASE,
  },
  heroLine: (i: number, base = 1.4) => ({
    duration: DURATION.dramatic,
    delay: base + i * STAGGER.heroLine,
    ease: EASE,
  }),
  headerEnter: {
    duration: DURATION.slow,
    delay: 1.8,
    ease: EASE,
  },
  elementEnter: (i: number, base = 0.3) => ({
    duration: DURATION.base,
    delay: base + i * STAGGER.item,
    ease: EASE,
  }),
} as const;

/** Common reveal variants for reuse across sections. */
export const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      delay: i * STAGGER.item,
      ease: EASE,
    },
  }),
} satisfies Variants;

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: DURATION.base,
      delay: i * STAGGER.item,
    },
  }),
} satisfies Variants;

/** Helper type for components accepting an index-based custom variant. */
export type WithIndex = { transition?: Transition };
