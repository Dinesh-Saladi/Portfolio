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
  roleLong: "Software Engineer based in Hyderabad",
  email: "dineshsaladi79@gmail.com",
  location: "Hyderabad, India",
  timezone: "GMT+5:30",
  availability: "SWE Intern @ Microsoft",
  github: "https://github.com/Dinesh-Saladi",
  linkedin: "https://www.linkedin.com/in/dinesh-saladi-07a441290/",
  twitter: "https://x.com/0xdinesh79",
  instagram: "https://www.instagram.com/_.dinesh79._/",
  url: "https://dineshsaladi.com",
} as const;

export const HERO_LINES = [
  { text: "DINESH SALADI", ornateIndices: [0, 7] },
  { text: "SOFTWARE", ornateIndices: [] },
  { text: "ENGINEER", ornateIndices: [] },
  { text: "INTERN @ MICROSOFT", ornateIndices: [] },
  { text: "BASED IN HYDERABAD", ornateIndices: [] },
] as const;

export const PHILOSOPHY_PHRASES = [
  "I build digital experiences",
  "that feel alive — blending",
  "clean engineering with",
  "motion, interaction, and",
  "thoughtful design.",
] as const;

export const PARALLAX_ROWS = [
  { text: "SOFTWARE ENGINEER •", direction: "left", speed: 1.2 },
  { text: "FULL STACK DEVELOPER •", direction: "right", speed: 1.0 },
  { text: "CREATIVE CODER •", direction: "left", speed: 0.8 },
] as const;

export interface Project {
  title: string;
  category: string;
  client: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
}

export const PROJECTS: Project[] = [
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

export const SKILLS = [
  { label: "Languages", items: "C++, Java, JavaScript, TypeScript" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS, HTML/CSS" },
  { label: "Backend", items: "Node.js, Express, REST APIs, Socket.IO" },
  { label: "Databases", items: "SQL, ER Modeling, DBMS Design, Prisma" },
  { label: "Tools", items: "Git, GitHub, Linux, VS Code" },
  { label: "Currently", items: "SWE Intern @ Microsoft" },
] as const;

export const ABOUT_PARAGRAPHS = {
  primary:
    "Computer Science student at NIT Warangal and incoming Software Engineering Intern at Microsoft. I build reliable, scalable software systems with a strong focus on clean design, performance, and real-world impact.",
  secondary:
    "From real-time auction systems to AI-powered SaaS platforms, I enjoy the challenge of building products that feel as good as they perform. Strong foundation in Data Structures, Algorithms, and Systems — with deep interest in backend engineering, distributed systems, and cloud platforms.",
} as const;

export const SOCIALS = [
  { label: "GITHUB", href: SITE.github },
  { label: "LINKEDIN", href: SITE.linkedin },
  { label: "X / TWITTER", href: SITE.twitter },
  { label: "INSTAGRAM", href: SITE.instagram },
] as const;

export const NAV_LINKS = [
  { label: "GITHUB", href: SITE.github },
  { label: "LINKEDIN", href: SITE.linkedin },
  { label: "CONTACT", href: `mailto:${SITE.email}` },
] as const;

export const PRELOADER_WORDS = [
  { text: "Hello", lang: "en", font: "'Dancing Script', cursive", style: "normal" },
  { text: "नमस्ते", lang: "hi", font: "'Tiro Devanagari Hindi', serif", style: "normal" },
  { text: "నమస్కారం", lang: "te", font: "'Tiro Telugu', serif", style: "normal" },
  { text: "Bonjour", lang: "fr", font: "'Cormorant Garamond', serif", style: "italic" },
  { text: "こんにちは", lang: "ja", font: "'Noto Serif JP', serif", style: "normal" },
] as const;

export const METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: `Portfolio of ${SITE.name} — ${SITE.roleLong}. Building interactive digital experiences with clean code and creative animations.`,
  keywords: [
    SITE.name,
    SITE.role,
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "Web Animation",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.role}`,
    siteName: SITE.name,
    description: `Portfolio of ${SITE.name} — ${SITE.roleLong}. Building interactive digital experiences with clean code and creative animations.`,
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
    "Software Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Animation",
  ],
};
