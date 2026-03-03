import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Quotes Data
const quotes = [
  {
    id: 1,
    author: "Bruce Lee",
    image: "",
    quote: "Be water, my friend.",
  },
  {
    id: 2,
    author: "Albert Einstein",
    image: "",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 3,
    author: "Superman",
    image: "",
    quote: "Truth, justice, and the heroic way.",
  },
];

const Nest = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // <-- This line ensures top scroll
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-black to-blue-900 text-gray-200 relative overflow-hidden">
      {/* Main Content */}
      <div className="flex-grow py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl font-bold text-blue-400 text-center mt-32">My Space</h2>
        <p className="text-lg text-gray-400 mt-4 text-center">
          Explore my favorite quotes from legendary minds.
        </p>

        {/* Quotes Section */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {quotes.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-950 rounded-2xl border border-blue-900 hover:border-blue-500 shadow-xl transition-transform duration-300 hover:scale-[1.03] ease-in-out overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image with overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image || "./default.webp"}
                  alt={item.author}
                  onError={(e) => (e.target.src = "./default.webp")}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <p className="text-white text-lg font-semibold">{item.author}</p>
                </div>
              </div>

              {/* Quote Text */}
              <div className="p-6 text-center">
                <p className="text-lg text-gray-300 italic leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 text-blue-400 font-medium">{item.author}</p>
                <p className="text-sm text-gray-500 italic mt-2">#inspiration #life</p>
              </div>
            </div>
          ))}
        </div>

        {/* Normal Style Gallery Grid */}
        {/* Gallery Section */}
        <div className="mt-28">
          <h3 className="text-4xl font-bold text-center text-blue-400 mb-6">Visual Inspirations</h3>
          <p className="text-center text-gray-400 text-lg mb-12">
            A glimpse into the visuals that spark creativity and calm.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4" data-aos="fade-up">
            {[
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e",
              "https://images.unsplash.com/photo-1621478374422-35206faeddfb",
              "https://images.unsplash.com/photo-1640951613773-54706e06851d",
              "https://images.unsplash.com/photo-1758754188934-4385ddd108f5",
              "https://images.unsplash.com/photo-1468434453985-b1ca3b555f00",
              "https://images.unsplash.com/photo-1757258632083-e9b8a5345047",
              "https://images.unsplash.com/photo-1758703000157-bf17ffdedeea",
              "https://images.unsplash.com/photo-1758644083602-15a9645a92a7",
              "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e",
              "https://images.unsplash.com/photo-1593620659530-7f98c53de278",
              "https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb",



            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-blue-900 hover:border-blue-500 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <img
                  src={img || "./default.webp"}
                  alt={`Gallery ${i + 1}`}
                  onError={(e) => (e.target.src = "./default.webp")}
                  className="w-full h-100 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />

              </div>
            ))}
          </div>
        </div>

        {/* Experiement: Unsplash Style Gallery Grid */}
        {/* Gallery Section */}
        {/* <div className="mt-28">
          <h3 className="text-4xl font-bold text-center text-blue-400 mb-6">Visual Inspirations</h3>
          <p className="text-center text-gray-400 text-lg mb-12">
            A glimpse into the visuals that spark creativity and calm.
          </p> */}

        {/* Masonry-style grid */}
        {/* <div
            className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-7xl mx-auto px-4"
            data-aos="fade-up"
          >
            {[
              "./gallery/photo1.webp",
              "./gallery/photo2.webp",
              "./gallery/photo3.webp",
              "./gallery/photo4.webp",
              "./gallery/photo5.webp",
              "./gallery/photo6.webp",
              "./gallery/photo7.webp",
              "./gallery/photo8.webp",
              "./gallery/photo9.webp",
              "./gallery/photo10.webp",
            ].map((src, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid rounded-xl overflow-hidden border border-blue-900 hover:border-blue-500 shadow-md transition-transform duration-300 hover:scale-[1.03]"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Gallery ends here */}

        {/* Spotify Playlist Section */}
        <div className="max-w-3xl mx-auto text-center mt-20 mb-14 bg-gray-900 border border-blue-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">
            <i className="fab fa-spotify mr-2"></i>My Spotify Playlist
          </h3>
          <p className="text-sm text-gray-400 mb-4 italic">Tune in to what fuels my focus and flow.</p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/21dGQu96FUFEMh5NiCAx9h?utm_source=generator&theme=0"
            width="100%"
            height="600"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Nest;
