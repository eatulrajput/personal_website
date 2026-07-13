"use client";

import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  role: string;
  description: string;
  date: string;
  image: string;
  index: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Keploy API Fellowship 2025",
    role: "API Fellow",
    description:
      "Engineered automated API testing flows, optimizing dependency mocks and mock verification algorithms. Participated in systems design reviews and created comprehensive framework API specifications.",
    date: "June 2025 - July 2025",
    image: "",
    index: "FILE // 023-B",
  },
  {
    title: "GirlScript Summer of Code 2024",
    role: "Open Source Contributor",
    description:
      "Contributed to distributed ML pipelines and core backend interfaces. Implemented clean architecture endpoints, reducing code duplication and improving unit test coverage metrics across repositories.",
    date: "May 2024 - Aug 2024",
    image: "",
    index: "FILE // 019-F",
  },
  {
    title: "Hacktoberfest 2023",
    role: "Open Source Contributor",
    description:
      "Participated in global code sprints, fixing critical exceptions in Python/Django packages, optimizing database query layers, and refining developer documentation frameworks.",
    date: "Oct 2023 - Oct 2023",
    image: "",
    index: "FILE // 012-A",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 04 // BUSINESS
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            Employment Archive Records
          </span>
        </div>

        {/* Newspaper Archive List Layout */}
        <div className="divide-y-2 divide-[var(--border-color)]">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[var(--card-bg)] transition-colors duration-200 px-2 sm:px-4"
            >
              {/* Left Column: Metadata (3 cols) */}
              <div className="md:col-span-3 space-y-2">
                <span className="text-[10px] font-mono bg-[var(--text-color)] text-[var(--bg-color)] px-2 py-0.5 uppercase font-bold tracking-wider">
                  {exp.index}
                </span>
                <p className="text-xs font-mono font-bold text-[var(--accent-color)] uppercase">
                  {exp.date}
                </p>
              </div>

              {/* Middle Column: Title & Role (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-xl font-sans font-black uppercase tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-xs font-mono font-bold opacity-80 uppercase tracking-widest">
                  Role: {exp.role}
                </p>
              </div>

              {/* Right Column: Description (5 cols) */}
              <div className="md:col-span-5">
                <p className="text-sm font-serif leading-relaxed font-light text-[var(--muted-text)]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
