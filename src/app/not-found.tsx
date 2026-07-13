import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md border-4 border-double border-[var(--border-color)] p-8 bg-[var(--card-bg)] shadow-[6px_6px_0px_var(--border-color)]">
        <span className="bg-[var(--accent-color)] text-white text-[10px] font-sans font-black px-2 py-0.5 tracking-widest uppercase">
          SYSTEM ERROR // 404
        </span>
        
        <h1 className="text-7xl font-sans font-black tracking-tighter text-[var(--accent-color)] mt-4">
          404
        </h1>
        
        <h2 className="text-xl font-sans font-black uppercase tracking-tight mt-2 leading-none">
          BULLETIN: Resource Not Found
        </h2>
        
        <p className="text-sm font-serif font-light text-[var(--muted-text)] leading-relaxed mt-4 mb-6">
          The endpoint you are attempting to resolve does not exist in our indexes. It may have been deprecated or moved to another directory section.
        </p>

        <Link
          href="/"
          className="inline-block w-full py-3 bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-widest border border-[var(--border-color)]"
        >
          &larr; BACK TO EDITION INDEX
        </Link>
      </div>
    </div>
  );
}
