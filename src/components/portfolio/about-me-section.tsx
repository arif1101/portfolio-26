"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutMeSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="relative w-full max-w-[1392px] bg-[#070202] rounded-[28px] sm:rounded-[40px] border border-white/10 p-4 sm:p-10 md:p-12 flex flex-col gap-6 sm:gap-8 overflow-hidden shadow-2xl"
      >
        {/* Background Grid Mesh */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient Purple Glow */}
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-700/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Top Bento Card: Wide Showcase */}
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#0b0404] border border-white/10 p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 overflow-hidden"
        >
          {/* Left Text Block */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="relative inline-block">
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white block">
                  ABOUT ME
                </span>
                <span className="text-2xl sm:text-5xl font-black uppercase tracking-tight gradient-text block">
                  & MY JOURNEY
                </span>
              </div>
              {/* Floating 3D Figma Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-8 sm:-right-16 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-900/90 border border-white/20 flex items-center justify-center text-base sm:text-2xl shadow-lg shadow-black/60 rotate-12"
              >
                🎨
              </motion.div>
            </div>

            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join a dedicated system crafted to deliver consistent, elite composition values in four clean phases.
            </p>

            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-white font-medium text-xs sm:text-base hover:text-amber-400 transition-colors group"
              >
                View my work
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:text-amber-400 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Tilted Overlapping Photos Stack */}
          <div className="flex items-center justify-center p-2 sm:p-4">
            <div className="relative flex items-center">
              {/* Photo 1: Yellow Studio Background */}
              <motion.div
                whileHover={{ rotate: -12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-[140px] sm:w-[240px] h-[180px] sm:h-[290px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#0b0404] shadow-2xl transform -rotate-6 z-10 cursor-pointer"
              >
                <Image
                  src="/about_photo_1.png"
                  alt="Istiak Ahmed in Studio"
                  fill
                  sizes="(max-width: 640px) 140px, 240px"
                  className="object-cover"
                />
              </motion.div>

              {/* Photo 2: Blue Backdrop */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-[140px] sm:w-[240px] h-[180px] sm:h-[290px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#0b0404] shadow-2xl transform rotate-6 -ml-10 sm:-ml-20 z-20 cursor-pointer"
              >
                <Image
                  src="/about_photo_2.png"
                  alt="Istiak Ahmed Portrait"
                  fill
                  sizes="(max-width: 640px) 140px, 240px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bento Row: 2 Equal Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#0b0404] border border-white/10 p-6 sm:p-10 flex flex-col justify-between gap-4 sm:gap-6 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className="text-xl sm:text-4xl font-black uppercase tracking-tight text-white block">
                  ABOUT ME
                </span>
                <span className="text-xl sm:text-4xl font-black uppercase tracking-tight gradient-text block">
                  & MY JOURNEY
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Join a dedicated system crafted to deliver consistent, elite composition values in four clean phases.
              </p>
            </div>
            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-white font-medium text-xs sm:text-sm hover:text-amber-400 transition-colors group"
              >
                View my work
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:text-amber-400 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#0b0404] border border-white/10 p-6 sm:p-10 flex flex-col justify-between gap-4 sm:gap-6 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className="text-xl sm:text-4xl font-black uppercase tracking-tight text-white block">
                  ABOUT ME
                </span>
                <span className="text-xl sm:text-4xl font-black uppercase tracking-tight gradient-text block">
                  & MY JOURNEY
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Join a dedicated system crafted to deliver consistent, elite composition values in four clean phases.
              </p>
            </div>
            <div>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-white font-medium text-xs sm:text-sm hover:text-amber-400 transition-colors group"
              >
                View my work
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:text-amber-400 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
