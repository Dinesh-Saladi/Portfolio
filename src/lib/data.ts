import type { Metadata } from "next";

/**
 * Central content source — separates all personal/branding data from
 * presentation so future updates touch one file.
 *
 * Mirrors the structure originally inlined in the component files so no
 * behaviour changes; the components now import from here instead.
 */

export const SITE = {
  name: "Dinesh Saladi",
  role: "Software Engineer",
  roleLong: "Software Engineer specializing in AI systems and backend engineering",
  email: "dineshsaladi79@gmail.com",
  location: "Hyderabad, India",
  timezone: "GMT+5:30",
  availability: "SWE Intern @ Microsoft",
  github: "https://github.com/Dinesh-Saladi",
  linkedin: "https://www.linkedin.com/in/dinesh-saladi-07a441290/",
  twitter: "https://x.com/0xdinesh79",
  instagram: "https://www.instagram.com/_.dinesh79._/",
  url: "https://dineshsaladi.com",
  resume: "/resume.pdf",
} as const;

export const HERO_LINES = [
  { text: "DINESH SALADI", ornateIndices: [0, 7] },
  { text: "SOFTWARE", ornateIndices: [] },
  { text: "ENGINEER", ornateIndices: [] },
  { text: "AI SYSTEMS  •  BACKEND ENGINEERING", ornateIndices: [] },
  { text: "INTERN @ MICROSOFT", ornateIndices: [] },
  { text: "BASED IN HYDERABAD", ornateIndices: [] },
] as const;

export const PHILOSOPHY_PHRASES = [
  "I build intelligent software systems",
  "that combine backend engineering,",
  "AI agents, and thoughtful user",
  "experiences. From distributed",
  "systems to AI-powered automation,",
  "I enjoy solving complex engineering",
  "problems with scalable, reliable",
  "software.",
] as const;

export const PARALLAX_ROWS = [
  { text: "SOFTWARE ENGINEER •", direction: "left", speed: 1.2 },
  { text: "FULL STACK DEVELOPER •", direction: "right", speed: 1.0 },
  { text: "CREATIVE CODER •", direction: "left", speed: 0.8 },
] as const;

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  client: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    title: "LiveBid",
    category: "Real-Time Systems",
    client: "Personal",
    description:
      "A real-time auction platform built around an event-driven backend. Socket.IO and WebSocket connections push zero-lag bid updates to all participants, while a concurrency-safe bidding layer with race-condition-safe updates guarantees no double-bids or stale data — even under peak load. PostgreSQL persists every auction, bid, and user state; Express.js orchestrates the event loop; and the React frontend renders live timers and competitor insights with verified listings.",
    tech: ["Socket.IO", "WebSockets", "Express.js", "PostgreSQL"],
    year: "2025",
    link: "https://live-bid.onrender.com/",
    links: [
      { label: "Live Demo", href: "https://live-bid.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Dinesh-Saladi/LiveBid" },
    ],
  },
  {
    title: "FormX",
    category: "AI-Powered SaaS",
    client: "Personal",
    description:
      "An AI-powered form generation platform that turns a single natural-language prompt into a fully structured form — dynamic schema generation, conditional logic, and field validation all derived from the prompt itself. PostgreSQL stores form definitions and response data, REST APIs expose the CRUD surface, and a React + ShadCN UI frontend provides drag-and-drop customization, instant publishing, and real-time visual response dashboards.",
    tech: ["React", "ShadCN UI", "PostgreSQL", "REST APIs"],
    year: "2025",
    link: "https://formx-zfhf.onrender.com/",
    links: [
      { label: "Live Demo", href: "https://formx-zfhf.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Dinesh-Saladi/FormX" },
    ],
  },
  {
    title: "LinkFlow",
    category: "Creator Platform",
    client: "Personal",
    description:
      "A link-in-bio platform for creators with built-in authentication, performance analytics, and a fully responsive UI. Next.js powers the frontend with SSR for fast profile loads, Prisma manages the database layer for user accounts, link trees, and follower relationships, and the analytics dashboard tracks click-through rates and follower growth. Full customization for unlimited links — making it simple for creators to stand out.",
    tech: ["Next.js", "Prisma", "Authentication", "Analytics"],
    year: "2025",
    link: "https://link-flow-eight.vercel.app/",
    links: [
      { label: "Live Demo", href: "https://link-flow-eight.vercel.app/" },
    ],
  },
];

export const SKILLS = [
  { label: "Languages", items: "C++, Java, Python, JavaScript, SQL, PowerShell" },
  { label: "Frontend", items: "React, Vite, Tailwind CSS, ShadCN UI" },
  { label: "Backend", items: "Node.js, Express.js, Flask, REST APIs, Socket.IO" },
  { label: "AI / Agents", items: "LLM Orchestration, Prompt Engineering, Multi-Agent Pipelines" },
  { label: "Databases", items: "PostgreSQL, Oracle SQL" },
  { label: "Tools & Platforms", items: "Git, GitHub, Docker, Azure DevOps, Linux, Hyper-V, Postman" },
] as const;

