"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col items-center justify-center px-5 py-10">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-[140px] animate-pulse" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="particle top-[15%] left-[15%]" />
        <div className="particle top-[25%] left-[80%]" />
        <div className="particle top-[50%] left-[60%]" />
        <div className="particle top-[70%] left-[20%]" />
        <div className="particle top-[85%] left-[75%]" />
        <div className="particle top-[35%] left-[45%]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}
        <div className="relative">

          <div className="absolute inset-0 bg-orange-500 blur-[80px] opacity-30" />

          <Image
            src="/logo.png"
            alt="NitroShift"
            width={150}
            height={150}
            priority
            className="relative"
          />

        </div>

        {/* BRAND */}
        <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[0.25em] text-center">
          NITROSHIFT
        </h1>

        <p className="text-orange-500 font-semibold mt-3 text-center">
          Ride • Shift • Repeat
        </p>

        {/* VIDEO */}
        <div className="mt-10 w-full max-w-sm rounded-[32px] overflow-hidden border border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.25)] bg-black">

          <div className="relative pt-[177.77%]">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/EGxxMwdHNTY?si=cEIEshrkIx8u1SCd&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

        </div>

        {/* COMING SOON */}
        <h2 className="mt-10 text-4xl md:text-6xl font-black text-center">
          COMING SOON
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-md leading-relaxed">
          Premium biker streetwear inspired by the riding community.
          Oversized tees, hoodies, limited drops and apparel built for riders.
        </p>

        {/* INSTAGRAM BUTTON */}
        <a
          href="https://instagram.com/nitroshift.in"
          target="_blank"
          className="mt-8 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-full font-bold"
        >
          Follow @nitroshift.in
        </a>

        {/* FOOTER */}
        <div className="mt-10 text-sm text-gray-600 text-center">
          © 2026 NitroShift. All Rights Reserved.
        </div>

      </div>

    </main>
  );
}
