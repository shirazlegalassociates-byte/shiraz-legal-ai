import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shiraz Legal Associates",
    short_name: "SLA",
    description:
      "Shiraz Legal Associates - Advocates & Legal Consultants providing professional legal services across Pakistan with AI-powered legal assistance.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3A",
    theme_color: "#0B1F3A",
    orientation: "portrait",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}