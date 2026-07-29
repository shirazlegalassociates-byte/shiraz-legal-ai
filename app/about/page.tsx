import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About Shiraz Legal Associates
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted Advocates & Legal Consultants providing professional legal
            services across Pakistan with integrity, expertise and innovation.
          </p>

        </div>
      </section>

      {/* About Company */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <Image
            src="/images/hero.jpg"
            alt="About Shiraz Legal Associates"
            width={700}
            height={500}
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Shiraz Legal Associates is a modern law firm committed to
              delivering professional legal services to individuals,
              businesses and organizations across Pakistan.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Our experienced legal team provides strategic legal advice,
              effective representation and innovative legal solutions in
              Civil, Criminal, Family, Corporate, Tax and Property matters.
            </p>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To provide accessible, ethical and effective legal services while
              protecting the rights and interests of every client.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become one of Pakistan's most trusted and respected law firms
              by combining legal excellence with modern technology.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-5xl font-bold text-blue-900">9+</h2>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-5xl font-bold text-blue-900">500+</h2>
              <p className="mt-3 text-gray-600">Cases Handled</p>
            </div>

            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-5xl font-bold text-blue-900">1000+</h2>
              <p className="mt-3 text-gray-600">Satisfied Clients</p>
            </div>

            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-5xl font-bold text-blue-900">24/7</h2>
              <p className="mt-3 text-gray-600">AI Legal Assistance</p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Why Choose Us
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            We combine legal expertise, professional ethics and modern
            technology to provide the best legal services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900">
                Experienced Lawyers
              </h3>

              <p className="mt-4 text-gray-600">
                Highly qualified legal professionals with years of experience.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900">
                Client Focused
              </h3>

              <p className="mt-4 text-gray-600">
                Every client receives personalized legal advice and support.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900">
                Transparent Advice
              </h3>

              <p className="mt-4 text-gray-600">
                Honest guidance with complete transparency throughout your case.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900">
                AI Legal Assistance
              </h3>

              <p className="mt-4 text-gray-600">
                Modern AI-powered legal guidance available anytime.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="bg-[#0B1F3A] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Professional Legal Advice?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Contact our legal experts today or book an appointment online for
            trusted legal consultation.
          </p>

          <Link
            href="/appointment"
            className="inline-block mt-10 bg-yellow-400 text-black font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            Book Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}