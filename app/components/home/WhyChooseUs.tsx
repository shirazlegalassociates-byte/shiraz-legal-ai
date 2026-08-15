const reasons = [
  {
    icon: "⚖️",
    title: "Experienced Legal Professionals",
    description:
      "Our legal team provides professional representation and practical legal guidance across a wide range of matters.",
  },
  {
    icon: "🇵🇰",
    title: "Pakistan-Wide Legal Services",
    description:
      "We provide trusted legal assistance for clients and businesses dealing with legal matters across Pakistan.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Legal Assistance",
    description:
      "Our AI Legal Assistant provides quick general guidance about Pakistani law and helps clients understand their legal options.",
  },
  {
    icon: "🔒",
    title: "Confidential & Client-Focused",
    description:
      "We value confidentiality, professionalism and clear communication while keeping our clients' needs at the center.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-700 mb-4">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Trusted Legal Support
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Professional legal services combined with modern technology,
            experienced advocates and a client-focused approach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-[#0B1F3A] text-3xl group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}