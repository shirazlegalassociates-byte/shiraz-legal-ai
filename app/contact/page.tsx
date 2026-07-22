import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-xl text-gray-200">
            Get in touch with Shiraz Legal Associates.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-blue-900">
              Contact Information
            </h2>

            <div className="mt-8 space-y-5 text-gray-700">

              <p><strong>📍 Address:</strong><br />
              767/2B Opposite Shafique Plaza, Mandian Abbottabad</p>

              <p><strong>📞 Phone:</strong><br />
              0315-5527144<br />
              0300-9119583</p>

              <p><strong>📧 Email:</strong><br />
              shirazlegalassociates@gmail.com</p>

              <p><strong>🐦 X (Twitter):</strong><br />
              @LegalShiraz</p>

            </div>

          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-blue-900">
              Follow Us
            </h2>

            <div className="mt-8 space-y-4">

              <a
                href="https://www.facebook.com/share/1GYJomBRkg/"
                target="_blank"
                className="block text-blue-700 hover:underline"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/in/shiraz-legal-associates-35a862381"
                target="_blank"
                className="block text-blue-700 hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/shirazlegalassociates"
                target="_blank"
                className="block text-blue-700 hover:underline"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@ShirazLegalAssociates"
                target="_blank"
                className="block text-blue-700 hover:underline"
              >
                YouTube
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbBjGPVCBtxK904wTK3k"
                target="_blank"
                className="block text-blue-700 hover:underline"
              >
                WhatsApp Channel
              </a>
<a
  href="https://x.com/LegalShiraz?t=JRq5ulBt-cvmYMdqEe6Gpw&s=09"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-blue-700 hover:underline"
>
  X (Twitter) - @LegalShiraz
</a>
            </div>

          </div>

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

      <Footer />
    </>
  );
}