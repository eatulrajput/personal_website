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
  SiPostgresql,
} from "react-icons/si";
import { TbSql } from "react-icons/tb"; // for SQL icon (alternative)
import { FaJava } from "react-icons/fa";

const skillsData = [
  {
    category: "Languages",
    icon: <FaJava className="text-red-600 text-2xl" />,
    name: "Java",
  },
  {
    category: "Languages",
    icon: <SiPython className="text-yellow-500 text-2xl" />,
    name: "Python",
  },
  {
    category: "Languages",
    icon: <TbSql className="text-blue-700 text-2xl" />, // SQL icon
    name: "SQL",
  },
  {
    category: "Tools & Technologies",
    icon: <SiGit className="text-red-500 text-2xl" />,
    name: "Git",
  },
  {
    category: "Tools & Technologies",
    icon: <SiGithub className="text-gray-300 text-2xl" />,
    name: "GitHub",
  },
  {
    category: "Tools & Technologies",
    icon: <SiMysql className="text-blue-700 text-2xl" />,
    name: "MySQL",
  },
  {
    category: "Tools & Technologies",
    icon: <SiLinux className="text-white text-2xl" />,
    name: "Linux",
  },
  {
    category: "Frameworks",
    icon: <SiDjango className="text-green-600 text-2xl" />,
    name: "Django",
  },
  {
    category: "Frameworks",
    icon: <SiFlask className="text-red-500 text-2xl" />,
    name: "Flask",
  },
  {
    category: "Frameworks",
    icon: <SiFastapi className="text-white text-2xl" />,
    name: "FastAPI",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="py-16 px-6 bg-black text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
            <Code className="w-12 h-12" /> My Skills
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl shadow-xl bg-gradient-to-tl from-black to-blue-900 backdrop-blur-lg transition duration-600 md:hover:scale-150 cursor-pointer"
            >
              {/* Hover Line Animation */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/2"></div>

              {/* Skill Icon and Name */}
              <div className="flex items-center space-x-3 text-white text-lg font-medium mb-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>

              {/* Skill Category Label */}
              <p className="text-sm text-blue-400">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
