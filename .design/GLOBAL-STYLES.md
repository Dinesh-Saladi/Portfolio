# Global Styles

## CSS Variables

```css
:root {
  --background: #0a0a0a;
  --foreground: #e8e8e8;
  --accent: #999;
  --muted: #555;
  --cursor-size: 20px;
  --font-serif: 'Cormorant Garamond', 'Georgia', serif;
  --font-sans: 'Inter', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Tailwind Theme (v4 syntax)

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

## Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto; /* Lenis handles smooth scroll */
}
```

## Body

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  overflow-x: hidden;
}
```

## Font Classes

```css
.font-serif { font-family: var(--font-serif); }
.font-sans { font-family: var(--font-sans); }
```

## Ornate Cap

```css
.ornate-cap {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
}
```

## Selection

```css
::selection {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}
```

## Lenis Overrides

```css
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }
```

## Project Row Borders

```css
.project-row {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.project-row:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Link Hover Underline

```css
.link-hover {
  position: relative;
  display: inline-block;
}
.link-hover::after {
  content: '';
  position: absolute;
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

## Scrollbar

```css
::-webkit-scrollbar {
  width: 0px; /* Hidden */
}
```

## Utility Animations

```css
.cursor-blend {
  mix-blend-mode: difference;
}

@keyframes slide-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes slide-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
```

## Import Order

```css
@import url('https://fonts.googleapis.com/css2?family=...');
@import "tailwindcss";
/* Then @font-face, :root, @theme, resets, component styles */
```

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.x | Framework |
| react | 19.x | UI library |
| framer-motion | latest | All animations |
| lenis | latest | Smooth scroll |
| gsap | latest | Available but unused |
| @gsap/react | latest | Available but unused |
| tailwindcss | 4.x | Styling |
| typescript | 5.x | Type safety |
