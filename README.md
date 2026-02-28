# Dinesh Saladi — Portfolio

A dark, editorial portfolio website built with typography-driven design and rich scroll animations.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Fonts**: Cormorant Garamond (serif), Inter (sans-serif)

## Features

- Multilingual preloader with culturally appropriate fonts
- Full-viewport typographic hero with parallax scroll
- Scroll-driven word-by-word text reveal
- Horizontal parallax text banners
- Interactive project table with hover color inversion
- Per-letter slot-machine link animation (StaggerLink)
- Responsive 12-column grid layout
- Custom 404 page
- Dark mode only — `#0a0a0a` / `#e8e8e8`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # CSS variables, fonts, reusable styles
│   ├── layout.tsx        # Root layout with font loading
│   ├── page.tsx          # Main page composing all sections
│   └── not-found.tsx     # Custom 404 page
├── components/
│   ├── Preloader.tsx     # Multilingual greeting intro
│   ├── Header.tsx        # Fixed nav with StaggerLink
│   ├── Hero.tsx          # Typographic hero with parallax
│   ├── TextRevealSection.tsx  # Scroll-driven word reveal
│   ├── TextParallax.tsx  # Sliding ghost text banners
│   ├── Projects.tsx      # Interactive project table
│   ├── About.tsx         # Bio + skills grid
│   ├── Contact.tsx       # CTA + email + socials + footer
│   ├── StaggerLink.tsx   # Letter roll hover animation
│   └── SmoothScroll.tsx  # Lenis wrapper
└── .design/              # Design system reference docs
```
