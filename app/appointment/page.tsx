"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function AppointmentPage() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practice: "",
    consultation: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(

        "service_vxgid3q",

        "template_q6s2gsg",

        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          practice: formData.practice,
          consultation: formData.consultation,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        },

        "KeyPrUpI2KjJvMnA2"

      );

      alert("Appointment request sent successfully!");

      setFormData({

        name: "",
        phone: "",
        email: "",
        practice: "",
        consultation: "",
        date: "",
        time: "",
        message: "",

      });

    } catch (error) {

      console.error(error);

      alert("Failed to send appointment.");

    }

    setLoading(false);

  };

  return (

    <>

      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold">

            Book Your Legal Consultation

          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-8">

            Schedule a confidential consultation with our experienced legal
            professionals. We provide trusted legal advice, strategic guidance
            and professional representation across Pakistan.

          </p>

        </div>

      </section>

      {/* Appointment Form */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">

            Appointment Request

          </h2>

          <p className="text-center text-gray-600 mt-4 mb-10">

            Complete the form below and our legal team will contact you shortly.

          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1 */}

            <div className="grid md:grid-cols-2 gap-6">

              <label
  htmlFor="appointment-name"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Full Name
</label>

<input
  id="appointment-name"
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
/>

             <label
  htmlFor="appointment-phone"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Phone Number
</label>

<input
  id="appointment-phone"
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
/>

            </div>

            {/* Row 2 */}

            <div className="grid md:grid-cols-2 gap-6">

              <label
  htmlFor="appointment-email"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Email Address
</label>

<input
  id="appointment-email"
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
/>

              <label
  htmlFor="appointment-practice"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Practice Area
</label>

<select
  id="appointment-practice"
  name="practice"
  value={formData.practice}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
>
  <option value="">Select Practice Area</option>
  <option value="Civil Law">Civil Law</option>
  <option value="Criminal Law">Criminal Law</option>
  <option value="Family Law">Family Law</option>
  <option value="Corporate Law">Corporate Law</option>
  <option value="Property Law">Property Law</option>
  <option value="Immigration Law">Immigration Law</option>
  <option value="Tax Law">Tax Law</option>
  <option value="Human Rights">Human Rights</option>
  <option value="Constitutional Law">Constitutional Law</option>
</select>

            </div>

            {/* Row 3 */}

            <div className="grid md:grid-cols-2 gap-6">

             <label
  htmlFor="appointment-consultation"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Consultation Type
</label>

<select
  id="appointment-consultation"
  name="consultation"
  value={formData.consultation}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
>
  <option value="">Consultation Type</option>
  <option value="Office Visit">Office Visit</option>
  <option value="Online Meeting">Online Meeting</option>
  <option value="Phone Consultation">Phone Consultation</option>
</select>

             <label
  htmlFor="appointment-date"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Preferred Date
</label>

<input
  id="appointment-date"
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
/>

            </div>

            {/* Row 4 */}

            <div className="grid md:grid-cols-2 gap-6">

            <label
  htmlFor="appointment-time"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Preferred Time
</label>

<input
  id="appointment-time"
  type="time"
  name="time"
  value={formData.time}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
/>

              <div className="flex items-center justify-center rounded-xl bg-blue-50 border border-blue-200 p-4">
                <p className="text-[#0B1F3A] font-semibold text-center">
                  🔒 Your consultation request will remain completely confidential.
                </p>
              </div>

            </div>

           <label
  htmlFor="appointment-message"
  className="block text-sm font-semibold text-gray-700 mb-2"
>
  Legal Issue / Message
</label>

<textarea
  id="appointment-message"
  rows={6}
  name="message"
  placeholder="Briefly describe your legal issue..."
  value={formData.message}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
></textarea>

           <button
  type="submit"
  aria-label="Submit appointment booking request"
  disabled={loading}
  className="w-full bg-[#0B1F3A] hover:bg-[#123C73] text-white py-4 rounded-xl text-lg font-bold transition duration-300 disabled:opacity-50"
>
  {loading ? "Sending Appointment..." : "Book Appointment"}
</button>
                      </form>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Why Choose Shiraz Legal Associates?
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Professional legal services delivered with integrity, experience
            and complete confidentiality.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">⚖️</div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Expert Lawyers
              </h3>
              <p className="mt-4 text-gray-600">
                Experienced advocates providing trusted legal solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">🤝</div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Client Focused
              </h3>
              <p className="mt-4 text-gray-600">
                Every client receives personalized legal guidance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">🔒</div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Confidential
              </h3>
              <p className="mt-4 text-gray-600">
                Your legal matters remain completely private.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                Fast Response
              </h3>
              <p className="mt-4 text-gray-600">
                We respond quickly to appointments and legal inquiries.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-[#0B1F3A] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-5xl font-bold text-blue-400">500+</h2>
              <p className="mt-4 text-blue-100">Cases Handled</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-400">12+</h2>
              <p className="mt-4 text-blue-100">Years Experience</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-400">1000+</h2>
              <p className="mt-4 text-blue-100">Satisfied Clients</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-blue-400">24/7</h2>
              <p className="mt-4 text-blue-100">Legal Support</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Immediate Legal Assistance?
          </h2>

          <p className="mt-6 text-xl text-blue-100 leading-8">
            Contact our legal experts today for trusted legal advice and
            professional representation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <a
              href="tel:03155527144"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Call Now
            </a>

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
      <WhatsAppButton />

    </>

  );

}