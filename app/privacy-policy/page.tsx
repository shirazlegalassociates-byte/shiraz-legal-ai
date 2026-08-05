import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Read the Privacy Policy of Shiraz Legal Associates to understand how we collect, use, protect, and manage your personal information.",

  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Legal Website Privacy",
    "Pakistan Privacy Policy",
    "Shiraz Legal Associates Privacy",
  ],
};
export default function PrivacyPolicyPage() {
  return (
    <main>

      {/* Hero Section */}

      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to Shiraz Legal Associates. This Privacy
            Policy explains how we collect, use and protect your information.
          </p>

        </div>
      </section>

      {/* Content */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Information We Collect
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We may collect personal information such as your name, email
              address, phone number and any information you voluntarily provide
              through our contact forms, appointment requests or AI Legal
              Assistant.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 mt-6 text-gray-600 leading-8 space-y-2">
              <li>To respond to your legal inquiries.</li>
              <li>To schedule consultations and appointments.</li>
              <li>To improve our legal services.</li>
              <li>To communicate important updates.</li>
            </ul>
                        <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Data Protection
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, disclosure,
              alteration or destruction. However, no method of electronic
              storage or transmission over the internet is completely secure.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              AI Legal Assistant Disclaimer
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our AI Legal Assistant provides general information related to
              Pakistani law. It does not constitute legal advice and should not
              replace consultation with a qualified advocate. Always seek
              professional legal advice for your specific legal matter.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Third-Party Services
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our website may use trusted third-party services such as EmailJS,
              OpenRouter AI and analytics providers to improve functionality.
              These services have their own privacy policies governing the use
              of your information.
            </p>
                        <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We may update this Privacy Policy from time to time to reflect
              changes in our legal services, technology or applicable laws.
              Any updates will be published on this page.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Contact Us
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              If you have any questions regarding this Privacy Policy, please
              contact Shiraz Legal Associates.
            </p>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6">
              <p className="text-gray-700">
                <strong>📍 Address:</strong><br />
                767/2B Opposite Shafique Plaza, Mandian Abbottabad
              </p>

              <p className="mt-4 text-gray-700">
                <strong>📞 Phone:</strong><br />
                0315-5527144<br />
                0300-9119583
              </p>

              <p className="mt-4 text-gray-700">
                <strong>✉️ Email:</strong><br />
                shirazlegalassociates@gmail.com
              </p>
            </div>

            <div className="mt-12 text-center">

              <Link
                href="/contact"
                className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}