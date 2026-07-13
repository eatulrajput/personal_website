"use client";

import React from "react";
import { User } from "lucide-react";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 01 // IDEAS
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            Topic: Human Algorithms
          </span>
        </div>

        {/* Two-Column Newspaper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio Picture & Pull Quote (5 cols) */}
          <div className="md:col-span-5 space-y-8">
            {/* Grayscale Profile Image Frame */}
            <div className="border-4 border-double border-[var(--border-color)] p-2 bg-[var(--bg-color)]">
              <div className="relative h-64 overflow-hidden grayscale contrast-125">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[10px] font-mono mt-2 uppercase text-center font-bold opacity-60">
                Fig 2. The engineer during a code compilation cycle
              </div>
            </div>

            {/* Editorial Pull Quote */}
            <div className="border-t-4 border-b-4 border-black border-double py-6 text-center">
              <p className="text-2xl font-serif italic font-bold leading-normal">
                "Simplicity is the prerequisite for reliability."
              </p>
              <p className="text-xs font-mono font-bold uppercase text-[var(--accent-color)] mt-2">
                — Edsger W. Dijkstra
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Essay (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-sans font-black uppercase tracking-tight leading-none mb-4">
              Building Scalable Backends with a Machine-Learned Core
            </h3>
            
            <div className="text-base font-serif leading-relaxed text-[var(--text-color)] font-light space-y-4 text-justify">
              <p className="drop-cap">
                Engineering modern backend architectures is no longer just about writing CRUD operations; it’s about modeling systems that process, scale, and learn. 
                My name is Dev, and I specialize in orchestrating data flows and training models that integrate cleanly with production infrastructure. 
                I focus on high-throughput backend services using Python, Django, FastAPI, and Postgresql, alongside applied ML pipelines.
              </p>
              <p>
                Whether it is implementing face recognition attendance nodes or deploying conversational agents, my design ethos remains consistent: build modular, testable, and deeply performant systems. 
                By adhering to solid software principles and reducing dependency bloat, I compile services that deliver reliability under stress.
              </p>
              <p className="pt-2 border-t border-[var(--border-subtle)] font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-color)]">
                Key Focus Areas: Systems Design // Distributed Inference Pipelines // Code Simplicity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
