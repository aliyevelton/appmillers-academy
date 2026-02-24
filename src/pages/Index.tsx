import { useEffect } from "react";
import Navbar from "@/components/academy/Navbar";
import Hero from "@/components/academy/Hero";
import TrustBar from "@/components/academy/TrustBar";
import Programs from "@/components/academy/Programs";
import CareerOutcome from "@/components/academy/CareerOutcome";
import LearningModel from "@/components/academy/LearningModel";
import Testimonials from "@/components/academy/Testimonials";
import FinalCTA from "@/components/academy/FinalCTA";
import ContactForm from "@/components/academy/ContactForm";
import Footer from "@/components/academy/Footer";

const Index = () => {
  useEffect(() => {
    if (window.location.hash !== "#programs") return;
    const scrollToPrograms = () => {
      const el = document.getElementById("programs");
      if (!el) return;
      const navOffset = 24; // small gap below navbar
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    const t = setTimeout(scrollToPrograms, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Programs />
        <CareerOutcome />
        <LearningModel />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
