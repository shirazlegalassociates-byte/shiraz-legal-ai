export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Property Client",
      text: "Shiraz Legal Associates helped me resolve my property dispute professionally. Their guidance was clear, practical and effective.",
    },
    {
      name: "Fatima Ali",
      role: "Family Law Client",
      text: "Booking an appointment was simple, and the legal consultation exceeded my expectations. The team was professional and responsive.",
    },
    {
      name: "Bilal Ahmed",
      role: "AI Assistant User",
      text: "The AI Legal Assistant gave me useful general legal information before I contacted the firm. It was a helpful first step.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-700">
            Client Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Trusted legal guidance delivered with professionalism,
            integrity and a commitment to our clients.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Quote */}
              <div className="text-5xl text-blue-200 font-serif leading-none">
                “
              </div>

              {/* Stars */}
              <div className="text-yellow-500 text-lg tracking-wide mt-2">
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-5 text-gray-600 leading-7">
                {testimonial.text}
              </p>

              {/* Client */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-lg text-[#0B1F3A]">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-blue-700 font-medium mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}