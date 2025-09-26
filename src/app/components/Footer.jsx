"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* ===== Background image ===== */}
      <div className="absolute inset-0">
        <Image
          src="/footer.png"          // 👉 place your leaf image in /public/images/
          alt="Leaf background"
          fill
          priority
          className="object-cover"
        />
        {/* Green overlay */}
        {/* <div className="absolute inset-0 bg-[#384B40]/70" /> */}
      </div>

      {/* ===== Top content ===== */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-white">
        <div className="flex items-center space-x-3 mb-6">
          <img
            alt="Logo"
            className="h-11"
            src="/logo-yellow.png"
          />
        </div>
        <div className="flex gap-4">
            <Link href="/"><span>Home</span></Link>
            <Link href="/"><span>Experiences</span></Link>
            <Link href="/"><span>Guide</span></Link>
            <Link href="/"><span>Itineraries</span></Link>
            <Link href="/"><span>FAQ</span></Link>
        </div>

        {/* <p className="text-center max-w-xl text-sm md:text-base font-normal leading-relaxed">
          Empowering creators worldwide with the most advanced AI content
          creation tools. Transform your ideas into reality.
        </p> */}
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:justify-between items-center text-white text-sm gap-4">
          
          <div className="text-center sm:text-right">
            <a href="https://prebuiltui.com" className="hover:underline">
            
            </a>{" "}
            © 2024 Bali With Flow. All rights reserved.
          </div>

          <div className="flex items-center gap-6 underline">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
                Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
