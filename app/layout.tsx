import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiraz-legal-ai.vercel.app"),

  title: {
    default: "Shiraz Legal Associates | Advocates & Legal Consultants",
    template: "%s | Shiraz Legal Associates",
  },
verification: {
  google: "4xX2wZmqLuuGaLrA0OcZM6dUbaeFgZI-Q24XxJZZgGk",
},
  description:
    "Shiraz Legal Associates provides professional legal services across Pakistan including Civil Law, Criminal Law, Family Law, Corporate Law, Property Law, Tax Law and AI-powered legal assistance.",

  keywords: [
    "Shiraz Legal Associates",
    "Pakistan Lawyer",
    "Advocate Pakistan",
    "Legal Consultant",
    "Civil Lawyer",
    "Criminal Lawyer",
    "Family Lawyer",
    "Corporate Lawyer",
    "Property Lawyer",
    "Tax Lawyer",
    "Immigration Lawyer",
    "Abbottabad Lawyer",
    "Pakistan Law Firm",
    "Legal Services Pakistan",
    "AI Legal Assistant",
  ],

  authors: [
    {
      name: "Shiraz Legal Associates",
    },
  ],

  creator: "Shiraz Legal Associates",

  publisher: "Shiraz Legal Associates",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://shiraz-legal-ai.vercel.app",
    siteName: "Shiraz Legal Associates",

    title: "Shiraz Legal Associates",

    description:
      "Professional legal services across Pakistan with trusted advocates and AI-powered legal assistance.",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Shiraz Legal Associates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shiraz Legal Associates",

    description:
      "Professional legal services across Pakistan.",

    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Script
          id="schema-legal-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",

              name: "Shiraz Legal Associates",

              url: "https://shiraz-legal-ai.vercel.app",

              logo:
                "https://shiraz-legal-ai.vercel.app/images/logo.png",

              image:
                "https://shiraz-legal-ai.vercel.app/images/logo.png",

              description:
                "Professional legal services across Pakistan including Civil, Criminal, Family, Corporate, Property, Tax and Immigration Law.",

              telephone: "+92-315-5527144",

              email: "shirazlegalassociates@gmail.com",

              address: {
                "@type": "PostalAddress",
                streetAddress: "767/2B Opposite Shafique Plaza, Mandian",
                addressLocality: "Abbottabad",
                addressRegion: "KPK",
                postalCode: "22010",
                addressCountry: "PK",
              },

              areaServed: "Pakistan",

              priceRange: "$$",

              sameAs: [
                "https://www.facebook.com/share/1GYJomBRkg/",
                "https://www.instagram.com/shirazlegalassociates",
                "https://www.linkedin.com/in/shiraz-legal-associates-35a862381",
                "https://www.youtube.com/@ShirazLegalAssociates",
                "https://x.com/LegalShiraz",
              ],
            }),
          }}
        />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}