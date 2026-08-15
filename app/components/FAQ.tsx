"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you provide free legal consultation?",
    answer:
      "Initial guidance may be available, but detailed legal advice requires a formal consultation with our legal experts.",
  },
  {
    question: "Can the AI Assistant replace a lawyer?",
    answer:
      "No. The AI Assistant provides general information about Pakistani law. It does not replace professional legal advice from a qualified advocate.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book a consultation through our Book Consultation page or contact our office directly.",
  },
  {
    question: "What areas of law do you handle?",
    answer:
      "Our legal team handles Civil, Criminal, Family, Corporate, Property, Tax, Immigration and Constitutional Law matters.",
  },
  {
    question: "Do you handle cases across Pakistan?",
    answer:
      "Yes. Shiraz Legal Associates provides legal consultation and representation for clients across Pakistan, subject to the nature and jurisdiction of the matter.",
  },
  {
    question: "How does the AI Legal Assistant work?",
    answer:
      "Our AI Legal Assistant provides general information and preliminary guidance relating to Pakistani law. For specific legal advice, clients should consult a qualified advocate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
            Legal Information
          </span>

          <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our legal services,
            consultations and AI-powered legal assistance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left px-6 py-5 bg-gray-50 hover:bg-gray-100 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0B1F3A] text-lg pr-6">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-blue-700 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Need specific legal assistance?
          </p>

          <a
            href="/appointment"
            className="inline-block mt-3 bg-[#0B1F3A] text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </section>
  );
}