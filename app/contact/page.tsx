import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shiraz Legal Associates for professional legal services and legal consultation in Abbottabad and across Pakistan.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm">
            Shiraz Legal Associates
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Contact Us
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            Speak with our experienced legal professionals and get trusted
            legal guidance tailored to your needs.
          </p>

        </div>
      </section>


      {/* Contact Information */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Contact Information
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-12">
            Get in touch with Shiraz Legal Associates.
          </p>


          {/* Four Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Office */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-5">
                <span className="text-2xl text-white">⌖</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Office
              </h3>

              <div className="w-10 h-1 bg-blue-700 rounded-full mt-3 mb-4"></div>

              <p className="text-gray-600 leading-7 text-sm">
                House No. 767/2B
                <br />
                Opposite Shafique Plaza
                <br />
                Mandian, Abbottabad
              </p>

            </div>


            {/* Phone */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-5">
                <span className="text-2xl text-white">☎</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Phone
              </h3>

              <div className="w-10 h-1 bg-blue-700 rounded-full mt-3 mb-4"></div>

              <div className="space-y-2 text-sm">

                <a
                  href="tel:+923155527144"
                  className="block text-gray-600 hover:text-blue-700 transition"
                >
                  +92 315 5527144
                </a>

                <a
                  href="tel:+923009119583"
                  className="block text-gray-600 hover:text-blue-700 transition"
                >
                  +92 300 9119583
                </a>

              </div>

            </div>


            {/* Email */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-5">
                <span className="text-2xl text-white">✉</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Email
              </h3>

              <div className="w-10 h-1 bg-blue-700 rounded-full mt-3 mb-4"></div>

              <a
                href="mailto:shirazlegalassociates@gmail.com"
                className="text-gray-600 hover:text-blue-700 transition text-sm break-all"
              >
                shirazlegalassociates@gmail.com
              </a>

            </div>


            {/* Office Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-5">
                <span className="text-2xl text-white">◷</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Office Hours
              </h3>

              <div className="w-10 h-1 bg-blue-700 rounded-full mt-3 mb-4"></div>

              <p className="text-gray-600 leading-7 text-sm">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
                <br />
                <span className="text-red-600 font-medium">
                  Sunday Closed
                </span>
              </p>

            </div>

          </div>


          {/* Contact Form */}
          <div className="mt-16 max-w-4xl mx-auto">
            <ContactForm />
          </div>


          {/* Map / Location */}
          <div className="mt-16 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

            <div className="p-8">

              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                Find Us
              </p>

              <h2 className="text-3xl font-bold text-[#0B1F3A] mt-2">
                Our Location
              </h2>

              <p className="text-gray-600 mt-3">
                Mandian, Abbottabad, Khyber Pakhtunkhwa, Pakistan
              </p>

            </div>

            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Mandian%20Abbottabad%20Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Shiraz Legal Associates Location"
              />
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#0B1F3A] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need Professional Legal Assistance?
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            Our legal team is ready to discuss your matter and help you
            understand your available legal options.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Book Consultation
            </Link>

            <a
              href="https://wa.me/923009119583"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}