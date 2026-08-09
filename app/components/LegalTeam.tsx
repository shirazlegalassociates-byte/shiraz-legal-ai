import Image from "next/image";

const lawyers = [
  {
    name: "Shahbaz Malik",
    title: "Advocate High Court",
    
    specialization: "Civil Law • Criminal Law • Corporate Law • Immigration Law",
   image: "/images/shahbaz-malik.jpeg",
  },
  {
    name: "Umer Hayyat",
    title:"Advocate High Court",

    specialization: "Family Law • Civil Law • Criminal Law",
   image: "/images/umer-hayyat.jpeg",
  },
  {
    name: "Jibran Pirzada",
    title: "Barrister",
  
    specialization: "Civil Law • Business Law • Criminal Law • Family Law",
   image: "/images/jibran-pirzada.jpeg",
  },
];

export default function LegalTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
          Meet Our Legal Team
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Experienced legal professionals committed to protecting your rights
          and delivering trusted legal solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
             <Image
  src={lawyer.image}
  alt={lawyer.name}
  width={500}
  height={500}
  className="w-full h-72 object-contain bg-slate-50 p-6"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {lawyer.name}
                </h3>

                <p className="text-blue-700 font-semibold mt-2">
                  {lawyer.title}
                </p>

                <p className="text-gray-600 mt-4">
                  {lawyer.specialization}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  
                </p>

               <button
  type="button"
  aria-label={`View profile of ${lawyer.name}`}
  className="mt-6 w-full bg-[#0B1F3A] text-white py-3 rounded-xl hover:bg-blue-800 transition"
>
  View Profile
</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}