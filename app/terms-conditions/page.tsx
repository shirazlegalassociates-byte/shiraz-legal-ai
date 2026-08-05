import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Terms & Conditions",

  description:
    "Read the Terms and Conditions governing the use of Shiraz Legal Associates website and legal services.",

  keywords: [
    "Terms and Conditions",
    "Website Terms",
    "Legal Terms Pakistan",
    "Shiraz Legal Associates Terms",
  ],
};
export default function TermsConditionsPage() {
  return (
    <main>

      {/* Hero Section */}

      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these Terms & Conditions carefully before using the
            Shiraz Legal Associates website and legal services.
          </p>

        </div>
      </section>

      {/* Content */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Acceptance of Terms
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              By accessing or using this website, you agree to comply with
              these Terms & Conditions. If you do not agree with any part of
              these terms, please discontinue the use of our website.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Legal Information
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Information provided on this website is intended for general
              informational purposes only and should not be considered formal
              legal advice. Every legal matter is unique and requires
              consultation with a qualified advocate.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Professional Relationship
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Using this website or the AI Legal Assistant does not create an
              advocate-client relationship. Such a relationship only exists
              after formal engagement and mutual agreement.
            </p>
                        <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              AI Legal Assistant
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our AI Legal Assistant is designed to provide general guidance
              regarding Pakistani law. AI-generated responses may not always
              be complete, accurate or applicable to your specific legal
              situation. Always consult a qualified advocate before making any
              legal decision.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              User Responsibilities
            </h2>

            <ul className="list-disc pl-6 mt-6 text-gray-600 leading-8 space-y-2">
              <li>Provide accurate information when contacting us.</li>
              <li>Use this website only for lawful purposes.</li>
              <li>Do not misuse or attempt to disrupt our services.</li>
              <li>Respect applicable Pakistani laws and regulations.</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Intellectual Property
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              All content on this website, including text, graphics, logos,
              design and AI-generated material, is the property of Shiraz
              Legal Associates unless otherwise stated. Unauthorized copying
              or redistribution is prohibited.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Limitation of Liability
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Shiraz Legal Associates shall not be liable for any direct,
              indirect or consequential damages arising from the use of this
              website or reliance upon the information provided.
            </p>
                        <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Governing Law
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              These Terms & Conditions shall be governed and interpreted in
              accordance with the laws of the Islamic Republic of Pakistan.
              Any disputes shall fall under the jurisdiction of the competent
              courts of Pakistan.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Changes to These Terms
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We reserve the right to update these Terms & Conditions at any
              time without prior notice. Continued use of this website
              constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
              Contact Information
            </h2>

            <div className="mt-6 bg-blue-50 rounded-2xl p-6">

              <p className="text-gray-700">
                <strong>📍 Address:</strong><br />
                767/2B Opposite Shafique Plaza,
                Mandian Abbottabad, Pakistan
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