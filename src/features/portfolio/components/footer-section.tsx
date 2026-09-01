"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="w-full max-w-[1392px] flex flex-col gap-4 sm:gap-6"
      >
        {/* Top 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Top Card: Futuristic Cyberpunk Grayscale Portrait */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-full h-[280px] sm:h-[460px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/10"
            >
              <Image
                src="/cyberpunk_portrait.png"
                alt="Cyberpunk Visor Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Card: Cuckoo Orange Tag Banner */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full h-28 sm:h-36 bg-[#ea4c23] rounded-[20px] sm:rounded-[24px] px-5 sm:px-8 py-4 sm:py-6 flex items-center shadow-2xl relative overflow-hidden cursor-pointer"
              style={{
                clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4 text-white">
                {/* Crescent Circle Logo */}
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <div className="w-7 sm:w-10 h-7 sm:h-10 rounded-full bg-[#ea4c23] border-2 sm:border-4 border-white transform translate-x-0.5" />
                </div>
                <span className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Cuckoo
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Top Cream Vision Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#fef4e8] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-gray-900 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl border border-amber-100 flex-1"
            >
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-950 leading-tight">
                  Have a vision? Let&apos;s make it happen.
                </h2>
                <p className="text-gray-700 text-xs sm:text-base leading-relaxed max-w-lg">
                  We partner with ambitious brands to design digital experiences
                  that stand out and scale fast. From sleek interfaces to bold
                  identities, here&apos;s a glimpse into the work that defines us.
                </p>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2b2b2b] hover:bg-black text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-[14px] sm:rounded-[16px] text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
                >
                  <span className="text-orange-400 font-bold">»</span> Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* Bottom Cream Links & Socials Card */}
            <div className="bg-[#fef4e8] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-gray-900 flex flex-col gap-6 sm:gap-8 shadow-2xl border border-amber-100">
              {/* Quick Links */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-950">
                  Quick Links
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700">
                  <a href="#about" className="hover:text-black transition-colors">
                    About
                  </a>
                  <a href="#services" className="hover:text-black transition-colors">
                    Services
                  </a>
                  <a href="#projects" className="hover:text-black transition-colors">
                    Projects
                  </a>
                  <a href="#pricing" className="hover:text-black transition-colors">
                    Pricing
                  </a>
                  <a href="#blog" className="hover:text-black transition-colors">
                    Blog
                  </a>
                </div>
              </div>

              {/* Utilities */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-950">
                  Utilities
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-600">
                  <a href="#style-guide" className="hover:text-black transition-colors">
                    Style Guide
                  </a>
                  <a href="#licenses" className="hover:text-black transition-colors">
                    Licenses
                  </a>
                  <a href="#changelog" className="hover:text-black transition-colors">
                    Changelog
                  </a>
                  <a href="#privacy" className="hover:text-black transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#404" className="hover:text-black transition-colors">
                    404
                  </a>
                </div>
              </div>

              {/* Social Media Pill Buttons Bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border border-gray-200/80 shadow-sm rounded-full py-2.5 sm:py-3.5 flex items-center justify-center transition-all"
                >
                  <span className="text-orange-600 font-extrabold text-base sm:text-lg">f</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border border-gray-200/80 shadow-sm rounded-full py-2.5 sm:py-3.5 flex items-center justify-center transition-all"
                >
                  <span className="text-orange-600 font-extrabold text-base sm:text-lg">𝕏</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border border-gray-200/80 shadow-sm rounded-full py-2.5 sm:py-3.5 flex items-center justify-center transition-all"
                >
                  <span className="text-orange-600 font-extrabold text-base sm:text-lg">in</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Reserved Footer Bar */}
        <div className="bg-[#121212] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400 gap-2 sm:gap-4 mt-2 text-center sm:text-left">
          <span>All Rights Reserved.</span>
          <span>
            Template by - <strong className="text-gray-200">Serif</strong>, Powered by - <strong className="text-gray-200">Webflow</strong>
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
