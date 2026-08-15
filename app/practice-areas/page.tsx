import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#07182D] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#123C73] to-[#07182D]" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-32 text-center">
          <span className="inline-block text-yellow-400 text-sm font-bold tracking-[0.25em] uppercase mb-5">
            Legal Expertise
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Practice Areas
          </h1>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-7 rounded-full" />

          <p className="mt-7 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Comprehensive legal services delivered with professional
            expertise, integrity and a commitment to protecting our clients'
            interests across Pakistan.
          </p>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">
              Our Expertise
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] mt-3">
              Our Legal Services
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Our legal professionals provide focused representation and
              practical solutions across a broad range of legal matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/80 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-yellow-400 text-[#0B1F3A] flex items-center justify-center font-bold text-sm shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-blue-700 transition">
                    {area.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-yellow-400 mt-4" />

                  <p className="text-gray-600 mt-5 leading-7 text-sm">
                    {area.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 text-[#0B1F3A] font-bold text-sm hover:text-blue-700 transition"
                  >
                    Discuss Your Matter
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">
              Why Shiraz Legal Associates
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] mt-3">
              A Modern Approach to Legal Services
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              We combine professional legal expertise, ethical practice and
              modern technology to deliver dependable legal solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {[
              {
                icon: "⚖️",
                title: "Expert Lawyers",
                text: "Experienced advocates providing practical legal solutions for individuals and businesses.",
              },
              {
                icon: "🤝",
                title: "Client Focused",
                text: "Every client receives personalized attention and dedicated support.",
              },
              {
                icon: "📑",
                title: "Transparent Advice",
                text: "Clear and honest legal guidance throughout your legal journey.",
              },
              {
                icon: "AI",
                title: "AI Legal Assistant",
                text: "Modern AI-powered assistance providing instant general legal guidance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F0F5FA] flex items-center justify-center text-3xl mb-6 group-hover:bg-[#0B1F3A] transition">
                  {item.icon === "AI" ? (
                    <span className="text-lg font-extrabold text-blue-700 group-hover:text-yellow-400">
                      AI
                    </span>
                  ) : (
                    item.icon
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEGAL PROCESS ================= */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 text-sm font-bold tracking-[0.2em] uppercase">
              How We Work
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] mt-3">
              Our Legal Process
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-8">
              A structured and professional approach designed around your
              legal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {[
              {
                number: "01",
                icon: "📞",
                title: "Consultation",
                text: "We understand your legal issue and discuss possible legal options.",
              },
              {
                number: "02",
                icon: "📑",
                title: "Strategy",
                text: "Our legal experts prepare a customized strategy for your matter.",
              },
              {
                number: "03",
                icon: "⚖️",
                title: "Representation",
                text: "We represent your interests with professionalism and strong advocacy.",
              },
              {
                number: "04",
                icon: "🏆",
                title: "Resolution",
                text: "We work diligently toward the best possible outcome for your matter.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute top-6 right-7 text-5xl font-extrabold text-gray-100">
                  {step.number}
                </span>

                <div className="text-4xl mb-6">{step.icon}</div>

                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              ["500+", "Cases Successfully Handled"],
              ["12+", "Years Experience"],
              ["1000+", "Satisfied Clients"],
              ["24/7", "AI Legal Assistance"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="text-center border-r last:border-r-0 border-white/10 px-4"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-yellow-400">
                  {number}
                </div>

                <p className="mt-3 text-blue-100 text-sm lg:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#123C73] to-[#07182D] text-white py-24">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <span className="text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase">
            Need Legal Assistance?
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Let Our Legal Team Help You
          </h2>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Speak with our legal professionals and receive guidance tailored
            to your legal requirements.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/appointment"
              className="bg-yellow-400 text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              Contact Our Firm
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}