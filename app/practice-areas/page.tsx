import Link from "next/link";
import Image from "next/image";

const practiceAreas = [
  {
    title: "Civil Law",
    image: "/images/practice/civil-law.jpg",
    description:
      "Representation in civil disputes, recovery suits, injunctions and property matters.",
  },
  {
    title: "Criminal Law",
    image: "/images/practice/criminal-law.jpg",
    description:
      "Expert legal defense in criminal cases, bail matters and trial representation.",
  },
  {
    title: "Family Law",
    image: "/images/practice/family-law.jpg",
    description:
      "Marriage, divorce, child custody, guardianship and family settlements.",
  },
  {
    title: "Corporate Law",
    image: "/images/practice/corporate-law.jpg",
    description:
      "Company registration, legal compliance, contracts and commercial advisory.",
  },
  {
    title: "Tax Law",
    image: "/images/practice/tax-law.jpg",
    description:
      "Income tax, sales tax, FBR notices, appeals and tax consultancy.",
  },
  {
    title: "Property Law",
    image: "/images/practice/property-law.jpg",
    description:
      "Sale deeds, mutations, land disputes and property documentation.",
  },
  {
    title: "Immigration Law",
    image: "/images/practice/immigration-law.jpg",
    description:
      "Visa guidance, immigration matters and overseas legal consultation.",
  },
  {
    title: "Constitutional Law",
    image: "/images/practice/constitutional-law.jpg",
    description:
      "Fundamental rights, constitutional petitions and public interest litigation.",
  },
];

export default function PracticeAreasPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Practice Areas</h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal services delivered by experienced advocates and
            legal consultants.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Our Legal Services
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            We provide professional legal services across Pakistan.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {area.description}
                  </p>

                  <button className="mt-6 w-full bg-[#0B1F3A] text-white py-3 rounded-xl hover:bg-blue-800 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Why Choose Us */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
      Why Choose Shiraz Legal Associates?
    </h2>

    <p className="text-center text-gray-600 mt-4 mb-14">
      We combine legal expertise with professionalism to provide trusted legal
      solutions across Pakistan.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
        <div className="text-5xl mb-5">⚖️</div>
        <h3 className="text-xl font-bold text-[#0B1F3A]">
          Expert Lawyers
        </h3>
        <p className="text-gray-600 mt-3">
          Experienced advocates providing practical legal solutions.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
        <div className="text-5xl mb-5">🤝</div>
        <h3 className="text-xl font-bold text-[#0B1F3A]">
          Client Focused
        </h3>
        <p className="text-gray-600 mt-3">
          Every case receives personal attention and strategic planning.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
        <div className="text-5xl mb-5">📑</div>
        <h3 className="text-xl font-bold text-[#0B1F3A]">
          Transparent Advice
        </h3>
        <p className="text-gray-600 mt-3">
          Honest legal guidance with complete transparency.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center">
        <div className="text-5xl mb-5">🤖</div>
        <h3 className="text-xl font-bold text-[#0B1F3A]">
          AI Legal Assistant
        </h3>
        <p className="text-gray-600 mt-3">
          Fast legal guidance powered by modern AI technology.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Our Legal Process */}

<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
      Our Legal Process
    </h2>

    <p className="text-center text-gray-600 mt-4 mb-14">
      We follow a structured approach to deliver the best legal outcomes for our clients.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-5">📞</div>
        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          Consultation
        </h3>
        <p className="mt-4 text-gray-600">
          We carefully understand your legal issue and discuss possible solutions.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-5">📑</div>
        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          Legal Strategy
        </h3>
        <p className="mt-4 text-gray-600">
          Our legal experts prepare a customized strategy for your case.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-5">⚖️</div>
        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          Representation
        </h3>
        <p className="mt-4 text-gray-600">
          We represent your interests with professionalism and dedication.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
        <div className="text-5xl mb-5">🏆</div>
        <h3 className="text-2xl font-bold text-[#0B1F3A]">
          Resolution
        </h3>
        <p className="mt-4 text-gray-600">
          We work towards achieving the best possible outcome for every client.
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
        <p className="mt-4 text-gray-300 text-lg">
          Cases Successfully Handled
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-blue-400">9+</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Years of Legal Experience
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-blue-400">1000+</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Satisfied Clients
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-blue-400">24/7</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Legal Consultation Support
        </p>
      </div>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Need Professional Legal Assistance?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Our experienced advocates are ready to provide trusted legal advice
            and representation tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/appointment"
              className="bg-white text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}