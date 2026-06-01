"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[180px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/20 blur-[180px] animate-pulse" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-orange-500 rounded-full animate-bounce" />

        <div
          className="absolute top-[25%] right-[15%] w-4 h-4 bg-orange-400 rounded-full animate-ping"
        />

        <div
          className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-white rounded-full animate-pulse"
        />

        <div
          className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-orange-500 rounded-full animate-bounce"
        />

      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Logo */}
        <div className="flex justify-center mb-8">

          <Image
            src="/logo.png"
            alt="NitroShift"
            width={220}
            height={220}
            priority
            className="drop-shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-105 transition duration-500"
          />

        </div>

        {/* Brand */}
        <h1 className="text-5xl md:text-8xl font-black tracking-[0.25em]">
          NITROSHIFT
        </h1>

        <div className="mt-4 text-orange-500 text-xl md:text-2xl font-semibold">
          Ride • Shift • Repeat
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-8 rounded-full" />

        {/* Coming Soon */}
        <h2 className="mt-10 text-5xl md:text-7xl font-black animate-pulse">
          COMING SOON
        </h2>

        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A premium biker streetwear brand inspired by the riding community.
          Custom hoodies, oversized t-shirts, limited drops, and apparel built
          for riders.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

          <a
            href="https://instagram.com/nitroshift.in"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold text-lg transition duration-300"
          >
            Follow Instagram
          </a>

          <button
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300"
          >
            Launching Soon
          </button>

        </div>

        {/* Footer */}
        <div className="mt-20 text-gray-600 text-sm">
          © 2026 NitroShift. All Rights Reserved.
        </div>

      </div>

    </main>
  );
}
