"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "Hello", font: "'Dancing Script', cursive", style: "normal" },
  { text: "नमस्ते", font: "'Tiro Devanagari Hindi', serif", style: "normal" },
  { text: "నమస్కారం", font: "'Tiro Telugu', serif", style: "normal" },
  { text: "Bonjour", font: "'Cormorant Garamond', serif", style: "italic" },
  { text: "こんにちは", font: "'Noto Serif JP', serif", style: "normal" },
  //{ text: "Hola", font: "'Playfair Display', serif", style: "italic" },
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 350);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 800);
      }, 400);
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
          <motion.p
            key={words[index].text}
            className="text-4xl font-light tracking-tight text-white md:text-6xl"
            style={{
              fontFamily: words[index].font,
              fontStyle: words[index].style,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {words[index].text}
          </motion.p>
          <motion.div
            className="absolute bottom-10 h-[2px] bg-white/30"
            initial={{ width: "0%" }}
            animate={{
              width: `${((index + 1) / words.length) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ maxWidth: "200px" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
