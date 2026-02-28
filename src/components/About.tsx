"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-6 py-32 md:px-10"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        {/* Left label */}
        <div className="col-span-12 md:col-span-3">
          <motion.p
            className="text-xs tracking-[0.3em] text-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            ABOUT
          </motion.p>
        </div>

        {/* Right content */}
        <div className="col-span-12 md:col-span-8">
          <motion.p
            className="text-2xl font-light leading-relaxed tracking-tight text-white/80 md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            Computer Science student at NIT Warangal and incoming Software
            Engineering Intern at Microsoft. I build reliable, scalable
            software systems with a strong focus on clean design, performance,
            and real-world impact.
          </motion.p>

          <motion.p
            className="mt-8 text-base font-light leading-relaxed text-white/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            From real-time auction systems to AI-powered SaaS platforms,
            I enjoy the challenge of building products that feel as good as
            they perform. Strong foundation in Data Structures, Algorithms,
            and Systems — with deep interest in backend engineering,
            distributed systems, and cloud platforms.
          </motion.p>

          {/* Skills grid */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: "Languages", items: "C++, Java, JavaScript, TypeScript" },
              { label: "Frontend", items: "React, Next.js, Tailwind CSS, HTML/CSS" },
              { label: "Backend", items: "Node.js, Express, REST APIs, Socket.IO" },
              { label: "Databases", items: "SQL, ER Modeling, DBMS Design, Prisma" },
              { label: "Tools", items: "Git, GitHub, Linux, VS Code" },
              { label: "Currently", items: "Incoming SWE Intern @ Microsoft" },
            ].map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <p className="text-xs tracking-[0.2em] text-white/30">
                  {skill.label.toUpperCase()}
                </p>
                <p className="mt-2 text-sm font-light text-white/60">
                  {skill.items}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background parallax text */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 select-none pointer-events-none"
      >
        <p className="text-[20vw] font-[100] tracking-tighter text-white/[0.02] whitespace-nowrap">
          DINESH SALADI
        </p>
      </motion.div>
    </section>
  );
}
