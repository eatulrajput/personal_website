"use client";

import React, { useEffect, useState } from "react";

interface GitCommand {
  title: string;
  description: string;
  code: string;
}

const commands: GitCommand[] = [
  {
    title: "Check Git Version",
    description:
      "This command checks if Git is installed on your computer and shows the current version. It helps you confirm that Git is ready to use.",
    code: "git --version",
  },
  {
    title: "Configure Git (Set Your Name & Email)",
    description:
      "Before you start using Git, you need to tell it who you are. This command sets your email and name globally so that every commit you make includes your identity.",
    code: `git config --global user.email "youremail@example.com"\ngit config --global user.name "Your Name"`,
  },
  {
    title: "View Git Configuration",
    description:
      "This lists all the Git settings on your computer, including your name and email. Use it to double-check your configuration.",
    code: "git config --list",
  },
  {
    title: "Initialize a New Git Repository",
    description:
      "Use this command once in your project folder to start tracking your files with Git. It creates a hidden `.git` folder where Git stores all the version history.",
    code: "git init",
  },
  {
    title: "Check the Status of Your Files",
    description:
      "Shows which files have been changed, which are staged for commit, and which are untracked. It's a helpful way to see what Git is aware of before committing.",
    code: "git status",
  },
  {
    title: "Stage All Changes for Commit",
    description:
      "Adds all the modified, new, or deleted files in your project to the staging area. Only staged files will be included in the next commit.",
    code: "git add .",
  },
  {
    title: "Commit Changes with a Message",
    description:
      "Creates a snapshot of your staged changes. The message should clearly describe what you've done so others (and future you) can understand your work.",
    code: `git commit -m "Your commit message"`,
  },
  {
    title: "View Commit History",
    description:
      "Displays a list of all commits made in the current branch, starting with the most recent. This helps you review changes and track project progress.",
    code: "git log",
  },
  {
    title: "View Commit History in One Line",
    description:
      "Shows a concise version of the commit history, displaying each commit on a single line with its hash and message, making it easier to skim through.",
    code: "git log --oneline",
  },
  {
    title: "Create a New Branch",
    description:
      "Branches let you work on new features or fixes independently without affecting the main code. This command creates a new branch but doesn't switch to it.",
    code: "git branch new-branch",
  },
  {
    title: "Switch to Another Branch",
    description:
      "Use this to switch your working directory to another branch, so you can work on different versions of your project.",
    code: "git checkout new-branch",
  },
  {
    title: "Create and Switch to a New Branch",
    description:
      "This command creates a new branch and immediately switches to it, so you can start working there right away.",
    code: "git checkout -b new-branch",
  },
  {
    title: "Connect Your Local Repo to GitHub",
    description:
      "Link your local Git repository to a remote repository hosted on GitHub. This allows you to push and pull code between your computer and GitHub.",
    code: "git remote add origin https://github.com/your-username/your-repo.git",
  },
  {
    title: "Push Your Code to GitHub (First Time)",
    description:
      "Send your committed changes to GitHub. The `-u` flag sets the remote branch as the default for future pushes and pulls.",
    code: "git push -u origin main",
  },
  {
    title: "Clone a Repository from GitHub",
    description:
      "Download a copy of a GitHub repository to your local computer so you can work on it.",
    code: "git clone https://github.com/username/repo.git",
  },
  {
    title: "Pull Latest Changes from GitHub",
    description:
      "Fetch and merge the latest changes from the remote GitHub repository into your current branch.",
    code: "git pull",
  },
  {
    title: "Create a Git Tag",
    description:
      "Tags are used to mark specific points in history as important, like version releases.",
    code: "git tag v1.0",
  },
  {
    title: "Stash Your Changes",
    description:
      "If you need to switch branches but aren't ready to commit, stash saves your changes temporarily so you can apply them later.",
    code: "git stash",
  },
  {
    title: "List All Stashes",
    description: "View all the saved stashes you've made so far.",
    code: "git stash list",
  },
  {
    title: "Apply Last Stash",
    description:
      "Bring back the changes you saved with stash to your working directory.",
    code: "git stash apply",
  },
];

const GitTutorialPage: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] px-6 sm:px-14 py-20">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 mt-10">
        <span className="bg-[var(--accent-color)] text-white text-xs font-sans font-black px-2 py-0.5 tracking-widest uppercase">
          MANUAL // CORE PROTOCOLS
        </span>
        <h1 className="text-4xl sm:text-5xl font-sans font-black uppercase mt-4 tracking-tight leading-none">
          Git & GitHub Command Directory
        </h1>
        <p className="text-sm text-[var(--muted-text)] font-serif font-light leading-relaxed mt-4">
          Learn essential Git commands with detailed, structured explanations.
          Optimized for terminal indexing.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-[var(--text-color)]">
        {/* Intro Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 news-border-b border-[var(--border-color)] pb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-black uppercase">
              About Git & GitHub
            </h2>
            <p className="text-sm font-serif font-light leading-relaxed text-[var(--muted-text)] text-justify">
              Git is a localized system that helps you keep track of changes in
              your code, so you can work safely and collaborate with others.
              GitHub is a hosting service that lets you store your Git
              repositories online, sync patches, and coordinate merge requests.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-black uppercase">
              Terminologies
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>
                REPOSITORY
              </div>
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>
                COMMIT
              </div>
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>
                BRANCH
              </div>
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>MERGE
                PROTOCOL
              </div>
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>
                REMOTE ORIGIN
              </div>
              <div>
                <span className="text-[var(--accent-color)]">&bull; </span>STASH
                PILE
              </div>
            </div>
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono font-black uppercase tracking-widest text-[var(--accent-color)] mb-6 block">
            // Command List Execution Logs
          </h2>

          <div className="divide-y divide-[var(--border-color)]">
            {commands.map((cmd, index) => (
              <div
                key={index}
                className="py-6 flex flex-col md:flex-row gap-6 items-start font-serif"
              >
                {/* Number index */}
                <div className="w-12 text-xs font-mono font-bold opacity-30 mt-1">
                  0{index + 1} //
                </div>

                {/* Explanation */}
                <div className="md:w-1/2 space-y-2">
                  <h3 className="text-lg font-sans font-black uppercase text-[var(--accent-color)] leading-tight">
                    {cmd.title}
                  </h3>
                  <p className="text-sm font-serif font-light text-[var(--muted-text)] leading-relaxed">
                    {cmd.description}
                  </p>
                </div>

                {/* Code pre and copy */}
                <div className="md:w-5/12 w-full relative group bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <pre className="text-xs sm:text-sm text-[var(--text-color)] p-4 overflow-x-auto font-mono whitespace-pre-wrap font-bold">
                    <code>{cmd.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopy(cmd.code)}
                    className="absolute top-2 right-2 bg-[var(--text-color)] text-[var(--bg-color)] border border-[var(--border-color)] text-[10px] font-mono font-bold px-2 py-0.5 opacity-0 group-hover:opacity-100 hover:bg-[var(--accent-color)] hover:text-white transition duration-200 cursor-pointer"
                  >
                    {copiedCommand === cmd.code ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitTutorialPage;
