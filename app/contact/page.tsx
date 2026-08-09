import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact Shiraz Legal Associates for professional legal advice, consultation, and representation. Visit our office in Abbottabad or schedule an appointment online.",

  keywords: [
    "Contact Shiraz Legal Associates",
    "Law Firm Abbottabad",
    "Legal Consultation Pakistan",
    "Advocate Contact",
    "Law Office Abbottabad",
    "Book Legal Consultation",
    "Pakistan Lawyers",
  ],
};
export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Contact Shiraz Legal Associates
          </h1>

          <p className="mt-6 text-xl text-blue-100 leading-8 max-w-3xl mx-auto">
            Get in touch with our experienced legal team. We are committed to
            providing trusted legal advice, professional consultation and
            effective legal representation across Pakistan.
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
            Reach us through any of the following communication channels.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Office */}

            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">📍</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Office
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                House No. 767/2B
                <br />
                Opposite Shafique Plaza
                <br />
                Mandian, Abbottabad
              </p>

            </div>

            {/* Phone */}

            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">📞</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Phone
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                +92 315 5527144
                <br />
                +92 300 9119583
              </p>

            </div>

            {/* Email */}

            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">✉️</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Email
              </h3>

              <p className="mt-4 text-gray-600 break-all">
                shirazlegalassociates@gmail.com
              </p>

            </div>

            {/* Office Hours */}

            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-5">🕒</div>

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Office Hours
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
                <br />
                Sunday Closed
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Contact Form */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Send Us a Message
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-12">
            Fill out the form below and our legal team will contact you as soon
            as possible.
          </p>

          <form className="bg-white border border-gray-100 rounded-3xl shadow-xl p-10">

            <div className="grid md:grid-cols-2 gap-6">

  {/* Full Name */}
  <div>
    <label
      htmlFor="full-name"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Full Name
    </label>

    <input
      id="full-name"
      name="name"
      type="text"
      placeholder="Full Name"
      className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
    />
  </div>

  {/* Email Address */}
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Email Address
    </label>

    <input
      id="email"
      name="email"
      type="email"
      placeholder="Email Address"
      className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
    />
  </div>

</div>

            <div className="grid md:grid-cols-2 gap-6">

  {/* Phone Number */}
  <div>
    <label
      htmlFor="phone"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Phone Number
    </label>

    <input
      id="phone"
      name="phone"
      type="text"
      placeholder="Phone Number"
      className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
    />
  </div>

  {/* Practice Area */}
  <div>
    <label
      htmlFor="practice"
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      Practice Area
    </label>

    <select
      id="practice"
      name="practice"
      className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
    >
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

</div>

           <label
  htmlFor="message"
  className="block text-sm font-semibold text-[#0B1F3A] mb-2"
>
  Message
</label>

<textarea
  id="message"
  name="message"
  rows={6}
  placeholder="Write your message..."
  className="w-full border border-gray-300 rounded-xl px-5 py-4
  focus:outline-none focus:ring-2 focus:ring-[#123C73]"
></textarea>

           <button
  type="submit"
  aria-label="Send contact message"
  className="mt-8 w-full bg-[#0B1F3A] hover:bg-[#123C73] text-white py-4 rounded-xl text-lg font-bold transition duration-300"
>
  Send Message
</button>

          </form>

        </div>

      </section>

      {/* Social Media */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Connect With Us
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Follow Shiraz Legal Associates on social media for legal updates and news.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

            <a
              href="https://www.facebook.com/share/1GYJomBRkg/"
              target="_blank"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">📘</div>
              <h3 className="font-bold text-[#0B1F3A]">Facebook</h3>
            </a>

            <a
              href="https://www.linkedin.com/in/shiraz-legal-associates-35a862381"
              target="_blank"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-bold text-[#0B1F3A]">LinkedIn</h3>
            </a>

            <a
              href="https://www.instagram.com/shirazlegalassociates"
              target="_blank"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">📷</div>
              <h3 className="font-bold text-[#0B1F3A]">Instagram</h3>
            </a>

            <a
              href="https://www.youtube.com/@ShirazLegalAssociates"
              target="_blank"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">▶️</div>
              <h3 className="font-bold text-[#0B1F3A]">YouTube</h3>
            </a>

            <a
              href="https://x.com/LegalShiraz"
              target="_blank"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">𝕏</div>
              <h3 className="font-bold text-[#0B1F3A]">X (Twitter)</h3>
            </a>

          </div>

        </div>

      </section>
            {/* Google Map */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Visit Our Office
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-10">
            We welcome you to visit our office for professional legal consultation.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps?q=Mandian+Abbottabad&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>

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
            Schedule your consultation today and let our experienced legal team
            provide trusted legal guidance tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition duration-300"
            >
              Book Consultation
            </Link>

            <a
              href="tel:03155527144"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition duration-300"
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