"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CAREER_STATS } from "../data/portfolio-data";
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

        {/* Bento Grid */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Top Row: 2 Large Wide Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-[220px] sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#120505] transition-all duration-300 hover:border-white/20 shadow-xl"
            >
              <Image
                src="/ux_ui_design_card.png"
                alt="UX/UI Design Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-[220px] sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#120505] transition-all duration-300 hover:border-white/20 shadow-xl"
            >
              <Image
                src="/branding_design_card.png"
                alt="Branding Design Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>

          {/* Bottom Row: 3 Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-[200px] sm:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#120505] transition-all duration-300 hover:border-white/20 shadow-xl"
            >
              <Image
                src="/website_webapp_card.png"
                alt="Website & Web APP UI/UX Design"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-[200px] sm:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#120505] transition-all duration-300 hover:border-white/20 shadow-xl"
            >
              <Image
                src="/mobile_apps_card.png"
                alt="Mobile Apps Design"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Card 5 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group h-[200px] sm:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#120505] transition-all duration-300 hover:border-white/20 shadow-xl"
            >
              <Image
                src="/social_media_card.png"
                alt="Social Media Design"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}
