"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRELOADER_WORDS } from "@/lib/data";

const total = PRELOADER_WORDS.length;
const DISPLAY_MS = 200;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [animating, setAnimating] = useState(true);

  /* Advance to next word after the current one has been visible long enough */
  const advance = useCallback(() => {
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setAnimating(true);
    } else {
      setShow(false);
      setTimeout(onComplete, 400);
    }
  }, [index, onComplete]);

  /* When the word finishes its enter animation, start the display timer */
  const handleEnterComplete = useCallback(() => {
    setAnimating(false);
  }, []);

  useEffect(() => {
    /* Only start the display timer after the enter animation finishes */
    if (!animating) {
      const timeout = setTimeout(advance, DISPLAY_MS);
      return () => clearTimeout(timeout);
    }
  }, [animating, advance]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center gap-12">
            {/* Word */}
            <AnimatePresence mode="wait">
              <motion.p
                key={PRELOADER_WORDS[index].text}
                className="text-4xl font-light tracking-tight text-white md:text-6xl"
                lang={PRELOADER_WORDS[index].lang}
                style={{
                  fontFamily: PRELOADER_WORDS[index].font,
                  fontStyle: PRELOADER_WORDS[index].style,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.7, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                onAnimationComplete={handleEnterComplete}
              >
                {PRELOADER_WORDS[index].text}
              </motion.p>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              <motion.div
                className="h-[1px] bg-white/20"
                style={{ width: 120 }}
              />
              <span className="text-xs tracking-[0.15em] text-white/40 tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <motion.div
                className="h-[1px] bg-white/20"
                style={{ width: 120 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
