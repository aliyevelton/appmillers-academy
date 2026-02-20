const steps = [
  {
    number: "01",
    title: "Öyrən",
    desc: "Mentor rəhbərliyi altında, real dünya ssenarilərinə əsaslanan strukturlu dərslər. Nəzəriyyə + praktika birlikdə.",
    accent: false,
  },
  {
    number: "02",
    title: "Qur",
    desc: "Hər modul sonunda real layihə hazırlayırsınız. Portfolio üçün hazır, sənaye standartlarına uyğun işlər.",
    accent: true,
  },
  {
    number: "03",
    title: "İşə başla",
    desc: "CV hazırlığı, müsahibə simulyasiyası, iş elanı networkuna çıxış. Birinci işinizi tapmağa hazır.",
    accent: false,
  },
];

export default function LearningModel() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Tədris modeli
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground">
            3 addımda{" "}
            <span className="text-primary">karyera yolu.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative text-center lg:text-left ${
                  s.accent
                    ? "bg-primary text-primary-foreground rounded-2xl p-8 shadow-card-hover"
                    : "p-8"
                }`}
              >
                {/* Number circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg mb-6 mx-auto lg:mx-0 border-2 ${
                    s.accent
                      ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      : "bg-surface border-border text-primary"
                  }`}
                >
                  {s.number}
                </div>

                <h3
                  className={`text-2xl font-black mb-3 ${
                    s.accent ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    s.accent
                      ? "text-primary-foreground/75"
                      : "text-muted-foreground"
                  }`}
                >
                  {s.desc}
                </p>

                {/* Accent dot for non-highlighted steps */}
                {!s.accent && (
                  <div className="mt-6">
                    <div className="w-2 h-2 rounded-full bg-accent mx-auto lg:mx-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
