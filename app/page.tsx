// app/page.tsx (or pages/index.tsx)

import React from "react";

const skills = {
  "Languages & Frameworks": [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "C# / .NET",
    "SQL Server",
    "PostgreSQL",
    "Python",
    "TailwindCSS",
  ],
  "Web3 & Blockchain": [
    "Solana wallet adapters",
    "Candy Machine v3",
    "Basic Rust (SPL / Anchor)",
    "Basic Solidity (contract interaction)",
  ],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "Linux",
    "Vercel",
    "Netlify",
    "Railway",
    "REST APIs",
    "Prisma",
    "Authentication & Webhooks",
    "LLM / AI integration",
  ],
};

const mainProjects = [
  {
    title: "DrivingCourses.com",
    year: "2025",
    stack: ["Next.js", ".NET", "SQL Server", "SSR", "AI Crawling"],
    description:
      "Nationwide driving school directory with SEO-optimized SSR pages, geolocation search, and AI-assisted data extraction pipelines.",
    role: "Lead Engineer · Avivar Inc",
    link: "https://drivingcourses.com", // adjust if different
  },
  {
    title: "BuzzDoc — AI Document Analysis",
    year: "2021",
    stack: ["Next.js", "Early OpenAI APIs"],
    description:
      "AI-powered app that analyzes uploaded documents and returns structured insights. Built and demoed before ChatGPT existed.",
    role: "Founder / Developer",
    link: "https://buzzdoc.vercel.app", // or https://buzzdoc.vercel.app
  },
  {
    title: "Pool Party DApp",
    year: "2023",
    stack: ["Next.js", "TypeScript", "Solana", "Candy Machine v3"],
    description:
      "Web3 savings and NFT platform DApp with minting UI, staking, airdrops, and real-time dashboards for 500+ active users.",
    role: "Frontend Developer",
    link: "https://joinpoolparty.io",
  },
  {
    title: "Eighties / justcoinflip.xyz",
    year: "2022",
    stack: ["Next.js", "Solana integrations"],
    description:
      "On-chain game platform that reached 3,000+ daily active users in four months. Built UI, wallet flows, and core game logic.",
    role: "Founding Full-Stack Developer",
    link: "https://www.justcoinflip.xyz", // currently offline, but fine as a link
  },
  {
    title: "Enterprise Management Platform",
    year: "2025",
    stack: [".NET", "SQL Server"],
    description:
      "Internal platform for scheduling, reporting, and multi-location business operations for Avivar’s clients.",
    role: "Software Developer / Consultant",
    link: "#",
  },
];

const otherProjects = [
  {
    title: "Merged Casino",
    slug: "mergedcasino",
    link: "https://mergedcasino.vercel.app",
    stack: ["Next.js", "Web3"],
    description:
      "Experimental casino-style interface integrating multiple game modules.",
  },
  {
    title: "FX Replay",
    slug: "fxreplay",
    link: "https://fxreplay.vercel.app",
    stack: ["Next.js", "Charts"],
    description:
      "Backtesting Application for replaying market data and testing strategies.",
  },
  {
    title: "Solpop",
    slug: "solpop",
    link: "https://solpop.vercel.app",
    stack: ["Next.js", "Web3"],
    description:
      "Interactive Solana-based mini-game where players pop balloons for a chance to win jackpot rewards.",
  },
  {
    title: "Spanish Finals Quiz",
    slug: "spanish-finals",
    link: "https://spanish-finals.vercel.app",
    stack: ["Next.js"],
    description: "Practice quiz app built to study for Spanish exams.",
  },
  {
    title: "PoolParty Mint UI",
    slug: "poolparty",
    link: "https://poolparty-pied.vercel.app",
    stack: ["Next.js", "Solana"],
    description: "DApp surface for Pool Party with bug fixes and UI tests.",
  },
  {
    title: "Solty Krakens Mint",
    slug: "soltymint",
    link: "https://soltymint.vercel.app/",
    stack: ["Next.js", "Candy Machine v3"],
    description: "NFT mint site for the Solty Krakens collection.",
  },
  {
    title: "Solteria",
    slug: "solteria",
    link: "https://solteria-six.vercel.app",
    stack: ["Next.js", "Web3"],
    description: "Lottery-style Web3 UI prototype on Solana.",
  },
  {
    title: "Member App",
    slug: "memberapp",
    link: "https://memberapp.vercel.app",
    stack: ["Next.js"],
    description: "Prototype member portal for gated content / subscriptions.",
  },
  {
    title: "VerifiedSwap",
    slug: "verifiedswap",
    link: "https://verifiedswap.vercel.app",
    stack: ["Next.js", "Web3"],
    description: "Prototype Frontend for a token swap / DEX concept.",
  },
];

