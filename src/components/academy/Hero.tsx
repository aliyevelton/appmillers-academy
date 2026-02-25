import { publicUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-0 py-8 pt-20 lg:min-h-screen lg:py-0 lg:pt-16 lg:flex lg:items-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center min-h-0 lg:min-h-[80vh]">
          {/* Left Content - centered when card is hidden */}
          <div className="flex flex-col gap-8 items-center text-center max-w-3xl lg:max-w-5xl mx-auto">
            {/* Badge */}
            <div className="slide-up inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary/20 lg:mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Udemy Bestseller · 200,000+ Tələbə
              </span>
            </div>

            {/* Headline */}
            <div className="slide-up-delay-1">
              {/* Mobile: original 3-line, text-5xl */}
              <h1 className="lg:hidden text-5xl text-foreground text-balance leading-[1.05]">
                Qlobal bestseller{" "}
                <span className="text-primary">tədris proqramları</span>{" "}
                artıq Azərbaycanda.
              </h1>
              {/* Desktop: 2-line, larger size */}
              <h1 className="hidden lg:block text-[3.5rem] xl:text-[4.25rem] text-foreground text-balance leading-[1.05]">
                Qlobal bestseller{" "}
                <span className="text-primary">tədris</span>
                <br />
                <span className="text-primary">proqramları</span> artıq Azərbaycanda.
              </h1>
            </div>

            {/* Subtext */}
            <p className="slide-up-delay-2 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto">
              200.000+ tələbənin etibar etdiyi kurslar, real layihə
              əsaslı təlim və sənaye standartlarına uyğun karyera
              proqramları indi əyani olaraq Bakıda.
            </p>

            {/* CTAs */}
            <div className="slide-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#proqramlar"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base border border-transparent hover:bg-background hover:text-primary hover:border-primary transition-colors duration-200 shadow-sm"
              >
                Proqramlara Bax
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-base hover:border-primary hover:text-primary transition-colors duration-200 bg-background"
              >
                <span className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M3 2L8 5L3 8V2Z" fill="hsl(207, 48%, 45%)" />
                  </svg>
                </span>
                Konsultasiya
              </a>
            </div>

            {/* Trust line */}
            <div className="slide-up-delay-4 flex items-center justify-center gap-6 pt-5 pb-4 lg:pb-12 border-t border-border w-full">
              <div className="flex -space-x-2">
                {[
                  "bg-primary",
                  "bg-accent",
                  "bg-primary-dark",
                  "bg-muted-foreground",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-background ${c} flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Dünya üzrə 200,000+ tələbə
                </p>
              </div>
            </div>
          </div>

          {/* Right - Instructor stats card (hidden for now; remove "hidden" to show again) */}
          <div className="hidden relative fade-in mt-10 lg:mt-0 overflow-visible">
            <div className="relative bg-card rounded-2xl border border-border shadow-card-hover pt-20 pb-6 px-6 lg:pt-8 lg:pb-8 lg:px-8 max-w-md mx-auto overflow-visible">
              {/* Bestseller badge: mobile = top center half overflow; desktop = top right corner overflow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-0 lg:right-0 lg:left-auto lg:translate-x-1/2 lg:-translate-y-1/2 lg:top-3 lg:right-5 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-lg ring-2 ring-amber-600/40 ring-inset z-10"
                style={{
                  background: "linear-gradient(145deg, #e8c547 0%, #c9a227 40%, #b8860b 100%)",
                  boxShadow: "0 4px 14px rgba(184, 134, 11, 0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.15)",
                }}
              >
                {[...Array(10)].map((_, i) => {
                  const angle = (360 / 10) * i;
                  const onLeft = angle >= 60 && angle <= 120;
                  const onRight = angle >= 240 && angle <= 300;
                  if (onLeft || onRight) return null;
                  return (
                    <span
                      key={i}
                      className="absolute left-1/2 top-1/2 w-2.5 h-2.5 text-amber-900 pointer-events-none"
                      style={{
                        marginLeft: "-0.375rem",
                        marginTop: "-0.375rem",
                        transform: `rotate(${angle}deg) translateY(-2.4rem)`,
                      }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </span>
                  );
                })}
                <span className="font-black text-amber-900 text-sm leading-tight uppercase tracking-tight relative z-10">
                  Bestseller
                </span>
                <span className="font-normal text-amber-900 text-sm leading-tight uppercase tracking-tight relative z-10">
                  Courses
                </span>
              </div>
              <a
                href="https://www.udemy.com/user/elshad-karimov/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <p className="text-center font-bold text-foreground text-xl mb-5">Elshad Karimov</p>
                <div className="flex justify-center mb-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-muted border-2 border-border flex items-center justify-center relative mx-auto">
                    <img
                      src={publicUrl("elshad-karimov.png")}
                      alt="Elshad Karimov"
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove("hidden");
                      }}
                    />
                    <span className="hidden absolute inset-0 flex items-center justify-center text-3xl font-bold text-muted-foreground" aria-hidden>
                      <span>EK</span>
                    </span>
                  </div>
                </div>
              </a>
              <p className="text-center text-base text-muted-foreground mb-5">7 Courses</p>
              <div className="h-px bg-border mb-5" />
              <div className="grid grid-cols-3 gap-5">
                <div className="text-center">
                  <div className="flex justify-center mb-1.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <p className="font-bold text-foreground text-xl">4.5</p>
                  <p className="text-sm text-muted-foreground">Instructor Rating</p>
                </div>
                <div className="text-center border-x border-border">
                  <div className="flex justify-center mb-1.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p className="font-bold text-foreground text-xl">21,074</p>
                  <p className="text-sm text-muted-foreground">Reviews</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="font-bold text-foreground text-xl">196,023</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
