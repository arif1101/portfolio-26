"use client";

import Image from "next/image";

export function HeroSection() {
  const columns = Array.from({ length: 20 });

  return (
    <section className="relative mt-12 flex mx-auto justify-center overflow-hidden rounded-4xl h-[833px] bg-hero-gradient w-full max-w-[1392px]">
      {/* Top Left Menu Icon */}
      <button
        type="button"
        aria-label="Open menu"
        className="absolute top-[70px] left-[70px] z-30 flex flex-col justify-between w-6 h-[17px] cursor-pointer group"
      >
        <span className="w-6 h-[2px] bg-white rounded-full transition-all" />
        <span className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-6" />
        <span className="w-6 h-[2px] bg-white rounded-full transition-all" />
      </button>

      {/* Left Info Block */}
      <div className="absolute top-[340px] left-[70px] z-30 flex flex-col items-start max-w-[384px]">
        <p className="font-sans font-normal text-[18px] leading-[140%] tracking-[0.01em] text-gradient-purple mb-2">
          Hey, I am....
        </p>

        <h2 className="font-bebas font-normal text-[58px] leading-[120%] tracking-[0.012em] uppercase mb-3.5 text-gradient-name">
          ISTIAK AHMED
        </h2>

        <p className="font-sans font-normal text-[18px] leading-[140%] tracking-[0.01em] text-[#DFE6E7] mb-7">
          Transforming ideas into stunning visuals—UI/UX and brand design that captivates, engages, and delivers results.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Save Resume */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center h-[48px] gap-[8px] py-[12px] px-[24px] rounded-full bg-[#F4F6F6] hover:bg-[#F4F6F6]/90 transition"
          >
            <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 0.5H4.5C2.29086 0.5 0.5 2.29086 0.5 4.5V14.5C0.5 16.7091 2.29086 18.5 4.5 18.5H10.5C12.7091 18.5 14.5 16.7091 14.5 14.5V6.5L8.5 0.5ZM14.5 6.5H10.5C9.39543 6.5 8.5 5.60457 8.5 4.5V0.5M7.5 9.5L7.5 14.5M5.5 12.5L7.5 14.5L9.5 12.5" stroke="#0F1415" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className="font-sans font-medium text-base leading-[150%] tracking-[0.005em]  align-middle text-[#0F1415]">
              Save Resume
            </span>
          </a>

          {/* Contact with me */}
          <a
            href="#contact"
            className="inline-flex items-center h-[48px] gap-[8px] py-[12px] px-[24px] rounded-full bg-[#000000] border border-[#EFEFEF] hover:bg-white/10 transition"
          >
            <span className="font-sans font-medium text-base leading-[150%] tracking-[0.005em] align-middle text-[#F9FBFB]">
              Contact with me
            </span>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 4.5H10.5M6.5 0.5L10.5 4.5L6.5 8.5" stroke="#F9FBFB" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right side overlay image */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full select-none z-20 opacity-50">
        <Image
          src="/herobg.png"
          alt="Hero background overlay"
          fill
          priority
          className="object-cover object-right mix-blend-screen"
        />
      </div>

      {/* Bottom-left ambient warm glow */}
      <div className="pointer-events-none absolute -bottom-[60px] -left-[60px] z-10 w-[360px] h-[360px] rounded-full bg-[#E14401]/30 blur-[90px]" />

      {/* Columns */}
      <div className="relative z-10 flex">
        {columns.map((_, index) => (
          <div
            key={index}
            className="w-[70px] h-[1287px] shrink-0 border-[0.97px] border-solid border-[#FFFFFF1A] bg-gradient-to-r from-white/0 to-white/[0.14] bg-blend-overlay backdrop-blur-[173.75px]"
          />
        ))}
      </div>

      {/* Top Background Typography behind head */}
      <div className="pointer-events-none absolute top-[50px] left-[55%] -translate-x-1/2 z-[18] w-[836px] h-[248px] flex items-center justify-between select-none opacity-45">
        <span className="font-humane font-semibold text-[250px] leading-[100%] tracking-[0.012em] text-gradient-purple">
          UI/UX. 
        </span>
        <span className="font-humane font-semibold text-[250px] leading-[100%] tracking-[0.012em] text-gradient-purple">
          DESIGNER
        </span>
      </div>

      {/* Diffuse orange glow behind shoulder (seamless ambient, no hard border) */}
      <div className="pointer-events-none absolute top-[70px] left-1/2 -translate-x-1/2 z-[19] w-[750px] h-[620px] rounded-full bg-shoulder-glow blur-[60px] opacity-75" />

      {/* Center Portrait */}
      <div className="pointer-events-none absolute bottom-[30px] left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/istiak.png"
          alt="Istiak Ahmed"
          width={676}
          height={733}
          priority
          className="object-contain"
        />
      </div>

      {/* Right Signature */}
      <div className="pointer-events-none absolute right-[100px] bottom-[180px] z-30 select-none">
        <Image
          src="/signature.png"
          alt="Istiak Ahmed signature"
          width={135}
          height={92}
          className="object-contain opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Bottom Heading Bar with smooth blur transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[226px] flex items-center justify-center z-30 select-none backdrop-blur-[133.6px] bg-heading-gradient opacity-90 mask-gradient-top">
        <h1 className="whitespace-nowrap text-center font-bebas font-normal text-[120px] leading-[120%] tracking-[0%] text-gradient-purple drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          UI/UX DESIGNER
        </h1>
      </div>
    </section>
  );
}