"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppointmentPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practice: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Book an Appointment
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Schedule a consultation with our legal experts.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">

          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Appointment Request Form
          </h2>

<form onSubmit={handleSubmit} className="space-y-6">
                      <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <select
              name="practice"
              value={formData.practice}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            >
              <option value="">Select Practice Area</option>
              <option value="Family Law">Family Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Civil Law">Civil Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Property Law">Property Law</option>
              <option value="Immigration Law">Immigration Law</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Tax Law">Tax Law</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Describe your legal issue..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Book Appointment"}
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}