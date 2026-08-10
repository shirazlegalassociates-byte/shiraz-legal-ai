import Image from "next/image";

const lawyers = [
  {
    name: "Shahbaz Malik",
    title: "Advocate High Court",
    specialization:
      "Civil Law • Criminal Law • Corporate Law • Immigration Law",
    image: "/images/shahbaz-malik.jpeg",
  },
  {
    name: "Umer Hayyat",
    title: "Advocate High Court",
    specialization: "Family Law • Civil Law • Criminal Law",
    image: "/images/umer-hayyat.jpeg",
  },
  {
    name: "Jibran Pirzada",
    title: "Barrister",
    specialization:
      "Civil Law • Business Law • Criminal Law • Family Law",
    image: "/images/jibran-pirzada.jpeg",
  },
];

export default function LegalTeam() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-700 mb-3">
            Our Professionals
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0B1F3A]">
            Meet Our Legal Team
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            Experienced legal professionals committed to protecting your
            rights and delivering trusted legal solutions.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >

              {/* Lawyer Image */}
              <div className="relative bg-slate-100 h-[430px] overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Information */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {lawyer.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <p className="text-blue-700 font-semibold">
                    {lawyer.title}
                  </p>
                </div>

                <div className="h-px bg-gray-200 my-5" />

                <p className="text-gray-600 leading-7 text-sm">
                  {lawyer.specialization}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">

                  <a
                    href="mailto:shirazlegalassociates@gmail.com"
                    className="flex items-center justify-center border border-[#0B1F3A] text-[#0B1F3A] py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                  >
                    ✉ Email
                  </a>

                  <a
                    href="tel:+923009119583"
                    className="flex items-center justify-center border border-[#0B1F3A] text-[#0B1F3A] py-3 rounded-xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                  >
                    ☎ Call
                  </a>

                  <a
                    href="https://wa.me/923009119583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    💬 WhatsApp
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}