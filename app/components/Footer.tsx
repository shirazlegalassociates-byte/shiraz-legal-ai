export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Shiraz Legal Associates
          </h2>

          <p className="mt-4 text-gray-300">
            Professional legal services powered by Artificial Intelligence.
            We provide general legal information related to Pakistani law.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📞 0315-5527144</p>
          <p>📞 0300-9119583</p>

          <p className="mt-3">
            ✉️ shirazlegalassociates@gmail.com
          </p>

          <p className="mt-3">
            📍 767/2B Opposite Shafique Plaza,
            Mandian Abbottabad, Pakistan
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Practice Areas
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Family Law</li>
            <li>Criminal Law</li>
            <li>Property Law</li>
            <li>Civil Law</li>
            <li>Corporate Law</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="space-y-2">

            <a
              href="https://x.com/LegalShiraz?t=JRq5ulBt-cvmYMdqEe6Gpw&s=09"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              Twitter (X)
            </a>

            <a
              href="https://www.facebook.com/share/1GYJomBRkg/"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/in/shiraz-legal-associates-35a862381"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/@ShirazLegalAssociates"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/shirazlegalassociates"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              Instagram
            </a>

            <a
              href="https://whatsapp.com/channel/0029VbBjGPVCBtxK904wTK3k"
              target="_blank"
              className="block hover:text-yellow-400"
            >
              WhatsApp Channel
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        © 2026 Shiraz Legal Associates. All Rights Reserved.

        <br />

        Powered by AI • Built with Next.js

      </div>
    </footer>
  );
}