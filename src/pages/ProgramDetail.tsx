import { useEffect, useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/academy/Navbar";
import Footer from "@/components/academy/Footer";
import { getProgramBySlug } from "@/data/programs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SECTION_IDS = [
  { id: "about", label: "Proqram haqqında" },
  { id: "what-you-learn", label: "Nə öyrənəcəksiniz" },
  { id: "format", label: "Format və müddət" },
  { id: "outcomes", label: "Karyera nəticələri" },
  { id: "curriculum", label: "Proqram strukturu" },
  { id: "faq", label: "Tez-tez verilən suallar" },
] as const;

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState<string>("about");
  const activeSectionRef = useRef<string>("about");

  if (!program) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    document.title = `${program.title} | AppMillers IT School`;
    return () => {
      document.title = "AppMillers IT School — Qlobal Tech Təhsili Azərbaycanda";
    };
  }, [program.title]);

  useEffect(() => {
    const ids = SECTION_IDS.map((s) => s.id).filter(
      (id) => id !== "curriculum" || (program.curriculum && program.curriculum.length > 0)
    );
    const offset = 180; // pixels from top of viewport: section is "active" when its top is at or above this line

    const updateActive = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = id;
      }
      if (activeSectionRef.current !== current) {
        activeSectionRef.current = current;
        setActiveSection(current);
      }
    };

    updateActive(); // set initial
    const onScroll = () => requestAnimationFrame(updateActive);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [program.curriculum]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-14 lg:pt-18">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border bg-surface">
          <div className="container mx-auto px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Əsas
              </Link>
              <span>/</span>
              <Link to="/#proqramlar" className="hover:text-foreground transition-colors">
                Proqramlar
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{program.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="py-12 lg:py-16 bg-primary-dark border-b border-primary-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                    program.color === "accent"
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-white/15 text-primary-foreground border border-white/25"
                  }`}
                >
                  {program.tag}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent text-primary-dark border border-accent font-semibold">
                  {program.duration}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-4 leading-tight">
                {program.title}
              </h1>
              <p className="text-lg text-primary-foreground/85 leading-relaxed">
                {program.tagline}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-12 pt-4 pb-8">
          {/* Left sidebar nav */}
          <aside className="lg:w-56 shrink-0 order-2 lg:order-1 pt-8 lg:pt-10">
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-2xl border border-border bg-card shadow-sm p-4">
                <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {SECTION_IDS.filter(
                    (s) => s.id !== "curriculum" || (program.curriculum && program.curriculum.length > 0)
                  ).map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                        activeSection === s.id
                          ? "bg-accent/10 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div>
                <Link
                  to="/konsultasiya"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-accent hover:text-white border-2 border-primary hover:border-accent transition-colors shadow-md text-sm"
                >
                  Konsultasiya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-0">
        {/* About */}
        <section id="about" className="py-8 lg:py-10 bg-surface scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6">
              Proqram haqqında
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {program.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* What you'll learn */}
        <section id="what-you-learn" className="py-8 lg:py-10 bg-surface scroll-mt-28">
          <div>
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-2 accent-underline inline-block">
                Nə öyrənəcəksiniz
              </h2>
              <p className="text-muted-foreground">Əsas mövzular və bacarıqlar.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
              {program.whatYouLearn.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-background border border-border px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration & format */}
        <section id="format" className="py-8 lg:py-10 bg-surface scroll-mt-28">
          <div>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6">
                Format və müddət
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {program.format.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcomes" className="py-8 lg:py-10 bg-surface scroll-mt-28">
          <div>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6 accent-underline inline-block">
                Karyera nəticələri
              </h2>
              <p className="text-muted-foreground mb-6">
                Proqramı bitirdikdən sonra bu vəzifələrə hazır ola bilərsiniz.
              </p>
              <div className="flex flex-wrap gap-2">
                {program.outcomes.map((o) => (
                  <span
                    key={o}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-primary-light text-primary font-semibold text-sm border border-primary/20"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        {program.curriculum && program.curriculum.length > 0 && (
          <section id="curriculum" className="py-8 lg:py-10 bg-surface scroll-mt-28">
            <div>
              <div className="max-w-3xl">
                <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6">
                  Proqram strukturu
                </h2>
                <div className="space-y-6">
                  {program.curriculum.map((mod, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <h3 className="font-bold text-foreground mb-3">{mod.title}</h3>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {mod.topics.map((t, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" className="py-8 lg:py-10 bg-surface scroll-mt-28">
          <div>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-8">
                Tez-tez verilən suallar
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {program.faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-xl border border-border bg-background px-4"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

          </div>
        </div>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-primary-dark">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-black text-primary-foreground mb-4">
              Bu proqramla başlamağa hazırsınız?
            </h2>
            <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
              Pulsuz konsultasiya üçün müraciət edin — suallarınıza cavab verəcəyik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/konsultasiya"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors shadow-md"
              >
                Konsultasiya
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/#proqramlar"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 text-primary-foreground font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Proqramlara qayıt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
