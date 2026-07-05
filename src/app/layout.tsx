import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { METADATA, PERSON_SCHEMA } from "@/lib/data";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased">
        {/* Skip navigation — first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[10000] focus-visible:rounded focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-black"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
