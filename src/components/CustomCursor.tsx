"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const INTERACTIVE_SEL = "a, button, .interactive, input, textarea, select";
const SPRING = { damping: 25, stiffness: 300, mass: 0.5 };
const SIZE_SPRING = { damping: 20, stiffness: 300 };

/**
 * A performant custom cursor that expands over interactive elements.
 * - Respects `prefers-reduced-motion` (hidden).
 * - Uses a single event delegation listener instead of per-element
 *   bindings + MutationObserver.
 * - Hidden on touch devices.
 */
export default function CustomCursor() {
  const reduced = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(20);

  const x = useSpring(cursorX, SPRING);
  const y = useSpring(cursorY, SPRING);
  const size = useSpring(cursorSize, SIZE_SPRING);

  const isHovered = useRef(false);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);

      /* Check if the pointer is over an interactive target using
         elementFromPoint — avoids per-element listeners entirely. */
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const hovering = target?.closest?.(INTERACTIVE_SEL) != null;
      if (hovering !== isHovered.current) {
        isHovered.current = hovering;
        cursorSize.set(hovering ? 60 : 20);
      }
    },
    [cursorX, cursorY, cursorSize],
  );

  useEffect(() => {
    /* Only activate on fine-pointer devices. */
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (reduced) return;

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove, reduced]);

  /* Never render on touch or reduced motion. */
  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden rounded-full bg-white mix-blend-difference md:block"
      style={{
        x,
        y,
        width: size,
        height: size,
      }}
    />
  );
}
