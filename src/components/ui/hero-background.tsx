import React, { useMemo } from "react";

interface HeroBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeroBackground({ children, className = "" }: HeroBackgroundProps) {
  // Memoize column grid array to prevent allocations on re-renders
  const columnGrid = useMemo(() => Array.from({ length: 14 }), []);

  return (
    <div className="w-full flex justify-center py-3 sm:py-6 px-2 sm:px-4 bg-[#050101] min-h-screen">
      <div
        className={`relative w-full max-w-[1392px] min-h-[650px] lg:max-h-[833px] rounded-[28px] sm:rounded-[40px] overflow-hidden pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[40px] px-[20px] sm:px-[40px] flex flex-col gap-[30px] sm:gap-[60px] ${className}`}
        style={{
          backgroundImage: `
            linear-gradient(140deg, #090201 0%, #840402 40%, #E14401 75%, #E2A171 100%)
          `,
        }}
      >
        {/* 20% Dark Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.20)" }}
        />

        {/* Vertical Columns Grid with Borders */}
        <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-14 h-full w-full">
          {columnGrid.map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-black/25 relative hidden sm:block first:block"
            >
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/5" />
            </div>
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full flex flex-col gap-[30px] sm:gap-[60px] h-full flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
