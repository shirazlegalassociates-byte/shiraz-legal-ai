import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Shiraz Legal Associates, a trusted law firm in Pakistan providing professional legal services with experienced advocates and AI-powered legal assistance.",

  keywords: [
    "About Shiraz Legal Associates",
    "Pakistan Law Firm",
    "Experienced Lawyers",
    "Legal Consultants Pakistan",
    "Advocates Abbottabad",
    "Professional Legal Services",
  ],
};
export default function AboutPage() {
  return (
    <>
      <Navbar />

    {/* Hero Section */}
<section
  className="relative pt-32 pb-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/backgrounds/about.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0B1F3A]/75"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
      About Shiraz Legal Associates
    </h1>

    <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
      Trusted Advocates & Legal Consultants providing professional legal
      services across Pakistan with integrity, expertise, innovation and
      client-focused legal solutions.
    </p>

  </div>
</section>

      {/* About Company */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/hero.jpg"
            alt="About Shiraz Legal Associates"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl object-cover"
          />

          <div>

            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Shiraz Legal Associates is a modern law firm committed to
              delivering reliable, ethical and professional legal services
              throughout Pakistan. Our experienced advocates represent
              individuals, businesses and organizations with dedication,
              confidentiality and excellence.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              We specialize in Civil, Criminal, Family, Corporate, Property,
              Tax and Immigration Law while combining legal expertise with
              innovative technology to provide practical legal solutions.
            </p>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To provide accessible, transparent and result-oriented legal
              services while protecting the rights and interests of every
              client through professionalism, integrity and dedication.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Vision
            </h3>

           <p className="mt-6 text-gray-600 leading-8">
  To become one of Pakistan&apos;s most trusted law firms by combining
  legal excellence with modern technology and delivering
  client-centered legal services across the country.
</p>

          </div>

        </div>

      </section>
            {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">12+</h2>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">500+</h2>
              <p className="mt-3 text-gray-600">Cases Resolved</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">1000+</h2>
              <p className="mt-3 text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">24/7</h2>
              <p className="mt-3 text-gray-600">AI Legal Assistance</p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Why Choose Us
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14 max-w-3xl mx-auto">
            We combine legal expertise, professional ethics and modern
            technology to provide trusted legal services tailored to every client.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Experienced Lawyers
              </h3>

              <p className="mt-4 text-gray-600">
                Highly qualified legal professionals with years of practical experience.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Client Focused
              </h3>

              <p className="mt-4 text-gray-600">
                Every client receives personalized legal advice and dedicated support.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Transparent Advice
              </h3>

              <p className="mt-4 text-gray-600">
                Honest legal guidance with complete transparency at every stage.
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                AI Legal Assistance
              </h3>

              <p className="mt-4 text-gray-600">
                Modern AI-powered legal guidance available anytime.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Professional Legal Advice?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Contact our legal experts today or book an appointment online for trusted legal consultation.
          </p>

          <Link
            href="/appointment"
            className="inline-block mt-10 bg-white text-[#0B1F3A] font-bold px-10 py-4 rounded-xl hover:bg-gray-200 transition"
          >
            Book Consultation
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}