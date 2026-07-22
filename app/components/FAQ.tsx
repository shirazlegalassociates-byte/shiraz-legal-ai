export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Find answers to common legal questions.
        </p>

        <div className="mt-12 space-y-6">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-900">
              Do you provide free legal consultation?
            </h3>
            <p className="mt-3 text-gray-600">
              Initial guidance may be available, but detailed legal advice
              requires a formal consultation with our legal experts.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-900">
              Can the AI Assistant replace a lawyer?
            </h3>
            <p className="mt-3 text-gray-600">
              No. The AI Assistant provides general information about
              Pakistani law. It does not replace professional legal advice.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-900">
              How can I book an appointment?
            </h3>
            <p className="mt-3 text-gray-600">
              You can use the Book Appointment page to schedule a meeting
              with our legal team.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}