import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Our Team</h1>

          <p className="mt-6 text-xl text-gray-200">
            Meet the dedicated legal professionals of Shiraz Legal Associates.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Shahbaz Malik */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
  src="/images/shahbaz-malik.jpg"
  alt="Advocate Shahbaz Malik"
  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-800"
/>

              <h2 className="text-2xl font-bold mt-6">
                Adv. Shahbaz Malik
              </h2>

              <p className="text-blue-800 font-semibold mt-2">
                Founder & Senior Advocate
              </p>

              <p className="mt-4 text-gray-600">
                <strong>Qualification:</strong> LLB, MSc
              </p>

              <p className="text-gray-600">
                <strong>Experience:</strong> 6+ Years
              </p>

              <p className="mt-4 text-gray-600">
                Corporate Law, Criminal Law and Family Law expert,
                leading Shiraz Legal Associates with professionalism,
                integrity and dedication.
              </p>

            </div>

            {/* Umer Hayyat */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
              
                src="https://placehold.co/200x200"
                alt="Umer Hayyat"
                className="w-40 h-40 rounded-full mx-auto"
              />

              <h2 className="text-2xl font-bold mt-6">
                Umer Hayyat
              </h2>

              <p className="text-blue-800 font-semibold mt-2">
                Associate Advocate
              </p>

              <p className="mt-4 text-gray-600">
                <strong>Qualification:</strong> LLB
              </p>

              <p className="mt-4 text-gray-600">
                Civil Law, Immigration Law and Legal Consultancy.
              </p>

            </div>

            {/* Jibran Pirzada */}
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <img
                src="https://placehold.co/200x200"
                alt="Jibran Pirzada"
                className="w-40 h-40 rounded-full mx-auto"
              />

              <h2 className="text-2xl font-bold mt-6">
                Jibran Pirzada
              </h2>

              <p className="text-blue-800 font-semibold mt-2">
                Associate Advocate
              </p>

              <p className="mt-4 text-gray-600">
                <strong>Qualification:</strong> LLB
              </p>

              <p className="mt-4 text-gray-600">
                Human Rights, Tax Law and Civil Litigation.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Team Description */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-900">
            Associates & Legal Experts
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Our team includes skilled professionals working across Civil,
            Immigration, Human Rights, Corporate, Family and Tax Law,
            providing comprehensive legal solutions tailored to our clients'
            needs. We believe in professionalism, integrity and delivering
            practical legal advice with complete confidentiality.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}