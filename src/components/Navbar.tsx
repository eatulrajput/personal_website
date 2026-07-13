"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SectionLink {
  label: string;
  section: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [theme, setTheme] = useState<string>("dark");
  const [timeStr, setTimeStr] = useState<string>("");
  const pathname = usePathname();

  const sectionLinks: SectionLink[] = [
    { label: "Home", section: "hero" },
    { label: "Ideas", section: "about" },
    { label: "Gear", section: "skills" },
    { label: "Science", section: "education" },
    { label: "Business", section: "experience" },
    { label: "Features", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  // Set initial theme and ticking time
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);

    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, section: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  // Intersection Observer for Active Section
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["hero", "about", "skills", "education", "experience", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px",
        }
      );
      observer.observe(el);
      return { observer, el, id };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [pathname]);

  return (
    <header className="w-full bg-[var(--bg-color)] z-50 text-[var(--text-color)] news-border-b border-[var(--border-color)]">
      {/* Top Banner / Theme Controller Bar */}
      <div className="w-full flex justify-between items-center px-6 py-2 text-xs font-mono news-border-b border-[var(--border-color)] uppercase tracking-wider bg-[var(--bg-color)]">
        <div>
          <span>Edition: </span>
          <span className="font-bold text-[var(--accent-color)]">JULY 2026</span>
        </div>

        {/* Theme Controls */}
        <div className="flex gap-3 items-center border border-[var(--border-color)] p-1 rounded-sm">
          <button
            onClick={() => handleThemeChange("light")}
            className={`px-2 py-0.5 transition cursor-pointer font-bold ${
              theme === "light" ? "bg-[var(--text-color)] text-[var(--bg-color)]" : "hover:text-[var(--accent-color)]"
            }`}
          >
            LIGHT
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => handleThemeChange("dark")}
            className={`px-2 py-0.5 transition cursor-pointer font-bold ${
              theme === "dark" ? "bg-[var(--text-color)] text-[var(--bg-color)]" : "hover:text-[var(--accent-color)]"
            }`}
          >
            DARK
          </button>
          <span className="opacity-30">|</span>
          <button
            onClick={() => handleThemeChange("paper")}
            className={`px-2 py-0.5 transition cursor-pointer font-bold ${
              theme === "paper" ? "bg-[var(--text-color)] text-[var(--bg-color)]" : "hover:text-[var(--accent-color)]"
            }`}
          >
            PAPER
          </button>
        </div>
      </div>

      {/* Main Wired Brand Header */}
      <div className="container mx-auto flex flex-col items-center py-6 px-6 text-center select-none">
        <Link href="/" className="hover:opacity-90 transition">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-sans tracking-tighter uppercase leading-none">
            DEV<span className="text-[var(--accent-color)] font-serif font-light">//</span>WIRED
          </h1>
        </Link>
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] mt-2 font-bold opacity-80">
          The Engineering Chronicle of Backend & Machine Learning
        </p>
      </div>

      {/* Navigation Row */}
      <nav className="w-full news-border-t border-[var(--border-color)] py-3 px-6 bg-[var(--bg-color)]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex justify-center w-full gap-8 text-sm font-sans font-black uppercase tracking-widest">
            {sectionLinks.map(({ label, section }) => {
              const isActive = pathname === "/" && activeSection === section;
              return (
                <li key={section}>
                  <Link
                    href={`/#${section}`}
                    onClick={(e) => handleNavClick(e, section)}
                    className={`pb-1 hover:text-[var(--accent-color)] border-b-2 transition-all ${
                      isActive ? "border-[var(--accent-color)] text-[var(--accent-color)]" : "border-transparent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="relative group">
              <span className="cursor-pointer pb-1 border-b-2 border-transparent hover:text-[var(--accent-color)] flex items-center gap-1">
                MORE
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute right-0 mt-3 w-64 bg-[var(--card-bg)] border-2 border-[var(--border-color)] text-[var(--text-color)] shadow-[4px_4px_0px_var(--border-color)] p-3 space-y-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                {/* Dropdown Header */}
                <div className="text-[9px] font-mono font-black tracking-widest text-[var(--accent-color)] uppercase border-b border-[var(--border-subtle)] pb-1.5 mb-2">
                  // Archive Indexes
                </div>
                
                {[
                  {
                    label: "Blog Feed",
                    path: "/blog",
                    description: "Opinions, tutorials, and backend reports",
                  },
                  {
                    label: "The Nest",
                    path: "/nest",
                    description: "Reflections, music pipelines, and visual art",
                  },
                  {
                    label: "Git Docs",
                    path: "/docs",
                    description: "Git commands manual and CLI worksheets",
                  },
                ].map(({ label, path, description }) => (
                  <Link
                    key={path}
                    href={path}
                    className={`group/item block p-2 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-200 ${
                      pathname === path ? "border-l-2 border-[var(--accent-color)] pl-1.5" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center font-sans font-black text-xs uppercase tracking-wider">
                      <span>{label}</span>
                      <span className="text-[10px] font-mono opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </div>
                    <p className="text-[9px] font-serif font-light leading-tight mt-1 opacity-70 group-hover/item:opacity-100">
                      {description}
                    </p>
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-lg font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer py-1 px-3 border border-[var(--border-color)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </button>

          {/* Right Status */}
          <div className="hidden lg:block text-xs font-mono font-bold">
            <span>STATUS: </span>
            <span className="text-emerald-500 animate-pulse font-mono">[ ONLINE ]</span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[var(--bg-color)] z-50 p-8 flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 text-3xl font-light hover:text-[var(--accent-color)] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <ul className="space-y-6 text-2xl font-black uppercase tracking-widest text-center">
            {sectionLinks.map(({ label, section }) => (
              <li key={section}>
                <Link
                  href={`/#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className="hover:text-[var(--accent-color)] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <hr className="w-16 border-t-2 border-[var(--border-color)] my-4 mx-auto" />
            {[
              { label: "Blog Feed", path: "/blog" },
              { label: "The Nest", path: "/nest" },
              { label: "Git Docs", path: "/docs" },
            ].map(({ label, path }) => (
              <li key={path}>
                <Link href={path} onClick={() => setIsOpen(false)} className="text-lg hover:text-[var(--accent-color)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Ticker / Running Meta Bar */}
      <div className="w-full bg-[var(--text-color)] text-[var(--bg-color)] py-2 text-xs font-mono uppercase tracking-[0.15em] border-t border-[var(--border-color)] flex items-center justify-between px-6 z-10 select-none">
        <div className="flex items-center gap-2 overflow-hidden w-3/4">
          <span className="font-black bg-[var(--accent-color)] text-white px-2 py-0.5 text-[9px] shrink-0 font-sans">
            FLASH NEWS
          </span>
          <div className="ticker-wrap flex-grow">
            <div className="ticker-content font-bold">
              SYSTEM CONVERTED TO NEXT.JS APP ROUTER ... ALL ANIMATIONS HANDLED BY MOTION/REACT ... REMOVED 6 UNUSED LIBRARIES FOR 4X FASTER LOAD ... SEEKING SOFTWARE DEVELOPER OPPORTUNITIES ... LOCAL TIME {timeStr} ... DESIGN SYSTEM: EDITORIAL NEWSPRINT HYBRID ...
            </div>
          </div>
        </div>
        <div className="text-[10px] font-bold tracking-widest">
          {timeStr}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
