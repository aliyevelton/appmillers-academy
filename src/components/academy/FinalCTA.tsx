export default function FinalCTA() {
  return (
    <section id="demo" className="py-28 bg-dark relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--dark-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dark-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-foreground/10 bg-dark-foreground/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-dark-muted uppercase tracking-widest">
              Məhdud yer qalıb — İlk qrup başlayır
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl lg:text-6xl text-dark-foreground mb-6 leading-[1.05]">
            Karyeranı{" "}
            <span className="text-primary">bu gündən</span>{" "}
            planla.
          </h2>

          <p className="text-lg text-dark-muted mb-10 leading-relaxed max-w-xl mx-auto">
            Demo dərsə yazılın — pulsuz, öhdəliksiz. 200,000+
            tələbənin seçdiyi sistemin ilk dərsinə qoşulun.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@appmillers.az"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            >
              Konsultasiya
            </a>
            <a
              href="#proqramlar"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-dark-foreground/30 text-dark-foreground font-semibold text-base hover:bg-dark-foreground hover:text-primary-dark transition-colors duration-200"
            >
              Proqramlara Bax
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-dark-muted text-sm">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Öhdəlik tələb etmir
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              100% Pulsuz Konsultasiya
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Sertifikatlı proqram
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
