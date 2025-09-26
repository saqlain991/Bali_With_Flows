"use client";

import { Button } from "@/components/ui/button";

export default function AboutBanner() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/swaycloth991/Project1/aboutBanner.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-10">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About the Host
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl">
              "I’ve spent 6+ years discovering the real Bali—what most people
              never get to see. I created BaliwithFlow to share that magic with
              escapees who crave meaning, depth, and effortless beauty in every
              detail."
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button className="bg-amber-500 hover:bg-amber-600 h-14 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg cursor-pointer">
                Book Escape →
              </Button>
              <Button
                variant="outline"
                className="border-white h-14 bg-white/20 text-white hover:bg-white/30 px-6 py-4 rounded-2xl font-semibold text-lg cursor-pointer"
              >
                Plan personal trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
