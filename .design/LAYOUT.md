# Layout System

## Overall Structure

```
<html>
  <body.antialiased>
    <SmoothScroll>
      <Preloader />        (fixed overlay, removed after load)
      <Header />           (fixed top, z-50, mix-blend-difference)
      <main.m-1>           (4px margin all sides)
        <Hero />           (min-h-screen)
        <TextRevealSection /> (min-h-[60vh])
        <TextParallax />   (py-20)
        <Projects />       (py-20)
        <About />          (py-32)
        <Contact />        (py-32 pb-24)
      </main>
    </SmoothScroll>
  </body>
</html>
```

## Grid System

- **Framework**: Tailwind CSS v4 with `@theme inline`
- **Grid**: 12-column (`grid-cols-12`) for structured sections
- **Max width**: `max-w-7xl` (About, Contact) or `max-w-5xl` (TextReveal)
- **Full bleed**: Hero, TextParallax, Projects (no max-width)

## Horizontal Padding

Consistent across sections:

```
px-6 md:px-10
```
- Mobile: 24px (1.5rem)
- Desktop: 40px (2.5rem)

## Vertical Spacing

| Section | Top | Bottom |
|---------|-----|--------|
| Hero | auto (flex center) | auto |
| TextReveal | `py-32` | `py-32` |
| TextParallax | `py-20` | `py-20` |
| Projects | `py-20` | `py-20` |
| About | `py-32` | `py-32` |
| Contact | `py-32` | `pb-24` |

## Section Patterns

### Label + Content (12-col grid)
Used in About and Contact:
```
┌─────────────────────────────────┐
│ LABEL (3col) │ Content (8-9col) │
└─────────────────────────────────┘
```

### Centered Full-Width
Used in Hero, TextReveal, TextParallax:
```
┌─────────────────────────────────┐
│         Centered Content         │
└─────────────────────────────────┘
```

### Table Layout (12-col grid)
Used in Projects:
```
┌──────┬──────┬──────┬──────┐
│ 4col │ 3col │ 3col │ 2col │ (desktop)
│ 6col │      │      │ 6col │ (mobile, middle hidden)
└──────┴──────┴──────┴──────┘
```

## Responsive Breakpoints

Standard Tailwind breakpoints:
- Default: mobile-first
- `md:` — 768px+ (tablet/desktop adjustments)
- `lg:` — 1024px+ (large text sizes)

## Z-Index Layers

| Element | z-index |
|---------|---------|
| Preloader | 9999 |
| Header | 50 |
| Content | auto (0) |
| Background parallax | -10 |

## Overflow

- Body: `overflow-x: hidden`
- Hero, About: `overflow-hidden`
- Parallax rows: `overflow-hidden whitespace-nowrap`
- StaggerLink letters: `overflow-hidden`
- Scrollbar: hidden (width: 0px)

## Special Layout Notes

- `m-1` on `<main>` creates a 4px "frame" around the site content
- Header uses `mix-blend-difference` so it's visible over all backgrounds
- No images used anywhere — purely typographic layout
- All sections are full-viewport-width (no containing wrapper beyond main)
