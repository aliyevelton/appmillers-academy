import { Link } from "react-router-dom";
import { BookOpen, Target, Users, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Keyfiyyətli tədris",
    description: "Sənaye təcrübəsi olan mentorlar və real layihə əsaslı proqramlar.",
  },
  {
    icon: Target,
    title: "Karyera məqsədi",
    description: "Təlim sonunda işə hazırlıq, CV və müsahibə dəstəyi.",
  },
  {
    icon: Users,
    title: "Cəmiyyət",
    description: "200,000+ tələbənin bir hissəsi olun — network və dəstək.",
  },
];

export default function AboutSection() {
  return (
    <section id="haqqimizda" className="py-20 lg:py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: visual block + intro */}
          <div className="relative">
            <div className="rounded-2xl bg-primary-dark p-8 lg:p-10 text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-widest">Haqqımızda</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black leading-tight mb-4">
                Qlobal standartda tech təhsili Azərbaycanda.
              </h2>
              <p className="text-primary-foreground/85 leading-relaxed">
                AppMillers, Udemy bestseller kurslarının tədris modelini Bakıya gətirir — 
                praktiki layihələr, mentor dəstəyi və karyera hazırlığı ilə.
              </p>
            </div>
          </div>

          {/* Right: story + pillars */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-10">
              200,000-dan çox tələbənin etibar etdiyi proqramlar indi əyani və onlayn formatda 
              təklif olunur. Frontend, Backend, Data & AI və Kibertəhlükəsizlik üzrə 
              tam karyera yolları ilə sənaye tələblərinə uyğun peşəkar hazırlıq əldə edin.
            </p>
            <div className="space-y-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
            <Link
              to="/konsultasiya"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Pulsuz konsultasiya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
