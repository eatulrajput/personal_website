import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEV // WIRED PORTFOLIO",
  description: "Dev - Backend Developer and Machine Learning Engineer. Portfolio built in the editorial design style of Wired.com.",
  keywords: ["Dev", "Applied Machine Learning Engineer", "Backend Developer", "Python", "ML", "AI"],
  authors: [{ name: "Dev" }],
  openGraph: {
    title: "DEV // WIRED PORTFOLIO",
    description: "Explore Dev's engineering archives, systems design, and ML research papers.",
    url: "https://example.com",
    siteName: "Wired Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Inline script to set the theme before rendering to prevent flashing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#ff002b] selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
