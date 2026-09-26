"use client";

import Image from "next/image";

export function HeroSection() {
  const columns = Array.from({ length: 20 });

  return (
    <section className="relative mt-12 flex mx-auto justify-center overflow-hidden rounded-4xl h-[833px] bg-hero-gradient w-full max-w-[1392px]">
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

      {/* Columns */}
      <div className="relative z-10 flex">
        {columns.map((_, index) => (
          <div
            key={index}
            className="w-[70px] h-[1287px] shrink-0 border-[0.97px] border-solid border-[#FFFFFF1A] bg-gradient-to-r from-white/0 to-white/[0.14] bg-blend-overlay backdrop-blur-[173.75px]"
          />
        ))}
      </div>

      {/* Diffuse orange glow behind shoulder */}
      <div className="pointer-events-none absolute top-[94.43px] left-[284px] z-[19] w-[825px] h-[692.58px] rounded-full" />

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

      {/* Bottom Heading Bar with smooth blur transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[226px] flex items-center justify-center z-30 select-none backdrop-blur-[133.6px] bg-heading-gradient opacity-90 mask-gradient-top">
        <h1 className="whitespace-nowrap text-center font-bebas font-normal text-[120px] leading-[120%] tracking-[0%] bg-[linear-gradient(180deg,#FFFFFF_54.17%,#B372CF_100%)] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          UI/UX DESIGNER
        </h1>
      </div>
    </section>
  );
}