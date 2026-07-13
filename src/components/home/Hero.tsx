"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Linkedin, Download } from "lucide-react";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isPaper, setIsPaper] = useState<boolean>(false);

  const strings = ["a Backend Developer", "into Machine Learning", "a Systems Designer"];
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(60);

  // Monitor theme changes to disable typewriter in paper mode
  useEffect(() => {
    const handleThemeCheck = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const paperActive = currentTheme === "paper";
      setIsPaper(paperActive);
      if (paperActive) {
        setText("a Backend Developer & ML Engineer");
      }
    };

    // Initial check
    handleThemeCheck();

    // Listen to attribute modifications on html
    const observer = new MutationObserver(handleThemeCheck);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  // Typewriter loop logic (bypassed in paper mode)
  useEffect(() => {
    if (isPaper) return;

    const currentStringIndex = loopNum % strings.length;
    const fullText = strings[currentStringIndex];

    const handleType = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(60);

        if (text === fullText) {
          setIsDeleting(true);
          setSpeed(1800); // Wait time before backspace
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(40);

        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, isPaper, speed]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-16 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Content (8 cols) */}
        <div className="lg:col-span-8 space-y-6 text-left">
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent-color)] text-white text-xs font-sans font-black px-2 py-0.5 tracking-widest uppercase">
              LEAD STORY
            </span>
            <span className="text-xs font-mono font-bold uppercase opacity-60">
              Published: July 14, 2026 // By Dev
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight leading-[1.05] uppercase">
            The Systems Architect Redefining Scalability and AI
          </h2>

          {/* Subheading/Typewriter Deck */}
          <div className="text-xl sm:text-2xl font-serif italic text-[var(--accent-color)] min-h-[3rem] font-bold border-l-4 border-[var(--accent-color)] pl-4">
            Currently working as {text}
            {!isPaper && <span className="animate-ping font-light text-[var(--accent-color)]">|</span>}
          </div>

          {/* Editorial Paragraph */}
          <p className="text-lg font-serif text-[var(--text-color)] leading-relaxed font-light max-w-3xl">
            In an era where massive data and real-time inference govern technology, building resilient pipeline layers is paramount. 
            Here is a deep look into my development journey, engineering methodologies, and open-source contributions.
          </p>

          {/* Print Style Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-widest border border-[var(--text-color)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-widest border border-[var(--border-color)]"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Illustration (4 cols) */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end news-border-l border-[var(--border-color)] pl-0 lg:pl-10 py-6">
          <div className="relative p-2 border-4 border-double border-[var(--border-color)] bg-[var(--bg-color)] max-w-xs md:max-w-sm">
            <img
              src="/hero.svg"
              alt="Systems Outline sketch"
              className="w-full h-auto grayscale hover:grayscale-0 transition duration-700 select-none object-contain"
            />
            <div className="text-[10px] font-mono mt-2 text-center font-bold opacity-60 uppercase">
              Fig 1. Systems architecture mapping flowchart
            </div>
          </div>
        </div>
      </div>

      {/* Ticker-like Chevron Button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[var(--text-color)] hover:text-[var(--accent-color)] cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce mt-4" />
      </button>
    </section>
  );
};

export default Hero;
