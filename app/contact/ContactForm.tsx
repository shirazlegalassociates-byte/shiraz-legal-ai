"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      matter: formData.get("matter"),
      message: formData.get("message"),
    };

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
          Get in Touch
        </p>

        <h2 className="text-3xl font-bold text-[#0B1F3A] mt-2">
          Send Us a Message
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          Tell us briefly about your legal matter. Our team will review your
          request and get back to you.
        </p>
      </div>

      {/* Success Message */}
      {submitted ? (
        <div className="rounded-2xl bg-green-50 border border-green-200 p-6">
          <h3 className="text-xl font-bold text-green-800">
            Thank you!
          </h3>

          <p className="text-green-700 mt-2">
            Your message has been sent successfully. Our team will contact
            you soon.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 bg-[#0B1F3A] hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name + Phone */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#0B1F3A] mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#0B1F3A] mb-2"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+92 300 0000000"
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="yourname@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Legal Matter */}
          <div>
            <label
              htmlFor="matter"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Legal Matter
            </label>

            <select
              id="matter"
              name="matter"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 bg-white text-gray-700 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition"
            >
              <option value="">Select a practice area</option>
              <option value="Civil Law">Civil Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Property Law">Property Law</option>
              <option value="Tax Law">Tax Law</option>
              <option value="Immigration Law">Immigration Law</option>
              <option value="Constitutional Law">
                Constitutional Law
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#0B1F3A] mb-2"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Briefly describe your legal matter..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none resize-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#0B1F3A] hover:bg-blue-800 disabled:bg-gray-500 text-white py-4 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
          >
            {sending ? "Sending Message..." : "Send Message"}
          </button>

        </form>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-5 leading-5">
        Please do not include highly confidential or time-sensitive information
        in this form. Submission does not create an advocate-client relationship.
      </p>

    </div>
  );
}