"use client";

import React, { useState, useEffect, useRef } from "react";

interface Article {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  imageUrl: string;
  readingTime: number;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="border-2 border-[var(--border-color)] bg-[var(--card-bg)] p-4 flex flex-col justify-between shadow-[4px_4px_0px_var(--border-color)] hover:translate-y-[-2px] transition-all duration-300 group">
      <div className="space-y-4">
        {/* Grayscale article cover */}
        <div className="relative h-48 overflow-hidden bg-gray-900 border border-[var(--border-color)]">
          <img
            src={article.imageUrl}
            alt={article.title || "Article image"}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`h-full w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700
              ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 rounded-full border-4 border-t-[var(--accent-color)] border-r-transparent border-b-[var(--text-color)] border-l-transparent animate-spin" />
            </div>
          )}
        </div>

        {/* Metadata tag */}
        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-[var(--accent-color)] uppercase">
          <span>OPINION & WRITINGS</span>
          <span>{article.readingTime} MIN READ</span>
        </div>

        {/* Headline */}
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-sans font-black uppercase text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-200 block leading-tight"
        >
          {article.title}
        </a>
      </div>

      {/* Date */}
      <div className="border-t border-[var(--border-subtle)] pt-3 mt-6 text-[10px] font-mono font-bold opacity-60 uppercase flex justify-between items-center">
        <span>
          Published:{" "}
          {new Date(article.pubDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span>Index // {new Date(article.pubDate).getFullYear()}</span>
      </div>
    </div>
  );
};

const MediumFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const loadingRef = useRef<boolean>(false);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@MediumStaff"
        );
        const data = await response.json();

        if (data && data.items) {
          const processed: Article[] = data.items.map((article: any) => {
            const imgMatch = article.description.match(/<img.*?src="(.*?)"/);
            const imageUrl =
              imgMatch?.[1] ||
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80";

            const plainText = article.description.replace(/<[^>]*>/g, "");
            const wordCount = plainText.split(/\s+/).length;
            const readingTime = Math.ceil(wordCount / 265);

            return {
              ...article,
              imageUrl,
              readingTime,
            };
          });

          setArticles(processed);
        }
      } catch (error) {
        console.error("Failed to fetch Medium posts:", error);
      } finally {
        loadingRef.current = false;
      }
    };

    fetchMediumPosts();
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;

      if (bottom && visibleCount < articles.length) {
        setVisibleCount((prev) => Math.min(prev + 5, articles.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, articles.length]);

  return (
    <div className="max-w-full mx-0 px-4 sm:px-6 lg:px-8 py-8 text-[var(--text-color)]">
      <div className="w-full flex justify-between items-center mb-10 news-border-b border-[var(--border-color)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight">
          Featured Editorial Columns
        </h2>
        <a
          href="https://medium.com/@eatulrajput"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 bg-[var(--text-color)] text-[var(--bg-color)] border border-[var(--border-color)] hover:bg-[var(--accent-color)] hover:text-white font-sans font-black uppercase tracking-widest transition duration-200 select-none cursor-pointer"
        >
          View All Columns
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {articles.slice(0, visibleCount).map((article) => (
          <ArticleCard key={article.link} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MediumFeed;
