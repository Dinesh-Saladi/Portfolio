# Interactions

## Hover Effects

### 1. StaggerLink — Letter Roll (Slot Machine)
**Used on**: Header nav, Contact social links

Each letter has two copies stacked vertically. On hover, both shift up — the top copy exits and the bottom copy enters.

```
Idle:     [A] visible  |  [A] hidden below
Hover:    [A] exits up  |  [A] enters from below
```

- Stagger: 0.025s per character
- Duration: 0.3s
- Combined with underline slide

### 2. Link Underline — Left-to-Right Slide
**Used on**: `.link-hover` class (StaggerLink, 404 back link)

- Pseudo-element `::after` grows width from 0 → 100%
- 1px height, `currentColor`
- Duration: 0.5s with signature easing
- Positioned 2px below text

### 3. Project Row — Color Inversion
**Used on**: Project rows

- **Hovered**: Background flips to `#e8e8e8`, text flips to `#0a0a0a`
- **Title shift**: `translateX(10px)` on hover
- **Non-hovered rows**: Dim to `opacity: 0.3`
- **Speed**: 0.1s ease-in-out (intentionally snappy)
- Managed via React state (`hoveredIndex`), not CSS `:hover`

### 4. Email Button — Border Brighten
**Used on**: Contact email pill

- Border: `white/20` → `white/40`
- Background: transparent → `white/5`
- Arrow SVG: `translate-x-0.5 -translate-y-0.5` (subtle diagonal shift)
- Duration: 0.3s

### 5. "See Website" Link — Slide Right
**Used on**: Expanded project detail

- Framer Motion `whileHover={{ x: 5 }}`
- Underline: `decoration-white/30 hover:decoration-white`

## Click Behaviors

### Project Row Expand/Collapse
- Toggle `isOpen` state on click
- AnimatePresence handles mount/unmount
- Animates height 0 → auto and opacity 0 → 1
- Dark bg (#0a0a0a) resets the white hover background

## Scroll-Driven Interactions

### 1. Hero Parallax Fade
- Content drifts up 200px as you scroll
- Opacity fades to 0 over first 50% of scroll-through

### 2. Word-by-Word Reveal (TextRevealSection)
- Words transition from 15% → 100% opacity
- Sequential: each phrase reveals as scroll progresses through its range
- Creates a "reading" effect as you scroll

### 3. Horizontal Text Slide (TextParallax)
- 3 rows slide left/right at different speeds
- Movement: ±150px * speed multiplier
- Creates depth through differential motion

### 4. About Background Parallax
- Giant name text moves y: 100 → -100 against scroll
- Very subtle (2% opacity) — adds texture without distraction

### 5. Contact Section Entrance
- Entire content block translates from y:100 → 0
- Opacity from 0 → 1 over first 50% of visibility

### 6. Element Stagger on Enter
- Projects, About skills, Contact socials all use `whileInView`
- Each item has an incremental delay: `baseDelay + (index * 0.08–0.1)`
- `viewport: { once: true }` — only triggers once

## Interaction Patterns Summary

| Pattern | Speed | Feel |
|---------|-------|------|
| Project hover | 0.1s | Snappy, immediate |
| Letter roll | 0.3s | Smooth, playful |
| Link underline | 0.5s | Elegant, flowing |
| Section entrance | 0.6–0.8s | Graceful reveal |
| Hero lines | 1.0s | Dramatic, stately |
| Smooth scroll | 1.2s | Buttery continuity |

## Design Principles for Interactions

1. **Consistency**: One easing function `[0.76, 0, 0.24, 1]` everywhere
2. **Hierarchy**: Faster = more interactive (hover), slower = more ambient (scroll)
3. **Subtlety**: Most animations are opacity/transform only — no color flash, no bounce
4. **Once-only**: Scroll reveals only fire once (`viewport: { once: true }`)
5. **React-managed hover**: Complex hover states (dimming siblings) use React state, not CSS
6. **No cursor manipulation**: Default system cursor preserved
