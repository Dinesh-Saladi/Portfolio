"use client";

import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduced = useReducedMotion();

  /* Capture the resting center once on mouseenter so the displacement
     calculation isn't affected by the transform we apply. */
  const restRef = useRef<{ cx: number; cy: number; maxL: number; maxR: number; maxT: number; maxB: number } | null>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    /* Reset transform first to get the true resting rect */
    x.set(0);
    y.set(0);
    const rect = ref.current.getBoundingClientRect();
    restRef.current = {
      cx: rect.left + rect.width / 2,
      cy: rect.top + rect.height / 2,
      maxL: rect.left - 8,
      maxR: window.innerWidth - (rect.left + rect.width) - 8,
      maxT: rect.top - 8,
      maxB: window.innerHeight - (rect.top + rect.height) - 8,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rest = restRef.current;
    if (!rest) return;

    let dx = (e.clientX - rest.cx) * strength;
    let dy = (e.clientY - rest.cy) * strength;

    /* Clamp so the element never leaves the viewport */
    dx = Math.max(-rest.maxL, Math.min(rest.maxR, dx));
    dy = Math.max(-rest.maxT, Math.min(rest.maxB, dy));

    x.set(dx);
    y.set(dy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    restRef.current = null;
  };

  if (reduced) {
    return <div className={`interactive ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`interactive ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
