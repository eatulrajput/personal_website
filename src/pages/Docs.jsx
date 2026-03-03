import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Git from "../components/docs/Git"
import AOS from "aos";
import "aos/dist/aos.css";

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 relative overflow-hidden pt-10">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
        <h1
          data-aos="fade-up"
          className="text-5xl sm:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-gray-950 via-white to-gray-950 mb-6"
        >
          Welcome to the Docs
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg sm:text-xl text-gray-400 max-w-2xl"
        >
          Everything you need to get started, build, and master the tools. Learn at your pace, one section at a time.
        </p>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src="./docs.svg"
          alt="Docs Illustration"
          className="w-full sm:w-2/3 md:w-1/2 mt-12"
        />
      </div>


<section className="px-6 py-16 bg-gray-950 bg-opacity-50 backdrop-blur">
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-8">Start Exploring</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/docs/git"
            className="bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-gray-700 hover:bg-gray-700/40"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Git Tutorial</h3>
            <p className="text-gray-400 text-sm">Kickstart your journey with git commands.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Docs;