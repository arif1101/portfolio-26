"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TAGS = [
  { label: "Mobile app", rotate: "-rotate-2" },
  { label: "Website", rotate: "rotate-1" },
  { label: "Web app", rotate: "rotate-3" },
  { label: "Landing page", rotate: "rotate-0" },
  { label: "Dashboard", rotate: "-rotate-2" },
  { label: "SAS", rotate: "rotate-3" },
];

export function MyWorkSection() {
  return (
    <section className="w-full flex justify-center py-6 sm:py-12 px-3 sm:px-4 bg-[#050101]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid w-full max-w-[1360px] grid-cols-1 gap-4 lg:grid-cols-[1.55fr_1fr]"
      >
        <div className="grid grid-rows-[auto_auto] gap-4">
          <motion.div
            variants={item}
            className="relative isolate flex min-h-[300px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.06]"
          >
            <Image
              src="/uiuxdesign.png"
              alt="UX UI design showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 820px"
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.div
              variants={item}
              className="relative isolate flex min-h-[300px] flex-col items-center overflow-hidden rounded-[28px] border border-white/[0.06] px-6 pt-9"
              style={{
                background:
                  "radial-gradient(80% 55% at 50% 100%, rgba(226,199,255,0.78) 0%, rgba(139,72,234,0.72) 28%, rgba(84,20,188,0.42) 55%, rgba(12,8,24,0) 78%), #0B0618",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "46px 100%",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 h-[58%] w-full bg-gradient-to-t from-[#f0d7ff]/80 via-[#6f2de7]/55 to-transparent blur-[1px]"
              />
              <div className="pointer-events-none absolute bottom-[18px] left-1/2 h-[210px] w-[300px] -translate-x-1/2 rounded-t-full border border-white/10 opacity-50" />
              <div className="pointer-events-none absolute bottom-[-26px] left-1/2 h-[238px] w-[360px] -translate-x-1/2 rounded-t-full border border-white/10 opacity-30" />
              <div className="pointer-events-none absolute bottom-[-64px] left-1/2 h-[270px] w-[430px] -translate-x-1/2 rounded-t-full border border-white/10 opacity-20" />

              <h4 className="relative z-10 text-center font-[var(--font-anton,inherit)] text-[28px] leading-[0.95] text-white sm:text-[34px]">
                Website &amp; Web APP
                <br />
                <span className="bg-gradient-to-b from-white via-[#dcb6ff] to-[#b47aff] bg-clip-text text-transparent">
                  UI/UX Design
                </span>
              </h4>

              <div className="relative z-10 mt-auto mb-7 h-[142px] w-full max-w-[260px]">
                <Image
                  src="/xd.png"
                  alt="Adobe XD"
                  width={70}
                  height={70}
                  className="absolute left-[6%] top-[18%] h-[52px] w-[52px] -rotate-12 object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)]"
                />
                <Image
                  src="/gpt.png"
                  alt="ChatGPT"
                  width={170}
                  height={170}
                  className="absolute bottom-[-38px] left-[28%] h-[118px] w-[118px] object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.3)]"
                />
                <Image
                  src="/figma.png"
                  alt="Figma"
                  width={86}
                  height={86}
                  className="absolute left-[50%] top-[6%] h-[74px] w-[74px] -translate-x-1/2 object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.28)]"
                />
                <Image
                  src="/claude.png"
                  alt="Design feedback"
                  width={84}
                  height={84}
                  className="absolute right-[6%] top-[34%] h-[62px] w-[62px] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="relative isolate flex min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-white/[0.06] px-8 py-8"
              style={{
                background:
                  "radial-gradient(90% 42% at 50% 100%, rgba(235,194,255,0.95) 0%, rgba(133,68,228,0.55) 40%, rgba(12,8,24,0) 78%), #0B0618",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.16]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "46px 100%",
                }}
              />

              <h4 className="relative z-10 font-[var(--font-anton,inherit)] text-[34px] leading-[0.95] text-white sm:text-[38px]">
                Digital Product
                <br />
                <span className="bg-gradient-to-b from-white via-[#dcb6ff] to-[#b47aff] bg-clip-text text-transparent">
                  Making
                </span>
              </h4>
              <p className="relative z-10 mt-4 text-lg text-white/58 sm:text-xl">
                Choice your path
              </p>

              <div className="relative z-10 mt-auto flex flex-wrap gap-3 pt-8">
                {TAGS.map((tag) => (
                  <span
                    key={tag.label}
                    className={`${tag.rotate} rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={item}
          className="relative isolate flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border border-white/[0.06] px-7 py-10 sm:px-10 lg:min-h-full"
          style={{
            background:
              "radial-gradient(75% 55% at 50% 12%, rgba(94,58,181,0.48) 0%, rgba(94,58,181,0.12) 52%, rgba(10,6,22,0) 78%), #0A0616",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 58px)",
            }}
          />

          <div className="relative z-10 mx-auto mt-10 h-[230px] w-full max-w-[320px] sm:mt-14">
            <Image
              src="/message.png"
              alt="Message bubbles"
              fill
              sizes="(max-width: 1024px) 70vw, 320px"
              className="object-contain drop-shadow-[0_34px_44px_rgba(38,18,96,0.45)]"
            />
          </div>

          <h3
            className="relative z-10 mt-auto font-[var(--font-anton,inherit)] text-[42px] leading-[0.95] text-white sm:text-[52px]"
            style={{ fontVariantCaps: "small-caps" }}
          >
            LET&apos;S CREATE IMPACT
          </h3>

          <p className="relative z-10 mt-5 max-w-[330px] text-xl leading-relaxed text-white/62 sm:text-2xl">
            Let&apos;s create meaningful and lasting digital impact.
          </p>

          <a
            href="#contact"
            className="relative z-10 mt-10 inline-flex w-fit items-center gap-3 rounded-xl bg-white px-7 py-4 text-lg font-medium text-[#121212] transition-colors hover:bg-white/90"
          >
            Contact with me
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
