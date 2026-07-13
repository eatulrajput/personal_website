"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MediumFeed } from "@/components";

// Dynamically import Spline to disable Server Side Rendering and avoid hydration mismatches
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900 border border-[var(--border-color)]">
      <div className="w-8 h-8 border-4 border-t-[var(--accent-color)] border-r-transparent border-b-[var(--text-color)] border-l-transparent rounded-full animate-spin" />
    </div>
  ),
});

const BlogPage: React.FC = () => {
  const [isPaper, setIsPaper] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleThemeCheck = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsPaper(currentTheme === "paper");
    };

    handleThemeCheck();

    const observer = new MutationObserver(handleThemeCheck);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col pt-10">
      {/* Hero Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-16 gap-10 news-border-b border-[var(--border-color)]">
        {/* Text Content */}
        <div className="z-10 order-1 md:order-none text-center md:text-left space-y-4">
          <span className="bg-[var(--accent-color)] text-white text-xs font-sans font-black px-2 py-0.5 tracking-widest uppercase">
            OPINION & IDEAS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight leading-none">
            Blogs & Reports
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-text)] max-w-xl mx-auto md:mx-0 font-serif font-light leading-relaxed">
            Welcome to my blog feed where I share tutorials, system writeups,
            and findings about backend scalability, database architecture, and
            applied machine learning models.
          </p>
        </div>

        {/* Dynamic 3D Scene / Static Print Frame based on theme */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative">
          {isPaper ? (
            <div className="w-full h-full border-4 border-double border-[var(--border-color)] p-4 flex flex-col items-center justify-center bg-[var(--bg-color)]">
              <span className="text-6xl text-[var(--accent-color)] font-black uppercase font-mono tracking-tighter">
                // 3D CANCELLED //
              </span>
              <p className="text-xs font-mono font-bold mt-2 uppercase opacity-60">
                Print Edition: Interactive Elements Suppressed
              </p>
            </div>
          ) : (
            <div className="w-full h-full rounded-none overflow-hidden border border-[var(--border-color)] grayscale hover:grayscale-0 transition duration-700">
              <Spline scene="https://prod.spline.design/tO6KM94EyYqZZTyJ/scene.splinecode" />
            </div>
          )}
        </div>
      </section>

      {/* Blog Feed */}
      <main className="bg-[var(--bg-color)] py-16 px-4">
        <div className="max-w-full mx-auto">
          <MediumFeed />
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
