"use client";

import React, { useState } from "react";
import { Users, Mail, Linkedin, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

interface SocialItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const socialLinks: SocialItem[] = [
  {
    href: "mailto:example@example.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "#",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "#",
    icon: FaDiscord,
    label: "Discord",
  },
  {
    href: "#",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: FaMedium,
    label: "Medium",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 bg-[var(--bg-color)] text-[var(--text-color)] news-border-b border-[var(--border-color)]"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 news-border-b border-[var(--border-color)] pb-4 justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-[var(--accent-color)]" />
            <h2 className="text-sm font-sans font-black tracking-widest uppercase">
              Section 06 // LETTERS TO THE EDITOR
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase opacity-60">
            Submit Correspondence
          </span>
        </div>

        {/* Form and Social details layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Mock Form (7 cols) */}
          <div className="md:col-span-7 border-2 border-dashed border-[var(--border-color)] p-6 bg-[var(--bg-color)]">
            <h3 className="text-2xl font-sans font-black uppercase tracking-tight leading-none mb-4">
              Write to the Engineer
            </h3>
            <p className="text-xs font-mono mb-6 opacity-80 uppercase">
              Fill out this ticket block to transmit a communication payload.
            </p>

            {submitted ? (
              <div className="border border-emerald-500 bg-emerald-500/10 p-4 text-sm font-mono font-bold uppercase text-emerald-600 text-center">
                ✓ Transmission Received! Communication logged.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-black uppercase mb-1">
                    01. Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] p-2.5 font-mono text-xs text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)]"
                    placeholder="E.g. ALICE, CTO"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black uppercase mb-1">
                    02. Return Endpoint (Email)
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] p-2.5 font-mono text-xs text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)]"
                    placeholder="E.g. CTO@ENTERPRISE.COM"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black uppercase mb-1">
                    03. Message Body
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] p-2.5 font-mono text-xs text-[var(--text-color)] focus:outline-none focus:border-[var(--accent-color)]"
                    placeholder="Write your request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white transition font-sans font-black uppercase text-xs tracking-widest cursor-pointer"
                >
                  TRANSMIT COMMUNIQUE &rarr;
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Address & Social Nodes (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[var(--accent-color)] border-b border-[var(--border-color)] pb-2 mb-4">
              Social Nodes
            </h4>
            <p className="text-sm font-serif leading-relaxed text-[var(--muted-text)] font-light">
              For direct lines of connection or to browse through code
              repositories, please resolve these external addresses:
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    className="p-3 border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--accent-color)] hover:text-white transition duration-200 select-none cursor-pointer"
                  >
                    <IconComponent className="w-6 h-6 text-current" />
                  </a>
                );
              })}
            </div>

            <div className="border-t border-[var(--border-subtle)] pt-6 space-y-2 text-xs font-mono font-bold uppercase">
              <div>
                <span className="opacity-50">PGP Key: </span>
                <span className="text-[var(--accent-color)] font-mono">
                  0x4D3F...9E2A
                </span>
              </div>
              <div>
                <span className="opacity-50">Network Status: </span>
                <span className="text-emerald-500 font-mono">
                  Accepting Inbound Requests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
