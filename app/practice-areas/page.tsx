import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const practiceAreas = [
  {
    title: "Family Law",
    description:
      "Expert legal assistance in divorce, child custody, maintenance, and family disputes.",
  },
  {
    title: "Criminal Law",
    description:
      "Professional defense and representation in criminal investigations and court proceedings.",
  },
  {
    title: "Civil Law",
    description:
      "Legal solutions for civil disputes, contracts, recovery suits, and property matters.",
  },
  {
    title: "Corporate Law",
    description:
      "Business registration, company compliance, contracts, and corporate legal advisory.",
  },
  {
    title: "Property Law",
    description:
      "Property transfers, ownership disputes, documentation, and legal verification.",
  },
  {
    title: "Immigration Law",
    description:
      "Legal guidance for visas, immigration matters, and overseas legal documentation.",
  },
  {
    title: "Human Rights",
    description:
      "Protection of constitutional and fundamental rights through effective legal representation.",
  },
  {
    title: "Tax Law",
    description:
      "Tax planning, compliance, appeals, and representation before tax authorities.",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Practice Areas</h1>

          <p className="mt-6 text-xl text-gray-200">
            Comprehensive legal services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-bold text-blue-900">
                  {area.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {area.description}
                </p>

                <button className="mt-6 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}