"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

/**
 * Client-side application shell — owns the site frame (smooth scroll,
 * preloader, fixed header, custom cursor, framed main). Rendered once
 * by the root layout so every route (including 404) inherits the same
 * shell and the preloader only fires on first load.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SmoothScroll>
      <CustomCursor />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Header />
      <main className="m-1" id="main-content">
        {children}
      </main>
    </SmoothScroll>
  );
}
