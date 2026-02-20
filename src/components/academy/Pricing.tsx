const plans = [
  {
    name: "Standart",
    price: "299",
    period: "aylıq",
    badge: null,
    desc: "Fərdi öyrənmə sürəti ilə karyera başlanğıcı",
    features: [
      "Tam kurs materiallarına giriş",
      "Həftəlik mentor sessiyası",
      "Portfolio layihə dəstəyi",
      "Sertifikat",
      "6 aylıq karyera dəstəyi",
    ],
    cta: "Başla",
    highlight: false,
  },
  {
    name: "İntensiv",
    price: "449",
    period: "aylıq",
    badge: "Ən populyar",
    desc: "Sürətli transformasiya üçün tam mentor dəstəkli proqram",
    features: [
      "Standart planın hər şeyi",
      "Günlük mentor çatı",
      "Müsahibə hazırlığı sessiyaları",
      "İş elanı networkuna giriş",
      "12 aylıq karyera dəstəyi",
      "CV + LinkedIn optimizasiyası",
    ],
    cta: "İntensiv Başla",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Qiymətlər
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-4">
            Şəffaf{" "}
            <span className="text-primary">qiymətlər.</span>
          </h2>
          <p className="text-muted-foreground">
            Gizli ödənişlər yoxdur. Hissə-hissə ödəmə variantları mövcuddur.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border relative ${
                p.highlight
                  ? "bg-primary border-primary shadow-card-hover"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-card-hover"
              } transition-all duration-300`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground/60" />
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <p
                  className={`text-sm font-semibold tracking-wide uppercase mb-1 ${
                    p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {p.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black ${
                      p.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    ₼{p.price}
                  </span>
                  <span
                    className={`text-sm ${
                      p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    /{p.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    p.highlight ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        p.highlight ? "bg-primary-foreground/15" : "bg-primary-light"
                      }`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke={p.highlight ? "white" : "hsl(var(--primary))"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M2 5L4.5 7.5L8 3" />
                      </svg>
                    </div>
                    <span
                      className={`text-sm ${
                        p.highlight ? "text-primary-foreground/90" : "text-foreground/80"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#demo"
                className={`flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  p.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary-dark"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Scholarship note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-surface rounded-2xl border border-border p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent-foreground flex items-center justify-center shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Təqaüd proqramı mövcuddur</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Maliyyə imkanı məhdud olan istedadlı tələbələr üçün
                xüsusi təqaüd imkanları var. Əlaqə saxlayın — birlikdə
                yol tapacağıq.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
