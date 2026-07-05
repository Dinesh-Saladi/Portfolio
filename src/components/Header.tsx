"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";
import StaggerLink from "./StaggerLink";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 mix-blend-difference md:px-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <a
        href="#"
        className="text-xs font-normal tracking-[0.2em] text-white uppercase focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-4"
        aria-label={`${SITE.name} — back to top`}
      >
        {SITE.name}
      </a>

      <nav className="flex items-center gap-6 md:gap-10" aria-label="Social and contact links">
        {NAV_LINKS.map((link) => (
          <StaggerLink
            key={link.label}
            href={link.href}
            label={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs tracking-[0.2em] font-light text-white"
          />
        ))}
      </nav>
    </motion.header>
  );
}
