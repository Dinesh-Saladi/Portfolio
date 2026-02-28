# Animations

## Global Easing

The entire site uses one signature cubic-bezier for consistency:

```
[0.76, 0, 0.24, 1]
```
CSS equivalent: `cubic-bezier(0.76, 0, 0.24, 1)`

This is an aggressive ease-in-out that starts fast and decelerates smoothly — gives a premium, snappy feel.

## Smooth Scroll (Lenis)

```ts
{
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
}
```

## Preloader

### Word Cycling
- Each word fades in from below, holds briefly, fades out upward
- **Initial**: `{ opacity: 0, y: 40 }`
- **Animate**: `{ opacity: 0.7, y: 0 }`
- **Exit**: `{ opacity: 0, y: -40 }`
- **Duration**: 0.3s per word, easeInOut
- **Hold time**: 350ms between words, 400ms on last word
- Per-word font family and style via inline `style` prop

### Progress Bar
- Thin 2px bar at bottom, `bg-white/30`
- Width animates from 0% to 100% proportionally
- `maxWidth: 200px`

### Exit
- Entire preloader slides up: `exit={{ y: "-100vh" }}`
- Duration: 0.8s with signature easing
- `onComplete` fires after 800ms delay

## Hero

### Line Stagger
- Each line reveals from below with opacity
- **Hidden**: `{ opacity: 0, y: 80 }`
- **Visible**: `{ opacity: 1, y: 0 }`
- **Duration**: 1s per line
- **Delay**: `1.4 + (lineIndex * 0.12)` — starts after preloader
- Character-level rendering for ornate cap support

### Parallax on Scroll
- Content moves up: `y: [0, -200]` mapped to scroll progress
- Opacity fades: `[1, 0]` over first 50% of scroll
- Scroll offset: `["start start", "end start"]`

## Header

- Fades in from above after preloader
- **Initial**: `{ opacity: 0, y: -20 }`
- **Animate**: `{ opacity: 1, y: 0 }`
- **Delay**: 1.8s (after hero lines finish)
- **Duration**: 0.8s

## Text Reveal Section

### Word-by-Word Opacity
- Each word starts at `opacity: 0.15` and reveals to `opacity: 1`
- Driven by `scrollYProgress` — mapped per phrase and per word
- Scroll offset: `["start 0.9", "start 0.2"]`
- No motion transforms — purely opacity-driven

## Text Parallax Banners

### Horizontal Slide on Scroll
- Alternating left/right directions
- Speed multiplier per row (1.2, 1.0, 0.8)
- X translation: ±150px * speed, mapped to scroll
- 4 copies of text per row for infinite feel
- Scroll offset: `["start end", "end start"]`

## Projects

### Row Entrance
- Each row enters from below
- **Initial**: `{ opacity: 0, y: 20 }`
- **Animate**: `{ opacity: 1, y: 0 }`
- **Delay**: `index * 0.1` stagger
- **Duration**: 0.6s
- Triggered by `useInView` with `-50px` margin

### Row Hover (React State)
- Parent tracks `hoveredIndex` state
- **Hovered row**: `background: #e8e8e8`, all text `#0a0a0a`, title shifts `translateX(10px)`
- **Non-hovered rows**: `opacity: 0.3` (dimmed)
- **All transitions**: `0.1s ease-in-out` (snappy)
- Applied via inline `style` — NOT CSS classes

### Expand/Collapse
- **AnimatePresence** for enter/exit
- **Enter**: `{ height: 0, opacity: 0 }` → `{ height: "auto", opacity: 1 }`
- **Exit**: reverse
- **Duration**: 0.5s with signature easing
- Expanded content has `bg-[#0a0a0a]` to reset from hover white

### "See website" Link
- `whileHover={{ x: 5 }}` — slides right on hover

## About

### Content Entrance
- Section label: `{ opacity: 0, y: 20 }` → visible
- Main paragraph: `{ opacity: 0, y: 40 }` → visible, delay 0.1
- Secondary paragraph: delay 0.2
- Skills grid items: delay `0.3 + (i * 0.08)` stagger
- All use `whileInView` with `viewport: { once: true }`

### Background Parallax
- Giant "DINESH SALADI" text at `text-[20vw]`, `text-white/[0.02]`
- Moves `y: [100, -100]` on scroll
- Behind content with `-z-10`

## Contact

### Section Entrance
- Entire section: `y: [100, 0]`, `opacity: [0, 1]` over first 50% of scroll
- CTA lines stagger with 0.1s delay between them
- Email button: delay 0.2
- Social links: delay `0.3 + (i * 0.08)`

## StaggerLink (Letter Roll)

### Slot-Machine Effect
- Each letter has TWO copies stacked vertically
- Container: `overflow-hidden`, `height: 1.2em`
- **Idle**: Both copies at `y: 0` (top visible, bottom hidden below)
- **Hover**: Both shift `y: "-100%"` — top slides out, bottom slides in
- **Stagger**: `delay: i * 0.025` per character
- **Duration**: 0.3s with signature easing
- Combined with `.link-hover` underline

## Link Underline (CSS)

```css
.link-hover::after {
  content: '';
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}
.link-hover:hover::after {
  width: 100%;
}
```
Slides from left to right on hover.

## 404 Page

- Content: `{ opacity: 0, y: 40 }` → visible, 0.8s
- Subtitle: `{ opacity: 0 }` → visible, delay 0.3
- Link: `{ opacity: 0, y: 20 }` → visible, delay 0.5

## Transition Speed Reference

| Context | Duration | Notes |
|---------|----------|-------|
| Preloader word | 0.3s | easeInOut |
| Preloader exit | 0.8s | Signature easing |
| Hero lines | 1.0s | Staggered 0.12s apart |
| Header enter | 0.8s | 1.8s initial delay |
| Project row enter | 0.6s | Staggered 0.1s |
| Project hover | 0.1s | ease-in-out (snappy) |
| Project expand | 0.5s | Signature easing |
| About elements | 0.5–0.8s | Staggered |
| Contact elements | 0.5–0.8s | Staggered |
| StaggerLink letter | 0.3s | Staggered 0.025s |
| Link underline | 0.5s | Signature easing |
| Button hover color | 0.3s | Standard |
