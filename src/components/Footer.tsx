"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Github, Heart, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const [year] = useState<number>(new Date().getFullYear());
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-[var(--bg-color)] text-[var(--text-color)] py-16 px-6 sm:px-12 news-border-t border-[var(--border-color)] mt-auto select-none">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left items-start pb-12">
          {/* Logo Brand column */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-3xl font-sans font-black tracking-tighter uppercase leading-none text-[var(--accent-color)]">
              DEV // WIRED
            </h2>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold opacity-70">
              The Engineering Chronicle
            </p>
          </div>

          {/* Links column */}
          <div className="md:col-span-4 space-y-3 font-sans font-black uppercase text-xs tracking-widest">
            <h3 className="text-sm font-bold opacity-45 border-b border-[var(--border-subtle)] pb-2 mb-2 text-[var(--accent-color)]">
              Index Section Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="hover:text-[var(--accent-color)] transition-colors duration-200">
                Blog Feed
              </Link>
              <Link href="/nest" className="hover:text-[var(--accent-color)] transition-colors duration-200">
                The Nest
              </Link>
              <Link href="/docs" className="hover:text-[var(--accent-color)] transition-colors duration-200">
                Git Docs
              </Link>
            </div>
          </div>

          {/* Connect column */}
          <div className="md:col-span-4 space-y-3 font-sans font-black uppercase text-xs tracking-widest items-center md:items-end">
            <h3 className="text-sm font-bold opacity-45 border-b border-[var(--border-subtle)] pb-2 mb-2 text-[var(--accent-color)] text-center md:text-left">
              Connect Directory
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent-color)] transition-colors duration-200 p-2 border border-[var(--border-color)]"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent-color)] transition-colors duration-200 p-2 border border-[var(--border-color)]"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Thick double lines divider */}
        <div className="w-full py-4">
          <hr className="border-t-4 border-double border-[var(--border-color)]" />
        </div>

        {/* Copyleft & Credits */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-lg font-serif leading-relaxed text-[var(--muted-text)] font-light">
            Designed & Compiled by{" "}
            <span className="font-bold text-[var(--text-color)]">Dev</span> with{" "}
            <Heart className="inline w-5 h-5 text-[var(--accent-color)] animate-pulse" />
          </p>
          <p className="text-xs font-mono font-bold opacity-60 uppercase tracking-widest">
            &copy; {year} | ALL RIGHTS RESERVED. PRINT EDITION NO. 446217
          </p>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-sans font-black tracking-tighter uppercase leading-none opacity-10 bg-gradient-to-b from-[var(--text-color)] to-[var(--bg-color)] bg-clip-text text-transparent">
            DEV
          </h1>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[var(--text-color)] text-[var(--bg-color)] border border-[var(--border-color)] hover:bg-[var(--accent-color)] hover:text-white p-3 rounded-full shadow-lg cursor-pointer transition z-40"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
