"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link?: string;
  highlightArrow?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "nuro-app",
    title: "Nuro App",
    tags: ["Fitness", "Mobile"],
    image: "/nuro_app_project.png",
    link: "#",
    highlightArrow: true,
  },
  {
    id: "echo-fintech",
    title: "Echo Fintech",
    tags: ["Finance", "Saas"],
    image: "/echo_fintech_project.png",
    link: "#",
  },
  {
    id: "global-forma",
    title: "Global Forma",
    tags: ["Branding", "Web"],
    image: "/global_forma_project.png",
    link: "#",
  },
  {
    id: "luno-ai",
    title: "Luno AI",
    tags: ["UX Design", "SaaS"],
    image: "/luno_ai_project.png",
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FeaturedProjectsSection() {
  const col1Projects = [PROJECTS[0], PROJECTS[2]];
  const col2Projects = [PROJECTS[1], PROJECTS[3]];

  return (
    <section className="w-full flex justify-center py-6 sm:py-10 px-3 sm:px-4 bg-[#050101]">
      <div className="w-full max-w-[1360px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-bebas text-[52px] sm:text-[68px] md:text-[84px] uppercase tracking-wide text-white leading-none">
            MY WORK
          </h2>

          <a
            href="#all-work"
            className="inline-flex items-center gap-2 rounded-full bg-[#1C2024] hover:bg-[#252B30] border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors"
          >
            <span>View all work</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 2-Column Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {col1Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Column 2 (staggered offset) */}
          <div className="flex flex-col gap-6 lg:gap-8 md:pt-14">
            {col2Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.link || "#"}
      variants={itemVariants}
      className="group relative flex flex-col rounded-[26px] sm:rounded-[30px] bg-[#0E1012] border border-white/[0.06] p-4 sm:p-5 hover:border-white/15 transition-all duration-300 overflow-hidden"
    >
      {/* Project Image Preview */}
      <div className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[20px] bg-[#141719]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 680px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-white/70 font-sans"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Arrow */}
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-xl sm:text-2xl font-medium text-white font-sans tracking-tight group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>

        <div
          className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
            project.highlightArrow ? "text-[#FF5500]" : "text-white/40 group-hover:text-white"
          }`}
        >
          <ArrowUpRight size={26} strokeWidth={2.2} />
        </div>
      </div>
    </motion.a>
  );
}
