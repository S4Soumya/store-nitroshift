"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 py-10">

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="NitroShift"
        width={140}
        height={140}
        priority
        className="mb-4"
      />

      {/* Brand */}
      <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] text-center">
        NITROSHIFT
      </h1>

      <p className="text-orange-500 font-semibold mt-2 text-center">
        Ride • Shift • Repeat
      </p>

      {/* Video Card */}
      <div className="mt-8 w-full max-w-sm rounded-3xl overflow-hidden border border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.3)]">

        <div className="relative pt-[177.78%]">

          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/4mol469nB9w?autoplay=1&mute=1&loop=1&playlist=4mol469nB9w&controls=0&rel=0"
            title="NitroShift Reel"
            allow="autoplay"
          />

        </div>

      </div>

      {/* Coming Soon */}
      <h2 className="mt-8 text-4xl md:text-5xl font-black text-center">
        COMING SOON
      </h2>

      <p className="mt-4 text-gray-400 text-center max-w-md">
        Premium biker streetwear built for riders.
        Exclusive hoodies, oversized tees and limited drops.
      </p>

      {/* Instagram */}
      <a
        href="https://instagram.com/nitroshift.in"
        target="_blank"
        className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold transition"
      >
        Follow @nitroshift.in
      </a>

      <div className="mt-10 text-gray-600 text-sm text-center">
        © 2026 NitroShift
      </div>

    </main>
  );
}
