# Components

## Page Structure (top-level order)

```
SmoothScroll (Lenis wrapper)
├── Preloader (conditional, removed on complete)
├── Header (fixed, always visible)
└── main.m-1
    ├── Hero
    ├── TextRevealSection
    ├── TextParallax
    ├── Projects
    ├── About
    └── Contact (includes footer)
```

---

## 1. Preloader

**Purpose**: Fullscreen intro with multilingual greetings + progress bar  
**File**: `src/components/Preloader.tsx`

- Fullscreen fixed overlay, z-9999, `bg-[#0a0a0a]`
- Cycles through 5 greetings (Hello, नमस्ते, నమస్కారం, Bonjour, こんにちは)
- Each word uses a culturally appropriate font (see TYPOGRAPHY.md)
- Thin progress bar at bottom (2px, white/30, max 200px)
- Exits by sliding up `-100vh`
- Props: `onComplete: () => void`

---

## 2. Header

**Purpose**: Fixed navigation bar  
**File**: `src/components/Header.tsx`

- Fixed top, full width, z-50
- `mix-blend-difference` for visibility over all backgrounds
- Left: Name logo "DINESH SALADI" (text-xs, tracking 0.2em, uppercase)
- Right: Nav links (GITHUB, LINKEDIN, CONTACT) using StaggerLink
- Padding: `px-6 py-5 md:px-10`
- Enters after preloader with 1.8s delay

---

## 3. Hero

**Purpose**: Full-viewport centered typographic hero  
**File**: `src/components/Hero.tsx`

- `min-h-screen`, centered content
- Multi-line serif text composition (all Cormorant Garamond)
- Responsive vw-based font sizes (8vw → 5.5vw on desktop)
- Ornate italic caps on select letters (D, S)
- Decorative symbols: ☼, ☀, ©, ⚗
- Dynamic year via `new Date().getFullYear()`
- Text hierarchy via opacity (white → white/70 → white/50)
- Parallax scroll: content moves up 200px + fades out
- Character-by-character rendering for ornate cap support

---

## 4. TextRevealSection

**Purpose**: Scroll-driven philosophy statement  
**File**: `src/components/TextRevealSection.tsx`

- Word-by-word opacity reveal tied to scroll position
- Text: "I build digital experiences that feel alive — blending clean engineering with motion, interaction, and thoughtful design."
- Each phrase is a row, each word fades from 15% → 100% opacity
- Large text: `text-3xl md:text-5xl lg:text-6xl`, font-light
- Word spacing via flex gap `0.3em`
- Container: `min-h-[60vh]`, centered, max-w-5xl
- Scroll offset: `["start 0.9", "start 0.2"]`

---

## 5. TextParallax

**Purpose**: Decorative sliding text banners (visual divider)  
**File**: `src/components/TextParallax.tsx`

- 3 rows of large ghost text sliding horizontally on scroll
- Texts: "SOFTWARE ENGINEER •", "FULL STACK DEVELOPER •", "CREATIVE CODER •"
- Alternating left/right directions with varying speeds
- Font size: `8vw md:6vw`, weight 200, color white/[0.07]
- Tracking: `-0.04em`
- 4 copies per row for seamless looping
- Section padding: `py-20`

---

## 6. Projects

**Purpose**: Interactive project showcase table  
**File**: `src/components/Projects.tsx`

### Structure
- Column headers: PROJECT, CATEGORY, CLIENT, YEAR (12-col grid)
- Row per project with hover + expand/collapse
- 3 projects: LiveBid, FormX, LinkFlow

### Hover System
- Parent component tracks `hoveredIndex` state
- Hovered row: white bg (#e8e8e8), dark text (#0a0a0a), title shifts right 10px
- Non-hovered rows: dimmed to 30% opacity
- All transitions: 0.1s ease-in-out (very snappy)
- Applied via inline React styles, not CSS

### Expanded State
- AnimatePresence for smooth enter/exit
- Dark bg reset (#0a0a0a) inside expanded area
- Shows: description (text-white/70), tech tags (text-white/50), "See website" link
- Link has arrow SVG + whileHover x:5

### Row Layout
- 12-column grid: title 4col, category 3col, client 3col, year 2col (right-aligned)
- Mobile: title 6col, year 6col (category/client hidden)
- Padding: `px-6 py-7 md:px-10`, min-height: `36px md:48px`
- Borders: top border on each row, bottom border on last (rgba white 10%)

---

## 7. About

**Purpose**: Bio, skills, background info  
**File**: `src/components/About.tsx`

- 12-column grid layout
- Left (3col): "ABOUT" section label
- Right (8col): Two paragraphs + 6-item skills grid
- Skills grid: 2col mobile, 3col desktop
- Background: Giant parallax "DINESH SALADI" at 20vw, 2% opacity
- Section padding: `px-6 py-32 md:px-10`

---

## 8. Contact

**Purpose**: CTA + email + socials + footer  
**File**: `src/components/Contact.tsx`

- "CONTACT" section label
- "Let's work together" in large serif (5xl → 8xl), weight 200
- Email pill button: rounded-full, border, inline-flex with arrow SVG
- 4 social links in grid (2col mobile, 4col desktop) using StaggerLink
- Footer: centered copyright "© YEAR Dinesh Saladi" in text-xs white/20
- Section: scroll-driven entrance (y + opacity)

---

## 9. StaggerLink (Utility)

**Purpose**: Reusable link with per-letter slot-machine hover  
**File**: `src/components/StaggerLink.tsx`

- Each character has two copies in overflow-hidden container (height 1.2em)
- On hover: both copies shift y:-100% — top exits up, bottom enters from below
- Stagger delay: 0.025s per character
- Duration: 0.3s with signature easing
- Combined with `.link-hover` CSS class for underline
- Props: `href, label, className, target, rel`
- Used in: Header nav links, Contact social links

---

## 10. SmoothScroll (Utility)

**Purpose**: Lenis smooth scroll wrapper  
**File**: `src/components/SmoothScroll.tsx`

- Wraps entire app
- Lenis config: duration 1.2, exponential easing, smooth wheel
- Cleanup on unmount

---

## 11. Not Found (404)

**Purpose**: Styled 404 error page  
**File**: `src/app/not-found.tsx`

- Giant "404" in serif at 20vw/15vw, white/10 opacity
- Subtitle: "This page doesn't exist — yet."
- "BACK TO HOME" link with underline hover
- Animated entrance with stagger

---

## Unused / Available Components

| Component | Status | Notes |
|-----------|--------|-------|
| CustomCursor | Built, NOT rendered | Spring-physics cursor, mix-blend-difference |
| MagneticButton | Built, NOT used | Mouse-follow magnetic wrapper |
