export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-blue-200 border-t-[#0B1F3A] rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold text-[#0B1F3A]">
          Shiraz Legal Associates
        </h2>

        <p className="text-gray-500 mt-2">
          Loading...
        </p>

      </div>

    </div>
  );
}