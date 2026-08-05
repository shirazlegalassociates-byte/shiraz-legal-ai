"use client";
import Statistics from "./components/Statistics";
console.log("HOME ENV =", process.env.GNEWS_API_KEY);
import LegalTeam from "./components/LegalTeam";
import LatestNews from "./components/LatestNews";
import PracticeAreas from "./components/home/PracticeAreas";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <Hero />
<Statistics />
<PracticeAreas />

<LegalTeam />

<AIChat />

      <Testimonials />

     <FAQ />

<LatestNews />

      <Footer />

      <WhatsAppButton />
    </>
  );
}