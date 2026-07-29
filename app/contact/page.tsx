import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our experienced legal team. We are here to
            provide trusted legal advice, consultation and professional legal
            representation.
          </p>
        </div>
      </section>

      {/* Contact Information */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Contact Information
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Reach out to us through any of the following channels.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-5">📍</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">Office</h3>

              <p className="mt-4 text-gray-600">
                767/2B Opposite Shafique Plaza
                <br />
                Mandian Abbottabad
              </p>
            </div>

            {/* Phone */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-5">📞</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">Phone</h3>

              <p className="mt-4 text-gray-600">
                0315-5527144
                <br />
                0300-9119583
              </p>
            </div>

            {/* Email */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-5">✉️</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">Email</h3>

              <p className="mt-4 text-gray-600 break-all">
                shirazlegalassociates@gmail.com
              </p>
            </div>

            {/* Social */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-5">🌐</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Social Media
              </h3>

              <div className="mt-4 space-y-2">
                <a
                  href="https://www.facebook.com/share/1GYJomBRkg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:underline"
                >
                  Facebook
                </a>

                <a
                  href="https://www.linkedin.com/in/shiraz-legal-associates-35a862381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:underline"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/shirazlegalassociates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:underline"
                >
                  Instagram
                </a>

                <a
                  href="https://www.youtube.com/@ShirazLegalAssociates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:underline"
                >
                  YouTube
                </a>

                <a
                  href="https://x.com/LegalShiraz?t=JRq5ulBt-cvmYMdqEe6Gpw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:underline"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Send Us a Message
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-12">
            Fill out the form below and our legal team will get back to you as
            soon as possible.
          </p>

          <form className="bg-gray-50 shadow-xl rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />

              <select className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-800">
                <option>Select Practice Area</option>
                <option>Civil Law</option>
                <option>Criminal Law</option>
                <option>Family Law</option>
                <option>Corporate Law</option>
                <option>Tax Law</option>
                <option>Property Law</option>
                <option>Immigration Law</option>
                <option>Constitutional Law</option>
              </select>
            </div>

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl px-5 py-4 mt-6 focus:outline-none focus:ring-2 focus:ring-blue-800"
            ></textarea>

            <button
              type="submit"
              className="mt-8 w-full bg-[#0B1F3A] text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}

      <section className="pb-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Location
          </h2>

          <iframe
            src="https://www.google.com/maps?q=Mandian+Abbottabad&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Need Professional Legal Advice?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Schedule your consultation today and let our experienced legal team
            help you with confidence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Book Consultation
            </Link>

            <a
              href="tel:03155527144"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}