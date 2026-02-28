import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Saladi — Software Engineer",
  description:
    "Portfolio of Dinesh Saladi — Software Engineer based in Hyderabad. Building interactive digital experiences with clean code and creative animations.",
  keywords: [
    "Dinesh Saladi",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Tiro+Devanagari+Hindi:ital@0;1&family=Tiro+Telugu:ital@0;1&family=Noto+Serif+JP:wght@300;400&family=Playfair+Display:ital,wght@0,400;1,400&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
