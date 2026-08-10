"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="relative w-[58px] h-[58px] shrink-0">
              <Image
                src="/images/logo.png"
                alt="Shiraz Legal Associates logo"
                width={58}
                height={58}
                priority
                className="w-[58px] h-[58px] object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0B1F3A] leading-tight">
                Shiraz Legal Associates
              </h1>

              <p className="hidden sm:block text-xs lg:text-sm font-medium text-gray-600 mt-1">
                Advocates & Legal Consultants
              </p>

              <p className="hidden sm:block text-[10px] lg:text-xs font-semibold text-blue-700 mt-1 tracking-wide">
                AI POWERED LEGAL SERVICES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-[#0B1F3A]">

            <Link href="/" className="hover:text-blue-700 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-700 transition">
              About Us
            </Link>

            <Link
              href="/practice-areas"
              className="hover:text-blue-700 transition"
            >
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

            <Link
              href="/appointment"
              className="bg-[#0B1F3A] hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold transition shadow-sm"
            >
              Book Consultation
            </Link>

          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-[#0B1F3A] hover:bg-gray-100 transition"
          >
            {menuOpen ? (
              <span className="text-2xl font-light">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                About Us
              </Link>

              <Link
                href="/practice-areas"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                Practice Areas
              </Link>

              <Link
                href="/team"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                Our Team
              </Link>

              <Link
                href="/news"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                News
              </Link>

              <Link
                href="/#ai"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                AI Assistant
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-[#0B1F3A] font-medium hover:bg-gray-100 transition"
              >
                Contact
              </Link>

              <Link
                href="/appointment"
                onClick={closeMenu}
                className="mt-2 bg-[#0B1F3A] hover:bg-blue-800 text-white px-5 py-3 rounded-lg text-center font-semibold transition"
              >
                Book Consultation
              </Link>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}