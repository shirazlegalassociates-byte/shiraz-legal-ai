"use client";

import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "News", href: "/news" },
  { name: "AI Assistant", href: "/#ai" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#0B1F3A] cursor-pointer">
              Shiraz Legal Associates
            </h1>
          </Link>

          <p className="text-xs text-gray-500">
            AI Powered Legal Services
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-[#D4AF37] transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="/appointment">
            Book Appointment
          </Button>
        </div>

      </div>
    </header>
  );
}