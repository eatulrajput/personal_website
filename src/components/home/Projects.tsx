"use client";

import React from "react";
import { Presentation, ExternalLink, Terminal } from "lucide-react";

interface ProjectItem {
  id: number;
  category: string;
  title: string;
  tech: string;
  desc: string;
  liveLink?: string;
  codeLink: string;
  image: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    category: "AI / CONVERSATIONAL API",
    title: "COFFEE BOT INTEGRATION",
    tech: "FastAPI, Gemini API, Python, WebSockets",
    desc: "Engineered an autonomous conversational bot powered by Google's Gemini LLM engine. Handles multi-turn orders, analyzes sentiment patterns in real-time, and synchronizes queue state via WebSocket connections.",
    liveLink: "#",
    codeLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "COMPUTER VISION",
    title: "VISION ATTENDANCE RADAR",
    tech: "Python, OpenCV, face-recognition, SQL",
    desc: "A vision system processing high-resolution RTSP video frames to track room occupancy and verify attendance logs using custom vector embeddings.",
    liveLink: "#",
    codeLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "SYSTEM UTILITIES",
    title: "TASKMASTER ENGINE",
    tech: "Django, Python, Celery, Postgresql",
    desc: "A distributed system manager utilizing Celery brokers and Postgres database locks to run background tasks with auto-scaling capabilities.",
    liveLink: "#",
    codeLink: "https://github.com/",
    image: "",
  },
  {
    id: 4,
    category: "NATURAL LANGUAGE PROCESSING",
    title: "OFFENSIVE LEXICON SHIELD",
    tech: "Python, Streamlit, Perspective API",
    desc: "An API interceptor analyzing web comments for toxic content spikes, rendering real-time metrics on an interactive Streamlit board.",
    liveLink: "#",
    codeLink: "https://github.com/#",
    image: "",
  },
  {
    id: 5,
    category: "PREDICTIVE MODELING",
    title: "FINFY LOAN ESTIMATOR",
    tech: "Flask, scikit-learn, Logistic Regression",
    desc: "A machine learning pipeline evaluating credit risk indexes based on historical banking ratios and asset profiles, serving API forecasts in under 12ms.",
    liveLink: "#",
    codeLink: "#",
    image: "",
  },
];

const Projects: React.FC = () => {
  const featuredProject = projects.find((p) => p.featured);
  const normalProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Presentation className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 05 // FEATURES
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            Selected Story Builds
          </span>
        </div>

        {/* Newspaper Cover-Story Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured Cover Story (7 cols) */}
          {featuredProject && (
            <div className="lg:col-span-7 border-2 border-[var(--border-color)] p-4 flex flex-col bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--border-color)]">
              <span className="text-[10px] font-mono text-[var(--accent-color)] font-bold uppercase tracking-wider mb-2 block">
                // {featuredProject.category} // COVER STORY
              </span>

              {/* Featured Image */}
              <div
                className="w-full h-72 bg-cover bg-center border border-[var(--border-color)] grayscale contrast-125 mb-4"
                style={{ backgroundImage: `url(${featuredProject.image})` }}
              />

              <h3 className="text-3xl sm:text-4xl font-sans font-black uppercase tracking-tight leading-none mb-3">
                {featuredProject.title}
              </h3>

              <div className="text-xs font-mono font-bold opacity-70 mb-3 uppercase">
                Specs: {featuredProject.tech}
              </div>

              <p className="text-base font-serif font-light leading-relaxed text-[var(--muted-text)] text-justify mb-6">
                {featuredProject.desc}
              </p>

              {/* Read Info/Code Link buttons */}
              <div className="flex gap-4 border-t border-[var(--border-subtle)] pt-4 mt-auto">
                <a
                  href={featuredProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-wider"
                >
                  SOURCE CODE
                </a>
                {featuredProject.liveLink && (
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-transparent text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-wider border border-[var(--border-color)]"
                  >
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Right Column: Other Stories (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[var(--accent-color)] news-border-b border-[var(--border-color)] pb-2 mb-4">
              More Engineering Highlights
            </h4>

            <div className="divide-y-2 divide-[var(--border-color)]">
              {normalProjects.map((project) => (
                <div
                  key={project.id}
                  className="py-4 first:pt-0 last:pb-0 space-y-2 group"
                >
                  <span className="text-[9px] font-mono text-[var(--accent-color)] font-bold uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-sans font-black uppercase group-hover:text-[var(--accent-color)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono opacity-60 uppercase">
                    Specs: {project.tech}
                  </p>
                  <p className="text-sm font-serif font-light leading-relaxed text-[var(--muted-text)]">
                    {project.desc}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans font-black uppercase tracking-wider border-b border-[var(--border-color)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all"
                    >
                      GITHUB &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
