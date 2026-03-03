import { Briefcase, Calendar } from 'lucide-react';

const experiences = [

  {
    title: "Keploy API Fellowship 2025",
    role: "API Fellow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "June 2025 - July 2025",
    image: "",
  },


  {
    title: "GirlScript Summer of Code 2024",
    role: "Open Source Contributor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "May 2024 - Aug 2024",
    image: "",
  },
  {
    title: "Hacktoberfest 2023",
    role: "Open Source Contributor",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Oct 2023 - Oct 2023",
    image: "",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
                <Briefcase className="w-12 h-12" />
 Work Experience
          </h2>
          <p className="text-gray-400 mt-2 text-base">
            A journey of contribution, learning, and collaboration.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:border-blue-500 transition-all duration-300 group flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {/* Logo/Image */}
              <img
                src={exp.image || "./default.webp"}
                alt={exp.title}
                onError={(e) => (e.target.src = "./default.webp")}
                className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 font-medium mt-1">{exp.role}</p>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">{exp.description}</p>
                <p className="text-gray-400 text-sm mt-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {exp.date}
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
