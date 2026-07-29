export default function LatestNews() {
  const news = [
    {
      category: "FBR",
      date: "25 July 2026",
      title: "FBR Extends Tax Return Filing Deadline",
      description:
        "The Federal Board of Revenue has extended the tax return filing deadline for individuals and businesses.",
    },
    {
      category: "Supreme Court",
      date: "24 July 2026",
      title: "New Constitutional Bench Decision",
      description:
        "The Supreme Court has issued a significant constitutional judgment affecting civil litigation.",
    },
    {
      category: "SECP",
      date: "23 July 2026",
      title: "SECP Updates Company Registration Rules",
      description:
        "SECP has introduced updated compliance requirements for company registration in Pakistan.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
          Latest Legal News
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Stay updated with the latest legal developments in Pakistan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </span>

              <p className="text-sm text-gray-500 mt-4">
                {item.date}
              </p>

              <h3 className="text-xl font-bold text-[#0B1F3A] mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.description}
              </p>

              <button className="mt-6 text-blue-700 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}