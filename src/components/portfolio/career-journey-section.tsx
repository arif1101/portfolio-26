"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREER_STATS } from "@/data/portfolio-data";
import { MotionFadeIn } from "@/components/ui/motion-wrapper";

export function CareerJourneySection() {
  return (
    <section className="w-full flex justify-center px-3 sm:px-4 bg-[#050101]">
      <MotionFadeIn className="w-full max-w-[1392px] rounded-[28px] sm:rounded-[40px] flex flex-col gap-8 sm:gap-5">
        {/* Section Header */}
        <div className="text-center space-y-1.5 sm:space-y-2">
          <p className="font-sans font-normal text-[18px] leading-[140%] tracking-[0.01em] text-center text-[#A8B6B8]">
            Learning Through Every Path
          </p>
          <h2 className="font-bebas font-normal text-3xl sm:text-[48px] leading-[130%] tracking-[0%] uppercase text-center text-[#F9FBFB] mt-3">
            MY 4+ YEARS CAREER JOURNEY
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 py-4 sm:py-6 gap-y-4 sm:gap-y-0">
          {CAREER_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex flex-col items-center justify-center p-2 sm:p-4"
            >
              <span className="font-bebas font-normal text-3xl sm:text-[48px] leading-[130%] tracking-[0%] text-center align-middle text-[#F9FBFB]">
                {stat.value}
              </span>
              <span className="font-sans font-normal text-base leading-[140%] tracking-[0%] text-center align-middle text-[#A8B6B8] mt-1">
                {stat.label}
              </span>

              {/* Figma Divider: 119px vertical line, #344346 */}
              {index < CAREER_STATS.length - 1 && (
                <div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[119px] bg-[#344346] ${
                    index % 2 === 1 ? "hidden md:block" : "block"
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </MotionFadeIn>
    </section>
  );
}
