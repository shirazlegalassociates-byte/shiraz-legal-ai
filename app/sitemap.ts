import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = "https://shiraz-legal-ai.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/practice-areas`,
    },
    {
      url: `${baseUrl}/team`,
    },
    {
      url: `${baseUrl}/news`,
    },
    {
      url: `${baseUrl}/appointment`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
    {
      url: `${baseUrl}/terms`,
    },
    {
      url: `${baseUrl}/ai-disclaimer`,
    },
  ];
}