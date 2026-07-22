"use client";

import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <AIChat />

      <Testimonials />

      <FAQ />

      <Footer />

      <WhatsAppButton />
      
    </>
  );
}