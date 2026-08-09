import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Adv. Shahbaz Malik",
    designation: "Founder & Senior Advocate",
    qualification: "MSc, LLB",
    experience: "12+ Years",
    image: "/images/shahbaz-malik.jpeg",
    expertise:
      "Corporate Law, Criminal Law, Civil Litigation and Family Law.",
    email: "shirazlegalassociates@gmail.com.com",
    phone: "+92 300 9119583",
  },
  {
    name: "Umer Hayyat",
    designation: "Associate Advocate",
    qualification: "LLB",
    experience: "7+ Years",
    image: "/images/umer-hayyat.jpeg",
    expertise:
      "Civil Law, Criminal Law, Family Law and Legal Consultancy.",
    email: "shirazlegalassociates@gmail.com",
    phone: "+92 300 9119583",
  },
  {
    name: "Jibran Pirzada",
    designation: "Barrister",
    qualification: "LLB, LLM (London)",
    experience: "9+ Years",
    image: "/images/jibran-pirzada.jpeg",
    expertise:
      "Human Rights, Constitutional Law, Tax Law and Civil Litigation.",
    email: "shirazlegalassociates@gmail.com",
    phone: "+92 300 9119583",
  },
];
export const metadata: Metadata = {
  title: "Our Team",

  description:
    "Meet the experienced advocates and legal consultants at Shiraz Legal Associates. Our dedicated legal professionals provide trusted legal services across Pakistan.",

  keywords: [
    "Our Team",
    "Lawyers Pakistan",
    "Advocates Abbottabad",
    "Legal Consultants",
    "Experienced Lawyers",
    "Shiraz Legal Associates Team",
  ],
};
export default function TeamPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Meet Our Legal Team
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Our experienced advocates and legal consultants are committed to
            delivering trusted legal services with professionalism, integrity
            and dedication across Pakistan.
          </p>

        </div>

      </section>

      {/* Team Members */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Experienced Legal Professionals
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Meet the professionals behind Shiraz Legal Associates.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {teamMembers.map((member) => (

              <div
                key={member.name}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden"
              >

                <div className="p-8 text-center">

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="w-44 h-44 rounded-full mx-auto object-cover object-top border-4 border-[#123C73] shadow-lg"
                  />

                  <h2 className="text-2xl font-bold text-[#0B1F3A] mt-6">
                    {member.name}
                  </h2>

                  <p className="text-blue-700 font-semibold mt-2">
                    {member.designation}
                  </p>

                  <div className="mt-5 space-y-2 text-gray-600">

                    <p>
                      <strong>Qualification:</strong>{" "}
                      {member.qualification}
                    </p>

                    <p>
                      <strong>Experience:</strong>{" "}
                      {member.experience}
                    </p>

                  </div>

                  <p className="mt-6 text-gray-600 leading-7">
                    {member.expertise}
                  </p>
                                    {/* Action Buttons */}

                  <div className="grid grid-cols-2 gap-3 mt-6">
  <a
    href="mailto:shirazlegalassociates@gmail.com"
    className="bg-[#0B1F3A] text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition text-center"
  >
    📧 Email
  </a>

  <a
    href="tel:+923009119583"
    className="bg-[#0B1F3A] text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition text-center"
  >
    📞 Call
  </a>

  <a
    href="https://wa.me/923009119583"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition text-center col-span-2"
  >
    💬 WhatsApp
  </a>
</div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* About Our Team */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#0B1F3A]">
            Associates & Legal Experts
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Our legal team consists of highly qualified advocates,
            consultants and legal researchers who work together to
            provide practical, ethical and result-oriented legal
            solutions. Whether you require legal advice, litigation,
            corporate consultancy or dispute resolution, our team is
            committed to protecting your rights with professionalism
            and complete confidentiality.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">500+</h2>
              <p className="mt-3 text-gray-600">
                Cases Successfully Handled
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">12+</h2>
              <p className="mt-3 text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">1000+</h2>
              <p className="mt-3 text-gray-600">
                Satisfied Clients
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <h2 className="text-5xl font-bold text-[#0B1F3A]">24/7</h2>
              <p className="mt-3 text-gray-600">
                AI Legal Assistance
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* Call To Action */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Professional Legal Advice?
          </h2>

          <p className="mt-6 text-xl text-blue-100 leading-8">
            Our experienced legal team is ready to assist you with trusted legal
            consultation, litigation support and professional legal guidance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition duration-300"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition duration-300"
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