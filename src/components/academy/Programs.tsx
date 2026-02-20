const programs = [
  {
    id: "01",
    title: "Frontend Development",
    tag: "Ən populyar",
    duration: "6 ay",
    description:
      "HTML, CSS, JavaScript, React.js. Müasir interfeys dizaynından başlayaraq tam layihə qurma bacarıqları.",
    outcomes: ["React Developer", "UI Engineer", "Freelancer"],
    color: "primary",
  },
  {
    id: "02",
    title: "Backend Development",
    tag: "Yüksək tələb",
    duration: "7 ay",
    description:
      "Node.js, Express, verilənlər bazaları, API dizaynı. Server tərəfi məntiqdən mikroservis arxitekturasına qədər.",
    outcomes: ["Backend Developer", "Full-Stack", "API Engineer"],
    color: "accent",
  },
  {
    id: "03",
    title: "Data & AI",
    tag: "Gələcəyin sahəsi",
    duration: "8 ay",
    description:
      "Python, Machine Learning, Data Analysis. Məlumat analitikasından süni intellekt modellərinin qurulmasına.",
    outcomes: ["Data Analyst", "ML Engineer", "AI Developer"],
    color: "primary",
  },
  {
    id: "04",
    title: "Cybersecurity",
    tag: "Kritik sahə",
    duration: "6 ay",
    description:
      "Şəbəkə təhlükəsizliyi, etik hacking, sistem auditləri. Real ssenarilərlə müdafiə bacarıqları.",
    outcomes: ["Security Analyst", "Pen Tester", "SOC Analyst"],
    color: "primary",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Proqramlar
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-4">
            Karyeranı qur,<br />
            <span className="text-primary">sənaye standartında.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hər proqram real layihələr, mentor dəstəyi və işə qəbul
            hazırlığı ilə birlikdə hazırlanıb.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.id}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-black text-foreground/[0.06] select-none leading-none">
                  {p.id}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                      p.color === "accent"
                        ? "bg-accent/10 text-accent-foreground border border-accent/20"
                        : "bg-primary-light text-primary border border-primary/20"
                    }`}
                  >
                    {p.color === "accent" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    )}
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Title & duration */}
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {p.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2">
                {p.outcomes.map((o) => (
                  <span
                    key={o}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface border border-border text-foreground/70"
                  >
                    {o}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 7h8M7 3l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Bütün proqramları gör
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
