"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <h1
          className="font-serif text-[20vw] font-light leading-none tracking-tight text-white/10 md:text-[15vw]"
        >
          404
        </h1>

        <motion.p
          className="mt-4 text-lg font-light tracking-wide text-white/50 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          This page doesn&apos;t exist — yet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <Link
            href="/"
            className="link-hover mt-10 inline-block text-sm tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            BACK TO HOME
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
