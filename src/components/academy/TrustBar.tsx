import ScrollRevealStagger from "@/components/ScrollRevealStagger";
import CountUp from "@/components/CountUp";

const metrics = [
  {
    value: "200,000+",
    label: "Dünya üzrə tələbə",
    countUp: true as const,
    end: 200000,
    suffix: "+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "Bestseller",
    label: "Udemy sertifikatlı",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Real layihə əsaslı",
    countUp: true as const,
    end: 100,
    suffix: "%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    value: "Karyera",
    label: "Yönümlü proqramlar",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="pt-12 pb-16 lg:pt-20 bg-surface border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollRevealStagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6" staggerMs={90}>
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                {m.icon}
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                  {"countUp" in m && m.countUp && "end" in m ? (
                    <CountUp end={m.end} suffix={m.suffix ?? "+"} duration={m.end <= 100 ? 1500 : 2200} className="tabular-nums" />
                  ) : (
                    m.value
                  )}
                </p>
                <p className="text-sm text-muted-foreground font-medium mt-0.5">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>

        {/* Udemy brand mention */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            Kurslarımız dünya platformalarında tanınıb:
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground/70 hover:text-foreground transition-colors">
              <div className="w-6 h-6 rounded bg-[#a435f0]/10 flex items-center justify-center">
                <span className="text-[#a435f0] font-black text-[10px]">U</span>
              </div>
              <span className="text-sm font-semibold">Udemy</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-xs text-muted-foreground">Qlobal texnologiya təhsili</span>
          </div>
        </div>
      </div>
    </section>
  );
}
