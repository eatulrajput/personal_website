"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const DocsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] pt-10 px-6 sm:px-12 flex flex-col justify-between">
      {/* Intro section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 max-w-4xl mx-auto">
        <span className="bg-[var(--accent-color)] text-white text-xs font-sans font-black px-2 py-0.5 tracking-widest uppercase mb-4">
          TECHNICAL REFERENCE & DOCUMENTATION
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight leading-none mb-6">
          The Engineering Manual
        </h1>

        <p className="text-lg text-[var(--muted-text)] max-w-2xl font-serif font-light leading-relaxed mb-10">
          Everything you need to master standard commands, resolve architecture queries, and integrate core library tools. Simplified technical drafts compiled for speed.
        </p>

        {/* Grayscale Sketch outline image */}
        <div className="border border-[var(--border-color)] bg-[var(--card-bg)] p-2 max-w-md grayscale hover:grayscale-0 transition duration-700 mb-12">
          <img
            src="/docs.svg"
            alt="Reference blueprint"
            className="w-full h-auto select-none"
          />
        </div>
      </div>

      {/* Start Exploring Section */}
      <section className="px-6 py-16 bg-[var(--card-bg)] border-t-2 border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-sans font-black uppercase text-[var(--accent-color)] mb-8 text-center sm:text-left">
            Reference Directory
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-color)] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[9px] font-mono text-[var(--accent-color)] font-bold uppercase tracking-wider block mb-2">
                  CATEGORY: VERSION CONTROL
                </span>
                <h3 className="text-xl font-sans font-black uppercase mb-2">Git Tutorial</h3>
                <p className="text-sm font-serif text-[var(--muted-text)] font-light leading-relaxed mb-6">
                  Quickstart references mapping essential Git CLI workflows, remote config, and workspace stash protocols.
                </p>
              </div>
              <Link
                href="/docs/git"
                className="inline-block text-xs font-sans font-black uppercase tracking-wider text-[var(--accent-color)] hover:underline"
              >
                READ MANUAL &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
