"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Project {
  title: string;
  category: string;
  client: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "LiveBid",
    category: "Full Stack Development",
    client: "Personal",
    description:
      "Built a real-time auction platform where every second counts. Features live bidding with zero-lag WebSocket updates, competitor insights, and transparent bidding history with verified listings. Designed for smart bidders who want to win with confidence.",
    tech: ["React", "Express", "Socket.IO", "Node.js"],
    year: "2025",
    link: "https://live-bid.onrender.com/",
  },
  {
    title: "FormX",
    category: "AI-Powered SaaS",
    client: "Personal",
    description:
      "Developed an AI-powered form creation platform — one prompt, infinite possibilities. Features smart form generation from natural language, drag-and-drop customization, instant publishing with real-time analytics, and visual response dashboards.",
    tech: ["React", "AI/ML", "Node.js", "Analytics"],
    year: "2025",
    link: "https://formx-zfhf.onrender.com/",
  },
  {
    title: "LinkFlow",
    category: "Web Application",
    client: "Personal",
    description:
      "Created a link-in-bio platform for creators. Everything you are, in one simple link. Features unlimited links, built-in follower system, performance analytics, and full customization — making it dead simple for creators to stand out.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
    year: "2025",
    link: "https://link-flow-eight.vercel.app/",
  },
];

function ProjectRow({
  project,
  index,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="project-row"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: isHovered ? "#e8e8e8" : "transparent",
        opacity: isDimmed ? 0.3 : 1,
        transition: "opacity 0.1s ease-in-out, background 0.1s ease-in-out",
      }}
    >
      <div
        className="interactive grid cursor-pointer grid-cols-12 items-center px-6 py-7 md:px-10 min-h-[36px] md:min-h-[48px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* PROJECT */}
        <div className="col-span-6 md:col-span-4">
          <h3
            className="text-base font-medium tracking-tight md:text-xl"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.6)",
              transform: isHovered ? "translateX(10px)" : "translateX(0)",
              transition: "color 0.1s ease-in-out, transform 0.1s ease-in-out",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* CATEGORY */}
        <div className="col-span-3 hidden md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.1s ease-in-out",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* CLIENT */}
        <div className="hidden md:col-span-3 md:block">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.1s ease-in-out",
            }}
          >
            {project.client}
          </p>
        </div>

        {/* YEAR */}
        <div className="col-span-6 md:col-span-2 flex justify-end">
          <p
            className="text-sm font-light md:text-base"
            style={{
              color: isHovered ? "#0a0a0a" : "rgba(255,255,255,0.35)",
              transition: "color 0.1s ease-in-out",
            }}
          >
            {project.year}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden bg-[#0a0a0a]"
          >
            <div className="px-6 pb-10 pt-4 md:px-10">
              <p className="max-w-2xl text-sm font-light leading-relaxed text-white/70">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-light text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive mt-6 inline-flex items-center gap-2 text-sm font-light text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  See website
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20" id="projects">
      {/* Column headers */}
      <div ref={headerRef} className="px-6 pb-6 md:px-10">
        <motion.div
          className="grid grid-cols-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="col-span-6 md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-white/30">PROJECT</p>
          </div>
          <div className="col-span-3 hidden md:block">
            <p className="text-xs tracking-[0.2em] text-white/30">CATEGORY</p>
          </div>
          <div className="hidden md:col-span-3 md:block">
            <p className="text-xs tracking-[0.2em] text-white/30">CLIENT</p>
          </div>
          <div className="col-span-6 md:col-span-2 flex justify-end">
            <p className="text-xs tracking-[0.2em] text-white/30">YEAR</p>
          </div>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <ProjectRow
          key={project.title}
          project={project}
          index={i}
          isHovered={hoveredIndex === i}
          isDimmed={hoveredIndex !== null && hoveredIndex !== i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </section>
  );
}
