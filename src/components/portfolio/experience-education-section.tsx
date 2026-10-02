"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ExperienceEducationSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-10 px-3 sm:px-4 bg-[#050101]">
      <div className="w-full max-w-[1360px] flex flex-col gap-6 sm:gap-8">
        {/* Top Header Banner with Dashed Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full rounded-[24px] sm:rounded-[32px] border border-dashed border-white/15 p-3 sm:p-5 flex items-center justify-center overflow-hidden"
        >
          <div
            className="relative w-full h-[120px] sm:h-[160px] md:h-[190px] rounded-[18px] sm:rounded-[24px] flex items-center justify-center overflow-hidden shadow-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #FF5500 0%, #C43403 40%, #580B02 100%)",
            }}
          >
            {/* Ambient orange glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E0B04] via-[#D84315] to-[#781408] opacity-90" />
            <div className="pointer-events-none absolute -top-[40px] left-1/2 -translate-x-1/2 w-[70%] h-[150px] bg-[#FF8C4B]/40 blur-[70px] rounded-full" />

            <h2 className="relative z-10 font-bebas text-[48px] sm:text-[76px] md:text-[100px] uppercase tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] leading-none text-center select-none">
              MY CAREER JOURNEY
            </h2>
          </div>
        </motion.div>

        {/* Lower Experience Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="relative isolate w-full rounded-[28px] sm:rounded-[36px] border border-white/[0.08] p-6 sm:p-10 md:p-14 overflow-hidden"
          style={{
            background:
              "radial-gradient(60% 60% at 0% 90%, rgba(225, 68, 1, 0.22) 0%, rgba(120, 30, 5, 0.1) 50%, transparent 80%), radial-gradient(60% 60% at 100% 90%, rgba(105, 35, 185, 0.25) 0%, rgba(45, 10, 80, 0.1) 50%, transparent 80%), #0A030D",
          }}
        >
          {/* Ambient blurred glow in background */}
          <div className="pointer-events-none absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-r from-[#E14401]/12 via-[#6E2BB5]/15 to-transparent blur-[110px]" />

          {/* 3-Column Experience Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch">
            {/* Left Column: Softvence & Air Speed */}
            <div className="flex flex-col justify-between py-2 sm:py-6 pr-0 lg:pr-10 xl:pr-14 lg:border-r lg:border-dashed lg:border-white/15">
              <div className="pb-6 sm:pb-8">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Softvence Agency
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">
                  September 2025 - Present
                </p>
                <p className="font-sans text-sm sm:text-base text-white/70 mt-3 font-normal">
                  Executive UI/UX Designer
                </p>
              </div>

              <div className="border-b border-dashed border-white/15 w-full my-2" />

              <div className="pt-6 sm:pt-8">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Air Speed Pvt Ltd
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">
                  December 2024 - August 2025
                </p>
                <p className="font-sans text-sm sm:text-base text-white/70 mt-3 font-normal">
                  Executive Graphics Designer
                </p>
              </div>
            </div>

            {/* Center Column: Portrait */}
            <div className="flex justify-center items-center px-4 lg:px-8 xl:px-12 py-8 lg:py-0">
              <div className="relative w-[180px] sm:w-[210px] md:w-[230px] aspect-[164/209] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <Image
                  src="/career_portrait.png"
                  alt="Career Journey Portrait"
                  fill
                  sizes="(max-width: 640px) 180px, 230px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column: TMT Soft & DRM Electronic */}
            <div className="flex flex-col justify-between py-2 sm:py-6 pl-0 lg:pl-10 xl:pl-14 lg:border-l lg:border-dashed lg:border-white/15">
              <div className="pb-6 sm:pb-8">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  TMT Soft Company
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">
                  February 2024 - January 2025
                </p>
                <p className="font-sans text-sm sm:text-base text-white/70 mt-3 font-normal">
                  Junior UI/UX Designer
                </p>
              </div>

              <div className="border-b border-dashed border-white/15 w-full my-2" />

              <div className="pt-6 sm:pt-8">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  DRM Electronic Limited
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">
                  May 2022 - Nov 2024
                </p>
                <p className="font-sans text-sm sm:text-base text-white/70 mt-3 font-normal">
                  Executive Graphics Designer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
