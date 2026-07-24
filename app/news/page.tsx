export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-100 pt-32">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-blue-900">
          News & Updates
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Stay updated with the latest legal developments in Pakistan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold">💰 FBR Updates</h2>
            <p className="mt-3 text-gray-600">
              Latest tax notifications, income tax and sales tax updates.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold">⚖ Supreme Court</h2>
            <p className="mt-3 text-gray-600">
              Important judgments and constitutional cases.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold">📜 New Laws</h2>
            <p className="mt-3 text-gray-600">
              Acts, Ordinances and Government Notifications.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}