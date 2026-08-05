import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              Shiraz Legal Associates
            </h2>

            <p className="mt-6 text-blue-100 leading-8">
              Professional legal services across Pakistan with integrity,
              excellence and modern AI-powered legal assistance.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-300 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/practice-areas" className="hover:text-blue-300 transition">
                  Practice Areas
                </Link>
              </li>

              <li>
                <Link href="/team" className="hover:text-blue-300 transition">
                  Our Team
                </Link>
              </li>

              <li>
                <Link href="/news" className="hover:text-blue-300 transition">
                  News
                </Link>
              </li>

              <li>
                <Link href="/appointment" className="hover:text-blue-300 transition">
                  Appointment
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-300 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>
                    {/* Practice Areas */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Practice Areas
            </h3>

            <ul className="space-y-3">

              <li>Civil Law</li>

              <li>Criminal Law</li>

              <li>Family Law</li>

              <li>Corporate Law</li>

              <li>Property Law</li>

              <li>Tax Law</li>

              <li>Immigration Law</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-blue-100">

              <p>
                📍 767/2B Opposite Shafique Plaza<br />
                Mandian Abbottabad
              </p>

              <p>
                📞 0315-5527144<br />
                0300-9119583
              </p>

              <p>
                ✉️ shirazlegalassociates@gmail.com
              </p>

            </div>

           <div className="flex gap-4 mt-8">

  <a
    href="https://www.facebook.com/share/1GYJomBRkg/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition"
  >
    <FaFacebookF size={30} color="white" />
  </a>

  <a
    href="https://www.linkedin.com/in/shiraz-legal-associates-35a862381"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/shirazlegalassociates"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition"
  >
   <FaInstagram size={30} color="white" />
  </a>

  <a
    href="https://www.youtube.com/@ShirazLegalAssociates"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition"
  >
    <FaYoutube />
  </a>

  <a
    href="https://x.com/LegalShiraz?t=JRq5ulBt-cvmYMdqEe6Gpw&s=09"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-700 flex items-center justify-center transition"
  >
    <FaXTwitter />
  </a>

</div>

          </div>

        </div>

      </div>
            {/* Bottom Bar */}

      <div className="border-t border-blue-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-blue-200 text-center md:text-left">
            © 2026 Shiraz Legal Associates. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/contact"
              className="text-blue-200 hover:text-white transition"
            >
              Contact
            </Link>

            <Link
              href="/appointment"
              className="text-blue-200 hover:text-white transition"
            >
              Book Appointment
            </Link>

            <Link
              href="/news"
              className="text-blue-200 hover:text-white transition"
            >
              Latest News
            </Link>
<Link
  href="/privacy-policy"
  className="text-blue-200 hover:text-white transition"
>
  Privacy Policy
</Link>
<Link
  href="/terms-conditions"
  className="text-blue-200 hover:text-white transition"
>
  Terms & Conditions
</Link>
<Link
  href="/ai-disclaimer"
  className="text-blue-200 hover:text-white transition"
>
  AI Disclaimer
</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}