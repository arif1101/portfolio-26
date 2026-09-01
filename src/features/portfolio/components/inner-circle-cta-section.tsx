"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function InnerCircleCtaSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="relative w-full max-w-[1392px] rounded-[28px] sm:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-[#090303]"
      >
        {/* Ribbed Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/cta_ribbed_bg.png"
            alt="Background Texture"
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
          {/* Overlay for legibility */}
          <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 py-12 sm:py-28 px-5 sm:px-12 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-lg leading-tight">
            READY TO JOIN THE INNER CIRCLE?
          </h2>

          {/* Description */}
          <p className="text-gray-200/80 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Thousands of creators are already inside. Premium content, exclusive
            resources, and a community unlike any other &mdash; all waiting for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-base px-6 py-3 sm:py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl"
            >
              Join as member
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-black/40 border border-white/40 text-white font-semibold text-xs sm:text-base px-6 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              Learn more
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
