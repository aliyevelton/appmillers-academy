import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/academy/Navbar";
import Footer from "@/components/academy/Footer";
import ConsultationFormCard from "@/components/academy/ConsultationFormCard";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-28">
        {/* Page title strip - dark blue */}
        <section className="py-12 lg:py-16 bg-primary-dark border-b border-primary-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-elaqe text-4xl lg:text-5xl font-black text-primary-foreground mb-4 leading-tight">
                Əlaqə
              </h1>
              <p className="text-lg text-primary-foreground/85 leading-relaxed">
                Bizimlə əlaqə saxlayın və ya formanı dolduraraq sizə zəng edəcəyik.
              </p>
            </div>
          </div>
        </section>

        {/* Contact info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-elaqe text-2xl font-black text-foreground mb-8 text-center">
                Əlaqə məlumatları
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="tel:+994501234567"
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <span className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <p className="text-sm text-muted-foreground mt-0.5">+994 50 123 45 67</p>
                  </div>
                </a>
                <a
                  href="mailto:info@appmillers.az"
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <span className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground mt-0.5">info@appmillers.az</p>
                  </div>
                </a>
                <div className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 sm:col-span-2 lg:col-span-1 cursor-default">
                  <span className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Ünvan</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Bakı şəhəri, Nizami küç. 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form card */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-foreground mb-8 text-center max-w-4xl mx-auto">
              Müraciət formu
            </h2>
            <ConsultationFormCard />
          </div>
        </section>

        {/* Back to home */}
        <section className="py-12 bg-surface border-t border-border">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              ← Əsas səhifəyə qayıt
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
