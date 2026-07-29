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

      {/* Hero Section */}

      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Practice Areas
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal services delivered by experienced advocates
            and legal consultants.
          </p>

        </div>
      </section>

      {/* Practice Areas */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            Our Legal Services
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            We provide expert legal services across multiple areas of law.
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
                  height={350}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {area.description}
                  </p>

                  <button className="mt-6 w-full bg-[#0B1F3A] hover:bg-blue-800 text-white py-3 rounded-xl transition">
                    Learn More
                  </button>

                </div>

              </div>

            ))}
                      </div>

        </div>

      </section>

      {/* CTA Section */}

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