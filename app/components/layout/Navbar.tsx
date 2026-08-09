"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center gap-4">

          <div className="relative w-[70px] h-[70px] shrink-0">
         <Image
  src="/images/logo.png"
  alt="Shiraz Legal Associates logo"
  width={70}
  height={70}
  priority
  className="h-[70px] w-[70px] object-contain"
/>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#0B1F3A] leading-tight">
              Shiraz Legal Associates
            </h1>

            <p className="text-sm font-semibold text-gray-700">
              Advocates & Legal Consultants
            </p>

            <p className="text-xs text-blue-600">
              AI Powered Legal Services
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">

          <Link href="/" className="hover:text-blue-700 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-700 transition">
            About Us
          </Link>

          <Link href="/practice-areas" className="hover:text-blue-700 transition">
            Practice Areas
          </Link>

          <Link href="/team" className="hover:text-blue-700 transition">
            Our Team
          </Link>

          <Link href="/news" className="hover:text-blue-700 transition">
            News
          </Link>

          <Link href="/#ai" className="hover:text-blue-700 transition">
            AI Assistant
          </Link>

          <Link href="/contact" className="hover:text-blue-700 transition">
            Contact
          </Link>

        </nav>

        {/* Appointment Button */}
        <Link
          href="/appointment"
          className="hidden lg:inline-block bg-[#0B1F3A] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Book Appointment
        </Link>

      </div>
    </header>
  );
}