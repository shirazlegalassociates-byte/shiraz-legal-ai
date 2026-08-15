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

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-700 mb-4">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Our Legal Services
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Comprehensive legal solutions delivered by experienced advocates
            and legal consultants across Pakistan.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />

                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                  {area.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-7 text-sm">
                  {area.description}
                </p>

                <Link
                  href="/practice-areas"
                  className="inline-flex items-center mt-5 text-[#0B1F3A] font-semibold hover:text-blue-700 transition"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/practice-areas"
            className="inline-block bg-[#0B1F3A] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            View All Legal Services
          </Link>
        </div>

      </div>
    </section>
  );
}