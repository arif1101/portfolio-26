"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WORK_PROJECTS } from "../data/portfolio-data";

export function MyWorkSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <div className="w-full max-w-[1392px] flex flex-col gap-6 sm:gap-10">
        {/* Header */}
        <div className="flex flex-row items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight text-white">
            MY WORK
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 transition-colors border border-white/10"
          >
            View all work
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WORK_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 15,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#0b0404] rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between cursor-pointer shadow-xl"
            >
              {/* Preview Image */}
              <div className="relative w-full h-[220px] sm:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Meta & Title */}
              <div className="flex flex-col gap-2 sm:gap-3">
                {/* Category Tags */}
                <div className="flex items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Arrow */}
                <div className="flex items-center justify-between pt-1">
                  <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:rotate-45 transition-all">
                    <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
