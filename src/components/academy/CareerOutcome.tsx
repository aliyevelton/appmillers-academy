const outcomes = [
  {
    title: "Junior Developer hazırlığı",
    desc: "Proqramın sonunda sənaye standartlarına uyğun texniki bacarıqlarla Junior Developer mövqeyinə hazır olursunuz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Portfolio layihələri",
    desc: "Hər proqramda minimum 3–5 real layihə qurursunuz ki, işə müraciət zamanı güclü bir portfolio təqdim edəsiniz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Remote iş imkanları",
    desc: "Beynəlxalq texnologiya şirkətlərindən uzaqdan iş təkliflərini qəbul etmək üçün lazım olan bacarıqları öyrənirsiniz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function CareerOutcome() {
  return (
    <section id="career" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Karyera nəticələri
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
              Kurs yox,{" "}
              <span className="text-primary">transformasiya.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Biz sizi sadəcə nəzəriyyə ilə deyil, real dünyada
              istifadəsi olan praktiki bacarıqlarla — işə hazır
              developer olaraq hazırlayırıq.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-5 border border-border">
                <p className="text-3xl font-black text-primary mb-1">85%+</p>
                <p className="text-sm text-muted-foreground font-medium">Tələbələr 6 ay ərzində işə qəbul olur</p>
              </div>
              <div className="bg-background rounded-xl p-5 border border-border">
                <p className="text-3xl font-black text-primary mb-1">3–5x</p>
                <p className="text-sm text-muted-foreground font-medium">Maaş artımı hesabat edilib</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="flex gap-5 bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {o.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
