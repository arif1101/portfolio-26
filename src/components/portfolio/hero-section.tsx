"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative mx-auto overflow-hidden select-none"
      style={{
        width: 1392,
        height: 833,
        borderRadius: 40,
        paddingTop: 60,
        paddingRight: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        background: `linear-gradient(255.21deg, #090201 4.68%, #840402 28.55%, #E14401 76.5%, #E2A171 98.97%),
                     linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
      }}
    >
      {/* ---------- BACKGROUND TEXTURE ---------- */}

      {/* vertical column stripes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 58px)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 78%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 78%)",
        }}
      />

      {/* warm center-right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 62% 58%, rgba(255,120,40,0.28) 0%, rgba(255,120,40,0) 65%)",
        }}
      />

      {/* corner vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      {/* film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.16,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* diagonal light streaks, right side */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: 250,
          right: 108,
          width: 2,
          height: 140,
          transform: "rotate(22deg)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: 400,
          right: 128,
          width: 2,
          height: 110,
          transform: "rotate(22deg)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* dust specks */}
      {[
        { top: 40, left: 1300, s: 2, o: 0.5 },
        { top: 222, left: 1108, s: 2, o: 0.35 },
        { top: 320, left: 1287, s: 3, o: 0.28 },
        { top: 470, left: 385, s: 2, o: 0.3 },
        { top: 705, left: 1045, s: 2, o: 0.35 },
        { top: 745, left: 46, s: 3, o: 0.22 },
        { top: 262, left: 460, s: 2, o: 0.25 },
      ].map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-white"
          style={{ top: d.top, left: d.left, width: d.s, height: d.s, opacity: d.o }}
        />
      ))}

      {/* ---------- GHOST HEADLINE (behind portrait) ---------- */}
      <h2
        aria-hidden
        className="pointer-events-none absolute whitespace-nowrap"
        style={{
          top: 58,
          left: 338,
          fontFamily: "'Anton', 'Oswald', sans-serif",
          fontSize: 186,
          lineHeight: "0.95em",
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.085)",
          margin: 0,
        }}
      >
        UI/UX DESIGNER
      </h2>

      {/* ---------- PORTRAIT ---------- */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 560,
          height: 760,
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 82%, rgba(0,0,0,0.35) 93%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 82%, rgba(0,0,0,0.35) 93%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Image
          src="/istiak.png"
          alt="Istiak Ahmed"
          fill
          priority
          sizes="560px"
          style={{ objectFit: "contain", objectPosition: "bottom center" }}
        />
      </div>

      {/* ---------- MENU ---------- */}
      <button
        type="button"
        aria-label="Open menu"
        className="absolute flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        style={{ top: 82, left: 44, gap: 7, padding: 4, borderRadius: 6 }}
      >
        <span style={{ width: 40, height: 3, borderRadius: 2, background: "#FFFFFF" }} />
        <span style={{ width: 30, height: 3, borderRadius: 2, background: "#FFFFFF" }} />
        <span style={{ width: 40, height: 3, borderRadius: 2, background: "#FFFFFF" }} />
      </button>

      {/* ---------- LEFT COPY BLOCK ---------- */}
      <div className="absolute" style={{ left: 44, top: 288, width: 330 }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: 18,
            lineHeight: "26px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Hey, I am....
        </p>

        <h1
          style={{
            margin: "6px 0 0",
            fontFamily: "'Anton', 'Oswald', sans-serif",
            fontSize: 56,
            lineHeight: "1.02em",
            letterSpacing: "0.005em",
            background:
              "linear-gradient(176deg, #FFFFFF 0%, #FFF3E9 34%, #F0A472 72%, #E07A3E 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          ISTIAK AHMED
        </h1>

        <p
          style={{
            margin: "16px 0 0",
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: 17,
            lineHeight: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Transforming ideas into stunning visuals—UI/UX and brand design that captivates,
          engages, and delivers results.
        </p>

        <div className="flex items-center" style={{ marginTop: 32, gap: 16 }}>
          <a
            href="/istiak-ahmed-resume.pdf"
            download
            className="inline-flex items-center justify-center transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            style={{
              height: 48,
              padding: "0 22px",
              gap: 10,
              borderRadius: 999,
              background: "#FFFFFF",
              color: "#121212",
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
                stroke="#121212"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M12 11v5m0 0 2-2m-2 2-2-2"
                stroke="#121212"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Save Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            style={{
              height: 48,
              padding: "0 22px",
              gap: 10,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.85)",
              color: "#FFFFFF",
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Contact with me
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h13m0 0-5-5m5 5-5 5"
                stroke="#FFFFFF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ---------- SIGNATURE ---------- */}
      <svg
        aria-hidden
        className="pointer-events-none absolute"
        style={{ right: 104, top: 540, opacity: 0.72 }}
        width="185"
        height="115"
        viewBox="0 0 185 115"
        fill="none"
      >
        <g stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M52 8C44 26 33 52 27 72c-2 7-1 12 4 11 6-2 12-14 18-30" />
          <path d="M49 53c-9 3-20 6-28 6" />
          <path d="M55 40c-3 16-4 32-2 44 1 6 4 9 8 6 5-4 8-14 10-25" />
          <path d="M72 46c-5 14-7 26-5 33 1 5 5 6 8 2 4-5 7-14 9-23" />
          <path d="M88 44c-4 15-4 28 0 34 3 4 7 2 10-3" />
          <path d="M101 58c6-4 13-9 17-14 2-3 1-6-2-4-5 3-9 12-11 22-1 7 1 11 5 10 5-2 10-10 14-19" />
          <path d="M125 40c-6 16-9 30-8 38" />
          <path d="M121 56c8-3 16-5 23-4" />
          <path d="M148 30c-9 24-14 44-14 57 0 6 3 8 6 4" />
          <path d="M139 62c9-4 18-7 26-6" />
          <path d="M24 96c30 6 82 6 128-3" />
        </g>
      </svg>

      {/* ---------- FOREGROUND HEADLINE ---------- */}
      <h2
        className="pointer-events-none absolute whitespace-nowrap"
        style={{
          bottom: 42,
          left: "50%",
          transform: "translateX(-50%)",
          margin: 0,
          fontFamily: "'Anton', 'Oswald', sans-serif",
          fontSize: 96,
          lineHeight: "1em",
          letterSpacing: "-0.005em",
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 58%, #E8E2F2 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          textShadow: "0 8px 40px rgba(0,0,0,0.18)",
        }}
      >
        UI/UX DESIGNER
      </h2>
    </section>
  );
}