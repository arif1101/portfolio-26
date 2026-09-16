"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { INTEGRATION_TOOLS } from "@/data/portfolio-data";

export function ToolsIntegrationSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        className="relative w-full max-w-[1392px] bg-[#070202] rounded-[28px] sm:rounded-[40px] border border-white/10 p-4 sm:p-10 md:p-12 overflow-hidden shadow-2xl"
      >
        {/* Ambient Corner Glows */}
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Inner Dark Card */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#0c0505] border border-white/10 py-12 sm:py-24 px-4 sm:px-12 flex flex-col items-center justify-center text-center overflow-hidden min-h-[420px] sm:min-h-[500px]">
          {/* Grid Dot Pattern Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1.5px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Crimson Ribbon Background Glow */}
          <div
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[200px] sm:h-[300px] pointer-events-none opacity-40 blur-[70px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(230, 74, 25, 0.7) 0%, rgba(140, 10, 5, 0) 70%)",
            }}
          />

          {/* Floating Tool App Icons Cloud (Tablet & Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            {INTEGRATION_TOOLS.map((icon, index) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }}
                transition={{
                  default: { delay: index * 0.06, type: "spring", stiffness: 120, damping: 14 },
                  y: { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.25, rotate: 6 }}
                className={`absolute ${icon.positionClass} w-12 h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl ${icon.bgColor} flex items-center justify-center shadow-xl shadow-black/50 pointer-events-auto cursor-pointer group`}
              >
                <span className={`${icon.textColor} text-base sm:text-xl group-hover:scale-110 transition-transform`}>
                  {icon.symbol}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Tool Badges Bar */}
          <div className="sm:hidden flex flex-wrap justify-center gap-2 mb-6 relative z-10 w-full px-2">
            {INTEGRATION_TOOLS.slice(0, 8).map((icon) => (
              <motion.div
                key={icon.id}
                whileHover={{ scale: 1.15 }}
                className={`w-10 h-10 rounded-xl ${icon.bgColor} flex items-center justify-center shadow-md`}
              >
                <span className={`${icon.textColor} text-sm`}>
                  {icon.symbol}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center Copy & Typography */}
          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6 pt-2 sm:pt-16">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md leading-tight">
              WILL IT WORK WITH MY OTHER TOOLS?
            </h2>

            <p className="text-gray-400 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
              Referral programs, push notifications, social sharing, payment gateways,
              A/B testing, desktop editors, mobile apps, comments, notifications. Yes.
            </p>

            <div className="pt-2">
              <a
                href="#integrations"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-amber-400 hover:text-amber-300 font-medium text-xs sm:text-base transition-colors group"
              >
                Explore the integrations library
                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
