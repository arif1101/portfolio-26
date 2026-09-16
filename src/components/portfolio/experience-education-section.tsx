"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREER_EXPERIENCES, EDUCATION_QUALIFICATIONS, ExperienceItem } from "@/data/portfolio-data";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.01, x: 4 }}
      className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 flex items-start gap-3 sm:gap-4 backdrop-blur-md group"
    >
      <div className="w-10 sm:w-12 h-9 sm:h-10 rounded-lg bg-white text-black font-bold text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0 uppercase shadow-md">
        {item.logoText.slice(0, 3)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1">
          <h4 className="text-white font-bold text-sm sm:text-lg group-hover:text-amber-400 transition-colors">
            {item.company}
          </h4>
          <span className="text-[11px] sm:text-xs text-gray-400 font-normal">
            {item.date}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 font-medium mt-0.5 sm:mt-1">
          {item.role}
        </p>
      </div>
    </motion.div>
  );
}

export function ExperienceEducationSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="relative w-full max-w-[1392px] bg-[#070202] rounded-[28px] sm:rounded-[40px] border border-white/10 p-5 sm:p-12 md:p-14 flex flex-col gap-10 sm:gap-16 overflow-hidden"
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Top Header Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-full h-28 sm:h-44 rounded-xl sm:rounded-2xl flex items-center justify-center p-4 sm:p-6 text-center border border-red-500/20 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#7a0c06] via-[#d84315] to-[#8c140a]"
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
          <h2 className="relative z-10 text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
            MY CAREER JOURNEY
          </h2>
        </motion.div>

        {/* Part 1: Career Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <div className="lg:col-span-5 space-y-2 sm:space-y-3 pt-1">
            <span className="text-white text-2xl sm:text-4xl font-black uppercase tracking-tight block">
              RESUME
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
              CAREER EXPERIENCE
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md pt-1">
              Join a dedicated system crafted to deliver consistent, elite composition values in four clean phases.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            {CAREER_EXPERIENCES.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Part 2: Education Qualification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pt-6 border-t border-white/10">
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 order-2 lg:order-1">
            {EDUCATION_QUALIFICATIONS.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="lg:col-span-5 space-y-2 sm:space-y-3 pt-1 order-1 lg:order-2">
            <span className="text-white text-2xl sm:text-4xl font-black uppercase tracking-tight block">
              EDUCATION
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight gradient-text">
              QUALIFICATION
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md pt-1">
              Join a dedicated system crafted to deliver consistent, elite composition values in four clean phases.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
