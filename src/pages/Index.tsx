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
