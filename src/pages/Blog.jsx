import React, { useEffect } from "react";
import MediumFeed from "../components/MediumFeed";
import Spline from "@splinetool/react-spline";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-16 gap-10">
        {/* Text Content */}
        <div className="z-10 order-1 md:order-none text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Blogs
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Welcome to my blog where I share insights, tutorials, and stories
            about backend development, machine learning, and building real-world
            projects.
          </p>
        </div>

        {/* Spline Hero 3D Illustration */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Spline scene="https://prod.spline.design/tO6KM94EyYqZZTyJ/scene.splinecode" />
        </div>
      </section>

      {/* Blog Feed */}
      <main className="bg-black py-16 px-4">
        <div className="max-w-full mx-auto">
          <MediumFeed />
        </div>
      </main>
    </div>
  );
};

export default Blog;
