import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About Us
          </h1>
        

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Trusted Legal Services with Professional Excellence
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold text-blue-900">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Shiraz Legal Associates is a professional law firm dedicated to
              delivering excellence in legal services. Founded by
              <strong> Advocate Shahbaz Malik</strong>, our firm is built on the
              core values of integrity, professionalism, and commitment to
              justice.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We provide reliable legal guidance across multiple areas of
              Pakistani law while embracing modern technology through our
              AI-powered legal assistant.
            </p>

          </div>

          <div className="bg-blue-50 rounded-3xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-blue-900">
              Our Values
            </h3>

            <ul className="mt-8 space-y-4 text-gray-700">

              <li>✔ Integrity</li>

              <li>✔ Professionalism</li>

              <li>✔ Commitment to Justice</li>

              <li>✔ Client Confidentiality</li>

              <li>✔ Excellence in Legal Services</li>

            </ul>

          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-blue-900">
              Our Vision
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To emerge as a leading law firm delivering innovative legal
              solutions with integrity and professionalism, empowering
              clients and contributing to a just society.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-blue-900">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To provide comprehensive and result-oriented legal services
              in diverse areas of law, ensuring justice, protecting rights,
              and building long-term trust with our clients.
            </p>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-blue-900 text-white text-center">
{/* Why Choose Us */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-blue-900">
      Why Choose Shiraz Legal Associates?
    </h2>

    <div className="grid md:grid-cols-4 gap-8 mt-12">

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-900">6+ Years</h3>
        <p className="mt-3 text-gray-600">Professional Legal Experience</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-900">AI Powered</h3>
        <p className="mt-3 text-gray-600">Modern Legal Assistance</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-900">Client Focused</h3>
        <p className="mt-3 text-gray-600">Personalized Legal Solutions</p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-xl font-bold text-blue-900">Trusted</h3>
        <p className="mt-3 text-gray-600">Integrity & Professionalism</p>
      </div>

    </div>
  </div>
</section>
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Need Professional Legal Assistance?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Contact Shiraz Legal Associates today or use our AI Legal
            Assistant for general legal guidance related to Pakistani law.
          </p>

         <Link
  href="/appointment"
  className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
>
  Book Appointment
</Link>
        </div>

      </section>

      <Footer />
    </>
  );
}