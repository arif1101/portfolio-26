"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/hero-background";

export function HeroSection() {
  return (
    <HeroBackground>
      {/* Top Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between z-30"
      >
        <button
          aria-label="Open menu navigation"
          className="flex flex-col gap-[5px] w-8 p-1 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-md transition-all group"
        >
          <span className="h-[2px] w-full bg-white/90 rounded-full group-hover:bg-amber-400 transition-colors" />
          <span className="h-[2px] w-5 bg-white/90 rounded-full group-hover:bg-amber-400 transition-colors" />
          <span className="h-[2px] w-full bg-white/90 rounded-full group-hover:bg-amber-400 transition-colors" />
        </button>
      </motion.div>

      {/* Main Hero Content Area */}
      <div className="relative flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pt-4 pb-2">
        {/* Giant Background Outline Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[-20px] sm:top-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[42px] sm:text-[80px] lg:text-[120px] font-black uppercase tracking-tight text-white/10 select-none pointer-events-none z-0"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
        >
          UI/UX Designer
        </motion.h1>

        {/* Left Copy & CTA Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.3 }}
          className="relative lg:absolute left-0 bottom-0 lg:bottom-10 max-w-full lg:max-w-[380px] flex flex-col gap-3 sm:gap-4 z-20 text-center lg:text-left items-center lg:items-start"
        >
          <p className="text-white/80 text-base sm:text-lg font-medium">
            Hey, I am....
          </p>
          <h2 className="text-white text-3xl sm:text-5xl font-extrabold uppercase leading-none tracking-tight">
            Istiak Ahmed
          </h2>
          <p className="text-white/75 text-xs sm:text-[15px] leading-relaxed max-w-md">
            Transforming ideas into stunning visuals—UI/UX and brand design
            that captivates, engages, and delivers results.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            href="#contact"
            className="mt-1 sm:mt-2 inline-flex items-center gap-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold px-5 py-3 hover:bg-white/90 transition-colors shadow-lg"
          >
            Contact with me
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* Central Portrait Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.4 }}
          className="relative z-10 w-full lg:w-auto flex items-end justify-center mt-auto"
        >
          <div className="relative h-[340px] sm:h-[440px] lg:h-[520px] w-[300px] sm:w-[400px] lg:w-[460px]">
            <Image
              src="/portrait.png"
              alt="Istiak Ahmed - UI/UX Designer"
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 460px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Signature Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-0 bottom-4 sm:bottom-16 h-10 sm:h-16 w-36 sm:w-48 opacity-80 z-20 hidden sm:block"
        >
          <Image
            src="/signature.png"
            alt="Istiak Ahmed Signature"
            fill
            sizes="192px"
            className="object-contain object-right-bottom"
          />
        </motion.div>
      </div>

      {/* Bottom Repeated Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-white text-2xl sm:text-5xl font-black uppercase tracking-tight z-20"
      >
        UI/UX Designer
      </motion.h3>
    </HeroBackground>
  );
}
