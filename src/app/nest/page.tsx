"use client";

import React, { useEffect, useState } from "react";

interface QuoteItem {
  id: number;
  author: string;
  image: string;
  quote: string;
  ref: string;
}

const quotes: QuoteItem[] = [
  {
    id: 1,
    author: "Bruce Lee",
    image: "",
    quote: "Be water, my friend.",
    ref: "LOG // WATER-MIND",
  },
  {
    id: 2,
    author: "Albert Einstein",
    image: "",
    quote: "Imagination is more important than knowledge.",
    ref: "LOG // MATH-CORE",
  },
  {
    id: 3,
    author: "Superman",
    image: "",
    quote: "Truth, justice, and the heroic way.",
    ref: "LOG // HERO-ARCH",
  },
];

const galleryImages: string[] = [
  "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e",
  "https://images.unsplash.com/photo-1621478374422-35206faeddfb",
  "https://images.unsplash.com/photo-1640951613773-54706e06851d",
  "https://images.unsplash.com/photo-1758754188934-4385ddd108f5",
  "https://images.unsplash.com/photo-1468434453985-b1ca3b555f00",
  "https://images.unsplash.com/photo-1757258632083-e9b8a5345047",
];

const NestPage: React.FC = () => {
  const [isPaper, setIsPaper] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleThemeCheck = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsPaper(currentTheme === "paper");
    };

    handleThemeCheck();

    const observer = new MutationObserver(handleThemeCheck);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] pt-10 px-6 sm:px-12">
      <div className="container mx-auto max-w-6xl py-12">
        {/* Title */}
        <div className="text-center space-y-3 mb-16 news-border-b border-[var(--border-color)] pb-6">
          <span className="bg-[var(--accent-color)] text-white text-xs font-sans font-black px-2 py-0.5 tracking-widest uppercase">
            LIFE & CULTURE
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-black uppercase tracking-tight leading-none">
            The Personal Space
          </h2>
          <p className="text-base text-[var(--muted-text)] max-w-xl mx-auto font-serif font-light leading-relaxed">
            A repository of visual inspirations, audio flow loops, and
            philosophical anchors.
          </p>
        </div>

        {/* Quotes Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {quotes.map((item) => (
            <div
              key={item.id}
              className="border-2 border-[var(--border-color)] p-4 flex flex-col bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--border-color)]"
            >
              <div className="flex justify-between items-center text-[10px] font-mono font-bold opacity-60 uppercase mb-4">
                <span>{item.ref}</span>
                <span className="text-[var(--accent-color)]">
                  NO_REF // 0{item.id}
                </span>
              </div>
              <p className="text-lg font-serif italic text-[var(--text-color)] leading-relaxed flex-grow text-justify mb-6">
                "{item.quote}"
              </p>
              <div className="border-t border-[var(--border-subtle)] pt-3 text-right">
                <span className="text-xs font-mono font-black uppercase text-[var(--accent-color)]">
                  — {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <div className="text-left mb-10 news-border-b border-[var(--border-color)] pb-4">
            <h3 className="text-2xl font-sans font-black uppercase tracking-tight leading-none text-[var(--accent-color)]">
              Visual Inspirations
            </h3>
            <p className="text-xs font-mono font-bold uppercase tracking-wider opacity-60 mt-1">
              Fig 3. Grayscale visual nodes that spark clarity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] p-2 hover:border-[var(--accent-color)] transition-colors duration-300"
              >
                <div className="relative h-64 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition duration-700">
                  <img
                    src={img || "/default.webp"}
                    alt={`Gallery ${i + 1}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/default.webp";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Playlist Section */}
        <div className="max-w-3xl mx-auto text-center mt-20 mb-14 border-2 border-[var(--border-color)] p-6 bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--border-color)]">
          <h3 className="text-2xl font-sans font-black uppercase text-[var(--accent-color)] mb-2">
            The Spotify Pipeline
          </h3>
          <p className="text-xs font-mono font-bold uppercase opacity-60 tracking-wider mb-6">
            Audio focus frequencies for compiling and flow
          </p>
          {isPaper ? (
            <div className="border border-[var(--border-color)] p-8 text-center text-xs font-mono font-bold uppercase opacity-60">
              [ AUDIO EMBED SHIELDED IN PRINT PAPER MODE ]
            </div>
          ) : (
            <iframe
              style={{ borderRadius: "0px" }}
              src="https://open.spotify.com/embed/album/21dGQu96FUFEMh5NiCAx9h?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border border-[var(--border-color)]"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default NestPage;
