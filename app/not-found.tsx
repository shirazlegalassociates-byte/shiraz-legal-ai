import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="max-w-3xl text-center">

        <Image
          src="/images/logo.png"
          alt="Shiraz Legal Associates"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />

        <h1 className="text-8xl font-extrabold text-[#0B1F3A]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-[#0B1F3A]">
          Page Not Found
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Sorry, the page you are looking for doesn't exist,
          has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Link
            href="/"
            className="bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="border-2 border-[#0B1F3A] text-[#0B1F3A] px-8 py-4 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}