const experiences = [
  {
    company: "Avivar Inc",
    role: "Software Developer / Consultant",
    period: "Feb 2025 – Present",
    location: "Montreal, QC",
    bullets: [
      "Lead developer for DrivingCourses.com, a North America–wide platform built with Next.js, .NET, and SQL Server.",
      "Built AI-powered data extraction pipelines and integrated Google Places API for large-scale business discovery.",
      "Developed an internal enterprise management system for scheduling, reporting, and multi-location operations.",
    ],
  },
  {
    company: "Pool Party",
    role: "Frontend Developer (Web3 Savings & NFT Platform)",
    period: "Apr 2023 – Jan 2024",
    location: "Remote",
    bullets: [
      "Developed and maintained the DApp for NFT minting, staking, airdrops, and token-holder utilities.",
      "Implemented Candy Machine v3 UI, wallet adapters, and on-chain interactions for mint, claim, and staking flows.",
      "Built real-time dashboards and internal tools for airdrop automation and transaction monitoring.",
    ],
  },
  {
    company: "Eighties",
    role: "Founding Full-Stack Developer (Web3 Gaming)",
    period: "Jun 2022 – Sep 2022",
    location: "Remote",
    bullets: [
      "Built the flagship justcoinflip.xyz game using Next.js and Solana program integrations, reaching 3,000+ daily active users.",
      "Implemented wallet flows, provably fair gameplay logic, and responsive UI.",
      "Designed and implemented the full front-end and logic for HILO, an advanced on-chain prediction card game.",
    ],
  },
  {
    company: "Freelancing",
    role: "Freelance Full-Stack Developer",
    period: "2019 – Present",
    location: "Montreal, QC",
    bullets: [
      "Delivered 20+ production web applications for founders and small businesses using React, Next.js, Node.js, and cloud platforms.",
      "Built dashboards, analytics tools, e-commerce flows, automation systems, and internal business tools.",
      "Managed the full lifecycle: requirements, UX, implementation, QA, deployment, and maintenance.",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        {/* HERO */}
        <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Portfolio
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Fanuel Wara
            </h1>
            <p className="text-lg text-slate-300">
              Full-Stack Software Developer with 5+ years of experience building
              production-grade platforms across web, AI, and Web3 — from{" "}
              <span className="font-semibold text-sky-300">
                Next.js + .NET systems
              </span>{" "}
              to{" "}
              <span className="font-semibold text-sky-300">
                Solana-integrated DApps
              </span>
              .
            </p>
            <p className="max-w-2xl text-sm text-slate-400">
              I like shipping real products: AI-powered tools, geospatial
              platforms, and Web3 apps with thousands of users. Currently
              studying Computer Science at John Abbott College (2024–2027) and
              consulting at Avivar Inc.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:fanuelwara05@gmail.com"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Contact me
              </a>
              <a
                href="https://github.com/fwara07"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com" // TODO: replace with your real profile
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-4 w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-xl shadow-sky-500/10 lg:mt-0">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Built Web3 platforms with 3,000+ daily active users.</li>
              <li>• Delivered 20+ production apps for clients and startups.</li>
              <li>• Early AI builder using OpenAI APIs before ChatGPT.</li>
              <li>• Experience across AI, Web, and Web3 stacks.</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Experience
            </h2>
            <p className="text-sm text-slate-400">
              Roles where I shipped real products and platforms.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              {experiences.map((exp) => (
                <article
                  key={exp.company + exp.period}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-300">
                    {exp.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  Education
                </h3>
                <div className="mt-3 space-y-3 text-xs text-slate-300">
                  <div>
                    <p className="font-medium">
                      John Abbott College — Computer Science
                    </p>
                    <p>2024 – 2027 · 3-year technical program</p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Dawson College — Accelerated AI Program
                    </p>
                    <p>Certification · 2024</p>
                  </div>
                  <div>
                    <p className="font-medium">
                      McGill University — CS Summer Program
                    </p>
                    <p>Summer 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">West Island College</p>
                    <p>Private High School</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  Quick stats
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-300">
                  <li>• 5+ years building for the web.</li>
                  <li>• 20+ shipped client & personal projects.</li>
                  <li>• Experience in both Web2 and Web3 stacks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Selected Projects
              </h2>
              <p className="text-sm text-slate-400">
                A few things I&apos;ve built or helped ship.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {mainProjects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {project.role}
                </p>
                <p className="mt-3 text-xs text-slate-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* MORE PROJECTS */}
        <section id="more-projects" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              More Projects
            </h2>
            <p className="text-sm text-slate-400">
              Smaller apps, experiments, and prototypes deployed over the years.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 text-[11px] font-semibold text-sky-400 hover:text-sky-300"
                  >
                    Open ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Skills & Stack
            </h2>
            <p className="text-sm text-slate-400">
              The tools and ecosystems I work with the most.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {category}
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="space-y-4 border-t border-slate-800 pt-8"
        >
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Let’s build something
          </h2>
          <p className="max-w-xl text-sm text-slate-400">
            I&apos;m open to internships, part-time roles, and collaborations on
            interesting products in AI, Web3, and full-stack development.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:fanuelwara05@gmail.com"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Email me
            </a>
            <a
              href="https://github.com/fwara07"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              github.com/fwara07
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
