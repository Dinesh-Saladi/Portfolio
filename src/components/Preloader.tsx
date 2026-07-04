"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRELOADER_WORDS } from "@/lib/data";

const total = PRELOADER_WORDS.length;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < total - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 700);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 800);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
