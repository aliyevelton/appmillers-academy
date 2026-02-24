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
import AboutSection from "@/components/academy/AboutSection";
import Footer from "@/components/academy/Footer";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash !== "#proqramlar" && hash !== "#haqqimizda") return;
    const id = hash.slice(1);
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const navOffset = 24;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    const t = setTimeout(scrollToSection, 150);
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
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
