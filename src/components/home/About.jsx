import { User } from 'lucide-react';

const About = () => {
    return (
        <div id="about" className="py-16 px-6 bg-black text-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="my-8">
  <hr className="border-t-2 border-zinc-300 opacity-60 w-full" />
</div>

                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 flex items-center justify-center gap-3 mt-32">
                        <User className="w-12 h-12"/> About Me
                    </h2>
                </div>

                {/* Glassmorphism Container */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 rounded-3xl shadow-xl bg-gradient-to-tl from-black to-blue-900 border-2 border-transparent hover:border-2 hover:border-blue-400 transition ease-in-out duration-1000 shadow-blue-900/50">
                    {/* Profile Image */}
                    <div className="relative w-1/2 h-1/2 rounded-full overflow-hidden shadow-lg border-2 border-blue-500 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381"
                            alt="Profile Picture"
                            className="w-full h-full object-cover transition-all duration-2000 hover:opacity-0"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                            alt="Hover Profile Picture"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-300 hover:opacity-100"
                        />
                    </div>

                    {/* About Text */}
                    <div className="text-center md:text-left max-w-2xl">
                        <p className="text-2xl leading-10 text-gray-300">
                            Hi, I’m <span className="text-blue-600">Dev</span> ! lorem500 ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
