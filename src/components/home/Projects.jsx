import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Masonry from "react-masonry-css";
import { Presentation,ExternalLink, Terminal } from 'lucide-react';


// Project Information
const projects = [
  {
    id: 1,
    category: 'AI / ML',
    title: "Project 1",
    tech: "Python, OpenCV",
    desc: "It is a face recognition attendance system  designed to track student attendance...",
    liveLink: "#",
    codeLink: "https://github.com/",
    image: "",
  },

  {
    id: 2,
    category: 'AI / ML',
    title: "Coffee Bot",
    tech: "Python, FastAPI, Gemini API",
    desc: "a conversational chatbot interface ",
    liveLink: "#",
    codeLink: "https://github.com/",
    image: "",
  },

  {
    id: 3,
    category: 'Full Stack',
    title: "Project 3",
    tech: "Python, Django",
    desc: "Taskmaster is a todo app made in Django",
    liveLink: "#",
    codeLink: "https://github.com/",
    image: "",
  },

  {
    id: 4,
    category: 'AI / ML',
    title: "Project 4",
    tech: "Python, Streamlit, Perspective API",
    desc: "An AI-powered tool developed to detect and mitigate offensive language",
    liveLink: "#",
    codeLink: "https://github.com/#",
    image: "",
  },

  {
    id: 5,
    category: 'AI / ML',
    title: "Project 5",
    tech: "Python, Flask, Logistic Regression",
    desc: "Finfy is an AI-powered interface that checks the loan eligibility using machine learning",
    liveLink: "#",
    codeLink: "#",
    image: "",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
            <Presentation className="w-12 h-12"/> My Projects
          </h2>
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/5 hover:bg-gradient-to-tl from-black to-blue-900 backdrop-blur-md border border-white/10 rounded-2xl shadow-md hover:shadow-blue-500/30 transition duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div
                className="h-60 w-full bg-cover bg-center rounded-t-2xl transform transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                style={{
                  backgroundImage: `url(${project.image || 'default.webp'})`
                }}

              ></div>

              {/* Project Info */}
              <div className="p-5 relative">
                <p className="absolute text-blue-500 text-6xl font-extrabold opacity-10 select-none right-3 top-2">
                  {project.id}
                </p>
                <h4 className="text-blue-400 text-sm font-medium">{project.category}</h4>
                <h3 className="text-xl font-semibold text-white mt-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{project.tech}</p>
                <p className="text-gray-200 mt-3 text-sm leading-relaxed">{project.desc}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition text-lg"
                    >
                      <ExternalLink />
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition text-lg"
                  >
                    <Terminal />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Projects;