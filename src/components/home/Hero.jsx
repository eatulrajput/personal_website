import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from "/hero.svg";
import { ChevronDown,Linkedin, Download } from 'lucide-react';



const Hero = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["a Backend Developer", "into Machine Learning"],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            showCursor: false,
        });

        return () => typed.destroy();
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full py-20  flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-white bg-black">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
                    Hi, my name is <br />
                    
                    {/* Put your name in the span below */}
                    <span className="text-blue-600 font-semibold">Dev </span>
                    
                     and I'm
                </h1>

                <span
                    ref={typedRef}
                    className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 leading-snug min-h-[3.5rem]"
                ></span>

                {/* Resume Button */}
                <div className="mt-10 mb-12 flex justify-center md:justify-start">
                    <a
                    // Put your resume link in the href below
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-gradient-to-tl from-black to-blue-900  border border-blue-600 w-fit  ml-3 mr-8"
                    >
                        
                        <Download />
                        Resume
                    </a>


                    <a className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-gradient-to-tl from-black to-blue-900  border border-blue-600 w-fit  ml-3 mr-8" 
                    
                    // Put your LinkedIn profile link in the href below
                    href="#" target="_blank">
                        <Linkedin/>
                        LinkedIn</a>


                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={heroImage}
                    alt="Programming Illustration"
                    className="w-full max-w-md md:max-w-lg drop-shadow-[0_5px_15px_rgba(0,255,255,0.1)]"
                />
            </div>

            {/* Chevron Button */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-600 text-4xl animate-bounce cursor-pointer"
                aria-label="Scroll to About"
            >
                <ChevronDown className="w-15 h-15" />
            </button>
        </section>
    );
};

export default Hero;
