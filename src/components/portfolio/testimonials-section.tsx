"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/portfolio-data";

export function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="relative w-full max-w-[1392px] bg-gradient-to-b from-[#100520] via-[#0b0318] to-[#050101] rounded-[28px] sm:rounded-[40px] border border-purple-500/20 p-5 sm:p-12 md:p-16 flex flex-col gap-8 sm:gap-12 overflow-hidden shadow-2xl"
      >
        {/* Background Light Rays */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[300px] sm:h-[500px] pointer-events-none opacity-25 blur-[90px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(88, 28, 135, 0) 70%)",
          }}
        />

        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3 relative z-10">
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            LOVE BY THOUSAND OF MEMBER
          </h2>
          <p className="text-purple-200/70 text-xs sm:text-base font-normal max-w-xl mx-auto">
            Community member share their feedback about they favorite RunOn
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 90,
                damping: 15,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between gap-4 sm:gap-6 transition-all duration-300 backdrop-blur-md border ${
                item.featured
                  ? "bg-gradient-to-b from-[#2a134a]/80 to-[#190930]/80 border-purple-400/40 shadow-xl shadow-purple-500/10 hover:border-purple-300/60"
                  : "bg-[#16092b]/50 border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              {/* Author Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full overflow-hidden border border-purple-400/30 flex-shrink-0 bg-purple-900">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base tracking-tight truncate">
                    {item.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-purple-300/60 font-medium truncate">
                    {item.handle}
                  </span>
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-purple-100/80 text-xs sm:text-sm leading-relaxed font-normal">
                &ldquo;{item.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
