"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 03 // SCIENCE
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            Academic Research Log
          </span>
        </div>

        {/* Technical Bulletins Column Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: University */}
          <div className="border border-[var(--border-color)] bg-[var(--card-bg)] p-6 relative flex flex-col justify-between shadow-sm">
            {/* Top-Right Index */}
            <span className="absolute top-4 right-4 text-xs font-mono font-bold opacity-30">
              ABSTRACT // 01
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/college.svg"
                  alt="University Badge"
                  className="w-16 h-16 object-contain grayscale"
                />
                <div>
                  <span className="text-[10px] font-mono bg-[var(--accent-color)] text-white px-2 py-0.5 uppercase font-bold tracking-wider">
                    BACHELORS DEGREE
                  </span>
                  <h3 className="text-xl font-sans font-black uppercase mt-1">
                    Your University
                  </h3>
                </div>
              </div>

              <div className="font-serif text-sm text-[var(--muted-text)] font-light leading-relaxed">
                <p>
                  <strong>Program:</strong> Bachelor of Technology (B.Tech)
                </p>
                <p>
                  <strong>Specialization:</strong> Computer Science &
                  Engineering
                </p>
                <p>
                  <strong>Timeline:</strong> August 2022 – May 2026 (Expected)
                </p>
                <p className="mt-2 text-xs font-mono font-bold uppercase text-[var(--text-color)]">
                  Research Grade: CGPA 8.00 / 10.00
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex justify-between items-center text-[10px] font-mono font-bold opacity-60 uppercase">
              <span>Status: Final Semester</span>
              <span>Ref: CSE-2026</span>
            </div>
          </div>

          {/* Card 2: High School */}
          <div className="border border-[var(--border-color)] bg-[var(--card-bg)] p-6 relative flex flex-col justify-between shadow-sm">
            {/* Top-Right Index */}
            <span className="absolute top-4 right-4 text-xs font-mono font-bold opacity-30">
              ABSTRACT // 02
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/school.svg"
                  alt="School Badge"
                  className="w-16 h-16 object-contain grayscale"
                />
                <div>
                  <span className="text-[10px] font-mono bg-[var(--accent-color)] text-white px-2 py-0.5 uppercase font-bold tracking-wider">
                    SECONDARY EDUCATION
                  </span>
                  <h3 className="text-xl font-sans font-black uppercase mt-1">
                    High School Name
                  </h3>
                </div>
              </div>

              <div className="font-serif text-sm text-[var(--muted-text)] font-light leading-relaxed">
                <p>
                  <strong>Program:</strong> Higher Secondary Certification
                  (Class XII)
                </p>
                <p>
                  <strong>Focus:</strong> Physics, Chemistry, Mathematics (PCM)
                </p>
                <p>
                  <strong>Timeline:</strong> Graduated April 2022
                </p>
                <p className="mt-2 text-xs font-mono font-bold uppercase text-[var(--text-color)]">
                  Performance Metrics: 90.00% Aggregate
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex justify-between items-center text-[10px] font-mono font-bold opacity-60 uppercase">
              <span>Status: Completed</span>
              <span>Ref: HSC-2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
