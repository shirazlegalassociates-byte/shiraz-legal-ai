"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Shiraz Legal Associates
          </h1>

          <p className="text-xs text-gray-500">
            AI Powered Legal Services
          </p>
        </div>

        <nav className="hidden md:flex gap-8">

         <Link href="/" className="hover:text-blue-700">
  Home
</Link>

<Link href="/about" className="hover:text-blue-700">
  About Us
</Link>
<Link href="/team" className="hover:text-blue-700">
  Our Team
</Link>
<Link href="/practice-areas" className="hover:text-blue-700">
  Practice Areas

</Link>

<Link href="/#ai" className="hover:text-blue-700">
  AI Assistant
</Link>

<Link href="/contact" className="hover:text-blue-700">
  Contact
</Link>

        </nav>

        <Link
  href="/appointment"
  className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition"
>
  Book Appointment
</Link>
      </div>
    </header>
  );
}