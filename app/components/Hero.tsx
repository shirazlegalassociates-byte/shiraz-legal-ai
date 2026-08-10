import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#071A33] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>

              <span className="text-sm font-semibold tracking-wide text-gray-200">
                AI-POWERED LEGAL SERVICES
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-7 leading-[1.05] tracking-tight">
              Trusted Legal Counsel.
              <br />

              <span className="text-yellow-400">
                Strategic Representation.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-300 leading-8 max-w-2xl">
              Shiraz Legal Associates provides professional legal
              representation and trusted guidance across Pakistan,
              supported by modern AI-powered legal assistance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="mailto:shirazlegalassociates@gmail.com"
                className="bg-yellow-400 text-[#071A33] px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition shadow-lg"
              >
                Book a Consultation
              </a>

              <a
                href="#ai"
                className="border border-white/30 bg-white/5 px-8 py-4 rounded-xl font-semibold text-center hover:bg-white hover:text-[#071A33] transition"
              >
                Ask AI Legal Assistant
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">

              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  8+
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Practice Areas
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  24/7
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  AI Assistance
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-yellow-400">
                  Pakistan & International
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Legal Focus
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="absolute -inset-4 bg-yellow-400/10 rounded-[2rem] blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">

              <Image
                src="/images/hero.jpg"
                alt="Shiraz Legal Associates"
                width={700}
                height={700}
                className="w-full h-[500px] lg:h-[620px] object-cover"
                priority
              />

              {/* Image Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/70 to-transparent p-8 pt-24">

                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-semibold">
                  Shiraz Legal Associates
                </p>

                <p className="text-xl font-bold mt-2">
                  Professional Legal Representation
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}