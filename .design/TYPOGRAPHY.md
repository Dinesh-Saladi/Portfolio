# Typography

## Font Stack

### Display / Headings — Cormorant Garamond (Serif)
- **Source**: Google Fonts
- **Weights**: 300 (light), 400, 500, 600, 700 + italics
- **CSS Variable**: `--font-serif`
- **Tailwind Class**: `font-serif`
- **Usage**: Hero text, CTA headings, 404 page, ornate caps

### Body / UI — Inter (Sans-serif)
- **Source**: Google Fonts
- **Weights**: 100–900 (variable)
- **CSS Variable**: `--font-sans`
- **Tailwind Class**: `font-sans`
- **Usage**: Body text, labels, navigation, metadata

### Fallback — Geist (Local)
- **Source**: Local woff file (`GeistVF.woff`)
- **Weights**: 100–900 (variable)
- **Purpose**: System fallback for sans-serif

### Preloader Language Fonts
Each greeting uses a culturally appropriate font:

| Language | Text | Font | Style |
|----------|------|------|-------|
| English | Hello | Dancing Script | cursive, normal |
| Hindi | नमस्ते | Tiro Devanagari Hindi | serif, normal |
| Telugu | నమస్కారం | Tiro Telugu | serif, normal |
| French | Bonjour | Cormorant Garamond | serif, italic |
| Japanese | こんにちは | Noto Serif JP | serif, normal |

## Type Scale

### Hero Section
| Line | Size (mobile) | Size (desktop) | Weight | Color |
|------|--------------|----------------|--------|-------|
| Name (DINESH SALADI) | `8vw` | `5.5vw` | light (300) | white |
| Title (SOFTWARE, ENGINEER) | `7vw` | `4.5vw` | light | white |
| Subtitle (INTERN, LOCATION) | `4vw` | `2.8vw` | light | white/70 |
| Footer (FOLIO©YEAR) | `4vw` | `2.5vw` | light | white/50 |
| Line-height: `1.15` | Tracking: `0.04em` | | |

### Ornate Caps
- Applied to select initial letters (e.g., D in DINESH, S in SALADI)
- Font: Cormorant Garamond italic, weight 300
- Size: `1.3em` relative to parent
- Class: `.ornate-cap`

### Section Labels
- Size: `text-xs` (12px)
- Weight: normal
- Tracking: `0.2em` or `0.3em`
- Color: `text-white/30`
- Examples: "ABOUT", "CONTACT", "PROJECT", "CATEGORY"

### Body Text
| Context | Size | Weight | Color |
|---------|------|--------|-------|
| About main paragraph | `text-2xl md:text-3xl lg:text-4xl` | light | white/80 |
| About secondary | `text-base` | light | white/40 |
| Skills items | `text-sm` | light | white/60 |
| Project description | `text-sm` | light | white/70 |
| Tech tags | `text-xs` | light | white/50 |

### CTA Text
- "Let's work together": `text-5xl md:text-7xl lg:text-8xl`, weight 200
- Tracking: tight

### Text Reveal Section
- Size: `text-3xl md:text-5xl lg:text-6xl`
- Weight: light
- Gap: `gap-x-[0.3em]` between words

### Parallax Ghost Text
- Size: `text-[8vw] md:text-[6vw]`
- Weight: 200
- Tracking: `-0.04em`
- Color: `white/[0.07]`

### Navigation
- Size: `text-xs`
- Weight: light
- Tracking: `0.2em`
- All uppercase

## Font Loading Strategy
- Google Fonts via `<link>` in `<head>` with `preconnect`
- `display=swap` for all Google Fonts
- Local Geist fonts via `@font-face` with `font-display: swap`
