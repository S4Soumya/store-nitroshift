"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Grid */}
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

      {/* Orange Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[150px] animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle top-[15%] left-[10%]" />
        <div className="particle top-[25%] left-[80%]" />
        <div className="particle top-[45%] left-[60%]" />
        <div className="particle top-[70%] left-[20%]" />
        <div className="particle top-[80%] left-[75%]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-5 py-10">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="NitroShift"
          width={140}
          height={140}
          priority
          className="drop-shadow-[0_0_35px_rgba(249,115,22,0.7)]"
        />

        {/* Brand */}
        <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[0.25em] text-center">
          NITROSHIFT
        </h1>

        <p className="text-orange-500 font-semibold mt-2 text-center">
          Ride • Shift • Repeat
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-orange-500 rounded-full mt-6" />

        {/* Video Section */}
        <div className="w-full max-w-md mt-10 rounded-[30px] overflow-hidden border border-orange-500/40 bg-black shadow-[0_0_40px_rgba(249,115,22,0.2)]">

          <div className="relative pt-[177.77%]">

            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/EGxxMwdHNTY?autoplay=1&mute=1&loop=1&playlist=EGxxMwdHNTY&controls=0&rel=0"
              title="NitroShift Launch Video"
              allow="autoplay"
            />

          </div>

        </div>

        {/* Launch Text */}
        <h2 className="mt-10 text-4xl md:text-6xl font-black text-center animate-pulse">
          COMING SOON
        </h2>

        <p className="mt-5 max-w-md text-center text-gray-400 leading-relaxed">
          Premium biker streetwear inspired by the riding community.
          Exclusive oversized tees, hoodies, custom drops and limited collections.
        </p>

        {/* CTA */}
        <a
          href="https://instagram.com/nitroshift.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-full font-bold"
        >
          Follow @nitroshift.in
        </a>

        {/* Footer */}
        <div className="mt-10 text-gray-600 text-sm text-center">
          © 2026 NitroShift. All Rights Reserved.
        </div>

      </div>
    </main>
  );
}
