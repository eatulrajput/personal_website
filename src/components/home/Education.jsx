import University from "/college.svg";
import School from "/school.svg";
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 flex items-center justify-center gap-3 mt-32">
            <GraduationCap className="w-12 h-12"/> My Education
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* University */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-blue-500 transition duration-300 ease-in-out group">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <img
                src={University}
                alt="University"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Your University</h3>
                <p className="text-sm text-gray-400 mb-1">Degree Name</p>
                <p className="text-sm text-gray-400 mb-1">Specialization</p>
                <p className="text-sm text-gray-400 mb-1">2022 - 2026</p>
                <p className="text-sm text-gray-300 font-semibold">CGPA: 8/10</p>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-blue-500 transition duration-300 ease-in-out group">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              <img
                src={School}
                alt="School"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">High School Name</h3>
                <p className="text-sm text-gray-400 mb-1">Class 12th – 2025</p>
                <p className="text-sm text-gray-300 font-semibold mb-2">90%</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
