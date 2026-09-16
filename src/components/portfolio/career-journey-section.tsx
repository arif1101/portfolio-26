"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREER_STATS } from "@/data/portfolio-data";
import { MotionFadeIn } from "@/components/ui/motion-wrapper";

export function CareerJourneySection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <MotionFadeIn className="w-full max-w-[1392px] bg-[#080202] rounded-[28px] sm:rounded-[40px] border border-white/5 p-5 sm:p-12 md:p-14 flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="text-center space-y-1.5 sm:space-y-2">
          <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
            Learning Through Every Path
          </p>
          <h2 className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
            MY 4+ YEARS CAREER JOURNEY
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 py-4 sm:py-6 border-y border-white/10 gap-y-4 sm:gap-y-0">
          {CAREER_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-center p-2 sm:p-4 ${
                index !== CAREER_STATS.length - 1 ? "md:border-r md:border-white/10" : ""
              } ${index % 2 === 0 ? "border-r border-white/10 md:border-r-0" : ""}`}
            >
              <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-medium mt-1 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </MotionFadeIn>
    </section>
  );
}
