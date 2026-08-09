import type { Metadata } from "next";
import Statistics from "./components/Statistics";
import LegalTeam from "./components/LegalTeam";
import LatestNews from "./components/LatestNews";
import PracticeAreas from "./components/home/PracticeAreas";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Shiraz Legal Associates",
  description:
    "Shiraz Legal Associates provides trusted legal services across Pakistan including Civil, Criminal, Family, Corporate, Property, Tax and Immigration Law. Book your consultation today.",
  keywords: [
    "Law Firm Pakistan",
    "Advocate Abbottabad",
    "Civil Lawyer",
    "Criminal Lawyer",
    "Family Lawyer",
    "Corporate Lawyer",
    "Property Lawyer",
    "Tax Lawyer",
    "Pakistan Legal Services",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />

      <Statistics />

      <LegalTeam />

      <LatestNews />

      <PracticeAreas />

      <AIChat />

      <Testimonials />

      <FAQ />

      <Footer />

      <WhatsAppButton />
    </>
  );
}