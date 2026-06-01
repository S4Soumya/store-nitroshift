"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* YOUTUBE VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/4mol469nB9w?autoplay=1&mute=1&loop=1&playlist=4mol469nB9w&controls=0&showinfo=0&rel=0"
          title="NitroShift Background"
          allow="autoplay"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Orange Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* LOGO */}
        <div className="relative">

          <div className="absolute inset-0 bg-orange-500 blur-[100px] opacity-40" />

          <Image
            src="/logo.png"
            alt="NitroShift"
            width={260}
            height={260}
            priority
            className="relative drop-shadow-[0_0_40px_rgba(249,115,22,0.8)]"
          />

        </div>

        {/* BRAND */}
        <h1 className="mt-10 text-5xl md:text-8xl font-black tracking-[0.25em]">
          NITROSHIFT
        </h1>

        <p className="mt-4 text-orange-500 text-xl md:text-2xl font-semibold">
          Ride • Shift • Repeat
        </p>

        <div className="w-32 h-1 bg-orange-500 rounded-full mt-8" />

        {/* COMING SOON */}
        <h2 className="mt-10 text-5xl md:text-7xl font-black animate-pulse">
          COMING SOON
        </h2>

        <p className="max-w-2xl mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
          Premium biker streetwear inspired by the riding community.
          Oversized tees, hoodies, exclusive drops, and rider culture.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">

          <a
            href="https://instagram.com/nitroshift.in"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-8 py-4 rounded-full font-bold text-lg"
          >
            Follow Instagram
          </a>

          <button
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 px-8 py-4 rounded-full font-bold text-lg"
          >
            Launching Soon
          </button>

        </div>

        {/* FOOTER */}
        <div className="absolute bottom-8 text-gray-500 text-sm">
          © 2026 NitroShift. All Rights Reserved.
        </div>

      </div>

    </main>
  );
}
