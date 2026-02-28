# Color Palette

## Core Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Background | `#0a0a0a` | `--background` | Page background, expanded sections |
| Foreground | `#e8e8e8` | `--foreground` | Primary text, project hover bg |
| Accent | `#999` | `--accent` | Mid-emphasis elements |
| Muted | `#555` | `--muted` | Low-emphasis elements |

## White Opacity Scale

Used extensively for text hierarchy on dark backgrounds:

| Class | Opacity | Usage |
|-------|---------|-------|
| `text-white` | 100% | Primary headings, hovered elements |
| `text-white/80` | 80% | About section main text |
| `text-white/70` | 70% | Hero subtitle lines, expanded descriptions |
| `text-white/60` | 60% | Project titles (default state) |
| `text-white/50` | 50% | Footer line in hero, social links |
| `text-white/40` | 40% | About secondary text |
| `text-white/35` | 35% | Project metadata (category, client, year) - via inline rgba |
| `text-white/30` | 30% | Section labels (ABOUT, CONTACT, column headers) |
| `text-white/20` | 20% | Borders, copyright text |
| `text-white/15` | 15% | Selection background |
| `text-white/10` | 10% | 404 giant text, borders |
| `text-white/[0.07]` | 7% | Parallax ghost text |
| `text-white/[0.02]` | 2% | Background parallax name |

## Hover State Colors

| Element | Default | Hovered |
|---------|---------|---------|
| Project row bg | `transparent` | `#e8e8e8` (foreground) |
| Project row text | `rgba(255,255,255,0.6)` | `#0a0a0a` (background) |
| Non-hovered rows | `opacity: 1` | `opacity: 0.3` (dimmed) |
| Email button border | `border-white/20` | `border-white/40` + `bg-white/5` |
| Social links | `text-white/50` | `text-white` |

## Border Colors

| Usage | Value |
|-------|-------|
| Project row borders | `rgba(255, 255, 255, 0.1)` |
| Email button border | `border-white/20` |
| Link underline | `currentColor` (1px) |

## Selection

```css
::selection {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}
```
