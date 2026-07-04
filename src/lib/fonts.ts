import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

/**
 * CSS variable map so Tailwind / global styles can reference the fonts.
 */
export const fontVariables = `${inter.variable} ${cormorant.variable}`;

/**
 * Font-family stacks matching the CSS custom properties in globals.css.
 */
export const fontStacks = {
  sans: "var(--font-inter), 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  serif:
    "var(--font-cormorant), 'Georgia', 'Times New Roman', serif",
} as const;
