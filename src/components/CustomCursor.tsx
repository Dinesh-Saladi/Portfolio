"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(20);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const size = useSpring(cursorSize, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseEnter = () => {
      cursorSize.set(60);
    };

    const handleMouseLeave = () => {
      cursorSize.set(20);
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, cursorSize]);

  // Re-bind on DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .interactive"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => cursorSize.set(60));
        el.addEventListener("mouseleave", () => cursorSize.set(20));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [cursorSize]);

  return (
    <motion.div
      ref={cursorRef}
      className="cursor-blend pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white"
      style={{
        x,
        y,
        width: size,
        height: size,
      }}
    />
  );
}
