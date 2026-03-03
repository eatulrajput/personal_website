import { Users, Mail, Linkedin, Github } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="h-200 py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
          <Users className="w-12 h-12" /> Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mt-4">
          Feel free to reach out via email or connect on LinkedIn.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-5xl mt-10">
          {[
            {
              href: "mailto:example@example.com",
              icon: Mail,
              label: "Email",
            },
            {
              href: "#",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "#",
              icon: FaDiscord,
              label: "Discord",
            },
            {
              href: "#",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "#",
              icon: FaMedium,
              label: "Medium",
            },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-110 hover:bg-gradient-to-tl from-black to-blue-900 transition-all duration-300 shadow-sm hover:shadow-blue-400/30"
              >
                <IconComponent className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
