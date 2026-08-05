"use client";

import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section className="py-20 bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={500} duration={3} />+
            </h2>
            <p className="mt-3 text-gray-300">
              Cases Resolved
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={1000} duration={3} />+
            </h2>
            <p className="mt-3 text-gray-300">
              Happy Clients
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={12} duration={3} />+
            </h2>
            <p className="mt-3 text-gray-300">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={95} duration={3} />%
            </h2>
            <p className="mt-3 text-gray-300">
              Success Rate
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}