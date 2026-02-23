const testimonials = [
  {
    name: "Elnur Həsənov",
    role: "Junior Frontend Developer @ Tech startup",
    initials: "EH",
    color: "bg-primary",
    quote:
      "AppMillers-dəki kurs məni tamamilə dəyişdirdi. 6 ay ərzində sıfırdan React Developer oldum. İndi uzaqdan işləyirəm.",
    rating: 5,
  },
  {
    name: "Aynur Quliyeva",
    role: "Data Analyst @ İT şirkəti",
    initials: "AQ",
    color: "bg-accent",
    quote:
      "Nəzəriyyə deyil, real layihələr. Hər dərsde bir şey qurursunuz. Bu fərqli bir yanaşmadır — nəticəni portfolio ilə sübut edirsiniz.",
    rating: 5,
  },
  {
    name: "Rauf Əliyev",
    role: "Backend Developer @ Remote şirkəti",
    initials: "RƏ",
    color: "bg-primary-dark",
    quote:
      "Kursun keyfiyyəti Udemy bestseller statusunu haqq edir. Mentorlar çox əlçatandır. 4 ayda ilk işimi tapdım.",
    rating: 5,
  },
];

import ScrollRevealStagger from "@/components/ScrollRevealStagger";

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Tələbə rəyləri
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Nəticəni onlar{" "}
            <span className="text-primary">danışır.</span>
          </h2>
        </div>

        {/* Cards */}
        <ScrollRevealStagger className="grid md:grid-cols-3 gap-6" staggerMs={100}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-7 border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="hsl(var(--accent))"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
