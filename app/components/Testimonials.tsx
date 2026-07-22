export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Trusted legal guidance with professionalism and integrity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-yellow-500 text-xl">★★★★★</div>

            <p className="mt-4 text-gray-600">
              Shiraz Legal Associates helped me resolve my property dispute
              professionally. Their guidance was clear and effective.
            </p>

            <h3 className="mt-6 font-bold text-blue-900">
              Ahmed Khan
            </h3>

            <p className="text-gray-500 text-sm">
              Property Client
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-yellow-500 text-xl">★★★★★</div>

            <p className="mt-4 text-gray-600">
              Booking an appointment was simple, and the legal consultation
              exceeded my expectations.
            </p>

            <h3 className="mt-6 font-bold text-blue-900">
              Fatima Ali
            </h3>

            <p className="text-gray-500 text-sm">
              Family Law Client
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-yellow-500 text-xl">★★★★★</div>

            <p className="mt-4 text-gray-600">
              The AI Legal Assistant gave me useful legal information before
              I contacted the firm.
            </p>

            <h3 className="mt-6 font-bold text-blue-900">
              Bilal Ahmed
            </h3>

            <p className="text-gray-500 text-sm">
              AI Assistant User
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}