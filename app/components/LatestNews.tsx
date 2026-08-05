"use client";

import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export default function LatestNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/legal-news")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
          Latest Legal News
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Stay updated with the latest legal developments in Pakistan.
        </p>

        {loading ? (
          <div className="text-center text-lg text-gray-600">
            Loading latest news...
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {articles.map((item, index) => (

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
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{item.source?.name || "Legal News"}</span>
                    <span>
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 line-clamp-3">
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
        )}

      </div>
    </section>
  );
}