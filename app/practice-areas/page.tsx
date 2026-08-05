import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";

const practiceAreas = [
  {
    title: "Civil Law",
    image: "/images/practice/civil-law.jpg",
    description:
      "Representation in civil disputes, recovery suits, injunctions and property matters.",
  },
  {
    title: "Criminal Law",
    image: "/images/practice/criminal-law.jpg",
    description:
      "Expert legal defense in criminal cases, bail matters and trial representation.",
  },
  {
    title: "Family Law",
    image: "/images/practice/family-law.jpg",
    description:
      "Marriage, divorce, child custody, guardianship and family settlements.",
  },
  {
    title: "Corporate Law",
    image: "/images/practice/corporate-law.jpg",
    description:
      "Company registration, legal compliance, contracts and commercial advisory.",
  },
  {
    title: "Tax Law",
    image: "/images/practice/tax-law.jpg",
    description:
      "Income tax, sales tax, FBR notices, appeals and tax consultancy.",
  },
  {
    title: "Property Law",
    image: "/images/practice/property-law.jpg",
    description:
      "Sale deeds, mutations, land disputes and property documentation.",
  },
  {
    title: "Immigration Law",
    image: "/images/practice/immigration-law.jpg",
    description:
      "Visa guidance, immigration matters and overseas legal consultation.",
  },
  {
    title: "Constitutional Law",
    image: "/images/practice/constitutional-law.jpg",
    description:
      "Fundamental rights, constitutional petitions and public interest litigation.",
  },
];
export const metadata: Metadata = {
  title: "Practice Areas",

  description:
    "Explore the legal services offered by Shiraz Legal Associates including Civil Law, Criminal Law, Family Law, Corporate Law, Property Law, Tax Law and Immigration Law.",

  keywords: [
    "Practice Areas",
    "Civil Law Pakistan",
    "Criminal Lawyer Pakistan",
    "Family Lawyer Pakistan",
    "Corporate Lawyer",
    "Property Lawyer",
    "Tax Lawyer",
    "Immigration Lawyer",
    "Legal Services Pakistan",
  ],
};
export default function PracticeAreasPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Practice Areas
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Comprehensive legal services delivered by experienced advocates,
            legal consultants and AI-powered legal guidance across Pakistan.
          </p>

        </div>

      </section>

      {/* Practice Areas */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Our Legal Services
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            We provide comprehensive legal services with professionalism,
            integrity and excellence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {practiceAreas.map((area) => (

              <div
                key={area.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <Image
                  src={area.image}
                  alt={area.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {area.description}
                  </p>

                  <button className="mt-6 w-full bg-[#0B1F3A] text-white py-3 rounded-xl font-semibold hover:bg-[#123C73] transition">
                    Learn More
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Why Choose Us */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Why Choose Shiraz Legal Associates?
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14 max-w-3xl mx-auto">
            We combine legal expertise, professional ethics and modern
            technology to provide trusted legal solutions across Pakistan.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">⚖️</div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Expert Lawyers
              </h3>

              <p className="mt-4 text-gray-600">
                Experienced advocates providing practical legal solutions for
                individuals and businesses.
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">🤝</div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Client Focused
              </h3>

              <p className="mt-4 text-gray-600">
                Every client receives personalized legal advice and dedicated
                support from our legal team.
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">📑</div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Transparent Advice
              </h3>

              <p className="mt-4 text-gray-600">
                Honest legal guidance with complete transparency throughout your
                legal journey.
              </p>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">🤖</div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                AI Legal Assistant
              </h3>

              <p className="mt-4 text-gray-600">
                Get instant legal guidance anytime using our modern AI-powered
                legal assistant.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Our Legal Process */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Our Legal Process
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            A professional step-by-step process designed to achieve the best
            possible outcome for every client.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">📞</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Consultation
              </h3>

              <p className="mt-4 text-gray-600">
                We understand your legal issue and discuss possible legal
                options.
              </p>

            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">📑</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Strategy
              </h3>

              <p className="mt-4 text-gray-600">
                Our legal experts prepare a customized legal strategy for your
                matter.
              </p>

            </div>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">⚖️</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Representation
              </h3>

              <p className="mt-4 text-gray-600">
                We represent your interests with professionalism, dedication
                and strong legal advocacy.
              </p>

            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">🏆</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Resolution
              </h3>

              <p className="mt-4 text-gray-600">
                We work tirelessly to achieve the best possible outcome for
                every client.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">500+</h2>
              <p className="mt-3 text-gray-600">Cases Successfully Handled</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">12+</h2>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">1000+</h2>
              <p className="mt-3 text-gray-600">Satisfied Clients</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">24/7</h2>
              <p className="mt-3 text-gray-600">AI Legal Assistance</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Professional Legal Assistance?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Our experienced advocates are ready to provide trusted legal advice
            and representation tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}