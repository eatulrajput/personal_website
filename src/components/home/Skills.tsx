"use client";

import React from "react";
import { Code } from "lucide-react";
import {
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiDjango,
  SiFlask,
  SiFastapi,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

interface SkillItem {
  category: "Languages" | "Tools & Technologies" | "Frameworks";
  icon: React.ReactNode;
  name: string;
}

const skillsData: SkillItem[] = [
  {
    category: "Languages",
    icon: <FaJava className="text-2xl" />,
    name: "Java",
  },
  {
    category: "Languages",
    icon: <SiPython className="text-2xl" />,
    name: "Python",
  },
  {
    category: "Languages",
    icon: <TbSql className="text-2xl" />,
    name: "SQL",
  },
  {
    category: "Tools & Technologies",
    icon: <SiGit className="text-2xl" />,
    name: "Git",
  },
  {
    category: "Tools & Technologies",
    icon: <SiGithub className="text-2xl" />,
    name: "GitHub",
  },
  {
    category: "Tools & Technologies",
    icon: <SiMysql className="text-2xl" />,
    name: "MySQL",
  },
  {
    category: "Tools & Technologies",
    icon: <SiLinux className="text-2xl" />,
    name: "Linux",
  },
  {
    category: "Frameworks",
    icon: <SiDjango className="text-2xl" />,
    name: "Django",
  },
  {
    category: "Frameworks",
    icon: <SiFlask className="text-2xl" />,
    name: "Flask",
  },
  {
    category: "Frameworks",
    icon: <SiFastapi className="text-2xl" />,
    name: "FastAPI",
  },
];

const Skills: React.FC = () => {
  const categories = ["Languages", "Frameworks", "Tools & Technologies"] as const;

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 02 // GEAR
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            System Spec Sheets
          </span>
        </div>

        {/* Spec Sheets Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const items = skillsData.filter((skill) => skill.category === cat);
            return (
              <div
                key={idx}
                className="border-2 border-[var(--border-color)] flex flex-col bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--border-color)]"
              >
                {/* Spec Sheet Header */}
                <div className="bg-[var(--text-color)] text-[var(--bg-color)] p-3 font-sans font-black uppercase text-xs tracking-widest flex justify-between items-center">
                  <span>{cat}</span>
                  <span className="text-[var(--accent-color)] font-mono">SPEC_SHT // 0{idx + 1}</span>
                </div>

                {/* Spec List */}
                <div className="p-4 flex-grow flex flex-col divide-y divide-[var(--border-subtle)] font-mono text-xs">
                  {items.map((item, itemIdx) => (
                    <div key={itemIdx} className="py-3 flex justify-between items-center group font-bold">
                      <div className="flex items-center gap-3">
                        <span className="group-hover:text-[var(--accent-color)] transition-colors duration-200">
                          {item.icon}
                        </span>
                        <span className="uppercase tracking-wider">{item.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {/* Rating dots representing mastery/confidence level */}
                        {[...Array(5)].map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`w-2.5 h-2.5 border border-[var(--border-color)] rounded-full ${
                              dotIdx < (item.name === "Python" || item.name === "Git" ? 5 : item.name === "SQL" || item.name === "FastAPI" || item.name === "Django" ? 4 : 3)
                                ? "bg-[var(--text-color)]"
                                : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer specs tag */}
                <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-color)] text-[9px] font-mono font-bold opacity-60 uppercase text-center">
                  Calibration: Production Ready
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
