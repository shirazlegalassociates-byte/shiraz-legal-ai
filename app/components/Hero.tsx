import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            AI Powered Legal Services
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Shiraz Legal
            <span className="text-yellow-400"> Associates</span>
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-8">
            Professional legal guidance for Pakistani law.
            Get instant AI assistance or book an appointment
            with our legal experts.
          </p>

          <div className="flex gap-5 mt-10">

           <div className="flex gap-5 mt-10">

  <Link
    href="/appointment"
    className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
  >
    Book Appointment
  </Link>

  <a
    href="#ai"
    className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition"
  >
    Ask AI
  </a>

</div>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <Image 
            src="/images/hero.jpg"
            alt="Shiraz Legal Associates"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl object-cover w-full h-[520px]"
            priority
          />
<div className="grid grid-cols-3 gap-4 mt-8">

  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-400">6+</h3>
    <p className="text-sm text-gray-200">Years Experience</p>
  </div>

  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-400">8+</h3>
    <p className="text-sm text-gray-200">Practice Areas</p>
  </div>

  <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
    <p className="text-sm text-gray-200">AI Assistance</p>
  </div>

</div>
        </div>

      </div>
    </section>
  );
}