export const ABOUT_PARAGRAPHS = {
  primary:
    "Computer Science student at NIT Warangal and Software Engineering Intern at Microsoft. I enjoy building intelligent software systems that combine backend engineering, distributed systems, and AI agents to solve real-world problems. From autonomous multi-agent platforms to real-time applications, I focus on designing scalable, reliable systems while crafting interfaces that feel intuitive and polished.",
  secondary:
    "Strong foundation in Data Structures & Algorithms, Operating Systems, DBMS, and Computer Networks, with growing interests in cloud infrastructure, developer tools, and AI-powered automation.",
} as const;

export const SOCIALS = [
  { label: "GITHUB", href: SITE.github },
  { label: "LINKEDIN", href: SITE.linkedin },
  { label: "RESUME", href: SITE.resume },
  { label: "X / TWITTER", href: SITE.twitter },
  { label: "INSTAGRAM", href: SITE.instagram },
] as const;

export const NAV_LINKS = [
  { label: "GITHUB", href: SITE.github },
  { label: "LINKEDIN", href: SITE.linkedin },
  { label: "RESUME", href: SITE.resume },
  { label: "CONTACT", href: `mailto:${SITE.email}` },
] as const;

export const PRELOADER_WORDS = [
  { text: "Hello", lang: "en", font: "'Dancing Script', cursive", style: "normal" },
  { text: "नमस्ते", lang: "hi", font: "'Tiro Devanagari Hindi', serif", style: "normal" },
  { text: "నమస్కారం", lang: "te", font: "'Tiro Telugu', serif", style: "normal" },
  { text: "Bonjour", lang: "fr", font: "'Cormorant Garamond', serif", style: "italic" },
  { text: "こんにちは", lang: "ja", font: "'Noto Serif JP', serif", style: "normal" },
] as const;

/* ── Experience ──────────────────────────────── */

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  link?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Microsoft",
    role: "Software Engineering Intern",
    period: "May 2026 – July 2026",
    location: "Hyderabad, India",
    summary:
      "Built an autonomous multi-agent orchestration platform that automates the complete security remediation workflow — from vulnerability reproduction to pull request generation.",
    highlights: [
      "Built an orchestration platform coordinating 9 specialized AI agents.",
      "Engineered crash-safe execution using subprocess lifecycle management and persistent state recovery.",
      "Designed a self-learning framework that extracts reusable knowledge from completed executions and continuously improves future agent performance.",
      "Developed a React + Flask monitoring dashboard featuring live execution visualization, human approval gates, retry controls, and configurable agent workflows.",
    ],
    tech: [
      "Python",
      "Flask",
      "React",
      "REST APIs",
      "LLMs",
      "AI Agents",
      "Azure DevOps",
      "Docker",
    ],
  },
];

/* ── Competitive Programming ─────────────────── */

export interface CPPlatform {
  name: string;
  rating: string;
  rank: string;
  url: string;
}

export const COMPETITIVE_PROGRAMMING = {
  platforms: [
    { name: "LeetCode", rating: "1870", rank: "Knight", url: "https://leetcode.com/u/DineshSaladi/" },
    { name: "Codeforces", rating: "1383", rank: "Pupil", url: "https://codeforces.com/profile/Dinesh-Saladi" },
    { name: "CodeChef", rating: "1664", rank: "3 Star", url: "https://www.codechef.com/users/dineshsaladi" },
  ] satisfies CPPlatform[],
} as const;

/* ── SEO metadata ────────────────────────────── */

export const METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: `Portfolio of ${SITE.name} — ${SITE.roleLong}. Building scalable backend systems, AI-powered automation platforms, and real-time applications with a focus on engineering depth and elegant interfaces.`,
  keywords: [
    SITE.name,
    SITE.role,
    "Backend Engineering",
    "AI Systems",
    "Distributed Systems",
    "Full Stack Developer",
    "Software Engineer Intern",
    "Microsoft Intern",
    "NIT Warangal",
    "Competitive Programming",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Flask",
    "PostgreSQL",
    "Socket.IO",
    "WebSockets",
    "Portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.role}`,
    siteName: SITE.name,
    description: `Portfolio of ${SITE.name} — ${SITE.roleLong}. Building scalable backend systems, AI-powered automation platforms, and real-time applications.`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: `Portfolio of ${SITE.name} — ${SITE.roleLong}.`,
    creator: "@0xdinesh79",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** JSON-LD Person schema for rich search results. */
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: SITE.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  sameAs: [SITE.github, SITE.linkedin, SITE.twitter, SITE.instagram],
  knowsAbout: [
    "Backend Engineering",
    "AI Systems",
    "Distributed Systems",
    "Software Engineering",
    "Full Stack Development",
    "Competitive Programming",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Flask",
    "PostgreSQL",
    "Socket.IO",
    "WebSockets",
    "LLM Orchestration",
    "Multi-Agent Pipelines",
    "Microsoft Azure DevOps",
    "Docker",
  ],
};
