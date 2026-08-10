import type { Metadata } from "next";
import Footer from "../components/Footer";

async function getNews() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/legal-news`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data.articles || [];
}
export const metadata: Metadata = {
  title: "Legal News",

  description:
    "Stay updated with the latest legal news, court decisions, government regulations and legal developments in Pakistan.",

  keywords: [
    "Pakistan Legal News",
    "Supreme Court Pakistan",
    "Legal Updates",
    "Court News",
    "Law News Pakistan",
    "Shiraz Legal Associates News",
  ],
};
export default async function NewsPage() {
  const articles = await getNews();

  return (
    <>
            <section className="bg-gradient-to-r from-[#0B1F3A] via-[#123C73] to-[#1D4E89] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Legal News & Updates
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest legal developments in Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

           {articles.map((item: {
  title: string;
  description: string;
  image?: string;
  url: string;
  publishedAt: string;
  source?: { name: string };
}, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={
                    item.image ||
                    "https://placehold.co/600x400?text=Legal+News"
                  }
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{item.source?.name || "Legal News"}</span>

                    <span>
                      {item.publishedAt?.split("T")[0]}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0B1F3A]">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-4">
                    {item.description}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-[#0B1F3A] text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition"
                  >
                    Read Full Article →
                  </a>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}