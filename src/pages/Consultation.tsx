import { Link } from "react-router-dom";
import Navbar from "@/components/academy/Navbar";
import Footer from "@/components/academy/Footer";
import ConsultationFormCard from "@/components/academy/ConsultationFormCard";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 lg:pt-18">
        {/* Breadcrumb - same design as ProgramDetail */}
        <section className="py-4 border-b border-border bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Əsas
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Konsultasiya</span>
            </nav>
          </div>
        </section>

        {/* Page title strip - dark blue */}
        <section className="py-12 lg:py-16 bg-primary-dark border-b border-primary-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">
                  Pulsuz
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-4 leading-tight">
                Konsultasiya
              </h1>
              <p className="text-lg text-primary-foreground/85 leading-relaxed">
                Formanı doldurun, tədris mütəxəssislərimiz sizinlə əlaqə saxlayıb
                suallarınıza cavab verəcək.
              </p>
            </div>
          </div>
        </section>

        {/* Form card */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
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
